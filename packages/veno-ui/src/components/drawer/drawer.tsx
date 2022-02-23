// Styles
import './styles/drawer.scss'

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
import { useRoute } from '../../composables/router'

// Components
import { Button } from '../button'
import { Scrim } from '../scrim'

// Types
import { Ref } from 'vue'

export type Drawer = InstanceType<typeof Drawer>

export const Drawer = defineComponent({
  name: 'VeDrawer',

  props: {
    disableResizeWatcher: Boolean,
    color: String,
    expandOnHover: Boolean,
    permanent: Boolean,
    rail: Boolean,
    railWidth: {
      type: [Number, String],
      default: 52,
    },
    showToggler: Boolean,
    temporary: Boolean,
    touchless: Boolean,
    width: {
      type: [Number, String],
      default: 256,
    },
    ...makeTagProps({ tag: 'nav' }),
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

  setup (props, { attrs, slots }) {
    const isActive = useProxiedModel(props, 'modelValue')
    const { themeClasses } = provideTheme(props)
    const { borderClasses } = useBorder(props)
    const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(
      toRef(props, 'color')
    )
    const { mobile } = useDisplay()
    const isHovering = ref(false)
    const width = computed(() => {
      return (props.rail && props.expandOnHover && isHovering.value)
        ? Number(props.width)
        : Number(props.rail ? props.railWidth : props.width)
    })
    const isTemporary = computed(() => !props.permanent && (mobile.value || props.temporary))
    const hasToggler = computed(() => props.showToggler && !mobile.value)

    watch(useRoute(), () => {
      if (isTemporary.value) isActive.value = false
    })

    if (!props.disableResizeWatcher) {
      watch(mobile, val => !props.permanent && (isActive.value = !val))
    }

    watch(props, val => {
      if (val.permanent) isActive.value = true
    })

    onBeforeMount(() => {
      if (props.modelValue !== null) return
      isActive.value = !isTemporary.value && (props.permanent || !mobile.value)
    })

    const { isDragging, dragProgress, dragStyles } = useTouch({
      isActive: isActive as Ref<boolean>,
      isTemporary,
      width,
      touchless: toRef(props, 'touchless'),
      position: toRef(props, 'anchor') as Ref<'left' | 'right' | 'bottom'>,
    })

    const layoutSize = computed(() => {
      const size = isTemporary.value ? 0
        : props.rail && props.expandOnHover ? Number(props.railWidth)
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
      layoutItemScrimStyles
    } = useLayoutItem(computed(() => ({
      name: props.name,
      position: props.position,
      anchor: props.anchor,
      size: width.value,
      layoutSize: layoutSize.value,
      priority: priority.value,
      active: isActive.value || isDragging.value,
      disableTransition: isDragging.value
    })))

    const layoutItemStyles = computed(() => {
      const styles = _layoutItemStyles.value as Record<string, any>
      if (hasToggler.value && styles.transform) {
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
            <div class="ve-drawer__wrapper">
              { slots.default?.() }
            </div>

            { hasToggler.value && (
              <Button
                position="absolute"
                class="ve-drawer__toggler"
                icon="$toggler"
                top={
                  props.anchor === 'left' || props.anchor === 'right'
                    ? 204 : undefined
                }
                left={
                  props.anchor === 'bottom' || props.anchor === 'top'
                    ? 204 : props.anchor === 'right' ? 0 : undefined
                }
                right={ props.anchor === 'left' ? 0 : undefined }
                bottom={ props.anchor === 'top' ? 0 : undefined }
                size="x-small"
                border
                shape="circle"
                onClick={ () => {
                  isActive.value = !isActive.value
                } }
              />
            ) }
          </props.tag>

          <Scrim
            model-value={ isTemporary.value && (isDragging.value || isActive.value) }
            style={ [
              layoutItemScrimStyles.value,
              isDragging.value ? {
                opacity: dragProgress.value * 0.2,
                transition: 'none',
              } : undefined
            ] }
            onClick={ () => isActive.value = false }
          />
        </>
      )
    }
  }
})
