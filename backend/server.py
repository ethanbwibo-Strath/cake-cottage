from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone
from models.order import OrderInquiry, OrderInquiryCreate
from services.email_service import send_order_notification_email


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Order Inquiry Routes
@api_router.post("/orders")
async def create_order_inquiry(order_data: OrderInquiryCreate):
    try:
        # Create order object
        order_dict = {
            "id": str(uuid.uuid4()),
            "name": order_data.name,
            "phone": order_data.phone,
            "email": order_data.email,
            "cake_size": order_data.cakeSize,
            "flavor": order_data.flavor,
            "frosting": order_data.frosting,
            "delivery_date": order_data.deliveryDate,
            "budget": order_data.budget,
            "custom_requests": order_data.customRequests,
            "message": order_data.message,
            "status": "pending",
            "created_at": datetime.now(timezone.utc),
            "updated_at": datetime.now(timezone.utc)
        }
        
        # Save to database
        await db.order_inquiries.insert_one(order_dict)
        
        # Send email notification (non-blocking)
        try:
            send_order_notification_email(order_dict)
        except Exception as email_error:
            logger.error(f"Email notification failed: {str(email_error)}")
            # Don't fail the request if email fails
        
        return {
            "success": True,
            "message": "Order inquiry received! We'll contact you within 24 hours.",
            "order_id": order_dict["id"]
        }
    except Exception as e:
        logger.error(f"Failed to create order inquiry: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to process order inquiry")

@api_router.get("/orders")
async def get_order_inquiries():
    try:
        orders = await db.order_inquiries.find().sort("created_at", -1).to_list(1000)
        # Convert ObjectId to string for JSON serialization
        for order in orders:
            order["_id"] = str(order["_id"])
            order["created_at"] = order["created_at"].isoformat() if isinstance(order["created_at"], datetime) else order["created_at"]
            order["updated_at"] = order["updated_at"].isoformat() if isinstance(order["updated_at"], datetime) else order["updated_at"]
        return {"success": True, "orders": orders}
    except Exception as e:
        logger.error(f"Failed to fetch orders: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch orders")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()