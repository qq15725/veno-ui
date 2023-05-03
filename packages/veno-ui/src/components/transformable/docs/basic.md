:::demo

# 基本用法

```html
<ve-paper min-height="200" style="position: relative;">
  <ve-transformable v-model="value" #default="{ props: transformable }">
    <ve-paper color="grey" v-bind="transformable" />
  </ve-transformable>
</ve-paper>

<ve-code class="p-3" :code="value" theme="dark" />
```

```js
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      return {
        value: ref({ left: 0, top: 0, width: 200, height: 100, rotation: 0 }),
      }
    }
  })
```

:::
