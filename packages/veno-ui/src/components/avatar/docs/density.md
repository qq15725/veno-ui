:::demo

# 头像密度

头像的密度有 `compact`、`comfortable`、`medium`。

```html
<ve-radio-group v-model="size">
  <ve-radio label="xs" />
  <ve-radio label="sm" />
  <ve-radio label="md" />
  <ve-radio label="lg" />
  <ve-radio label="xl" />
</ve-radio-group>

<ve-spacer gutter="md" align="center">
  <ve-avatar density="compact" :size="size" image="https://thirdwx.qlogo.cn/mmopen/vi_32/YugUUXsBpKgAeq2uANt0hg6F2pygbGnc61HW7WYRKdu2pXQVXm3U62HPjOPia9HCOMoia6goFZyRAjR7ZJOxibLibw/132" />
  <ve-avatar density="comfortable" :size="size" image="https://thirdwx.qlogo.cn/mmopen/vi_32/YugUUXsBpKgAeq2uANt0hg6F2pygbGnc61HW7WYRKdu2pXQVXm3U62HPjOPia9HCOMoia6goFZyRAjR7ZJOxibLibw/132" />
  <ve-avatar :size="size" image="https://thirdwx.qlogo.cn/mmopen/vi_32/YugUUXsBpKgAeq2uANt0hg6F2pygbGnc61HW7WYRKdu2pXQVXm3U62HPjOPia9HCOMoia6goFZyRAjR7ZJOxibLibw/132" />
</ve-spacer>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      size: ref('md'),
    }
  }
})
```

:::