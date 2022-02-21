:::demo

# 插槽

输入框作为一个基础组件，有一身的插槽位。

```html
<ve-input placeholder="Placeholder">
  <template #prepend>Prepend</template>
  <template #prepend-inner>PrependInner</template>
  <template #prefix><ve-tag size="x-small" color="primary" text="Prefix" /></template>
  <template #default>Default</template>
  <template #suffix><ve-tag size="x-small" color="primary" text="Suffix" /></template>
  <template #append>Append</template>
  <template #append-inner>AppendInner</template>
  <template #counter>Counter</template>
</ve-input>
```

:::