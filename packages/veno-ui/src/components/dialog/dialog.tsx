// Styles
import './styles/dialog.scss'

// Utils
import { computed } from 'vue'
import { genericComponent, getUid } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { makeTransitionProps } from '../../composables/transition'

// Components
import { DialogTransition } from '../transition'
import { Overlay } from '../overlay'

// Types
import type { OverlaySlots } from '../overlay/overlay'

export const Dialog = genericComponent<new () => {
  $slots: OverlaySlots
}>()({
  name: 'VeDialog',

  props: {
    /**
     * @zh 全屏
     */
    fullscreen: Boolean,

    /**
     * @zh ID
     */
    id: String,

    /**
     * @zh 是否显示
     */
    modelValue: Boolean,

    /**
     * @zh 是否可以滚动
     */
    scrollable: Boolean,

    /**
     * @zh 可以拖拽的
     */
    draggable: Boolean,

    ...makeTransitionProps({
      transition: { component: DialogTransition },
    } as const),
  },

  emits: {
    'update:modelValue': (_: boolean) => true,
  },

  setup(props, { slots }) {
    const isActive = useProxiedModel(props, 'modelValue')
    const id = computed(() => props.id || `ve-dialog-${ getUid() }`)

    return () => (
      <Overlay
        aria-role="dialog"
        aria-modal="true"
        activator-props={ {
          'aria-haspopup': 'dialog',
          'aria-expanded': String(isActive.value),
          'aria-describedby': id.value,
        } }
        class={ [
          've-dialog',
          {
            've-dialog--fullscreen': props.fullscreen,
            've-dialog--scrollable': props.scrollable,
          },
        ] }
        contentClass="ve-dialog__wrapper"
        id={ id.value }
        transition={ props.transition }
        v-model={ isActive.value }
      >
        { {
          ...slots,
          default: slots.default,
        } }
      </Overlay>
    )
  },
})

export type Dialog = InstanceType<typeof Dialog>
