import eslintPluginImport from 'eslint-plugin-import';

// Regras do Airbnb Base
const airbnbBaseRules = {
  // Inclua manualmente as regras do Airbnb base
  'import/first': 'error',
  'import/no-unresolved': 'error',
  'import/named': 'error',
  'import/export': 'error',
  'no-undef': 'error',
  'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
  'semi': ['error', 'always'],
  'no-console': ['warn']
  // Adicione outras regras conforme necessário
};

export default [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      globals: { // Config para eslint reconhecer as variáveis do .env
        process: 'readonly',
        console: 'readonly'
      },
    },
    plugins: {
      import: eslintPluginImport,
    },
    rules: airbnbBaseRules,
  },
];
