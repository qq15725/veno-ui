:::demo

# 基本用法

```html
<ve-spacer>
  <ve-button
    @click="message.info('This is an info message!')"
    color="info"
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