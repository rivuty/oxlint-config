import { defineConfig } from 'oxlint';

export const config = defineConfig({
  overrides: [
    {
      files: ['*.config.ts'],
      rules: {
        'import/no-default-export': 'off',
        'import/no-nodejs-modules': 'off',
      },
    },
  ],
});
