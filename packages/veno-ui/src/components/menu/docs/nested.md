:::demo

# 嵌套

```html
<ve-menu>
  <template #activator="{ props }">
    <ve-button v-bind="props">Click Me</ve-button>
  </template>

  <ve-list>
    <ve-menu anchor="end">
      <template #activator="{ props }">
        <ve-list-item v-bind="props">选项1</ve-list-item>
      </template>

      <ve-list>
        <ve-list-item>选项3</ve-list-item>
        <ve-list-item>选项4</ve-list-item>
      </ve-list>
    </ve-menu>
    <ve-list-item>选项2</ve-list-item>
  </ve-list>
</ve-menu>
```

:::