module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    experimentalObjectRestSpread: true,
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
    'airbnb-base',
  ],
  plugins: [
    'import',
  ],
  rules: {
    'linebreak-style': ['off', 'windows'],
    'no-console': 'warn',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'function-paren-newline': 'off',
  },
};
