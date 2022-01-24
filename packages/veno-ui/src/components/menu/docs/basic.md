:::demo

# 基本用法

```html
<ve-menu>
  <template #activator="{ props }">
    <ve-button-group divided>
      <ve-button text="Submit" />
      <ve-button v-bind="props" icon="$dropdown" />
    </ve-button-group>
  </template>
  
  <ve-card>
    <ve-list>
      <ve-list-item link>选项1</ve-list-item>
      <ve-list-item link>选项2</ve-list-item>
    </ve-list>
  </ve-card>
</ve-menu>
```

:::