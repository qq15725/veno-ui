// Styles
import './styles/layout.scss'

// Utils
import { defineComponent, useRender } from '../../utils'

// Composables
import { provideLayout, makeLayoutProps } from '../../composables/layout'

// Types
export type Layout = InstanceType<typeof Layout>

export const Layout = defineComponent({
  name: 'VeLayout',

  props: makeLayoutProps(),

  setup (props, { slots }) {
    const { layoutClasses, getLayoutItem, items } = provideLayout(props)

    useRender(() => (
      <div class={ layoutClasses.value }>
        { slots.default?.() }
      </div>
    ))

    return {
      getLayoutItem,
      items
    }
  }
})

