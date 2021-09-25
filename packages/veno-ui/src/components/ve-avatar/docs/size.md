# 尺寸

有 `x-small`、`small`、`default`、`large` 和 `x-large` 尺寸。

```html
<ve-avatar
  v-for="(size, index) in ['x-small', 'small', 'default', 'large', 'x-large']"
  :key="index"
  :size="size"
  image="https://picsum.photos/id/11/500/300"
  class="mr-3"
/>
```