import type { RouteRecordRaw } from 'vue-router'

import Playground from '@/views/Playground.vue'
import Layout from '@/views/Layout.vue'
import Guide from '@/views/guide/README.md'
import componentRoutes from './component-routes'

const routes: RouteRecordRaw[] = [
  { name: 'Playground', path: '/playground', component: Playground },
  {
    path: '',
    props: {
      items: componentRoutes,
    },
    component: Layout,
    children: [
      ...componentRoutes,
      { name: 'Guide', path: '/guide.html', component: Guide },
      { path: '', redirect: '/guide.html' }
    ],
  },
]

export default routes