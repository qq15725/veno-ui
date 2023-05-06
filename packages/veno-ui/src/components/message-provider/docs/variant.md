:::demo

# 变体

```html
<ve-spacer>
  <ve-button @click="message.info('Contained !', { variant: 'contained' })">Contained</ve-button>
  <ve-button @click="message.info('ContainedText !', { variant: 'contained-text' })">ContainedText</ve-button>
</ve-spacer>
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
