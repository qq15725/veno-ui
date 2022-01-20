:::demo

# 鼠标悬停显示

```html
<ve-hover #default="{ props, hover }">
  <ve-badge v-bind="props" :model-value="!!hover" content="9999">
    <ve-avatar color="grey-300" />
  </ve-badge>  
</ve-hover>
```

:::