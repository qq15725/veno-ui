# Veno UI 的 Vite 图标插件

[![NPM version](https://img.shields.io/npm/v/@veno-ui/vite-plugin-icons?color=a1b858&label=)](https://www.npmjs.com/package/@veno-ui/vite-plugin-icons)

按需导入图标作为组件。

### 特性

- 🤹 任意图标集 - 超过 10,000 个图标、徽标、表情符号等的 100 多个流行图标集。由 [Iconify](https://iconify.design/) 提供支持。
- ☁️ 按需 - 仅捆绑您真正使用的图标。
- 📥 自动加载目录 - 加载目录下的图标文件作为自定义图标。
- 📲 自动导入 - 直接在模板中使用，匹配组件属性自动替换。

## 用法

### 模板中组件属性的静态替换

仅支持字符串的静态替换

```vue
<ve-button icon="mdi-close" />
```

实际会被替换成（此处只是演示，实际不会替换成 SFC 格式）

```vue
<script lang="ts" setup>
  import __veno_ui_icons_0 from '~veno-ui/icons/mdi/close'
</script>

<template>
  <ve-button :icon="__veno_ui_icons_0" />
</template>
```

### 加载自定义图标目录

默认自动加载 icons 目录下的所有 svg 结尾的文件，使用 `~veno-ui/icons` 加载。

```ts
import { createVeno } from 'veno-ui'
import icons from '~veno-ui/icons'
const veno = createVeno({
  icons: {
    aliases: icons,
  },
})
```

## 安装

### 插件

```sh
> npm i -D @veno-ui/vite-plugin-icons
```

### 图标数据

我们使用 [Iconify](https://iconify.design/) 作为图标数据源（支持 100 多个图标集）。

您有两种安装方式：

#### 安装全部插件

```sh
npm i -D @iconify/json
```

`@iconify/json` (~120MB) 包括来自 Iconify 的所有图标集。

#### 按图标集安装

如果您只想使用几个图标集而不想下载整个集合，您也可以使用 @iconify-json/[collection-id] . 例如，要安装 [Material Design Icons](https://icon-sets.iconify.design/mdi/) ，你可以这样做：

```sh
npm i -D @iconify-json/mdi
```

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

## 可用选项

所有可用选项看[types.ts](https://github.com/qq15725/veno-ui/blob/master/packages/vite-plugin-icons/src/types.ts) 。


```ts
export interface Options
{
  /**
   * @zh 引入文件的过滤模式
   * @en RegExp or glob to match files to be transformed
   *
   * @default [/\.vue$/, /\.vue\?vue/, /.svg$/]
   */
  include?: FilterPattern

  /**
   * @zh 排除文件的过滤模式
   * @en RegExp or glob to match files to NOT be transformed
   *
   * @default [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/]
   */
  exclude?: FilterPattern

  /**
   * @zh 识别传入组件的属性值替换成图标组件
   *
   * @default [
   *   { component: 'VeAlert', props: ['icon'] },
   *   { component: 'VeAvatar', props: ['icon'] },
   *   { component: 'VeButton', props: ['icon', 'prepend-icon', 'append-icon'] },
   *   { component: 'VeIcon', props: ['icon'] },
   *   { component: 'VeLink', props: ['icon', 'prepend-icon', 'append-icon'] },
   *   { component: 'VeListItem', props: ['prepend-icon', 'append-icon'] },
   *   { component: 'VeListGroup', props: ['collapse-icon', 'expand-icon'] },
   * ]
   */
  replaces?: { component: string, props: string[] }[],

  /**
   * @zh 用于搜索图标的相对目录路径
   * @en Relative paths to the directory to search for icons
   *
   * @default 'src/icons'
   */
  dirs?: string | string[]

  /**
   * @zh 图标的有效文件扩展名
   * @en Valid file extensions for icons
   *
   * @default ['svg']
   */
  extensions?: string | string[]

  /**
   * @zh 搜索子目录
   * @en Search for subdirectories
   *
   * @default true
   */
  deep?: boolean

  /**
   * @zh 传递给 svgo 的选项
   * @en Options passed to Svgo
   *
   * @default { plugins: ['preset-default', 'removeViewBox', 'removeDimensions'] }
   */
  svgoOptions?: OptimizeOptions
}
```
