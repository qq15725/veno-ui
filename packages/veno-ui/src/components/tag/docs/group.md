:::demo

# 标签组

```html
<ve-tag-group v-model="value" mandatory class="mb-3">
  <ve-tag value="tag1">Tag1</ve-tag>
  <ve-tag value="tag2">Tag2</ve-tag>
</ve-tag-group>

<ve-code :code="value" />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      value: ref('tag1'),
    }
  }
})
```

:::