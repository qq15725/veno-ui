:::demo

# 图标按钮

```html
<ve-radio-group label="variant" v-model="variant">
  <ve-radio label="contained" />
  <ve-radio label="outlined" />
  <ve-radio label="plain" />
  <ve-radio label="text" />
  <ve-radio label="contained-text" />
  <ve-radio label="contained-outlined" />
</ve-radio-group>

<ve-spacer cols="12">
  <ve-spacer>
    <ve-button :variant="variant" icon="mdi-star-outline" shape="circle" />
    <ve-button :variant="variant" icon="mdi-star-outline" shape="circle" color="primary" />
    <ve-button :variant="variant" icon="mdi-star-outline" shape="circle" disabled />
  </ve-spacer>

  <ve-spacer>
    <ve-button :variant="variant" icon="mdi-star-outline" />
    <ve-button :variant="variant" icon="mdi-star-outline" color="primary" />
    <ve-button :variant="variant" icon="mdi-star-outline" disabled />
  </ve-spacer>

  <ve-spacer>
    <ve-button :variant="variant" prepend-icon="mdi-star-outline">Star</ve-button>
    <ve-button :variant="variant" prepend-icon="mdi-star-outline" color="primary">Star</ve-button>
    <ve-button :variant="variant" prepend-icon="mdi-star-outline" disabled>Star</ve-button>
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
  setup () {
    return {
      variant: ref('contained'),
    }
  }
})
```

:::