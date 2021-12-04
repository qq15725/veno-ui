:::demo

# 按钮尺寸

按钮的尺寸有 `x-small` - 特小、`small` - 小、`medium` - 中等、`large` - 大、`x-large` - 特大。

```html
<ve-grid align="center" :col-props="{ cols: 12 }">
  <ve-grid dense align="center">
    <ve-button color="primary" size="x-small">XSmall</ve-button>
    <ve-button color="primary" size="small">Small</ve-button>
    <ve-button color="primary">Medium</ve-button>
    <ve-button color="primary" size="large">Large</ve-button>
    <ve-button color="primary" size="large">XLarge</ve-button>
  </ve-grid>

  <ve-grid dense align="center">
    <ve-button size="xs" icon="veno-ui:$close" />
    <ve-button size="sm" icon="veno-ui:$close" />
    <ve-button icon="veno-ui:$close" />
    <ve-button size="lg" icon="veno-ui:$close" />
    <ve-button size="xl" icon="veno-ui:$close" />
  </ve-grid>
</ve-grid>
```

:::