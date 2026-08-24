/**
 * Regenerates every Android launcher icon from public/web-app-manifest-512x512.png.
 *
 *   npm install --no-save --include=optional sharp
 *   node scripts/generate-android-icons.mjs
 *
 * sharp is deliberately not a project dependency — it is a ~100MB native module
 * needed only for this occasional asset task, never for a build.
 *
 * Everything here is derived from the source artwork; nothing is redrawn. An
 * earlier version approximated the tile with an SVG rounded rectangle and a
 * hand-picked gradient, which came out visibly squarer than the original
 * squircle and slightly off in colour.
 *
 *   ic_launcher.png             legacy icon — the source artwork, cropped and resized
 *   ic_launcher_round.png       same artwork; it is already a rounded tile
 *   ic_launcher_foreground.png  adaptive foreground: the white glyph alone
 *   ic_launcher_background.png  adaptive background: the tile's own gradient
 *
 * Android 8+ composites the last two and then crops the 108dp result to roughly
 * its central 72dp, in whatever shape the launcher uses. That is why the icon
 * has to be split at all: a single full-bleed copy of the artwork would have its
 * glyph clipped by a circular mask. Splitting keeps the glyph inside the safe
 * area while the gradient bleeds past every edge.
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const source = path.join(root, 'public/web-app-manifest-512x512.png');
const resDir = path.join(root, 'android/app/src/main/res');

const DENSITIES = [
  { dir: 'mdpi', scale: 1 },
  { dir: 'hdpi', scale: 1.5 },
  { dir: 'xhdpi', scale: 2 },
  { dir: 'xxhdpi', scale: 3 },
  { dir: 'xxxhdpi', scale: 4 },
];

/**
 * Glyph width as a fraction of the 108dp adaptive canvas.
 *
 * In the source the glyph is 67.5% of the tile's width. The launcher shows about
 * 72 of the 108dp, so matching that proportion means 0.675 × 72 ÷ 108 = 0.45.
 * The icon then reads at the same weight as the original artwork.
 */
const GLYPH_FRACTION = 0.45;

/**
 * Saturation, 0 for any grey and 1 for a fully saturated hue.
 *
 * This is what separates the white glyph from the green tile. Brightness does
 * not: the gradient's lightest band near the top of the tile reaches 160 red,
 * above the 150 an earlier version assumed, so a red-channel threshold pulled a
 * wide strip of pale green into the glyph layer. That strip both showed up as a
 * haze over the icon and stretched the glyph's bounding box 61px upwards, which
 * pushed the artwork visibly low once it was centred.
 *
 * Measured on the source the two groups do not overlap at all: every glyph pixel
 * sits at or below 0.05, and the least saturated gradient pixel anywhere on the
 * tile is 0.3478.
 */
const saturation = (r, g, b) => {
  const max = Math.max(r, g, b);
  return max === 0 ? 0 : (max - Math.min(r, g, b)) / max;
};

/** Below this a pixel is pure glyph; above GRADIENT_SAT it is pure tile. */
const GLYPH_SAT = 0.12;
const GRADIENT_SAT = 0.30;

const raw = await sharp(source).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = raw.info;
const data = raw.data;
const at = (x, y) => (y * W + x) * C;

