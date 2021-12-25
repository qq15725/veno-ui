:::demo

# 尺寸

进度条的尺寸有 `x-small` - 特小、`small` - 小、`medium` - 中等、`large` - 大、`x-large` - 特大。

```html
<ve-grid dense align="center">
  <ve-progress
    size="x-small"
    color="primary"
    variant="circular"
    :model-value="30"
  />
  <ve-progress
    size="small"
    color="primary"
    variant="circular"
    :model-value="30"
  />
  <ve-progress
    color="primary"
    variant="circular"
    :model-value="30"
  />
  <ve-progress
    size="large"
    color="primary"
    variant="circular"
    :model-value="30"
  />
  <ve-progress
    size="x-large"
    color="primary"
    variant="circular"
    :model-value="30"
  />
</ve-grid>
```

:::