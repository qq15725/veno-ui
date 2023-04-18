import { createSymbol } from '../../utils'
import type { InjectionKey } from 'vue'
import type { GroupInstance } from '../../composables/group'

export const TabsKey: InjectionKey<GroupInstance> = createSymbol('tabs')
