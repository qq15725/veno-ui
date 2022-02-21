:::demo

# 插槽-无数据

设置 `no-data-text` ，可以修改默认的无数据文案。

当前也可以通过 `no-data` 插槽，自定义渲染。

```html
<ve-select placeholder="请选择" no-data-text="乌拉乌拉" />

<ve-select placeholder="请选择">
  <template #no-data>
    <ve-card title="乌拉乌拉" />
  </template>
</ve-select>
```

:::