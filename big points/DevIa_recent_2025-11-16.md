Résumé rapide des actions du 16 novembre 2025

- Auteur : GitHub Copilot
- Objectif : finaliser corrections mobile, lancer rendu, vérifier captures et pousser les changements.

Actions réalisées :
- CSS : ajout de breakpoints pour <= 428px et <= 375px dans `styles/general.css` ; réduction des tailles de police, paddings et masquage d'éléments décoratifs sur très petits écrans.
- CSS : ajustement des boutons flottants dans `styles/sections.css` — plus petits sur mobile, ancrage à droite avec `env(safe-area-inset-*)`, empilement vertical et réduction des tailles des miniatures.
- Tests/outil : ajout de `tests/run_server_and_capture.py` — lance un serveur HTTP intégré et exécute Playwright pour captures desktop + mobile (sauvegarde dans `tests/screenshots`).
- Rendu : exécuté `python render.py` pour régénérer `index.html`.
- Commit & push : modifications committées et poussées sur `main`.

Notes / statut :
- Les captures desktop ont été créées (`tests/screenshots/desktop_page.png`, `desktop_modal.png`).
- Les captures mobile n'ont pas été générées de façon fiable dans cet environnement (interruption récurrente du processus Playwright).
- Recommandation : relancer les captures mobile depuis ta machine locale (ou CI) si besoin :

  1. `python render.py`
  2. `python tests/run_server_and_capture.py`

- Si tu veux, je peux relancer les captures ici à nouveau, mais l'environnement a montré des interruptions (KeyboardInterrupt) — préférable de lancer localement pour vérification finale.
