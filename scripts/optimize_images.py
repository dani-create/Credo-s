from PIL import Image
from pathlib import Path
import sys

# Configuration
SRC_DIR = Path('images')
OUT_DIR = Path('images-optimized')
MAX_WIDTH = 1600
WEBP_QUALITY = 80

OUT_DIR.mkdir(exist_ok=True)

exts = ['.png', '.jpg', '.jpeg', '.webp']

images = [p for p in SRC_DIR.iterdir() if p.suffix.lower() in exts]

print(f'Found {len(images)} images to process in {SRC_DIR}...')

for p in images:
    try:
        with Image.open(p) as im:
            orig_mode = im.mode
            # Resize if wider than MAX_WIDTH
            w, h = im.size
            if w > MAX_WIDTH:
                ratio = MAX_WIDTH / float(w)
                new_h = int(h * ratio)
                im = im.resize((MAX_WIDTH, new_h), Image.LANCZOS)
            # Convert to RGB for webp/jpeg
            if im.mode in ('RGBA', 'LA'):
                background = Image.new('RGB', im.size, (255,255,255))
                background.paste(im, mask=im.split()[3])
                im2 = background
            else:
                im2 = im.convert('RGB')

            outp = OUT_DIR / (p.stem + '.webp')
            im2.save(outp, 'WEBP', quality=WEBP_QUALITY, method=6)
            print(f' -> {p.name} -> {outp} ({outp.stat().st_size//1024} KB)')
    except Exception as e:
        print('Error processing', p, e)

print('Done.')
