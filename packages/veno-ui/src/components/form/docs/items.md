:::demo

# 数据驱动

使用 `items` 数据驱动渲染表单。

```html
<ve-form label-width="100" :items="items" />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      items: ref([
        { $type: 'input', name: 'Input', label: 'Input', placeholder: '请输入' },
        { $type: 'textarea', name: 'Textarea', label: 'Textarea', placeholder: '请输入' },
        { $type: 'select', name: 'Select', label: 'Select', placeholder: '请选择', items: ['select1', 'select2'] },
        { $type: 'date-picker', name: 'DatePicker', label: 'DatePicker', placeholder: '请选择' },
        { $type: 'checkbox', name: 'Checkbox', label: 'Checkbox', items: ['checkbox1', 'checkbox2'] },
        { $type: 'radio', name: 'Radio', label: 'Radio', items: ['radio1', 'radio2'] },
      ])
    }
  }
})
```

:::