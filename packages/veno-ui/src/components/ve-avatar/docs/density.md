:::demo

# 头像密度

头像尺寸配合密度有不同大小。

`density` 有 `compact`、`comfortable`、`medium`。

```html
<ve-grid dense :col-props="{ cols: 12 }">
  <div class="text-grey">XSmall size</div>

  <ve-grid dense align="center">
    <ve-avatar density="compact" size="x-small">Compact</ve-avatar>
    <ve-avatar density="comfortable" size="x-small">Comfortable</ve-avatar>
    <ve-avatar size="x-small">Medium</ve-avatar>
  </ve-grid>

  <div class="text-grey">Small size</div>

  <ve-grid dense align="center">
    <ve-avatar density="compact" size="small">Compact</ve-avatar>
    <ve-avatar density="comfortable" size="small">Comfortable</ve-avatar>
    <ve-avatar size="small">Medium</ve-avatar>
  </ve-grid>

  <div class="text-grey">Medium size</div>

  <ve-grid dense align="center">
    <ve-avatar density="compact">Compact</ve-avatar>
    <ve-avatar density="comfortable">Comfortable</ve-avatar>
    <ve-avatar>Medium</ve-avatar>
  </ve-grid>

  <div class="text-grey">Large size</div>

  <ve-grid dense align="center">
    <ve-avatar density="compact" size="large">Compact</ve-avatar>
    <ve-avatar density="comfortable" size="large">Comfortable</ve-avatar>
    <ve-avatar size="large">Medium</ve-avatar>
  </ve-grid>

  <div class="text-grey">XLarge size</div>

  <ve-grid dense align="center">
    <ve-avatar density="compact" size="x-large">Compact</ve-avatar>
    <ve-avatar density="comfortable" size="x-large">Comfortable</ve-avatar>
    <ve-avatar size="x-large">Medium</ve-avatar>
  </ve-grid>
</ve-grid>
```

:::