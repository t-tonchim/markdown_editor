module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true,
    'mocha': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 2017,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'no-debugger': 0,
    'no-console': 0,
    'indent': [
      'error',
      2
    ],
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1,
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}
