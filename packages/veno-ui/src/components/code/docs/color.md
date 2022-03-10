:::demo

# 背景颜色

```html
<ve-code
  inline
  color="secondary"
  class="px-3" 
>
  console.log('code')
</ve-code>

<ve-code
  class="mt-3 py-3 px-6"
  theme="dark"
  language="js"
  :code="`
function sleep (ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
`"
/>
```

:::