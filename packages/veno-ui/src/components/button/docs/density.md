:::demo

# 按钮密度

按钮的密度有 `compact`、`comfortable`、`medium`。

```html
<ve-grid :col-props="{ cols: 12 }">
  <ve-radio-group 
    v-model="size"
    label="size"
    hide-details
  >
    <ve-radio label="xs" />
    <ve-radio label="sm" />
    <ve-radio label="md" />
    <ve-radio label="lg" />
    <ve-radio label="xl" />
  </ve-radio-group>
  
  <ve-grid dense align="center">
    <ve-button density="compact" color="primary" :size="size">Compact</ve-button>
    <ve-button density="comfortable" color="primary" :size="size">Comfortable</ve-button>
    <ve-button color="primary" :size="size">Medium</ve-button>
  </ve-grid>
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