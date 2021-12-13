:::demo

# 预设图标

预设图标使用需要加上前缀 `veno-ui:$`，例如 `icon="veno-ui:$close"`。

```html
<ve-grid dense>
  <ve-card 
    v-for="v, k in $venoUi.icons.sets['veno-ui'].aliases"
    :key="k"
    size="100"
    class="d-flex align-center justify-center flex-column overflow-hidden"
    hover
  >
    <ve-icon
      :icon="`veno-ui:$${k}`"
      size="36"
      class="mb-3"
    />

    <div>{{ k }}</div>
  </ve-card>
</ve-grid>
```

:::