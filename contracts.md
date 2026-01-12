# Cake.cottag3 Backend Implementation Contracts

## Overview
This document outlines the backend implementation for the Cake.cottag3 bakery website, including API contracts, database models, and integration points.

## Database Schema

### OrderInquiry Collection
```python
{
    "_id": ObjectId,
    "name": str,              # Customer full name
    "phone": str,             # Customer phone number
    "email": str,             # Customer email
    "cake_size": str,         # "1.5kg", "2kg", or "custom"
    "flavor": str,            # Selected flavor
    "frosting": str,          # Selected frosting type
    "delivery_date": str,     # ISO date string
    "budget": str,            # Optional budget range
    "custom_requests": str,   # Optional custom design requests
    "message": str,           # Optional additional message
    "status": str,            # "pending", "confirmed", "completed", "cancelled"
    "created_at": datetime,   # Timestamp
    "updated_at": datetime    # Timestamp
}
```

## API Endpoints

### POST /api/orders
**Purpose**: Create a new order inquiry

**Request Body**:
```json
{
    "name": "Jane Doe",
    "phone": "+254 700 000 000",
    "email": "jane@example.com",
    "cakeSize": "1.5kg",
    "flavor": "vanilla",
    "frosting": "buttercream",
    "deliveryDate": "2026-01-20",
    "budget": "3000-5000 KES",
    "customRequests": "I would like fresh roses and gold accents",
    "message": "This is for a birthday celebration"
}
```

**Response**:
```json
{
    "success": true,
    "message": "Order inquiry received! We'll contact you within 24 hours.",
    "order_id": "67893abc..."
}
```

**Email Notification**: Send email to bakery owner with order details

### GET /api/orders
**Purpose**: Get all order inquiries (for admin view - future enhancement)

**Response**:
```json
{
    "success": true,
    "orders": [...]
}
```

## Frontend Integration Points

### Mock Data to Remove
In `/app/frontend/src/mock.js`:
- Remove `submitOrderInquiry` function
- Keep `galleryImages`, `menuItems`, `addOns`, `cakeFlavors`, `frostingTypes`

### Frontend API Integration
In `/app/frontend/src/components/OrderForm.jsx`:
- Replace mock `submitOrderInquiry` with actual API call to `/api/orders`
- Use axios to make POST request
- Handle success/error responses with toast notifications

## Email Configuration

### Email Service
- Use Python's `smtplib` with Gmail SMTP or similar service
- Store email credentials in `.env` file
- Email Template: Include all order details in a formatted email

### Environment Variables
```
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_EMAIL=your-email@gmail.com
SMTP_PASSWORD=your-app-password
BAKERY_EMAIL=hello@cakecottag3.co.ke
```

## Implementation Steps

1. ✅ Create MongoDB model for OrderInquiry
2. ✅ Implement POST /api/orders endpoint
3. ✅ Set up email service with SMTP
4. ✅ Test email sending functionality
5. ✅ Update frontend to use real API instead of mock
6. ✅ Test end-to-end flow
7. ✅ Error handling and validation

## Validation Rules
- All required fields must be present
- Email must be valid format
- Phone must be valid format
- Delivery date must be at least 48 hours in the future
- Delivery date must be Mon-Sat (not Sunday)
