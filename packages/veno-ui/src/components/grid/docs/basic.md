:::demo

# 基本用法

flexbox 构建的 12 等分网格系统。

```html
<ve-row>
  <ve-col
    v-for="(cols, index) in [
      3, 4, 5,
      2, 6, 4,
      7, 4, 1,
    ]"
    :key="index"
    :cols="cols"
  >
    <ve-paper width="100%" height="30" color="#EEE" />
  </ve-col>
</ve-row>
```

:::
