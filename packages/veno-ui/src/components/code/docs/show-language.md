:::demo

# 显示语言

```html
<ve-code
  theme="dark"
  class="p-3"
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