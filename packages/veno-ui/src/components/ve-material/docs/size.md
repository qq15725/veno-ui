:::demo

# 预设尺寸

`size` 有 `x-small`、`small`、`default`、`large` 、`x-large` 预设尺寸。

```html
<ve-grid>
  <ve-material
    v-for="(size, index) in [
      'x-small',
      'small',
      'default',
      'large',
      'x-large'
    ]"
    :key="index"
    :size="size"
  />
</ve-grid>
```

:::