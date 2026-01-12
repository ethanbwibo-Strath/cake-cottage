from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
import uuid

class OrderInquiryCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    phone: str = Field(..., min_length=10, max_length=20)
    email: EmailStr
    cakeSize: str = Field(..., alias="cakeSize")
    flavor: str = Field(..., min_length=1)
    frosting: str = Field(..., min_length=1)
    deliveryDate: str = Field(..., alias="deliveryDate")
    budget: Optional[str] = None
    customRequests: Optional[str] = Field(None, alias="customRequests")
    message: Optional[str] = None

    class Config:
        populate_by_name = True

class OrderInquiry(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: str
    cake_size: str
    flavor: str
    frosting: str
    delivery_date: str
    budget: Optional[str] = None
    custom_requests: Optional[str] = None
    message: Optional[str] = None
    status: str = "pending"
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }
