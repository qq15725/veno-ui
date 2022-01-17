// Styles
import './styles/layout.scss'

// Utils
import { defineComponent, useRender } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'
import { provideLayout, makeLayoutProps } from '../../composables/layout'

// Types
export type Layout = InstanceType<typeof Layout>

export const Layout = defineComponent({
  name: 'VeLayout',

  props: {
    ...makeTagProps(),
    ...makeLayoutProps(),
  },

  setup (props, { slots }) {
    const { layoutClasses, getLayoutItem, items } = provideLayout(props)

    useRender(() => (
      <props.tag
        class={ [
          've-layout',
          layoutClasses.value
        ] }
      >
        { slots }
      </props.tag>
    ))

    return {
      getLayoutItem,
      items
    }
  }
})

