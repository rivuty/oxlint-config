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

The `typescript` export enables a strict ruleset for TypeScript projects:

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

### Vitest projects

The `vitest` export relaxes rules for test files (`*.test.ts`):

```ts
import { defineConfig } from 'oxlint';
import { typescript, vitest } from '@rivuty/oxlint-config';

export default defineConfig({
  extends: [typescript, vitest],
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
| `vitest`     | Overrides for test files — relaxes rules that are impractical in tests                         |

## License

@rivuty/oxlint-config is open-sourced under the [MIT license](LICENSE)
