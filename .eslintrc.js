module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': ['off'],
    semi: ['error', 'never', { beforeStatementContinuationChars: 'always' }],
    indent: [
      'warn',
      2,
      {
        ignoredNodes: ['JSXAttribute', 'JSXSpreadAttribute', 'TemplateLiteral'],
        SwitchCase: 1,
        VariableDeclarator: 'first',
        // MemberExpression: 0,
        // FunctionDeclaration: { body: 1, parameters: 1 },
        // FunctionExpression: { body: 1, parameters: 1 },
        // CallExpression: { arguments: 1 },
      },
    ],
  },
};
