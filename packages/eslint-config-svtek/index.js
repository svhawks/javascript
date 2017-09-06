module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    './rules/base.js',
    './rules/flow.js',
    './rules/import.js',
  ],
};
