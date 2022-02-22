:::demo

# 最大宽度高度

通过 `max-width` 、`max-height` 可以调整最大宽高的限制。

```html
<ve-dialog scrollable max-width="800">
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