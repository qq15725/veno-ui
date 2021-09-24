# 基础

```html
<ve-switch 
  v-model="value"
/>

<div>{{ value }}</div>
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