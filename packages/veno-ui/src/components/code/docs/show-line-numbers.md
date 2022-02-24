:::demo

# 隐藏行号

```html
<ve-code
  :code="`
function sleep (ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
`"
  language="js"
  show-line-numbers
/>
```

:::