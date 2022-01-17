:::demo

# 基础使用

```html
<ve-paper height="130">
  <ve-button @click="show = !show" class="mb-3">点我</ve-button>

  <ve-grid>
    <ve-expand-transition>
      <ve-paper v-show="show" color="primary" size="100" />
    </ve-expand-transition>

    <ve-fade-transition>
      <ve-paper v-show="show" color="primary" size="100" />
    </ve-fade-transition>

    <ve-scale-transition>
      <ve-paper v-show="show" color="primary" size="100" />
    </ve-scale-transition>
  </ve-grid>
</ve-paper>
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