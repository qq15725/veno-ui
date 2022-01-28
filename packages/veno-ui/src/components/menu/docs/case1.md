:::demo

# 示例1

```html
<ve-menu open-on-hover>
  <template #activator="{ props }">
    <ve-button v-bind="props">Hover</ve-button>
  </template>
  
  <ve-card width="180">
    <ve-card-text>
      <ve-checkbox-group hide-details>
        <ve-checkbox label="> 20000" />
        <ve-checkbox label="> 30000" />
      </ve-checkbox-group>
    </ve-card-text>

    <ve-divider />
    
    <ve-card-actions class="justify-center">
      <ve-button size="sm" class="mr-3">重置</ve-button>
      <ve-button size="sm" color="primary">确认</ve-button>
    </ve-card-actions>
  </ve-card>
</ve-menu>
```

:::