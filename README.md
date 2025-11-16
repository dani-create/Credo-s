# Credo's - Fast Food Landing

Site statique généré via Jinja2. Ce dépôt contient le site HTML/CSS/JS de Credo's, un petit projet de site vitrine pour un fast-food.

Objectifs du dépôt
- Code séparé par responsabilité (templates, styles, javascript).
- Rendu via `render.py` (Jinja2) pour faciliter la maintenance et la génération statique.
- Interactions client (modal commande, mini‑panier) en vanilla JavaScript.
- **Entièrement responsive sur mobile, tablette et desktop**.
- Modales et pop-ups adaptés à tous les écrans.

## Améliorations Récentes (Novembre 2025)

### 🔧 Responsive Design
- **Modales responsives** : Taille textes, boutons et fenêtres adaptées au mobile (480px+)
- **Padding et espacement** : Réduits sur petits écrans pour meilleure utilisation de l'espace
- **Breakpoints** : 768px (tablettes), 480px (mobiles petits)
- **Images modales** : 260px (desktop) → 200px (tablette) → 140px (mobile)
- **Boutons** : Largeur 100% sur mobile pour meilleure accessibilité tactile

### 🐛 Corrections du Scroll Mobile
- **Menu mobile** : Scroll bloqué résolu - le menu n'empêche plus le scroll de la page
- **Modales** : Scroll interne des modales activé avec `max-height: calc(100vh - Xpx)`
- **Navigation** : Classe `body.nav-open` gère le style sans bloquer le scroll

### 🎨 Iconographie Contact
- **Light mode** : Icones (email, phone, address) avec fond noir et texte blanc
- **Dark mode** : Icones inversées pour meilleur contraste
- **Variables CSS** : `--contact-icon-bg` pour gérer le thème dynamiquement

Prérequis
- Python 3.8+ (recommandé)
- Installer les dépendances :

```powershell
python -m pip install -r requirements.txt
```

Générer le site

```powershell
python render.py
# ouvre index.html ensuite dans un navigateur
```

Tests

```powershell
pytest -q
```

## Tests en Local

Pour vérifier le rendu sur mobile :

```powershell
# Générer le site
python render.py

# Ouvrir index.html dans le navigateur (ou utiliser un serveur local)
python -m http.server 8000
# Puis visiter http://localhost:8000 et utiliser DevTools pour simuler mobile
```

## Vérification Mobile
- Ouvrir DevTools (F12)
- Cliquer sur "Toggle device toolbar" (Ctrl+Shift+M)
- Tester les breakpoints : 480px, 768px, 1024px
- **Points clés à vérifier** :
  - [ ] Modales avec texte lisible et boutons tactiles
  - [ ] Menu n'empêche pas le scroll
  - [ ] Icones de contact visibles en light mode
  - [ ] Images optimisées et responsives

Structure du projet
- `templates/` : fichiers Jinja2 (`base.html`, `sections.html`, `footer.html`, ...)
- `styles/` : CSS modulaires (nav, sections, general, about, footer, policies)
  - `sections.css` : Modales, contact, plats (+1500 lignes avec media queries)
  - `nav.css` : Navigation sticky et menu mobile
  - `general.css` : Thèmes (light/dark), variables CSS globales
- `javascript/` : scripts JS par section
  - `modal.js` : Gestion des pop-ups de commande
  - `navigation.js` : Menu mobile, active link detection, sticky header
  - `contact.js` : Animations de la section contact
  - `modal.js`, `dishes.js`, `hero.js`, `testimonials.js`
- `images/` : images statiques utilisées par le site
- `render.py` : script de rendu Jinja2
- `download_images.py` : Script pour télécharger et optimiser les images

## Déploiement sur GitHub Pages

Le site est déployé via GitHub Pages sur la branche `gh-pages`.

**Checklist de mise en production** :
1. Générer le site : `python render.py`
2. Tester en local : Vérifier tous les breakpoints mobile
3. Valider les modales : Cliquer sur chaque bouton "Commander"
4. Vérifier le menu mobile : Ouvrir/fermer et scroller
5. Tester les thèmes : Light mode et dark mode
6. Pousser les changements : `git push origin main`
7. Le site se met à jour automatiquement sur GitHub Pages

Contribuer
- Voir `CONTRIBUTING.md` pour les règles de contribution, conventions et commandes utiles.

## Dépannage

**Le menu n'apparaît pas sur mobile ?**
- Vérifier le breakpoint : `@media (max-width: 992px)` dans nav.css

**Les modales sont coupées sur mobile ?**
- Vérifier `max-height: calc(100vh - 40px)` et `max-width: 90%` dans sections.css

**Le scroll est bloqué ?**
- Vérifier que navigation.js n'ajoute pas `overflow: hidden` au body pendant le scroll

Prochaines améliorations possibles
- Ajouter tests end-to-end (Playwright) pour vérifier le comportement du modal sur mobile.
- Ajouter optimisation d'images (WebP, compression) via `download_images.py`.
- Ajouter un petit serveur Flask pour démo locale et API de commande.
- Tests Lighthouse pour performance et accessibilité.
