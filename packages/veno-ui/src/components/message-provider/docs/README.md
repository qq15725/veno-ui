---
meta:
  category: Feedback 反馈组件
  wai-aria: https://www.w3.org/TR/wai-aria-1.1/#alert
---

# 全局提示 Message

:::warning 使用前提
你需要把调用其方法的组件放在 `ve-message-provider` 内部，使用 `useMessage` 或者 `this.$veno.message` 去获取 API。
:::


```vue
<!-- App.vue -->
<ve-message-provider>
  <router-view />
</ve-message-provider>
```

```ts
import { defineComponent } from 'vue'
import { useMessage } from 'veno-ui'

export default defineComponent({
  setup () {
    const message = useMessage()
    return {
      warning () {
        message.warning('...')
        // 或者直接使用 this.$veno.message.warning('...')
      }
    }
  }
})
```

## 演示

:::include

basic.md

variant.md

closable.md

:::

## API

<<<API message-provider