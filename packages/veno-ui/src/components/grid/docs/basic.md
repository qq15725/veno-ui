:::demo

# 基本用法

```html
<ve-grid container dense :col-props="{ cols: 3 }">
  <ve-material 
    v-for="i in 20" :key="i"
    color="grey"
    width="100%"
    size="md"
  />
</ve-grid>
```

:::