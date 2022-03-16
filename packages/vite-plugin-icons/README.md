# @veno-ui/vite-plugin-icons

[![NPM version](https://img.shields.io/npm/v/@veno-ui/vite-plugin-icons?color=a1b858&label=)](https://www.npmjs.com/package/@veno-ui/vite-plugin-icons)

## 配置

```tsx
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Icons from '@veno-ui/vite-plugin-icons'

export default defineConfig({
  plugins: [
    Icons({
      // 选项
    }),
    Vue()
  ],
})
```

所有可用选项看[这里](https://github.com/qq15725/veno-ui/blob/master/packages/vite-plugin-icons/src/core/types.ts) 。