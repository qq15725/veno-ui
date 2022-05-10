:::demo

# 更多分页

```html
<ve-pagination v-model="page" total="500" show-per-page-select />
```

```js
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      page: ref(6),
    }
  },
})
```

:::