:::demo

# 数据驱动

通过 `items` 数据渲染列表，可以很容易的切换为后端数据驱动。

```html
<ve-list
  elevation="8"
  width="200"
  :items="items"
/>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      items: ref([
        {
          title: 'dashboard',
          prependIcon: 'mdi-view-dashboard',
          $children: [
            { title: '主控台', link: true },
            { title: '工作台', link: true }
          ]
        },
        {
          title: '系统设置', 
          prependIcon: 'mdi-tune',
          $children: [
            { title: '菜单权限管理', link: true },
            { title: '角色权限管理', link: true }
          ]
        },
      ])
    }
  }
})
```

:::