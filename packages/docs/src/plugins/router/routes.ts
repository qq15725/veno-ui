// Utils
import { loadDocsRoutes, convertRoutesToMenus } from '../../utils'

// Components
import Playground from '@/views/Playground.vue'
import Layout from '@/views/Layout.vue'
// @ts-ignore
import Readme from '@root/README.md'

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
      { name: 'Readme', path: '/readme.html', component: Readme },
      { path: '', redirect: '/readme.html' }
    ],
  },
]

export default routes