// Styles
import './styles/sider.scss'

// Utils
import { computed, onBeforeMount, watch, ref, toRef } from 'vue'
import { defineComponent } from '../../utils'

// Composables
import { useTouch } from './touch'
import { makeTagProps } from '../../composables/tag'
import { makeBorderProps, useBorder } from '../../composables/border'
import { makeLayoutItemProps, useLayoutItem } from '../../composables/layout'
import { useProxiedModel } from '../../composables/proxied-model'
import { useDisplay } from '../../composables/display'
import { makeThemeProps, provideTheme } from '../../composables/theme'
import { useBackgroundColor } from '../../composables/color'

// Components
import { FadeTransition } from '../transition'

// Types
import { Ref } from 'vue'

export type Sider = InstanceType<typeof Sider>

export const Sider = defineComponent({
  name: 'VeSider',

  props: {
    color: String,
    disableResizeWatcher: Boolean,
    expandOnHover: Boolean,
    permanent: Boolean,
    rail: Boolean,
    railWidth: {
      type: [Number, String],
      default: 72,
    },
    temporary: Boolean,
    width: {
      type: [Number, String],
      default: 256,
    },
    touchless: Boolean,
    ...makeTagProps({ tag: 'nav' }),
    ...makeThemeProps(),
    ...makeBorderProps(),
    ...makeLayoutItemProps({
      position: 'fixed',
      side: 'left',
      modelValue: null,
    } as const),
  },

  emits: {
    'update:modelValue': (val: boolean) => true,
  },

  setup (props, { attrs, slots }) {
    const { themeClasses } = provideTheme(props)
    const { borderClasses } = useBorder(props)
    const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(toRef(props, 'color'))
    const isActive = useProxiedModel(props, 'modelValue')
    const { mobile } = useDisplay()
    const isHovering = ref(false)
    const width = computed(() => {
      return (props.rail && props.expandOnHover && isHovering.value)
        ? Number(props.width)
        : Number(props.rail ? props.railWidth : props.width)
    })
    const isTemporary = computed(() => !props.permanent && (mobile.value || props.temporary))

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

    const { isDragging, dragProgress, dragStyles } = useTouch({
      isActive: isActive as Ref<boolean>,
      isTemporary,
      width,
      touchless: toRef(props, 'touchless'),
      position: toRef(props, 'side') as Ref<'left' | 'right' | 'bottom'>,
    })

    const layoutSize = computed(() => {
      const size = isTemporary.value ? 0
        : props.rail && props.expandOnHover ? Number(props.railWidth)
          : width.value

      return isDragging.value ? size * dragProgress.value : size
    })

    const { layoutItemStyles } = useLayoutItem(computed(() => ({
      name: props.name,
      position: props.position,
      side: props.side,
      size: width.value,
      layoutSize: layoutSize.value,
      priority: props.priority,
      active: isActive.value || isDragging.value,
      disableTransition: isDragging.value
    })))

    return () => {
      return (
        <>
          <props.tag
            onMouseenter={ () => (isHovering.value = true) }
            onMouseleave={ () => (isHovering.value = false) }
            class={ [
              've-sider',
              {
                've-sider--bottom': props.side === 'bottom',
                've-sider--start': props.side === 'left',
                've-sider--end': props.side === 'right',
                've-sider--expand-on-hover': props.expandOnHover,
                've-sider--rail': props.rail,
                've-sider--is-hovering': isHovering.value,
                've-sider--temporary': isTemporary.value,
              },
              themeClasses.value,
              backgroundColorClasses.value,
              borderClasses.value,
            ] }
            style={ [
              layoutItemStyles.value,
              backgroundColorStyles.value,
              dragStyles.value,
            ] }
            { ...attrs }
          >
            <div class="ve-sider__wrapper">
              { slots.default?.() }
            </div>
          </props.tag>

          <FadeTransition>
            { isTemporary.value && (isDragging.value || isActive.value) && (
              <div
                class="ve-sider__scrim"
                style={ isDragging.value ? {
                  opacity: dragProgress.value * 0.2,
                  transition: 'none',
                } : undefined }
                onClick={ () => isActive.value = false }
              />
            ) }
          </FadeTransition>
        </>
      )
    }
  }
})
