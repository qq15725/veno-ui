# 基础

```html
<ve-input
  v-model="value"
  placeholder="基本的 Input"
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