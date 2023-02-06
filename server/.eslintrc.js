module.exports = {
  env: {
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
  },
  'import/no-extraneous-dependencies': [
    'error',
    { devDependencies: true }],
};
