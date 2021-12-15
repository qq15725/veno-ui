:::demo

# 头像密度

头像的密度有 `compact`、`comfortable`、`medium`。

```html
<ve-radio-group v-model="size">
  <ve-radio label="x-small" />
  <ve-radio label="small" />
  <ve-radio label="medium" />
  <ve-radio label="large" />
  <ve-radio label="x-large" />
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