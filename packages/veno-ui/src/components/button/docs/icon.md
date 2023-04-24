:::demo

# 图标按钮

```html
<ve-radio-group label="variant" v-model="variant">
  <ve-radio value="contained" />
  <ve-radio value="outlined" />
  <ve-radio value="plain" />
  <ve-radio value="text" />
  <ve-radio value="contained-text" />
  <ve-radio value="contained-outlined" />
</ve-radio-group>

<ve-spacer cols="12">
  <ve-spacer>
    <ve-button :variant="variant" icon="$warning" shape="circle" />
    <ve-button :variant="variant" icon="$warning" shape="circle" color="primary" />
    <ve-button :variant="variant" icon="$warning" shape="circle" disabled />
  </ve-spacer>

  <ve-spacer>
    <ve-button :variant="variant" icon="$warning" />
    <ve-button :variant="variant" icon="$warning" color="primary" />
    <ve-button :variant="variant" icon="$warning" disabled />
  </ve-spacer>

  <ve-spacer>
    <ve-button :variant="variant" prepend-icon="$warning">Star</ve-button>
    <ve-button :variant="variant" prepend-icon="$warning" color="primary">Star</ve-button>
    <ve-button :variant="variant" prepend-icon="$warning" disabled>Star</ve-button>
  </ve-spacer>

  <ve-spacer>
    <ve-button-group :variant="variant" divided>
      <ve-button text="Submit" />
      <ve-button icon="$dropdown" />
    </ve-button-group>

    <ve-button-group :variant="variant" divided color="primary">
      <ve-button text="Submit" />
      <ve-button icon="$dropdown" />
    </ve-button-group>

    <ve-button-group :variant="variant" divided disabled>
      <ve-button text="Submit" />
      <ve-button icon="$dropdown" />
    </ve-button-group>
  </ve-spacer>
</ve-spacer>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      variant: ref('contained'),
    }
  }
})
```

:::
