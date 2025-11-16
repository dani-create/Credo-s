from playwright.sync_api import sync_playwright
import time
import os

OUT_DIR = 'tests/screenshots'
URL = 'http://localhost:8888/'

os.makedirs(OUT_DIR, exist_ok=True)

with sync_playwright() as p:
    # Desktop
    browser = p.chromium.launch()
    context = browser.new_context(viewport={"width": 1280, "height": 800})
    page = context.new_page()
    page.goto(URL, wait_until='networkidle')
    time.sleep(0.5)
    # ensure burger not visible
    page.screenshot(path=f'{OUT_DIR}/desktop_page.png', full_page=True)

    # Open general modal (click hero CTA or dishes commander)
    try:
        # try hero cta
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
    time.sleep(0.5)
    page.screenshot(path=f'{OUT_DIR}/mobile_page.png', full_page=True)
    # open modal
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
