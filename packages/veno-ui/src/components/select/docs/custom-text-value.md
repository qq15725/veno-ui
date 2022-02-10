:::demo

# 自定义文本和值

通过指定 `item-text`（默认值：text） 和 `item-value`（默认值：value）显示自定义的文本和值。 而这个示例中，使用 return-object 属性的方式来返回所选项的整个对象值。

```html
<ve-select 
  v-model="selected" 
  :items="items"
  item-text="state"
  item-value="abbr"
  return-object
/>

<ve-code :value="selected" />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      selected: ref({ state: 'Florida', abbr: 'FL' }),
      items: [
        { state: 'Florida', abbr: 'FL' },
        { state: 'Georgia', abbr: 'GA' },
        { state: 'Nebraska', abbr: 'NE' },
        { state: 'California', abbr: 'CA' },
        { state: 'New York', abbr: 'NY' },
      ],
    }
  }
})
```

:::