:::demo

# 基本用法

一个简单的数据双向绑定例子，尝试拖动下方。

```html
<ve-list>
  <ve-draggable-sortable v-model="items" #item="{ item, props }">
    <ve-list-item v-bind="mergeProps(item, props)" link variant="contained" />
  </ve-draggable-sortable>
</ve-list>

<ve-code class="mt-3 p-3" :code="items" theme="dark" />
```

```js
import { defineComponent, ref, mergeProps } from 'vue'

export default defineComponent({
  setup () {
    return {
      mergeProps,
      items: ref([
        { color: 'info', text: '第一项' },
        { color: 'error', text: '第二项' },
        { color: 'success', text: '第三项' },
        { color: 'warning', text: '第四项' },
      ]),
    }
  }
})
```

:::