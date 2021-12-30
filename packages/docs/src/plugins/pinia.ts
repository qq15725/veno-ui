// Utils
import { createPinia } from 'pinia'

// Types
import type { UsePlugin } from '@/types'

export const usePinia: UsePlugin = app => {
  app.use(createPinia())
}