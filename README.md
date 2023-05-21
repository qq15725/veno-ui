<h1 align="center">Veno UI</h1>

<p align="center">
  <a href="https://unpkg.com/veno-ui">
    <img src="https://img.shields.io/bundlephobia/minzip/veno-ui" alt="Minzip">
  </a>
  <a href="https://www.npmjs.com/package/veno-ui">
    <img src="https://img.shields.io/npm/v/veno-ui.svg" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/veno-ui">
    <img src="https://img.shields.io/npm/dm/veno-ui" alt="Downloads">
  </a>
  <a href="https://github.com/qq15725/veno-ui/issues">
    <img src="https://img.shields.io/github/issues/qq15725/veno-ui" alt="Issues">
  </a>
  <a href="https://github.com/qq15725/veno-ui/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/veno-ui.svg" alt="License">
  </a>
</p>

<p align="center">一个 Vue 3 UI 组件库</p>

## 特性

### 自定义主题

组件默认属性值，风格色皆可调。

### 无障碍设计

所有组件遵循 [WAI-ARIA](https://www.w3.org/TR/wai-aria-practices) 。

### 使用 TypeScript

所有组件 TypeScript 编写，类型安全。

## 📦 安装

```sh
npm i veno-ui
```

## 🦄 使用

导入全部组件的例子，按需导入请查看文档了解更多。

```typescript
import { createApp } from 'vue'
import App from './App.vue'

import { createVeno } from 'veno-ui'
import * as components from 'veno-ui/components'
import * as directives from 'veno-ui/directives'
import * as providers from 'veno-ui/providers'
const veno = createVeno({
  components,
  directives,
  providers,
})

createApp(App).use(veno).mount('#app')
```

## 相关的库

| 项目               | 介绍                                       |
| --------------------- |------------------------------------------|
| [veno-admin] | Veno UI 的后台管理项目模板。                       |
| [@veno-ui/markdown] | Veno UI 的 Markdown 渲染器                   |
| [@veno-ui/vite-plugin-markdown] | Veno UI 在 Vite 下的 Markdown 文件解析          |

[veno-admin]: https://github.com/qq15725/veno-admin
[@veno-ui/markdown]: https://github.com/qq15725/veno-ui/blob/master/packages/markdown
[@veno-ui/vite-plugin-markdown]: https://github.com/qq15725/veno-ui/blob/master/packages/vite-plugin-markdown
