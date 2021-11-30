 :::demo

# fade 淡入淡出

使用 `fade-transition` 组件实现淡入淡出效果。

点击方块查看。

```html
<ve-card
  size="100"
  border="0"
  @click="show = !show"
>
  <ve-fade-transition>
    <ve-card
      v-show="show"
      color="primary"
      size="100%"
    />
  </ve-fade-transition>
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