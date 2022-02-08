:::demo

# 不同颜色的标签

```html
<ve-defaults-provider
  :defaults="{ 
    VeTag: { 
      size: 'x-small',
      variant: 'contained-text',
      closable: true,
    },
  }"
>
  <ve-spacer>
    <ve-tag color="red">red</ve-tag>
    <ve-tag color="orange">orange</ve-tag>
    <ve-tag color="lime">lime</ve-tag>
    <ve-tag color="green">green</ve-tag>
    <ve-tag color="cyan">cyan</ve-tag>
    <ve-tag color="blue">blue</ve-tag>
    <ve-tag color="purple">purple</ve-tag>
    <ve-tag color="#168cff">#168cff</ve-tag>
    <ve-tag color="#b71de8">#b71de8</ve-tag>
    <ve-tag color="gray">gray</ve-tag>
  </ve-spacer>
</ve-defaults-provider>
```

:::