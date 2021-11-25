<h1 align="center">Veno UI</h1>
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

## License

[MIT 协议](./LICENSE)