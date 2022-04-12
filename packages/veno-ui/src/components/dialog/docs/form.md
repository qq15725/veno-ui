:::demo

# 一个表单对话框

```html
<ve-dialog>
  <template #activator="{ props }">
    <ve-button v-bind="props">Dialog</ve-button>
  </template>
  
  <template #default="{ close }">
    <ve-card title="修改资料">
      <template #text>
        <ve-form
          class="pt-3 px-5"
          :items="[
            { label: '账号', name: 'username', placeholder: '请输入' },
            { label: '密码', name: 'password', type: 'password', placeholder: '请输入' },
            { label: '昵称', name: 'nick', placeholder: '请输入' },
          ]"
        />
      </template>
      <template #actions>
        <ve-spacer />
        <ve-button variant="outlined" class="mr-3" @click="close">取消</ve-button>
        <ve-button color="primary" @click="close">确认</ve-button>
        <ve-spacer />
      </template>
    </ve-card>
  </template>
</ve-dialog>
```

:::