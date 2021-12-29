---
category: Basic 通用组件
---

# 按钮 Button

按钮用来触发一些即时操作。

## 演示

:::demo

# 基本用法

按钮有多种变体 `contained` - 实心按钮（默认）、`outlined` - 描边按钮、`text` - 文本按钮、`link` - 链接按钮、`icon` - 图标按钮。

```html
<ve-grid dense align="center">
  <ve-button color="primary">Primary</ve-button>
  <ve-button variant="contained">Secondary</ve-button>
  <ve-button variant="outlined">Outlined</ve-button>
  <ve-button variant="text">Text</ve-button>
</ve-grid>
```

:::

<div class="py-4"></div>

:::include

contained.md outlined.md 

text.md icon.md 

link.md shape.md 

color.md size.md 

density.md block.md 

loading.md group.md

:::