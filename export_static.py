"""
DIGITOL AGENCY - STATIC EXPORTER FOR FIREBASE HOSTING
Renders all Flask routes and Jinja2 templates into static HTML files in /public
allowing zero-server, high-speed CDN deployment on Firebase Hosting.
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
    ('/', 'index.html'),
    ('/services', 'services.html'),
    ('/contact', 'contact.html'),
    ('/thank-you', 'thank-you.html'),
]

def export_site():
    print("[EXPORT] Starting Digitol Static Site Generation for Firebase Hosting...")
    
    # 1. Ensure clean public directory
    if os.path.exists(PUBLIC_DIR):
        shutil.rmtree(PUBLIC_DIR)
    os.makedirs(PUBLIC_DIR, exist_ok=True)
    
    # 2. Copy static assets (css, js, images)
    dest_static = os.path.join(PUBLIC_DIR, 'static')
    if os.path.exists(STATIC_DIR):
        shutil.copytree(STATIC_DIR, dest_static)
        print(f"[OK] Copied static assets to {dest_static}")
        
    # 3. Render HTML pages using Flask Test Client
    client = app.test_client()
    for route, filename in ROUTES_TO_EXPORT:
        response = client.get(route)
        if response.status_code == 200:
            out_file = os.path.join(PUBLIC_DIR, filename)
            with open(out_file, 'wb') as f:
                f.write(response.data)
            print(f"[OK] Rendered '{route}' -> public/{filename}")
        else:
            print(f"[ERROR] Failed to render '{route}' (Status: {response.status_code})")
            
    # Render 404
    resp_404 = client.get('/nonexistent-page-for-404')
    out_404 = os.path.join(PUBLIC_DIR, '404.html')
    with open(out_404, 'wb') as f:
        f.write(resp_404.data)
    print(f"[OK] Rendered 404 page -> public/404.html")
    
    print("\n[SUCCESS] Static export complete! Ready to deploy to Firebase Hosting using:")
    print("   npx -y firebase-tools@latest deploy --only hosting")

if __name__ == '__main__':
    export_site()
