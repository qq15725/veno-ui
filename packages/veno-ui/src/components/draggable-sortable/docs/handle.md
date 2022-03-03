:::demo

# 指定拖动区域

通过插槽传递的 `draggable` - 可拖拽、 `droppable` - 可放置，可以指定元素可拖动，指定元素可放置。

```html
<ve-list>
  <ve-draggable-sortable v-model="items" #item="{ item, draggable, droppable }">
    <ve-list-item v-bind="mergeProps(droppable, item)" link variant="contained">
      <ve-button v-bind="draggable" class="mr-3" size="xs" text="拖我才能拖得动" variant="outlined" />
    </ve-list-item>
  </ve-draggable-sortable>
</ve-list>
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