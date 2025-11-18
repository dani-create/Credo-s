BUGFIX: Menu burger mobile naviguait vers l'ancre `#hero` avant choix

Problème
- Sur mobile, cliquer sur l'icône burger provoquait une navigation automatique vers la section `#hero` (accueil) avant que l'utilisateur puisse choisir une destination.

Cause
- Dans certains contextes (overlay ou hit-area étendue), le clic tombait sur un lien/élément d'ancrage sous-jacent, déclenchant la navigation.

Correction appliquée
- Ajout explicite de `type="button"` aux boutons du menu burger dans les templates :
  - `src/templates/nav.html`
  - `src/templates/components/header.html`
- Empêcher l'action par défaut et stopper la propagation du clic pour le toggle menu dans les scripts :
  - `src/javascript/navigation.js` (wrapper `e.preventDefault()` + `e.stopPropagation()` sur le clic et la délégation)
  - `src/javascript/main.js` (wrapper `e.preventDefault()` + `e.stopPropagation()` sur le clic)

Pourquoi ça règle le problème
- `type="button"` empêche tout comportement par défaut inattendu (ex: `submit` dans un formulaire).
- `preventDefault()` et `stopPropagation()` garantissent que le clic sur l'icône ne remonte pas et n'active pas un lien positionné sous l'icône.

Tests recommandés (local)
1. Regénérer le site : `python render.py`
2. Démarrer un serveur local : `python -m http.server 8000`
3. Ouvrir `http://localhost:8000/index.html` sur mobile (ou émul. navigateur) et cliquer sur l'icône burger :
   - Le menu doit s'ouvrir sans scroller vers `#hero`.
   - Cliquer sur un item doit fermer le menu puis scroller en douceur vers la section demandée.

Déploiement
- Les modifications ont été commitées et poussées sur `main` (si vous autorisez le push). Le site GitHub Pages sera mis à jour automatiquement après déploiement.

Si vous voulez que je pousse les changements maintenant et vérifie le rendu en ligne, dites "oui, pousse" et je pousserai et lancerai une vérification HTTP sur l'URL de Pages.
