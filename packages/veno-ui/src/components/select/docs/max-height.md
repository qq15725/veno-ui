:::demo

# 最大高度

```html
<ve-select placeholder="请选择" :items="items" clearable />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      items: [...Array.from({ length: 20 })].map((_, i) => i + 1)
    }
  }
})
```

:::