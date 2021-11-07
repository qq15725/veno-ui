:::demo

# 按钮密度

按钮尺寸配合密度有不同大小。

`density` 有 `compact`、`comfortable`、`medium`。

```html
<ve-grid dense :col-props="{ cols: 12 }">
  <div class="text-grey">XSmall size</div>

  <ve-grid dense align="center">
    <ve-button density="compact" color="primary" size="x-small">Compact</ve-button>
    <ve-button density="comfortable" color="primary" size="x-small">Comfortable</ve-button>
    <ve-button color="primary" size="x-small">Medium</ve-button>
  </ve-grid>

  <div class="text-grey">Small size</div>

  <ve-grid dense align="center">
    <ve-button density="compact" color="primary" size="small">Compact</ve-button>
    <ve-button density="comfortable" color="primary" size="small">Comfortable</ve-button>
    <ve-button color="primary" size="small">Medium</ve-button>
  </ve-grid>

  <div class="text-grey">Medium size</div>

  <ve-grid dense align="center">
    <ve-button density="compact" color="primary">Compact</ve-button>
    <ve-button density="comfortable" color="primary">Comfortable</ve-button>
    <ve-button color="primary">Medium</ve-button>
  </ve-grid>

  <div class="text-grey">Large size</div>

  <ve-grid dense align="center">
    <ve-button density="compact" color="primary" size="large">Compact</ve-button>
    <ve-button density="comfortable" color="primary" size="large">Comfortable</ve-button>
    <ve-button color="primary" size="large">Medium</ve-button>
  </ve-grid>

  <div class="text-grey">XLarge size</div>

  <ve-grid dense align="center">
    <ve-button density="compact" color="primary" size="x-large">Compact</ve-button>
    <ve-button density="comfortable" color="primary" size="x-large">Comfortable</ve-button>
    <ve-button color="primary" size="x-large">Medium</ve-button>
  </ve-grid>
</ve-grid>
```

:::