/** Opaque bounds of the tile, so the transparent margin never reaches the output. */
function tileBounds() {
  let minX = W, minY = H, maxX = -1, maxY = -1;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (data[at(x, y) + 3] > 24) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  return { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

/**
 * Lifts the white glyph off the tile as a transparent PNG.
 *
 * Ramping alpha across the saturation gap preserves the glyph's original
 * anti-aliased edges — those pixels blend white into green, so their saturation
 * lands between the two cutoffs — instead of producing a jagged threshold cut.
 * The tile's own outer rim is excluded by opacity: it is the only part of the
 * artwork that is partly transparent, and it fades towards white, which would
 * otherwise read as unsaturated.
 */
function extractGlyph() {
  const out = Buffer.alloc(W * H * 4);
  let minX = W, minY = H, maxX = -1, maxY = -1;

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = at(x, y);
      const opaque = data[i + 3] > 250 ? 1 : 0;
      const s = saturation(data[i], data[i + 1], data[i + 2]);
      const ramp = (GRADIENT_SAT - s) / (GRADIENT_SAT - GLYPH_SAT);
      const alpha = Math.max(0, Math.min(1, ramp)) * 255 * opaque;
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
    .png().toBuffer();
}

/**
 * Rebuilds the tile's gradient without the glyph on it.
 *
 * Measured on the source, the gradient is vertical: at a fixed row the left and
 * right edges differ by about 4/255. So each row is reduced to the median of its
 * own green pixels — real sampled colour, not an approximation — and the result
 * is a one-pixel-wide column that can be stretched to any size.
 */
function gradientColumn(bounds) {
  const column = Buffer.alloc(bounds.height * 3);
  let previous = [0, 0, 0];

  for (let row = 0; row < bounds.height; row++) {
    const y = bounds.top + row;
    const reds = [], greens = [], blues = [];
    for (let x = bounds.left; x < bounds.left + bounds.width; x++) {
      const i = at(x, y);
      const [r, g, b, a] = [data[i], data[i + 1], data[i + 2], data[i + 3]];
      if (a < 240 || saturation(r, g, b) < GRADIENT_SAT) continue;
      reds.push(r); greens.push(g); blues.push(b);
    }
    if (reds.length) {
      const median = arr => arr.sort((p, q) => p - q)[arr.length >> 1];
      previous = [median(reds), median(greens), median(blues)];
    }
    column[row * 3] = previous[0];
    column[row * 3 + 1] = previous[1];
    column[row * 3 + 2] = previous[2];
  }

  // Rows at the very top are inside the squircle's curve and may have sampled
  // nothing; fill them from the first row that did.
  return sharp(column, { raw: { width: 1, height: bounds.height, channels: 3 } }).png().toBuffer();
}

/** Centres `glyph`, scaled to `targetWidth`, on a `size` canvas. */
async function centreGlyph(glyph, size, targetWidth) {
  const meta = await sharp(glyph).metadata();
  const width = Math.round(targetWidth);
  const height = Math.round((meta.height / meta.width) * width);
  return {
    input: await sharp(glyph).resize(width, height).png().toBuffer(),
    left: Math.round((size - width) / 2),
    top: Math.round((size - height) / 2),
  };
}

const written = [];
async function write(dir, name, buffer) {
  const target = path.join(resDir, dir);
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(path.join(target, name), buffer);
  written.push(`${dir}/${name}`);
}

const bounds = tileBounds();
const glyph = await extractGlyph();
const column = await gradientColumn(bounds);

// The untouched artwork, trimmed of its transparent margin.
const tile = await sharp(source).extract(bounds).png().toBuffer();

for (const { dir, scale } of DENSITIES) {
  const legacy = Math.round(48 * scale);
  const adaptive = Math.round(108 * scale);

  const legacyTile = await sharp(tile)
    .resize(legacy, legacy, { fit: 'fill' })
    .png({ compressionLevel: 9 }).toBuffer();

  // Legacy square and round are the same image: the artwork is already a
  // rounded tile, and cutting a circle out of it would clip the glyph.
  await write(`mipmap-${dir}`, 'ic_launcher.png', legacyTile);
  await write(`mipmap-${dir}`, 'ic_launcher_round.png', legacyTile);

  await write(`mipmap-${dir}`, 'ic_launcher_foreground.png',
    await sharp({ create: { width: adaptive, height: adaptive, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
      .composite([await centreGlyph(glyph, adaptive, adaptive * GLYPH_FRACTION)])
      .png({ compressionLevel: 9 }).toBuffer());

  await write(`mipmap-${dir}`, 'ic_launcher_background.png',
    await sharp(column)
      .resize(adaptive, adaptive, { fit: 'fill', kernel: 'cubic' })
      .png({ compressionLevel: 9 }).toBuffer());
}

// Play Store listing icon, kept in step with the launcher.
const storeIcon = path.join(root, 'docs/store-assets/icon-512.png');
fs.mkdirSync(path.dirname(storeIcon), { recursive: true });
await sharp(tile).resize(512, 512, { fit: 'fill' }).png({ compressionLevel: 9 }).toFile(storeIcon);

console.log(`Source tile: ${bounds.width}×${bounds.height} at (${bounds.left}, ${bounds.top})`);
console.log(`Wrote ${written.length} launcher files + docs/store-assets/icon-512.png`);
