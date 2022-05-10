// Styles
import './styles/drawer.scss'

// Types
import type { Ref } from 'vue'
// Utils
import { computed, onBeforeMount, ref, toRef, watch } from 'vue'
import { defineComponent } from '../../utils'

// Composables
import { makeScrollbar, useScrollbar } from '../../composables/scrollbar'
import { makeBorderProps, useBorder } from '../../composables/border'
import { useBackgroundColor } from '../../composables/color'
import { useDisplay } from '../../composables/display'
import { makeLayoutItemProps, useLayoutItem } from '../../composables/layout'
import { useProxiedModel } from '../../composables/proxied-model'
import { useRouter } from '../../composables/router'
import { makeTagProps } from '../../composables/tag'
import { makeThemeProps, provideTheme } from '../../composables/theme'

// Components
import { Button } from '../button'
import { Scrim } from '../scrim'
import { useTouch } from './touch'

export const Drawer = defineComponent({
  name: 'VeDrawer',

  props: {
    /**
     * @zh 禁用大小调整监听
     */
    disableResizeWatcher: Boolean,

    /**
     * @zh 禁用路由监听
     */
    disableRouteWatcher: Boolean,

    /**
     * @zh 背景颜色
     */
    color: String,

    /**
     * @zh 悬停时展开
     */
    expandOnHover: Boolean,

    /**
     * @zh 持续激活
     */
    permanent: Boolean,

    /**
     * @zh 最小化
     */
    rail: Boolean,

    /**
     * @zh 最小化宽度
     */
    railWidth: {
      type: [Number, String],
      default: 52,
    },

    /**
     * @zh 显示激活/隐藏按钮
     */
    showToggler: Boolean,

    /**
     * @zh 临时抽屉
     */
    temporary: Boolean,

    /**
     * @zh 可触摸
     */
    touchless: Boolean,

    /**
     * @zh 宽度
     */
    width: {
      type: [Number, String],
      default: 256,
    },
    ...makeTagProps({ tag: 'nav' }),
    ...makeScrollbar(),
    ...makeThemeProps(),
    ...makeBorderProps(),
    ...makeLayoutItemProps({
      position: 'fixed',
      anchor: 'left',
      modelValue: null,
    } as const),
  },

  emits: {
    'update:modelValue': (val: boolean) => true,
  },

  setup(props, { attrs, slots }) {
    const { themeClasses } = provideTheme(props)
    const { borderClasses } = useBorder(props)
    const { scrollbarClasses } = useScrollbar(props)
    const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(
      toRef(props, 'color'),
    )
    const { mobile, platform } = useDisplay()
    const router = useRouter()
    const isActive = useProxiedModel(props, 'modelValue', null, v => !!v)
    const isHovering = ref(false)
    const width = computed(() => {
      return (props.rail && props.expandOnHover && isHovering.value)
        ? Number(props.width)
        : Number(props.rail ? props.railWidth : props.width)
    })

    const isTemporary = computed(() => !props.permanent && !!(mobile.value || props.temporary))
    const hasToggler = computed(() => props.showToggler && !mobile.value)

    watch(isTemporary, val => {
      if (!props.disableResizeWatcher && !props.permanent) isActive.value = !val
    })

    if (router) {
      watch(router.currentRoute, () => {
        if (!props.disableRouteWatcher && isTemporary.value) isActive.value = false
      })
    }

    watch(() => props.permanent, val => {
      if (val) isActive.value = true
    })

    onBeforeMount(() => {
      if (props.modelValue !== null || isTemporary.value) return
      isActive.value = props.permanent || !mobile.value
    })

    const { isDragging, dragProgress, dragStyles } = useTouch({
      isActive: isActive as Ref<boolean>,
      isTemporary,
      width,
      touchless: toRef(props, 'touchless'),
      position: toRef(props, 'anchor') as Ref<'left' | 'right' | 'bottom'>,
    })

    const layoutSize = computed(() => {
      const size = isTemporary.value
        ? 0
        : props.rail && props.expandOnHover
          ? Number(props.railWidth)
          : width.value

      return isDragging.value ? size * dragProgress.value : size
    })

    const priority = computed(() => (
      isTemporary.value
        ? parseInt(props.priority, 10) + 1
        : props.priority
    ))

    const {
      layoutItemStyles: _layoutItemStyles,
      layoutItemScrimStyles,
    } = useLayoutItem(computed(() => ({
      name: props.name,
      position: props.position,
      anchor: props.anchor,
      size: width.value,
      layoutSize: layoutSize.value,
      priority: priority.value,
      active: isActive.value || isDragging.value,
      disableTransition: isDragging.value,
    })))

    const layoutItemStyles = computed(() => {
      const styles = _layoutItemStyles.value as Record<string, any>
      if (!platform.value.ssr && hasToggler.value && styles.transform) {
        styles.transform = styles.transform.replace('110', '90')
      }
      return styles
    })

    return () => {
      const slotProps = {
        onClick: () => {
          isActive.value = true
        },
      }

      return (
        <>
          { slots.activator?.({ props: slotProps }) }

          <props.tag
            onMouseenter={ () => (isHovering.value = true) }
            onMouseleave={ () => (isHovering.value = false) }
            class={ [
              've-drawer',
              {
                've-drawer--active': isActive.value,
                've-drawer--top': props.anchor === 'top',
                've-drawer--bottom': props.anchor === 'bottom',
                've-drawer--start': props.anchor === 'left',
                've-drawer--end': props.anchor === 'right',
                've-drawer--expand-on-hover': props.expandOnHover,
                've-drawer--rail': props.rail,
                've-drawer--is-hovering': isHovering.value,
                've-drawer--temporary': isTemporary.value,
                've-drawer--has-toggler': hasToggler.value,
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
            <div
              className={ [
                've-drawer__wrapper',
                scrollbarClasses.value,
              ] }
            >
              { slots.default?.() }
            </div>

            { hasToggler.value && (
              <Button
                position="absolute"
                class="ve-drawer__toggler"
                icon="$toggler"
                top={
                  props.anchor === 'left' || props.anchor === 'right'
                    ? 204
                    : undefined
                }
                left={
                  props.anchor === 'bottom' || props.anchor === 'top'
                    ? 204
                    : props.anchor === 'right' ? 0 : undefined
                }
                right={ props.anchor === 'left' ? 0 : undefined }
                bottom={ props.anchor === 'top' ? 0 : undefined }
                size="small"
                density="ultra-high"
                border
                shape="circle"
                onClick={ () => {
                  isActive.value = !isActive.value
                } }
              />
            ) }
          </props.tag>

          <Scrim
            modelValue={ isTemporary.value && !!(isDragging.value || isActive.value) }
            style={ [
              layoutItemScrimStyles.value,
              isDragging.value
                ? {
                    opacity: dragProgress.value * 0.2,
                    transition: 'none',
                  }
                : undefined,
            ] }
            onClick={ () => isActive.value = false }
          />
        </>
      )
    }
  },
})

export type Drawer = InstanceType<typeof Drawer>
