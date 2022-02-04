---
meta:
  category: Feedback 反馈组件
---

# 通知提醒框 Notification

:::warning 使用前提
创建 Veno 实例时注册 `NotificationProvider`，或者把调用其方法的组件放在 `ve-notification-provider` 内部，使用 `useNotification` 或者 `this.$veno.notification` 去获取 API。
:::

注册 `NotificationProvider` （推荐）

```ts
import { createVeno } from 'veno-ui'
import { NotificationProvider } from 'veno-ui/providers'
export default createVeno({
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

## 演示

:::include

basic.md

:::

## 全局使用

需要先注册 `NotificationProvider` 。

```ts
import { notification } from 'veno-ui'

export default defineComponent({
  setup () {
    return {
      warning () {
        notification.warning('...')
      }
    }
  }
})
```