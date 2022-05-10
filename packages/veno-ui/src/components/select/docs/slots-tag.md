:::demo

# 插槽-标签项

通过 `tag` 插槽可以自定义标签渲染。

```html
<ve-select
  v-model="selected"
  placeholder="请选择"
  :items="items"
  item-text="state"
  item-value="abbr"
  multiple
  tags
>
  <template #tag="{ item, close }">
    <ve-tag 
      :key="item.value" 
      v-bind="item"
      @click:close="close"
      closable
      variant="contained"
    />
  </template>
</ve-select>

<ve-code class="p-3" :code="selected" theme="dark" />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
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