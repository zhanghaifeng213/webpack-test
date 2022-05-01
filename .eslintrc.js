module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
  ],
  // "parser": "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  globals: {
    document: false,
  },
  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
  },
};
