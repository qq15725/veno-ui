:::demo

# 基本用法

```html
<ve-select label="City" placeholder="请选择" :items="items" clearable />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      items: ['Florida', 'Georgia', 'Nebraska', 'California', 'New York']
    }
  }
})
```

:::