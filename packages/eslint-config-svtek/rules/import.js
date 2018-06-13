module.exports = {
  rules: {
    // We have a better ordering strategy
    'import/first': 0,
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal'], ['parent'], ['sibling', 'index']],
        'newlines-between': 'always',
      },
    ],

    // We have to do require() for platform specific imports and that triggers this rule
    'import/newline-after-import': 0,
  },
};
