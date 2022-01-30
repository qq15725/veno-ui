:::demo

# 列表密度

```html
<div class="p-10 bg-grey-300">
  <ve-list density="high" class="mb-3">
    <ve-list-subheader>Comfortable</ve-list-subheader>
    <ve-list-group>
      <template #header="props">
        <ve-list-item v-bind="props" title="Navigation 1" />
      </template>
      <ve-list-item title="Menu 1" link />
      <ve-list-item title="Menu 2" link />
    </ve-list-group>
    <ve-list-item title="Navigation 2" link />
  </ve-list>

  <ve-list density="ultra-high">
    <ve-list-subheader>Compact</ve-list-subheader>
    <ve-list-group>
      <template #header="props">
        <ve-list-item v-bind="props" title="Navigation 1" />
      </template>
      <ve-list-item title="Menu 1" link />
      <ve-list-item title="Menu 2" link />
    </ve-list-group>
    <ve-list-item title="Navigation 2" link />
  </ve-list>
</div>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      size: ref('md'),
    }
  }
})
```

:::