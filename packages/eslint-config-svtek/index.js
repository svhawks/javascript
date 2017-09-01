module.exports = {
  extends: ['./rules/airbnb', './rules/flow'].map(require.resolve),
  rules: {},
};
