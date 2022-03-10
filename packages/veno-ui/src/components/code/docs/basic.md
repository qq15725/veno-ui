:::demo

# 基本用法

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
/>
```

:::