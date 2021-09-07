// Styles
import './styles/ve-divider.scss'

// Utilities
import { computed, defineComponent, h } from 'vue'
import { convertToUnit } from '../../utils'

// Types
type DividerKey = 'maxHeight' | 'maxWidth'
type DividerStyles = Partial<Record<DividerKey, string>>

export default defineComponent({
  name: 'VeDivider',

  props: {
    placement: {
      type: String,
      default: 'center',
    },
    dashed: Boolean,
    length: [Number, String],
    vertical: Boolean,
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
      return h(
        !slots.default ? 'hr' : 'div',
        {
          class: [
            {
              've-divider': true,
              've-divider--dashed': props.dashed,
              've-divider--vertical': props.vertical,
            },
          ],
          style: dividerStyles.value,
          ariaOrientation: !attrs.role || attrs.role === 'separator'
            ? props.vertical ? 'vertical' : 'horizontal'
            : undefined,
          role: attrs.role || 'separator',
        },
        !slots.default ? undefined : [
          h('div', {
            class: {
              've-divider__line': true,
              've-divider__line--inset': props.placement === 'left',
            }
          }),
          h('div', { class: 've-divider__content' }, slots.default()),
          h('div', {
            class: {
              've-divider__line': true,
              've-divider__line--inset': props.placement === 'right',
            }
          }),
        ]
      )
    }
  }
})
