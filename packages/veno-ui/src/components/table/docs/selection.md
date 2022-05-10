:::demo

# 选中行

```html
<ve-table
  :headers="headers"
  item-key="name"
  :items="items"
  v-model:selected="selected"
/>

<ve-code class="mt-3 p-3" :code="selected" theme="dark" />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      headers: ref([
        { $type: 'selection' },
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
      ]),
      selected: ref([]),
    }
  }
})
```

:::