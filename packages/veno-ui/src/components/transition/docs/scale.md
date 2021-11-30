:::demo

# scale 缩放

使用 `scale-transition` 组件实现缩放效果。

点击方块查看。

```html
<ve-card
  size="100"
  border="0"
  @click="show = !show"
>
  <ve-scale-transition>
    <ve-card
      v-show="show"
      color="primary"
      size="100%"
    />
  </ve-scale-transition>
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