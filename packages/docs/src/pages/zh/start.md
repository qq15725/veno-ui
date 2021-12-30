---
meta:
  title: 快速上手
---

# 快速上手

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