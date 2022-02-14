:::demo

# 多选选择器

通过设置 multiple ，可以让选择器支持多选。

```html
<ve-select
  v-model="selected"
  placeholder="请选择"
  :items="items"
  item-text="state"
  item-value="abbr"
  return-object
  multiple
  tags
/>

<ve-code :value="selected" />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      selected: ref([]),
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