:::demo

# 临时抽屉

```html
<ve-drawer v-model="show" :anchor="anchor" temporary />

<ve-spacer>
  <ve-button
    v-for="v in ['left', 'top', 'right', 'bottom']" :key="v"
    @click="anchor = v; show = !show;"
  >
    {{ v }}
  </ve-button>  
</ve-spacer>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      anchor: ref('left'),
      show: ref(false),
    }
  }
})
```

:::