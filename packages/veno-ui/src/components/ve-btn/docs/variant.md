# 按钮种类

```html
<ve-btn
  v-for="(variant, index) in ['outlined', 'contained', 'text']"
  :key="index"
  :variant="variant"
  color="primary"
  class="mr-3"
>
  {{ variant }}
</ve-btn>
```