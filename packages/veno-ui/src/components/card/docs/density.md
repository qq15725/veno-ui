:::demo

# 卡片密度

`density` 有 `compact`、`comfortable`、`medium`。

```html
<ve-grid dense align="center" :col-props="{ cols: 12 }">
  <ve-card density="compact" title="Compact" />
  <ve-card density="comfortable" title="Comfortable" />
  <ve-card title="Medium" />
</ve-grid>
```

:::