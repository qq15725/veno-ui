:::demo

# 颜色

```html
<ve-grid>
  <ve-material
    v-for="(color, index) in [
      'primary',
      'error',
      'red',
      'blue',
      '#8a2be2',
    ]"
    :key="index"
    :color="color"
  />
</ve-grid>
```

:::