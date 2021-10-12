:::demo
# 加载中

按钮有加载状态。

```html
<ve-button
  :loading="loading"
  @click="toggle"
>
  点我
</ve-button>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const loading = ref(false)
    
    return {
      loading,
      toggle: () => {
        loading.value = !loading.value
      }
    }
  }
})
```
:::