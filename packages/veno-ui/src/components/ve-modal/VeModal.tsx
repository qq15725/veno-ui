// Styles
import './styles/ve-modal.scss'

// Utils
import {
  defineComponent,
  toHandlers,
  mergeProps,
} from 'vue'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { makeTransitionProps, MaybeTransition } from '../../composables/transition'

// Components
import { Teleport } from 'vue'
import { VeModalTransition, VeFadeTransition } from '../../components/ve-transition'

export default defineComponent({
  name: 'VeModal',

  props: {
    modelValue: Boolean,
    persistent: Boolean,
    ...makeTransitionProps({
      transition: { component: VeModalTransition, },
    })
  },

  emits: {
    'update:modelValue': (value: boolean) => true,
  },

  setup (props, { slots }) {
    const isActive = useProxiedModel(props, 'modelValue')

    return () => (
      <>
        { slots.activator?.({
          isActive: isActive.value,
          props: mergeProps({
            modelValue: isActive.value,
            'onUpdate:modelValue': (val: boolean) => isActive.value = val,
          }, toHandlers({
            click: () => isActive.value = true
          })),
        }) }
        <Teleport
          to={ document.body }
        >
          <div
            class={ [
              've-modal',
            ] }
          >
            <VeFadeTransition>
              { isActive.value && (
                <div
                  class={ [
                    've-modal__mask',
                  ] }

                  onClick={ () => {
                    if (!props.persistent) {
                      isActive.value = false
                    }
                  } }
                />
              ) }
            </VeFadeTransition>

            <MaybeTransition transition={ props.transition }>
              <div
                v-show={ isActive.value }
                class={ [
                  've-modal__wrap',
                ] }
                style="transform-origin: -34px 142px;"
              >
                { slots.default?.({ isActive }) }
              </div>
            </MaybeTransition>
          </div>
        </Teleport>
      </>
    )
  }
})