// Utils
import { defineComponent } from '../../utils'

// Composables
import { makeGroupItemProps, useGroupItem } from '../../composables/group'
import { SlideGroupKey } from './slide-group'

export const SlideGroupItem = defineComponent({
  name: 'VeSlideGroupItem',

  props: {
    ...makeGroupItemProps(),
  },

  setup(props, { slots }) {
    const group = useGroupItem(props, SlideGroupKey)

    return () => slots.default?.({
      isSelected: group.isSelected.value,
      select: group.select,
    })
  },
})
