"""
DIGITOL AGENCY - BULLETPROOF STATIC EXPORTER
Generates both direct HTML files and nested index.html directories in /public
to guarantee 100% route resolution on Vercel, Firebase Hosting, Netlify, and CDNs.
"""

import os
import sys
import shutil

# Ensure UTF-8 output on Windows
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

from app import app

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_DIR = os.path.join(BASE_DIR, 'public')
STATIC_DIR = os.path.join(BASE_DIR, 'static')

ROUTES_TO_EXPORT = [
    ('/', 'index.html', ''),
    ('/services', 'services.html', 'services'),
    ('/how-it-works', 'how-it-works.html', 'how-it-works'),
    ('/case-studies', 'case-studies.html', 'case-studies'),
    ('/results', 'results.html', 'results'),
    ('/roi-calculator', 'roi-calculator.html', 'roi-calculator'),
    ('/faq', 'faq.html', 'faq'),
    ('/about', 'about.html', 'about'),
    ('/contact', 'contact.html', 'contact'),
    ('/thank-you', 'thank-you.html', 'thank-you'),
]

def export_site():
    print("[EXPORT] Starting Digitol Static Site Generation...")
    
    # 1. Clean public directory
    if os.path.exists(PUBLIC_DIR):
        shutil.rmtree(PUBLIC_DIR)
    os.makedirs(PUBLIC_DIR, exist_ok=True)
    
    # 2. Copy static assets (css, js, images) to both /public/static and /public
    dest_static = os.path.join(PUBLIC_DIR, 'static')
    if os.path.exists(STATIC_DIR):
        shutil.copytree(STATIC_DIR, dest_static)
        print(f"[OK] Copied static assets to {dest_static}")
        
    # 3. Render HTML pages using Flask Test Client
    client = app.test_client()
    for route, filename, folder in ROUTES_TO_EXPORT:
        response = client.get(route)
        if response.status_code == 200:
            # Write direct file (e.g. public/contact.html)
            direct_file = os.path.join(PUBLIC_DIR, filename)
            with open(direct_file, 'wb') as f:
                f.write(response.data)
                
            # Also write nested directory (e.g. public/contact/index.html)
            if folder:
                dir_path = os.path.join(PUBLIC_DIR, folder)
                os.makedirs(dir_path, exist_ok=True)
                nested_file = os.path.join(dir_path, 'index.html')
                with open(nested_file, 'wb') as f:
                    f.write(response.data)
                    
            print(f"[OK] Rendered '{route}' -> public/{filename} & public/{folder}/index.html")
        else:
            print(f"[ERROR] Failed to render '{route}' (Status: {response.status_code})")
            
    # 4. Render 404 page
    resp_404 = client.get('/nonexistent-page-for-404')
    out_404 = os.path.join(PUBLIC_DIR, '404.html')
    with open(out_404, 'wb') as f:
        f.write(resp_404.data)
    print(f"[OK] Rendered 404 page -> public/404.html")
    
    print("\n[SUCCESS] Bulletproof export complete! All static and nested routes generated.")

if __name__ == '__main__':
    export_site()
