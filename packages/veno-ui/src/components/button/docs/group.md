:::demo

# 组合按钮

```html
<ve-grid dense :col-props="{ cols: 12 }">
  <ve-button-group>
    <ve-button text="Submit" />
    <ve-button icon="veno-ui:$dropdown" />
  </ve-button-group>
  
  <ve-button-group>
    <ve-button color="primary" text="Prev" />
    <ve-button color="primary" text="Next" />
  </ve-button-group>
  
  <ve-button-group>
    <ve-button text="Prev" />
    <ve-button text="Next" />
  </ve-button-group>
</ve-grid>
```

:::