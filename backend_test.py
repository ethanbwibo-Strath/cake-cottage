#!/usr/bin/env python3
"""
Backend API Testing for Cake.cottag3 Bakery Website
Tests the order inquiry endpoints: POST /api/orders and GET /api/orders
"""

import requests
import json
import os
from datetime import datetime
import time

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BASE_URL = get_backend_url()
if not BASE_URL:
    print("ERROR: Could not get REACT_APP_BACKEND_URL from frontend/.env")
    exit(1)

print(f"Testing backend at: {BASE_URL}")

# Test data as specified in the review request
VALID_ORDER_DATA = {
    "name": "Test Customer",
    "phone": "+254 700 123 456",
    "email": "test@example.com",
    "cakeSize": "1.5kg",
    "flavor": "vanilla",
    "frosting": "buttercream",
    "deliveryDate": "2026-01-20",
    "budget": "3000-4000 KES",
    "customRequests": "Fresh roses and gold accents",
    "message": "Birthday celebration"
}

def test_post_orders_valid():
    """Test POST /api/orders with valid data"""
    print("\n=== Testing POST /api/orders with valid data ===")
    
    try:
        response = requests.post(
            f"{BASE_URL}/api/orders",
            json=VALID_ORDER_DATA,
            headers={"Content-Type": "application/json"},
            timeout=30
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and data.get("order_id"):
                print("✅ POST /api/orders - Valid data test PASSED")
                return data.get("order_id")
            else:
                print("❌ POST /api/orders - Response missing success or order_id")
                return None
        else:
            print(f"❌ POST /api/orders - Expected 200, got {response.status_code}")
            return None
            
    except Exception as e:
        print(f"❌ POST /api/orders - Exception: {e}")
        return None

def test_post_orders_missing_fields():
    """Test POST /api/orders with missing required fields"""
    print("\n=== Testing POST /api/orders with missing required fields ===")
    
    # Test missing name
    invalid_data = VALID_ORDER_DATA.copy()
    del invalid_data["name"]
    
    try:
        response = requests.post(
            f"{BASE_URL}/api/orders",
            json=invalid_data,
            headers={"Content-Type": "application/json"},
            timeout=30
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:  # Validation error
            print("✅ POST /api/orders - Missing field validation test PASSED")
            return True
        else:
            print(f"❌ POST /api/orders - Expected 422 for missing field, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ POST /api/orders - Exception: {e}")
        return False

def test_post_orders_invalid_email():
    """Test POST /api/orders with invalid email format"""
    print("\n=== Testing POST /api/orders with invalid email ===")
    
    invalid_data = VALID_ORDER_DATA.copy()
    invalid_data["email"] = "invalid-email"
    
    try:
        response = requests.post(
            f"{BASE_URL}/api/orders",
            json=invalid_data,
            headers={"Content-Type": "application/json"},
            timeout=30
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:  # Validation error
            print("✅ POST /api/orders - Invalid email validation test PASSED")
            return True
        else:
            print(f"❌ POST /api/orders - Expected 422 for invalid email, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ POST /api/orders - Exception: {e}")
        return False

def test_get_orders():
    """Test GET /api/orders endpoint"""
    print("\n=== Testing GET /api/orders ===")
    
    try:
        response = requests.get(
            f"{BASE_URL}/api/orders",
            timeout=30
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "orders" in data:
                orders = data["orders"]
                print(f"Found {len(orders)} orders")
                
                # Check if orders are sorted by created_at (newest first)
                if len(orders) > 1:
                    for i in range(len(orders) - 1):
                        current_time = orders[i].get("created_at")
                        next_time = orders[i + 1].get("created_at")
                        if current_time and next_time:
                            if current_time < next_time:
                                print("❌ GET /api/orders - Orders not sorted correctly (newest first)")
                                return False
                
                # Check if response includes all required fields
                if orders:
                    first_order = orders[0]
                    required_fields = ["id", "name", "phone", "email", "cake_size", "flavor", "frosting", "delivery_date", "created_at"]
                    missing_fields = [field for field in required_fields if field not in first_order]
                    if missing_fields:
                        print(f"❌ GET /api/orders - Missing fields in response: {missing_fields}")
                        return False
                
                print("✅ GET /api/orders test PASSED")
                return True
            else:
                print("❌ GET /api/orders - Response missing success or orders field")
                return False
        else:
            print(f"❌ GET /api/orders - Expected 200, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ GET /api/orders - Exception: {e}")
        return False

def test_backend_connectivity():
    """Test basic backend connectivity"""
    print("\n=== Testing Backend Connectivity ===")
    
    try:
        response = requests.get(f"{BASE_URL}/api/", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            print("✅ Backend connectivity test PASSED")
            return True
        else:
            print(f"❌ Backend connectivity test FAILED - Status: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Backend connectivity test FAILED - Exception: {e}")
        return False

def main():
    """Run all backend tests"""
    print("🧪 Starting Backend API Tests for Cake.cottag3 Order Inquiry System")
    print("=" * 70)
    
    test_results = []
    
    # Test backend connectivity first
    connectivity_result = test_backend_connectivity()
    test_results.append(("Backend Connectivity", connectivity_result))
    
    if not connectivity_result:
        print("\n❌ Backend is not accessible. Stopping tests.")
        return
    
    # Test POST /api/orders with valid data
    order_id = test_post_orders_valid()
    test_results.append(("POST /api/orders - Valid Data", order_id is not None))
    
    # Test POST /api/orders with missing fields
    missing_fields_result = test_post_orders_missing_fields()
    test_results.append(("POST /api/orders - Missing Fields Validation", missing_fields_result))
    
    # Test POST /api/orders with invalid email
    invalid_email_result = test_post_orders_invalid_email()
    test_results.append(("POST /api/orders - Invalid Email Validation", invalid_email_result))
    
    # Wait a moment for the order to be saved
    if order_id:
        print("\nWaiting 2 seconds for order to be saved...")
        time.sleep(2)
    
    # Test GET /api/orders
    get_orders_result = test_get_orders()
    test_results.append(("GET /api/orders", get_orders_result))
    
    # Print summary
    print("\n" + "=" * 70)
    print("🏁 TEST SUMMARY")
    print("=" * 70)
    
    passed = 0
    failed = 0
    
    for test_name, result in test_results:
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{test_name}: {status}")
        if result:
            passed += 1
        else:
            failed += 1
    
    print(f"\nTotal: {passed + failed} tests")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    
    if failed == 0:
        print("\n🎉 All tests passed!")
    else:
        print(f"\n⚠️  {failed} test(s) failed. Check the details above.")

if __name__ == "__main__":
    main()