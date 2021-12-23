:::demo

# 基本用法

进度条有2种变体 `circle` - 圆形进度条（默认）、`line` - 线性精度条。

```html
<ve-progress :percent="value" variant="line" class="mb-3">{{ value }}</ve-progress>

<ve-progress :percent="value" variant="circle" class="mb-3">{{ value }}</ve-progress>

<ve-input v-model="value" type="number" hide-details />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      value: ref(30),
    }
  }
})
```

:::