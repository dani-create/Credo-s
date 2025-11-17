#!/usr/bin/env python3
"""
Simple mobile screenshot capture - runs inline server and Playwright
"""
import threading
import time
import os
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

PORT = 8888
URL = f'http://localhost:{PORT}/'
OUT_DIR = 'tests/screenshots'
os.makedirs(OUT_DIR, exist_ok=True)

class SilentHandler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass

def serve():
    server = ThreadingHTTPServer(('127.0.0.1', PORT), SilentHandler)
    try:
        server.serve_forever()
    finally:
        server.server_close()

# Start server
print('Starting server on port', PORT)
thread = threading.Thread(target=serve, daemon=True)
thread.start()
time.sleep(1)

# Verify server
import urllib.request
try:
    with urllib.request.urlopen(URL, timeout=3) as r:
        print(f'Server OK: {r.status}')
except Exception as e:
    print(f'Server error: {e}')
    exit(1)

# Playwright
try:
    from playwright.sync_api import sync_playwright
    print('Launching Playwright...')
    with sync_playwright() as p:
        browser = p.chromium.launch()
        
        # Desktop
        print('  Capturing desktop...')
        ctx = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = ctx.new_page()
        page.goto(URL, wait_until='networkidle')
        time.sleep(0.5)
        page.screenshot(path=f'{OUT_DIR}/desktop_page.png', full_page=True)
        
        try:
            page.click('[data-modal-type="general"]', timeout=2000)
        except:
            try:
                page.click('.dishes-commander-button', timeout=2000)
            except:
                pass
        time.sleep(0.5)
        page.screenshot(path=f'{OUT_DIR}/desktop_modal.png', full_page=False)
        ctx.close()
        
        # Mobile
        print('  Capturing mobile (iPhone 8)...')
        ctx = browser.new_context(**p.devices['iPhone 8'])
        page = ctx.new_page()
        page.goto(URL, wait_until='networkidle')
        time.sleep(0.5)
        page.screenshot(path=f'{OUT_DIR}/mobile_page.png', full_page=True)
        
        try:
            page.click('[data-modal-type="general"]', timeout=2000)
        except:
            try:
                page.click('.dishes-commander-button', timeout=2000)
            except:
                pass
        time.sleep(0.5)
        page.screenshot(path=f'{OUT_DIR}/mobile_modal.png', full_page=True)
        ctx.close()
        browser.close()
        
    print('✓ Screenshots saved:', OUT_DIR)
except Exception as e:
    print(f'✗ Playwright error: {e}')
    import traceback
    traceback.print_exc()
    exit(1)
