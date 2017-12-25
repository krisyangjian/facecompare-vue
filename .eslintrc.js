// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  // extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'max-len': 'off',
    'no-unused-expressions': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'indent': 'off',
    'import/first': 'off',
    'no-tabs':'off',
    'no-new':'off',
    'global-require':'off',
    'func-names':'off',
    'no-mixed-spaces-and-tabs':'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-dynamic-require': 'off',
    'import/prefer-default-export': 'off'
    // 'indent':'off',
    // 'no-var':'error'
    // allow async-await
    // 'generator-star-spacing': 'off',
    // // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'semi': 'off',
  }
}
