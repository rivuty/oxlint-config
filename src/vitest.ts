import { defineConfig, type OxlintConfig } from 'oxlint';

export const vitest: OxlintConfig = defineConfig({
  overrides: [
    {
      files: ['*.test.ts'],
      plugins: ['vitest'],
      rules: {
        'no-magic-numbers': 'off',
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-statements': 'off',
        'vitest/no-importing-vitest-globals': 'off',
        'vitest/prefer-describe-function-title': 'off',
        'vitest/require-test-timeout': 'off',
      },
    },
  ],
});
