// Styles
import './styles/form.scss'

// Utils
import { toRef, computed } from 'vue'
import { defineComponent, useRender } from '../../utils'

// Composables
import { makeSizeProps } from '../../composables/size'
import { makeDensityProps } from '../../composables/density'
import { makeFormProps, provideForm } from '../../composables/form'
import { makeVariantProps } from '../../composables/variant'
import { provideDefaults } from '../../composables/defaults'

// components
import { FormChildren } from './form-children'

// Types
import type { PropType } from 'vue'

export type FormItemProps = {
  [key: string]: any
  $type?: 'input' | 'textarea' | 'select' | 'switch' | 'date-picker' | 'checkbox' | 'radio'
}

export type InternalFormItemProps = {
  type?: FormItemProps['$type']
  props?: Record<string, any>
}

export const Form = defineComponent({
  name: 'VeForm',

  props: {
    /**
     * @zh 布局方向
     */
    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal',
      validator: (v: any) => ['horizontal', 'vertical'].includes(v),
    },

    /**
     * @zh 隐藏详情
     */
    hideDetails: [Boolean, String] as PropType<boolean | 'auto'>,

    /**
     * @zh 内联
     */
    inline: Boolean,

    /**
     * @zh 数据驱动的表单列表项
     */
    items: Array as PropType<FormItemProps[]>,

    /**
     * @zh 标签宽度
     */
    labelWidth: [Number, String],

    ...makeSizeProps(),
    ...makeDensityProps(),
    ...makeFormProps(),
    ...makeVariantProps(),
  },

  emits: {
    'update:valid': (_: boolean | null) => true,
    'update:modelValue': (_: Record<string, any>) => true,
    resetValidation: () => true,
    reset: (_: Event) => true,
    submit: (_: Record<string, any>, __: Event) => true,
  },

  setup (props, { slots }) {
    const form = provideForm(props)

    const items = computed(() => {
      return props.items?.map(item => {
        const { $type: type, ...props } = item
        return { type, props }
      }) as InternalFormItemProps[]
    })

    const defaults = {
      variant: toRef(props, 'variant'),
      size: toRef(props, 'size'),
      density: toRef(props, 'density'),
      direction: toRef(props, 'direction'),
      inline: toRef(props, 'inline'),
      labelWidth: toRef(props, 'labelWidth'),
      hideDetails: toRef(props, 'hideDetails'),
      readonly: toRef(props, 'readonly'),
      disabled: toRef(props, 'disabled'),
    }

    provideDefaults({
      // input control
      VeInput: defaults,
      VeSelect: defaults,
      // select control
      VeRadioGroup: defaults,
      VeCheckboxGroup: defaults,
      VeSwitch: defaults,
      // form control
      VeFormControl: defaults,
      // button
      VeButton: {
        density: defaults.density,
        disabled: defaults.disabled,
      },
    })

    useRender(() => {
      return (
        <form
          class={ [
            've-form',
            {
              [`ve-form--${ props.direction }`]: !!props.direction,
              've-form--inline': props.inline,
            }
          ] }
          novalidate
          onReset={ form.reset }
          onSubmit={ form.submit }
        >
          <FormChildren items={ items.value } />

          { slots.default?.(form) }
        </form>
      )
    })

    return form
  }
})

export type Form = InstanceType<typeof Form>