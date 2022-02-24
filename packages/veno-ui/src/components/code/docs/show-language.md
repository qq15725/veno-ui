:::demo

# 显示语言

```html
<ve-code
  :code="`
function sleep (ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
`"
  language="js"
  show-language
/>
```

:::