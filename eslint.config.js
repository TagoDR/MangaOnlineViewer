import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], plugins: { js }, extends: ['js/recommended'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: { ...globals.node, ...globals.browser } },
  },
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      'no-console': 'warn',
      'no-param-reassign': [
        'error',
        {
          props: false,
        },
      ],
      'import/no-unresolved': 'off',
      'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    },
  },
  {
    ignores: ['node_modules', 'dist', '**/*.html'],
  },
]);
