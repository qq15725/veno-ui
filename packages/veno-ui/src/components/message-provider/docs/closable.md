:::demo

# 可关闭的

```html
<ve-spacer>
  <ve-button 
    @click="message.info('Closable !', { duration: 0, closable: true })"
    color="info"
  >
    Closable
  </ve-button>
</ve-spacer>
```

```js
import { defineComponent } from 'vue'
import { useMessage } from 'veno-ui'

export default defineComponent({
  setup () {
    return {
      message: useMessage(),
    }
  }
})
```

:::