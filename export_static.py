"""
DIGITOL AGENCY - BULLETPROOF STATIC EXPORTER & PSEO COMPILER
Generates direct HTML files, nested index.html directories, dynamic sitemap.xml,
and robots.txt in /public to guarantee 100% route resolution on Vercel, Firebase Hosting, Netlify, and CDNs.
"""

import os
import sys
import shutil
import json

# Ensure UTF-8 output on Windows
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

from app import app, get_pseo_playbooks

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_DIR = os.path.join(BASE_DIR, 'public')
STATIC_DIR = os.path.join(BASE_DIR, 'static')

CORE_ROUTES = [
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
    ('/success', 'success.html', 'success'),
    ('/industries', 'industries.html', 'industries'),
]

def export_site():
    print("[EXPORT] Starting Digitol Static Site Generation & PSEO Compiler...")
    
    # 1. Clean public directory
    if os.path.exists(PUBLIC_DIR):
        shutil.rmtree(PUBLIC_DIR)
    os.makedirs(PUBLIC_DIR, exist_ok=True)
    
    # 2. Copy static assets (css, js, images) to both /public/static and /public
    dest_static = os.path.join(PUBLIC_DIR, 'static')
    if os.path.exists(STATIC_DIR):
        shutil.copytree(STATIC_DIR, dest_static)
        print(f"[OK] Copied static assets to {dest_static}")
        
    client = app.test_client()
    
    # Build complete route list including programmatic industry playbooks
    routes_to_export = list(CORE_ROUTES)
    playbooks = get_pseo_playbooks()
    for p in playbooks:
        slug = p.get('slug')
        routes_to_export.append((
            f'/industries/{slug}',
            f'industries/{slug}.html',
            f'industries/{slug}'
        ))
    
    print(f"[PSEO] Loaded {len(playbooks)} high-ticket industry playbooks to compile.")

    # 3. Render HTML pages using Flask Test Client
    for route, filename, folder in routes_to_export:
        response = client.get(route)
        if response.status_code == 200:
            # Write direct file (e.g. public/industries/roofing-contractors.html)
            direct_file = os.path.join(PUBLIC_DIR, filename)
            os.makedirs(os.path.dirname(direct_file), exist_ok=True)
            with open(direct_file, 'wb') as f:
                f.write(response.data)
                
            # Also write nested directory (e.g. public/industries/roofing-contractors/index.html)
            if folder:
                dir_path = os.path.join(PUBLIC_DIR, folder)
                os.makedirs(dir_path, exist_ok=True)
                nested_file = os.path.join(dir_path, 'index.html')
                with open(nested_file, 'wb') as f:
                    f.write(response.data)
                    
            print(f"[OK] Rendered '{route}' -> public/{filename} & public/{folder}/index.html")
        else:
            print(f"[ERROR] Failed to render '{route}' (Status: {response.status_code})")
            
    # 4. Render dynamic sitemap.xml
    resp_sitemap = client.get('/sitemap.xml')
    if resp_sitemap.status_code == 200:
        sitemap_file = os.path.join(PUBLIC_DIR, 'sitemap.xml')
        with open(sitemap_file, 'wb') as f:
            f.write(resp_sitemap.data)
        print("[OK] Rendered XML Sitemap -> public/sitemap.xml")
    
    # 5. Render robots.txt
    resp_robots = client.get('/robots.txt')
    if resp_robots.status_code == 200:
        robots_file = os.path.join(PUBLIC_DIR, 'robots.txt')
        with open(robots_file, 'wb') as f:
            f.write(resp_robots.data)
        print("[OK] Rendered robots.txt -> public/robots.txt")

    # 6. Render 404 page
    resp_404 = client.get('/nonexistent-page-for-404')
    out_404 = os.path.join(PUBLIC_DIR, '404.html')
    with open(out_404, 'wb') as f:
        f.write(resp_404.data)
    print(f"[OK] Rendered 404 page -> public/404.html")
    
    print(f"\n[SUCCESS] Bulletproof export complete! {len(routes_to_export)} static routes + XML sitemap generated.")

if __name__ == '__main__':
    export_site()
