:::demo

# 自动播放

```html
<ve-carousel autoplay class="text-white">
  <ve-carousel-item v-for="i in 5">
    <ve-image
      src="https://picsum.photos/id/11/500/300"
      :aspect-ratio="500 / 300"
    />
  </ve-carousel-item>
</ve-carousel>
```

:::