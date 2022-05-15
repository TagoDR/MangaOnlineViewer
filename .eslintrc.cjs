module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: ['./tsconfig.json'],
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jquery: true,
    greasemonkey: true,
  },
  globals: {
    W: 'readonly',
    $: 'readonly',
    JSZip: 'readonly',
    NProgress: 'readonly',
    jscolor: 'readonly',
    ColorScheme: 'readonly',
    Swal: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "airbnb-base",
    "airbnb-typescript/base",
  ],
  plugins: ['import', '@typescript-eslint'],
  rules: {
    'linebreak-style': ['off', 'windows'],
    'no-console': 'warn',
    'prefer-destructuring': ['error', {
      object: true,
      array: false,
    }],
    'function-paren-newline': 'off',
    'import/extensions': ['warn', 'always', { ignorePackages: true }],
  },
};
