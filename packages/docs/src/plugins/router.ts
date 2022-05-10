// Utils
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

// Types
import type { InstallPlugin } from '@/types'
import { useAppStore } from '@/stores/app'

export function createRouterOptions() {
  return {
    routes: [
      ...setupLayouts(generatedRoutes),
      { path: '/', redirect: '/zh/start' },
    ],
    // @ts-expect-error
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
