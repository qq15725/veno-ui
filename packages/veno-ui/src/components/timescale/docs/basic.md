:::demo

# 基本用法

```html
<ve-input label="单位值每像素" style="margin-bottom: 16px;" type="number" hide-details v-model="scale" />

<ve-timescale :scale="scale" />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      scale: ref(1),
    }
  }
})
```

:::
