module.exports = {
  extends: ['eslint-config-airbnb-base', 'eslint-config-airbnb-base/rules/strict'].map(
    require.resolve,
  ),
  rules: {
    // We prefix class privates with _
    'no-underscore-dangle': 0,

    // We have a better ordering strategy
    'import/first': 0,

    // We have to do require() for platform specific imports and that triggers this rule
    'import/newline-after-import': 0,

    // There is nothing wrong with allowing operators with same precedence
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true,
      },
    ],

    // We are always using parens, easier to read
    'arrow-parens': ['error', 'always'],
  },
};
