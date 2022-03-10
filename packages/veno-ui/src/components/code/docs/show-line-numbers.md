:::demo

# 显示行号

```html
<ve-code
  theme="dark"
  class="p-3"
  language="js"
  :code="`
function sleep (ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
`"
  show-line-numbers
/>
```

:::