:::demo

# 显示行号

```html
<ve-code
  :value="`
function sleep (ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
`"
  language="js"
  show-line-numbers
/>
```

:::