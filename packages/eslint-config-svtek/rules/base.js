module.exports = {
  rules: {
    // We prefix class privates with _
    'no-underscore-dangle': 0,

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
