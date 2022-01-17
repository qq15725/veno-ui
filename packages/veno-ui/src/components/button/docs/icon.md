:::demo

# 图标按钮

```html
<ve-spacer cols="12">
  <ve-spacer>
    <ve-button variant="text" icon="veno-ui:$close" />
    <ve-button variant="text" icon="veno-ui:$close" color="primary" />
    <ve-button variant="text" icon="veno-ui:$close" disabled />
  </ve-spacer>

  <ve-spacer>
    <ve-button icon="veno-ui:$close" />
    <ve-button icon="veno-ui:$close" color="primary" />
    <ve-button icon="veno-ui:$close" disabled />
  </ve-spacer>

  <ve-spacer>
    <ve-button icon="veno-ui:$close" shape="circle" />
    <ve-button icon="veno-ui:$close" shape="circle" color="primary" />
    <ve-button icon="veno-ui:$close" shape="circle" disabled />
  </ve-spacer>

  <ve-spacer>
    <ve-button prepend-icon="veno-ui:$close">Close</ve-button>
    <ve-button prepend-icon="veno-ui:$close" color="primary">Close</ve-button>
    <ve-button prepend-icon="veno-ui:$close" disabled>Close</ve-button>
  </ve-spacer>

  <ve-spacer>
    <ve-button append-icon="veno-ui:$close">Close</ve-button>
    <ve-button append-icon="veno-ui:$close" color="primary">Close</ve-button>
    <ve-button append-icon="veno-ui:$close" disabled>Close</ve-button>
  </ve-spacer>
</ve-spacer>
```

:::