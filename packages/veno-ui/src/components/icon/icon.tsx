// Styles
import './styles/icon.scss'

// Utils
import { computed, defineComponent, toRef } from 'vue'
import { convertToUnit, flattenFragments } from '@veno-ui/utils'

// Composables
import { makeSizeProps, useSize } from '../../composables/size'
import { makeIconProps, useIcon } from '../../composables/icon'
import { useTextColor } from '../../composables/color'

export const Icon = defineComponent({
  name: 'VeIcon',

  props: {
    /**
     * @zh 图标颜色
     */
    color: String,

    /**
     * @zh 是否在左侧
     */
    start: Boolean,

    /**
     * @zh 是否在右侧
     */
    end: Boolean,

    ...makeSizeProps(),
    ...makeIconProps(),
  },

  setup(props, { slots }) {
    const { iconData } = useIcon(
      computed(() => {
        if (!slots.default) return props
        const slot = slots.default?.()
        if (!slot) return props
        const nodes = flattenFragments(slot)
        if (typeof nodes?.[0]?.children === 'string') {
          return {
            tag: props.tag,
            icon: nodes[0].children as string,
          }
        }
        return {
          tag: props.tag,
          icon: () => slot,
        }
      }),
    )
    const { sizeClasses } = useSize(props)
    const { textColorClasses, textColorStyles } = useTextColor(toRef(props, 'color'))

    return () => {
      if (!iconData.value) return

      return (
        <iconData.value.component
          tag={ props.tag }
          icon={ iconData.value.icon }
          class={ [
            've-icon',
            'notranslate',
            sizeClasses.value,
            textColorClasses.value,
            {
              've-icon--start': props.start,
              've-icon--end': props.end,
            },
          ] }
          style={ [
            !sizeClasses.value
              ? ({
                  fontSize: convertToUnit(props.size),
                  width: convertToUnit(props.size),
                  height: convertToUnit(props.size),
                })
              : undefined,
            textColorStyles.value,
          ] }
          aria-hidden="true"
        />
      )
    }
  },
})

export type Icon = InstanceType<typeof Icon>
