:::demo
# 尺寸

有 `x-small`、`small`、`default`、`large` 和 `x-large` 尺寸。

```html
<ve-button
  v-for="(size, index) in ['x-small', 'small', 'default', 'large', 'x-large']"
  :key="index"
  :size="size"
  class="mr-3"
>
  按钮
</ve-button>
```
:::