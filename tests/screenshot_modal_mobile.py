from playwright.sync_api import sync_playwright
import time
import os

OUT_DIR = 'tests/screenshots'
URL = 'http://localhost:8888/'

os.makedirs(OUT_DIR, exist_ok=True)

try:
    with sync_playwright() as p:
        browser = p.chromium.launch()
        iphone = p.devices['iPhone 8']
        context = browser.new_context(**iphone)
        page = context.new_page()
        page.set_default_timeout(15000)
        page.goto(URL, wait_until='networkidle')
        time.sleep(0.8)
        page.screenshot(path=f'{OUT_DIR}/mobile_page.png', full_page=True)

        # open modal
        try:
            page.click('[data-modal-type="general"]', timeout=3000)
        except Exception:
            try:
                page.click('.dishes-commander-button', timeout=3000)
            except Exception:
                pass
        time.sleep(0.8)
        page.screenshot(path=f'{OUT_DIR}/mobile_modal.png', full_page=True)
        context.close()
        browser.close()
        print('Saved mobile screenshots to', OUT_DIR)
except Exception as e:
    print('Error during mobile capture:', e)
