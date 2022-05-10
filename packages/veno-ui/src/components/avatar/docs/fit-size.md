:::demo

# 自动调整字体大小

```html
<ve-avatar color="primary" :text="value" />

<ve-input v-model="value" class="mt-3" />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      value: ref('艺术家'),
    }
  }
})
```

:::