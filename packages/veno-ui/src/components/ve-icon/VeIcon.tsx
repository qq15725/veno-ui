// Styles
import './styles/ve-icon.scss'

// Composables
import { makeSizeProps, useSize } from '../../composables/size'
import { makeTagProps } from '../../composables/tag'
import { useIcon } from '../../composables/icon'
import { useTextColor } from '../../composables/color'

// Utils
import { defineComponent, computed, toRef } from 'vue'
import { convertToUnit, flattenFragments } from '../../utils'

// Types
import type { IconValue } from '../../composables/icon'
import type { ComputedRef, PropType } from 'vue'

export const VeIcon = defineComponent({
  name: 'VeIcon',

  props: {
    color: String,
    left: Boolean,
    right: Boolean,
    icon: {
      type: [String, Object] as PropType<IconValue>,
    },
    ...makeSizeProps(),
    ...makeTagProps({ tag: 'i' }),
  },

  setup (props, { slots }) {
    let slotIcon: ComputedRef<string | undefined> | undefined

    if (slots.default) {
      slotIcon = computed(() => {
        const slot = slots.default?.()
        if (!slot) return

        return flattenFragments(slot).filter(node =>
          node.children && typeof node.children === 'string'
        )[0]?.children as string
      })
    }

    const { iconData } = useIcon(slotIcon || props)
    const { sizeClasses } = useSize(props, 've-icon')
    const { textColorClasses, textColorStyles } = useTextColor(toRef(props, 'color'))

    return () => {
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
              've-icon--left': props.left,
              've-icon--right': props.right,
            },
          ] }
          style={ [
            !sizeClasses.value ? ({
              fontSize: convertToUnit(props.size),
              width: convertToUnit(props.size),
              height: convertToUnit(props.size),
            }) : undefined,
            textColorStyles.value,
          ] }
          aria-hidden="true"
        />
      )
    }
  },
})
