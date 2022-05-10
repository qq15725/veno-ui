:::demo

# 按钮密度

按钮的密度有 `ultra-high` - 超高、`high` - 高、`medium` - 中等（默认）、`low` - 低、`ultra-low` - 超低。

```html
<ve-radio-group label="density" v-model="density">
  <ve-radio value="ultra-high" />
  <ve-radio value="high" />
  <ve-radio value="medium" />
  <ve-radio value="low" />
  <ve-radio value="ultra-low" />
</ve-radio-group>

<ve-spacer align="center">
  <ve-button :density="density" size="x-small" color="primary">XSmall</ve-button>
  <ve-button :density="density" size="small" color="primary">Small</ve-button>
  <ve-button :density="density" size="medium" color="primary">Medium</ve-button>
  <ve-button :density="density" size="large" color="primary">Large</ve-button>
  <ve-button :density="density" size="x-large" color="primary">XLarge</ve-button>
</ve-spacer>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      density: ref('medium'),
    }
  }
})
```

:::