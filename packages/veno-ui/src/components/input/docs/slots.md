:::demo

# 插槽

```html
<ve-input
  placeholder="Input"
  hide-details
>
  <template #prepend>Prepend</template>
  <template #prepend-inner>PrependInner</template>
  <template #prefix>
    <ve-button size="x-small" color="primary" text="Prefix" />
  </template>
  <template #suffix>
    <ve-button size="x-small" color="primary" text="Suffix" />
  </template>
  <template #append>Append</template>
  <template #append-inner>AppendInner</template>
</ve-input>
```

:::