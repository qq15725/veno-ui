:::demo

# 预设尺寸

`size` 有 `x-small`、`small`、`default`、`large` 、`x-large` 预设尺寸。

```html
<ve-row>
  <ve-col
    v-for="(size, index) in [
      'x-small',
      'small',
      'default',
      'large',
      'x-large'
    ]" 
    :key="index"
    cols="auto"
  >
    <ve-sheet :size="size" />
  </ve-col>
</ve-row>
```

:::