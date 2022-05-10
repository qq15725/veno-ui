:::demo

# 搜索框

通过设置 `filterable` 和 `onUpdate:query` ，可以很容易实现一个搜索框。

设置 `:delete-after-unmount="false"` 可以使 `items` 值修改时不移除已选中的值。

```html
<ve-select
  v-model="selected"
  placeholder="请输入搜索内容"
  :items="items"
  multiple
  tags
  filterable
  :delete-after-unmount="false"
  @update:query="onQuery"
  :loading="loading"
  width="200"
/>

<ve-code class="p-3" :code="selected" theme="dark" />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const selected = ref([])
    const items = ref([])
    const loading = ref(false)

    return {
      selected,
      items,
      loading,
      onQuery: v => {
        if (!v) return
        loading.value = true
        setTimeout(() => {
          loading.value = false
          items.value = [
            `${ v }--1`,
            `${ v }--2`,
            `${ v }--3`,
            `${ v }--4`,
            `${ v }--5`,
            ...selected.value,
          ]
        }, 1000)
      },
    }
  }
})
```

:::