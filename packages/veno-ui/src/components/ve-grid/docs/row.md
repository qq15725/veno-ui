:::demo

# 自定义行列

```html
<ve-container>
  <ve-row>
    <ve-col
      v-for="(cols, index) in [
        3, 4, 5,
        2, 6, 4,
      ]"
      :key="index"
      :cols="cols"
    >
      <ve-material width="100%" size="medium" color="grey-n2" />
    </ve-col>
  </ve-row>
</ve-container>
```

:::