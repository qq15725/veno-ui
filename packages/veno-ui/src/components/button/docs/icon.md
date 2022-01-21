:::demo

# 图标按钮

```html
<ve-spacer cols="12">
  <ve-spacer>
    <ve-button variant="text" icon="$close" />
    <ve-button variant="text" icon="$close" color="primary" />
    <ve-button variant="text" icon="$close" disabled />
  </ve-spacer>

  <ve-spacer>
    <ve-button icon="$close" />
    <ve-button icon="$close" color="primary" />
    <ve-button icon="$close" disabled />
  </ve-spacer>

  <ve-spacer>
    <ve-button icon="$close" shape="circle" />
    <ve-button icon="$close" shape="circle" color="primary" />
    <ve-button icon="$close" shape="circle" disabled />
  </ve-spacer>

  <ve-spacer>
    <ve-button prepend-icon="$close">Close</ve-button>
    <ve-button prepend-icon="$close" color="primary">Close</ve-button>
    <ve-button prepend-icon="$close" disabled>Close</ve-button>
  </ve-spacer>

  <ve-spacer>
    <ve-button append-icon="$close">Close</ve-button>
    <ve-button append-icon="$close" color="primary">Close</ve-button>
    <ve-button append-icon="$close" disabled>Close</ve-button>
  </ve-spacer>
</ve-spacer>
```

:::