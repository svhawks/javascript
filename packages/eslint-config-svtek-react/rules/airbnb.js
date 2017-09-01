module.exports = {
  extends: ['eslint-config-airbnb/rules/react', 'eslint-config-airbnb/rules/react-a11y'].map(
    require.resolve,
  ),
  rules: {
    // We use .js for JSX
    'react/jsx-filename-extension': 0,

    // It is boring to sort components
    'react/sort-comp': 0,

    // TODO: Check if this rule is still broken
    'react/jsx-indent': 0,
  },
};
