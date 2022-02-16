// Styles
import './styles/date-picker-panel.scss'

// Utils
import { computed, inject, ref, watch } from 'vue'
import { createRange, defineComponent } from '../../utils'

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
import type { DateInstance } from '../../composables/date'

// Constants
const ROWS_COUNT = 6
const COLS_COUNT = 7
const CELLS_COUNT = ROWS_COUNT * COLS_COUNT
const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六'] as const

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
     * @zh 时间值
     */
    modelValue: String,

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
    const range = inject(DateRangeKey, null)

    function formatter (date: DateInstance): string {
      return typeof props.format === 'string'
        ? date.format(props.format)
        : props.format(date)
    }

    function valueFormatter (date: DateInstance) {
      return createDate(formatter(date)).valueOf()
    }

    const firstDayOfWeek = computed(() => Number(props.firstDayOfWeek))
    const model = useProxiedModel(
      props, 'modelValue', props.modelValue,
      v => createDate(v),
      v => formatter(v)
    )
    const now = valueFormatter(createDate())
    const selected = computed(() => valueFormatter(model.value))
    const weekdays = computed(() => createRange(7).map(i => WEEKDAYS[(i + firstDayOfWeek.value) % 7]))

    const internalModel = ref(model.value.startOf('month'))
    watch(model, val => {
      internalModel.value = val.startOf('month')
    })

    const rows = computed(() => {
      const sharedProps = {
        icon: true,
        variant: 'text',
        shape: 'circle',
        size: 'small',
      } as const
      const cells: { props: Record<string, any>, value?: number }[] = []
      const weekDay = Number(internalModel.value.format('d'))
      const offsetDay = firstDayOfWeek.value - weekDay - 1
      const month = internalModel.value.format('M')
      let date = internalModel.value.add(offsetDay, 'day')
      createRange(CELLS_COUNT).forEach(_ => {
        const current = date
        date = date.add(1, 'day')
        const value = valueFormatter(current)
        const isActive = value === selected.value
        const isToday = now == value
        const variant = isActive ? 'contained' : isToday ? 'outlined' : 'text'
        const color = isActive || isToday ? props.activeColor : undefined

        function onClick () {
          model.value = current
        }

        cells.push({
          props: {
            ...sharedProps,
            variant,
            color,
            text: current.format('D'),
            onClick,
            class: [
              've-date-picker-panel__day',
              {
                've-date-picker-panel__day--other-month': current.format('M') !== month
              }
            ],
          },
          value,
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

      return {
        prevDouble: {
          ...sharedProps,
          icon: props.prevDoubleIcon,
          onClick: prevYear,
        },
        prev: {
          ...sharedProps,
          icon: props.prevIcon,
          onClick: prevMonth,
        },
        date: {
          ...sharedProps,
          shape: 'rounded',
          text: internalModel.value.format('YYYY-MM'),
        } as const,
        next: {
          ...sharedProps,
          icon: props.nextIcon,
          onClick: nextMonth,
        },
        nextDouble: {
          ...sharedProps,
          icon: props.nextDoubleIcon,
          onClick: nextYear,
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
                { rows.value.map(cols => (
                  <div class="ve-date-picker-panel__row">
                    { cols.map(col => (
                      <div
                        class={ [
                          've-date-picker-panel__cell',
                          {
                            've-date-picker-panel__cell--in-range': col.value && range?.inRange(col.value),
                          },
                        ] }
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