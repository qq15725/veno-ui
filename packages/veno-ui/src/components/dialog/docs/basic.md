:::demo
# 基本用法

```html
<ve-dialog>
  <template #activator="{ props }">
    <ve-button v-bind="props">对话框</ve-button>
  </template>
  
  <template #default="{ isActive }">
    <ve-card
      title="确认"
      text="一些例子文本内容"
      #actions
      width="400"
    >
      <ve-spacer />
      <ve-button class="mr-3" @click="isActive.value = false">取消</ve-button>
      <ve-button color="primary" @click="isActive.value = false">确认</ve-button>
    </ve-card>  
  </template>
</ve-dialog>
```
:::