---
meta:
  category: Feedback 反馈组件
---

# 通知提醒框 Notification

:::warning 使用前提
创建 Veno 实例时注册 `NotificationProvider`，或者把调用其方法的组件放在 `ve-notification-provider` 内部，使用 `useNotification` 或者 `this.$veno.notification` 去获取 API。
:::

创建 Veno 实例时注册 `NotificationProvider`（推荐）

```ts
import { createVeno } from 'veno-ui'
import { NotificationProvider } from 'veno-ui/providers'
const veno = createVeno({
  providers: { NotificationProvider }
})
// ...
```

或者把调用其方法的组件放在 `ve-notification-provider` 内部

```vue
<ve-notification-provider>
  <router-view />
</ve-notification-provider>
```

```ts
import { defineComponent } from 'vue'
import { useNotification } from 'veno-ui'

export default defineComponent({
  setup () {
    const notification = useNotification()
    return {
      warning () {
        notification.warning('...')
        // 或者直接使用 this.$veno.notification.warning('...')
      }
    }
  }
})
```

## 演示

:::include

basic.md

:::