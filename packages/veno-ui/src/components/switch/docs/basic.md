:::demo
# 基本用法

```html
<ve-switch 
  v-model="value"
/>

<div class="mt-3">{{ value }}</div>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      value: ref(false),
    }
  }
})
```
:::