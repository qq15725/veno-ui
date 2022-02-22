:::demo

# 全屏

设置 `fullscreen` 对话框将会铺满全屏。

```html
<ve-dialog fullscreen>
  <template #activator="{ props }">
    <ve-button v-bind="props">Dialog</ve-button>
  </template>
  
  <template #default="{ close }">
    <ve-card>
      <ve-toolbar title="这是标题">
        <ve-spacer />
        <ve-button icon="mdi-close" @click="close" />
      </ve-toolbar>
      
      <ve-divider />
      
      <ve-card-text>
        右上角点击关闭
      </ve-card-text>
    </ve-card>  
  </template>
</ve-dialog>
```

:::