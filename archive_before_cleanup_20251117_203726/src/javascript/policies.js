// policies.js - Modales de Politique de Confidentialité et Conditions d'Utilisation
(function () {
  'use strict';

  // Contenu de la Politique de Confidentialité
  const PRIVACY_POLICY = `
    <h2>Politique de Confidentialité</h2>
    <p><strong>Dernière mise à jour :</strong> 15 novembre 2025</p>
    
    <h3>1. Introduction</h3>
    <p>Credo's (« nous », « notre » ou « le Site ») est engagé à protéger votre vie privée. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations.</p>
    
    <h3>2. Informations que nous collectons</h3>
    <p>Nous collectons les informations que vous nous fournissez directement, notamment :</p>
    <ul>
      <li>Votre nom et adresse e-mail lors de la prise de commande</li>
      <li>Votre numéro de téléphone pour la livraison</li>
      <li>Votre adresse de livraison</li>
      <li>Les préférences alimentaires et allergies</li>
      <li>Informations de paiement (traitées de manière sécurisée via WhatsApp ou email)</li>
    </ul>
    
    <h3>3. Comment nous utilisons vos informations</h3>
    <p>Nous utilisons les informations collectées pour :</p>
    <ul>
      <li>Traiter et livrer vos commandes</li>
      <li>Vous contacter concernant votre commande</li>
      <li>Améliorer notre service et nos produits</li>
      <li>Respecter les obligations légales</li>
    </ul>
    
    <h3>4. Partage de vos informations</h3>
    <p>Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous ne partageons vos informations que :</p>
    <ul>
      <li>Avec nos partenaires de livraison pour effectuer la livraison</li>
      <li>Si la loi l'exige ou pour protéger nos droits</li>
    </ul>
    
    <h3>5. Sécurité des données</h3>
    <p>Nous mettons en place des mesures de sécurité pour protéger vos informations personnelles contre l'accès, la modification, la divulgation ou la destruction non autorisée.</p>
    
    <h3>6. Cookies</h3>
    <p>Notre site utilise des cookies pour améliorer votre expérience. Ces cookies stockent vos préférences de thème et de langue localement sur votre appareil.</p>
    
    <h3>7. Modification de cette politique</h3>
    <p>Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment. Les modifications seront affichées sur cette page.</p>
    
    <h3>8. Nous contacter</h3>
    <p>Pour toute question concernant cette politique, veuillez nous contacter :</p>
    <ul>
      <li>Email : Credosfood@gmail.com</li>
      <li>Téléphone : +243 833 589 772</li>
      <li>Adresse : Lubumbashi, RD Congo</li>
    </ul>
  `;

  // Contenu des Conditions d'Utilisation
  const TERMS_OF_USE = `
    <h2>Conditions d'Utilisation</h2>
    <p><strong>Dernière mise à jour :</strong> 15 novembre 2025</p>
    
    <h3>1. Acceptation des conditions</h3>
    <p>En utilisant le site Credo's, vous acceptez ces Conditions d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.</p>
    
    <h3>2. Licence d'utilisation</h3>
    <p>Credo's vous accorde une licence limitée, non exclusive et révocable pour utiliser ce site à titre personnel et non commercial. Vous ne pouvez pas :</p>
    <ul>
      <li>Reproduire, distribuer ou transmettre le contenu sans autorisation</li>
      <li>Accéder au site par des moyens automatisés (scraping, bots)</li>
      <li>Modifier, adapter ou créer des œuvres dérivées du contenu</li>
      <li>Utiliser le site à des fins illégales ou non autorisées</li>
    </ul>
    
    <h3>3. Processus de commande</h3>
    <p>Lorsque vous passez une commande :</p>
    <ul>
      <li>Vous confirmez que vous avez au moins 18 ans</li>
      <li>Vous acceptez de passer la commande via WhatsApp, email ou notre formulaire</li>
      <li>Vous acceptez les tarifs affichés et les frais de livraison</li>
      <li>La commande devient définitive une fois confirmée par Credo's</li>
    </ul>
    
    <h3>4. Paiement</h3>
    <p>Le paiement doit être effectué selon les instructions fournies. Nous acceptons les paiements via WhatsApp, email ou en espèces à la livraison.</p>
    
    <h3>5. Livraison</h3>
    <p>Nous effectuons les livraisons dans la région de Lubumbashi. Les délais de livraison sont estimatifs et ne sont pas garantis. Nous ne sommes pas responsables des retards dus à des circonstances indépendantes de notre volonté.</p>
    
    <h3>6. Limitations de responsabilité</h3>
    <p>Credo's ne sera pas responsable de :</p>
    <ul>
      <li>Les dommages indirects, accidentels ou consécutifs</li>
      <li>Les pertes ou dommages aux produits lors du transport</li>
      <li>Les interruptions d'accès au site</li>
      <li>Les erreurs ou omissions du contenu</li>
    </ul>
    
    <h3>7. Propriété intellectuelle</h3>
    <p>Tous les contenus du site, y compris les textes, images, logos et designs, sont la propriété de Credo's et protégés par les lois sur les droits d'auteur.</p>
    
    <h3>8. Modifications du site</h3>
    <p>Credo's se réserve le droit de modifier, suspendre ou interrompre le site à tout moment sans préavis.</p>
    
    <h3>9. Modification des conditions</h3>
    <p>Nous nous réservons le droit de modifier ces Conditions d'Utilisation à tout moment. L'utilisation continue du site signifie votre acceptation des modifications.</p>
    
    <h3>10. Nous contacter</h3>
    <p>Pour toute question, veuillez nous contacter :</p>
    <ul>
      <li>Email : Credosfood@gmail.com</li>
      <li>Téléphone : +243 833 589 772</li>
      <li>Adresse : Lubumbashi, RD Congo</li>
    </ul>
  `;

  // Créer les modales HTML
  function createPoliciesModals() {
    const container = document.body;
    
    // Modal Politique de Confidentialité
    const privacyModal = document.createElement('div');
    privacyModal.id = 'privacy-modal';
    privacyModal.className = 'policies-modal';
    privacyModal.innerHTML = `
      <div class="policies-modal-card">
        <button class="policies-modal-close" aria-label="Close modal">&times;</button>
        <div class="policies-modal-content">
          ${PRIVACY_POLICY}
        </div>
      </div>
    `;
    container.appendChild(privacyModal);
    
    // Modal Conditions d'Utilisation
    const termsModal = document.createElement('div');
    termsModal.id = 'terms-modal';
    termsModal.className = 'policies-modal';
    termsModal.innerHTML = `
      <div class="policies-modal-card">
        <button class="policies-modal-close" aria-label="Close modal">&times;</button>
        <div class="policies-modal-content">
          ${TERMS_OF_USE}
        </div>
      </div>
    `;
    container.appendChild(termsModal);
  }

  // Fonction pour ouvrir une modale
  function openPoliciesModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  // Fonction pour fermer une modale
  function closePoliciesModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // Initialiser les modales au chargement
  document.addEventListener('DOMContentLoaded', () => {
    createPoliciesModals();

    // Ajouter les écouteurs pour les liens du footer
    const privacyLink = document.getElementById('privacy-link');
    const termsLink = document.getElementById('terms-link');

    if (privacyLink) {
      privacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        openPoliciesModal('privacy-modal');
      });
    }

    if (termsLink) {
      termsLink.addEventListener('click', (e) => {
        e.preventDefault();
        openPoliciesModal('terms-modal');
      });
    }

    // Délégation : fermeture sur tous les boutons close
    document.addEventListener('click', function (e) {
      if (e.target.closest('.policies-modal-close')) {
        const modals = document.querySelectorAll('.policies-modal');
        modals.forEach(m => {
          if (m.classList.contains('open')) {
            m.classList.remove('open');
            document.body.style.overflow = '';
          }
        });
      }
    });

    // Fermer les modales au clic en dehors
    document.querySelectorAll('.policies-modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    });

    // Fermer toutes les modales policies avec Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.policies-modal');
        modals.forEach(m => {
          if (m.classList.contains('open')) {
            m.classList.remove('open');
            document.body.style.overflow = '';
          }
        });
      }
    });
  });
})();
