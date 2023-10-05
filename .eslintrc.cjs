module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    greasemonkey: true,
  },
  extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
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
  },
  ignorePatterns: ['node_modules', 'dist'],
};
