// Utils
import { loadDocsRoutes, wrapDocsComponent, convertRoutesToMenus } from '../../utils'

// Components
import MainLayout from '@/views/layouts/MainLayout.vue'
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
  {
    path: '',
    props: {
      menus: convertRoutesToMenus(docsRoutes),
    },
    component: MainLayout,
    children: [
      ...docsRoutes,
      { name: 'Readme', path: '/readme.html', component: wrapDocsComponent(Readme) },
      { path: '', redirect: '/readme.html' }
    ],
  },
]

export default routes