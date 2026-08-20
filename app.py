import os
import json
import re
import smtplib
import ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import urllib.request
import urllib.error
from datetime import datetime, timezone
from flask import Flask, render_template, request, jsonify, redirect, url_for, flash, send_from_directory

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates')
STATIC_DIR = os.path.join(BASE_DIR, 'static')

app = Flask(
    __name__,
    template_folder=TEMPLATES_DIR,
    static_folder=STATIC_DIR,
    static_url_path='/static'
)
app.secret_key = os.environ.get('SECRET_KEY', 'digitol-cro-secret-key-2026')

# In serverless environments (e.g. Vercel), use /tmp for write operations
if os.environ.get('VERCEL') == '1' or not os.access(BASE_DIR, os.W_OK):
    LEADS_DIR = '/tmp'
else:
    LEADS_DIR = os.path.join(BASE_DIR, 'data')

LEADS_FILE = os.path.join(LEADS_DIR, 'leads.json')

# ==============================================================================
# EMAIL & NOTIFICATION CONFIGURATION
# ==============================================================================
NOTIFICATION_EMAIL = os.environ.get('NOTIFICATION_EMAIL', os.environ.get('RECIPIENT_EMAIL', 'vela956Abel@gmail.com'))
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'leads@godigitol.com')

RESEND_API_KEY = os.environ.get('RESEND_API_KEY')
SENDGRID_API_KEY = os.environ.get('SENDGRID_API_KEY')

SMTP_HOST = os.environ.get('SMTP_HOST')
SMTP_PORT = int(os.environ.get('SMTP_PORT', 587))
SMTP_USER = os.environ.get('SMTP_USER')
SMTP_PASS = os.environ.get('SMTP_PASS')
SMTP_USE_TLS = os.environ.get('SMTP_USE_TLS', 'true').lower() in ('true', '1', 'yes')

LEAD_WEBHOOK_URL = os.environ.get('LEAD_WEBHOOK_URL')

