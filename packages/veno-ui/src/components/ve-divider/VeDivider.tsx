// Styles
import './styles/ve-divider.scss'

// Utilities
import { computed, defineComponent } from 'vue'
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
      const hasDefaultSlot = !!slots.default
      const Tag = hasDefaultSlot ? 'div' : 'hr'
      const role = attrs.role as string | undefined

      return (
        <Tag
          class={ [
            've-divider',
            {
              've-divider--dashed': props.dashed,
              've-divider--vertical': props.vertical,
            },
          ] }
          style={ [
            dividerStyles.value,
          ] }
          ariaOrientation={
            !role || role === 'separator'
              ? props.vertical ? 'vertical' : 'horizontal'
              : undefined
          }
          role={ role || 'separator' }
          v-slots={ {
            default: hasDefaultSlot
              ? () => [
                (
                  <>
                    <div
                      class={ [
                        've-divider__line',
                        {
                          've-divider__line--inset': props.placement === 'left',
                        }
                      ] }
                    />
                    <div class="ve-divider__content">{ slots.default?.() }</div>
                    <div
                      class={ [
                        've-divider__line',
                        {
                          've-divider__line--inset': props.placement === 'right',
                        }
                      ] }
                    />
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
