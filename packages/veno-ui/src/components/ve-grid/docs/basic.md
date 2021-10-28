:::demo

# 基础

```html
<ve-grid container dense :col-props="{ cols: 3 }">
  <ve-material 
    v-for="i in 20" :key="i"
    width="100%"
    color="grey-n2"
  />
</ve-grid>
```

:::