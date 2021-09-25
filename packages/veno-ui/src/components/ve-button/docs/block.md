# 块状

```html
<ve-button
  v-for="(variant, index) in ['outlined', 'contained', 'text']"
  :key="index"
  :variant="variant"
  block
  class="mb-3"
>
  按钮
</ve-button>
```