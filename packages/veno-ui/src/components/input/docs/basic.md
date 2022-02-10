:::demo

# 基本用法

```html
<ve-input
  v-model="value" 
  placeholder="Input"
  clearable
/>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      value: ref(''),
    }
  }
})
```

:::