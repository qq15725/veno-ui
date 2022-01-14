import { defineStore } from 'pinia'

export type RootState = {
  repository: string
  loading: boolean
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): RootState => ({
    repository: 'https://github.com/qq15725/veno-ui/blob/master',
    loading: false,
  }),
})
