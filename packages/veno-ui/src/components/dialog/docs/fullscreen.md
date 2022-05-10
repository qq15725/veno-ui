:::demo

# 全屏

设置 `fullscreen` 对话框将会铺满全屏。

```html
<ve-dialog :fullscreen="fullscreen">
  <template #activator="{ props }">
    <ve-button v-bind="props">Dialog</ve-button>
  </template>
  
  <template #default="{ close }">
    <ve-card>
      <ve-toolbar color="primary" :height="fullscreen ? 42 : 32" title="标题">
        <ve-button
          :icon="fullscreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'" 
          @click="toggle"
        />
        <ve-button icon="mdi-close" @click="close" />
      </ve-toolbar>
      
      <ve-card-text>右上键关闭弹窗和打开全屏</ve-card-text>
    </ve-card>  
  </template>
</ve-dialog>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const fullscreen = ref(false)

    return {
      fullscreen,
      toggle: () => fullscreen.value = !fullscreen.value
    }
  }
})
```

:::