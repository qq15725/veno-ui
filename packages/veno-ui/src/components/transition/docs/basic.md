:::demo

# 基础使用

```html
<ve-paper min-height="180">
  <ve-button @click="show = !show" class="mb-3">点我</ve-button>

  <ve-spacer>
    <ve-fade-transition>
      <ve-paper v-show="show" color="primary" size="100" />
    </ve-fade-transition>
    
    <ve-expand-transition>
      <ve-paper v-show="show" color="primary" size="100" />
    </ve-expand-transition>
    
    <ve-fade-in-expand-transition>
      <ve-paper v-show="show" color="primary" size="100" />
    </ve-fade-in-expand-transition>

    <ve-scale-transition>
      <ve-paper v-show="show" color="primary" size="100" />
    </ve-scale-transition>
  </ve-spacer>
</ve-paper>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      show: ref(true),
    }
  }
})
```

:::