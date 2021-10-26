:::demo

# 颜色

```html

<ve-row>
  <ve-col
    v-for="(color, index) in [
      'primary',
      'error',
      'red',
      'blue',
      '#8a2be2',
    ]"
    :key="index"
    cols="auto"
  >
    <ve-sheet
      :color="color"
    />
  </ve-col>
</ve-row>
```

:::