# 指定拖动手柄

```html
<ve-drag-sort
  :model-value="[1, 2, 3, 4]"
>
  <template #item="{ item, on }">
    <ve-list-item>
      <ve-button
        v-on="on"
        class="mr-3"
        size="x-small"
      >
        拖我
      </ve-button>
      <div>{{ item }}</div>
    </ve-list-item>
  </template>
</ve-drag-sort>
```