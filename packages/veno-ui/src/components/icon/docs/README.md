---
category: Basic 通用组件
---

# 图标 Icon

## 演示

:::include

basic.md

preset.md

:::

## 使用 mdi 的字体图标样式

安装依赖

```sh
npm i -D @mdi/font
```

引入样式文件

```ts
import '@mdi/font/css/materialdesignicons.css'
```

模板中使用

```html
<ve-icon icon="mdi-delete" />
<ve-button icon="mdi-delete" />
```

## 使用 Vite 图标插件（推荐）

模板代码中图标的静态按需导入，加载自定义目录下的所有图标文件（SVG）。

如何配置参考 [vite-plugin-iconify](https://github.com/qq15725/vite-plugin-iconify) 插件文档。

如何使用参考 [veno-admin](https://github.com/qq15725/veno-admin) 后台工程模板。

## API

<<<API icon