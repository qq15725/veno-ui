:::demo

# 基本用法

图标分为 svg 图标、class 图标、component 图标。

通过定义 `icon="svg:path"` 使用自定义 svg 图标。

通过定义 `icon="class:path"` 使用自定义 class 图标。

通过配置 aliases，可以通过短别名使用。

```html
<ve-spacer>
  <ve-icon size="32" color="success" icon="veno-ui:$success" />
  <ve-icon size="32" color="info" icon="veno-ui:$info" />
  <ve-icon size="32" color="warning" icon="veno-ui:$warning" />
  <ve-icon size="32" color="error" icon="veno-ui:$error" />
  <ve-icon size="32" icon="veno-ui:$close" />
  <ve-icon size="32" icon="veno-ui:$dropdown" />
  <ve-icon size="32" icon="svg:M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
  <ve-icon size="32" view-box="0 0 1024 1024" icon="svg:M769.12 256c-64.8 0-132.96 41.44-202.56 123.2A793.648 793.648 0 0 0 512 451.52c-13.92-20.8-32.48-46.4-54.56-72.32-69.76-81.76-137.92-123.2-202.56-123.2C109.6 256 0 366.08 0 512s109.6 256 254.88 256c64.8 0 132.96-41.44 202.56-123.2 22.08-25.92 40.64-51.52 54.56-72.32 13.92 20.8 32.48 46.4 54.56 72.32 69.76 81.76 137.92 123.2 202.56 123.2C914.4 768 1024 657.92 1024 512s-109.6-256-254.88-256zM254.88 704C144.32 704 64 623.2 64 512s80.32-192 190.88-192c85.6 0 180.32 126.72 220 192-39.68 65.28-134.4 192-220 192z m514.24 0c-85.6 0-180.32-126.72-220-192 39.68-65.28 134.56-192 220-192C879.68 320 960 400.8 960 512s-80.32 192-190.88 192z" />
</ve-spacer>
```

:::