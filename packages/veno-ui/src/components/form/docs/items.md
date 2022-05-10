:::demo

# 数据驱动

使用 `items` 数据驱动渲染表单。

相对一大堆模板代码使用 `JSON` 定义可能更方便。

```html
<ve-form v-model="value" label-width="100" :items="items" />

<ve-code class="mt-3 p-3" :code="value" theme="dark" />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      value: ref({}),
      items: ref([
        { $type: 'input', name: 'Input', label: 'Input', placeholder: '请输入' },
        { $type: 'textarea', name: 'Textarea', label: 'Textarea', placeholder: '请输入' },
        { $type: 'select', name: 'Select', label: 'Select', placeholder: '请选择', clearable: true, items: ['select1', 'select2'] },
        { $type: 'switch', name: 'Switch', label: 'Switch' },
        { $type: 'date-picker', name: 'DatePicker', label: 'DatePicker', placeholder: '请选择' },
        { $type: 'checkbox', name: 'Checkbox', label: 'Checkbox', items: ['checkbox1', 'checkbox2'] },
        { $type: 'radio', name: 'Radio', label: 'Radio', items: ['radio1', 'radio2'] },
      ])
    }
  }
})
```

:::