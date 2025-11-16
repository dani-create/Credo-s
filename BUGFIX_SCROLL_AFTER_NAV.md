# Fix: Scroll Stuck After Mobile Menu Navigation - 17 Novembre 2025

## 🐛 Problème Identifié

**Symptôme :** Après avoir cliqué sur un lien du menu burger pour naviguer vers une section, le scroll restait bloqué. Les utilisateurs mobiles ne pouvaient pas scroller vers d'autres sections.

**Cause Racine :**
La classe `nav-open` n'était pas complètement retirée du `body` après le `setTimeout`. Quand le scroll était lancé, la classe restait présente et bloquait complètement le défilement.

```javascript
// PROBLÈME: la classe nav-open restait et bloquait le scroll
setTimeout(() => {
  targetSection.scrollIntoView({ behavior: 'smooth' });
}, 100);
```

---

## ✅ Solution Implémentée

**Fichier modifié :** `javascript/navigation.js`

### Changement 1: Amélioration de `closeMenu()`

```javascript
// AVANT
function closeMenu() {
  if (!mainNav) return;
  mainNav.classList.remove('is-open');
  if (menuToggle) {
    menuToggle.setAttribute('aria-expanded', 'false');
  }
  if (document.body) {
    document.body.classList.remove('nav-open');
  }
}

// APRÈS - Force la libération complète
function closeMenu() {
  if (!mainNav) return;
  mainNav.classList.remove('is-open');
  if (menuToggle) {
    menuToggle.setAttribute('aria-expanded', 'false');
  }
  if (document.body) {
    document.body.classList.remove('nav-open');
    // NOUVEAU: Force la restauration du scroll
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }
}
```

### Changement 2: Amélioration du Click Handler

```javascript
// AVANT
setTimeout(() => {
  targetSection.scrollIntoView({ behavior: 'smooth' });
}, 100);

// APRÈS - Vérifie et libère le scroll avant smooth scroll
setTimeout(() => {
  // Force la libération du scroll avant smooth scroll
  if (document.body.classList.contains('nav-open')) {
    document.body.classList.remove('nav-open');
  }
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
  
  // Smooth scroll vers la section
  targetSection.scrollIntoView({ behavior: 'smooth' });
}, 150);  // Délai augmenté à 150ms pour meilleure fermeture
```

---

## 🔍 Détails Techniques

### Pourquoi le scroll était bloqué?

1. **Classe `nav-open` non retirée :** La classe restait sur le body
2. **CSS Cascade :** Même si on retrait la classe, les styles inline pouvaient rester
3. **Timing :** Le scroll était lancé avant que le body soit libéré

### Pourquoi la solution fonctionne?

1. **`document.body.style.overflow = ''`** : Retire tout style inline d'overflow
2. **`document.documentElement.style.overflow = ''`** : Libère le html aussi
3. **Vérification supplémentaire** : Double-check que la classe est retirée
4. **Délai 150ms** : Laisse plus de temps pour que tout se libère

---

## 📋 Checklist de Validation

- [x] Mobile (480px): Ouvrir menu, cliquer lien, scroll libre ✅
- [x] Mobile (375px): Idem sur petit écran ✅
- [x] Multiple clicks: Naviguer plusieus fois, scroll libre à chaque fois ✅
- [x] Scroll vers le bas: Peut scroller après navigation ✅
- [x] Scroll vers le haut: Peut scroller après navigation ✅
- [x] Tablette (768px): Fonctionne ✅
- [x] Desktop (1024px+): Pas d'interférences ✅

---

## 🎯 Résultat Final

**LE SCROLL FONCTIONNE LIBREMENT APRÈS NAVIGATION ✅**

### Ce Qui Fonctionne Maintenant:
✅ Menu s'ouvre  
✅ Cliquer lien → navigation fluide  
✅ Menu se ferme complètement  
✅ **Scroll LIBRE après navigation** (RÉSOLU!)  
✅ Peut naviguer vers n'importe quelle section  
✅ Pas de blocage  

---

**Status :** ✅ FIXED AND TESTED
