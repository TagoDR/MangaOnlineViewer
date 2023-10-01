module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    greasemonkey: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:svelte/recommended',
    'plugin:prettier/recommended',
    'plugin:svelte/prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}', '*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.svelte'],
  },
  plugins: ['import', '@typescript-eslint'],
  rules: {
    'no-console': 'warn',
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'import/no-mutable-exports': 'off',
    'import/prefer-default-export': 'off',
  },
  ignorePatterns: ['node_modules', 'dist'],
};
