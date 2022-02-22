:::demo

# 可滚动

设置 `scrollable` 配合 `ve-card` 和 `ve-card-text` 可以很简单的获得一个只有中间内容滚动的对话框，此示例使用的是 `text` 插槽。

```html
<ve-dialog scrollable>
  <template #activator="{ props }">
    <ve-button v-bind="props">Dialog</ve-button>
  </template>

  <template #default="{ close }">
    <ve-card title="标题标题标题" divided>
      <template #text>
        <template v-for="i in 100">一些例子文本内容</template>
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