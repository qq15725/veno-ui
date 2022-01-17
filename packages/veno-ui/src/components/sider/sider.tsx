// Styles
import './styles/sider.scss'

// Utils
import { computed, onBeforeMount, watch } from 'vue'
import { defineComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'
import { makeBorderProps, useBorder } from '../../composables/border'
import { makeLayoutItemProps, useLayoutItem } from '../../composables/layout'
import { useProxiedModel } from '../../composables/proxied-model'
import { useDisplay } from '../../composables/display'

// Components
import { Overlay } from '../overlay'

export type Sider = InstanceType<typeof Sider>

export const Sider = defineComponent({
  name: 'VeSider',

  props: {
    disableResizeWatcher: Boolean,
    permanent: Boolean,
    temporary: Boolean,
    width: {
      type: [Number, String],
      default: 256,
    },
    ...makeTagProps({ tag: 'nav' }),
    ...makeBorderProps(),
    ...makeLayoutItemProps({
      position: 'fixed',
      side: 'left',
      modelValue: null,
    } as const),
  },

  setup (props, { slots }) {
    const { borderClasses } = useBorder(props)
    const isActive = useProxiedModel(props, 'modelValue')
    const { mobile } = useDisplay()
    const width = computed(() => Number(props.width))
    const isTemporary = computed(() => !props.permanent && (mobile.value || props.temporary))
    const { layoutItemStyles } = useLayoutItem(computed(() => ({
      position: props.position,
      side: props.side,
      size: width.value,
      layoutSize: isTemporary.value ? 0 : width.value,
      priority: props.priority,
      active: !!isActive.value,
    })))

    if (!props.disableResizeWatcher) {
      watch(mobile, val => !props.permanent && (isActive.value = !val))
    }

    watch(props, val => {
      if (val.permanent) isActive.value = true
    })

    onBeforeMount(() => {
      if (props.modelValue != null) return
      isActive.value = props.permanent || !mobile.value
    })

    return () => (
      <props.tag
        class={ [
          've-sider',
          {
            've-sider--start': props.side === 'left',
            've-sider--end': props.side === 'right',
            've-sider--temporary': isTemporary.value,
          },
          borderClasses.value,
        ] }
        style={ layoutItemStyles.value }
      >
        { isTemporary.value && (
          <Overlay v-model={ isActive.value } style="z-index: 0;" />
        ) }

        <div class="ve-sider__wrapper">
          { slots.default?.() }
        </div>
      </props.tag>
    )
  }
})
