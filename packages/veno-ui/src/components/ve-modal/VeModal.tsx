// Styles
import './styles/ve-modal.scss'

// Utils
import {
  defineComponent,
  toHandlers,
  mergeProps,
} from 'vue'

import { useProxiedModel } from '../../composables/proxied-model'

// Components
import {
  Teleport,
  Transition,
} from 'vue'

export default defineComponent({
  name: 'VeModal',

  props: {
    modelValue: Boolean,
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
            <Transition name="fade-transition" appear>
              { isActive.value && (
                <div
                  class={ [
                    've-modal__mask',
                  ] }

                  onClick={ () => isActive.value = false }
                />
              ) }
            </Transition>

            <div
              v-show={ isActive.value }
              class={ [
                've-modal__wrap',
              ] }
            >
              { slots.default?.({ isActive }) }
            </div>
          </div>
        </Teleport>
      </>
    )
  }
})