:::demo

# 数据驱动

使用 `items` 数据驱动渲染复选框。

```html
<ve-checkbox-group 
  label="复选框组" 
  messages="这是一条帮助信息"
  :items="['Checkbox1', 'Checkbox2', 'Checkbox3']"
/>

<ve-checkbox-group 
  label="复选框组" 
  messages="这是一条帮助信息"
  :items="[{ label: 'Label1', value: 'Value1' }, { label: 'Label2', value: 'Value2' }]"
/>
```

:::