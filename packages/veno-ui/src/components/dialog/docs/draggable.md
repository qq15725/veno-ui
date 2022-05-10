:::demo

# 可拖动的对话框

配合 `ve-draggable` 组件实现一个可拖动工具栏的对话框。

```html
<ve-draggable 
  #default="{ draggable, contentStyle }"
  :draggable="!fullscreen"
>
  <ve-dialog 
    persistent 
    no-click-animation 
    :scrim="false" 
    :scroll-strategy="fullscreen ? 'block' : 'none'"
    :content-style="contentStyle"
    :fullscreen="fullscreen"
    scrollable
  >
    <template #activator="{ props }">
      <ve-button v-bind="props">Dialog</ve-button>
    </template>
    
    <template #default="{ close }">
      <ve-card>
        <ve-toolbar title="标题" height="32" color="primary" v-bind="draggable">
          <ve-button
            :icon="fullscreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'"
            @click="toggle"
          />
          <ve-button icon="mdi-close" @click="close" />
        </ve-toolbar>
        <ve-card-text>
          <template v-for="i in 100">一些例子文本内容</template>
        </ve-card-text>
      </ve-card>
    </template>
  </ve-dialog>
</ve-draggable>
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