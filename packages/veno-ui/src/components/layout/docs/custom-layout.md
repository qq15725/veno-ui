:::demo

# 自定义布局

```html
<ve-layout class="mb-3" style="height: 200px;">
  <ve-layout-item class="bg-grey-400" size="40" side="top" />
  <ve-layout-item class="bg-grey-400" size="40" side="bottom" />
  <ve-layout-item class="bg-grey-300" side="left" />
  <ve-layout-item class="bg-grey-300" side="right" />
  <ve-main class="bg-grey-200" />
</ve-layout>

<ve-layout class="mb-3" style="height: 200px;">
  <ve-layout-item class="bg-grey-400" size="40" side="top" />
  <ve-layout-item class="bg-grey-400" size="40" side="bottom" />
  <ve-layout-item class="bg-grey-300" side="left" />
  <ve-layout-item class="bg-grey-300" side="left" />
  <ve-layout-item class="bg-grey-300" side="right" />
  <ve-main class="bg-grey-200" />
</ve-layout>

<ve-layout class="mb-3" style="height: 200px;">
  <ve-layout-item class="bg-grey-300" side="left" />
  <ve-layout-item class="bg-grey-300" side="right" />
  <ve-layout-item class="bg-grey-400" size="40" side="top" />
  <ve-layout-item class="bg-grey-400" size="40" side="bottom" />
  <ve-main class="bg-grey-200" />
</ve-layout>

<ve-layout class="mb-3" style="height: 200px;">
  <ve-layout-item class="bg-grey-300" side="right" />
  <ve-layout-item class="bg-grey-400" size="40" side="top" />
  <ve-layout-item class="bg-grey-400" size="40" side="bottom" />
  <ve-layout-item class="bg-grey-300" side="left" />
  <ve-main class="bg-grey-200" />
</ve-layout>

<ve-layout style="height: 200px;">
  <ve-layout-item class="bg-grey-300" side="left" />
  <ve-layout-item class="bg-grey-400" size="40" side="top" />
  <ve-layout-item class="bg-grey-400" size="40" side="bottom" />
  <ve-layout-item class="bg-grey-300" side="right" />
  <ve-main class="bg-grey-200" />
</ve-layout>
```

:::