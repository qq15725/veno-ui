:::demo

# 头像密度

头像尺寸配合密度有不同大小。

`density` 有 `compact`、`comfortable`、`medium`。

```html
<ve-grid dense :col-props="{ cols: 12 }">
  <div class="text-grey">xs size</div>

  <ve-grid dense align="center">
    <ve-avatar density="compact" size="xs">Compact</ve-avatar>
    <ve-avatar density="comfortable" size="xs">Comfortable</ve-avatar>
    <ve-avatar size="xs">Medium</ve-avatar>
  </ve-grid>

  <div class="text-grey">sm size</div>

  <ve-grid dense align="center">
    <ve-avatar density="compact" size="sm">Compact</ve-avatar>
    <ve-avatar density="comfortable" size="sm">Comfortable</ve-avatar>
    <ve-avatar size="sm">Medium</ve-avatar>
  </ve-grid>

  <div class="text-grey">md size</div>

  <ve-grid dense align="center">
    <ve-avatar density="compact">Compact</ve-avatar>
    <ve-avatar density="comfortable">Comfortable</ve-avatar>
    <ve-avatar>Medium</ve-avatar>
  </ve-grid>

  <div class="text-grey">lg size</div>

  <ve-grid dense align="center">
    <ve-avatar density="compact" size="lg">Compact</ve-avatar>
    <ve-avatar density="comfortable" size="lg">Comfortable</ve-avatar>
    <ve-avatar size="lg">Medium</ve-avatar>
  </ve-grid>

  <div class="text-grey">xl size</div>

  <ve-grid dense align="center">
    <ve-avatar density="compact" size="xl">Compact</ve-avatar>
    <ve-avatar density="comfortable" size="xl">Comfortable</ve-avatar>
    <ve-avatar size="xl">Medium</ve-avatar>
  </ve-grid>
</ve-grid>
```

:::