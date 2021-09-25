# 禁用

```html
<ve-button
  v-for="(variant, index) in ['outlined', 'contained', 'text']"
  :key="index"
  :variant="variant"
  disabled
  class="mr-3"
>
  按钮
</ve-button>
```