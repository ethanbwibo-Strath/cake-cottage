import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
import logging

load_dotenv()
logger = logging.getLogger(__name__)

def send_order_notification_email(order_data: dict):
    """Sends both the Bakery Notification and the Customer Auto-Reply"""
    try:
        # Configuration
        smtp_server = os.getenv("SMTP_SERVER", "smtp.gmail.com")
        smtp_port = int(os.getenv("SMTP_PORT", "587"))
        smtp_email = os.getenv("SMTP_EMAIL")
        smtp_password = os.getenv("SMTP_PASSWORD")
        bakery_email = os.getenv("BAKERY_EMAIL", "ethan.bwibo@strathmore.edu")

        if not smtp_email or not smtp_password:
            logger.warning("Email credentials missing.")
            return False

        # 1. SEND NOTIFICATION TO BAKERY
        send_to_bakery(order_data, smtp_server, smtp_port, smtp_email, smtp_password, bakery_email)

        # 2. SEND AUTO-REPLY TO CUSTOMER
        send_auto_reply(order_data, smtp_server, smtp_port, smtp_email, smtp_password)

        return True
    except Exception as e:
        logger.error(f"Email service error: {str(e)}")
        return False

def send_to_bakery(order_data, server_addr, port, user, pwd, receiver):
    msg = MIMEMultipart("alternative")
    msg['From'] = f"Cake.cottag3 Website <{user}>"
    msg['To'] = receiver
    msg['Subject'] = f"🎂 New Order: {order_data['name']}"

    html = f"""
    <html>
    <body style="font-family: sans-serif; color: #4a4a4a; background-color: #fdf6f8; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: white; border-radius: 12px; border: 1px solid #f8bbd0; overflow: hidden;">
            <div style="background-color: #ad1457; padding: 20px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 24px;">New Order Inquiry</h1>
            </div>
            <div style="padding: 20px;">
                <p>You have a new request from <b>{order_data['name']}</b>:</p>
                <table style="width: 100%; margin-bottom: 20px;">
                    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><b>Flavor:</b></td><td style="text-align: right;">{order_data['flavor']}</td></tr>
                    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><b>Size:</b></td><td style="text-align: right;">{order_data['cake_size']}</td></tr>
                    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><b>Date:</b></td><td style="text-align: right;">{order_data['delivery_date']}</td></tr>
                    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><b>Phone:</b></td><td style="text-align: right;">{order_data['phone']}</td></tr>
                </table>
                <p style="background: #fdf2f5; padding: 15px; border-radius: 8px;">
                    <b>Notes:</b> {order_data.get('custom_requests', 'None')}
                </p>
            </div>
        </div>
    </body>
    </html>
    """
    msg.attach(MIMEText(html, "html"))
    with smtplib.SMTP(server_addr, port) as server:
        server.starttls()
        server.login(user, pwd)
        server.sendmail(user, receiver, msg.as_string())

def send_auto_reply(order_data, server_addr, port, user, pwd):
    customer_email = order_data.get('email')
    if not customer_email: return

    msg = MIMEMultipart("alternative")
    msg['From'] = f"Cake.cottag3 <{user}>"
    msg['To'] = customer_email
    msg['Subject'] = "Thank you for your Cake.cottag3 Inquiry! 🌸"

    html = f"""
    <html>
    <body style="font-family: sans-serif; color: #4a4a4a; text-align: center; background-color: #fdf6f8; padding: 20px;">
        <div style="max-width: 500px; margin: auto; background: white; padding: 40px; border-radius: 20px; border: 1px solid #f8bbd0;">
            <h2 style="color: #ad1457;">Hi {order_data['name']}!</h2>
            <p>Thanks for reaching out! We've received your inquiry for a <b>{order_data['flavor']}</b> cake.</p>
            <p>Our team (at the cottage) is reviewing your request, and we'll get back to you within 24 hours via phone or email to finalize the details.</p>
            <hr style="border: 0; border-top: 1px solid #f8bbd0; margin: 20px 0;">
            <p style="font-size: 14px; color: #888;">"Baking for joy, not perfection."</p>
        </div>
    </body>
    </html>
    """
    msg.attach(MIMEText(html, "html"))
    with smtplib.SMTP(server_addr, port) as server:
        server.starttls()
        server.login(user, pwd)
        server.sendmail(user, customer_email, msg.as_string())