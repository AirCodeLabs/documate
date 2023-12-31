# Get Started with General Vue Project

Besides the popular frameworks, Documate also supports any Vue project. This guide will show you how to add Documate to your Vue project.

## Initialize Documate

<!--@include: ../_partials/_initialize-vue.md-->

## Add Documate UI to Your Project

Documate offer a ready-to-use and fully accessible Vue component that you can add to your project.

```vue
<script setup>
import Documate from '@documate/vue'
import '@documate/vue/dist/style.css'
</script>

<template>
  <div>
    <!-- This will render a button as the start point -->
    <Documate />
  </div>
</template>
```

If you want to customize the default style to match your brand, you can override the CSS variables.

```css
:root {
  --dm-color-brand: #1a73e8;
}
```

See [default CSS variables](https://github.com/AirCodeLabs/documate/blob/main/ui/vue/components/styles/vars.css) for the full list.

## Connect to Backend

<!--@include: ../_partials/_connect-backend.md-->

Modify the Documate UI you added before to pass the endpoint to the `Documate` component as props.

```vue{8-9}
<script setup>
import Documate from '@documate/vue'
import '@documate/vue/dist/style.css'
</script>

<template>
  <div>
    <!-- Replace the URL with your own one -->
    <Documate endpoint="https://test123.us.aircode.run/ask" />
  </div>
</template>
```

## Run the Project

<!--@include: ../_partials/_run-project-upload.md-->

After the command finishes, you can start the dev server and see the __Ask AI__ button in your page.

::: tabs key:pm
== npm
```bash
npm run dev
```
== yarn
```bash
yarn dev
```
== pnpm
```bash
pnpm dev
```
:::
