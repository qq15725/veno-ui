:::demo

# 使用 v-model 控制显示

```html
<ve-button @click="show = true">Dialog</ve-button>

<ve-dialog v-model="show">
  <template #default="{ close }">
    <ve-card
      title="标题"
      text="一些例子文本内容"
      #actions
    >
      <ve-spacer />
      <ve-button variant="outlined" class="mr-3" @click="close">取消</ve-button>
      <ve-button color="primary" @click="close">确认</ve-button>
    </ve-card>  
  </template>
</ve-dialog>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      show: ref(false),
    }
  }
})
```

:::