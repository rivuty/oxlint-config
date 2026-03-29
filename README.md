# @rivuty/oxlint-config

Shared [oxlint](https://oxc.rs/docs/guide/usage/linter) configurations.

## Installation

```sh
npm add -D @rivuty/oxlint-config oxlint
# or
pnpm add -D @rivuty/oxlint-config oxlint
```

## Usage

Create an `oxlint.config.ts` in your project and import the desired config:

### TypeScript projects

```ts
import { defineConfig } from 'oxlint';
import { typescript } from '@rivuty/oxlint-config';

export default defineConfig({
  extends: [typescript],
});
```

### Config file overrides

The `config` export disables rules that conflict with config files (e.g. `vite.config.ts`):

```ts
import { defineConfig } from 'oxlint';
import { config, typescript } from '@rivuty/oxlint-config';

export default defineConfig({
  extends: [typescript, config],
});
```

### Extending

Use `extends` together with additional rules to customize the config:

```ts
import { defineConfig } from 'oxlint';
import { typescript } from '@rivuty/oxlint-config';

export default defineConfig({
  extends: [typescript],
  rules: {
    'no-console': 'warn',
  },
});
```

## Exports

| Export       | Description                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------- |
| `typescript` | Strict ruleset for TypeScript projects (all categories set to `error`)                         |
| `config`     | Overrides for config files — relaxes `import/no-default-export` and `import/no-nodejs-modules` |

## License

@rivuty/oxlint-config is open-sourced under the [MIT license](LICENSE)
