# 基础

```html

<ve-form-item label="文本输入" :label-width="100">
  <ve-input />
</ve-form-item>

<ve-form-item label="开关" :label-width="100">
  <ve-switch />
</ve-form-item>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      value: ref(false),
    }
  }
})
```