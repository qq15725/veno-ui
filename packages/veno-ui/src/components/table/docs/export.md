:::demo

# 数据导出

```html
<ve-button
  @click="tableRef.exportCSV('文件名称')"
  class="mb-3"
  color="primary"
>
  导出CSV
</ve-button>

<ve-table
  ref="tableRef"
  :headers="headers" 
  :items="items"
/>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      tableRef: ref(),
      headers: ref([
        { text: 'Name', value: 'name' },
        { text: 'Salary', value: 'salary' },
        { text: 'Address', value: 'address' },
        { text: 'Email', value: 'email' },
      ]),
      items: ref([
        {
          name: 'Jane Doe',
          salary: 23000,
          address: '32 Park Road, London',
          email: 'jane.doe@example.com'
        },
        {
          name: 'Alisa Ross',
          salary: 25000,
          address: '35 Park Road, London',
          email: 'alisa.ross@example.com'
        },
        {
          name: 'Kevin Sandra',
          salary: 22000,
          address: '31 Park Road, London',
          email: 'kevin.sandra@example.com'
        },
        {
          name: 'Ed Hellen',
          salary: 17000,
          address: '42 Park Road, London',
          email: 'ed.hellen@example.com'
        },
        {
          name: 'William Smith',
          salary: 27000,
          address: '62 Park Road, London',
          email: 'william.smith@example.com'
        }
      ])
    }
  }
})
```

:::