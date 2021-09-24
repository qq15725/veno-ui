# 形状

```html
<ve-button
  v-for="(variant, index) in ['outlined', 'contained', 'text']"
  :key="index"
  :variant="variant"
  color="error"
  rounded
  class="mr-3"
>
  {{ variant }}
</ve-button>
```