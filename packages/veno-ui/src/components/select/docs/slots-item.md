:::demo

# 插槽-选择项

通过 `item` 插槽可以自定义选择项的渲染。

```html
<ve-select
  v-model="selected"
  placeholder="请选择"
  :items="items"
  item-text="state"
  item-value="abbr"
  multiple
>
  <template #item="{ props, item }">
    <ve-list-item
      v-bind="{ ...props, ...item }"
      v-show="!item.filtered"
      link
      prepend-avatar="https://avatars.githubusercontent.com/u/19576382"
    />
  </template>
</ve-select>

<ve-code class="p-3" :code="selected" theme="dark" />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      selected: ref(['FL']),
      items: [
        {
          state: 'Florida',
          abbr: 'FL'
        },
        {
          state: 'Georgia',
          abbr: 'GA'
        },
        {
          state: 'Nebraska',
          abbr: 'NE'
        },
        {
          state: 'California',
          abbr: 'CA'
        },
        {
          state: 'New York',
          abbr: 'NY'
        },
      ],
    }
  }
})
```

:::