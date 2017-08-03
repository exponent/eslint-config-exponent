module.exports = {
  parserOptions: { ecmaFeatures: { jsx: true } },
  plugins: ['react'],
  rules: {
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-closing-bracket-location': [
      'warn',
      { nonEmpty: 'after-props', selfClosing: 'tag-aligned' },
    ],
    // Enable this run when eslint-plugin-react no longer prints warnings
    // 'react/jsx-curly-spacing': ['warn', { when: 'never' }],
    'react/jsx-equals-spacing': ['warn', 'never'],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-indent': ['warn', 2],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-no-bind': ['warn', { allowArrowFunctions: true }],
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-tag-spacing': 'warn',
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/jsx-wrap-multilines': [
      'warn',
      { declaration: false, assignment: false, return: true, arrow: true },
    ],
    'react/no-did-mount-set-state': 'warn',
    'react/no-did-update-set-state': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-redundant-should-component-update': 'warn',
    'react/no-unknown-property': 'warn',
    'react/no-will-update-set-state': 'warn',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'warn',
    'react/self-closing-comp': 'warn',
    'react/sort-comp': [
      'warn',
      {
        order: ['static-methods', 'constructor', 'lifecycle', 'render', 'everything-else'],
      },
    ],
    'react/style-prop-object': 'warn',
  },
};
