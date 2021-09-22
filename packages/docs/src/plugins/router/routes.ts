import type { RouteRecordRaw } from 'vue-router'

import Playground from '@/Playground.vue'
import Components from '@/views/Components.vue'
import Guide from '@/views/Guide.vue'
import componentRoutes from './component-routes'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    props: {
      items: componentRoutes,
    },
    component: Components,
    children: [
      ...componentRoutes,
      { name: 'Guide', path: '/guide', component: Guide },
    ],
  },
  { name: 'Playground', path: '/playground', component: Playground },
  { path: '/', redirect: '/guide' }
]

export default routes