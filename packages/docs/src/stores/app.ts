// Utils
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  return {
    repository: 'https://github.com/qq15725/veno-ui/blob/master',
    loading: ref(false)
  }
})