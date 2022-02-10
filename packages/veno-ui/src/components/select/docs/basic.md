:::demo

# 基本用法

```html
<ve-select v-model="selected" placeholder="请选择" label="商品品类" :items="items" />

<div>{{ selected }}</div>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      selected: ref('50010850'),
      items: [
        { 'text': '连衣裙', 'value': '50010850' },
        { 'text': '羽绒服', 'value': '50008899' },
        { 'text': '毛针织衫', 'value': '50000697' },
        { 'text': '衬衫', 'value': '162104' },
        { 'text': '毛呢外套', 'value': '50013194' },
        { 'text': '休闲裤', 'value': '162201' },
        { 'text': '时尚套装', 'value': '123216004' },
        { 'text': '真丝上装', 'value': '201410704' },
        { 'text': 'T恤', 'value': '50000671' },
        { 'text': '风衣', 'value': '50008901' },
        { 'text': '半身裙', 'value': '1623' },
        { 'text': '短外套', 'value': '50011277' },
        { 'text': '皮草', 'value': '50008905' },
        { 'text': '西装', 'value': '50008897' },
        { 'text': '棉裤/羽绒裤', 'value': '50026651' },
        { 'text': '毛衣', 'value': '162103' },
        { 'text': '皮衣', 'value': '50008904' }
      ]
    }
  }
})
```

:::