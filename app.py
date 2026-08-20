import os
import json
import re
from datetime import datetime, timezone
from flask import Flask, render_template, request, jsonify, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'digitol-cro-secret-key-2026')

LEADS_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data', 'leads.json')

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
    with open(LEADS_FILE, 'w', encoding='utf-8') as f:
        json.dump(leads, f, indent=2)
    return lead_data

def validate_lead_payload(data):
    """Validate submitted lead data."""
    errors = []
    
    name = (data.get('name') or '').strip()
    email = (data.get('email') or '').strip()
    phone = (data.get('phone') or '').strip()
    
    if not name:
        errors.append("Full Name is required.")
    elif len(name) < 2:
        errors.append("Please provide a valid name.")
        
    if not email:
        errors.append("Email address is required.")
    elif not re.match(r"^[^@]+@[^@]+\.[^@]+$", email):
        errors.append("Please provide a valid email address.")
        
    if phone:
        # Strip common punctuation to check digits
        digits = re.sub(r'\D', '', phone)
        if len(digits) < 7:
            errors.append("Please enter a valid phone number.")
            
    return errors

@app.route('/')
def home():
    """High-Converting Home Landing Page."""
    return render_template('index.html', page_title="Digitol | AI-Powered Growth & Automation Agency")

@app.route('/services')
def services():
    """Detailed Core Services Breakdown."""
    return render_template('services.html', page_title="Our AI & Growth Services | Digitol Agency")

@app.route('/contact')
def contact():
    """Breadcrumb Multi-Step Lead Capture Funnel."""
    return render_template('contact.html', page_title="Get Your Free AI Growth Audit | Digitol Agency")

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
            
    # Process and save qualified lead
    saved = save_lead(data)
    
    if request.is_json:
        return jsonify({
            "status": "success",
            "message": "Your AI Growth Audit has been booked successfully!",
            "redirect_url": url_for('thank_you', name=data.get('name', '').split()[0]),
            "lead": {
                "id": saved.get('id'),
                "score": saved.get('lead_score')
            }
        }), 200
    else:
        return redirect(url_for('thank_you', name=data.get('name', '').split()[0]))

@app.route('/api/leads', methods=['GET'])
def api_leads():
    """Administrative readout for testing/monitoring captured leads."""
    leads = get_stored_leads()
    return jsonify({
        "status": "success",
        "total_leads": len(leads),
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
    app.run(host='0.0.0.0', port=port, debug=True)
