:::demo

# 图标按钮

```html
<ve-grid dense :col-props="{ cols: 12 }">
  <ve-grid dense>
    <ve-button variant="text" icon="veno-ui:$close" />
    <ve-button variant="text" icon="veno-ui:$close" color="primary" />
    <ve-button variant="text" icon="veno-ui:$close" disabled />
  </ve-grid>

  <ve-grid dense>
    <ve-button icon="veno-ui:$close" />
    <ve-button icon="veno-ui:$close" color="primary" />
    <ve-button icon="veno-ui:$close" disabled />
  </ve-grid>

  <ve-grid dense>
    <ve-button icon="veno-ui:$close" shape="circle" />
    <ve-button icon="veno-ui:$close" shape="circle" color="primary" />
    <ve-button icon="veno-ui:$close" shape="circle" disabled />
  </ve-grid>

  <ve-grid dense>
    <ve-button prepend-icon="veno-ui:$close">Close</ve-button>
    <ve-button prepend-icon="veno-ui:$close" color="primary">Close</ve-button>
    <ve-button prepend-icon="veno-ui:$close" disabled>Close</ve-button>
  </ve-grid>

  <ve-grid dense>
    <ve-button append-icon="veno-ui:$close">Close</ve-button>
    <ve-button append-icon="veno-ui:$close" color="primary">Close</ve-button>
    <ve-button append-icon="veno-ui:$close" disabled>Close</ve-button>
  </ve-grid>
</ve-grid>
```

:::