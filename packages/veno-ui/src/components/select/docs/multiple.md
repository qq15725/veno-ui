:::demo

# 多选选择器

通过设置 `multiple` 支持多选。

配合 `tags` 得到一个标签形式的多选框。

```html
<ve-select
  v-model="selected"
  placeholder="请选择"
  :items="items"
  item-text="state"
  item-value="abbr"
  multiple
/>

<ve-select
  v-model="selected"
  placeholder="请选择"
  :items="items"
  item-text="state"
  item-value="abbr"
  multiple
  tags
/>

<ve-code :code="selected" />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      selected: ref(['FL']),
      items: [
        { state: 'Florida', abbr: 'FL' },
        { state: 'Georgia', abbr: 'GA' },
        { state: 'Nebraska', abbr: 'NE' },
        { state: 'California', abbr: 'CA' },
        { state: 'New York', abbr: 'NY' },
      ],
    }
  }
})
```

:::