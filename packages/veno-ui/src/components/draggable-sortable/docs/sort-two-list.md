:::demo

# 两个列表

指定相同 `group` 的排序列表可以互相拖拽排序。

```html
<ve-row>
  <ve-col :cols="6">
    <ve-list border>
      <ve-draggable-sortable v-model="items1" group="group" #item="{ item, props }">
        <ve-list-item v-bind="props" link variant="contained" border class="m-3">
          {{ item }}
        </ve-list-item>
      </ve-draggable-sortable>
    </ve-list>
  </ve-col>

  <ve-col :cols="6">
    <ve-list border>
      <ve-draggable-sortable v-model="items2" group="group" #item="{ item, props }">
        <ve-list-item v-bind="props" link variant="contained" border class="m-3">
          {{ item }}
        </ve-list-item>
      </ve-draggable-sortable>
    </ve-list>
  </ve-col>
</ve-row>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      items1: ref([1, 2, 3, 4]),
      items2: ref([5, 6, 7]),
    }
  }
})
```

:::