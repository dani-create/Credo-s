# Déploiement et rendu (Credo's)

Ce document explique comment utiliser `render.py` pour générer `index.html`, vérifier localement et effectuer des QA rapides avant déploiement.

Prerequis
- Python 3.8+
- (optionnel) `pip install jinja2` si vous utilisez le renderer Jinja2 intégré

Rendu avec `render.py`
Le projet contient un script `render.py` qui utilise Jinja2 pour rendre les templates situés dans `templates/`.

Exemple :
```powershell
cd 'c:\Users\Glance\Desktop\glancer\Projet_Credo\Credo_App'
python render.py
# par défaut génère index.html depuis templates/base.html
```

Options :
- `--src` : fichier source (par défaut `index.html` si vous utilisez la version finale)
- `--out` : fichier de sortie (ex: `dist/index.html`)
- `--base-url` : remplace les placeholders `{{BASE_URL}}` dans le HTML

Vérification locale
Lancez un serveur HTTP simple et ouvrez la page :
```powershell
cd 'c:\Users\Glance\Desktop\glancer\Projet_Credo\Credo_App'
python -m http.server 8888
# puis ouvrez http://localhost:8888/ dans votre navigateur
```

QA rapides
- Tester menu mobile : `http://localhost:8888/?qa=burger_test`
- Tester scroller cartes : `http://localhost:8888/?qa=cards_test`

Checklist avant push
- Vérifier que `index.html` est généré et contient les bonnes URLs pour les images OG
- Lancer les QA et vérifier que :
  - le bouton burger n'apparaît pas sur desktop
  - la première carte est visible dans tous les scrollers
  - le modal général s'ouvre et la première vignette (Poulet) est visible
- Valider le sitemap et `robots.txt`

Workflow GitHub Actions
Le repository contient `.github/workflows/deploy.yml` qui publiera la racine sur GitHub Pages
lors d'un push sur `main`. Assurez-vous de configurer GitHub Pages pour servir la branche
`gh-pages` (ou adaptez le workflow si vous publiez depuis `main/docs`).

Contact
Pour toute question technique, référez-vous au fichier `big points/DevIa.txt` pour l'historique
et aux scripts `javascript/*.js` pour la logique d'interaction.
