:::demo

# 基本用法

```html
<ve-message ref="message" />

<ve-grid>
  <ve-button
    @click="message.info('This is an info message!')"
  >
    Info
  </ve-button>

  <ve-button
    @click="message.success('This is an success message!')"
    color="success"
  >
    Success
  </ve-button>

  <ve-button
    @click="message.warning('This is an warning message!')"
    color="warning"
  >
    Warning
  </ve-button>

  <ve-button
    @click="message.error('This is an error message!')"
    color="error"
  >
    Error
  </ve-button>
</ve-grid>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      message: ref(),
    }
  }
})
```

:::