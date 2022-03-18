---
meta:
  category: 开发指南
  title: 快速上手
---

# 快速上手


## Vue 版本

vue >= 3.2.0

## 安装

```sh
npm install veno-ui
```

## 完整引入

```js
import { createApp } from 'vue'
import App from './App.vue'

import 'veno-ui/styles'
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

## 按需导入组件

组件库已经默认支持 **Tree Shaking** ，和完整引入相比只需要移除 `components` 的导入。

```js
import { createApp } from 'vue'
import App from './App.vue'

import 'veno-ui/styles'
import { createVeno } from 'veno-ui'
import * as directives from 'veno-ui/directives'
import * as providers from 'veno-ui/providers'
const veno = createVeno({
  directives,
  providers,
})

createApp(App).use(veno).mount('#app')
```

### 手动按需导入组件

```js
import { Button } from 'veno-ui/componentns'
```

### 自动按需导入组件

使用 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 插件来开启自动按需导入组件的支持。

插件会自动解析模板中的使用到的组件，并导入。

配置 `vite.config.js` 并在 `Components` 插件中使用 `VenoUiResolver` Veno UI 组件解析器。 

```js
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VenoUiResolver } from 'veno-ui'

export default defineConfig({
  plugins: [
    Vue(),
    Components({
      resolvers: [
        VenoUiResolver()
      ]
    })
  ]
})
```