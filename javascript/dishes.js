// dishes.js - Animations pour la section Plats
(function () {
  'use strict';

  const dishesSection = document.getElementById('dishes');
  if (!dishesSection) return;

  const dishCards = dishesSection.querySelectorAll('.dish-card');
  const commanderButton = dishesSection.querySelector('.dishes-commander-button');

  // Stagger animation des cartes au scroll
  function animateDishCards() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('dish-card-visible');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    dishCards.forEach((card) => {
      observer.observe(card);
    });
  }

  // Commander button hover effect
  function setupCommanderButton() {
    if (commanderButton) {
      commanderButton.addEventListener('mouseenter', () => {
        commanderButton.style.transform = 'scale(1.02)';
      });

      commanderButton.addEventListener('mouseleave', () => {
        commanderButton.style.transform = 'scale(1)';
      });

      commanderButton.addEventListener('click', (e) => {
        e.preventDefault();
        // Scroll vers la section contact
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  // Initialize
  animateDishCards();
  setupCommanderButton();

})();
