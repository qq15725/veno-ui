import './styles/ve-input.scss'

import { defineComponent } from 'vue'

import { makeVariantProps, useVariant } from '../../composables/variant'

export default defineComponent({
  name: 'VeInput',

  props: {
    modelValue: [String, Number],
    ...makeVariantProps(),
  },

  setup (props, { slots, emit }) {
    const { colorClasses, colorStyles, variantClasses } = useVariant(props, 've-input')

    return () => {
      return (
        <input
          class={ [
            've-input',
            colorClasses.value,
            variantClasses.value,
          ] }
          style={ [
            colorStyles.value,
          ] }
          value={ props.modelValue }
          onInput={ e => emit('update:modelValue', (e.target as HTMLInputElement).value) }
        />
      )
    }
  }
})