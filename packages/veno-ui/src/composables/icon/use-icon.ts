// Utils
import { computed, unref } from 'vue'
import type { ExtractPropTypes } from 'vue'
import { consoleError } from '../../utils'

// Composables
import { useIcons } from '../icons'

// Components
import { IconComponent } from '../../components/icon/icon-component'

// Types
import type { IconSetComponent, IconValue } from '../icons'
import type { MaybeRef } from '../../utils'
import type { makeIconProps } from './make-icon-props'

/**
 * @zh 使用图标
 *
 * @example
 * useIcons({ icon: '$info' })
 * useIcons({ icon: 'mdi:info' })
 * useIcons({ icon: 'svg:xxx' })
 * useIcons({ icon: 'class:xxx' })
 *
 * @param props
 */
export const useIcon = (
  props: MaybeRef<ExtractPropTypes<ReturnType<typeof makeIconProps>>>,
) => {
  const icons = useIcons()

  const iconData = computed<{ component: IconSetComponent; icon: IconValue } | undefined>(() => {
    const { icon: value } = unref(props)

    if (!value) {
      consoleError('Icon value is undefined or null')
      return
    }

    const icon = (
      typeof value === 'string' && value.includes('$')
        ? icons.aliases?.[value.slice(value.indexOf('$') + 1)]
        : value
    ) as IconValue

    if (!icon) {
      consoleError(`Could not find aliased icon "${ value }"`)
      return
    }

    if (typeof icon !== 'string') return { component: IconComponent, icon }

    const setName = Object.keys(icons.sets).find(v => icon.startsWith(`${ v }:`))

    return {
      component: icons.sets[setName ?? icons.defaultSet],
      icon: setName ? icon.slice(setName.length + 1) : icon,
    }
  })

  return { iconData }
}
