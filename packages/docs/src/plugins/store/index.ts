import { createPinia, defineStore } from 'pinia'

export const useRouterStore = defineStore({
  id: 'router',
  state: () => ({
    loading: false,
  }),
  actinos: {
    setLoading (val) {
      this.loading = val
    }
  }
})

export default createPinia()