:::demo

# 头像密度

头像的密度有 `compact`、`comfortable`、`medium`。

```html
<ve-radio-group label="size" v-model="size">
  <ve-radio label="xs" />
  <ve-radio label="sm" />
  <ve-radio label="md" />
  <ve-radio label="lg" />
  <ve-radio label="xl" />
</ve-radio-group>

<ve-grid dense align="center">
  <ve-avatar density="compact" :size="size">Compact</ve-avatar>
  <ve-avatar density="comfortable" :size="size">Comfortable</ve-avatar>
  <ve-avatar :size="size">Medium</ve-avatar>
</ve-grid>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      size: ref('medium'),
    }
  }
})
```

:::