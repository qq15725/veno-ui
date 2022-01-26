:::demo

# 行高亮

```html
<ve-code
  :value="`
function sleep (ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
`"
  language="js"
  :highlighted-line-numbers="[[2, 3]]"
/>
```

:::