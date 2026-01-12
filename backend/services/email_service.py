import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
import logging

load_dotenv()

logger = logging.getLogger(__name__)

def send_order_notification_email(order_data: dict):
    """Send email notification to bakery when new order is received"""
    try:
        # Email configuration
        smtp_server = os.getenv("SMTP_SERVER", "smtp.gmail.com")
        smtp_port = int(os.getenv("SMTP_PORT", "587"))
        smtp_email = os.getenv("SMTP_EMAIL")
        smtp_password = os.getenv("SMTP_PASSWORD")
        bakery_email = os.getenv("BAKERY_EMAIL", "hello@cakecottag3.co.ke")

        if not smtp_email or not smtp_password:
            logger.warning("Email credentials not configured. Skipping email notification.")
            return False

        # Create email message
        msg = MIMEMultipart()
        msg['From'] = smtp_email
        msg['To'] = bakery_email
        msg['Subject'] = f"New Order Inquiry from {order_data['name']}"

        # Email body
        body = f"""
        New Order Inquiry Received!

        Customer Information:
        - Name: {order_data['name']}
        - Phone: {order_data['phone']}
        - Email: {order_data['email']}

        Order Details:
        - Cake Size: {order_data['cake_size']}
        - Flavor: {order_data['flavor']}
        - Frosting: {order_data['frosting']}
        - Delivery Date: {order_data['delivery_date']}
        - Budget: {order_data.get('budget', 'Not specified')}

        Custom Requests:
        {order_data.get('custom_requests', 'None')}

        Additional Message:
        {order_data.get('message', 'None')}

        ---
        This is an automated notification from Cake.cottag3 website.
        """

        msg.attach(MIMEText(body, 'plain'))

        # Send email
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_email, smtp_password)
        text = msg.as_string()
        server.sendmail(smtp_email, bakery_email, text)
        server.quit()

        logger.info(f"Order notification email sent successfully for order from {order_data['name']}")
        return True

    except Exception as e:
        logger.error(f"Failed to send email notification: {str(e)}")
        return False
