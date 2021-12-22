:::demo

# 按钮尺寸

按钮的尺寸有 `x-small` - 特小、`small` - 小、`medium` - 中等、`large` - 大、`x-large` - 特大。

```html
<ve-grid align="center" :col-props="{ cols: 12 }">
  <ve-grid dense align="center">
    <ve-button size="x-small" color="primary">xs</ve-button>
    <ve-button size="small" color="primary">sm</ve-button>
    <ve-button size="medium" color="primary">md</ve-button>
    <ve-button size="large" color="primary">lg</ve-button>
    <ve-button size="x-large" color="primary">xl</ve-button>
  </ve-grid>

  <ve-grid dense align="center">
    <ve-button size="xs" icon="veno-ui:$close" />
    <ve-button size="sm" icon="veno-ui:$close" />
    <ve-button size="md" icon="veno-ui:$close" />
    <ve-button size="lg" icon="veno-ui:$close" />
    <ve-button size="xl" icon="veno-ui:$close" />
  </ve-grid>
</ve-grid>
```

:::