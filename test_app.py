"""
Automated Test Suite for Digitol Agency Website
Tests Flask routes, breadcrumb API lead capture, validation, and static generation.
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
        self.assertIn('Traffic & Conversion', html)
        self.assertIn('Business in a Box', html)
        self.assertIn('Calculate Your Untapped Revenue', html)
        self.assertIn('APEX LEGAL GROUP', html)

    def test_services_page(self):
        """Verify services page renders all 4 pillars with business outcomes."""
        response = self.client.get('/services')
        self.assertEqual(response.status_code, 200)
        html = response.get_data(as_text=True)
        self.assertIn('Database Reactivation (AI & SMS)', html)
        self.assertIn('AI Automations & Dedicated Virtual Assistants', html)
        self.assertIn('Traffic & Conversion (Ads & SEO)', html)
        self.assertIn('Business in a Box (Full-Stack Setup)', html)

    def test_contact_page(self):
        """Verify contact page renders multi-step breadcrumb form."""
        response = self.client.get('/contact')
        self.assertEqual(response.status_code, 200)
        html = response.get_data(as_text=True)
        self.assertIn('breadcrumb-funnel', html)
        self.assertIn('What industry is your business in?', html)
        self.assertIn('What is your biggest operational or revenue bottleneck?', html)
        self.assertIn('What is your current monthly lead volume?', html)
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
        self.assertIn('lead', data)
        self.assertTrue(data['lead']['score'] >= 70)

    def test_api_leads_readout(self):
        """Verify administrative leads readout endpoint."""
        response = self.client.get('/api/leads')
        self.assertEqual(response.status_code, 200)
        data = response.get_json()
        self.assertEqual(data['status'], 'success')
        self.assertIsInstance(data['leads'], list)

    def test_404_handling(self):
        """Verify custom 404 handler."""
        response = self.client.get('/some-nonexistent-path')
        self.assertEqual(response.status_code, 404)
        html = response.get_data(as_text=True)
        self.assertIn('404 Error', html)

if __name__ == '__main__':
    unittest.main()
