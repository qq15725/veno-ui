:::demo

# 应用布局

`app` 基于 `layout` 封装，`header` 、`drawer` 基于 `layout-item` 封装。

此处作为演示填写的 `position="absolute"` 、`layer-z-index="0"`，实际使用默认值即可。

```html
<ve-app layer-z-index="0" style="height: 400px;">
  <ve-header position="absolute" class="bg-grey-400" />
  <ve-drawer position="absolute" class="bg-grey-300" width="64" permanent />
  <ve-main class="bg-grey-200" />
  <ve-drawer anchor="right" position="absolute" class="bg-grey-300" width="64" permanent />
</ve-app>
```

:::