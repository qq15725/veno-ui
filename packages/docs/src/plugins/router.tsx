// Utils
import { nextTick } from 'vue'
import { loadDocsRoutes, loadPageRoutes, routesToMenus } from '@/utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import { useAppStore } from '@/store/app'

// Loyouts
import DefaultLayout from '@/layouts/default.vue'

// Types
import type { RouteRecordRaw } from 'vue-router'
import type { UsePlugin } from '@/types'

// Routes
const menuRoutes: RouteRecordRaw[] = [
  ...loadPageRoutes('zh'),
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
    component: DefaultLayout,
    children: [
      ...wrapRoutesComponent(menuRoutes),
      { path: '', redirect: '/zh/start.html' }
    ],
  },
]

export const useRouter: UsePlugin = app => {
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
      return { top: 0 }
    },
  })

  router.beforeEach(function (to, from, next) {
    if (!from || to.path !== from.path) {
      useAppStore().loading = true
    }
    next()
  })

  router.afterEach(function (to, from) {
    if (!from || to.path !== from.path) {
      useAppStore().loading = false

      if (to.hash && to.hash !== from.hash) {
        nextTick(() => {
          const el = document.querySelector(to.hash)
          if (el) el.scrollIntoView()
        })
      }
    }
  })

  app.use(router)
}