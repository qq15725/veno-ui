:::demo

# 可关闭的

```html
<ve-grid dense :col-props="{ cols: 12 }">
  <ve-alert title="提示" closable>这是一个提示</ve-alert>
  <ve-alert title="提示" type="success" closable>这是一个成功提示</ve-alert>
  <ve-alert title="提示" type="info" closable>这是一个提示</ve-alert>
  <ve-alert title="提示" type="warning" closable>这是一个警告</ve-alert>
  <ve-alert title="提示" type="error" closable>这是一个错误警告</ve-alert>
</ve-grid>
```

:::