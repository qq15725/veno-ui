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
import type { PropType } from 'vue'
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

  setup (props, { attrs }) {
    const model = useProxiedModel(props, 'modelValue')
    const isActive = ref(false)
    const id = computed(() => props.id || `ve-select-overlay-${ getUid() }`)

    return () => (
      <Overlay
        v-model={ isActive.value }
        class={ [
          've-select-overlay',
        ] }
        id={ id.value }
        absolute
        position-strategy="connected"
        scroll-strategy="reposition"
        scrim={ false }
        anchor={ props.anchor }
        origin={ props.origin }
        transition={ props.transition }
        v-slots={ {
          activator: ({ props: { modelValue, ...slotProps } }) => (
            <Input
              class={ [
                've-select'
              ] }
              readonly
              v-model={ model.value }
              v-slots={ {
                suffix: () => (
                  <Icon icon="veno-ui:$dropdown" />
                )
              } }
              { ...slotProps }
              { ...attrs }
            />
          ),
          default: () => (
            <Card elevation={ 8 } border={ 0 }>
              <List>
                { props.items.map((item: any) => (
                  <ListItem
                    onClick={ () => {
                      model.value = item.label
                      isActive.value = false
                    } }
                  >
                    { item.label }
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