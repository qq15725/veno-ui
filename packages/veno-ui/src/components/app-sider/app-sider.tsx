// Styles
import './styles/app-sider.scss'

// Utils
import { computed, toRef, onBeforeMount, watch } from 'vue'
import { genericComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'
import { makeBorderProps, useBorder } from '../../composables/border'
import { makeLayoutItemProps, useLayoutItem } from '../../composables/layout'
import { useProxiedModel } from '../../composables/proxied-model'
import { useDisplay } from '../../composables/display'

// Components
import { Overlay } from '../overlay'

// Types
import type { PropType } from 'vue'
export type AppSider = InstanceType<typeof AppSider>

export const AppSider = genericComponent()({
  name: 'AppSider',

  props: {
    modelValue: {
      type: Boolean,
      default: null,
    },
    disableResizeWatcher: Boolean,
    permanent: Boolean,
    temporary: Boolean,
    width: {
      type: [Number, String],
      default: 256,
    },
    position: {
      type: String as PropType<'left' | 'right'>,
      default: 'left',
      validator: (value: any) => ['left', 'right'].includes(value),
    },
    ...makeTagProps({ tag: 'nav' }),
    ...makeBorderProps(),
    ...makeLayoutItemProps(),
  },

  setup (props, { slots }) {
    const { borderClasses } = useBorder(props, 've-app-sider')
    const isActive = useProxiedModel(props, 'modelValue')
    const { mobile } = useDisplay()
    const width = computed(() => {
      return props.width
    })
    const isTemporary = computed(() => !props.permanent && (mobile.value || props.temporary))
    const layoutStyles = useLayoutItem(
      props.name,
      toRef(props, 'priority'),
      toRef(props, 'position'),
      computed(() => isTemporary.value ? 0 : width.value),
      width,
      isActive,
    )

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
          've-app-sider',
          {
            've-app-sider--start': props.position === 'left',
            've-app-sider--end': props.position === 'right',
            've-app-sider--temporary': isTemporary.value,
          },
          borderClasses.value,
        ] }
        style={ [
          layoutStyles.value,
        ] }
      >
        { isTemporary.value && (
          <Overlay v-model={ isActive.value } style="z-index: 0;" />
        ) }

        <div class="ve-app-sider__wrap">
          { slots.default?.() }
        </div>
      </props.tag>
    )
  },
})
