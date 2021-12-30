import { defineStore } from 'pinia'

export type RootState = {
  loading: boolean
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): RootState => ({
    loading: false,
  }),
})
