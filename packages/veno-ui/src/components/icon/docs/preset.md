:::demo

# 预设图标

预设图标使用需要加上前缀 `$`，例如 `icon="$close"`。

```html
<ve-spacer>
  <ve-card
    v-for="v, k in $veno.icons.aliases"
    :key="k"
    size="100"
    class="d-flex align-center justify-center flex-column"
    hover
  >
    <ve-icon size="36" class="mb-3">${{ k }}</ve-icon>

    <div style="width: 100%;" class="text-center text-truncate">{{ k }}</div>
  </ve-card>
</ve-spacer>
```

:::