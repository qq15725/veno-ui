// Utils
import { defineComponent } from '../../utils'

// Components
import { Input } from '../input'
import { Select } from '../select'
import { Switch } from '../switch'
import { DatePicker } from '../date-picker'
import { CheckboxGroup } from '../checkbox-group'
import { RadioGroup } from '../radio-group'

// Types
import type { PropType } from 'vue'
import type { InternalFormItemProps } from './form'

export const FormChildren = defineComponent({
  name: 'VeFormChildren',

  props: {
    items: Array as PropType<InternalFormItemProps[]>,
  },

  setup (props, { slots }) {
    return () => slots.default?.() ?? props.items?.map(({ type, props: itemProps }) => {
      switch (type) {
        case 'textarea':
          return <Input type="textarea" { ...itemProps } />
        case 'select':
          return <Select { ...itemProps } />
        case 'switch':
          return <Switch { ...itemProps } />
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
  }
})

export type FormChildren = InstanceType<typeof FormChildren>