// Styles
import './styles/date-picker-panel.scss'

// Utils
import { computed, inject, ref, watch } from 'vue'
import { createRange, defineComponent, wrapInArray } from '../../utils'

// Components
import { Card } from '../card'
import { Button } from '../button'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { createDate } from '../../composables/date'

// InjectionKeys
import { DateRangeKey } from './date-range-picker-panel'

// Types
import type { PropType } from 'vue'
import type { DateInstance, DateOptions } from '../../composables/date'

// Constants
const ROWS_COUNT = 6
const COLS_COUNT = 7
const CELLS_COUNT = ROWS_COUNT * COLS_COUNT
const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六'] as const

interface CELL {
  isActive?: boolean,
  selectedIndex?: number,
  isOtherMonth?: boolean,
  text?: string,
  value?: number,
  props: Record<string, any>,
}

export const DatePickerPanel = defineComponent({
  name: 'VeDatePickerPanel',

  props: {
    /**
     * @zh 激活的日期的按钮颜色
     */
    activeColor: {
      type: String,
      default: 'primary',
    },

    /**
     * @zh 每周的第一天是周几（0 - 周日、1 - 周一）。
     */
    firstDayOfWeek: {
      type: [String, Number],
      default: 0,
      validator: (val: string | number) => Number(val) in WEEKDAYS
    },

    /**
     * @zh 时间格式化
     */
    format: {
      type: [String, Function] as PropType<string | ((date: DateInstance) => string)>,
      default: 'YYYY-MM-DD',
    },

    /**
     * @zh 最大时间值
     */
    max: String as PropType<DateOptions>,

    /**
     * @zh 最小时间值
     */
    min: String as PropType<DateOptions>,

    /**
     * @zh 时间值
     */
    modelValue: String as PropType<DateOptions>,

    /**
     * @zh 双箭头往前翻页图标
     */
    prevDoubleIcon: {
      type: String,
      default: '$prevDouble',
    },

    /**
     * @zh 单箭头往前翻页图标
     */
    prevIcon: {
      type: String,
      default: '$prev',
    },

    /**
     * @zh 单箭头往后翻页图标
     */
    nextIcon: {
      type: String,
      default: '$next',
    },

    /**
     * @zh 双箭头往后翻页图标
     */
    nextDoubleIcon: {
      type: String,
      default: '$nextDouble',
    },
  },

  emits: {
    'update:modelValue': (value: string) => true,
  },

  setup (props, { slots }) {
    const firstDayOfWeek = computed(() => Number(props.firstDayOfWeek))
    const max = computed(() => props.max ? createDate(props.max) : undefined)
    const min = computed(() => props.min ? createDate(props.min) : undefined)
    const model = useProxiedModel(
      props, 'modelValue', props.modelValue,
      v => createDate(v),
      v => formatter(v)
    )
    const range = inject(DateRangeKey, null)
    const selected = computed(() => {
      if (range) {
        return range.selected.value.map(v => valueFormatter(v.startOf('day')))
      }
      return wrapInArray(valueFormatter(model.value.startOf('day')))
    })
    const weekdays = computed(() => createRange(7).map(i => WEEKDAYS[(i + firstDayOfWeek.value) % 7]))
    const internalModel = ref(model.value.startOf('month'))
    const month = computed(() => internalModel.value.format('M'))
    watch(model, val => {
      internalModel.value = val.startOf('month')
    })

    function formatter (date: DateInstance): string {
      return typeof props.format === 'string'
        ? date.format(props.format)
        : props.format(date)
    }

    function valueFormatter (date: DateInstance) {
      return createDate(formatter(date)).valueOf()
    }

    const rows = computed(() => {
      const now = valueFormatter(createDate().startOf('day'))
      const sharedProps = {
        icon: true,
        variant: 'text',
        shape: 'circle',
        size: 'small',
      } as const
      const cells: CELL[] = []
      const weekDay = Number(internalModel.value.format('d'))
      const offsetDay = firstDayOfWeek.value - weekDay - 1
      let date = internalModel.value.add(offsetDay, 'day')
      createRange(CELLS_COUNT).forEach(_ => {
        const current = date
        date = date.add(1, 'day')
        const text = formatter(current)
        const value = valueFormatter(current)
        const selectedIndex = selected.value.findIndex(v => v === value)
        const isActive = selectedIndex > -1
        const isToday = now == value
        const variant = isActive ? 'contained' : isToday ? 'outlined' : 'text'
        const color = isActive || isToday ? props.activeColor : undefined

        function onClick () {
          if (range) {
            range.select(text)
            range.isPreview.value && range.preview(false)
          } else {
            model.value = current
          }
        }

        cells.push({
          isActive,
          selectedIndex,
          isOtherMonth: current.format('M') !== month.value,
          text,
          value,
          props: {
            ...sharedProps,
            variant,
            color,
            text: current.format('D'),
            onClick,
          },
        })
      })
      const rows = createRange(ROWS_COUNT).map((_, index) => {
        return cells.slice(index * COLS_COUNT, (index + 1) * COLS_COUNT)
      })
      rows.unshift(weekdays.value.map(text => ({
        props: {
          ...sharedProps,
          text,
          disabled: true,
        },
      })))
      return rows
    })

    const controls = computed(() => {
      const sharedProps = {
        variant: 'text',
        shape: 'circle',
        size: 'small',
      } as const

      const hasPrev = min.value
        ? internalModel.value.valueOf() > min.value.valueOf()
        : true
      const hasNext = max.value
        ? internalModel.value.valueOf() < max.value.valueOf()
        : true

      return {
        prevDouble: {
          ...sharedProps,
          icon: props.prevDoubleIcon,
          onClick: prevYear,
          disabled: !hasPrev,
        },
        prev: {
          ...sharedProps,
          icon: props.prevIcon,
          onClick: prevMonth,
          disabled: !hasPrev,
        },
        date: {
          ...sharedProps,
          shape: 'rounded',
          style: { fontSize: '14px' },
          text: internalModel.value.format('YYYY-MM'),
        } as const,
        next: {
          ...sharedProps,
          icon: props.nextIcon,
          onClick: nextMonth,
          disabled: !hasNext,
        },
        nextDouble: {
          ...sharedProps,
          icon: props.nextDoubleIcon,
          onClick: nextYear,
          disabled: !hasNext,
        },
      }
    })

    function prevYear () {
      internalModel.value = internalModel.value.subtract(1, 'year')
    }

    function nextYear () {
      internalModel.value = internalModel.value.add(1, 'year')
    }

    function prevMonth () {
      internalModel.value = internalModel.value.subtract(1, 'month')
    }

    function nextMonth () {
      internalModel.value = internalModel.value.add(1, 'month')
    }

    function onMousemove (text: string) {
      if (!range) return
      if (range.selected.value.length == 1) {
        !range.isPreview.value && range.preview(true)
      }
      if (range.isPreview.value) {
        range.select(text)
      }
    }

    return () => {
      return (
        <Card
          class="ve-date-picker-panel"
          divided
          onMousedown={ (e: MouseEvent) => e.preventDefault() }
        >
          { {
            ...slots,
            header: () => (
              <>
                <Button { ...controls.value.prevDouble } />
                <Button { ...controls.value.prev } />
                <div class="ve-date-picker-panel__date">
                  <Button { ...controls.value.date } />
                </div>
                <Button { ...controls.value.next } />
                <Button { ...controls.value.nextDouble } />
              </>
            ),
            text: () => (
              <>
                { rows.value.map((cols, i) => (
                  <div class="ve-date-picker-panel__row">
                    { cols.map(col => (
                      <div
                        key={ col.value }
                        class={ [
                          've-date-picker-panel__cell',
                          {
                            've-date-picker-panel__cell--active': col.isActive,
                            've-date-picker-panel__cell--other-month': col.isOtherMonth,
                            've-date-picker-panel__cell--range-in': col.value && range?.inRange(col.value),
                            've-date-picker-panel__cell--range-start': col.selectedIndex === 0,
                            've-date-picker-panel__cell--range-end': col.selectedIndex === 1,
                          },
                        ] }
                        onMousemove={ () => onMousemove(col.text!) }
                      >
                        <Button{ ...col.props } />
                      </div>
                    )) }
                  </div>
                )) }
              </>
            ),
          } }
        </Card>
      )
    }
  }
})