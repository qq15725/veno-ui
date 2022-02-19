:::demo

# 基本用法

```html
<ve-menu anchor="bottom end">
  <template #activator="{ props }">
    <ve-button-group divided>
      <ve-button text="Submit" />
      <ve-button v-bind="props" icon="$dropdown" />
    </ve-button-group>
  </template>
  
  <template #default="{ isActive }">
    <ve-list @click="isActive.value = false">
      <ve-list-item prepend-icon="mdi-plus" text="新增" link />
      <ve-list-item prepend-icon="mdi-delete" text="删除" link/>
    </ve-list>
  </template>
</ve-menu>
```

:::