---
meta:
  title: 快速上手
---

# 快速上手


## Vue 版本

vue >= 3.2.0

## 安装

```shell
$ npm install veno-ui
```

## 完整引入

```js{4-9,12}
import { createApp } from 'vue'
import App from './App.vue'

import 'veno-ui/styles'
import { createVeno } from 'veno-ui'
import * as components from 'veno-ui/components'
const veno = createVeno({
  components
})

const app = createApp(App)
app.use(veno)
app.mount('#app')
```

## 按需加载

组件库已经默认支持 Tree Shaking。

```js{5-7,10}
// main.js
import { createApp } from 'vue'
import App from './App.vue'

import 'veno-ui/styles'
import { createVeno } from 'veno-ui'
const veno = createVeno()

const app = createApp(App)
app.use(veno)
app.mount('#app')
```

### 手动引入组件

```js
import { Button } from 'veno-ui/componentns'
```

### 或者自动导入组件

使用 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 插件来开启按需加载的支持。
插件会自动解析模板中的使用到的组件，并导入组件和对应的样式文件。

```js
// vite.config.js
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

function VenoUiResolver() {
  return {
    type: 'component',
    resolve: name => {
      if (!name.match(/^Ve[A-Z]/)) return
      return {
        importName: name.replace('Ve', ''),
        path: 'veno-ui/components'
      }
    }
  }
}

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