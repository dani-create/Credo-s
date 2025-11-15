// modal.js - Popup de commande
// produit par glancedaniel55@gmail.com | 0851524080
(function () {
  'use strict';

  const modal = document.getElementById('order-modal');
  if (!modal) return;

  const modalCard = modal.querySelector('.order-modal-card');
  const modalTitle = modal.querySelector('.order-modal-title');
  const modalBody = modal.querySelector('.order-modal-body');
  const modalActions = modal.querySelector('.order-modal-actions');
  const modalFooter = modal.querySelector('.order-modal-footer');
  const closeBtn = modal.querySelector('.order-modal-close');

  const WHATSAPP_NUMBER = '243833589772'; // format sans + et sans espaces pour wa.me
  const EMAIL_ADDRESS = 'Credosfood@gmail.com';

  // Liste des plats (pour la commande générale)
  const DISHES = [
     { name: 'Sandwich', img: 'images/272a72cc85e504f496f31ebd406db1538266507a.png', desc: 'Sandwich généreux, pain toasté, viande savoureuse et condiments maison — un classique réconfortant.' },
     { name: 'Salade', img: 'images/a731aaefa4520d8d8ba883a416fd376f2a7ffcb6.png', desc: 'Salade croquante mêlant légumes frais, herbes parfumées et une vinaigrette légère — parfaite pour une pause saine.' },
     { name: 'Burger', img: 'images/888bc5a5f08099437edc690608679c73ae117689.png', desc: 'Burger juteux garni de fromage fondant, pickles croquants et notre sauce secrète — une bouchée inoubliable.' },
     { name: 'Poulet', img: 'images/2a10d093087dbfd5831ac4b2a598934cbea8c909.png', desc: 'Poulet croustillant, mariné aux épices locales et frit à la perfection — croustillant dehors, tendre dedans.' },
     // Nouveaux plats populaires (images locales)
     { name: 'Burrito', img: 'images/burrito.jpg', desc: 'Burrito généreux garni de riz, haricots, viande épicée, légumes et sauce crémeuse — nourrissant et plein de saveurs.' },
     { name: 'Shawarma', img: 'images/shawarma.jpg', desc: 'Shawarma tendre, finement tranché et servi avec pain pita, légumes frais et sauce à l\'ail — la street-food revisitée.' },
     { name: 'Tenders', img: 'images/tenders.jpg', desc: 'Tenders dorés et croustillants, bien assaisonnés — parfaits à partager ou à savourer seul.' }
  ];

  function openModal() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    trapFocus(modalCard);
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    releaseFocus();
  }

  function buildDishView(dish) {
    modalTitle.textContent = dish.name;
    modalBody.innerHTML = '';
    modalActions.innerHTML = '';

    // Back control (visible when coming from general view)
    const back = document.createElement('button');
    back.className = 'order-modal-back';
    back.type = 'button';
    back.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Retour';
    back.addEventListener('click', () => {
      buildGeneralView();
    });
    // prepend back control into header area (before title)
    const existingHeader = modalCard.querySelector('.order-modal-header');
    if (existingHeader) {
      // ensure back sits to the left of the title
      if (!existingHeader.querySelector('.order-modal-back')) {
        existingHeader.insertBefore(back, existingHeader.firstChild);
      }
    }

    // Image
    const img = document.createElement('img');
    img.className = 'order-modal-image';
    img.src = dish.img;
    img.alt = dish.name;

    // Description
    const desc = document.createElement('div');
    desc.className = 'order-modal-description';
    desc.innerHTML = dish.desc || '';

    modalBody.appendChild(img);
    modalBody.appendChild(desc);

    // Buttons (WhatsApp + Email)
    const waBtn = document.createElement('a');
    waBtn.className = 'order-btn whatsapp';
    waBtn.href = '#';
    waBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.002C21 6.477 16.523 2 11 2S1 6.477 1 12.002C1 14.187 1.69 16.222 2.853 17.858L1 23l5.362-1.792C8.07 22.394 9.504 23 11 23c5.523 0 10-4.477 10-10.998z" fill="#fff" opacity="0.08"/><path d="M16.58 14.96c-.31-.16-1.82-.9-2.1-1-.28-.11-.49-.16-.7.16s-.8 1-.98 1.2c-.18.16-.36.18-.67.06-.31-.12-1.37-.5-2.61-1.62-.96-.86-1.61-1.92-1.8-2.23-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.2.05-.38-.02-.54-.06-.16-.7-1.7-.96-2.33-.25-.62-.5-.54-.69-.55-.18 0-.38-.01-.58-.01s-.54.08-.82.38c-.28.3-1.06 1.03-1.06 2.5 0 1.48 1.09 2.92 1.24 3.12.15.2 2.14 3.3 5.2 4.62 3.06 1.33 3.06.89 3.61.84.55-.05 1.82-.74 2.08-1.45.26-.71.26-1.32.18-1.45-.08-.12-.28-.19-.59-.31z" fill="#fff"/></svg> Commander via whatsapp';

    waBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = encodeURIComponent(`Bonjour, je souhaite commander : ${dish.name}`);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    });

    const emBtn = document.createElement('a');
    emBtn.className = 'order-btn email';
    emBtn.href = '#';
    emBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.5v11A2.5 2.5 0 0 0 4.5 20h15a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 19.5 4h-15A2.5 2.5 0 0 0 2 6.5z" fill="#0b0618" opacity="0.08"/><path d="M4 7.5l8 5 8-5" stroke="#0b0618" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Commander via email';

    emBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const subject = encodeURIComponent(`Commande - ${dish.name}`);
      const body = encodeURIComponent(`Bonjour,\n\nJe souhaite commander : ${dish.name}.\n\nMerci.`);
      window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
    });

    modalActions.appendChild(waBtn);
    modalActions.appendChild(emBtn);
    // Add to cart button
    const addBtn = document.createElement('button');
    addBtn.className = 'order-btn add';
    addBtn.type = 'button';
    addBtn.textContent = 'Ajouter au panier';
    addBtn.addEventListener('click', (e) => {
      e.preventDefault();
      addToCart({ name: dish.name, img: dish.img });
      // feedback
      addBtn.textContent = 'Ajouté ✓';
      setTimeout(() => { addBtn.textContent = 'Ajouter au panier'; }, 1200);
      // Close order modal after adding
      closeModal();
    });
    modalActions.appendChild(addBtn);
  }

  function buildGeneralView() {
    modalTitle.textContent = "Commande générale";
    modalBody.innerHTML = '';
    modalActions.innerHTML = '';

    const intro = document.createElement('div');
    intro.className = 'order-modal-description';
    intro.textContent = 'Choisissez votre plat préféré parmi nos délicieuses options !';

    const scroller = document.createElement('div');
    scroller.style.display = 'flex';
    scroller.style.gap = '12px';
    scroller.style.overflowX = 'auto';
    scroller.style.padding = '12px 6px';
    scroller.style.width = '100%';

    DISHES.forEach((d) => {
      const thumbWrapper = document.createElement('div');
      thumbWrapper.style.flex = '0 0 auto';
      thumbWrapper.style.textAlign = 'center';

      const thumb = document.createElement('img');
      thumb.src = d.img;
      thumb.alt = d.name;
      thumb.style.width = '96px';
      thumb.style.height = '96px';
      thumb.style.borderRadius = '50%';
      thumb.style.objectFit = 'cover';
      thumb.style.cursor = 'pointer';

      const label = document.createElement('div');
      label.style.color = '#fff';
      label.style.fontSize = '13px';
      label.style.marginTop = '8px';
      label.textContent = d.name;

      thumb.addEventListener('click', () => {
        // montrer uniquement ce plat
        buildDishView(d);
      });

      thumbWrapper.appendChild(thumb);
      thumbWrapper.appendChild(label);
      scroller.appendChild(thumbWrapper);
    });

    modalBody.appendChild(intro);
    modalBody.appendChild(scroller);

    // TODO: ajouter texte d'information si nécessaire
    // Les boutons whatsapp/email seront affichés après qu'un plat est choisi
    modalActions.innerHTML = '';
  }

  // Ouvrir en mode plat spécifique (lorsqu'on clique sur un bouton plat)
  function openDishModalFromElement(el) {
    const name = el.dataset.dishName || el.getAttribute('data-dish-name') || 'Plat';
    const desc = el.dataset.dishDesc || el.getAttribute('data-dish-desc') || '';
    const img = el.dataset.dishImg || el.getAttribute('data-dish-img') || '';
    buildDishView({ name: name, img: img, desc: desc });
    openModal();
  }

  // Ouvrir le modal général
  function openGeneralModal() {
    buildGeneralView();
    openModal();
  }

  // Floating UI handlers: gallery & help & mini-cart
  const galleryBtn = document.getElementById('gallery-btn');
  const helpBtn = document.getElementById('help-btn');
  const miniCart = document.getElementById('mini-cart');

  // Simple cart (UI minimale)
  let CART = JSON.parse(localStorage.getItem('credo_cart') || '[]');

  function updateCartUI() {
    if (!miniCart) return;
    const countEl = miniCart.querySelector('.count');
    countEl.textContent = CART.length || 0;
  }

  function addToCart(item) {
    CART.push(item);
    localStorage.setItem('credo_cart', JSON.stringify(CART));
    updateCartUI();
  }

  // Build cart view inside cart modal
  const cartModal = document.getElementById('cart-modal');
  const cartListEl = document.getElementById('cart-list');

  function buildCartView() {
    if (!cartListEl) return;
    cartListEl.innerHTML = '';
    if (CART.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'order-modal-description';
      empty.textContent = 'Votre panier est vide.';
      cartListEl.appendChild(empty);
      return;
    }

    CART.forEach((it, idx) => {
      const row = document.createElement('div');
      row.className = 'cart-item';

      const img = document.createElement('img');
      img.src = it.img;
      img.alt = it.name;

      const info = document.createElement('div');
      info.style.flex = '1';
      info.innerHTML = `<strong>${it.name}</strong>`;

      const remove = document.createElement('button');
      remove.className = 'order-btn';
      remove.type = 'button';
      remove.textContent = 'Retirer';
      // use data-idx to avoid closure index issues
      remove.dataset.idx = String(idx);
      remove.addEventListener('click', (e) => {
        const i = Number(e.currentTarget.dataset.idx);
        if (!Number.isNaN(i)) {
          CART.splice(i, 1);
          localStorage.setItem('credo_cart', JSON.stringify(CART));
          buildCartView();
          updateCartUI();
        }
      });

      row.appendChild(img);
      row.appendChild(info);
      row.appendChild(remove);
      cartListEl.appendChild(row);
    });
  }

  function openCartModal() {
    if (!cartModal) return;
    buildCartView();
    cartModal.classList.add('open');
    cartModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const cmCard = cartModal.querySelector('.order-modal-card');
    trapFocus(cmCard);
  }

  function closeCartModal() {
    if (!cartModal) return;
    cartModal.classList.remove('open');
    cartModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    releaseFocus();
  }

  // send cart grouped via WhatsApp or Email
  function sendCartViaWhatsApp() {
    if (CART.length === 0) return;
    // Aggregate quantities per dish
    const counts = CART.reduce((acc, it) => {
      const key = it.name.toLowerCase();
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    const parts = Object.entries(counts).map(([name, qty]) => `${qty} ${name}${qty > 1 ? 's' : ''}`);
    const msg = `Bonjour, je souhaite commander :\n${parts.join(', ')}`;
    const text = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  }

  function sendCartViaEmail() {
    if (CART.length === 0) return;
    const counts = CART.reduce((acc, it) => {
      const key = it.name.toLowerCase();
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    const parts = Object.entries(counts).map(([name, qty]) => `${qty} ${name}${qty > 1 ? 's' : ''}`);
    const subject = encodeURIComponent('Commande - Credo\'s');
    const bodyText = `Bonjour,\n\nJe souhaite commander :\n${parts.join(', ')}\n\nMerci.`;
    const body = encodeURIComponent(bodyText);
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
  }

  // Attach gallery button to open general modal
  if (galleryBtn) {
    galleryBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openGeneralModal();
    });
  }

  // Attach help button to open help modal (corrigé: n'affiche le pop qu'au clic)
  if (helpBtn) {
    helpBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const helpModal = document.getElementById('help-modal');
      if (!helpModal) return;
      helpModal.classList.add('open');
      helpModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      // trap focus
      const hmCard = helpModal.querySelector('.order-modal-card');
      trapFocus(hmCard);
    });
    // S'assurer que le pop est masqué par défaut
    const helpModal = document.getElementById('help-modal');
    if (helpModal) {
      helpModal.classList.remove('open');
      helpModal.setAttribute('aria-hidden', 'true');
    }
  }

  // Close help modal on click of close buttons
  document.addEventListener('click', function (e) {
    if (e.target.closest('.order-modal-close')) {
      const helpModal = document.getElementById('help-modal');
      if (helpModal && helpModal.classList.contains('open')) {
        helpModal.classList.remove('open');
        helpModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    }
  });

  // Initialize cart UI on load
  updateCartUI();

  // mini-cart click opens cart modal
  if (miniCart) {
    miniCart.addEventListener('click', (e) => {
      e.preventDefault();
      openCartModal();
    });
  }

  // wire cart send buttons
  const sendCartWaBtn = document.getElementById('send-cart-wa');
  const sendCartEmailBtn = document.getElementById('send-cart-email');
  const emptyCartBtn = document.getElementById('empty-cart');
  if (sendCartWaBtn) sendCartWaBtn.addEventListener('click', (e) => { e.preventDefault(); sendCartViaWhatsApp(); });
  if (sendCartEmailBtn) sendCartEmailBtn.addEventListener('click', (e) => { e.preventDefault(); sendCartViaEmail(); });
  if (emptyCartBtn) emptyCartBtn.addEventListener('click', (e) => { e.preventDefault(); emptyCart(); });

  // Close help/cart/order modals via close button (delegated)
  document.addEventListener('click', function (e) {
    if (e.target.closest('.order-modal-close')) {
      // close any open modal
      const helpModal = document.getElementById('help-modal');
      if (helpModal && helpModal.classList.contains('open')) { helpModal.classList.remove('open'); helpModal.setAttribute('aria-hidden','true'); }
      if (modal && modal.classList.contains('open')) { closeModal(); }
      if (cartModal && cartModal.classList.contains('open')) { closeCartModal(); }
      document.body.style.overflow = '';
    }
  });

  // Focus trap implementation
  let currentTrap = null;
  let trapKeyHandler = null;

  function trapFocus(container) {
    releaseFocus();
    if (!container) return;
    currentTrap = container;
    const focusable = container.querySelectorAll('a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (first) first.focus();
    trapKeyHandler = function(e) {
      if (e.key !== 'Tab') return;
      if (focusable.length === 0) { e.preventDefault(); return; }
      if (e.shiftKey) { // shift + tab
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else { // tab
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', trapKeyHandler);
  }

  function releaseFocus() {
    if (trapKeyHandler) document.removeEventListener('keydown', trapKeyHandler);
    trapKeyHandler = null;
    currentTrap = null;
  }

  // Empty the cart
  function emptyCart() {
    CART = [];
    localStorage.setItem('credo_cart', JSON.stringify(CART));
    buildCartView();
    updateCartUI();
  }

  // Délégué d'ouverture depuis boutons de la page
  document.addEventListener('click', function (e) {
    const target = e.target.closest('.dish-button, .dishes-commander-button, .hero-cta-button');
    if (!target) return;
    e.preventDefault();

    const type = target.dataset.modalType || target.getAttribute('data-modal-type');
    if (type === 'general') {
      openGeneralModal();
      return;
    }

    if (type === 'dish') {
      openDishModalFromElement(target);
      return;
    }
  });

  // Fermer modal sur bouton
  closeBtn.addEventListener('click', closeModal);

  // Fermer en clickant hors de la carte
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  // Fermer avec Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  // Actualiser les descriptions de plats quand la langue change
  // Cette fonction est appelée après le changement de langue depuis language.js
  window.Credo = window.Credo || {};
  window.Credo.refreshDishDescriptions = function () {
    // Les descriptions seront actualisées via getDishDescription() côté client
    // Pour maintenant, on rely sur le fait que langue.js reload la page entière
    // Dans une future amélioration, on pourrait faire du rendu côté client
  };

})();
