:::demo

# 可关闭的

```html
<ve-grid dense :col-props="{ cols: 12 }">
  <ve-alert type="info" closable>这是一个提示</ve-alert>
  <ve-alert title="提示" closable>这是一个提示</ve-alert>
  <ve-alert title="信息" type="info" closable>这是一个信息警告</ve-alert>
  <ve-alert title="成功" type="success" closable>这是一个成功警告</ve-alert>
  <ve-alert title="警告" type="warning" closable>这是一个警告警告</ve-alert>
  <ve-alert title="错误" type="error" closable>这是一个错误警告</ve-alert>
</ve-grid>
```

:::