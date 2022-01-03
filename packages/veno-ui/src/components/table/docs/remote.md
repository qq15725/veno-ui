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
    v-bind="pagination"
    @update:page="v => {
      pagination.page = v
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

    <template #item.original_price="{ item }">
      {{ item.coupons[0].coupon_product.original_price }}
    </template>

    <template #item.price="{ item }">
      {{ item.coupons[0].coupon_product.price }}
    </template>

    <template #item.cover="{ item }">
      <ve-image :src="item.cover" />
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
    })
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
    }

    fetch()

    return {
      headers: ref([
        {
          text: '封面',
          width: 80,
          value: 'cover',
        },
        {
          text: '标题',
          value: 'short_title'
        },
        {
          text: '原价',
          value: 'original_price'
        },
        {
          text: '券后价',
          value: 'price'
        },
        {
          text: '销量',
          width: 120,
          value: 'sales_count',
        },
        {
          text: '分类',
          width: 120,
          value: 'category_unionid'
        },
        {
          text: '商家地址',
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