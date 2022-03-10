// Styles
import './styles/code.scss'

// Utils
import { computed, onMounted, ref, watch } from 'vue'
import { defineComponent, flattenFragments } from '../../utils'

// Composables
import { makeThemeProps, provideTheme } from '../../composables/theme'
import { makeShapeProps, useShape } from '../../composables/shape'
import { useHighlighter } from '../../composables/highlighter'
import { useBackgroundColor } from '../../composables/color'
import { makeScrollbar, useScrollbar } from '../../composables/scrollbar'

// Types
import type { PropType } from 'vue'

export const Code = defineComponent({
  name: 'VeCode',

  props: {
    /**
     * @zh: 需要高亮的代码
     */
    code: [String, Object],

    /**
     * @zh: 背景颜色
     */
    color: String,

    /**
     * @zh: 显示代码语言
     */
    showLanguage: Boolean,

    /**
     * @zh 显示行号
     */
    showLineNumbers: Boolean,

    /**
     * @zh: 高亮的行号
     */
    highlightedLineNumbers: Array as PropType<number[] | number[][]>,

    /**
     * @zh 使用行内样式
     */
    inline: Boolean,

    /**
     * @zh: 代码语言
     */
    language: {
      type: String,
      default: 'text',
    },

    ...makeThemeProps(),
    ...makeShapeProps(),
    ...makeScrollbar(),
  },

  setup (props, { slots }) {
    const { themeClasses } = provideTheme(props)
    const { shapeClasses } = useShape(props)
    const highlighter = useHighlighter()
    const { scrollbarClasses } = useScrollbar(props)
    const code = computed(() => {
      let value = ''
      if (props.code) {
        value = typeof props.code === 'object'
          ? JSON.stringify(props.code, null, 2)
          : props.code ?? ''
      } else if (slots.default) {
        value = flattenFragments(slots.default()).filter(node =>
          node.children && typeof node.children === 'string'
        )[0]?.children as string
      }
      return decodeURIComponent(value)
        .replace(/\n$/, '')
        .replace(/^\n/, '')
    })
    const highlightedCode = ref()
    const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(
      props, 'color'
    )
    const language = computed(() => props.code === 'object' ? 'json' : props.language)
    const lineNumbers = computed(() => code.value.split('\n').map((v, i) => i + 1))
    const highlightedLines = computed(() => {
      return lineNumbers.value.filter(lineNumber => {
        return props.highlightedLineNumbers?.some(v => {
          let start = v, end
          {
            if (typeof v === 'object') {
              [start, end] = v
            }
          }
          if (start && end) {
            return lineNumber >= start && lineNumber <= end
          }
          return lineNumber === start
        })
      })
    })

    const highlight = async () => {
      highlightedCode.value = await highlighter.value?.highlight(
        code.value,
        language.value
      )
    }

    onMounted(highlight)
    watch([code, language], highlight)

    return () => {
      if (props.inline) {
        return (
          <code
            class={ [
              've-code',
              've-code--inline',
              themeClasses.value,
              shapeClasses.value,
              backgroundColorClasses.value
            ] }
            style={ backgroundColorStyles.value }
            v-html={ highlightedCode.value }
          />
        )
      }

      const showLines = props.showLineNumbers
        || !!props.highlightedLineNumbers?.length

      return (
        <div
          class={ [
            've-code',
            've-code--block',
            {
              've-code--show-line-numbers': !!props.showLineNumbers,
            },
            themeClasses.value,
            shapeClasses.value,
            backgroundColorClasses.value
          ] }
          style={ backgroundColorStyles.value }
        >
          { showLines && (
            <div class="ve-code__lines">
              { lineNumbers.value.map(number => (
                <div class="ve-code__line">
                  { highlightedLines.value.includes(number) && (
                    <div class="ve-code__line-overlay" v-html={ `&nbsp;` } />
                  ) }

                  { props.showLineNumbers
                    ? <span class="ve-code__line-number">{ number }</span>
                    : <br /> }
                </div>
              )) }
            </div>
          ) }

          <pre class={ [
            've-code__preformatted',
            scrollbarClasses.value,
          ] }><code v-html={ highlightedCode.value } /></pre>

          { props.showLanguage && (
            <span class="ve-code__language">{ language.value }</span>
          ) }
        </div>
      )
    }
  }
})