:::demo

# 应用布局

`app` 基于 `layout` 封装，`header` 、`sider` 基于 `layout-item` 封装。

此处作为演示填写的 `position="absolute"` 、`layer-z-index="0"`，实际使用默认值即可。

```html
<ve-app layer-z-index="0" style="height: 400px;">
  <ve-header position="absolute" priority="-1" class="bg-grey-400" />
  <ve-sider position="absolute" priority="-1" class="bg-grey-300" />
  <ve-main class="bg-grey-200" />
  <ve-sider side="right" position="absolute" priority="-1" class="bg-grey-300" />
</ve-app>
```

:::