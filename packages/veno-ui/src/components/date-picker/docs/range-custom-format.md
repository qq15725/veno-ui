:::demo

# 自定义格式的时间范围

例如 `YYYY-MM-DD 00:00:00 ~ YYYY-MM-DD 23:59:59`

```html
<ve-date-picker
  v-model="value"
  :format="['YYYY-MM-DD 00:00:00', 'YYYY-MM-DD 23:59:59']" 
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
      value: ref([
        '2022-02-02 00:00:00',
        '2022-04-28 23:59:59'
      ]),
    }
  }
})
```

:::