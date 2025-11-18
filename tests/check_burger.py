from playwright.sync_api import sync_playwright
import sys

URL = 'http://localhost:8000'

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    # Use a mobile-like viewport so the burger menu is visible
    page = browser.new_page(viewport={"width": 375, "height": 800})
    try:
        page.goto(URL, timeout=10000)
    except Exception as e:
        print('ERROR: cannot open', URL, e)
        sys.exit(2)

    try:
        page.wait_for_selector('.menu-toggle.menu-toggle-right', timeout=5000)
    except Exception as e:
        print('ERROR: menu toggle not found', e)
        browser.close()
        sys.exit(3)

    # Small delay to ensure all deferred scripts have attached their handlers
    page.wait_for_timeout(500)

    initial_hash = page.evaluate('() => window.location.hash')
    # Debug: snapshot attributes before click
    before_attrs = page.evaluate("() => ({ aria: document.querySelector('.menu-toggle.menu-toggle-right') ? document.querySelector('.menu-toggle.menu-toggle-right').getAttribute('aria-expanded') : null, mainNavClasses: document.querySelector('.main-nav') ? document.querySelector('.main-nav').className : null })")

    page.click('.menu-toggle.menu-toggle-right')
    page.wait_for_timeout(500)

    is_open = page.evaluate("() => document.querySelector('.main-nav') && document.querySelector('.main-nav').classList.contains('is-open')")
    after_hash = page.evaluate('() => window.location.hash')
    after_attrs = page.evaluate("() => ({ aria: document.querySelector('.menu-toggle.menu-toggle-right') ? document.querySelector('.menu-toggle.menu-toggle-right').getAttribute('aria-expanded') : null, mainNavClasses: document.querySelector('.main-nav') ? document.querySelector('.main-nav').className : null, buttonHTML: document.querySelector('.menu-toggle.menu-toggle-right') ? document.querySelector('.menu-toggle.menu-toggle-right').outerHTML : null, mainNavHTML: document.querySelector('.main-nav') ? document.querySelector('.main-nav').outerHTML : null })")

    print('initial_hash=' + repr(initial_hash))
    print('after_hash=' + repr(after_hash))
    print('before_attrs=' + str(before_attrs))
    print('after_attrs=' + str(after_attrs))
    print('main-nav.is-open=' + str(is_open))

    browser.close()
