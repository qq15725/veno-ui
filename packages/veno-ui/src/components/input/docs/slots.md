:::demo

# 插槽

```html
<ve-input
  placeholder="Input"
  hide-details
>
  <template #append>Append</template>
  <template #prefix>Prefix</template>
  <template #suffix>
    <ve-button
      size="x-small"
      color="primary"
      text="Suffix"
    />
  </template>
  <template #prepend>Prepend</template>
</ve-input>
```

:::