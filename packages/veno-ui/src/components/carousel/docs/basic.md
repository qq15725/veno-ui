:::demo

# 基本用法

```html
<ve-carousel height="200" class="text-primary">
  <ve-carousel-item v-for="i in 5">
    <ve-card
      class="d-flex align-center justify-center" 
      width="100%"
      height="100%"
      border="0"
      v-text="i"
    />
  </ve-carousel-item>
</ve-carousel>
```

:::