:::demo

# 基本用法

```html
<ve-grid :col-props="{ cols: 'auto' }">
  <ve-switch label="显示边框" v-model="border" />
  <ve-switch label="隐藏表头" v-model="hideHeader" />  
  <ve-switch label="固定表头" v-model="fixedHeader" />  
  <ve-switch label="暂无数据" v-model="noData" />  
</ve-grid>

<ve-table
  :border="border"
  :hide-header="hideHeader"
  :fixed-header="fixedHeader"
  :height="fixedHeader ? 250 : undefined"
  :headers="headers" 
  :items="noData ? [] : items"
>
  <template #item.operation>
    <ve-dialog>
      <template #activator="{ props }">
        <ve-button v-bind="props">查看</ve-button>
      </template>

      <template #default="{ isActive }">
        <ve-card
          title="确认"
          text="一些例子文本内容"
          #actions
          width="400"
        >
          <ve-spacer />
          <ve-button class="mr-3" @click="isActive.value = false">取消</ve-button>
          <ve-button color="primary" @click="isActive.value = false">确认</ve-button>
        </ve-card>
      </template>
    </ve-dialog>
  </template>
</ve-table>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      border: ref(true),
      hideHeader: ref(false),
      fixedHeader: ref(false),
      noData: ref(false),
      headers: ref([
        { text: 'Name', width: 200, value: 'name' },
        { text: 'Salary', width: 120, value: 'salary', sortable: true, filters: [23000] },
        { text: 'Address', width: 600, value: 'address' },
        { text: 'Email', width: 300, value: 'email' },
        { value: 'operation', width: 100, align: 'center', fixed: true },
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