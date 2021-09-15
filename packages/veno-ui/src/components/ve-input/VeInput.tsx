import './styles/ve-input.scss'

import { defineComponent } from 'vue'

import { makeBorderProps, useBorder } from '../../composables/border'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'
import { makeVariantProps, useVariant } from '../../composables/variant'

export default defineComponent({
  name: 'VeInput',

  props: {
    modelValue: [String, Number],
    textarea: Boolean,
    autosize: Boolean,
    placeholder: String,
    type: {
      type: String,
      default: 'text',
    },
    ...makeDisabledProps(),
    ...makeBorderProps(),
    ...makeVariantProps(),
  },

  setup (props, { slots, emit }) {
    const { disabledClasses } = useDisabled(props, 've-input')
    const { borderClasses } = useBorder(props, 've-input')
    const { colorClasses, colorStyles, variantClasses } = useVariant(props, 've-input')

    return () => {
      const Tag = props.textarea ? 'textarea' : 'input'

      return (
        <div
          class={ [
            've-input',
            {
              've-input--textarea': props.textarea,
              've-input--autosize': props.textarea && props.autosize,
            },
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

          <div class="ve-input__wrapper">
            <Tag
              class="ve-input__el"
              value={ props.modelValue }
              type={ props.textarea ? undefined : props.type }
              rows={ props.textarea ? 3 : undefined }
              placeholder={ props.placeholder }
              onInput={ e => emit('update:modelValue', (e.target as HTMLInputElement).value) }
              disabled={ props.disabled }
            />

            {
              props.textarea && props.autosize && (
                <div
                  class="ve-input__mirror"
                  v-text={ props.modelValue }
                />
              )
            }
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