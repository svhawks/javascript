module.exports = {
  extends: [
    'eslint-config-airbnb',
    '../eslint-config-svtek/rules/base.js',
    '../eslint-config-svtek/rules/flow.js',
    '../eslint-config-svtek/rules/import.js',
    './rules/react.js',
  ],
};
