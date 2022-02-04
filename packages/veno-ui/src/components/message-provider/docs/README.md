---
meta:
  category: Feedback 反馈组件
---

# 全局提示 Message

:::warning 使用前提
注册 `MessageProvider`，或者把调用其方法的组件放在 `ve-message-provider` 内部，使用 `useMessage` 或者 `this.$veno.message` 去获取 API。
:::

注册 `MessageProvider` （推荐）

```ts
import { createVeno } from 'veno-ui'
import { MessageProvider } from 'veno-ui/providers'
export default createVeno({
  providers: { MessageProvider }
})
// ...
```

或者把调用其方法的组件放在 `ve-message-provider` 内部

```vue
<ve-message-provider>
  <router-view />
</ve-message-provider>
```

## 演示

:::include

basic.md

variant.md

closable.md

:::

## 全局使用

需要先注册 `MessageProvider` 。

```ts
import { message } from 'veno-ui'

export default defineComponent({
  setup () {
    return {
      warning () {
        message.warning('...')
      }
    }
  }
})
```