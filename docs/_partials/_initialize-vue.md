In the root of your project, run the following command:

::: tabs key:pm
=== npm
```bash
npx @documate/documate init --framework vue
```
=== yarn
```bash
yarn dlx @documate/documate init --framework vue
```
=== pnpm
```bash
pnpm dlx @documate/documate init --framework vue
```

:::

This command does the following:

- Install `@documate/documate` and `@documate/vue` packages to your project
- Create a `documate.json`

```json
{
  "root": ".",
  "include": [ "**/*.md" ],
  "backend": ""
}
```

- Add a script to your `package.json`

```json
{
  "scripts": {
    ...
    "documate:upload": "documate upload"
  }
}
```
