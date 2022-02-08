:::demo

# 修改默认按钮风格

通过 `ve-defaults-provider` 你可以很轻松的修改所有组件的默认样式。

```html
<ve-spacer cols="12">
  <ve-link color="primary" href="https://next.vuetifyjs.com/en/components/buttons" target="_blank">Vuetify</ve-link>
  
  <ve-defaults-provider
    :defaults="{ 
      VeButton: { 
        variant: 'contained',
        color: 'white',
        elevation: 4,
      },
    }"
  >
    <ve-button>DEFAULT</ve-button>
  </ve-defaults-provider>
  
  <ve-divider />

  <ve-link color="primary" href="https://arco.design/vue/component/button" target="_blank">Arco Design Vue</ve-link>

  <ve-defaults-provider
    :defaults="{ 
      VeButton: { 
        variant: 'contained',
        color: '#f2f3f5',
        textColor: '#4e5969',
        ripple: false,
      },
    }"
  >
    <ve-button>Secondary</ve-button>
  </ve-defaults-provider>

  <ve-divider />

  <ve-link color="primary" href="https://www.naiveui.com/zh-CN/os-theme/components/button#basic" target="_blank">Naive UI</ve-link>

  <ve-defaults-provider
    :defaults="{ 
      VeButton: { 
        variant: 'outlined',
        color: '#333639',
        ripple: false,
      },
    }"
  >
    <ve-button>Default</ve-button>
  </ve-defaults-provider>

</ve-spacer>
```

:::