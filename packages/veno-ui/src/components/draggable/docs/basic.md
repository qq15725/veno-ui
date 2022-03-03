:::demo

# 基本用法

```html
<ve-card :height="200">
  <ve-draggable v-model="value" #default="{ props }">
    <ve-paper size="40" color="primary" class="p-3" v-bind="props" />
  </ve-draggable>
</ve-card>

<ve-code :code="value" />
```

```js
import { defineComponent, ref, mergeProps } from 'vue'

export default defineComponent({
  setup () {
    return {
      value: ref({ left: 100, top: 100 }),
    }
  }
})
```

:::