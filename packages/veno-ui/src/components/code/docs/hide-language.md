:::demo

# 隐藏代码语言显示

```html
<ve-code
  :value="`
function sleep (ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
`"
  language="js"
  :show-language="false"
/>
```

:::