module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'jsx-a11y/anchor-is-valid': 0,
    'no-underscore-dangle': ['error', { allow: ['__typename', '__schema'] }]
  },
  globals: {
    Routes: false,
    describe: true,
    beforeEach: true,
    shallow: true,
    render: true,
    it: true,
    expect: true
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  }
}
