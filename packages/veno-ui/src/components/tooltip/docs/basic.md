:::demo

# 基本用法

```html
<ve-spacer>
  <ve-tooltip
    #activator="{ props }"
    text="提示"
  >
    <ve-button v-bind="props">提示</ve-button>
  </ve-tooltip>

  <ve-tooltip
    #activator="{ props }"
    text="提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示"
  >
    <ve-button v-bind="props">提示</ve-button>
  </ve-tooltip>
</ve-spacer>
```

:::