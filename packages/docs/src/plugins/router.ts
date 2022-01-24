// Utils
import { createRouter, createWebHashHistory } from 'vue-router'
import { useAppStore } from '@/stores/app'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

// Types
import type { InstallPlugin } from '@/types'

export const install: InstallPlugin = app => {
  const store = useAppStore()

  const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      ...setupLayouts(generatedRoutes),
      { path: '/', redirect: '/zh/start' },
    ],
    // @ts-ignore
    scrollBehavior (to, from, savedPosition) {
      if (to.path === from.path) return savedPosition
      return { top: 0 }
    },
  })

  router.beforeEach(function (to, from, next) {
    if (!from || to.path !== from.path) {
      store.loading = true
    }
    next()
  })

  router.afterEach(function (to, from) {
    if (!from || to.path !== from.path) {
      store.loading = false
    }
  })

  app.use(router)
}