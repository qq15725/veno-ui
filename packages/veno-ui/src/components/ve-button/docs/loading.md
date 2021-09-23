# 加载中

```html
<ve-button
  v-for="(variant, index) in ['outlined', 'contained', 'text']"
  :key="index"
  :variant="variant"
  loading
  color="error"
  style="margin-right: 10px;"
>
  {{ variant }}
</ve-button>
```