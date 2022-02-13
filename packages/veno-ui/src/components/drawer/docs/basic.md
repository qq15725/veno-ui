:::demo

# 基本用法

```html
<ve-button class="mb-3" @click="show = !show">切换</ve-button>

<ve-layout style="height: 200px;">
  <ve-drawer permanent :rail="show" position="absolute">
    <ve-list>
      <ve-list-item prepend-icon="mdi-close" title="Menu 1" link />
      <ve-list-item prepend-icon="mdi-close" title="Menu 2" link />
      <ve-list-item prepend-icon="mdi-close" title="Menu 3" link />
      <ve-list-item prepend-icon="mdi-close" title="Menu 4" link />
      <ve-list-item title="Menu 5" link />
    </ve-list>
  </ve-drawer>
</ve-layout>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      show: ref(true),
    }
  }
})
```

:::