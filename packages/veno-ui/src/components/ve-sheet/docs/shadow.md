:::demo

# 阴影

`shadow` 属性接受一个介于 0 至 24 之间的值。

```html
<ve-row>
  <ve-col 
    v-for="shadow in [6, 12, 18]" 
    :key="shadow"
    cols="auto"
  >
    <ve-sheet :shadow="shadow" />
  </ve-col>
</ve-row>
```

:::