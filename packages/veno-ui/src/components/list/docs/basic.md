:::demo

# 基本用法

```html
<ve-list elevation="8" width="200">
  <ve-list-subheader>Subtitle</ve-list-subheader>
  <ve-list-group>
    <template #activator="{ props }">
      <ve-list-item v-bind="props" title="Navigation 1" value="Navigation 1" />
    </template>
    <ve-list-item title="Menu 1" value="Menu 1" link />
    <ve-list-item title="Menu 2" value="Menu 2" link />
  </ve-list-group>
  <ve-list-item title="Navigation 2" value="Navigation 2" link />
</ve-list>
```

:::