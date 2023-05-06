:::demo

# 可关闭的

```html
<ve-button @click="message.info('Closable !', { duration: 0, closable: true })" color="info">Closable</ve-button>
```

```js
import { defineComponent } from 'vue'
import { message } from 'veno-ui'

export default defineComponent({
  setup() {
    return {
      message,
    }
  },
})
```

:::
