<h1 align="center">Veno UI</h1>

<p align="center">
  <a href="https://github.com/qq15725/veno-ui/blob/master/LICENSE" class="mr-3">
    <img src="https://img.shields.io/npm/l/veno-ui.svg" alt="License">
  </a>
  <a href="https://www.npmjs.com/package/veno-ui">
    <img src="https://img.shields.io/npm/v/veno-ui.svg" alt="Version">
  </a>
</p>

<p align="center">一个 Vue 3 UI 组件库。</p>

## 文档

[www.venojs.com](http://www.venojs.com) 

[国内镜像](http://venoui.fdota.com)

## 特性

### 响应式设计

适配移动端与 PC 端，不再需要切换两套 UI 库。

### 样式帮助类

提供大量样式帮助类。

### 自定义主题

组件默认属性值，风格色皆可调。

### 无障碍设计

所有组件遵循 WAI-ARIA [https://www.w3.org/TR/wai-aria-practices](https://www.w3.org/TR/wai-aria-practices) 。

### TypeScript

所有组件 TypeScript 编写，类型安全。

## 安装

```shell
$ npm install veno-ui
```

## 例子

```typescript
import { createApp } from 'vue'
import App from './App.vue'

import 'veno-ui/styles'
import { createVenoUi } from 'veno-ui'
import * as components from 'veno-ui/components'
const venoUi = createVenoUi({
  components
})

const app = createApp(App)
app.use(venoUi)
app.mount('#app')
```

## 生态

| 项目               | 介绍                                             |
| --------------------- | ------------------------------------------------------- |
| [@veno-ui/markdown] | Markdown 渲染器，解析成 VenoUI 组件构成的 HTML。 |
| [@veno-ui/vite-plugin-markdown] | Vite Markdown to Vue 插件。 |

[@veno-ui/markdown]: https://github.com/qq15725/veno-ui/blob/master/packages/markdown
[@veno-ui/vite-plugin-markdown]: https://github.com/qq15725/veno-ui/blob/master/packages/vite-plugin-markdown

## License

[MIT 协议](https://github.com/qq15725/veno-ui/blob/master/LICENSE)