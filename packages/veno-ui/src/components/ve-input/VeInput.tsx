// Styles
import './styles/ve-input.scss'

// Utils
import { defineComponent } from 'vue'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'
import { useProxiedModel } from '../../composables/proxied-model'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'

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
    ...makeMaterialProps(),
    ...makeDisabledProps(),
  },

  emits: {
    'update:modelValue': (value: any) => true,
  },

  setup (props, { slots }) {
    const model = useProxiedModel(props, 'modelValue')
    const { materialClasses, materialStyles } = useMaterial(props, 've-input')
    const { disabledClasses } = useDisabled(props, 've-input')

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
            materialClasses.value,
            disabledClasses.value,
          ] }
          style={ [
            materialStyles.value,
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