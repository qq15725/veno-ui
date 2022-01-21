---
category: Basic 通用组件
---

# 图标 Icon

默认使用的 mdi 图标。

安装依赖。

```shell
$ npm i @mdi/font -D
```

引入 css。

```ts
// src/plugins/veno-ui.ts
import '@mdi/font/css/materialdesignicons.css'
import { createVenoUi } from 'veno-ui'
import { aliases, mdi } from 'veno-ui/lib/iconsets/mdi'

export default createVenoUi({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})
```

## 演示

:::include

basic.md

preset.md

:::

## 加载本地 svg 作为图标使用

安装 svg 转组件的 vite 插件。

```shell
$ npm i @veno-ui/vite-plugin-svg -D
```

配置插件。

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Svg from '@veno-ui/vite-plugin-svg'

export default defineConfig({
  plugins: [
    Svg(),
    // ... 
    Vue()
  ]
})
```

新建 src/svgs 目录，并写入 index.ts。

```ts
// src/svgs/index.ts
const modules = import.meta.globEager('./*.svg')

export default Object.keys(modules).reduce((svgs, path) => ({
  ...svgs,
  [path.match(/(\w+?)\.svg$/)![1]]: modules[path].default
}), {})
```

载入 aliases 。

```ts
// src/plugins/veno-ui.ts
// @/svgs 等于 src/svgs
import svgs from '@/svgs'
// ...
createVenoUi({
  icons: {
    aliases: svgs
  }
})
// ...
```

尝试创建 `src/svgs/dashboard.svg` ，使用 `icon="$dashboard"` 。

详情参见 [veno-admin](https://github.com/qq15725/veno-admin) 使用。


## API

<<<API icon