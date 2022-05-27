:::demo

# 基本用法

```html
<ve-spacer class="mb-3">
  <ve-form v-model="table">
    <ve-switch label="显示边框" name="border" />
    <ve-switch label="隐藏表头" name="hideHeader" />
    <ve-switch label="固定表头" name="fixedHeader" />
    <ve-switch label="暂无数据" name="noData" />
  </ve-form>
</ve-spacer>

<ve-table
  v-bind="table"
  :height="table.fixedHeader ? 250 : undefined"
  :headers="headers"
  :items="table.noData ? [] : items"
  v-model:sort-by="sortBy"
  v-model:sort-desc="sortDesc"
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
  setup() {
    return {
      table: ref({
        border: true,
        hideHeader: false,
        fixedHeader: false,
        noData: false,
      }),
      sortBy: ref('salary'),
      sortDesc: ref(true),
      headers: ref([
        { text: 'Name', width: 200, value: 'name', sortable: true },
        { text: 'Salary', width: 160, value: 'salary', sortable: true, filters: [23000] },
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
        },
      ])
    }
  }
})
```

:::
