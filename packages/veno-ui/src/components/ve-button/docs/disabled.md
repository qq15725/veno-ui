# 禁用

```html
<ve-button
  v-for="(variant, index) in ['outlined', 'contained', 'text']"
  :key="index"
  :variant="variant"
  disabled
  color="error"
  style="margin-right: 10px;"
>
  {{ variant }}
</ve-button>
```