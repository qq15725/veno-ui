:::demo

# 基本用法

```html
<ve-menu>
  <template #activator="{ props }">
    <ve-button v-bind="props">Click Me</ve-button>
  </template>
  
  <ve-card>
    <ve-list>
      <ve-list-item>选项1</ve-list-item>
      <ve-list-item>选项2</ve-list-item>
    </ve-list>
  </ve-card>
</ve-menu>
```

:::