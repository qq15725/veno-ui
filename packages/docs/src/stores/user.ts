// Utils
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const theme = ref('light')

  return {
    theme,
    toggleTheme() {
      theme.value = theme.value === 'dark' ? 'light' : 'dark'
    },
  }
})
