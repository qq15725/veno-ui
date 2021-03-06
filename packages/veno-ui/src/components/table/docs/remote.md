:::demo

# 服务端数据

```html
<ve-table
  remote
  fixed-header
  height="400"
  :headers="headers"
  :items="items"
  :loading="loading"
  :pagination="pagination"
  @update:options="handleOptions"
>
  <template #item.short_title="{ item }">
    <ve-tooltip
      #activator="{ props }"
      :text="item.title"
      :open-delay="500"
      anchor="top"
    >
      <ve-link :href="item.url" target="_blank" v-bind="props">{{ item.short_title }}</ve-link>
    </ve-tooltip>
  </template>

  <template #item.cover="{ item }">
    <ve-image :src="item.cover" width="50" :aspect-ratio="1" />
  </template>
</ve-table>
```

```js
import { defineComponent, onMounted, ref } from 'vue'

function stringify(queryString) {
  return Object.keys(queryString)
    .map(k => `${ k.replace(/[A-Z]/, v => `_${ v.toLowerCase() }`) }=${ queryString[k] }`)
    .join('&')
}

function api(params = {}) {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `https://cps.fdota.com/products?${ stringify(params) }`)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        resolve(JSON.parse(xhr.responseText))
      }
    }
    xhr.send(null)
  })
}

export default defineComponent({
  setup() {
    const pagination = ref({
      perPage: 10,
      perPageOptions: [10, 24, 50, 100],
      showQuickJumper: true,
      showPerPageSelect: true,
    })
    const loading = ref(false)
    const items = ref([])

    async function fetch(query = {}) {
      loading.value = true
      const {
        data,
        meta: { current_page: page, per_page: perPage, total }
      } = await api(query)
      items.value = data
      pagination.value = { ...pagination.value, page, perPage, total }
      loading.value = false
    }

    onMounted(() => fetch())

    return {
      handleOptions: ({ sortBy, sortDesc, pagination: { page, perPage } }) => {
        fetch({ page, perPage, sortBy, descending: sortDesc[0] ? 'desc' : 'asc' })
      },
      loading,
      headers: ref([
        { text: '封面', width: 80, value: 'cover', },
        { text: '标题', minWidth: 200, value: 'short_title' },
        { text: '原价', width: 120, value: 'coupons.0.coupon_product.original_price' },
        { text: '券后价', width: 120, value: 'coupons.0.coupon_product.price' },
        { text: '销量', width: 120, value: 'sales_count', sortable: true, },
        { text: '分类', width: 120, value: 'category_unionid' },
        { text: '商家', width: 150, value: 'shop.name' },
        { text: '商家地址', width: 120, value: 'provcity' },
      ]),
      items,
      pagination,
      fetch,
    }
  }
})
```

:::
