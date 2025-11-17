# Réorganisation du dépôt

Résumé des actions réalisées le 17/11/2025 :

- Le contenu source (templates, styles, javascript, images, scripts) a été centralisé sous le dossier `src/`.
- Le fichier `render.py` en racine a été mis à jour pour utiliser `src/templates` comme source de templates.
- Le plat "Burrito" a été supprimé du code client (`javascript/modal.js`) et des traductions (`javascript/dish-translations.js`).
- Les fichiers CSS mis à jour (modales responsives, corrections mobile menu) ont été copiés dans `src/styles/`.
- Le rendu statique a été généré avec `python render.py`, produisant `index.html` à la racine.
- Les dossiers racine `templates/`, `styles/`, `javascript/`, `images/` et `scripts/` ont été fusionnés vers `src/` et nettoyés quand possible.

Fichiers restant à la racine (intentionnel) :

- `index.html` (fichier généré)
- `render.py` (script de génération)
- documentation et fichiers de configuration (`README.md`, `LICENSE`, `docs/`, etc.)

Commandes utiles

- Générer `index.html` (depuis la racine du dépôt) :

```powershell
python render.py
```

- Démarrer un serveur local pour vérifier (PowerShell) :

```powershell
python -m http.server 8000;
Start-Process 'http://localhost:8000/index.html'
```

Conseils de déploiement (GitHub Pages)

1. Validez vos changements :

```powershell
git add .
git commit -m "Reorganize source into src/, remove Burrito, update render.py and styles";
git push origin main
```

2. Si vous utilisez GitHub Pages (branch `main` ou `gh-pages` selon configuration), vérifiez que la page sert `index.html` depuis la racine.

Notes et recommandations

- Avant de supprimer définitivement d'autres fichiers, vérifiez les copies dans `src/` et testez le rendu localement.
- Si vous souhaitez que la racine contienne *seulement* `index.html` et `render.py` (et aucun autre fichier), dites-le — je peux supprimer les autres fichiers non nécessaires, mais je recommande de conserver `README.md`, `LICENSE` et `docs/` pour la traçabilité.

Si vous voulez que je commette et pousse ces changements, dites-le et je ferai le commit + push sur `main`.
