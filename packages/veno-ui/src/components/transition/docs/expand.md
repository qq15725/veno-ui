:::demo

# expand 扩展

使用 `expand-transition` 组件实现扩展效果。

点击方块查看。

```html
<ve-card
  size="100" 
  border="0" 
  @click="show = !show"
>
  <ve-expand-transition>
    <ve-card
      v-show="show"
      color="primary"
      size="100%"
    />
  </ve-expand-transition>
</ve-card>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      show: ref(true),
    }
  }
})
```

:::