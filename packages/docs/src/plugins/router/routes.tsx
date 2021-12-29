// Utils
import { loadDocsRoutes, routesToMenus } from '../../utils'

// Loyouts
import MainLayout from '@/views/layouts/MainLayout.vue'

// Pages
import Readme from '@root/README.md'
import Colors from '../../views/colors.md'

// Types
import type { RouteRecordRaw } from 'vue-router'

// Routes
const menuRoutes: RouteRecordRaw[] = [
  {
    name: 'Readme',
    path: '/readme.html',
    component: Readme,
    meta: {
      title: '快速上手',
    }
  },
  {
    name: 'Colors',
    path: '/colors.html',
    component: Colors,
    meta: {
      title: '颜色',
    }
  },
  ...loadDocsRoutes('component'),
  ...loadDocsRoutes('composable'),
]

function wrapComponent (Component: any) {
  return {
    setup () {
      return () => (
        <ve-container class="px-md-10 py-md-8">
          <Component />
        </ve-container>
      )
    }
  }
}

function wrapRoutesComponent (routes: RouteRecordRaw[]) {
  return routes.map(route => {
    route.component = wrapComponent(route.component)
    return route
  })
}

const routes: RouteRecordRaw[] = [
  {
    path: '',
    props: {
      menus: routesToMenus(menuRoutes),
    },
    component: MainLayout,
    children: [
      ...wrapRoutesComponent(menuRoutes),
      { path: '', redirect: '/readme.html' }
    ],
  },
]

export default routes