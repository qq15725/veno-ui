:::demo

# 基础

```html
<div class="p-10 bg-grey-n2">
  <ve-list dense>
    <ve-list-subheader>Subtitle</ve-list-subheader>
    
    <ve-list-group>
      <template #header="props">
        <ve-list-item v-bind="props" title="Navigation 1" />
      </template>
      
      <ve-list-item title="Menu 1" />
      <ve-list-item title="Menu 2" />
    </ve-list-group>

    <ve-list-item title="Navigation 2" />
  </ve-list>
</div>
```

:::