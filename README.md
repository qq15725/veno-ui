<h1 align="center">Veno UI</h1>

<p align="center">
  <a href="https://github.com/qq15725/veno-ui/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/veno-ui.svg" alt="License">
  </a>
  <a href="https://www.npmjs.com/package/veno-ui">
    <img src="https://img.shields.io/npm/v/veno-ui.svg" alt="Version">
  </a>
</p>

<p align="center">一个 Vue 3 UI 组件库。</p>

## 文档

[venoui.fdota.com](http://venoui.fdota.com)

## 特性

### TypeScript 友好

所有组件都是用 TypeScript 编写。

## 安装

```shell
npm i veno-ui
```

## 例子

```typescript
import { createApp } from 'vue'
import App from './App.vue'

// VenoUI
import 'veno-ui/dist/style.css'
import { createVenoUi } from 'veno-ui'
const venoUi = createVenoUi()

const app = createApp(App)
app.use(venoUi)
app.mount('#app')
```

## 生态

| 项目               | 介绍                                             |
| --------------------- | ------------------------------------------------------- |
| [@veno-ui/markdown] | Markdown 渲染器，解析成 VenoUI 组件构成的 HTML。 |
| [@veno-ui/vite-plugin-vue-docs] | Vite Vue 文档插件。 |

[@veno-ui/markdown]: https://github.com/qq15725/veno-ui/blob/master/packages/markdown
[@veno-ui/vite-plugin-vue-docs]: https://github.com/qq15725/veno-ui/blob/master/packages/vite-plugin-vue-docs

## License

[MIT 协议](./LICENSE)