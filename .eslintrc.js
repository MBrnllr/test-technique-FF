module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: [1, 4],
    'no-unused-vars': [2, { vars: 'all', args: 'none' }],
    'no-multi-spaces': 0,
    'no-trailing-spaces': ['error', { ignoreComments: true }],
    'func-call-spacing': 'off',
    'no-var': [2],
    'keyword-spacing': [2],
    'space-infix-ops': [2],
    'arrow-spacing': [2],
    'no-shadow': [2],
    'comma-dangle': [2, 'always-multiline'],
    quotes: [2, 'single'],
    'comma-spacing': [2, {
        before: false,
        after: true,
    }],
    semi: 'off',
    'no-empty-function': [2],
  }
}
