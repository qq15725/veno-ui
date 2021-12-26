:::demo

# 基本用法

```html
<ve-grid :col-props="{ cols: 'auto' }">
  <ve-switch label="边框" v-model="border" />

  <ve-switch label="表头" v-model="showHeaders" />  
</ve-grid>

<ve-table
  :border="border"
  :hide-headers="!showHeaders"
  :headers="headers" 
  :items="items"
/>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      border: ref(true),
      showHeaders: ref(true),
      headers: ref([
        { label: 'Name', name: 'name' },
        { label: 'Salary', name: 'salary' },
        { label: 'Address', name: 'address' },
        { label: 'Email', name: 'email' }
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