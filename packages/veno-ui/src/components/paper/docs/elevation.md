:::demo

# 纸张高度

`elevation` 属性接受一个介于 0 至 24 之间的值。

```html
<ve-grid container dense class="bg-grey-300">
  <ve-paper
    v-for="elevation in [0, 1, 2, 3, 4, 6, 8, 12, 16, 24]"
    :key="elevation"
    size="40"
    :elevation="elevation"
  />
</ve-grid>
```

:::