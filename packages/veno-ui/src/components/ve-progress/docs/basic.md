:::demo
# 基础

```html
<ve-progress :model-value="value">
  {{ value }}
</ve-progress>

<div class="mt-3">
  <ve-input v-model="value" type="number" />
</div>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      value: ref(30),
    }
  }
})
```
:::