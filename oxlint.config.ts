import { defineConfig } from 'oxlint';

import { config } from './src/config.ts';
import { typescript } from './src/typescript.ts';

export default defineConfig({
  extends: [typescript, config],
});
