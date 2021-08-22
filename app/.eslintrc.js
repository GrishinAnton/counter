module.exports = {
  root: true,
  'parser': '@typescript-eslint/parser',
  'extends': ['airbnb-typescript', 'react-app', 'prettier'],
  // 'plugins': ['react-hooks', 'prettier', '@typescript-eslint', 'simple-import-sort'],
  'plugins': ['react-hooks', 'prettier', '@typescript-eslint'],
  'parserOptions': {
    'project': './tsconfig.json',
  },
  'settings': {
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true,
      },
    },
  },
  rules: {
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-param-reassign': 'off',
    'no-nested-ternary': 'off',
    'no-return-await': 'off',
    'consistent-return': 'off',
    'object-curly-spacing': ['warn', 'always'],
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
    'import/prefer-default-export': 'off',
    'react/jsx-key': 'error',
    'react/button-has-type': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/destructuring-assignment': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        'vars': 'all',
        'args': 'none',
      },
    ],
    '@typescript-eslint/no-explicit-any': [
      'warn',
      {
        'ignoreRestArgs': true,
      },
    ],
    'max-len': [
      'warn',
      {
        'code': 120,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreComments': true,
      },
    ],
  },
};
