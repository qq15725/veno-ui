# 基础

```html
<ve-carousel autoplay>
  <ve-carousel-item v-for="i in 5">
    <ve-image
      src="https://picsum.photos/id/11/500/300"
      :aspect-ratio="500 / 300"
    />
  </ve-carousel-item>
</ve-carousel>
```