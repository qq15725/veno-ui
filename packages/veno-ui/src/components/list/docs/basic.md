:::demo

# 基本用法

```html
<div class="p-10 bg-grey-300">
  <ve-list>
    <ve-list-subheader>Subtitle</ve-list-subheader>
    <ve-list-group>
      <template #header="props">
        <ve-list-item v-bind="props" title="Navigation 1" />
      </template>
      <ve-list-item title="Menu 1" link />
      <ve-list-item title="Menu 2" link />
    </ve-list-group>
    <ve-list-item title="Navigation 2" link />
  </ve-list>
</div>
```

:::