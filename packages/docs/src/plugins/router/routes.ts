import type { RouteRecordRaw } from 'vue-router'

import Playground from '@/views/Playground.vue'
import Layout from '@/views/Layout.vue'
import Guide from '@/views/guide/README.md'
import componentRoutes from './component-routes'
import composableRoutes from './composable-routes'

const routes: RouteRecordRaw[] = [
  { name: 'Playground', path: '/playground', component: Playground },
  {
    path: '',
    props: {
      items: [
        ...componentRoutes,
        ...composableRoutes
      ],
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