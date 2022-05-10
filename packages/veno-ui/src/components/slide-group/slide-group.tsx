// Styles
import './styles/slide-group.scss'

// Utils
import { computed, ref, watch, watchEffect } from 'vue'
import type { InjectionKey } from 'vue'
import { clamp, createSymbol, defineComponent, useRender } from '../../utils'

// Components
import { FadeTransition } from '../transition'
import { Icon } from '../icon'

// Composables
import { makeGroupProps, useGroup } from '../../composables/group'
import { makeTagProps } from '../../composables/tag'
import { useDisplay } from '../../composables'
import { useResizeObserver } from '../../composables/resize-observer'

// Types
import type { GroupInstance } from '../../composables/group'
import { bias, calculateCenteredOffset, calculateUpdatedOffset } from './helpers'

export const SlideGroupKey: InjectionKey<GroupInstance> = createSymbol('slide-group')

export const SlideGroup = defineComponent({
  name: 'VeSlideGroup',

  props: {
    activeClass: {
      type: String,
      default: 'v-slide-item--active',
    },
    centerActive: Boolean,
    direction: {
      type: String,
      default: 'horizontal',
    },
    symbol: {
      type: null,
      default: SlideGroupKey,
    },
    nextIcon: {
      type: String,
      default: '$next',
    },
    prevIcon: {
      type: String,
      default: '$prev',
    },
    showArrows: {
      type: [Boolean, String],
      validator: (v: any) => (
        typeof v === 'boolean' || [
          'always',
          'desktop',
          'mobile',
        ].includes(v)
      ),
    },
    ...makeTagProps(),
    ...makeGroupProps(),
  },

  emits: {
    'update:modelValue': (value: any) => true,
  },

  setup(props, { slots }) {
    const isRtl = ref(false)
    const { mobile } = useDisplay()
    const group = useGroup(props, props.symbol)
    const isOverflowing = ref(false)
    const scrollOffset = ref(0)
    const containerSize = ref(0)
    const contentSize = ref(0)
    const isHorizontal = computed(() => props.direction === 'horizontal')

    const { resizeRef: containerRef, contentRect: containerRect } = useResizeObserver()
    const { resizeRef: contentRef, contentRect } = useResizeObserver()

    watchEffect(() => {
      if (!containerRect.value || !contentRect.value) return

      const sizeProperty = isHorizontal.value ? 'width' : 'height'

      containerSize.value = containerRect.value[sizeProperty]
      contentSize.value = contentRect.value[sizeProperty]

      isOverflowing.value = containerSize.value + 1 < contentSize.value
    })

    watch(group.selected, selected => {
      if (!selected.length || !contentRef.value) return

      const index = group.items.value.findIndex(item => item.id === selected[selected.length - 1])

      // TODO: Is this too naive? Should we store element references in group composable?
      const selectedElement = contentRef.value.children[index] as HTMLElement

      if (index === 0 || !isOverflowing.value) {
        scrollOffset.value = 0
      } else if (props.centerActive) {
        scrollOffset.value = calculateCenteredOffset({
          selectedElement,
          containerSize: containerSize.value,
          contentSize: contentSize.value,
          isRtl: isRtl.value,
          isHorizontal: isHorizontal.value,
        })
      } else if (isOverflowing.value) {
        scrollOffset.value = calculateUpdatedOffset({
          selectedElement,
          containerSize: containerSize.value,
          contentSize: contentSize.value,
          isRtl: isRtl.value,
          currentScrollOffset: scrollOffset.value,
          isHorizontal: isHorizontal.value,
        })
      }
    })

    const disableTransition = ref(false)

    let startTouch = 0
    let startOffset = 0

    function onTouchstart(e: TouchEvent) {
      const sizeProperty = isHorizontal.value ? 'clientX' : 'clientY'
      startOffset = scrollOffset.value
      startTouch = e.touches[0][sizeProperty]
      disableTransition.value = true
    }

    function onTouchmove(e: TouchEvent) {
      if (!isOverflowing.value) return

      const sizeProperty = isHorizontal.value ? 'clientX' : 'clientY'
      scrollOffset.value = startOffset + startTouch - e.touches[0][sizeProperty]
    }

    function onTouchend(e: TouchEvent) {
      const maxScrollOffset = contentSize.value - containerSize.value

      if (isRtl.value) {
        if (scrollOffset.value > 0 || !isOverflowing.value) {
          scrollOffset.value = 0
        } else if (scrollOffset.value <= -maxScrollOffset) {
          scrollOffset.value = -maxScrollOffset
        }
      } else {
        if (scrollOffset.value < 0 || !isOverflowing.value) {
          scrollOffset.value = 0
        } else if (scrollOffset.value >= maxScrollOffset) {
          scrollOffset.value = maxScrollOffset
        }
      }

      disableTransition.value = false
    }

    function onScroll() {
      containerRef.value && (containerRef.value.scrollLeft = 0)
    }

    const isFocused = ref(false)

    function onFocusin(e: FocusEvent) {
      isFocused.value = true

      if (!isOverflowing.value || !contentRef.value) return

      // Focused element is likely to be the root of an item, so a
      // breadth-first search will probably find it in the first iteration
      for (const el of e.composedPath()) {
        for (const item of contentRef.value.children) {
          if (item === el) {
            scrollOffset.value = calculateUpdatedOffset({
              selectedElement: item as HTMLElement,
              containerSize: containerSize.value,
              contentSize: contentSize.value,
              isRtl: isRtl.value,
              currentScrollOffset: scrollOffset.value,
              isHorizontal: isHorizontal.value,
            })
            return
          }
        }
      }
    }

    function onFocusout(e: FocusEvent) {
      isFocused.value = false
    }

    function onFocus(e: FocusEvent) {
      if (
        !isFocused.value
        && !(e.relatedTarget && contentRef.value?.contains(e.relatedTarget as Node))
      ) focus()
    }

    function onKeydown(e: KeyboardEvent) {
      if (!contentRef.value) return

      if (e.key === (isHorizontal.value ? 'ArrowRight' : 'ArrowDown')) {
        focus('next')
      } else if (e.key === (isHorizontal.value ? 'ArrowLeft' : 'ArrowUp')) {
        focus('prev')
      } else if (e.key === 'Home') {
        focus('first')
      } else if (e.key === 'End') {
        focus('last')
      }
    }

    function focus(location?: 'next' | 'prev' | 'first' | 'last') {
      if (!contentRef.value) return

      if (!location) {
        contentRef.value.querySelector('[tabindex]')
        const focusable = [...contentRef.value.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )].filter(el => !el.hasAttribute('disabled')) as HTMLElement[]
        focusable[0]?.focus()
      } else if (location === 'next') {
        const el = contentRef.value.querySelector(':focus')?.nextElementSibling as HTMLElement | undefined
        if (el) el.focus()
        else focus('first')
      } else if (location === 'prev') {
        const el = contentRef.value.querySelector(':focus')?.previousElementSibling as HTMLElement | undefined
        if (el) el.focus()
        else focus('last')
      } else if (location === 'first') {
        (contentRef.value.firstElementChild as HTMLElement)?.focus()
      } else if (location === 'last') {
        (contentRef.value.lastElementChild as HTMLElement)?.focus()
      }
    }

    function scrollTo(location: 'prev' | 'next') {
      const sign = isRtl.value ? -1 : 1
      const newAbosluteOffset = sign * scrollOffset.value
        + (location === 'prev' ? -1 : 1) * containerSize.value

      scrollOffset.value = sign * clamp(newAbosluteOffset, 0, contentSize.value - containerSize.value)
    }

    const contentStyles = computed(() => {
      const scrollAmount = scrollOffset.value <= 0
        ? bias(-scrollOffset.value)
        : scrollOffset.value > contentSize.value - containerSize.value
          ? -(contentSize.value - containerSize.value) + bias(contentSize.value - containerSize.value - scrollOffset.value)
          : -scrollOffset.value

      return {
        transform: `translate${ isHorizontal.value ? 'X' : 'Y' }(${ scrollAmount }px)`,
        transition: disableTransition.value ? 'none' : '',
        willChange: disableTransition.value ? 'transform' : '',
      }
    })

    const slotProps = computed(() => ({
      next: group.next,
      prev: group.prev,
      select: group.select,
      isSelected: group.isSelected,
    }))

    const hasAffixes = computed(() => {
      switch (props.showArrows) {
        // Always show arrows on desktop & mobile
        case 'always':
          return true

        // Always show arrows on desktop
        case 'desktop':
          return mobile.value

        // Show arrows on mobile when overflowing.
        // This matches the default 2.2 behavior
        case true:
          return isOverflowing.value || Math.abs(scrollOffset.value) > 0

        // Always show on mobile
        case 'mobile':
          return (
            mobile.value
            || (isOverflowing.value || Math.abs(scrollOffset.value) > 0)
          )

        // https://material.io/components/tabs#scrollable-tabs
        // Always show arrows when
        // overflowed on desktop
        default:
          return (
            !mobile.value
            && (isOverflowing.value || Math.abs(scrollOffset.value) > 0)
          )
      }
    })

    const hasPrev = computed(() => {
      return hasAffixes.value && scrollOffset.value > 0
    })

    const hasNext = computed(() => {
      if (!hasAffixes.value) return false

      // Check one scroll ahead to know the width of right-most item
      return contentSize.value > Math.abs(scrollOffset.value) + containerSize.value
    })

    useRender(() => (
      <props.tag
        class={ [
          've-slide-group',
          {
            've-slide-group--vertical': !isHorizontal.value,
            've-slide-group--has-affixes': hasAffixes.value,
            've-slide-group--is-overflowing': isOverflowing.value,
          },
        ] }
        tabindex={ (isFocused.value || group.selected.value.length) ? -1 : 0 }
        onFocus={ onFocus }
      >
        { hasAffixes.value && (
          <div
            className={ [
              've-slide-group__prev',
              { 've-slide-group__prev--disabled': !hasPrev.value },
            ] }
            onClick={ () => scrollTo('prev') }
          >
            { slots.prev?.(slotProps.value) ?? (
              <FadeTransition>
                <Icon icon={ props.prevIcon }></Icon>
              </FadeTransition>
            ) }
          </div>
        ) }

        <div
          ref={ containerRef }
          className="ve-slide-group__container"
          onScroll={ onScroll }
        >
          <div
            ref={ contentRef }
            className="ve-slide-group__content"
            style={ contentStyles.value }
            onTouchstart={ onTouchstart }
            onTouchmove={ onTouchmove }
            onTouchend={ onTouchend }
            onFocusin={ onFocusin }
            onFocusout={ onFocusout }
            onKeyDown={ onKeydown }
          >
            { slots.default?.(slotProps.value) }
          </div>
        </div>

        { hasAffixes.value && (
          <div
            className={ [
              've-slide-group__next',
              { 've-slide-group__next--disabled': !hasNext.value },
            ] }
            onClick={ () => scrollTo('next') }
          >
            { slots.next?.(slotProps.value) ?? (
              <FadeTransition>
                <Icon icon={ props.nextIcon }></Icon>
              </FadeTransition>
            ) }
          </div>
        ) }
      </props.tag>
    ))

    return {
      selected: group.selected,
      scrollTo,
      scrollOffset,
      focus,
    }
  },
})

export type SlideGroup = InstanceType<typeof SlideGroup>
