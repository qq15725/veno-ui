:::demo

# 基本用法

```html
<ve-select
  label="City"
  placeholder="请选择"
  :items="items"
  item-text="title"
  item-value="id"
  clearable
  v-model="selected"
/>

<ve-code class="p-3" :code="String(selected)" theme="dark" />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      selected: ref(),
      items: [
        { id: 1, title: 'Florida' },
        { id: 2, title: 'Georgia' },
        { id: 3, title: 'Nebraska' },
        { id: 4, title: 'California' },
        { id: 5, title: 'New York' },
      ],
    }
  }
})
```

:::
