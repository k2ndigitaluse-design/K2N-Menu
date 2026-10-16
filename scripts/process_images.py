import os
from PIL import Image

def process_directory(src_dir, out_dir):
    if not os.path.exists(src_dir):
        print(f"Directory {src_dir} does not exist, skipping.")
        return

    os.makedirs(out_dir, exist_ok=True)
    valid_exts = {'.jpg', '.jpeg', '.png'}
    files = [f for f in os.listdir(src_dir) if os.path.splitext(f)[1].lower() in valid_exts]
    print(f"\nProcessing {len(files)} images from '{src_dir}' -> '{out_dir}':")

    for fname in sorted(files):
        base_name = os.path.splitext(fname)[0]
        src_path = os.path.join(src_dir, fname)

        with Image.open(src_path) as im:
            im = im.convert('RGB')
            w, h = im.size

            # Center-crop to 1:1 square if not already square
            if w != h:
                min_dim = min(w, h)
                left = (w - min_dim) // 2
                top = (h - min_dim) // 2
                im = im.crop((left, top, left + min_dim, top + min_dim))

            # 1. Card view: 900x900 WebP
            card_im = im.resize((900, 900), Image.Resampling.LANCZOS)
            card_path = os.path.join(out_dir, f"{base_name}-card.webp")
            card_im.save(card_path, 'WEBP', quality=82, method=6)
            card_kb = os.path.getsize(card_path) / 1024

            # 2. Thumb view: 300x300 WebP
            thumb_im = im.resize((300, 300), Image.Resampling.LANCZOS)
            thumb_path = os.path.join(out_dir, f"{base_name}-thumb.webp")
            thumb_im.save(thumb_path, 'WEBP', quality=80, method=6)
            thumb_kb = os.path.getsize(thumb_path) / 1024

            print(f"  Processed {base_name:32} -> Card: {card_kb:5.1f} KB | Thumb: {thumb_kb:4.1f} KB")

# 1. Process real photos
process_directory(r"source-images\real-originals", r"public\assets\images\real")

# 2. Process hero photos
process_directory(r"source-images\hero-originals", r"public\assets\images\hero")

print("\nAll image processing complete!")

