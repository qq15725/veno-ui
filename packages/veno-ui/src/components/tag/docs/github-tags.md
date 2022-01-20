:::demo

# GitHub Tags

```html
<ve-spacer gutter="md">
  <ve-tag
    v-for="tag in [
      'components', 'typescript', 'ui',
      'vue', 'ui-components', 'vue3',
      'vue3-components',
    ]"
    :key="tag"
    color="#ddf4ff"
    text-color="#0969da"
    shape="round"
    :href="`https://github.com/topics/${ tag }`"
  >
    {{ tag }}
  </ve-tag>
</ve-spacer>
```

:::