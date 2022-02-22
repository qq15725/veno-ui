:::demo

# 基本用法

```html
<ve-dialog>
  <template #activator="{ props }">
    <ve-button v-bind="props">Dialog</ve-button>
  </template>
  
  <template #default="{ close }">
    <ve-card
      title="标题"
      text="一些例子文本内容"
      #actions
    >
      <ve-spacer />
      <ve-button variant="outlined" class="mr-3" @click="close">取消</ve-button>
      <ve-button color="primary" @click="close">确认</ve-button>
    </ve-card>  
  </template>
</ve-dialog>
```

:::