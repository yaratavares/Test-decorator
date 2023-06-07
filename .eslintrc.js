module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-unused-vars': 'warn',
    'no-extra-semi': 'error',
    'linebreak-style': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-async-promise-executor': 'off',
    'no-useless-catch': 'off',
    'no-misleading-character-class': 'off',
    'no-prototype-builtins': 'off',
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    eqeqeq: ['error', 'always'],
    'no-var': 'error',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
