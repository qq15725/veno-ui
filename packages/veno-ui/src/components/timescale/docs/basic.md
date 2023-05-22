:::demo

# 基本用法

```html
<ve-input label="单位宽度" style="margin-bottom: 16px;" type="number" hide-details v-model="unitWidth" />

<ve-timescale :unitWidth="unitWidth" />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      unitWidth: ref(1),
    }
  }
})
```

:::
