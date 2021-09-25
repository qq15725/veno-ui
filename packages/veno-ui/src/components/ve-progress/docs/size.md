# 尺寸

有 `x-small`、`small`、`default`、`large` 和 `x-large` 尺寸。

```html
<ve-progress
  v-for="(size, index) in ['x-small', 'small', 'default', 'large', 'x-large']"
  :key="index"
  :size="size"
  color="primary"
  :model-value="30"
  style="margin-right: 10px;"
/>
```