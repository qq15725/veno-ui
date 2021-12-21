// Styles
import './styles/select.scss'

// Utils
import { computed, ref } from 'vue'
import { genericComponent, getUid } from '../../utils'

// Composables
import { makeTransitionProps } from '../../composables/transition'
import { useProxiedModel } from '../../composables/proxied-model'

// Components
import { Input, makeInputProps, filterInputProps } from '../input/input'
import { Icon } from '../icon'
import { Overlay } from '../overlay'
import { List, ListItem } from '../list'
import { FadeTransition } from '../transition'

// Types
import type { PropType } from 'vue'
import type { InputSlots } from '../input/input'
import type { Anchor, Origin } from '../../composables/position-strategy'

export type Select = InstanceType<typeof Select>

type NormaledSelectItem = { label: string, value: string }
type SelectItem = string | NormaledSelectItem

export const Select = genericComponent<new () => {
  $slots: InputSlots
}>()({
  name: 'VeSelect',

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
    ...makeTransitionProps({
      transition: { component: FadeTransition },
    } as const),
    ...makeInputProps(),
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
        <Overlay
          class="ve-select-overlay"
          id={ id.value }
          v-model={ isActive.value }
          absolute
          position-strategy="connected"
          scroll-strategy="reposition"
          offset={ 8 }
          scrim={ false }
          anchor={ props.anchor }
          origin={ props.origin }
          transition={ props.transition }
          v-slots={ {
            activator: ({ props: activatorProps }) => (
              <Input
                { ...inputProps }
                { ...activatorProps }
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
                { ...attrs }
                v-slots={ {
                  ...slots,
                  appendInner: () => (
                    <Icon
                      class="ve-select__icon"
                      icon="veno-ui:$dropdown"
                    />
                  ),
                } }
              />
            ),
            default: () => (
              <List
                max-height={ 200 }
                elevation={ 8 }
                density={ props.density }
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