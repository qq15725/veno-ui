// Styles
import './styles/select.scss'

// Utils
import { computed, ref } from 'vue'
import { genericComponent, getUid } from '../../utils'

// Composables
import { makeTransitionProps } from '../../composables/transition'
import { useProxiedModel } from '../../composables/proxied-model'

// Components
import { Input } from '../input'
import { Icon } from '../icon'
import { Overlay } from '../overlay'
import { Card } from '../card'
import { List, ListItem } from '../list'
import { FadeTransition } from '../transition'

// Types
import type { PropType, ComponentPublicInstance } from 'vue'
import type { Anchor, Origin } from '../../composables/position-strategy'

export type Select = InstanceType<typeof Select>

export const Select = genericComponent()({
  name: 'Select',

  props: {
    modelValue: {
      type: null,
      default: undefined as any,
    },
    id: String,
    anchor: {
      type: String as PropType<Anchor>,
      default: 'bottom',
    },
    origin: {
      type: String as PropType<Origin>,
      default: 'auto',
    },
    items: {
      type: Array,
      default: () => [],
    },
    ...makeTransitionProps({
      transition: { component: FadeTransition },
    } as const),
  },

  setup (props, { attrs, slots }) {
    const model = useProxiedModel(props, 'modelValue')
    const isActive = ref(false)
    const id = computed(() => props.id || `ve-select-overlay-${ getUid() }`)
    const label = computed(() => {
      const item = props.items.find((item: any) => {
        if (typeof item === 'object') {
          return item.value === model.value
        }
        return item === model.value
      }) as any
      if (!item) return null
      return typeof item === 'object' ? item.label : item
    })
    return () => (
      <Overlay
        v-model={ isActive.value }
        class="ve-select-overlay"
        id={ id.value }
        absolute
        position-strategy="connected"
        scroll-strategy="reposition"
        offset={ 4 }
        scrim={ false }
        anchor={ props.anchor }
        origin={ props.origin }
        transition={ props.transition }
        v-slots={ {
          activator: ({ activatorRef, props: { modelValue, ...slotProps } }) => (
            <Input
              { ...slotProps }
              { ...attrs }
              ref={ (ref: any) => {
                if (ref?.inputControlRef) {
                  activatorRef(ref?.inputControlRef)
                }
              } }
              class="ve-select"
              readonly
              modelValue={ label.value }
              v-model:active={ isActive.value }
              onClick:control={ slotProps.onClick }
              v-slots={ {
                prepend: slots.prepend,
                append: slots.append,
                appendInner: () => (
                  <Icon
                    class="ve-select__icon"
                    icon="veno-ui:$dropdown"
                  />
                )
              } }
            />
          ),
          default: () => (
            <Card elevation={ 8 }>
              <List>
                { props.items.map((item: any) => (
                  <ListItem
                    active={
                      typeof item === 'object'
                        ? item.value === model.value
                        : item === model.value
                    }
                    onClick={ () => {
                      if (typeof item === 'object') {
                        model.value = item.value
                      } else {
                        model.value = item
                      }
                      isActive.value = false
                    } }
                  >
                    { typeof item === 'object' ? item.label : item }
                  </ListItem>
                )) }
              </List>
            </Card>
          )
        } }
      />
    )
  }
})