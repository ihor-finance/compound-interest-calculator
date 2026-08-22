import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'android']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Chart.js option objects and the i18n Proxy translator are typed loosely
      // on purpose — their real types are either unexported or dynamic. Kept as
      // a warning so genuinely new `any`s still show up in the output.
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    // The i18n context deliberately exports the provider component alongside its
    // hook and locale table; splitting them would only satisfy Fast Refresh.
    files: ['src/i18n/useTranslation.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
      // Locale bundles are loaded asynchronously, so state is set from an effect
      // behind an isMounted guard. That is the intended pattern here.
      'react-hooks/set-state-in-effect': 'off',
    },
  },
])
