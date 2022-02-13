// Styles
import './styles/tag-group.scss'

// Composables
import { makePaperProps, usePaper } from '../../composables/paper'
import { makeGroupProps, useGroup } from '../../composables/group'
import { provideDefaults } from '../../composables/defaults'

// Utilities
import { deepEqual, defineComponent } from '../../utils'
import { toRef } from 'vue'

// Types
import type { PropType } from 'vue'

export const TagGroupKey = Symbol.for('veno-ui:chip-group')

export const TagGroup = defineComponent({
  name: 'VeTagGroup',

  props: {
    column: Boolean,
    valueComparator: {
      type: Function as PropType<typeof deepEqual>,
      default: deepEqual,
    },

    ...makeGroupProps({
      selectedClass: 've-tag--active'
    } as const),
    ...makePaperProps({
      variant: 'contained-text'
    } as const),
  },

  emits: {
    'update:modelValue': (value: any) => true,
  },

  setup (props, { slots }) {
    const { paperClasses, paperStyles } = usePaper(props)
    const { isSelected, select, next, prev, selected } = useGroup(props, TagGroupKey)

    provideDefaults({
      VeTag: {
        color: toRef(props, 'color'),
        variant: toRef(props, 'variant'),
      },
    })

    return () => (
      <props.tag
        class={ [
          've-tag-group',
          {
            've-tag-group--column': props.column,
          },
          paperClasses.value,
        ] }
        style={ paperStyles.value }
      >
        { slots.default?.({
          isSelected,
          select,
          next,
          prev,
          selected: selected.value,
        }) }
      </props.tag>
    )
  },
})

export type TagGroup = InstanceType<typeof TagGroup>
