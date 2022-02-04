:::demo

# 基本用法

```html
<ve-spacer>
  <ve-button @click="$veno.notification.info('This is an info notification!')" color="info">Info</ve-button>
  <ve-button @click="$veno.notification.success('This is an success notification!')" color="success">Success</ve-button>
  <ve-button @click="$veno.notification.warning('This is an warning notification!')" color="warning">Warning</ve-button>
  <ve-button @click="$veno.notification.error('This is an error notification!')" color="error">Error</ve-button>
  <ve-button @click="$veno.notification.loading('This is an loading notification!')">Loading</ve-button>
</ve-spacer>
```

:::