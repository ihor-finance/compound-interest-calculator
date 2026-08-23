/**
 * Regenerates every Android launcher icon from public/web-app-manifest-512x512.png.
 *
 * The Capacitor template ships a placeholder icon, which is what was still
 * showing on the home screen. Run this after changing the app icon:
 *
 *   npm install --no-save --include=optional sharp
 *   node scripts/generate-android-icons.mjs
 *
 * sharp is deliberately not a project dependency — it is a ~100MB native module
 * needed only for this occasional asset task, never for a build.
 *
 * The source is a green gradient rounded square with a white glyph, sitting in a
 * large transparent margin. Three sets of files come out of it:
 *
 *   ic_launcher.png             legacy square icon (Android 7, our minSdk)
 *   ic_launcher_round.png       legacy round icon
 *   ic_launcher_foreground.png  adaptive foreground: the glyph alone
 *   ic_launcher_background.png  adaptive background: the gradient alone
 *
 * Splitting the adaptive icon into glyph + gradient matters: the launcher masks
 * the 108dp layer down to roughly its central 72dp, so anything drawn near the
 * edge is cropped. Keeping the glyph small and centred and letting the gradient
 * bleed to the edge means every mask shape — circle, squircle, teardrop — yields
 * a clean green tile with the glyph intact.
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const source = path.join(root, 'public/web-app-manifest-512x512.png');
const resDir = path.join(root, 'android/app/src/main/res');

// Sampled from the source with the analysis in the commit that added this file.
const GRADIENT_TOP = '#71E7AA';
const GRADIENT_MID = '#3A9A78';
const GRADIENT_BOTTOM = '#1A7361';

/** Density buckets: legacy icons are 48dp, adaptive layers are 108dp. */
const DENSITIES = [
  { dir: 'mdpi', scale: 1 },
  { dir: 'hdpi', scale: 1.5 },
  { dir: 'xhdpi', scale: 2 },
  { dir: 'xxhdpi', scale: 3 },
  { dir: 'xxxhdpi', scale: 4 },
];

/** Glyph width as a fraction of the 108dp adaptive canvas. The mask keeps the
 *  central ~66%, so 0.48 leaves comfortable clearance on every launcher. */
const GLYPH_FRACTION = 0.48;

const gradientSvg = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0.35" y2="1">
      <stop offset="0%" stop-color="${GRADIENT_TOP}"/>
      <stop offset="52%" stop-color="${GRADIENT_MID}"/>
      <stop offset="100%" stop-color="${GRADIENT_BOTTOM}"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="url(#g)"/>
</svg>`;

const roundedSquareSvg = (size) => {
  const r = Math.round(size * 0.225); // matches the source artwork's corner radius
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0.35" y2="1">
      <stop offset="0%" stop-color="${GRADIENT_TOP}"/>
      <stop offset="52%" stop-color="${GRADIENT_MID}"/>
      <stop offset="100%" stop-color="${GRADIENT_BOTTOM}"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${r}" ry="${r}" fill="url(#g)"/>
</svg>`;
};

const circleSvg = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0.35" y2="1">
      <stop offset="0%" stop-color="${GRADIENT_TOP}"/>
      <stop offset="52%" stop-color="${GRADIENT_MID}"/>
      <stop offset="100%" stop-color="${GRADIENT_BOTTOM}"/>
    </linearGradient>
  </defs>
  <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="url(#g)"/>
</svg>`;

/**
 * Lifts the white glyph off the green tile as a transparent PNG.
 *
 * The red channel separates them cleanly — the gradient never rises above 113,
 * the glyph sits near 250 — so ramping alpha between those keeps the original
 * anti-aliased edges instead of producing a jagged threshold cut.
 */
async function extractGlyph() {
  const { data, info } = await sharp(source).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: W, height: H, channels: C } = info;

  const out = Buffer.alloc(W * H * 4);
  let minX = W, minY = H, maxX = -1, maxY = -1;

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * C;
      const red = data[i];
      const srcAlpha = data[i + 3];
      const alpha = Math.max(0, Math.min(255, Math.round(((red - 140) / 110) * 255))) * (srcAlpha / 255);

      const o = (y * W + x) * 4;
      out[o] = 255; out[o + 1] = 255; out[o + 2] = 255;
      out[o + 3] = Math.round(alpha);

      if (alpha > 24) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  if (maxX < 0) throw new Error('No glyph pixels found — has the source icon changed?');

  return sharp(out, { raw: { width: W, height: H, channels: 4 } })
    .extract({ left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 })
    .png()
    .toBuffer();
}

/** Centres `overlay`, scaled to `targetWidth`, on a `size` canvas. */
async function centreGlyph(glyph, size, targetWidth) {
  const meta = await sharp(glyph).metadata();
  const width = Math.round(targetWidth);
  const height = Math.round((meta.height / meta.width) * width);
  const resized = await sharp(glyph).resize(width, height).png().toBuffer();
  return {
    input: resized,
    left: Math.round((size - width) / 2),
    top: Math.round((size - height) / 2),
  };
}

const written = [];

async function write(dir, name, buffer) {
  const target = path.join(resDir, dir);
  fs.mkdirSync(target, { recursive: true });
  const file = path.join(target, name);
  fs.writeFileSync(file, buffer);
  written.push(`${dir}/${name}`);
}

const glyph = await extractGlyph();

for (const { dir, scale } of DENSITIES) {
  const legacy = Math.round(48 * scale);
  const adaptive = Math.round(108 * scale);

  // Legacy square — the original rounded-square look, for Android 7.
  await write(`mipmap-${dir}`, 'ic_launcher.png',
    await sharp(Buffer.from(roundedSquareSvg(legacy)))
      .composite([await centreGlyph(glyph, legacy, legacy * 0.62)])
      .png({ compressionLevel: 9 }).toBuffer());

  // Legacy round.
  await write(`mipmap-${dir}`, 'ic_launcher_round.png',
    await sharp(Buffer.from(circleSvg(legacy)))
      .composite([await centreGlyph(glyph, legacy, legacy * 0.56)])
      .png({ compressionLevel: 9 }).toBuffer());

  // Adaptive foreground — glyph only, on transparency.
  await write(`mipmap-${dir}`, 'ic_launcher_foreground.png',
    await sharp({
      create: { width: adaptive, height: adaptive, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
    })
      .composite([await centreGlyph(glyph, adaptive, adaptive * GLYPH_FRACTION)])
      .png({ compressionLevel: 9 }).toBuffer());

  // Adaptive background — gradient bleeding to every edge.
  await write(`mipmap-${dir}`, 'ic_launcher_background.png',
    await sharp(Buffer.from(gradientSvg(adaptive)))
      .png({ compressionLevel: 9 }).toBuffer());
}

// Play Store listing icon, kept in step with the launcher.
const storeIcon = path.join(root, 'docs/store-assets/icon-512.png');
fs.mkdirSync(path.dirname(storeIcon), { recursive: true });
await sharp(Buffer.from(roundedSquareSvg(512)))
  .composite([await centreGlyph(glyph, 512, 512 * 0.62)])
  .png({ compressionLevel: 9 })
  .toFile(storeIcon);

console.log(`Wrote ${written.length} launcher files:`);
for (const f of written) console.log(`  ${f}`);
console.log('  docs/store-assets/icon-512.png');
