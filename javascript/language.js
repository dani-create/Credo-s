// Language switcher module
// Manages FR ↔ EN language selection and page rerender
(function () {
  const langBtn = document.getElementById('lang-btn');
  let currentLang = localStorage.getItem('credo_lang') || 'fr';

  // Store current language preference
  function setLanguage(lang) {
    localStorage.setItem('credo_lang', lang);
    
    // Update button text and aria-label
    if (langBtn) {
      langBtn.textContent = lang === 'fr' ? 'EN' : 'FR';
      langBtn.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Basculer en français');
    }
    
    // Reload page to apply translation (server-side rendering)
    // In future, could be client-side rendering of strings
    window.location.reload();
  }

  // Initialize language button
  if (langBtn) {
    // Set initial button text
    langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
    langBtn.setAttribute('aria-label', currentLang === 'fr' ? 'Switch to English' : 'Basculer en français');
    
    // Add click handler
    langBtn.addEventListener('click', function () {
      const newLang = currentLang === 'fr' ? 'en' : 'fr';
      currentLang = newLang;
      setLanguage(newLang);
    });
  }

  // Expose language getter for other scripts
  window.Credo = window.Credo || {};
  window.Credo.currentLanguage = function () {
    return currentLang;
  };
})();
