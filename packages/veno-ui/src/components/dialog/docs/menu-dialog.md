:::demo

# 从菜单弹出的对话框

```html
<ve-menu open-on-hover>
  <template #activator="{ props }">
    <ve-button v-bind="props">Hover</ve-button>
  </template>

  <ve-list>
    <ve-list-item color="primary" text="Dialog" @click="show = true" />
  </ve-list>
</ve-menu>

<ve-dialog v-model="show" scrollable>
  <ve-card height="200" #text>
    <template v-for="i in 100">占位专用文字</template>
  </ve-card>
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