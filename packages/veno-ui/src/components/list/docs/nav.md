:::demo

# 导航列表

一个常见的导航列表。

```html
<ve-list 
  width="200" 
  elevation="8" 
  nav 
  :items="items"
  v-model:opened="opened"
/>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      opened: ref(true),
      items: ref([
        {
          title: 'dashboard',
          value: 'dashboard',
          prependIcon: '$dashboard',
          $children: [
            { title: '主控台', value: '主控台', link: true },
            { title: '工作台', value: '工作台', link: true }
          ]
        },
        { title: '客服中心', value: '客服中心', prependIcon: 'mdi-wechat', link: true },
        {
          title: '系统设置',
          value: '系统设置',
          prependIcon: '$settings',
          $children: [
            { title: '菜单权限管理', value: '菜单权限管理', link: true },
            { title: '角色权限管理', value: '角色权限管理', link: true }
          ]
        },
      ])
    }
  }
})
```

:::