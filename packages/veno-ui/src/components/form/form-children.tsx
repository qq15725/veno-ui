// Utils
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
import type { InternalFormItemProps } from './form'

export const FormChildren = defineComponent({
  name: 'VeFormChildren',

  props: {
    items: Array as PropType<InternalFormItemProps[]>,
  },

  setup(props, { slots }) {
    return () => slots.default?.() ?? props.items?.map(({ type, props: itemProps }) => {
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
