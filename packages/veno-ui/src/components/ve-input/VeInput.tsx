// Styles
import './styles/ve-input.scss'

// Utils
import { defineComponent } from 'vue'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { makeBorderProps, useBorder } from '../../composables/border'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'
import { makeVariantProps, useVariant } from '../../composables/variant'
import { makeRoundedProps, useRounded } from '../../composables/rounded'

export const VeInput = defineComponent({
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
    readonly: Boolean,
    ...makeDisabledProps(),
    ...makeBorderProps(),
    ...makeVariantProps(),
    ...makeRoundedProps(),
  },

  emits: {
    'update:modelValue': (value: any) => true,
  },

  setup (props, { slots }) {
    const model = useProxiedModel(props, 'modelValue')
    const { disabledClasses } = useDisabled(props, 've-input')
    const { borderClasses } = useBorder(props, 've-input')
    const { roundedClasses } = useRounded(props, 've-input')
    const { colorClasses, colorStyles, variantClasses } = useVariant(props, 've-input')

    return () => {
      const Tag = props.textarea ? 'textarea' : 'input'

      return (
        <div
          class={ [
            've-input',
            {
              've-input--textarea': props.textarea,
              've-input--autosize': props.autosize,
              've-input--readonly': props.readonly,
            },
            colorClasses.value,
            disabledClasses.value,
            borderClasses.value,
            roundedClasses.value,
            variantClasses.value,
          ] }
          style={ [
            colorStyles.value,
          ] }
        >
          { slots.prefix && (
            <div class="ve-input__prefix">
              { slots.prefix?.() }
            </div>
          ) }

          <div class="ve-input__wrap">
            <Tag
              class="ve-input__el"
              value={ model.value }
              onInput={ e => model.value = (e.target as HTMLInputElement).value }
              type={ props.textarea ? undefined : props.type }
              rows={ props.textarea ? 3 : undefined }
              placeholder={ props.placeholder }
              readonly={ props.readonly }
              disabled={ props.disabled }
            />

            { props.autosize && (
              <div
                class="ve-input__mirror"
                v-text={ (model.value || '') + '\r\n' }
              />
            ) }
          </div>

          { slots.suffix && (
            <div class="ve-input__suffix">
              { slots.suffix?.() }
            </div>
          ) }
        </div>
      )
    }
  }
})