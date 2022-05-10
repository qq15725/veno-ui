// Utils
import { inject } from 'vue'
import type { InjectionKey } from 'vue'
import { createSymbol, deepMerge } from '../../utils'

// Iconsets
import { aliases, mdi } from '../../iconsets/mdi'

// Components
import { IconClass } from '../../components/icon/icon-class'
import { IconSvg } from '../../components/icon/icon-svg'
import { IconLigature } from '../../components/icon/icon-ligature'

// Types
import type { IconsOptions } from './types'

export const IconsKey: InjectionKey<Required<IconsOptions>> = createSymbol('icons')

export function useIcons() {
  const icons = inject(IconsKey)
  if (!icons) throw new Error('[VenoUi] Could not find icons instance')
  return icons
}

export function createIcons(options?: IconsOptions) {
  return deepMerge({
    defaultSet: 'mdi',
    sets: {
      mdi,
      svg: IconSvg,
      class: IconClass,
      ligature: IconLigature,
    },
    aliases,
  }, options || {})
}
