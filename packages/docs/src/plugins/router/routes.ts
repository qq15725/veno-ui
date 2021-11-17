// Utils
import { loadDocsRoutes, convertRoutesToMenus } from '../../utils'

// Components
import Playground from '@/views/Playground.vue'
import Layout from '@/views/Layout.vue'
// @ts-ignore
import Guide from '@/views/guide/README.md'

// Types
import type { RouteRecordRaw } from 'vue-router'

// Routes
const docsRoutes = [
  ...loadDocsRoutes('component'),
  ...loadDocsRoutes('composable'),
]

const routes: RouteRecordRaw[] = [
  { name: 'Playground', path: '/playground', component: Playground },
  {
    path: '',
    props: {
      menus: convertRoutesToMenus(docsRoutes),
    },
    component: Layout,
    children: [
      ...docsRoutes,
      { name: 'Guide', path: '/guide.html', component: Guide },
      { path: '', redirect: '/guide.html' }
    ],
  },
]

export default routes