:::demo
# 基础

```html
<ve-form-item label="文本输入" label-width="100">
  <ve-input placeholder="请输入" />
</ve-form-item>

<ve-form-item label="选择" label-width="100">
  <ve-select
    placeholder="请选择"
    :items="[
      { label: '选项1', value: 1 },
      { label: '选项2', value: 2 },
      { label: '选项3', value: 3 },
    ]"
  />
</ve-form-item>

<ve-form-item label="开关" label-width="100">
  <ve-switch />
</ve-form-item>
```
:::