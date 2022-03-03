:::demo

# 基本用法

```html
<ve-card :height="200">
  <ve-draggable #default="{ props }">
    <ve-paper size="40" color="primary" class="p-3" v-bind="props" />
  </ve-draggable>
</ve-card>
```

:::