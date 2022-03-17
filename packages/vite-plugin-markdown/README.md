# Veno UI 的 Vite Markdown 插件

[![NPM version](https://img.shields.io/npm/v/@veno-ui/vite-plugin-markdown?color=a1b858&label=)](https://www.npmjs.com/package/@veno-ui/vite-plugin-markdown)

## 使用

```tsx
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from '@veno-ui/vite-plugin-markdown'

export default defineConfig({
  plugins: [
    Markdown({
      // 选项
    }),
    Vue()
  ],
})
```

## 选项

所有可用选项看[types.ts](https://github.com/qq15725/veno-ui/blob/master/packages/vite-plugin-markdown/src/types.ts) 。