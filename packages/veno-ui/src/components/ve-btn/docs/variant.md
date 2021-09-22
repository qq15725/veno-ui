# 按钮种类

按钮的 variant 分别为 `outlined`、`contained`、`text`。

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