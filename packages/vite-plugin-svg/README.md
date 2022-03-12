# @veno-ui/vite-plugin-svg

[![NPM version](https://img.shields.io/npm/v/@veno-ui/vite-plugin-svg?color=a1b858&label=)](https://www.npmjs.com/package/@veno-ui/vite-plugin-svg)

## 使用

```tsx
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Svg from '@veno-ui/vite-plugin-svg'

export default defineConfig({
  plugins: [
    Svg({
      // 选项
    }),
    Vue()
  ],
})
```

## 选项

所有可用选项看[这里](https://github.com/qq15725/veno-ui/blob/master/packages/vite-plugin-svg/src/types.ts) 。

## Roadmap

- [ ] svg sprite。