module.exports = {
  env: {
    browser: true,
    es2021: true,
    greasemonkey: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
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
