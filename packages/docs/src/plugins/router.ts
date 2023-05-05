// Utils
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { createWebHistory } from 'vue-router'
import { useAppStore } from '../stores/app'

// Types
import type { RouterOptions } from 'vue-router'
import type { InstallPlugin } from '../types'

export function createRouterOptions(): RouterOptions {
  return {
    history: createWebHistory(),
    routes: [
      ...setupLayouts(generatedRoutes),
      { path: '/', redirect: '/zh/start' },
    ],
    // @ts-expect-error: scrollBehavior
    scrollBehavior(to, from, savedPosition) {
      if (to.path === from.path) return savedPosition
      return { top: 0 }
    },
  }
}

export const install: InstallPlugin = ({ router }) => {
  const store = useAppStore()

  router.beforeEach((to, from, next) => {
    if (!from || to.path !== from.path) {
      store.pageLoading = true
    }
    next()
  })

  router.afterEach((to, from) => {
    if (!from || to.path !== from.path) {
      store.pageLoading = false
    }
  })
}
