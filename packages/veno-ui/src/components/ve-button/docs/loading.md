# 加载中

```html
<ve-button
  v-for="(variant, index) in ['outlined', 'contained', 'text']"
  :key="index"
  :variant="variant"
  loading
  class="mr-3"
>
  按钮
</ve-button>
```