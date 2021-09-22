# 圆的

```html
<ve-btn
  v-for="(variant, index) in ['outlined', 'contained', 'text']"
  :key="index"
  :variant="variant"
  color="error"
  rounded
  class="mr-3"
>
  {{ variant }}
</ve-btn>
```