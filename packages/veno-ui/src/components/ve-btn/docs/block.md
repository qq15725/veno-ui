# Block

```html
<ve-btn
  v-for="(variant, index) in ['outlined', 'contained', 'text']"
  :key="index"
  :variant="variant"
  block
  style="margin-bottom: 10px;"
>
  {{ variant }}
</ve-btn>
```