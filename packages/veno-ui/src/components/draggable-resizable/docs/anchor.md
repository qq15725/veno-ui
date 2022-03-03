:::demo

# 显示可拖拽点

定义 `show-resizable-anchor` 属性会显示所有的可拖拽点。

```html
<ve-card :height="200">
  <ve-draggable-resizable show-resizable-anchor #default="{ value, props }">
    <ve-paper border class="p-3" v-bind="props">
      x: {{ value.left }} y: {{ value.top }}
    </ve-paper>
  </ve-draggable-resizable>
</ve-card>
```

:::