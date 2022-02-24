:::demo

# 显示行号

```html
<ve-code
  :code="`
function sleep (ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
`"
  language="js"
  line-numbers
/>
```

:::