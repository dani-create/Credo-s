# Architecture - Credo's site

Résumé

Le site est une site statique rendu via Jinja2 (`render.py`). L'approche vise à séparer clairement la logique de rendu (Python/Jinja) des assets statiques (CSS/JS/images).

Dossiers principaux
- `templates/` : templates Jinja2. `base.html` assemble les parties (nav, sections, footer).
- `styles/` : CSS modulaire (ex: `nav.css`, `sections.css`) pour faciliter la maintenance.
- `javascript/` : scripts par section, responsabilité limitée (navigation, hero, dishes, modal).
- `images/` : assets images.
- `render.py` : point d'entrée pour générer `index.html`.

Flux de rendu
1. `render.py` charge les templates via Jinja2.
2. `get_context_data()` centralise les données (titres, descriptions, chemins images, listes de plats).
3. `renderer.render_to_file('base.html', 'index.html', **context)` produit le site statique.

Comment reprendre le projet
- Les templates sont indépendants : modifier `templates/sections.html` pour changer le contenu des sections.
- Les images attendues sont référencées depuis `images/` ; remplacez les fichiers et relancez `python render.py`.
- Pour modifier l'interaction (ex: modal), éditez `javascript/modal.js`.

Conventions
- Variables de template: nommez `snake_case` (ex: `hero_title`).
- JS: IIFE pour encapsuler, éviter pollutions globales. Exporter via `window.Credo` si nécessaire.
