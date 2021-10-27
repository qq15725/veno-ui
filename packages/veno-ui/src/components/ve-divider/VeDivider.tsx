// Styles
import './styles/ve-divider.scss'

// Utils
import { computed } from 'vue'
import { convertToUnit, genericComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'

// Constants
const allowedTextAlign = ['left', 'center', 'right'] as const

// Types
import type { PropType } from 'vue'

type DividerStyles = Partial<Record<'maxHeight' | 'maxWidth', string>>
type DividerTextAlign = typeof allowedTextAlign[number]

export const VeDivider = genericComponent()({
  name: 'VeDivider',

  props: {
    textAlign: {
      type: String as PropType<DividerTextAlign>,
      default: 'center',
      validator: (val: DividerTextAlign) => allowedTextAlign.includes(val),
    },
    length: [Number, String],
    dashed: Boolean,
    vertical: Boolean,
    ...makeTagProps({
      tag: 'hr',
    } as const),
  },

  setup (props, { attrs, slots }) {
    const dividerStyles = computed(() => {
      const styles: DividerStyles = {}
      if (props.length) {
        styles[props.vertical ? 'maxHeight' : 'maxWidth'] = convertToUnit(props.length)
      }
      return styles
    })

    return () => {
      const hasDefaultSlot = !!slots.default
      const Tag = hasDefaultSlot ? 'div' : props.tag
      const role = attrs.role as string | undefined ?? 'separator'

      return (
        <Tag
          class={ [
            've-divider',
            {
              've-divider--dashed': props.dashed,
              've-divider--vertical': props.vertical,
              've-divider--text': hasDefaultSlot,
              've-divider--text-left': props.textAlign === 'left',
              've-divider--text-right': props.textAlign === 'right',
            },
          ] }
          style={ [
            dividerStyles.value,
          ] }
          aria-orientation={
            role === 'separator'
              ? props.vertical ? 'vertical' : 'horizontal'
              : undefined
          }
          role={ role }
          v-slots={ {
            default: hasDefaultSlot
              ? () => [
                (
                  <>
                    <div class="ve-divider__line" />
                    <div class="ve-divider__wrap">{ slots.default?.() }</div>
                    <div class="ve-divider__line" />
                  </>
                )
              ]
              : undefined
          } }
        />
      )
    }
  }
})

export type VeDivider = InstanceType<typeof VeDivider>
