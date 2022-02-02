:::demo

# 多种变体

```html
<ve-radio-group label="variant" v-model="variant">
  <ve-radio label="contained" />
  <ve-radio label="outlined" />
  <ve-radio label="contained-text" />
  <ve-radio label="contained-outlined" />
</ve-radio-group>

<ve-spacer cols="12">
  <ve-alert :variant="variant" title="Success Text" type="success" />
  <ve-alert :variant="variant" title="Info Text" type="info" />
  <ve-alert :variant="variant" title="Warning Text" type="warning" />
  <ve-alert :variant="variant" title="Error Text" type="error" />
</ve-spacer>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      variant: ref('contained-outlined'),
    }
  }
})
```

:::