:::demo

# 隐藏分页器

```html
<ve-table
  :headers="headers" 
  :items="items"
  hide-pagination
/>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      headers: ref([
        { text: 'Name', value: 'name' },
      ]),
      items: ref([
        { name: 'Jane Doe' },
        { name: 'Alisa Ross' },
        { name: 'Kevin Sandra' },
        { name: 'Ed Hellen' },
        { name: 'William Smith' }
      ])
    }
  }
})
```

:::