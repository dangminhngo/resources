module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['react-app', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': 'warn',
    'import/no-anonymous-default-export': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
  },
}
