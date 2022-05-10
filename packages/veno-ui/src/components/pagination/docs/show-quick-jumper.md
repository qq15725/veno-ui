:::demo

# 快速跳跃

```html
<ve-pagination v-model="page" total="500" show-per-page-select show-quick-jumper />
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