# Compound Interest Calculator

A compound interest calculator that shows what the money will actually be worth —
inflation and taxes subtracted, contributions taken at the time they are really
made. Runs as a web app and as an Android app (Capacitor), fully offline, in 44
languages.

- **Web:** https://ihor-finance.github.io/compound-interest-calculator/
- **Android package:** `com.ihorfinance.compoundcalc`

---

## Requirements

| Tool | Version | Notes |
|---|---|---|
| Node.js | 22+ | 24 recommended — the test suite runs TypeScript natively |
| JDK | 21 | Android only. Installed at `C:\Android\jdk-21` |
| Android SDK | platform 36, build-tools 36.0.0 | Android only. Installed at `C:\Android\Sdk` |

Neither the JDK nor the SDK is on the system PATH; `scripts/build-android.ps1`
points at them directly. If you move them, update the two paths at the top of
that script and `sdk.dir` in `android/local.properties`.

## Everyday commands

```bash
npm install
```

```bash
npm run dev
```

```bash
npm test
```

`npm test` runs four suites, and every one has to pass before a build ships:

- `npm run test:calc` — 59 checks over `src/utils/calculations.ts`: reference
  values against closed-form formulas, edge cases, and invariants over 500
  randomised inputs.
- `npm run test:i18n` — every UI and methodology locale has every key of the
  English source, with no broken `{placeholder}`.
- `npm run test:listings` — all 44 Play store listings are within Google's limits.
- `npm run test:legal` — privacy policy and terms are complete in all 44
  languages and the public HTML copies match.

```bash
npm run lint
```

```bash
npm run build
```

## Building the Android app

Debug APK, for installing on a phone:

```bash
powershell -ExecutionPolicy Bypass -File scripts/build-android.ps1
```

Release AAB + APK, for Google Play:

```bash
powershell -ExecutionPolicy Bypass -File scripts/build-android.ps1 -Release
```

Both write into `release/` (gitignored). The release build is signed only if
`android/keystore.properties` exists — see `android/keystore.properties.example`
and [docs/PLAY_STORE.md](docs/PLAY_STORE.md) for how to create the upload key.

## Releasing a new version

1. Bump `versionCode` (integer, +1 every upload) and `versionName` in
   `android/app/build.gradle`.
2. `npm test && npm run lint`
3. `scripts/build-android.ps1 -Release`
4. Upload `release/app-release.aab` to Play Console.

## Project layout

```
src/
  utils/calculations.ts   the whole financial model — start here
  hooks/                  form state, debouncing, localStorage
  components/             Layout, InputSection, ResultsSection, Charts, Table
  pages/                  methodology page, privacy policy, terms — each with its own locales/
  i18n/                   en.ts is the source of truth; locales/ must match its shape
  App.css                 all styling; the responsive system is the last block
scripts/
  test-*.ts               the four validators above
  generate-*.mjs          icons, store cards, legal HTML, listings CSV
  build-android.ps1       web build -> Capacitor sync -> Gradle
android/                  Capacitor Android project
docs/
  store-assets/listings/  Play listing text, one file per language (tracked)
  *.md                    internal notes — not in the public repo, handed over separately
```

## Notes for future changes

**Layout.** `src/App.css` ends with a single responsive block that is the source
of truth for every breakpoint. Breakpoints are **width-only** — an earlier version
keyed the layout off `orientation`, which put wide tablets held upright into the
phone layout and clipped chart legends in landscape. Height is used only to
tighten vertical padding on short viewports. Add new responsive rules to that
block rather than scattering media queries higher up the file.

**No horizontal page scroll** is a hard requirement: the only element allowed to
scroll sideways is the projection table, inside its own container. Grid columns
use `minmax(0, 1fr)` rather than `1fr` so a long number cannot push a row wider
than the screen.

**Translations.** Every file in `src/i18n/locales/` must structurally match
`src/i18n/en.ts` — TypeScript enforces this, so adding a key to `en.ts` means
adding it to all 43 others. A new language is four files, not one: UI,
methodology, legal, and the store listing — `npm test` refuses anything less.

**Ads.** There are none. `src/components/AdSlot.tsx` renders nothing while
`adsEnabled` is false; the positions and the reserved space are already in the
layout. See [docs/ADS.md](docs/ADS.md).

## Disclaimer

This is an educational and planning tool. It projects mathematical outcomes from
the assumptions entered — it does not predict markets and is not financial,
investment or tax advice.
