import type { RouteRecordRaw } from 'vue-router'

import Playground from '@/views/Playground.vue'
import Layout from '@/views/Layout.vue'
// @ts-ignore
import Guide from '@/views/guide/README.md'
import componentRoutes from './component-routes'
import composableRoutes from './composable-routes'

const menus = componentRoutes
  .concat(composableRoutes)
  .map(item => {
    return {
      title: `${ item.meta.title } ${ item.meta.name }`,
      category: item.meta.category,
      to: { name: item.name },
    }
  })
  .reduce((items, item) => {
    if (item.category) {
      let index = items.findIndex(v => item.category === v.value)
      if (index === -1) {
        items.push({
          title: item.category,
          value: item.category,
          children: [],
        })
        index = items.length - 1
      }
      items[index].children.push(item)
      items[index].title = `${ item.category }(${ items[index].children.length })`
    } else {
      items.push(item)
    }
    return items
  }, [])
  .sort((a, b) => b.children.length - a.children.length)

const routes: RouteRecordRaw[] = [
  { name: 'Playground', path: '/playground', component: Playground },
  {
    path: '',
    props: {
      menus,
    },
    component: Layout,
    children: [
      ...componentRoutes,
      ...composableRoutes,
      { name: 'Guide', path: '/guide.html', component: Guide },
      { path: '', redirect: '/guide.html' }
    ],
  },
]

export default routes