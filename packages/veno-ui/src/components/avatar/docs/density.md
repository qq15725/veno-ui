:::demo

# 头像密度

```html
<ve-radio-group label="size" v-model="size">
  <ve-radio label="x-small" />
  <ve-radio label="small" />
  <ve-radio label="medium" />
  <ve-radio label="large" />
  <ve-radio label="x-large" />
</ve-radio-group>

<ve-spacer gutter="md" align="center">
  <ve-avatar density="ultra-high" :size="size" image="https://thirdwx.qlogo.cn/mmopen/vi_32/YugUUXsBpKgAeq2uANt0hg6F2pygbGnc61HW7WYRKdu2pXQVXm3U62HPjOPia9HCOMoia6goFZyRAjR7ZJOxibLibw/132" />
  <ve-avatar density="high" :size="size" image="https://thirdwx.qlogo.cn/mmopen/vi_32/YugUUXsBpKgAeq2uANt0hg6F2pygbGnc61HW7WYRKdu2pXQVXm3U62HPjOPia9HCOMoia6goFZyRAjR7ZJOxibLibw/132" />
  <ve-avatar density="medium" :size="size" image="https://thirdwx.qlogo.cn/mmopen/vi_32/YugUUXsBpKgAeq2uANt0hg6F2pygbGnc61HW7WYRKdu2pXQVXm3U62HPjOPia9HCOMoia6goFZyRAjR7ZJOxibLibw/132" />
  <ve-avatar density="low" :size="size" image="https://thirdwx.qlogo.cn/mmopen/vi_32/YugUUXsBpKgAeq2uANt0hg6F2pygbGnc61HW7WYRKdu2pXQVXm3U62HPjOPia9HCOMoia6goFZyRAjR7ZJOxibLibw/132" />
  <ve-avatar density="ultra-low" :size="size" image="https://thirdwx.qlogo.cn/mmopen/vi_32/YugUUXsBpKgAeq2uANt0hg6F2pygbGnc61HW7WYRKdu2pXQVXm3U62HPjOPia9HCOMoia6goFZyRAjR7ZJOxibLibw/132" />
</ve-spacer>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      size: ref('medium'),
    }
  }
})
```

:::