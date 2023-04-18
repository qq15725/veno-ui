// Styles
import './styles/layout.scss'

// Utils
import { useRender } from '@veno-ui/utils'
import { defineComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'
import { makeLayoutProps, provideLayout } from '../../composables/layout'

// Types
export type Layout = InstanceType<typeof Layout>

export const Layout = defineComponent({
  name: 'VeLayout',

  props: {
    ...makeTagProps(),
    ...makeLayoutProps(),
  },

  setup(props, { slots }) {
    const { layoutClasses, getLayoutItem, items } = provideLayout(props)

    useRender(() => (
      <props.tag
        class={ [
          've-layout',
          layoutClasses.value,
        ] }
      >
        { slots }
      </props.tag>
    ))

    return {
      getLayoutItem,
      items,
    }
  },
})

