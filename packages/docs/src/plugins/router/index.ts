import { nextTick } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { useRouterStore } from '../store'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(function (to, from, next) {
  if (!from || to.path !== from.path) {
    useRouterStore().loading = true
  }
  next()
})

router.afterEach(function (to, from) {
  if (!from || to.path !== from.path) {
    useRouterStore().loading = false

    if (to.hash && to.hash !== from.hash) {
      nextTick(() => {
        const el = document.querySelector(to.hash)
        if (el) el.scrollIntoView()
      })
    }
  }
})

export default router