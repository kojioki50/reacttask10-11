module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier',],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/button-has-type': 0,
    'no-console': 0,
    'react/react-in-jsx-scope': 0,
    'react/no-alert': 0,
    'react/no-unused-vars': 0,
    'arrow-body-style': 0,
    'no-use-before-define': 0,
    'react/no-array-index-key': 0,
    'react/function-component-definition': 0,
    'import/prefer-default-export': 0,
    'no-shadow': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0
  }
}
