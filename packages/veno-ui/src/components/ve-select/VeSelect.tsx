// Styles
import './styles/ve-select.scss'

// Utils
import { computed, defineComponent, ref } from 'vue'
import { getUid } from '../../utils'

// Composables
import { makeTransitionProps } from '../../composables/transition'
import { useProxiedModel } from '../../composables/proxied-model'

// Components
import { VeInput } from '../ve-input'
import { VeIcon } from '../ve-icon'
import { VeOverlay } from '../ve-overlay'
import { VeCard } from '../ve-card'
import { VeList, VeListItem } from '../ve-list'
import { VeFadeTransition } from '../ve-transition'

// Types
import type { PropType } from 'vue'
import type { StrategyProps } from '../ve-overlay/composables/position-strategies'

export const VeSelect = defineComponent({
  props: {
    modelValue: {
      type: null,
      default: undefined as any,
    },
    id: String,
    anchor: {
      type: String as PropType<StrategyProps['anchor']>,
      default: 'bottom',
    },
    origin: {
      type: String as PropType<StrategyProps['origin']>,
      default: 'auto',
    },
    items: {
      type: Array,
      default: () => [],
    },
    ...makeTransitionProps({
      transition: { component: VeFadeTransition, },
    } as const),
  },

  setup (props, { attrs }) {
    const model = useProxiedModel(props, 'modelValue')
    const isActive = ref(false)
    const id = computed(() => props.id || `ve-select-overlay-${ getUid() }`)

    return () => (
      <VeOverlay
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
            <VeInput
              class={ [
                've-select'
              ] }
              readonly
              v-model={ model.value }
              v-slots={ {
                suffix: () => (
                  <VeIcon icon="veno-ui:$dropdown" />
                )
              } }
              { ...slotProps }
              { ...attrs }
            />
          ),
          default: () => (
            <VeCard elevation={ 8 } border={ 0 }>
              <VeList>
                { props.items.map((item: any) => (
                  <VeListItem
                    onClick={ () => {
                      model.value = item.label
                      isActive.value = false
                    } }
                  >
                    { item.label }
                  </VeListItem>
                )) }
              </VeList>
            </VeCard>
          )
        } }
      />
    )
  }
})