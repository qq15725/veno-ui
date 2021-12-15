:::demo

# 按钮密度

按钮的密度有 `compact`、`comfortable`、`medium`。

```html
<ve-radio-group v-model="size">
  <ve-radio label="x-small" />
  <ve-radio label="small" />
  <ve-radio label="medium" />
  <ve-radio label="large" />
  <ve-radio label="x-large" />
</ve-radio-group>

<ve-grid dense align="center">
  <ve-button density="compact" color="primary" :size="size">Compact</ve-button>
  <ve-button density="comfortable" color="primary" :size="size">Comfortable</ve-button>
  <ve-button color="primary" :size="size">Medium</ve-button>
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