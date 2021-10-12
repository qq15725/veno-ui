:::demo
# 变体

按钮的 variant 分别为 `outlined`、`contained`、`text`。

```html
<ve-button
  v-for="(variant, index) in ['outlined', 'contained', 'text']"
  :key="index"
  :variant="variant"
  color="primary"
  class="mr-3"
>
  按钮
</ve-button>
```
:::