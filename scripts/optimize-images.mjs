// Converts raw ChatGPT PNGs (assets-src/generated, git-ignored) into lean JPG sources
// in src/assets/generated. Astro then emits AVIF/WebP responsive variants at build time.
// Sprite sheets are sliced into individual tiles by trimming the dark background.
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'assets-src/generated';
const OUT = 'src/assets/generated';
await mkdir(OUT, { recursive: true });

const files = (await readdir(SRC)).filter((f) => f.endsWith('.png'));
for (const f of files) {
  const base = f.replace(/^mam-/, '').replace(/\.png$/, '');
  const input = path.join(SRC, f);
  if (base.startsWith('sheet-')) {
    const [cols, rows] = base === 'sheet-glyphs' ? [4, 2] : [3, 2];
    const meta = await sharp(input).metadata();
    const cw = Math.floor(meta.width / cols);
    const ch = Math.floor(meta.height / rows);
    let i = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const side = Math.min(cw, ch);
        const left = c * cw + Math.floor((cw - side) / 2);
        const top = r * ch + Math.floor((ch - side) / 2);
        await sharp(input)
          .extract({ left, top, width: side, height: side })
          .resize(640, 640, { fit: 'cover' })
          .jpeg({ quality: 86, mozjpeg: true })
          .toFile(path.join(OUT, `${base.replace('sheet-', '')}-${i}.jpg`));
        i++;
      }
    }
    console.log(`sliced ${f} → ${i} tiles`);
    continue;
  }
  await sharp(input)
    .resize({ width: 1800, height: 1800, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 84, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(path.join(OUT, `${base}.jpg`));
  console.log(`optimised ${f}`);
}

// Personal photography (originals in ~/Downloads, passed via PHOTOS env as a colon list)
const photos = (process.env.PHOTOS ?? '').split(':').filter(Boolean);
await mkdir('src/assets/photos', { recursive: true });
for (const [i, p] of photos.entries()) {
  await sharp(p)
    .resize({ width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(`src/assets/photos/photo-${i + 1}.jpg`);
  console.log(`photo ${i + 1} ← ${p}`);
}
