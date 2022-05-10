// Styles
import './styles/tab.scss'

// Utils
import { computed, ref, toRef, watch } from 'vue'
import type { PropType } from 'vue'
import { defineComponent, pick, standardEasing, useRender } from '../../utils'

// Components
import { Button } from '../../components/button'

// Composables
import { makeGroupItemProps, useGroupItem } from '../../composables/group'
import { makeRouterProps } from '../../composables/router'
import { makeTagProps } from '../../composables/tag'
import { makeThemeProps } from '../../composables/theme'
import { provideDefaults } from '../../composables/defaults'
import { useTextColor } from '../../composables/color'
import { TabsKey } from './tabs'

// Types

export const Tab = defineComponent({
  name: 'VeTab',

  props: {
    fixed: Boolean,
    icon: [Boolean, String],
    prependIcon: String,
    appendIcon: String,

    stacked: Boolean,
    title: String,

    ripple: {
      type: Boolean,
      default: true,
    },
    color: String,
    sliderColor: String,
    hideSlider: Boolean,

    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal',
    },

    ...makeTagProps(),
    ...makeRouterProps(),
    ...makeGroupItemProps({
      selectedClass: 've-tab--selected',
    }),
    ...makeThemeProps(),
  },

  setup(props, { slots, attrs }) {
    const { isSelected, select, selectedClass } = useGroupItem(props, TabsKey)
    const {
      textColorClasses: sliderColorClasses,
      textColorStyles: sliderColorStyles,
    } = useTextColor(props, 'sliderColor')
    const isHorizontal = computed(() => props.direction === 'horizontal')

    provideDefaults({
      VeButton: {
        block: toRef(props, 'fixed'),
        color: computed(() => isSelected.value ? props.color : undefined),
        variant: 'text',
      },
    }, {
      scoped: true,
    })

    const rootEl = ref<Button>()
    const sliderEl = ref<HTMLElement>()
    watch(isSelected, isSelected => {
      if (isSelected) {
        const prevEl: HTMLElement | undefined = rootEl.value?.$el.parentElement?.querySelector('.ve-tab--selected .ve-tab__slider')
        const nextEl = sliderEl.value

        if (!prevEl || !nextEl) return

        const color = getComputedStyle(prevEl).color

        const prevBox = prevEl.getBoundingClientRect()
        const nextBox = nextEl.getBoundingClientRect()

        const xy = isHorizontal.value ? 'x' : 'y'
        const XY = isHorizontal.value ? 'X' : 'Y'
        const rightBottom = isHorizontal.value ? 'right' : 'bottom'
        const widthHeight = isHorizontal.value ? 'width' : 'height'

        const prevPos = prevBox[xy]
        const nextPos = nextBox[xy]
        const delta = prevPos > nextPos
          ? prevBox[rightBottom] - nextBox[rightBottom]
          : prevBox[xy] - nextBox[xy]
        const origin
          = Math.sign(delta) > 0
            ? (isHorizontal.value ? 'right' : 'bottom')
            : Math.sign(delta) < 0
              ? (isHorizontal.value ? 'left' : 'top')
              : 'center'
        const size = Math.abs(delta) + (Math.sign(delta) < 0 ? prevBox[widthHeight] : nextBox[widthHeight])
        const scale = size / Math.max(prevBox[widthHeight], nextBox[widthHeight])
        const initialScale = prevBox[widthHeight] / nextBox[widthHeight]

        const sigma = 1.5
        nextEl.animate({
          backgroundColor: [color, ''],
          transform: [
            `translate${ XY }(${ delta }px) scale${ XY }(${ initialScale })`,
            `translate${ XY }(${ delta / sigma }px) scale${ XY }(${ (scale - 1) / sigma + 1 })`,
            '',
          ],
          transformOrigin: Array(3).fill(origin),
        }, {
          duration: 225,
          easing: standardEasing,
        })
      }
    })

    useRender(() => {
      const [btnProps] = pick(props, [
        'href',
        'to',
        'replace',
        'icon',
        'stacked',
        'prependIcon',
        'appendIcon',
        'ripple',
        'theme',
        'disabled',
      ])

      return (
        <Button
          ref={ rootEl }
          class={ [
            've-tab',
            selectedClass.value,
          ] }
          tabindex={ isSelected.value ? 0 : -1 }
          role="tab"
          aria-selected={ String(isSelected.value) }
          onClick={ () => !props.disabled && select(!isSelected.value) }
          { ...btnProps }
          { ...attrs }
        >
          { slots.default ? slots.default() : props.title }
          { !props.hideSlider && (
            <div
              ref={ sliderEl }
              className={ [
                've-tab__slider',
                sliderColorClasses.value,
              ] }
              style={ sliderColorStyles.value }
            />
          ) }
        </Button>
      )
    })

    return {
      isSelected,
    }
  },
})

export type Tab = InstanceType<typeof Tab>
