:::demo

# 可关闭的

```html
<ve-spacer>
  <ve-button 
    @click="$veno.message.info('Closable !', { duration: 0, closable: true })"
    color="info"
  >
    Closable
  </ve-button>
</ve-spacer>
```

:::