# Digitol — AI-Powered Growth & Digital Marketing Agency

Digitol is a high-converting, enterprise-grade web application and lead capture platform engineered for digital marketing and AI automation agencies. Built with a Python Flask server-side architecture, vanilla JavaScript interactivity, and a Conversion Rate Optimization (CRO) design system.

---

## Key Features & Conversion Architecture

1. **60-30-10 Color System**:
   - **60% Neutral Canvas (`#F8FAFC` / `#FFFFFF`)**: Ensures high contrast, effortless typography readability, and a clean corporate layout.
   - **30% Authority Brand Navy (`#0F172A` / `#1E293B`)**: Projects security, stability, and enterprise trust.
   - **10% High-Contrast Conversion Orange (`#FF5722`)**: Strictly reserved for high-intent Call to Action (CTA) buttons, form triggers, and conversion elements.

2. **5-Second Rule Hero Section**:
   - **Eyebrow Tag**: `"⚡ AI-Powered Growth & Automation Agency"`
   - **Outcome Headline**: `"Turn Dormant Leads & Traffic into Predictable, Booked Appointments 24/7."`
   - **Subheadline**: Emphasizes 24/7 Voice AI, SMS reactivation, and ad campaigns.
   - **Primary High-Contrast CTA**: `"Book Your Free AI Audit →"` with risk-reversal microcopy (`✓ Free 30-min strategy call • ✓ Custom AI blueprint • ✓ Zero obligation`).

3. **The 4 Core Service Pillars**:
   - **Database Reactivation**: Turning dormant leads into booked appointments using AI & SMS (zero ad spend).
   - **AI Automations & Answering Services**: 24/7 AI live chat and Voice AI receptionists so clients never miss a lead.
   - **Traffic & Conversion**: High-intent Google Search Ads, Meta Ads, and SEO to drive qualified traffic.
   - **Business in a Box**: Full-stack digital infrastructure including high-converting websites and CRM workflows.

4. **Breadcrumb Lead Qualification Funnel**:
   - Multi-step micro-commitment form on `/contact` that asks low-friction questions first (Industry, Revenue Bottleneck, Monthly Lead Volume) before asking for contact info.
   - Live lead scoring engine and instant data persistence in `data/leads.json`.

5. **Interactive AI ROI Calculator**:
   - Live interactive slider widget on the home page allowing prospective clients to estimate their recoverable revenue from missed calls and dormant CRM leads.

---

## Local Development Quickstart

### 1. Requirements
- Python 3.10+
- `pip`

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Run the Flask Application
```bash
python app.py
```
The application will launch at: **`http://127.0.0.1:5000`**

### 4. Run Automated Test Suite
```bash
python test_app.py
```

---

## How to Customize & Modify Services

All service cards and detailed descriptions are modularly organized:

1. **Homepage Service Cards (`templates/index.html`)**:
   - Locate the `<div class="services-grid">` section around line 125.
   - To update service bullet points or outcome metrics, edit the respective `<article class="service-card">` element.

2. **Dedicated Services Deep-Dive (`templates/services.html`)**:
   - Each service has its own dedicated anchor section (`#reactivation`, `#ai-answering`, `#traffic-conversion`, `#business-in-a-box`).
   - Modify the deliverables lists, feature cards, and ROI badges directly inside the respective section tags.

3. **Lead Funnel Questions (`templates/contact.html`)**:
   - Each step of the breadcrumb questionnaire is defined in a `<div class="step-pane" data-step="X">` container.
   - To add a new industry or service option, duplicate an `<label class="option-card">` and update the `value` attribute.

---

## Deploying to Firebase Hosting

### Option A: 100% Static Global CDN Hosting (Fastest & Free Tier)

1. Generate the production static bundle:
   ```bash
   python export_static.py
   ```
   This will render all pages into the `public/` directory.

2. Deploy using the Firebase CLI:
   ```bash
   # Login to Firebase (first-time only)
   npx -y firebase-tools@latest login

   # Deploy the hosting assets
   npx -y firebase-tools@latest deploy --only hosting
   ```

### Option B: Dynamic Server Hosting (Cloud Run / Firebase App Hosting)

For dynamic server-side Python runtime with full database integration:
```bash
# Test with Gunicorn locally
gunicorn -w 4 -b 0.0.0.0:8080 app:app
```
