:::demo

# 基础

```html
<div class="mb-3">{{ value }}</div>

<ve-select
  v-model="value"
  placeholder="请选择"
  :items="[ 
    { label: '选项1', value: 1 },
    { label: '选项2', value: 2 },
    { label: '选项3', value: 3 },
  ]"
/>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      value: ref(3),
    }
  }
})
```

:::