:::demo
# 拖拽排序

```html
<ve-card>
  <ve-drag-sort
    :model-value="[1, 2, 3, 4]"
  >
    <template #item="{ item, on }">
      <ve-list-item
        v-on="on"
        style="cursor: move;"
      >
        {{ item }}
      </ve-list-item>
    </template>
  </ve-drag-sort>
</ve-card>
```
:::