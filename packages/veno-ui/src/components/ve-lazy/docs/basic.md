# 基础

```html
<ve-card :height="200">
  <ve-card-text style="overflow-y: auto; max-height: 100%;">
    <div style="height: 250px;"></div>
    
    <ve-lazy>
      <ve-image
        src="https://picsum.photos/id/11/500/300"
        :aspect-ratio="500 / 300"
      />
    </ve-lazy>
  </ve-card-text>
</ve-card>
```