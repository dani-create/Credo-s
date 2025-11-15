# Credo's - Fast Food Landing

Site statique généré via Jinja2. Ce dépôt contient le site HTML/CSS/JS de Credo's, un petit projet de site vitrine pour un fast-food.

Objectifs du dépôt
- Code séparé par responsabilité (templates, styles, javascript).
- Rendu via `render.py` (Jinja2) pour faciliter la maintenance et la génération statique.
- Interactions client (modal commande, mini‑panier) en vanilla JavaScript.

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

Structure du projet
- `templates/` : fichiers Jinja2 (`base.html`, `sections.html`, `footer.html`, ...)
- `styles/` : CSS modulaires (nav, sections, global)
- `javascript/` : scripts JS par section (`modal.js`, `navigation.js`, ...)
- `images/` : images statiques utilisées par le site
- `render.py` : script de rendu Jinja2

Contribuer
- Voir `CONTRIBUTING.md` pour les règles de contribution, conventions et commandes utiles.

Prochaines améliorations possibles
- Ajouter tests end-to-end (Playwright) pour vérifier le comportement du modal.
- Ajouter optimisation d'images et pipeline d'assets (compression, webp).
- Ajouter un petit serveur Flask pour démo locale et API de commande.
