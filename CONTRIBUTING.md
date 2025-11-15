# Contributing to Credo's

Merci de contribuer ! Ce document décrit les attentes pour que le projet reste propre et maintenable.

Style et bonnes pratiques
- JavaScript: vanilla JS, modules IIFE. Préférez des fonctions petites et testables.
- CSS: classes utilitaires limitées, éviter les sélecteurs trop spécifiques.
- Templates: variables claires et limitées au contexte nécessaire.

Processus de contributions
- Fork → branche feature/<court-descri> → Pull Request.
- Commits atomiques et messages clairs: `feat: ajouter modal de commande` / `fix: corriger focus trap`.

Tests
- Ajouter tests pytest pour la logique Python.
- Pour le JS, ajouter des tests end-to-end (Playwright) si vous modifiez l'interaction.

Relecture
- Les PRs devraient inclure une description courte et captures d'écran si UI changée.
