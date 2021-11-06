:::demo

# 材料高度

`elevation` 属性接受一个介于 0 至 24 之间的值。

```html
<ve-grid dense>
  <ve-material
    v-for="elevation in [0, 1, 2, 3, 4, 6, 8, 12, 16, 24]"
    :key="elevation"
    text-center
    size="medium"
    :elevation="elevation"
  >
    {{ elevation }}
  </ve-material>
</ve-grid>
```

:::