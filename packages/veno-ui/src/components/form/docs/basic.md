:::demo
# 基本用法

```html
<ve-input label="Input" label-width="100" placeholder="请输入" />

<ve-select
  label="Select" 
  label-width="100"
  placeholder="请选择"
  :items="[
      { label: '选项1', value: 1 },
      { label: '选项2', value: 2 },
      { label: '选项3', value: 3 },
    ]"
/>

<ve-switch label="Switch" label-width="100" />

<ve-checkbox label="Checkbox" label-width="100">
  Checkbox One
</ve-checkbox>

<ve-radio-group label="Radio" label-width="100">
  <ve-radio true-value="1">Radio One</ve-radio>  
  <ve-radio true-value="2">Radio Two</ve-radio>  
</ve-radio-group>

<ve-form-item label-width="100">
  <ve-button>提交</ve-button>
</ve-form-item>
```
:::