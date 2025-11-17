// contact.js - Animations pour la section Contact
(function () {
  'use strict';

  const contactSection = document.getElementById('contact');
  if (!contactSection) return;

  const contactItems = contactSection.querySelectorAll('.contact-item');

  // Stagger animation des éléments de contact
  function animateContactItems() {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('contact-item-visible');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    contactItems.forEach((item) => {
      observer.observe(item);
    });
  }

  // Hover effect sur les items de contact
  function setupContactHover() {
    contactItems.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(8px)';
      });

      item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
      });
    });
  }

  // Initialize
  animateContactItems();
  setupContactHover();

})();
