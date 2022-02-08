:::demo

# 使用 GitHub 样式的标签作为默认样式

通过 `ve-defaults-provider` 你可以很轻松的修改所有标签的默认样式。 

```html
<ve-defaults-provider
  :defaults="{ 
    VeTag: { 
      size: 'x-small',
      variant: 'contained',
      shape: 'pill',
      color: '#ddf4ff',
      textColor: '#0969da',
    },
  }"
>
  <ve-spacer gutter="4">
    <ve-tag>components</ve-tag>
    <ve-tag>typescript</ve-tag>
    <ve-tag>ui</ve-tag>
    <ve-tag>ui-components</ve-tag>
    <ve-tag>vue</ve-tag>
    <ve-tag>vue3</ve-tag>
    <ve-tag>vue3-components</ve-tag>
    <ve-tag>vue3-ui</ve-tag>
  </ve-spacer>
</ve-defaults-provider>
```

:::