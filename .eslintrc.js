module.exports = {
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 7,
    'sourceType': 'module',
    'experimentalObjectRestSpread': true,
  },
  'env': {
    'browser': true,
    'es6': true,
    'jquery': true,
    'greasemonkey': true,

  },
  'globals': {
    'W': false,
    'R': false,
    '$': false,
    'JSZip': false,
    'NProgress': false,
    'jscolor': false,
    'ColorScheme': false,
    'Swal': false,
  },
  'extends': [
    // 'cleanjs',
    'airbnb-base',
  ],
  'plugins': [
    'import',
  ],
  'rules': {
    'linebreak-style': ['off', 'windows'],
    'no-console': 'warn',
    'prefer-destructuring': ["error", {"object": true, "array": false}],
  },
};
