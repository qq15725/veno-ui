:::demo

# 内容样式

可拖拽区域分离。

```html
<ve-card :height="200">
  <ve-draggable #default="{ draggable, contentStyle }">
    <ve-button v-bind="draggable">拖拽我</ve-button>

    <ve-paper size="40" color="primary" class="p-3" :style="contentStyle" />
  </ve-draggable>
</ve-card>
```

:::