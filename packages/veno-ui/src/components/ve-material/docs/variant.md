:::demo

# 变体

`variant` 有 `text`、`contained`、`outlined` 预设变体。

```html
<ve-material 
  size="100%"
  class="p-3"
  color="background"
>
  <ve-grid>
    <ve-material
      v-for="(variant, index) in [
        'text',
        'contained',
        'outlined',
      ]"
      :key="index"
      :variant="variant"
      class="d-flex align-center justify-center text-caption"
      size="100"
    >
      {{ variant }}
    </ve-material>
  </ve-grid>
</ve-material>
```

:::