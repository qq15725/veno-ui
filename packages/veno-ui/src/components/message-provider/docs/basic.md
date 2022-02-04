:::demo

# 基本用法

```html
<ve-spacer>
  <ve-button @click="$veno.message.info('This is an info message!')" color="info">Info</ve-button>
  <ve-button @click="$veno.message.success('This is an success message!')" color="success">Success</ve-button>
  <ve-button @click="$veno.message.warning('This is an warning message!')" color="warning">Warning</ve-button>
  <ve-button @click="$veno.message.error('This is an error message!')" color="error">Error</ve-button>
  <ve-button @click="$veno.message.loading('This is an loading message!')">Loading</ve-button>
</ve-spacer>
```

:::