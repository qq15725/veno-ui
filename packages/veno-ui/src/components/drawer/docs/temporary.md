:::demo

# 临时抽屉

```html
<ve-spacer>
  <ve-drawer anchor="top" temporary #activator="{ props }">
    <ve-button v-bind="props">Top</ve-button>   
  </ve-drawer>
  <ve-drawer anchor="right" temporary #activator="{ props }">
    <ve-button v-bind="props">Right</ve-button>   
  </ve-drawer>
  <ve-drawer anchor="bottom" temporary #activator="{ props }">
    <ve-button v-bind="props">Bottom</ve-button>   
  </ve-drawer>
  <ve-drawer anchor="left" temporary #activator="{ props }">
    <ve-button v-bind="props">Left</ve-button>   
  </ve-drawer>
</ve-spacer>
```

:::