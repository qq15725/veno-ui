// Styles
import './styles/pagination.scss'

// Utils
import { computed, nextTick, ref } from 'vue'
import { createRange, defineComponent, keyValues } from '../../utils'

// Components
import { Button } from '../button'
import { Select } from '../select'
import { Input } from '../input'

// Composables
import { makePaperProps, usePaper } from '../../composables/paper'
import { useResizeObserver } from '../../composables/resize-observer'
import { useRefs } from '../../composables/refs'
import { useProxiedModel } from '../../composables/proxied-model'

// Types
import type { ComponentPublicInstance } from 'vue'

export const Pagination = defineComponent({
  name: 'VePagination',

  props: {
    /**
     * @zh 激活时的颜色
     */
    activeColor: {
      type: String,
      default: 'primary',
    },

    /**
     * @zh 导航的无障碍标签值
     */
    ariaLabel: {
      type: String,
      default: '分页导航',
    },

    /**
     * @zh 当前页的无障碍标签值
     */
    currentPageAriaLabel: {
      type: String,
      default: '当前页 {0}',
    },

    /**
     * @zh 是否禁用
     */
    disabled: Boolean,

    /**
     * @zh 省略值
     */
    ellipsis: {
      type: String,
      default: '...',
    },

    /**
     * @zh 第一页的无障碍标签值
     */
    firstAriaLabel: {
      type: String,
      default: '首页',
    },

    /**
     * @zh 第一页初始值
     */
    firstPage: {
      type: [Number, String],
      default: 1,
    },

    /**
     * @zh 第一页的按钮图标
     */
    firstIcon: {
      type: String,
      default: '$first',
    },

    /**
     * @zh 最后一页的无障碍标签值
     */
    lastAriaLabel: {
      type: String,
      default: '最后页',
    },

    /**
     * @zh 最后一页的按钮图标
     */
    lastIcon: {
      type: String,
      default: '$last',
    },

    /**
     * @zh 当前页
     */
    modelValue: {
      type: [Number, String],
      default: (props: any) => props.firstPage,
      validator: (val: number) => val % 1 === 0,
    },

    /**
     * @zh 下一页的无障碍标签值
     */
    nextAriaLabel: {
      type: String,
      default: '下一页',
    },

    /**
     * @zh 下一页的按钮图标
     */
    nextIcon: {
      type: String,
      default: '$next',
    },

    /**
     * @zh 上一页的按钮图标
     */
    prevIcon: {
      type: String,
      default: '$prev',
    },

    /**
     * @zh 页面的无障碍标签值
     */
    pageAriaLabel: {
      type: String,
      default: '转到页面 {0}',
    },

    /**
     * @zh 每页条数
     */
    perPage: {
      type: [Number, String],
      default: 10,
      validator: (val: number) => val % 1 === 0,
    },

    /**
     * @zh 每页条数可选项
     */
    perPageOptions: {
      type: Array,
      default: () => [10, 20, 50, 100],
    },

    /**
     * @zh 上一页的无障碍标签值
     */
    previousAriaLabel: {
      type: String,
      default: '上一页',
    },

    /**
     * @zh 显示首页和最后一页
     */
    showFirstLastPage: Boolean,

    /**
     * @zh 显示快速跳跃
     */
    showQuickJumper: Boolean,

    /**
     * @zh 显示每页条数选择器
     */
    showPerPageSelect: Boolean,

    /**
     * @zh 总条数
     */
    total: {
      type: [Number, String],
      default: 0,
      validator: (val: number) => val % 1 === 0,
    },

    /**
     * @zh 总显示页数
     */
    totalVisible: {
      type: [Number, String],
      validator: (val: number) => val % 1 === 0,
    },

    ...makePaperProps({
      tag: 'nav',
      variant: 'text',
      shape: 'rounded-sm',
    } as const),
  },

  emits: {
    'update:modelValue': (value: number) => true,
    'update:perPage': (value: number) => true,
    'first': (value: number) => true,
    'prev': (value: number) => true,
    'next': (value: number) => true,
    'last': (value: number) => true,
  },

  setup(props, { slots, emit }) {
    const internalPage = ref()
    const { paperClasses, paperStyles } = usePaper(props)

    const page = useProxiedModel(
      props, 'modelValue', props.modelValue,
      (v: any) => parseInt(v ?? 1, 10),
    )
    const perPage = useProxiedModel(
      props, 'perPage', props.perPage,
      (v: any) => parseInt(v ?? 10, 10),
    )
    const total = computed(() => parseInt(props.total, 10))
    const firstPage = computed(() => parseInt(props.firstPage, 10))
    const lastPage = computed(() => Math.ceil(total.value / perPage.value))

    const maxButtons = ref(-1)
    const { resizeRef } = useResizeObserver((entries: ResizeObserverEntry[]) => {
      if (!entries.length) return
      const { target, contentRect } = entries[0]
      const firstItem = target.querySelector('.ve-pagination__wrapper > *')
      if (!firstItem) return
      let totalWidth = contentRect.width - 96
      if (props.showPerPageSelect) totalWidth -= 100
      if (props.showQuickJumper) totalWidth -= 100
      const itemWidth = firstItem.getBoundingClientRect().width + 10
      maxButtons.value = Math.max(0, Math.floor(totalWidth / itemWidth))
    })

    const totalVisible = computed(() => {
      if (props.totalVisible) return Math.min(parseInt(props.totalVisible, 10), lastPage.value)
      if (maxButtons.value >= 0) return maxButtons.value
      return Math.min(7, lastPage.value)
    })

    const range = computed(() => {
      if (lastPage.value <= 0) return []
      if (totalVisible.value === 1) return [Math.min(Math.max(firstPage.value, page.value), firstPage.value + lastPage.value)]
      if (lastPage.value <= totalVisible.value) return createRange(lastPage.value, firstPage.value)
      const middle = Math.ceil(totalVisible.value / 2)
      const left = middle
      const right = lastPage.value - middle
      if (page.value < left) {
        return [
          ...createRange(Math.max(1, totalVisible.value - 2), firstPage.value),
          props.ellipsis,
          lastPage.value,
        ]
      }
      if (page.value > right) {
        const rangeLength = totalVisible.value - 2
        const rangeStart = lastPage.value - rangeLength + firstPage.value
        return [
          firstPage.value,
          props.ellipsis,
          ...createRange(rangeLength, rangeStart),
        ]
      }
      const rangeLength = Math.max(1, totalVisible.value - 4)
      const rangeStart = rangeLength === 1 ? page.value : page.value - Math.ceil(rangeLength / 2) + firstPage.value
      return [
        firstPage.value,
        props.ellipsis,
        ...createRange(rangeLength, rangeStart),
        props.ellipsis,
        lastPage.value,
      ]
    })

    // TODO: 'first' | 'prev' | 'next' | 'last' does not work here?
    function setValue(e: Event, value: number, event?: any) {
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
        variant: 'outlined',
        border: props.border,
      } as const

      const prevDisabled = props.disabled || page.value <= firstPage.value
      const nextDisabled = props.disabled || page.value >= firstPage.value + lastPage.value - 1

      return {
        first: props.showFirstLastPage
          ? {
              ...sharedProps,
              icon: props.firstIcon,
              onClick: (e: Event) => setValue(e, firstPage.value, 'first'),
              disabled: prevDisabled,
              ariaLabel: props.firstAriaLabel,
              ariaDisabled: prevDisabled,
            }
          : undefined,
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
        last: props.showFirstLastPage
          ? {
              ...sharedProps,
              icon: props.lastIcon,
              onClick: (e: Event) => setValue(e, firstPage.value + lastPage.value - 1, 'last'),
              disabled: nextDisabled,
              ariaLabel: props.lastAriaLabel,
              ariaDisabled: nextDisabled,
            }
          : undefined,
      }
    })

    function updateFocus() {
      const currentIndex = page.value - firstPage.value
      refs.value[currentIndex]?.$el.focus()
    }

    function onKeydown({ key }: KeyboardEvent) {
      if (key === keyValues.left && !props.disabled && page.value > firstPage.value) {
        page.value = page.value - 1
        nextTick(updateFocus)
      } else if (key === keyValues.right && !props.disabled && page.value < firstPage.value + lastPage.value - 1) {
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
        style={ paperStyles.value }
        role="navigation"
        aria-label={ props.ariaLabel }
        onKeydown={ onKeydown }
      >
        <ul class="ve-pagination__wrapper">
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

          { props.showPerPageSelect && (
            <li class="ve-pagination__per-page">
              <Select
                hide-details
                width="95"
                v-model={ perPage.value }
                items={ props.perPageOptions.map(v => ({
                  text: `${ v } / 页`,
                  value: parseInt(v as any, 10),
                })) }
              />
            </li>
          ) }

          { props.showQuickJumper && (
            <li class="ve-pagination__quick-jumper">
              <Input
                hide-details
                width="60"
                v-model={ internalPage.value }
                type="number"
                onKeydown={ ({ key }: KeyboardEvent) => {
                  if (
                    key === keyValues.enter
                    && internalPage.value
                    && internalPage.value > 0
                    && internalPage.value <= lastPage.value
                  ) {
                    page.value = internalPage.value
                    internalPage.value = undefined
                  }
                } }
                onBlur={ () => {
                  if (
                    internalPage.value
                    && internalPage.value > 0
                    && internalPage.value <= lastPage.value
                  ) {
                    page.value = internalPage.value
                    internalPage.value = undefined
                  }
                } }
              >
                { { prepend: () => <span>跳至</span> } }
              </Input>
            </li>
          ) }
        </ul>
      </props.tag>
    )
  },
})

export type Pagination = InstanceType<typeof Pagination>
