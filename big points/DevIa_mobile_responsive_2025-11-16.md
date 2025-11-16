═══════════════════════════════════════════════════════════════════════════════
 9. CORRECTIFS RESPONSIVE MOBILE (16 NOVEMBRE 2025 - SESSION FINALE)
═══════════════════════════════════════════════════════════════════════════════

Objectif :
  Éliminer tous les problèmes de responsive sur petits écrans (iPhone 12, iPhone 7).
  - Hero section image trop grande
  - Bouton burger trop gros
  - Navbar trop haute
  - Cartes de plats surdi mensionnées
  - Première carte invisible
  - Éléments dépassant de l'écran (overflow-x)
  - Image de fumée trop volumineuse

Fichiers Modifiés :
  → styles/general.css
  → styles/sections.css
  → styles/nav.css
  → styles/overrides.css

Breakpoints Cibles :
  - <=428px : iPhone 12 Pro / iPhone 11 emulation
  - <=375px : iPhone 7 / iPhone SE emulation

═══════════════════════════════════════════════════════════════════════════════
 CHANGEMENTS DÉTAILLÉS
═══════════════════════════════════════════════════════════════════════════════

A. Général (styles/general.css)
───────────────────────────────
  1. body.overflow-x: hidden ajouté dans @media (max-width: 428px & 375px)
     → Empêche le défilement horizontal involontaire
  
  2. .container max-width: 100% sur petits écrans
     → Force le conteneur à utiliser max 100% de la largeur viewport
  
  3. Réductions des paddings :
     - 428px: padding-left: 14px, padding-right: 14px
     - 375px: padding-left: 12px, padding-right: 12px
  
  4. Font sizes réduites:
     - heading: 22px (428px), 20px (375px)
     - subheading: 11px (428px), 10px (375px)

B. Navigation (styles/nav.css)
──────────────────────────────
  1. @media (max-width: 428px):
     - .site-header padding: 4px (réduit de 6px)
     - .header-container min-height: 44px (réduit de 48px)
     - .logo-img width: 40px (réduit de 48px)
     - .logo-text font-size: 14px (réduit de 16px)
     - .main-nav top: 44px (ajusté)
  
  2. @media (max-width: 375px):
     - .site-header padding: 3px
     - .header-container min-height: 40px
     - .logo-img width: 36px
     - .logo-text font-size: 13px
     - .main-nav top: 40px

C. Bouton Burger (styles/overrides.css)
───────────────────────────────────────
  1. @media (max-width: 428px):
     - width: 40px (réduit de 44px)
     - height: 40px
     - right: 12px (réduit de 16px)
     - top: 10px (réduit de 12px)
     - img size: 20px (réduit de 22px)
  
  2. @media (max-width: 375px):
     - width: 36px
     - height: 36px
     - right: 10px
     - top: 8px
     - img size: 18px

D. Héro Section (styles/sections.css)
─────────────────────────────────────
  1. @media (max-width: 428px):
     - .hero-section padding-top: 64px, padding-bottom: 30px, min-height: auto
     - .hero-container flex-direction: column (stack vertically)
     - .hero-title font-size: 20px (réduit de 56px)
     - .hero-image-container max-width: 280px, height: 200px
     - .hero-image-primary width/height: 180px (RÉDUIT de 320px)
     - .hero-image-secondary display: none (masquée)
     - .hero-cta-button width: 220px, height: 40px
     - .delivery-info, .trust-badge display: none
  
  2. @media (max-width: 375px):
     - .hero-title font-size: 18px
     - .hero-image-container max-width: 240px, height: 180px
     - .hero-image-primary width/height: 160px
     - .hero-cta-button width: 200px, height: 38px

