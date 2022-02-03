:::demo

# 多种变体

```html
<ve-radio-group v-model="variant">
  <ve-radio label="contained" />
  <ve-radio label="outlined" />
  <ve-radio label="contained-text" />
  <ve-radio label="contained-outlined" />
</ve-radio-group>

<ve-spacer cols="12">
  <ve-alert :variant="variant" type="success">This is an success alert.</ve-alert>
  <ve-alert :variant="variant" type="info">This is an info alert.</ve-alert>
  <ve-alert :variant="variant" type="warning">This is an warning alert.</ve-alert>
  <ve-alert :variant="variant" type="error">This is an error alert.</ve-alert>
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