:::demo

# 按钮密度

按钮尺寸配合密度有不同大小。

`density` 有 `compact`、`comfortable`、`medium`。

```html
<ve-grid dense :col-props="{ cols: 12 }">
  <div class="text-grey">xs size</div>

  <ve-grid dense align="center">
    <ve-button density="compact" color="primary" size="xs">Compact</ve-button>
    <ve-button density="comfortable" color="primary" size="xs">Comfortable</ve-button>
    <ve-button color="primary" size="xs">Medium</ve-button>
  </ve-grid>

  <div class="text-grey">xm size</div>

  <ve-grid dense align="center">
    <ve-button density="compact" color="primary" size="sm">Compact</ve-button>
    <ve-button density="comfortable" color="primary" size="sm">Comfortable</ve-button>
    <ve-button color="primary" size="sm">Medium</ve-button>
  </ve-grid>

  <div class="text-grey">md size</div>

  <ve-grid dense align="center">
    <ve-button density="compact" color="primary">Compact</ve-button>
    <ve-button density="comfortable" color="primary">Comfortable</ve-button>
    <ve-button color="primary">Medium</ve-button>
  </ve-grid>

  <div class="text-grey">lg size</div>

  <ve-grid dense align="center">
    <ve-button density="compact" color="primary" size="lg">Compact</ve-button>
    <ve-button density="comfortable" color="primary" size="lg">Comfortable</ve-button>
    <ve-button color="primary" size="lg">Medium</ve-button>
  </ve-grid>

  <div class="text-grey">xl size</div>

  <ve-grid dense align="center">
    <ve-button density="compact" color="primary" size="xl">Compact</ve-button>
    <ve-button density="comfortable" color="primary" size="xl">Comfortable</ve-button>
    <ve-button color="primary" size="xl">Medium</ve-button>
  </ve-grid>
</ve-grid>
```

:::