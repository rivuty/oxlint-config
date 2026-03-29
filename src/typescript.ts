import { defineConfig } from 'oxlint';

export const typescript = defineConfig({
  categories: {
    correctness: 'error',
    nursery: 'error',
    pedantic: 'error',
    perf: 'error',
    restriction: 'error',
    style: 'error',
    suspicious: 'error',
  },
  plugins: ['eslint', 'import', 'oxc', 'promise', 'typescript', 'unicorn'],
  rules: {
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
    'import/group-exports': 'off',
    'import/no-named-export': 'off',
    'import/prefer-default-export': 'off',
    'sort-imports': 'off',
    'typescript/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
    'typescript/no-import-type-side-effects': 'off',
  },
});
