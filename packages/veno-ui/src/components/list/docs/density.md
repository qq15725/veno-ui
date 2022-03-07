:::demo

# 不同密度的列表

```html
<ve-list width="200" elevation="8" density="high" class="mb-3">
  <ve-list-subheader>High</ve-list-subheader>
  <ve-list-group>
    <template #activator="{ props }">
      <ve-list-item v-bind="props" title="Navigation 1" />
    </template>
    <ve-list-item title="Menu 1" link />
    <ve-list-item title="Menu 2" link />
  </ve-list-group>
  <ve-list-item title="Navigation 2" link />
</ve-list>

<ve-list width="200" elevation="8" density="ultra-high">
  <ve-list-subheader>UltraHigh</ve-list-subheader>
  <ve-list-group>
    <template #activator="{ props }">
      <ve-list-item v-bind="props" title="Navigation 1" />
    </template>
    <ve-list-item title="Menu 1" link />
    <ve-list-item title="Menu 2" link />
  </ve-list-group>
  <ve-list-item title="Navigation 2" link />
</ve-list>
```

:::