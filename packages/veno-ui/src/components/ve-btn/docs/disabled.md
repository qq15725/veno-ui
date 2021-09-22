# 不可用状态

```html
<ve-btn
  v-for="(variant, index) in ['outlined', 'contained', 'text']"
  :key="index"
  :variant="variant"
  disabled
  color="error"
  style="margin-right: 10px;"
>
  {{ variant }}
</ve-btn>
```