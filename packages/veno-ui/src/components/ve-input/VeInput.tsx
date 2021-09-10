import './styles/ve-input.scss'

import { defineComponent } from 'vue'

import { makeBorderProps, useBorder } from '../../composables/border'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'
import { makeVariantProps, useVariant } from '../../composables/variant'

export default defineComponent({
  name: 'VeInput',

  props: {
    type: {
      type: String,
      default: 'text',
    },
    modelValue: [String, Number],
    ...makeDisabledProps(),
    ...makeBorderProps(),
    ...makeVariantProps(),
  },

  setup (props, { slots, emit }) {
    const { disabledClasses } = useDisabled(props, 've-input')
    const { borderClasses } = useBorder(props, 've-input')
    const { colorClasses, colorStyles, variantClasses } = useVariant(props, 've-input')

    return () => {
      return (
        <div
          class={ [
            've-input',
            colorClasses.value,
            disabledClasses.value,
            borderClasses.value,
            variantClasses.value,
          ] }
          style={ [
            colorStyles.value,
          ] }
        >
          {
            slots.prefix && (
              <div class="ve-input__prefix">
                { slots.prefix?.() }
              </div>
            )
          }

          <div class="ve-input__input">
            <input
              class="ve-input__input-el"
              value={ props.modelValue }
              type={ props.type }
              onInput={ e => emit('update:modelValue', (e.target as HTMLInputElement).value) }
              disabled={ props.disabled }
            />
          </div>

          {
            slots.suffix && (
              <div class="ve-input__suffix">
                { slots.suffix?.() }
              </div>
            )
          }
        </div>
      )
    }
  }
})