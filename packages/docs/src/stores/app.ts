// Utils
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const menuActive = ref()

  return {
    repositoryBaseURL: 'https://github.com/qq15725/veno-ui/blob/master',
    pageLoading: ref(false),
    menuActive,
    toggleMenuActive () {
      menuActive.value = !menuActive.value
    },
  }
})