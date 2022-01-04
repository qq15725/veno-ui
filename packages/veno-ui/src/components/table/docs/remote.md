:::demo

# 服务端数据

```html
<ve-lazy>
  <ve-table
    remote
    fixed-header
    height="400"
    :headers="headers"
    :items="items"
    :loading="loading"
    v-bind="pagination"
    @update:options="options => {
      pagination = { 
        ...pagination,
        descending: options.sortDesc[0] ? 'desc' : 'asc',
        ...options,
      }
      fetch()
    }"
  >
    <template #item.short_title="{ item }">
      <ve-tooltip
        #activator="{ props }"
        :text="item.title"
        :open-delay="500"
        anchor="top"
      >
        <ve-link
          :href="item.url"
          target="_blank"
          v-bind="props"
        >
          {{ item.short_title }}
        </ve-link>
      </ve-tooltip>
    </template>

    <template #item.cover="{ item }">
      <ve-image :src="item.cover" width="50" :aspect-ratio="1" />
    </template>
  </ve-table>
</ve-lazy>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const pagination = ref({
      page: 1,
      perPage: 10,
      lastPage: 0,
    })
    const loading = ref(false)
    const items = ref([])

    function apiFetch (query = {}) {
      query = Object.keys(query).map(k => {
        return k.replace(/[A-Z]/, v => `_${ v.toLowerCase() }`) + `=${ query[k] }`
      }).join('&')

      return new Promise(resolve => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', `http://cps.fdota.com/products?${ query }`)
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            resolve(JSON.parse(xhr.responseText))
          }
        }
        xhr.send(null)
      })
    }

    async function fetch () {
      loading.value = true
      const {
        data,
        meta
      } = await apiFetch(pagination.value)
      items.value = data
      pagination.value = Object.keys(meta).reduce((obj, v) => {
        return {
          ...obj,
          [v.replace(/_([a-z])/, (_, v) => `${ v.toUpperCase() }`)]: meta[v],
        }
      }, {})
      loading.value = false
    }

    fetch()

    return {
      loading,
      headers: ref([
        {
          text: '封面',
          width: 80,
          value: 'cover',
        },
        {
          text: '标题',
          minWidth: 200,
          value: 'short_title'
        },
        {
          text: '原价',
          width: 120,
          value: 'coupons.0.coupon_product.original_price'
        },
        {
          text: '券后价',
          width: 120,
          value: 'coupons.0.coupon_product.price'
        },
        {
          text: '销量',
          width: 120,
          value: 'sales_count',
          sortable: true,
        },
        {
          text: '分类',
          width: 120,
          value: 'category_unionid'
        },
        {
          text: '商家',
          width: 150,
          value: 'shop.name'
        },
        {
          text: '商家地址',
          width: 120,
          value: 'provcity'
        },
      ]),
      items,
      pagination,
      fetch,
    }
  }
})
```

:::