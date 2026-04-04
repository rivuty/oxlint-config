import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { devDependencies } from './package.json';

const externalPackages = Object.keys(devDependencies);

export default defineConfig({
  plugins: [dts()],
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
