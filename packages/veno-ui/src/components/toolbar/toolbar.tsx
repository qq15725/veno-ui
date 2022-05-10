// Styles
import './styles/toolbar.scss'

// Utils
import { computed } from 'vue'
import { convertToUnit, defineComponent, pick, propsFactory } from '../../utils'

// Composables
import { makePaperProps, usePaper } from '../../composables/paper'
import { provideDefaults } from '../../composables/defaults'

// Components
import { ToolbarTitle } from './toolbar-title'

// Types
export type Toolbar = InstanceType<typeof Toolbar>

export const makeToolbarProps = propsFactory({
  title: String,
  ...makePaperProps({
    tag: 'header',
    height: 64,
  } as const),
}, 'toolbar')

export function filterToolbarProps(attrs: Record<string, any>) {
  return pick(attrs, Object.keys(Toolbar.props) as any)
}

export const Toolbar = defineComponent({
  name: 'VeToolbar',

  props: makeToolbarProps(),

  setup(props, { slots }) {
    const { paperClasses, paperStyles } = usePaper(computed(() => ({
      ...props,
      height: undefined,
    })))

    provideDefaults({
      VeButton: {
        variant: 'text',
      },
    })

    return () => {
      const hasTitle = !!(props.title || slots.title)

      return (
        <props.tag
          class={ [
            've-toolbar',
            paperClasses.value,
          ] }
          style={ paperStyles.value }
        >
          <div
            className="ve-toolbar__wrapper"
            style={ { height: convertToUnit(props.height) } }
          >
            { slots.prepend && (
              <div className="ve-toolbar__prepend">
                { slots.prepend?.() }
              </div>
            ) }

            { hasTitle && (
              <ToolbarTitle text={ props.title }>
                { { text: slots.title } }
              </ToolbarTitle>
            ) }

            { slots.default?.() }

            { slots.append && (
              <div className="ve-toolbar__append">
                { slots.append?.() }
              </div>
            ) }
          </div>
        </props.tag>
      )
    }
  },
})
