# Block

```html
<ve-button
  v-for="(variant, index) in ['outlined', 'contained', 'text']"
  :key="index"
  :variant="variant"
  block
  style="margin-bottom: 10px;"
>
  {{ variant }}
</ve-button>
```