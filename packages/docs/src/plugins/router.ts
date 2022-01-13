// Utils
import { nextTick } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { useAppStore } from '@/store/app'
import pages from '~pages'

// Loyouts
import DefaultLayout from '@/layouts/default.vue'

// Types
import type { RouteRecordRaw } from 'vue-router'
import type { UsePlugin } from '@/types'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      ...pages,
      { path: '', redirect: '/zh/start' },
    ],
  },
]

export const useRouter: UsePlugin = app => {
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
      if (to.path === from.path) return savedPosition
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
    }
  })

  app.use(router)
}