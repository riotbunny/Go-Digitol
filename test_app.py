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
        """Verify homepage renders the modern Digitol revenue acceleration platform."""
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        html = response.get_data(as_text=True)
        self.assertIn('DIGITOL // Tech-Enabled Digital Marketing', html)
        self.assertIn('id="root"', html)

    def test_services_page(self):
        """Verify services page renders all pillars with business outcomes."""
        response = self.client.get('/services')
        self.assertEqual(response.status_code, 200)
        html = response.get_data(as_text=True)
        self.assertIn('High-Converting Website Design &amp; Funnels', html)
        self.assertIn('Database Reactivation (AI &amp; SMS)', html)
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
        self.assertIn('lead-name', html)
        self.assertIn('lead-company', html)

    def test_thank_you_and_success_pages(self):
        """Verify thank you and success pages with personalized name and company."""
        response = self.client.get('/thank-you?name=Elena&company=Solis%20Services')
        self.assertEqual(response.status_code, 200)
        html = response.get_data(as_text=True)
        self.assertIn("You're All Set", html)
        self.assertIn("Elena", html)

        resp_success = self.client.get('/success?name=Marcus')
        self.assertEqual(resp_success.status_code, 200)

    def test_api_contact_validation_failure(self):
        """Verify invalid payload returns 400 with error descriptions."""
        payload = {
            "name": "",
            "company": "",
            "email": "invalid-email",
            "phone": "123"
        }
        response = self.client.post('/api/contact', json=payload)
        self.assertEqual(response.status_code, 400)
        data = response.get_json()
        self.assertEqual(data['status'], 'error')
        self.assertTrue(len(data['errors']) >= 3)

    def test_api_contact_success(self):
        """Verify valid payload saves lead and returns success."""
        payload = {
            "industry": "Home Services & Contractors",
            "primary_goal": "Database Reactivation (Dormant Leads)",
            "lead_volume": "201-1000 leads/mo",
            "name": "David Miller",
            "company": "Miller Roofing LLC",
            "email": "david@millerroofing.com",
            "phone": "555-234-5678",
            "notes": "Testing discovery request"
        }
        response = self.client.post('/api/contact', json=payload)
        self.assertEqual(response.status_code, 200)
        data = response.get_json()
        self.assertEqual(data['status'], 'success')
        self.assertIn('/thank-you', data['redirect_url'])

    def test_industries_directory_page(self):
        """Verify the PSEO industries directory page renders and lists all 8 playbooks."""
        response = self.client.get('/industries')
        self.assertEqual(response.status_code, 200)
        html = response.get_data(as_text=True)
        self.assertIn('CUSTOMIZED MARKETING SYSTEMS FOR YOUR INDUSTRY', html)
        self.assertIn('Roofing Marketing &amp; Revenue Acceleration', html)
        self.assertIn('Legal Marketing &amp; Retained Case Generation', html)
        self.assertIn('MedSpa &amp; Aesthetic Practice Revenue Engine', html)
        self.assertIn('HVAC, Plumbing &amp; Electrical Marketing System', html)
        self.assertIn('B2B &amp; Industrial Manufacturing Growth Engine', html)
        self.assertIn('E-Commerce Scaling &amp; Omnichannel Revenue Engine', html)
        self.assertIn('Commercial Real Estate &amp; Property Marketing', html)
        self.assertIn('Dental Practice &amp; Orthodontics Patient Growth', html)

    def test_all_pseo_industry_playbook_pages(self):
        """Verify each of the 8 programmatic industry playbook pages loads with rich schema."""
        slugs = [
            'roofing-contractors',
            'personal-injury-law',
            'medspas-cosmetics',
            'hvac-plumbing',
            'b2b-manufacturing',
            'ecommerce-brands',
            'commercial-real-estate',
            'dental-practices'
        ]
        for slug in slugs:
            response = self.client.get(f'/industries/{slug}')
            self.assertEqual(response.status_code, 200, f"Failed for industry slug: {slug}")
            html = response.get_data(as_text=True)
            self.assertIn('@type": "ProfessionalService"', html)
            self.assertIn('@type": "FAQPage"', html)
            self.assertIn('@type": "BreadcrumbList"', html)
            self.assertIn('CRM INTEGRATIONS', html)

    def test_invalid_industry_playbook_404(self):
        """Verify invalid industry slug returns 404."""
        response = self.client.get('/industries/non-existent-industry-slug')
        self.assertEqual(response.status_code, 404)

    def test_sitemap_xml(self):
        """Verify dynamic XML sitemap is compliant and lists all 8 industry playbooks."""
        response = self.client.get('/sitemap.xml')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.mimetype, 'application/xml')
        xml = response.get_data(as_text=True)
        self.assertIn('<?xml version="1.0" encoding="UTF-8"?>', xml)
        self.assertIn('https://godigitol.com/industries/roofing-contractors', xml)
        self.assertIn('https://godigitol.com/industries/personal-injury-law', xml)
        self.assertIn('https://godigitol.com/industries/medspas-cosmetics', xml)

    def test_robots_txt(self):
        """Verify robots.txt references sitemap.xml."""
        response = self.client.get('/robots.txt')
        self.assertEqual(response.status_code, 200)
        text = response.get_data(as_text=True)
        self.assertIn('Sitemap: https://godigitol.com/sitemap.xml', text)

    def test_404_handling(self):
        """Verify custom 404 handler."""
        response = self.client.get('/some-nonexistent-path')
        self.assertEqual(response.status_code, 404)
        html = response.get_data(as_text=True)
        self.assertIn('404 Error', html)

if __name__ == '__main__':
    unittest.main()
