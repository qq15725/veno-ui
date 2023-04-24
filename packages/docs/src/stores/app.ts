// Utils
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const menuActive = ref()

  return {
    pageLoading: ref(false),
    menuActive,
    toggleMenuActive() {
      menuActive.value = !menuActive.value
    },
  }
})
