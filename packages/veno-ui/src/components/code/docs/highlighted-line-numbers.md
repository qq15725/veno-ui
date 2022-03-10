:::demo

# 行高亮

```html
<ve-code
  class="p-3"
  language="js"
  :code="`
function sleep (ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
`"
  theme="dark"
  :highlighted-line-numbers="[[2, 3]]"
/>
```

:::