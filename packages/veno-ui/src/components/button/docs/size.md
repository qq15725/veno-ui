:::demo

# 按钮尺寸

`size` 有 `xs`、`sm`、`md`、`lg`、`xl` 预设尺寸。

```html
<ve-grid align="center" :col-props="{ cols: 12 }">
  <ve-grid dense align="center">
    <ve-button color="primary" size="xs">xs</ve-button>
    <ve-button color="primary" size="sm">sm</ve-button>
    <ve-button color="primary">md</ve-button>
    <ve-button color="primary" size="lg">lg</ve-button>
    <ve-button color="primary" size="xl">xl</ve-button>
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