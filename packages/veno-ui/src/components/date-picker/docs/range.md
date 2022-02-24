:::demo

# 时间范围

```html
<ve-date-picker 
  v-model="value" 
  range 
  placeholder="请选择日期范围" 
  label="某一段" 
  clearable
/>

<ve-code :code="value" />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      value: ref([]),
    }
  }
})
```

:::