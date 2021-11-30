:::demo

# 自定义分隔符

通过 separator 插槽自定义分隔符。

```html
<ve-breadcrumb>
  <ve-breadcrumb-item>Home</ve-breadcrumb-item>
  <ve-breadcrumb-item>Channel</ve-breadcrumb-item>
  <ve-breadcrumb-item>News</ve-breadcrumb-item>
  <template #separator>
    <ve-icon icon="svg:M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
  </template>
</ve-breadcrumb>
```

:::