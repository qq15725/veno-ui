:::demo

# 头像密度

头像的密度有 `ultra-high` - 超高、`high` - 高、`medium` - 中等（默认）、`low` - 低、`ultra-low` - 超低。

```html
<ve-radio-group label="density" v-model="density">
  <ve-radio value="ultra-high" />
  <ve-radio value="high" />
  <ve-radio value="medium" />
  <ve-radio value="low" />
  <ve-radio value="ultra-low" />
</ve-radio-group>

<ve-spacer align="center">
  <ve-avatar :density="density" size="x-small" image="https://avatars.githubusercontent.com/u/19576382" />
  <ve-avatar :density="density" size="small" image="https://avatars.githubusercontent.com/u/19576382" />
  <ve-avatar :density="density" size="medium" image="https://avatars.githubusercontent.com/u/19576382" />
  <ve-avatar :density="density" size="large" image="https://avatars.githubusercontent.com/u/19576382" />
  <ve-avatar :density="density" size="x-large" image="https://avatars.githubusercontent.com/u/19576382" />
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