def get_stored_leads():
    """Retrieve existing leads from the simulated JSON database."""
    if not os.path.exists(LEADS_FILE):
        return []
    try:
        with open(LEADS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error reading leads file: {e}")
        return []

def save_lead(lead_data):
    """Save a qualified lead into the simulated JSON database."""
    os.makedirs(os.path.dirname(LEADS_FILE), exist_ok=True)
    leads = get_stored_leads()
    
    # Calculate an automated Lead Priority Score (CRO feature)
    score = 50
    volume = lead_data.get('lead_volume', '')
    if '1000+' in volume:
        score += 30
    elif '201-1000' in volume:
        score += 20
    elif '51-200' in volume:
        score += 10
    
    if lead_data.get('phone'):
        score += 10
    if lead_data.get('company'):
        score += 10
        
    lead_data['id'] = f"LEAD-{len(leads) + 1:04d}"
    lead_data['lead_score'] = min(score, 100)
    lead_data['created_at'] = datetime.now(timezone.utc).isoformat()
    
    leads.append(lead_data)
    try:
        with open(LEADS_FILE, 'w', encoding='utf-8') as f:
            json.dump(leads, f, indent=2)
    except Exception as err:
        print(f"[LEAD DB] Warning: could not write to {LEADS_FILE}: {err}")
        
    # Dispatch email notification in background
    dispatch_lead_notifications(lead_data)
    
    return lead_data

def build_lead_email_html(lead_data):
    """Generate high-converting, formatted HTML lead notification email."""
    name = lead_data.get('name', 'N/A')
    company = lead_data.get('company', 'N/A')
    email = lead_data.get('email', 'N/A')
    phone = lead_data.get('phone', 'N/A')
    industry = lead_data.get('industry', 'General Growth Business')
    service = lead_data.get('primary_goal', 'Multi-Channel Growth Strategy')
    volume = lead_data.get('lead_volume', 'Not specified')
    notes = lead_data.get('notes', 'None provided')
    lead_id = lead_data.get('id', 'NEW-LEAD')
    score = lead_data.get('lead_score', 80)
    
    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Lead: {name} ({company})</title>
      <style>
        body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #0f172a; }}
        .container {{ max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(15,23,42,0.08); border: 1px solid #e2e8f0; }}
        .header {{ background: #0f172a; color: #ffffff; padding: 24px; text-align: left; border-bottom: 4px solid #ff5722; }}
        .badge {{ display: inline-block; background: #ff5722; color: #ffffff; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 4px 10px; border-radius: 9999px; margin-bottom: 8px; }}
        .score-pill {{ float: right; background: rgba(16,185,129,0.15); color: #10b981; border: 1px solid #10b981; font-size: 12px; font-weight: 800; padding: 4px 12px; border-radius: 9999px; }}
        .content {{ padding: 24px; }}
        .section-title {{ font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-top: 18px; margin-bottom: 10px; border-bottom: 1px solid #f1f5f9; padding-bottom: 4px; }}
        .data-table {{ width: 100%; border-collapse: collapse; margin-bottom: 16px; }}
        .data-table td {{ padding: 8px 0; font-size: 14px; border-bottom: 1px solid #f8fafc; }}
        .data-label {{ width: 38%; color: #64748b; font-weight: 600; }}
        .data-val {{ width: 62%; color: #0f172a; font-weight: 700; }}
        .btn {{ display: inline-block; background: #ff5722; color: #ffffff !important; font-weight: 800; font-size: 14px; text-decoration: none; padding: 12px 24px; border-radius: 8px; text-align: center; margin-top: 12px; }}
        .footer {{ background: #f8fafc; padding: 16px 24px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; text-align: center; }}
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <span class="score-pill">🔥 Score: {score}/100</span>
          <div class="badge">New Inbound Discovery Request</div>
          <h2 style="margin: 0; font-size: 22px; color: #ffffff;">{name} — {company}</h2>
          <div style="font-size: 13px; color: #94a3b8; margin-top: 4px;">ID: {lead_id} • Dispatched from Digitol Agency Funnel</div>
        </div>
        
        <div class="content">
          <div class="section-title">Contact & Company Information</div>
          <table class="data-table">
            <tr>
              <td class="data-label">Full Name:</td>
              <td class="data-val">{name}</td>
            </tr>
            <tr>
              <td class="data-label">Company Name:</td>
              <td class="data-val">{company}</td>
            </tr>
            <tr>
              <td class="data-label">Work Email:</td>
              <td class="data-val"><a href="mailto:{email}" style="color: #ff5722; text-decoration: none;">{email}</a></td>
            </tr>
            <tr>
              <td class="data-label">Direct Phone:</td>
              <td class="data-val"><a href="tel:{phone}" style="color: #0f172a; text-decoration: none;">{phone}</a></td>
            </tr>
          </table>

          <div class="section-title">Discovery & Growth Qualification</div>
          <table class="data-table">
            <tr>
              <td class="data-label">Industry:</td>
              <td class="data-val">{industry}</td>
            </tr>
            <tr>
              <td class="data-label">Services of Interest:</td>
              <td class="data-val">{service}</td>
            </tr>
            <tr>
              <td class="data-label">Monthly Lead Volume:</td>
              <td class="data-val">{volume}</td>
            </tr>
            <tr>
              <td class="data-label">CRM / Goals / Notes:</td>
              <td class="data-val" style="font-weight: 500; font-style: italic;">{notes}</td>
            </tr>
          </table>

          <div style="text-align: center; margin-top: 20px;">
            <a href="mailto:{email}?subject=Your%20Custom%20Growth%20Blueprint%20%E2%80%94%20Digitol%20Agency" class="btn">
              ⚡ Reply to {name} Immediately
            </a>
          </div>
        </div>

        <div class="footer">
          Dispatched in real time from <a href="https://godigitol.com" style="color: #64748b;">Digitol AI Growth Platform</a>.<br>
          Timestamp: {datetime.now(timezone.utc).strftime('%B %d, %Y at %I:%M %p UTC')}
        </div>
      </div>
    </body>
    </html>
    """
    return html

def dispatch_lead_notifications(lead_data):
    """Send notification email via Resend, SendGrid, SMTP, or Webhook."""
    subject = f"⚡ New Lead [{lead_data.get('lead_score', 80)}/100]: {lead_data.get('name')} ({lead_data.get('company')})"
    html_content = build_lead_email_html(lead_data)
    plain_text = (
        f"NEW DIGITOL INBOUND LEAD\n"
        f"========================\n"
        f"Name: {lead_data.get('name')}\n"
        f"Company: {lead_data.get('company')}\n"
        f"Email: {lead_data.get('email')}\n"
        f"Phone: {lead_data.get('phone')}\n"
        f"Industry: {lead_data.get('industry')}\n"
        f"Service Interest: {lead_data.get('primary_goal')}\n"
        f"Lead Volume: {lead_data.get('lead_volume')}\n"
        f"Notes: {lead_data.get('notes')}\n"
        f"Score: {lead_data.get('lead_score')}/100\n"
    )

    dispatched = False

    # 1. Resend API
    if RESEND_API_KEY:
        try:
            req_data = {
                "from": SENDER_EMAIL if '@' in SENDER_EMAIL else f"Digitol Leads <onboarding@resend.dev>",
                "to": [NOTIFICATION_EMAIL],
                "subject": subject,
                "html": html_content,
                "text": plain_text
            }
            req = urllib.request.Request(
                "https://api.resend.com/emails",
                data=json.dumps(req_data).encode('utf-8'),
                headers={
                    "Authorization": f"Bearer {RESEND_API_KEY}",
                    "Content-Type": "application/json",
                    "User-Agent": "DigitolAgency/1.0"
                }
            )
            with urllib.request.urlopen(req, timeout=8) as resp:
                if resp.status in (200, 201):
                    print(f"[EMAIL] Successfully sent lead via Resend API to {NOTIFICATION_EMAIL}")
                    dispatched = True
        except Exception as e:
            print(f"[EMAIL ERROR] Resend dispatch failed: {e}")

    # 2. SendGrid API
    if not dispatched and SENDGRID_API_KEY:
        try:
            req_data = {
                "personalizations": [{"to": [{"email": NOTIFICATION_EMAIL}]}],
                "from": {"email": SENDER_EMAIL, "name": "Digitol Leads"},
                "subject": subject,
                "content": [
                    {"type": "text/plain", "value": plain_text},
                    {"type": "text/html", "value": html_content}
                ]
            }
            req = urllib.request.Request(
                "https://api.sendgrid.com/v3/mail/send",
                data=json.dumps(req_data).encode('utf-8'),
                headers={
                    "Authorization": f"Bearer {SENDGRID_API_KEY}",
                    "Content-Type": "application/json"
                }
            )
            with urllib.request.urlopen(req, timeout=8) as resp:
                if resp.status in (200, 202):
                    print(f"[EMAIL] Successfully sent lead via SendGrid to {NOTIFICATION_EMAIL}")
                    dispatched = True
        except Exception as e:
            print(f"[EMAIL ERROR] SendGrid dispatch failed: {e}")

    # 3. SMTP (Gmail, Outlook, Custom SMTP Server)
    if not dispatched and SMTP_HOST and SMTP_USER and SMTP_PASS:
        try:
            msg = MIMEMultipart('alternative')
            msg['Subject'] = subject
            msg['From'] = SENDER_EMAIL or SMTP_USER
            msg['To'] = NOTIFICATION_EMAIL

            msg.attach(MIMEText(plain_text, 'plain'))
            msg.attach(MIMEText(html_content, 'html'))

            if SMTP_PORT == 465:
                context = ssl.create_default_context()
                with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT, context=context, timeout=10) as server:
                    server.login(SMTP_USER, SMTP_PASS)
                    server.sendmail(msg['From'], [NOTIFICATION_EMAIL], msg.as_string())
            else:
                with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=10) as server:
                    if SMTP_USE_TLS:
                        context = ssl.create_default_context()
                        server.starttls(context=context)
                    server.login(SMTP_USER, SMTP_PASS)
                    server.sendmail(msg['From'], [NOTIFICATION_EMAIL], msg.as_string())

            print(f"[EMAIL] Successfully sent lead via SMTP ({SMTP_HOST}) to {NOTIFICATION_EMAIL}")
            dispatched = True
        except Exception as e:
            print(f"[EMAIL ERROR] SMTP dispatch failed: {e}")

    # 4. Webhook (Slack, Discord, Zapier, Make, CRM)
    if LEAD_WEBHOOK_URL:
        try:
            webhook_payload = {
                "text": f"⚡ *New Digitol Lead Captured!*\n*Name:* {lead_data.get('name')}\n*Company:* {lead_data.get('company')}\n*Email:* {lead_data.get('email')}\n*Phone:* {lead_data.get('phone')}\n*Service:* {lead_data.get('primary_goal')}\n*Volume:* {lead_data.get('lead_volume')}",
                "lead": lead_data
            }
            req = urllib.request.Request(
                LEAD_WEBHOOK_URL,
                data=json.dumps(webhook_payload).encode('utf-8'),
                headers={"Content-Type": "application/json"}
            )
            with urllib.request.urlopen(req, timeout=5) as resp:
                print(f"[WEBHOOK] Dispatched lead to webhook endpoint (Status: {resp.status})")
        except Exception as e:
            print(f"[WEBHOOK ERROR] Webhook dispatch failed: {e}")

    # Log fallback
    if not dispatched:
        print(f"\n[LEAD DISPATCHED LOCALLY] Recipient: {NOTIFICATION_EMAIL}")
        print(plain_text)
        print("Tip: Add RESEND_API_KEY, SENDGRID_API_KEY, or SMTP_HOST/USER/PASS to your environment to send live emails directly to your inbox.\n")

    return dispatched

def validate_lead_payload(data):
    """Validate submitted lead data."""
    errors = []
    
    name = (data.get('name') or '').strip()
    company = (data.get('company') or '').strip()
    email = (data.get('email') or '').strip()
    phone = (data.get('phone') or '').strip()
    
    if not name:
        errors.append("Full Name is required.")
    elif len(name) < 2:
        errors.append("Please provide a valid full name.")

    if not company:
        errors.append("Business / Company Name is required.")
    elif len(company) < 2:
        errors.append("Please provide a valid company name.")
        
    if not email:
        errors.append("Work Email address is required.")
    elif not re.match(r"^[^@]+@[^@]+\.[^@]+$", email):
        errors.append("Please provide a valid work email address.")
        
    if not phone:
        errors.append("Direct Phone Number is required.")
    else:
        digits = re.sub(r'\D', '', phone)
        if len(digits) < 7:
            errors.append("Please enter a valid phone number.")
            
    return errors

@app.route('/static/<path:filename>')
def custom_static(filename):
    """Explicit fallback to guarantee static assets load in serverless environments."""
    return send_from_directory(STATIC_DIR, filename)

@app.route('/')
def home():
    """High-Converting Home Landing Page."""
    return render_template('index.html', page_title="Digitol | AI-Powered Growth & Automation Agency")

@app.route('/services')
def services():
    """Dedicated Services & Implementation Architecture Page."""
    return render_template('services.html', page_title="Services & Architecture | Digitol Agency")

@app.route('/how-it-works')
def how_it_works():
    """14-Day Velocity Onboarding Roadmap Page."""
    return render_template('how_it_works.html', page_title="How It Works | 14-Day Implementation | Digitol Agency")

@app.route('/case-studies')
@app.route('/results')
def case_studies():
    """Case Studies & Verified ROI Proof Page."""
    return render_template('case_studies.html', page_title="Case Studies & Results | Digitol Agency")

@app.route('/roi-calculator')
def roi_calculator():
    """Full-Page Interactive Revenue Leakage Calculator."""
    return render_template('roi_calculator.html', page_title="AI ROI & Revenue Calculator | Digitol Agency")

@app.route('/faq')
def faq():
    """Categorized Knowledge Base & FAQ Center."""
    return render_template('faq.html', page_title="Frequently Asked Questions | Digitol Agency")

@app.route('/about')
def about():
    """About Digitol Agency, Mission & Values."""
    return render_template('about.html', page_title="About Us | Digitol Agency")

@app.route('/contact')
def contact():
    """Breadcrumb Multi-Step Lead Capture Funnel."""
    return render_template('contact.html', page_title="Get Your Free AI Growth Audit | Digitol Agency")

@app.route('/success')
@app.route('/thank-you')
def thank_you():
    """High-Converting Post-Submission Strategy Confirmation."""
    lead_name = request.args.get('name', 'Valued Partner')
    return render_template('thank_you.html', page_title="Audit Booked! Next Steps | Digitol Agency", lead_name=lead_name)

@app.route('/api/contact', methods=['POST'])
def api_contact():
    """
    Handle AJAX multi-step breadcrumb form submissions
    and standard HTML form submissions.
    """
    if request.is_json:
        data = request.get_json() or {}
    else:
        data = request.form.to_dict()
        
    errors = validate_lead_payload(data)
    if errors:
        if request.is_json:
            return jsonify({
                "status": "error",
                "message": "Validation failed",
                "errors": errors
            }), 400
        else:
            for err in errors:
                flash(err, "error")
            return redirect(url_for('contact'))
            
    # Process, save, and dispatch notification for qualified lead
    saved = save_lead(data)
    
    if request.is_json:
        return jsonify({
            "status": "success",
            "message": "Your AI Growth Audit has been booked successfully!",
            "redirect_url": url_for('thank_you', name=data.get('name', '').split()[0], company=data.get('company', '')),
            "lead": {
                "id": saved.get('id'),
                "score": saved.get('lead_score')
            }
        }), 200
    else:
        return redirect(url_for('thank_you', name=data.get('name', '').split()[0], company=data.get('company', '')))

@app.route('/api/leads', methods=['GET'])
def api_leads():
    """Administrative readout for testing/monitoring captured leads."""
    leads = get_stored_leads()
    return jsonify({
        "status": "success",
        "total_leads": len(leads),
        "notification_recipient": NOTIFICATION_EMAIL,
        "leads": leads
    }), 200

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html', page_title="Page Not Found | Digitol"), 404

@app.errorhandler(500)
def server_error(e):
    return render_template('404.html', page_title="Server Error | Digitol"), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    print(f"[DIGITOL] Agency Server running on http://127.0.0.1:{port}")
    print(f"[DIGITOL] Lead notification recipient: {NOTIFICATION_EMAIL}")
    app.run(host='0.0.0.0', port=port, debug=True)
