:::demo

# 数据驱动

使用 `items` 数据驱动渲染单选框。

```html
<ve-radio-group
  label="单选框组1"
  messages="巴拉巴拉扒拉"
  :items="['Radio1', 'Radio2', 'Radio3']"
/>

<ve-radio-group
  label="单选框组2"
  messages="巴拉巴拉扒拉"
  :items="[{ label: 'Label1', value: 'Value1' }, { label: 'Label2', value: 'Value2' }]"
/>
```

:::