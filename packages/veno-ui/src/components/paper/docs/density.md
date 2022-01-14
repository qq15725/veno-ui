:::demo

# 密度

`density` 有 `compact`、`comfortable`、`default`。

```html
<ve-radio-group v-model="size">
  <ve-radio label="xs" />
  <ve-radio label="sm" />
  <ve-radio label="md" />
  <ve-radio label="lg" />
  <ve-radio label="xl" />
</ve-radio-group>

<ve-grid dense align="center">
  <ve-paper density="compact" color="primary" :size="size" />
  <ve-paper density="comfortable" color="primary" :size="size" />
  <ve-paper color="primary" :size="size" />
</ve-grid>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      size: ref('md'),
    }
  }
})
```

:::