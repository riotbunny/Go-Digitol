# Digitol — AI Automations & Virtual Assistant Agency

Digitol is a high-converting, enterprise-grade web application and lead capture platform engineered for digital marketing, AI automation, and Virtual Assistant staffing agencies. Built with a Python Flask server-side architecture, vanilla JavaScript interactivity, and a Conversion Rate Optimization (CRO) design system.

---

## Key Features & Conversion Architecture

1. **60-30-10 Color System**:
   - **60% Neutral Canvas (`#F8FAFC` / `#FFFFFF`)**: Ensures high contrast, effortless typography readability, and a clean corporate layout.
   - **30% Authority Brand Navy (`#0F172A` / `#1E293B`)**: Projects security, stability, and enterprise trust.
   - **10% High-Contrast Conversion Orange (`#FF5722`)**: Strictly reserved for high-intent Call to Action (CTA) buttons, form triggers, and conversion elements.

2. **5-Second Rule Hero Section**:
   - **Eyebrow Tag**: `"⚡ AI Automations & Virtual Assistant Agency"`
   - **Outcome Headline**: `"Turn Dormant Leads & Traffic into Predictable, Booked Appointments 24/7."`
   - **Subheadline**: Emphasizes 24/7 AI chat funnels, SMS reactivation, ad campaigns, and dedicated Virtual Assistants.
   - **Primary High-Contrast CTA**: `"Book Your Free AI & VA Audit →"` with risk-reversal microcopy (`✓ Free 30-min strategy call • ✓ Custom automation & staffing plan • ✓ Zero obligation`).

3. **The 4 Core Service Pillars**:
   - **Database Reactivation**: Turning dormant leads into booked appointments using AI & SMS (zero ad spend).
   - **AI Automations & Virtual Assistant Placement**: 24/7 AI live chat funnels paired with dedicated, vetted Virtual Assistants for phone answering, scheduling, and admin.
   - **Traffic & Conversion**: High-intent Google Search Ads, Meta Ads, and SEO to drive qualified traffic.
   - **Business in a Box**: Full-stack digital infrastructure including high-converting websites and CRM workflows.

4. **Breadcrumb Lead Qualification Funnel**:
   - Multi-step micro-commitment form on `/contact` asking low-friction questions first (Industry, Operational Bottleneck, Monthly Lead Volume) before asking for contact details.
   - Live lead scoring engine and instant data persistence in `data/leads.json`.

5. **Interactive AI & VA Sandbox Simulator**:
   - Live interactive smartphone simulation on the home page demonstrating VA phone answering, SMS reactivation, and ad lead qualification.

---

## Local Development Quickstart

```bash
# Install dependencies
pip install -r requirements.txt

# Run Flask server
python app.py

# Run test suite
python test_app.py
```
App runs locally at: **`http://127.0.0.1:5000`**

---

## Deploying to Vercel

The application is configured with `vercel.json` and `api/index.py` for zero-config Vercel Python Serverless deployment.

```bash
# Deploy to Vercel
npx vercel --prod
```
