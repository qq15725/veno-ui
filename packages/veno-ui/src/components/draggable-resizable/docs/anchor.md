:::demo

# 显示可拖拽点

定义 `show-resizable-anchor` 属性会显示所有的可拖拽点。

```html
<ve-paper min-height="200">
  <ve-draggable-resizable show-resizable-anchor #default="{ draggable, resizable }">
    <ve-card border v-bind="resizable">
      <ve-toolbar height="30" color="primary" v-bind="draggable">Window</ve-toolbar>
      <ve-card-text />
    </ve-card>
  </ve-draggable-resizable>
</ve-paper>
```

:::