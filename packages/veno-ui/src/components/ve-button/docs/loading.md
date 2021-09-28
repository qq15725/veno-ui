# 加载中

按钮有加载状态。

```html
<ve-button
  class="mr-3"
  size="small"
  :loading="loading"
  @click="toggle"
>
  点我
</ve-button>

<ve-button
  class="mr-3"
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
        loading.value = true
        setTimeout(() => {
          loading.value = false
        }, 3000)
      }
    }
  }
})
```