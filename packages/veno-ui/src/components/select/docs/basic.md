:::demo

# 基本用法

```html
<ve-select
  v-model='value'
  placeholder='请选择'
  :label="value"
  :items='items'
/>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      value: ref('50010850'),
      items: [
        {
          'label': '连衣裙',
          'value': '50010850'
        },
        {
          'label': '羽绒服',
          'value': '50008899'
        },
        {
          'label': '毛针织衫',
          'value': '50000697'
        },
        {
          'label': '衬衫',
          'value': '162104'
        },
        {
          'label': '毛呢外套',
          'value': '50013194'
        },
        {
          'label': '休闲裤',
          'value': '162201'
        },
        {
          'label': '时尚套装',
          'value': '123216004'
        },
        {
          'label': '真丝上装',
          'value': '201410704'
        },
        {
          'label': 'T恤',
          'value': '50000671'
        },
        {
          'label': '风衣',
          'value': '50008901'
        },
        {
          'label': '半身裙',
          'value': '1623'
        },
        {
          'label': '短外套',
          'value': '50011277'
        },
        {
          'label': '皮草',
          'value': '50008905'
        },
        {
          'label': '西装',
          'value': '50008897'
        },
        {
          'label': '棉裤/羽绒裤',
          'value': '50026651'
        },
        {
          'label': '毛衣',
          'value': '162103'
        },
        {
          'label': '皮衣',
          'value': '50008904'
        }
      ]
    }
  }
})
```

:::