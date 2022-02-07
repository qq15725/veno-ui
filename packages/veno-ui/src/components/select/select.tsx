// Styles
import './styles/select.scss'

// Utils
import { computed, ref } from 'vue'
import { genericComponent, getUid } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'

// Components
import { Input, makeInputProps, filterInputProps } from '../input/input'
import { Icon } from '../icon'
import { Menu } from '../menu'
import { List, ListItem } from '../list'

// Types
import type { PropType } from 'vue'
import type { InputSlots } from '../input/input'
import type { Origin } from '../../composables/position-strategy'
import type { Anchor } from '../../utils'

export type Select = InstanceType<typeof Select>

type NormaledSelectItem = { label: string, value: string }
type SelectItem = string | NormaledSelectItem

export const Select = genericComponent<new () => {
  $slots: InputSlots
}>()({
  name: 'VeSelect',

  inheritAttrs: false,

  props: {
    anchor: {
      type: String as PropType<Anchor>,
      default: 'bottom',
    },
    origin: {
      type: String as PropType<Origin>,
      default: 'auto',
    },
    items: {
      type: Array as PropType<SelectItem[]>,
      default: () => [],
    },
    ...makeInputProps(),
  },

  emits: {
    'update:modelValue': (val: any) => true,
  },

  setup (props, { attrs, slots }) {
    const model = useProxiedModel(props, 'modelValue')
    const isActive = ref(false)
    const uid = getUid()
    const id = computed(() => props.id || `ve-select-${ uid }`)
    const normaledItems = computed<NormaledSelectItem[]>(() => {
      return props.items.map(v => {
        if (typeof v === 'string') {
          v = { label: v, value: v }
        } else if (v.value === undefined) {
          v.value = v.label
        }
        return v
      })
    })
    const current = computed(() => {
      return normaledItems.value.find(v => v.value === model.value)
    })
    return () => {
      const [inputProps] = filterInputProps(props)

      return (
        <Menu
          class="ve-select-overlay"
          id={ id.value }
          v-model={ isActive.value }
          anchor={ props.anchor }
          origin={ props.origin }
          min-width={ undefined }
          v-slots={ {
            activator: ({ props: activatorProps }) => (
              <Input
                { ...inputProps }
                id={ id.value }
                class={ [
                  've-select',
                  {
                    've-select--active': isActive.value,
                  }
                ] }
                readonly
                modelValue={ current.value?.label }
                onUpdate:modelValue={ val => model.value = val }
                onClick:control={ activatorProps?.onClick }
                { ...attrs }
                v-slots={ {
                  ...slots,
                  appendInner: () => (
                    <Icon
                      class="ve-select__icon"
                      icon="$dropdown"
                    />
                  ),
                } }
              />
            ),
            default: () => (
              <List
                max-height={ 250 }
                elevation={ 8 }
                density="ultra-high"
                border
                shape="rounded"
              >
                { normaledItems.value.map((item: any) => (
                  <ListItem
                    active={ item.value === model.value }
                    onClick={ () => {
                      model.value = item.value
                      isActive.value = false
                    } }
                  >
                    { item.label }
                  </ListItem>
                )) }
              </List>
            )
          } }
        />
      )
    }
  }
})