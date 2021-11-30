:::demo
# 两个列表

```html
<ve-row>
  <ve-col :cols="6">
    <ve-card>
      <ve-list>
        <ve-drag-sort
          v-model="items1"
          group="group"
        >
          <template #item="{ item, on }">
            <ve-list-item
              v-on="on"
              style="cursor: move;"
            >
              {{ item }}
            </ve-list-item>
          </template>
        </ve-drag-sort>
      </ve-list>
    </ve-card>
  </ve-col>

  <ve-col :cols="6">
    <ve-card>
      <ve-list>
        <ve-drag-sort
          v-model="items2"
          group="group"
        >
          <template #item="{ item, on }">
            <ve-list-item
              v-on="on"
              style="cursor: move;"
            >
              {{ item }}
            </ve-list-item>
          </template>
        </ve-drag-sort>
      </ve-list>
    </ve-card>
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