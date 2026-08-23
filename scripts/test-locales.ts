/**
 * Translation completeness check for all locales and for the methodology page.
 *
 * Replaces the old similarity heuristic, which only compared how many strings
 * happened to match English and could not see a missing key, a renamed key or a
 * dropped {placeholder}. TypeScript already enforces the shape of the UI
 * locales, but not the methodology content (loaded dynamically) and not
 * placeholders in either — a lost {years} renders as a literal brace to a user.
 */
import fs from 'node:fs';
import path from 'node:path';
import { en } from '../src/i18n/en.ts';
import { en as methodologyEn } from '../src/pages/methodology-content/en.ts';

const root = path.resolve(import.meta.dirname, '..');

type Flat = Map<string, string>;

/** Flattens nested objects and arrays into dotted paths of leaf strings. */
function flatten(value: unknown, prefix = '', out: Flat = new Map()): Flat {
  if (typeof value === 'string') {
    out.set(prefix.replace(/\.$/, ''), value);
    return out;
  }
  if (Array.isArray(value)) {
    value.forEach((v, i) => flatten(v, `${prefix}${i}.`, out));
    return out;
  }
  if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) flatten(v, `${prefix}${k}.`, out);
  }
  return out;
}

const placeholders = (s: string) => (s.match(/\{\w+\}/g) || []).sort().join(',');

const failures: string[] = [];
let checked = 0;

async function compare(label: string, reference: Flat, file: string, exportName: string) {
  const module = await import(file);
  const translation = module[exportName] ?? module.default;
  if (!translation) {
    failures.push(`${label}: no export named "${exportName}"`);
    return;
  }

  const flat = flatten(translation);
  const missing = [...reference.keys()].filter(k => !flat.has(k));
  const extra = [...flat.keys()].filter(k => !reference.has(k));
  const emptyValues = [...flat].filter(([, v]) => v.trim() === '').map(([k]) => k);
  const brokenVars = [...reference].filter(([k, v]) => placeholders(v) !== placeholders(flat.get(k) ?? ''));

  if (missing.length) failures.push(`${label}: ${missing.length} missing key(s) — ${missing.slice(0, 4).join(', ')}`);
  if (extra.length) failures.push(`${label}: ${extra.length} unexpected key(s) — ${extra.slice(0, 4).join(', ')}`);
  if (emptyValues.length) failures.push(`${label}: ${emptyValues.length} empty value(s) — ${emptyValues.slice(0, 4).join(', ')}`);
  if (brokenVars.length) {
    failures.push(`${label}: ${brokenVars.length} broken placeholder(s) — ${brokenVars.slice(0, 4).map(([k]) => k).join(', ')}`);
  }
  checked++;
}

// ── UI locales ───────────────────────────────────────────────────────────────
const uiReference = flatten(en);
const uiDir = path.join(root, 'src/i18n/locales');
const uiFiles = fs.readdirSync(uiDir).filter(f => f.endsWith('.ts')).sort();

for (const file of uiFiles) {
  const code = file.replace(/\.ts$/, '');
  await compare(`ui/${code}`, uiReference, `../src/i18n/locales/${file}`, code);
}

// ── Methodology page ─────────────────────────────────────────────────────────
const methodologyReference = flatten(methodologyEn);
const methodologyDir = path.join(root, 'src/pages/methodology-content/locales');
const methodologyFiles = fs.existsSync(methodologyDir)
  ? fs.readdirSync(methodologyDir).filter(f => f.endsWith('.ts')).sort()
  : [];

for (const file of methodologyFiles) {
  const code = file.replace(/\.ts$/, '');
  await compare(`methodology/${code}`, methodologyReference, `../src/pages/methodology-content/locales/${file}`, code);
}

// ── Every language offered must have a UI translation ────────────────────────
// SUPPORTED_LOCALES is read from source rather than imported: src/i18n/index.ts
// imports './en' without a file extension, which Vite resolves but Node's
// type-stripping loader does not. A zero-match result is treated as a failure so
// this cannot silently stop checking if the file is restructured.
const localeSource = fs.readFileSync(path.join(root, 'src/i18n/index.ts'), 'utf8');
const offered = [...localeSource.matchAll(/\{\s*code:\s*'([a-z-]+)'/g)]
  .map(m => m[1])
  .filter(c => c !== 'en');
if (offered.length === 0) failures.push('could not read SUPPORTED_LOCALES from src/i18n/index.ts');
const present = new Set(uiFiles.map(f => f.replace(/\.ts$/, '')));
const unbacked = offered.filter(c => !present.has(c));
if (unbacked.length) failures.push(`language picker offers ${unbacked.join(', ')} with no translation file`);

// ── Report ───────────────────────────────────────────────────────────────────
console.log(`UI locales:          ${uiFiles.length} checked against ${uiReference.size} keys`);
console.log(`Methodology locales: ${methodologyFiles.length} checked against ${methodologyReference.size} keys`);
console.log(`Languages offered:   ${offered.length + 1}`);
console.log('─'.repeat(60));

if (failures.length === 0) {
  console.log(`✓ All ${checked} translation files complete, no broken placeholders.\n`);
  process.exit(0);
}
console.log(`✗ ${failures.length} problem(s):\n`);
for (const f of failures) console.log(`  ✗ ${f}`);
console.log();
process.exit(1);
