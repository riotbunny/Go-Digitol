"""
Automated Test Suite for Digitol Agency Website
Tests Flask routes, dedicated pages, breadcrumb API lead capture, and static generation.
"""

import os
import json
import unittest
from app import app, LEADS_FILE, save_lead, validate_lead_payload

class TestDigitolApp(unittest.TestCase):
    def setUp(self):
        app.config['TESTING'] = True
        self.client = app.test_client()
        
    def test_home_page(self):
        """Verify homepage renders with 5-second rule hero and key CRO sections."""
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        html = response.get_data(as_text=True)
        self.assertIn('AI Automations & Virtual Assistant Agency', html)
        self.assertIn('Turn Dormant Leads & Traffic into', html)
        self.assertIn('Book Your Free AI & VA Audit', html)
        self.assertIn('Database Reactivation', html)
        self.assertIn('AI Automations & Virtual Assistants', html)

    def test_services_page(self):
        """Verify services page renders all 4 pillars with business outcomes."""
        response = self.client.get('/services')
        self.assertEqual(response.status_code, 200)
        html = response.get_data(as_text=True)
        self.assertIn('Database Reactivation (AI & SMS)', html)
        self.assertIn('AI Automations & Dedicated Virtual Assistants', html)
        self.assertIn('Traffic & Conversion (Ads & SEO)', html)
        self.assertIn('Business in a Box (Full-Stack Setup)', html)

    def test_how_it_works_page(self):
        """Verify dedicated how-it-works page renders."""
        response = self.client.get('/how-it-works')
        self.assertEqual(response.status_code, 200)
        html = response.get_data(as_text=True)
        self.assertIn('The Digitol Velocity Framework', html)
        self.assertIn('The 3-Step Implementation Timeline', html)
        self.assertIn('GoHighLevel', html)

    def test_case_studies_page(self):
        """Verify dedicated case studies and results pages render."""
        response = self.client.get('/case-studies')
        self.assertEqual(response.status_code, 200)
        html = response.get_data(as_text=True)
        self.assertIn('Apex Legal Group', html)
        self.assertIn('Solis Home Services', html)
        self.assertIn('Zenith MedSpa', html)

        # Test alias /results
        resp_results = self.client.get('/results')
        self.assertEqual(resp_results.status_code, 200)

    def test_roi_calculator_page(self):
        """Verify dedicated ROI calculator page renders."""
        response = self.client.get('/roi-calculator')
        self.assertEqual(response.status_code, 200)
        html = response.get_data(as_text=True)
        self.assertIn('Calculate Your Untapped', html)
        self.assertIn('Adjust Your Business Metrics', html)

    def test_faq_page(self):
        """Verify dedicated FAQ page renders."""
        response = self.client.get('/faq')
        self.assertEqual(response.status_code, 200)
        html = response.get_data(as_text=True)
        self.assertIn('Frequently Asked', html)
        self.assertIn('Virtual Assistant Placement & Staffing', html)

    def test_about_page(self):
        """Verify dedicated about page renders."""
        response = self.client.get('/about')
        self.assertEqual(response.status_code, 200)
        html = response.get_data(as_text=True)
        self.assertIn('We Engineer the Systems That', html)
        self.assertIn('Revenue Over Vanity Metrics', html)

    def test_contact_page(self):
        """Verify contact page renders multi-step breadcrumb form."""
        response = self.client.get('/contact')
        self.assertEqual(response.status_code, 200)
        html = response.get_data(as_text=True)
        self.assertIn('breadcrumb-funnel', html)
        self.assertIn('What industry is your business in?', html)
        self.assertIn('Where should we send your Growth Blueprint?', html)

    def test_thank_you_page(self):
        """Verify thank you page with personalized name."""
        response = self.client.get('/thank-you?name=Elena')
        self.assertEqual(response.status_code, 200)
        html = response.get_data(as_text=True)
        self.assertIn("You're All Set", html)
        self.assertIn("Elena", html)
        self.assertIn('What Happens Next', html)

    def test_api_contact_validation_failure(self):
        """Verify invalid payload returns 400 with error descriptions."""
        payload = {
            "name": "",
            "email": "invalid-email",
            "phone": "123"
        }
        response = self.client.post('/api/contact', json=payload)
        self.assertEqual(response.status_code, 400)
        data = response.get_json()
        self.assertEqual(data['status'], 'error')
        self.assertTrue(len(data['errors']) >= 2)

    def test_api_contact_success(self):
        """Verify valid payload saves lead and returns success."""
        payload = {
            "industry": "Home Services & Contractors",
            "primary_goal": "Dedicated Virtual Assistant Staffing",
            "lead_volume": "201-1000 leads/mo",
            "name": "David Miller",
            "company": "Miller Roofing LLC",
            "email": "david@millerroofing.com",
            "phone": "555-234-5678",
            "notes": "Testing VA placement request"
        }
        response = self.client.post('/api/contact', json=payload)
        self.assertEqual(response.status_code, 200)
        data = response.get_json()
        self.assertEqual(data['status'], 'success')
        self.assertIn('/thank-you', data['redirect_url'])

    def test_404_handling(self):
        """Verify custom 404 handler."""
        response = self.client.get('/some-nonexistent-path')
        self.assertEqual(response.status_code, 404)
        html = response.get_data(as_text=True)
        self.assertIn('404 Error', html)

if __name__ == '__main__':
    unittest.main()
