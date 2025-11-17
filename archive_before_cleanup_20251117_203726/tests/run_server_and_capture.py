import threading
import time
import os
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from playwright.sync_api import sync_playwright

PORT = 8888
URL = f'http://localhost:{PORT}/'
OUT_DIR = 'tests/screenshots'
os.makedirs(OUT_DIR, exist_ok=True)

class SilentHandler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass

def serve_forever():
    server = ThreadingHTTPServer(('0.0.0.0', PORT), SilentHandler)
    try:
        server.serve_forever()
    finally:
        server.server_close()

print('Starting embedded HTTP server on port', PORT)
thread = threading.Thread(target=serve_forever, daemon=True)
thread.start()

# wait a moment for server
for i in range(10):
    try:
        import urllib.request
        with urllib.request.urlopen(URL, timeout=2) as r:
            print('Server responding:', r.status)
            break
    except Exception:
        print('.', end='', flush=True)
        time.sleep(0.5)
else:
    print('\nServer did not start, aborting')
    raise SystemExit(1)

print('\nRunning Playwright captures...')
with sync_playwright() as p:
    # Desktop
    browser = p.chromium.launch()
    context = browser.new_context(viewport={"width": 1280, "height": 800})
    page = context.new_page()
    page.goto(URL, wait_until='networkidle')
    time.sleep(0.6)
    page.screenshot(path=f'{OUT_DIR}/desktop_page.png', full_page=True)

    try:
        page.click('[data-modal-type="general"]', timeout=2000)
    except Exception:
        try:
            page.click('.dishes-commander-button', timeout=2000)
        except Exception:
            pass
    time.sleep(0.6)
    page.screenshot(path=f'{OUT_DIR}/desktop_modal.png', full_page=False)
    context.close()
    browser.close()

    # Mobile
    browser = p.chromium.launch()
    iphone = p.devices.get('iPhone 8') or p.devices.get('iPhone 12')
    if not iphone:
        iphone = { 'viewport': {'width': 375, 'height': 667}, 'user_agent': 'Mozilla/5.0 (iPhone)'}
    context = browser.new_context(**iphone)
    page = context.new_page()
    page.goto(URL, wait_until='networkidle')
    time.sleep(0.8)
    page.screenshot(path=f'{OUT_DIR}/mobile_page.png', full_page=True)

    try:
        page.click('[data-modal-type="general"]', timeout=2000)
    except Exception:
        try:
            page.click('.dishes-commander-button', timeout=2000)
        except Exception:
            pass
    time.sleep(0.8)
    page.screenshot(path=f'{OUT_DIR}/mobile_modal.png', full_page=True)
    context.close()
    browser.close()

print('Screenshots saved to', OUT_DIR)
print('Done.')
