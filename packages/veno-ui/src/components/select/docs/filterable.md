:::demo

# 可过滤的

通过设置 `filterable` ，可以让选择器支持过滤。

通过监听 `@update:query` 事件，获取查询字符串改动，并且已经做了反抖动处理。

```html
<ve-select
  placeholder="请选择"
  :items="items"
  item-text="state"
  item-value="abbr"
  return-object
  filterable
/>

<ve-select
  v-model="selected"
  placeholder="请选择"
  :items="items"
  item-text="state"
  item-value="abbr"
  return-object
  multiple
  tags
  filterable
/>

<ve-code class="p-3" :code="selected" theme="dark" />
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