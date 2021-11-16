---
category: 布局
---

# 分割线 Divider

`ve-divider` 组件用于分隔内容。

## 演示

:::include

basic.md default-slot.md

dashed.md vertical.md

:::

## Props

### Divider Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| tag | `string` | `'hr'` | 原生 DOM 标签 |
| dashed | `boolean` | `false` | 设置分割线为虚线 |
| vertical | `boolean` | `false` | 设置分割线为垂直线 |
| length | `string \| number` | `undefined` | 设置分割线最大长度 |
| text-align | `'left' \| 'center' \| 'right'` | `'center'` | 分割线内的文本对齐方式 |

## Slots

### Divider Slots

| 名称    | 参数 | 说明       |
| ------- | ---- | ---------- |
| default | `()` | 分割线内的文本内容 |