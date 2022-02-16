// Styles
import './styles/pagination.scss'

// Utils
import { computed, nextTick, ref } from 'vue'
import { createRange, defineComponent, keyValues } from '../../utils'

// Components
import { Button } from '../button'

// Composables
import { makePaperProps, usePaper } from '../../composables/paper'
import { useResizeObserver } from '../../composables/resize-observer'
import { useRefs } from '../../composables/refs'
import { useProxiedModel } from '../../composables/proxied-model'
import { makePaginationProps } from '../../composables/pagination'

// Types
import type { ComponentPublicInstance, } from 'vue'

export type Pagination = InstanceType<typeof Pagination>

export const Pagination = defineComponent({
  name: 'VePagination',

  props: {
    disabled: Boolean,
    totalVisible: [Number, String],
    firstIcon: {
      type: String,
      default: '$first',
    },
    prevIcon: {
      type: String,
      default: '$prev',
    },
    nextIcon: {
      type: String,
      default: '$next',
    },
    lastIcon: {
      type: String,
      default: '$last',
    },
    ariaLabel: {
      type: String,
      default: '分页导航',
    },
    pageAriaLabel: {
      type: String,
      default: '转到页面 {0}',
    },
    currentPageAriaLabel: {
      type: String,
      default: '当前页 {0}',
    },
    firstAriaLabel: {
      type: String,
      default: '首页',
    },
    previousAriaLabel: {
      type: String,
      default: '上一页',
    },
    nextAriaLabel: {
      type: String,
      default: '下一页',
    },
    lastAriaLabel: {
      type: String,
      default: '最后页',
    },
    ellipsis: {
      type: String,
      default: '...',
    },
    showFirstLastPage: Boolean,
    activeColor: {
      type: String,
      default: 'primary',
    },

    ...makePaginationProps(),
    ...makePaperProps({
      tag: 'nav',
      variant: 'text',
      shape: 'rounded',
    } as const),
  },

  emits: {
    'update:page': (value: number) => true,
    first: (value: number) => true,
    prev: (value: number) => true,
    next: (value: number) => true,
    last: (value: number) => true,
  },

  setup (props, { slots, emit }) {
    const page = useProxiedModel(
      props, 'page', props.page,
      v => Number(v)
    )
    const firstPage = computed(() => Number(props.firstPage))
    const lastPage = computed(() => Number(props.lastPage))
    const { paperClasses, paperStyles } = usePaper(props)
    const maxButtons = ref(-1)

    const { resizeRef } = useResizeObserver((entries: ResizeObserverEntry[]) => {
      if (!entries.length) return
      const { target, contentRect } = entries[0]
      const firstItem = target.querySelector('.ve-pagination__list > *')
      if (!firstItem) return
      const totalWidth = contentRect.width
      const itemWidth = firstItem.getBoundingClientRect().width + 10
      maxButtons.value = Math.max(0, Math.floor((totalWidth - 96) / itemWidth))
    })

    const totalVisible = computed(() => {
      if (props.totalVisible) {
        return Math.min(Number(props.totalVisible ?? ''), lastPage.value)
      } else if (maxButtons.value >= 0) {
        return maxButtons.value
      }
      return Math.min(7, lastPage.value)
    })

    const range = computed(() => {
      if (lastPage.value <= 0) return []

      if (totalVisible.value <= 3) {
        return [Math.min(Math.max(firstPage.value, page.value), firstPage.value + lastPage.value)]
      }

      if (lastPage.value <= totalVisible.value) {
        return createRange(lastPage.value, firstPage.value)
      }

      const middle = Math.ceil(totalVisible.value / 2)
      const left = middle
      const right = lastPage.value - middle

      if (page.value < left) {
        return [
          ...createRange(Math.max(1, totalVisible.value - 2), firstPage.value),
          props.ellipsis,
          lastPage.value
        ]
      } else if (page.value > right) {
        const rangeLength = totalVisible.value - 2
        const rangeStart = lastPage.value - rangeLength + firstPage.value
        return [
          firstPage.value,
          props.ellipsis,
          ...createRange(rangeLength, rangeStart)
        ]
      } else {
        const rangeLength = Math.max(1, totalVisible.value - 4)
        const rangeStart = rangeLength === 1 ? page.value : page.value - Math.ceil(rangeLength / 2) + firstPage.value
        return [
          firstPage.value,
          props.ellipsis,
          ...createRange(rangeLength, rangeStart),
          props.ellipsis,
          lastPage.value
        ]
      }
    })

    // TODO: 'first' | 'prev' | 'next' | 'last' does not work here?
    function setValue (e: Event, value: number, event?: any) {
      e.preventDefault()
      page.value = value
      event && emit(event, value)
    }

    const { refs, updateRef } = useRefs<ComponentPublicInstance>()

    const items = computed(() => {
      const sharedProps = {
        density: props.density,
        shape: props.shape,
        size: props.size,
      }

      return range.value.map((item, index) => {
        const ref = (e: any) => updateRef(e, index)

        if (typeof item === 'string') {
          return {
            isActive: false,
            page: item,
            props: {
              ...sharedProps,
              ref,
              ellipsis: true,
              icon: true,
              disabled: true,
              variant: props.variant,
              border: props.border,
            },
          }
        } else {
          const isActive = item === page.value
          return {
            isActive,
            page: item,
            props: {
              ...sharedProps,
              ref,
              ellipsis: false,
              icon: true,
              disabled: props.disabled || lastPage.value < 2,
              elevation: props.elevation,
              variant: isActive ? 'outlined' : props.variant,
              border: props.border,
              color: isActive ? props.activeColor : undefined,
              ariaCurrent: isActive,
              ariaLabel: isActive ? props.currentPageAriaLabel : props.pageAriaLabel,
              onClick: (e: Event) => setValue(e, item),
            },
          }
        }
      })
    })

    const controls = computed(() => {
      const sharedProps = {
        color: undefined,
        density: props.density,
        shape: props.shape,
        size: props.size,
        variant: props.variant,
        border: props.border,
      }

      const prevDisabled = props.disabled || page.value <= firstPage.value
      const nextDisabled = props.disabled || page.value >= firstPage.value + lastPage.value - 1

      return {
        first: props.showFirstLastPage ? {
          ...sharedProps,
          icon: props.firstIcon,
          onClick: (e: Event) => setValue(e, firstPage.value, 'first'),
          disabled: prevDisabled,
          ariaLabel: props.firstAriaLabel,
          ariaDisabled: prevDisabled,
        } : undefined,
        prev: {
          ...sharedProps,
          icon: props.prevIcon,
          onClick: (e: Event) => setValue(e, page.value - 1, 'prev'),
          disabled: prevDisabled,
          ariaLabel: props.previousAriaLabel,
          ariaDisabled: prevDisabled,
        },
        next: {
          ...sharedProps,
          icon: props.nextIcon,
          onClick: (e: Event) => setValue(e, page.value + 1, 'next'),
          disabled: nextDisabled,
          ariaLabel: props.nextAriaLabel,
          ariaDisabled: nextDisabled,
        },
        last: props.showFirstLastPage ? {
          ...sharedProps,
          icon: props.lastIcon,
          onClick: (e: Event) => setValue(e, firstPage.value + lastPage.value - 1, 'last'),
          disabled: nextDisabled,
          ariaLabel: props.lastAriaLabel,
          ariaDisabled: nextDisabled,
        } : undefined,
      }
    })

    function updateFocus () {
      const currentIndex = page.value - firstPage.value
      refs.value[currentIndex]?.$el.focus()
    }

    function onKeydown (e: KeyboardEvent) {
      if (e.key === keyValues.left && !props.disabled && page.value > firstPage.value) {
        page.value = page.value - 1
        nextTick(updateFocus)
      } else if (e.key === keyValues.right && !props.disabled && page.value < firstPage.value + lastPage.value - 1) {
        page.value = page.value + 1
        nextTick(updateFocus)
      }
    }

    return () => (
      <props.tag
        ref={ resizeRef }
        class={ [
          've-pagination',
          paperClasses.value,
        ] }
        style={ [
          paperStyles.value
        ] }
        role="navigation"
        aria-label={ props.ariaLabel }
        onKeydown={ onKeydown }
      >
        <ul class="ve-pagination__list">
          { props.showFirstLastPage && (
            <li class="ve-pagination__first">
              { slots.first?.(controls.value.first) ?? (
                <Button { ...controls.value.first } />
              ) }
            </li>
          ) }

          <li class="ve-pagination__prev">
            { slots.prev?.(controls.value.prev) ?? (
              <Button { ...controls.value.prev } />
            ) }
          </li>

          { items.value.map((item, index) => (
            <li
              key={ `${ index }_${ item.page }` }
              class={ [
                've-pagination__item',
                {
                  've-pagination__item--is-active': item.isActive,
                },
              ] }
            >
              { slots.item?.(item) ?? (
                <Button { ...item.props }>{ item.page }</Button>
              ) }
            </li>
          )) }

          <li class="ve-pagination__next">
            { slots.next?.(controls.value.next) ?? (
              <Button { ...controls.value.next } />
            ) }
          </li>

          { props.showFirstLastPage && (
            <li class="ve-pagination__last">
              { slots.last?.(controls.value.last) ?? (
                <Button { ...controls.value.last } />
              ) }
            </li>
          ) }
        </ul>
      </props.tag>
    )
  }
})
