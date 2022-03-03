:::demo

# 基本用法

默认有 8 个方向的可拖拽点。

```html
<ve-paper min-height="200">
  <ve-draggable-resizable v-model="value" #default="{ props }">
    <ve-card color="primary" v-bind="props" />
  </ve-draggable-resizable>
</ve-paper>

<ve-code :code="value" />
```

```js
import { defineComponent, ref, mergeProps } from 'vue'

export default defineComponent({
  setup () {
    return {
      value: ref({ width: 200, height: 100 }),
    }
  }
})
```

:::