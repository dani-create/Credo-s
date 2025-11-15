"""
Script pour télécharger des images haute qualité pour les plats
Utilise des sources libres (Pexels, Pixabay, etc.)
"""

import os
import urllib.request
import urllib.error
from pathlib import Path

# Dossier des images
IMAGE_DIR = Path('images')
IMAGE_DIR.mkdir(exist_ok=True)

# URLs libres pour les images (sources CC0 / libres d'utilisation)
IMAGES = {
    'burrito.jpg': [
        # Pexels URLs - images libres
        'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    'shawarma.jpg': [
        'https://images.pexels.com/photos/5732445/pexels-photo-5732445.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    'tenders.jpg': [
        'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=500',
    ]
}

def download_image(filename, urls):
    """Tentative de télécharger une image à partir d'une liste d'URLs"""
    filepath = IMAGE_DIR / filename
    
    # Si le fichier existe déjà, passer
    if filepath.exists():
        print(f"✓ {filename} existe déjà")
        return True
    
    for url in urls:
        try:
            print(f"  → Tentative de télécharger {filename} depuis {url[:50]}...")
            urllib.request.urlretrieve(url, str(filepath))
            print(f"✓ Téléchargé {filename}")
            return True
        except (urllib.error.URLError, urllib.error.HTTPError) as e:
            print(f"  ✗ Erreur: {e}")
            continue
    
    print(f"✗ Impossible de télécharger {filename}, création d'un placeholder")
    # Créer un placeholder si tous les téléchargements échouent
    create_placeholder(filename)
    return False

def create_placeholder(filename):
    """Créer une image placeholder si le téléchargement échoue"""
    filepath = IMAGE_DIR / filename
    
    # Créer une mini image placeholder PNG en base64 (1x1 transparent)
    import base64
    placeholder_data = base64.b64decode(
        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
    )
    
    with open(filepath, 'wb') as f:
        f.write(placeholder_data)
    print(f"  ✓ Placeholder créé pour {filename}")

def main():
    print("="*60)
    print("Téléchargement des images de plats")
    print("="*60 + "\n")
    
    for filename, urls in IMAGES.items():
        download_image(filename, urls)
        print()
    
    print("="*60)
    print("✓ Téléchargement terminé")
    print("="*60)

if __name__ == '__main__':
    main()
