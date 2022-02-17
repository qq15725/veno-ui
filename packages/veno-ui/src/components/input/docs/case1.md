:::demo

# 例子1

```html
<ve-spacer cols="12">
  <ve-input
    label="背景色"
    prefix="Color"
    placeholder="请输入 RGBA / HSVA"
    hide-details
    #suffix
  >
    <ve-tooltip
      text="提示"
      anchor="top"
      #activator="{ props }"
    >
      <ve-icon v-bind="props" icon="$info" />
    </ve-tooltip>
  </ve-input>

  <ve-spacer cols="6">
    <ve-input label="上边距" disabled placeholder="Disabled" type="number" hide-details />
    <ve-input label="右边距" type="number" hide-details />
    <ve-input label="下边距" type="number" hide-details />
    <ve-input label="左边距" type="number" hide-details />
  </ve-spacer>
</ve-spacer>
```

:::