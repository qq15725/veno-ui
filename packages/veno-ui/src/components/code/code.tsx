// Styles
import './styles/code.scss'

// Utils
import { ref, computed, onMounted, watch } from 'vue'
import { defineComponent, flattenFragments } from '../../utils'

// Composables
import { useHighlighter } from '../../composables/highlighter'
import { useBackgroundColor } from '../../composables/color'

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
     * @zh: 显示行号或者指定高亮的行号
     */
    lineNumbers: [Boolean, Array] as PropType<boolean | number[] | number[][]>,

    /**
     * @zh: 高亮的行的背景颜色
     */
    highlightedLineColor: {
      type: String,
      default: 'warning',
    },

    /**
     * @zh 使用行内样式
     */
    inline: Boolean,

    /**
     * @zh: 代码语言
     */
    language: {
      type: String,
      default: 'html',
    },
  },

  setup (props, { slots }) {
    const highlighter = useHighlighter()
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
    const {
      backgroundColorClasses: highlightedLineColorClasses,
      backgroundColorStyles: highlightedLineColorStyles
    } = useBackgroundColor(props, 'highlightedLineColor')
    const language = computed(() => (
      typeof props.code === 'object'
        ? 'json'
        : props.language
    ))
    const lineNumbers = computed(() => code.value.split('\n').map((v, i) => i + 1))
    const highlightedLines = computed(() => {
      return lineNumbers.value.filter(lineNumber => {
        return typeof props.lineNumbers === 'boolean'
          ? false
          : props.lineNumbers?.some(v => {
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
              backgroundColorClasses.value
            ] }
            style={ backgroundColorStyles.value }
            v-html={ highlightedCode.value }
          />
        )
      }

      return (
        <div
          class={ [
            've-code',
            've-code--block',
            {
              've-code--line-numbers': !!props.lineNumbers,
            },
            backgroundColorClasses.value
          ] }
          style={ backgroundColorStyles.value }
        >
          { !!props.lineNumbers && (
            <div class="ve-code__lines">
              { lineNumbers.value.map(number => (
                <div
                  class={ [
                    've-code__line',
                    {
                      've-code__line--highlighted': highlightedLines.value.includes(number)
                    }
                  ] }
                >
                  <div
                    class={ [
                      've-code__line-overlay',
                      highlightedLineColorClasses.value,
                    ] }
                    style={ highlightedLineColorStyles.value }
                    v-html={ `&nbsp;` }
                  />

                  <span class="ve-code__line-number">{ number }</span>
                </div>
              )) }
            </div>
          ) }

          <pre class="ve-code__preformatted"><code v-html={ highlightedCode.value } /></pre>

          { props.showLanguage && (
            <span class="ve-code__language">{ language.value }</span>
          ) }
        </div>
      )
    }
  }
})