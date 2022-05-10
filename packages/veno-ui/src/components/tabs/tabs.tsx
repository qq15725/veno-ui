// Styles
import './styles/tabs.scss'

// Utils
import { computed, toRef } from 'vue'
import type { InjectionKey, PropType } from 'vue'
import { createSymbol, defineComponent } from '../../utils'

// Components
import { SlideGroup } from '../slide-group'

// Composables
import { makeDensityProps, useDensity } from '../../composables/density'
import { makeTagProps } from '../../composables/tag'
import { provideDefaults } from '../../composables/defaults'

// Types
import type { GroupInstance } from '../../composables/group'
import { Tab } from './tab'

export type TabItem = string | Record<string, any>

function parseItems(items: TabItem[] | undefined) {
  if (!items) return []

  return items.map(item => {
    if (typeof item === 'string') return { title: item, value: item }

    return item
  })
}

export const TabsKey: InjectionKey<GroupInstance> = createSymbol('tabs')

export const Tabs = defineComponent({
  name: 'VeTabs',

  props: {
    alignWithTitle: Boolean,
    color: String,
    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal',
    },
    fixedTabs: Boolean,
    items: {
      type: Array as PropType<TabItem[]>,
      default: () => ([]),
    },
    stacked: Boolean,
    backgroundColor: String,
    centered: Boolean,
    grow: Boolean,
    height: {
      type: [Number, String],
      default: undefined,
    },
    hideSlider: Boolean,
    optional: Boolean,
    right: Boolean,
    sliderColor: String,

    ...makeDensityProps(),
    ...makeTagProps(),
  },

  setup(props, { slots, attrs }) {
    const parsedItems = computed(() => parseItems(props.items))
    const { densityClasses } = useDensity(props)

    provideDefaults({
      Tab: {
        color: toRef(props, 'color'),
        direction: toRef(props, 'direction'),
        stacked: toRef(props, 'stacked'),
        fixed: toRef(props, 'fixedTabs'),
        sliderColor: toRef(props, 'sliderColor'),
        hideSlider: toRef(props, 'hideSlider'),
      },
    })

    return () => (
      <SlideGroup
        class={ [
          've-tabs',
          `ve-tabs--${ props.direction }`,
          {
            've-tabs--align-with-title': props.alignWithTitle,
            've-tabs--centered': props.centered,
            've-tabs--fixed-tabs': props.fixedTabs,
            've-tabs--grow': props.grow,
            've-tabs--right': props.right,
            've-tabs--stacked': props.stacked,
          },
          densityClasses.value,
        ] }
        role="tablist"
        symbol={ TabsKey }
        mandatory="force"
        direction={ props.direction }
        { ...attrs }
      >
        { slots.default
          ? slots.default()
          : parsedItems.value.map(item => (
          <Tab { ...item } key={ item.title } />
          )) }
      </SlideGroup>
    )
  },
})

export type Tabs = InstanceType<typeof Tabs>
