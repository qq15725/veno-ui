:::demo

# 指定可拖动区域

```html
<ve-paper min-height="200">
  <ve-draggable-resizable #default="{ draggable, resizable }">
    <ve-card border v-bind="resizable">
      <ve-toolbar height="30" color="primary" v-bind="draggable">Window</ve-toolbar>
      <ve-card-text />
    </ve-card>
  </ve-draggable-resizable>
</ve-paper>
```

:::