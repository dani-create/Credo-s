import time
import urllib.request
from playwright.sync_api import sync_playwright
import os

URL = 'http://localhost:8888/'
OUT_DIR = 'tests/screenshots'
os.makedirs(OUT_DIR, exist_ok=True)

# wait for server
print('Waiting for http://localhost:8888/ ...')
for i in range(30):
    try:
        with urllib.request.urlopen(URL, timeout=2) as r:
            print('Server responded:', r.status)
            break
    except Exception as e:
        print('.', end='', flush=True)
        time.sleep(1)
else:
    print('\nServer not responding after 30s, aborting.')
    raise SystemExit(1)

with sync_playwright() as p:
    # Desktop
    browser = p.chromium.launch()
    context = browser.new_context(viewport={"width": 1280, "height": 800})
    page = context.new_page()
    page.goto(URL, wait_until='networkidle')
    time.sleep(0.6)
    page.screenshot(path=f'{OUT_DIR}/desktop_page.png', full_page=True)

    # open general modal
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
    iphone = p.devices['iPhone 8']
    context = browser.new_context(**iphone)
    page = context.new_page()
    page.goto(URL, wait_until='networkidle')
    time.sleep(0.6)
    page.screenshot(path=f'{OUT_DIR}/mobile_page.png', full_page=True)
    try:
        page.click('[data-modal-type="general"]', timeout=2000)
    except Exception:
        try:
            page.click('.dishes-commander-button', timeout=2000)
        except Exception:
            pass
    time.sleep(0.6)
    page.screenshot(path=f'{OUT_DIR}/mobile_modal.png', full_page=True)
    context.close()
    browser.close()

print('Screenshots saved to', OUT_DIR)
