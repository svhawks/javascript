module.exports = {
  extends: ['eslint-config-svtek', './rules/airbnb'].map(require.resolve),
  rules: {},
};
