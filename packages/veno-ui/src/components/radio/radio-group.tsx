// Styles
import './styles/radio-group.scss'

// Utils
import { computed, defineComponent } from 'vue'
import { filterInputAttrs, getUid, useRender } from '../../utils'

// Components
import {
  filterFormItemProps,
  makeFormItemProps,
  FormItem
} from '../form-item/form-item'
import { SelectionControlGroup } from '../selection-control'
import {
  filterSelectionControlProps,
  makeSelectionControlProps
} from '../selection-control/selection-control'

export const RadioGroup = defineComponent({
  name: 'VeRadioGroup',

  inheritAttrs: false,

  props: {
    height: {
      type: [Number, String],
      default: 'auto',
    },

    ...makeFormItemProps(),
    ...makeSelectionControlProps(),

    trueIcon: {
      type: String,
      default: 'veno-ui:$radioOn',
    },
    falseIcon: {
      type: String,
      default: 'veno-ui:$radioOff',
    },
    type: {
      type: String,
      default: 'radio',
    },
  },

  setup (props, { attrs, slots }) {
    const uid = getUid()
    const id = computed(() => props.id || `radio-group-${ uid }`)

    useRender(() => {
      const [formItemAttrs, controlAttrs] = filterInputAttrs(attrs)
      const [formItemProps, _1] = filterFormItemProps(props)
      const [controlProps, _2] = filterSelectionControlProps(props)

      return (
        <FormItem
          { ...formItemAttrs }
          { ...formItemProps }
          class="ve-radio-group"
          v-slots={ {
            ...slots,
            control: () => (
              <SelectionControlGroup
                { ...controlProps }
                id={ id.value }
                trueIcon={ props.trueIcon }
                falseIcon={ props.falseIcon }
                type={ props.type }
                { ...controlAttrs }
                v-slots={ slots }
              />
            ),
          } }
        />
      )
    })

    return {}
  },
})
