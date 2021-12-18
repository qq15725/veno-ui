// Styles
import './styles/radio-group.scss'

// Utils
import { computed, defineComponent } from 'vue'
import { filterInputAttrs, getUid, useRender } from '../../utils'

// Components
import { FormControl } from '../form-control'
import { makeFormControlProps, filterFormControlProps } from '../form-control/form-control'
import { SelectionControlGroup } from '../selection-control'
import { makeSelectionControlProps, filterSelectionControlProps } from '../selection-control/selection-control'

export const RadioGroup = defineComponent({
  name: 'VeRadioGroup',

  inheritAttrs: false,

  props: {
    height: {
      type: [Number, String],
      default: 'auto',
    },

    ...makeFormControlProps(),
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
      const [formItemProps, _1] = filterFormControlProps(props)
      const [controlProps, _2] = filterSelectionControlProps(props)

      return (
        <FormControl
          { ...formItemAttrs }
          { ...formItemProps }
          class="ve-radio-group"
          v-slots={ {
            ...slots,
            default: ({ isDisabled, isReadonly }) => (
              <SelectionControlGroup
                { ...controlProps }
                id={ id.value }
                trueIcon={ props.trueIcon }
                falseIcon={ props.falseIcon }
                type={ props.type }
                disabled={ isDisabled.value }
                readonly={ isReadonly.value }
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
