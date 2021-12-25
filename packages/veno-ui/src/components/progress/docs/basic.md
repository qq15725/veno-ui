:::demo

# 基本用法

进度条有2种变体 `linear` - 线性进度条（默认）、`circular` - 圆形进度条。

```html
<ve-progress
  :model-value="value"
  :stroke-width="strokeWidth"
  variant="circular"
  class="mb-3"
>
  {{ value }}
</ve-progress>

<ve-progress
  :model-value="value"
  :stroke-width="strokeWidth"
  variant="linear"
  class="mb-3"
>
  {{ value }}
</ve-progress>

<ve-input label="进度比" v-model="value" type="number" hide-details />
<ve-input label="描线宽" v-model="strokeWidth" type="number" hide-details />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      value: ref(30),
      strokeWidth: ref(3),
    }
  }
})
```

:::