// Styles
import './styles/code.scss'

// Utils
import { ref, computed, onMounted, watch } from 'vue'
import { defineComponent } from '../../utils'

// Composables
import { useHighlighter } from '../../composables/highlighter'

// Types
import type { PropType } from 'vue'

export const Code = defineComponent({
  name: 'VeCode',

  props: {
    /**
     * @zh: 需要高亮的代码
     */
    value: String,

    /**
     * @zh: 代码语言
     */
    language: {
      type: String,
      default: 'html',
    },

    /**
     * @zh: 显示代码语言
     */
    showLanguage: {
      type: Boolean,
      default: true,
    },

    /**
     * @zh: 显示行号
     */
    showLineNumbers: Boolean,

    /**
     * @zh: 高亮的行号
     */
    highlightedLineNumbers: Array as PropType<number[] | number[][]>,
  },

  setup (props, { slots }) {
    const highlighter = useHighlighter()
    const codeRef = ref<HTMLElement | null>(null)
    const code = computed(() => {
      return decodeURIComponent(props.value ?? '')
        .replace(/\n$/, '')
        .replace(/^\n/, '')
    })
    const lineNumbers = computed(() => {
      return code.value.split('\n').map((v, i) => i + 1)
    })
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

    async function setCode () {
      const el = codeRef.value
      if (!el) return
      el.innerHTML = await highlighter.value?.highlight(
        code.value,
        props.language
      )
    }

    onMounted(setCode)
    watch(() => props.language, setCode)
    watch(code, setCode)

    return () => {
      const hasHighlightedCode = !!code.value
      const hasLineNumbers = hasHighlightedCode && props.showLineNumbers
      const hasLanguage = hasHighlightedCode && props.showLanguage && props.language
      const hasPreformatted = hasHighlightedCode
      const Tag = hasHighlightedCode ? 'div' : 'code'

      return (
        <Tag
          class={ [
            've-code',
            {
              've-code--highlighted': hasHighlightedCode,
              've-code--show-line-numbers': hasLineNumbers,
            }
          ] }
        >
          { hasLineNumbers && (
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
                  <span class="ve-code__line-number">{ number }</span>
                </div>
              )) }
            </div>
          ) }

          { hasPreformatted && (
            <pre class="ve-code__preformatted"><code ref={ codeRef }>{ code.value }</code></pre>
          ) }

          { hasLanguage && (
            <span class="ve-code__language">{ props.language }</span>
          ) }

          { slots.default?.() }
        </Tag>
      )
    }
  }
})