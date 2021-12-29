import { createPinia, defineStore } from 'pinia'

export const useRouterStore = defineStore({
  id: 'router',
  state: () => ({
    loading: false,
  })
})

export default createPinia()