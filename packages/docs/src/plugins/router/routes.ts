import type { RouteRecordRaw } from 'vue-router'

import Playground from '@/views/Playground.vue'
import Layout from '@/views/Layout.vue'
import Guide from '@/views/Guide.vue'
import componentRoutes from './component-routes'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    props: {
      items: componentRoutes,
    },
    component: Layout,
    children: [
      ...componentRoutes,
      { name: 'Guide', path: '/guide', component: Guide },
    ],
  },
  { name: 'Playground', path: '/playground', component: Playground },
  { path: '/', redirect: '/guide' }
]

export default routes