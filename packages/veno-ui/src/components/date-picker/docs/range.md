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

<ve-code class="p-3" :code="value" theme="dark" />
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