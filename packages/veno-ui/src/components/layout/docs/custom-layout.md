:::demo

# 自定义布局

```html
<ve-layout class="mb-3" style="height: 200px;">
  <ve-layout-item class="bg-grey-400" size="40" anchor="top" />
  <ve-layout-item class="bg-grey-400" size="40" anchor="bottom" />
  <ve-layout-item class="bg-grey-300" anchor="left" />
  <ve-layout-item class="bg-grey-300" anchor="right" />
  <ve-main class="bg-grey-200" />
</ve-layout>

<ve-layout class="mb-3" style="height: 200px;">
  <ve-layout-item class="bg-grey-400" size="40" anchor="top" />
  <ve-layout-item class="bg-grey-400" size="40" anchor="bottom" />
  <ve-layout-item class="bg-grey-300" anchor="left" />
  <ve-layout-item class="bg-grey-300" anchor="left" />
  <ve-layout-item class="bg-grey-300" anchor="right" />
  <ve-main class="bg-grey-200" />
</ve-layout>

<ve-layout class="mb-3" style="height: 200px;">
  <ve-layout-item class="bg-grey-300" anchor="left" />
  <ve-layout-item class="bg-grey-300" anchor="right" />
  <ve-layout-item class="bg-grey-400" size="40" anchor="top" />
  <ve-layout-item class="bg-grey-400" size="40" anchor="bottom" />
  <ve-main class="bg-grey-200" />
</ve-layout>

<ve-layout class="mb-3" style="height: 200px;">
  <ve-layout-item class="bg-grey-300" anchor="right" />
  <ve-layout-item class="bg-grey-400" size="40" anchor="top" />
  <ve-layout-item class="bg-grey-400" size="40" anchor="bottom" />
  <ve-layout-item class="bg-grey-300" anchor="left" />
  <ve-main class="bg-grey-200" />
</ve-layout>

<ve-layout style="height: 200px;">
  <ve-layout-item class="bg-grey-300" anchor="left" />
  <ve-layout-item class="bg-grey-400" size="40" anchor="top" />
  <ve-layout-item class="bg-grey-400" size="40" anchor="bottom" />
  <ve-layout-item class="bg-grey-300" anchor="right" />
  <ve-main class="bg-grey-200" />
</ve-layout>
```

:::