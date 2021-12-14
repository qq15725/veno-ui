:::demo

# 例子1

```html
<ve-grid :col-props="{ cols: 12 }">
  <ve-input
    label="背景色"
    prefix="Color"
    placeholder="请输入 RGBA / HSVA"
    clearable
    hide-details
    #suffix
  >
    <ve-tooltip
      text="提示"
      anchor="top"
      #activator="{ props }"
    >
      <ve-icon v-bind="props" icon="veno-ui:$info" />
    </ve-tooltip>
  </ve-input>

  <ve-grid :col-props="{ cols: 6 }">
    <ve-input label="上边距" disabled placeholder="Disabled" type="number" hide-details />
    <ve-input label="右边距" type="number" hide-details />
    <ve-input label="下边距" type="number" hide-details />
    <ve-input label="左边距" type="number" hide-details />
  </ve-grid>
</ve-grid>
```

:::