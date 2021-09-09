import './styles/ve-input.scss'

import { defineComponent } from 'vue'

import { makeBorderProps, useBorder } from '../../composables/border'
import { makeVariantProps, useVariant } from '../../composables/variant'

export default defineComponent({
  name: 'VeInput',

  props: {
    modelValue: [String, Number],
    ...makeBorderProps(),
    ...makeVariantProps(),
  },

  setup (props, { slots, emit }) {
    const { borderClasses } = useBorder(props, 've-input')
    const { colorClasses, colorStyles, variantClasses } = useVariant(props, 've-input')

    return () => {
      return (
        <div
          class={ [
            've-input',
            colorClasses.value,
            borderClasses.value,
            variantClasses.value,
          ] }
          style={ [
            colorStyles.value,
          ] }
        >
          {
            slots.prepend && (
              <div class="ve-input__prepend">
                { slots.prepend?.() }
              </div>
            )
          }

          <input
            value={ props.modelValue }
            onInput={ e => emit('update:modelValue', (e.target as HTMLInputElement).value) }
          />
        </div>
      )
    }
  }
})