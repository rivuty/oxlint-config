import { defineConfig } from 'vite';

import { devDependencies } from './package.json';

const externalPackages = Object.keys(devDependencies);

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['es'],
    },
    rolldownOptions: {
      external: externalPackages,
      output: {
        globals: Object.fromEntries(externalPackages.map(packageName => [packageName, packageName])),
      },
    },
  },
});
