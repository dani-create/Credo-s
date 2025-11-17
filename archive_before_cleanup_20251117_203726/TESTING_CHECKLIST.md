# Checklist de Test - Améliorations Responsives (Nov 2025)

## 📱 Tests Mobile (480px - iPhone SE/XR)

### Modales - Responsivité
- [ ] Ouvrir un modal (Commander bouton)
- [ ] Vérifier la taille du modal : max-width 90%, padding réduit (14px)
- [ ] Vérifier l'image du plat : 140px (responsive)
- [ ] Vérifier le texte description : font-size 13px lisible
- [ ] Vérifier les boutons : 100% width, padding réduit, font-size 13px
- [ ] Vérifier le texte titre du modal : font-size 16px lisible
- [ ] Vérifier les boutons de variante : petits, gap 5px
- [ ] Scroller dans le modal : max-height calc(100vh - 30px) fonctionne

### Menu Mobile - Scroll Non-Bloqué
- [ ] Ouvrir le menu hamburger
- [ ] Tenter de scroller la page : le scroll doit FONCTIONNER (pas bloqué)
- [ ] Fermer le menu en cliquant dehors
- [ ] Vérifier que body.nav-open classe est appliquée mais n'empêche pas le scroll
- [ ] Tester le menu sur petits écrans (375px) et moyens (480px)

### Icons de Contact - Thèmes
#### Light Mode
- [ ] Activer le thème light
- [ ] Aller à la section contact
- [ ] Vérifier que les icones ont un fond NOIR (#000000)
- [ ] Vérifier que le texte des icones est BLANC
- [ ] Vérifier que toutes 3 icones (email, phone, address) sont noires

#### Dark Mode
- [ ] Activer le thème dark
- [ ] Vérifier que les icones sont inversées correctement
- [ ] Vérifier la lisibilité des icones

## 💻 Tests Tablette (768px - iPad)

### Modales - Adaptation
- [ ] Ouvrir un modal
- [ ] Vérifier max-width 90%, max-height calc(100vh - 40px)
- [ ] Vérifier padding 16px
- [ ] Vérifier image 180px (transitoire desktop → mobile)
- [ ] Vérifier font-size titre 18px
- [ ] Vérifier buttons flex-direction column sur écrans < 768px

### Contact Items
- [ ] Vérifier items empilés verticalement
- [ ] Vérifier icones toujours visibles

## 🖥️ Tests Desktop (1024px+)

### Modales - Desktop
- [ ] Ouvrir un modal
- [ ] Vérifier width 680px standard
- [ ] Vérifier image 260px (grande)
- [ ] Vérifier padding 22px standard
- [ ] Vérifier font-size 20px titre, 15px description

### Menu - Desktop
- [ ] Menu affichable horizontalement
- [ ] Pas de menu hamburger

### Contact
- [ ] Items affichés côte à côte (space-between)
- [ ] Icones avec fond approprié au thème

## 🔄 Tests Généraux

### Thème Clair (Light Mode)
- [ ] Page chargée
- [ ] Cliquer bouton theme (lune)
- [ ] Vérifier que le fond devient clair (#f7f7f7)
- [ ] Vérifier que les icones contact deviennent noirs
- [ ] Vérifier que le texte devient foncé

### Thème Sombre (Dark Mode)
- [ ] Cliquer bouton theme
- [ ] Vérifier fond noir (#0b0618)
- [ ] Vérifier texte blanc
- [ ] Vérifier icones inversées

### Modales Complètes
- [ ] Cliquer "Commander" sur un plat
- [ ] Modal s'ouvre correctement
- [ ] Lire la description (ne doit pas être coupée)
- [ ] Voir les boutons WhatsApp et Email (couleurs appropriées)
- [ ] Cliquer variantes et voir prix mis à jour
- [ ] Fermer le modal avec X ou Fermer

### Menu Mobile
- [ ] Cliquer hamburger
- [ ] Menu s'ouvre depuis la droite
- [ ] Cliquer un lien de navigation
- [ ] Menu se ferme et scroll vers la section
- [ ] Scroll fonctionne pendant que menu est visible

### Panier (Mini-Cart)
- [ ] Cliquer "Ajouter au panier"
- [ ] Nombre dans le panier s'incrémente
- [ ] Cliquer panier
- [ ] Modal panier s'ouvre
- [ ] Items visibles avec images responsives
- [ ] Boutons d'envoi WhatsApp/Email fonctionnent
- [ ] Bouton vider panier fonctionne

## ✅ Points Critiques

**Responsive Design**
- [ ] Aucune barre de scroll horizontale sur mobile
- [ ] Textes lisibles sans zoom
- [ ] Boutons cliquables (min 44x44px)

**Performance**
- [ ] Page charge en < 3s
- [ ] Images optimisées
- [ ] Pas d'erreurs console (F12)

**Accessibilité**
- [ ] Modales fermables au clavier (Escape)
- [ ] Focus visible sur tous les boutons
- [ ] Contraste suffisant en light mode (icones noires sur fond)

## 📋 Breakpoints Testés

- **375px** (iPhone 7/SE) - Très petits écrans
- **414px** (iPhone XR)
- **480px** (Android standard)
- **768px** (iPad mini)
- **1024px** (iPad/Desktop)
- **1280px+** (Grand desktop)

## 🚀 Après Tests

Si tous les points passent :
1. [ ] Commiter les changements
2. [ ] Pousser sur GitHub
3. [ ] Vérifier le site live sur GitHub Pages
4. [ ] Tester sur appareil réel si possible

## 📝 Notes

- Serveur local : `http://localhost:8000`
- DevTools mobile : Ctrl+Shift+M (Chrome/Firefox)
- Tous les breakpoints testés sans extension ou modification

---

**Date de test :** 17 Novembre 2025  
**Testeur :** AI Assistant (GitHub Copilot)  
**Version :** 1.0 - Responsive Mobile Update
