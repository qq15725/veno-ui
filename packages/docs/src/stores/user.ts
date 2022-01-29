// Utils
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const theme = ref('light')

  return {
    theme,
  }
})