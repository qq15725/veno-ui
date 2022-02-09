:::demo

# 导航列表

```html
<div class="p-10 bg-grey-300">
  <ve-list nav density="ultra-high" :items="items" />
</div>
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
        { title: '关于', link: true },
      ])
    }
  }
})
```

:::