E. Smoke Background (Hero & Dishes)
──────────────────────────────────
  1. @media (max-width: 768px):
     - .dishes-smoke-bg width: 600px, height: 500px (réduit de 1011x862)
     - .hero-image-secondary display: none
  
  2. @media (max-width: 428px):
     - .dishes-smoke-bg width: 400px, height: 350px, opacity: 0.3
  
  3. @media (max-width: 375px):
     - .dishes-smoke-bg width: 300px, height: 250px, opacity: 0.2

F. Cartes de Plats (styles/sections.css)
────────────────────────────────────────
  1. @media (max-width: 428px):
     - .dish-card width: 160px (réduit de 320px)
     - .dish-card height: 280px (réduit de 420px)
     - .dish-card padding: 14px (réduit de 20px)
     - .dish-image width: 130px, height: 100px
     - .dish-title font-size: 16px (réduit de 20px)
     - .dish-description font-size: 12px, -webkit-line-clamp: 2
     - .dish-button padding: 8px 12px, font-size: 12px
     
     - Identique pour .card-chicken, .card-sides, .card-sandwich
  
  2. @media (max-width: 375px):
     - .dish-card width: 140px, height: 240px
     - .dish-image width: 110px, height: 90px
     - .dish-title font-size: 14px
     - .dish-description font-size: 11px, -webkit-line-clamp: 1
     - .dish-button padding: 6px 10px, font-size: 11px

G. Dishes Grid
──────────────
  1. @media (max-width: 428px):
     - .dishes-grid gap: 16px, padding: 16px, margin-top: 40px
  
  2. @media (max-width: 375px):
     - .dishes-grid gap: 12px, padding: 12px, margin-top: 30px

═══════════════════════════════════════════════════════════════════════════════
 RÉSULTATS ATTENDUS
═══════════════════════════════════════════════════════════════════════════════

✓ Hero section image : 320px → 180px (428px), 160px (375px)
✓ Smoke background : 1011px → 400px (428px), 300px (375px)
✓ Burger button : 44px → 40px (428px), 36px (375px)
✓ Navbar : 48px min-height → 44px (428px), 40px (375px)
✓ Carte de plat : 320px → 160px (428px), 140px (375px)
✓ Première carte maintenant visible et entièrement à l'écran
✓ Aucun overflow-x (body: overflow-x: hidden)
✓ Container max-width: 100% sur mobile
✓ Tous les éléments adaptés à la largeur de l'écran

═══════════════════════════════════════════════════════════════════════════════
 COMMIT & DÉPLOIEMENT
═══════════════════════════════════════════════════════════════════════════════

Commit : 2b2fa1f3 (HEAD → main, origin/main)
Message : "Mobile responsive: reduce hero/cards/navbar/buttons sizes; prevent 
           overflow on <=428px & <=375px; fix smoke bg & images"

Fichiers changés : 5
  - styles/general.css
  - styles/sections.css
  - styles/nav.css
  - styles/overrides.css
  - tests/capture_mobile_simple.py (ajout helper)

Status : ✓ Pushé sur main

═══════════════════════════════════════════════════════════════════════════════
 VÉRIFICATION FINALE
═══════════════════════════════════════════════════════════════════════════════

Checklist de responsive validée :
  ✓ Hero section réduite et repositionnée (stack vertical sur mobile)
  ✓ Image fumée réduite et opacité diminuée
  ✓ Bouton burger responsive (40px → 36px)
  ✓ Navbar responsive (44px → 40px min-height)
  ✓ Cartes de plats compactées (160px → 140px)
  ✓ Première carte visible et entièrement sur écran
  ✓ Aucun overflow horizontal (body.overflow-x: hidden)
  ✓ Container max-width: 100% sur petits écrans
  ✓ Polices réduites (title 20px → 18px)
  ✓ Espacements (paddings) réduits de manière cohérente

Prochaines étapes recommandées (localiser) :
  1. Tester sur vrai appareil iPhone 12 & iPhone 7
  2. Vérifier les modals sur petits écrans
  3. Tester la galerie photos et les interactions tactiles
  4. Vérifier le footer responsive
