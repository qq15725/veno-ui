# 加载中

```html
<ve-btn
  v-for="(variant, index) in ['outlined', 'contained', 'text']"
  :key="index"
  :variant="variant"
  loading
  color="error"
  style="margin-right: 10px;"
>
  {{ variant }}
</ve-btn>
```