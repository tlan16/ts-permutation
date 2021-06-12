module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  'env': {
    'browser': false,
    'amd': false,
    'node': true
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    semi: 'error',
    'comma-dangle': ['error', 'only-multiline'],
    quotes: ['error', 'single']
  },
};
