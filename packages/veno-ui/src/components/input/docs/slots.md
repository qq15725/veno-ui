:::demo

# 插槽

```html
<ve-input
  placeholder="Input..."
  hide-details
>
  <template #append>append</template>
  <template #prefix>prefix</template>
  <template #suffix>
    <ve-button size="x-small">suffix</ve-button>
  </template>
  <template #prepend>prepend</template>
</ve-input>
```

:::