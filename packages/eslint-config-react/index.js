/** @type {import('eslint-define-config').ESLintConfig} */
module.exports = {
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', '@coderwyd/eslint-config-ts'],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/react-in-jsx-scope': 'off',
  },
}
