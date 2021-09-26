# 基础

```html
<ve-hover #default="{ props, hover }">
  <ve-card
    #text 
    v-bind="props"
    :color="hover ? 'error' : undefined"
  >
    移动鼠标到此
  </ve-card>
</ve-hover>
```