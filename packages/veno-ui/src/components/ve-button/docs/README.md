---
category: 通用
---

# 按钮 Button

组合了 `ve-material` 的所有能力，`ve-button` 组件用来触发一些操作。

## 演示

:::include

basic.md icon.md

shape.md color.md 

size.md density.md

disabled.md loading.md 

block.md

:::

## Props

### Button Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| loading | `boolean` | `false` | 按钮是否为加载中状态 |
| disabled | `boolean` | `false` | 按钮是否禁用 |
| block | `boolean` | `false` | 按钮是否显示为块级 |
| icon | `boolean \| string` | `false` | 按钮是否为图标按钮或者为按钮图标 |
| prepend-icon | `string` | `undefined` | 前置图标 |
| append-icon | `string` | `undefined` | 后置图标 |
| tag | `string` | `'button'` | `button` 的原生 DOM 标签 |
| type | `string` | `'button'` | `button` 的原生 `type` 属性 |
| to | `string \| object` | `undefined` | `vue-router` 的 `to`。设置此属性时，按钮渲染为a标签。 |
| replace | `boolean` | `false` | `vue-router` 的 `replace`。 |
| href | `string` | `undefined` | 设置跳转链接。设置此属性时，按钮渲染为a标签。 |
| variant | `'contained' \| 'outlined' \| 'text'` | `'contained'` | 按钮的变体种类 |
| size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number \| string` | `'medium'` | 按钮的大小 |
| density | `'compact' \| 'comfortable' \| 'medium'` | `'medium'` | 按钮的密度 |
| color | `string` | `undefined` | 按钮的颜色 |

## Slots

### Button Slots

| 名称    | 参数 | 说明       |
| ------- | ---- | ---------- |
| default | `()` | 按钮的内容 |