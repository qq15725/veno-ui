// Utils
import { computed } from 'vue'
import { defineComponent, pick } from '../../utils'

// Components
import { CheckboxGroup } from '../checkbox-group'
import { DatePicker } from '../date-picker'
import { FormControl } from '../form-control/form-control'
import { Input } from '../input'
import { RadioGroup } from '../radio-group'
import { Select } from '../select'
import { Switch } from '../switch'

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

export const FormChildren = defineComponent({
  name: 'VeFormChildren',

  props: {
    /**
     * @zh 数据驱动的表单列表项
     */
    items: Array as PropType<FormItemProps[]>,
  },

  setup(props, { slots }) {
    const items = computed(() => {
      return props.items?.map(item => {
        const { $type: type, ...props } = item
        return { type, props }
      }) as InternalFormItemProps[]
    })

    return () => slots.default?.() ?? items.value?.map(({ type, props: itemProps }) => {
      switch (type) {
        case 'textarea':
          return <Input type="textarea" { ...itemProps } />
        case 'select':
          return <Select { ...itemProps } />
        case 'switch':
          // eslint-disable-next-line no-case-declarations
          const [controlProps, switchProps] = pick(itemProps || {}, [
            'label',
          ])
          return (
            <FormControl { ...controlProps }>
              <Switch { ...switchProps } />
            </FormControl>
          )
        case 'date-picker':
          return <DatePicker { ...itemProps } />
        case 'checkbox':
          return <CheckboxGroup { ...itemProps } />
        case 'radio':
          return <RadioGroup { ...itemProps } />
        case 'input':
        default:
          return <Input { ...itemProps } />
      }
    })
  },
})

export type FormChildren = InstanceType<typeof FormChildren>
