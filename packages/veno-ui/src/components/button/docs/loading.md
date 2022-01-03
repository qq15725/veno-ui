:::demo

# 加载中

按钮有加载状态。

```html
<ve-grid dense>
  <ve-button :loading="loading" @click="toggle">点我</ve-button>
  <ve-button :loading="loading" @click="toggle" color="primary" prepend-icon="veno-ui:$close">点我</ve-button>
  <ve-button :loading="loading" @click="toggle" color="primary" icon="veno-ui:$close"/>
  <ve-button :loading="loading" @click="toggle" variant="text">点我</ve-button>
</ve-grid>
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
        setTimeout(() => {
          loading.value = !loading.value
        }, 2000)
      }
    }
  }
})
```

:::