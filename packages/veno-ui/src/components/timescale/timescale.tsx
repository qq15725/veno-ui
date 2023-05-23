// Styles
import './styles/timescale.scss'

// Utils
import { computed, nextTick, ref, toRef, watch } from 'vue'
import { defineComponent } from '../../utils'
import { useProxiedModel } from '../../composables/proxied-model'

export const Timescale = defineComponent({
  name: 'VeTimescale',

  props: {
    /**
     * @zh 宽度
     */
    width: {
      type: Number,
      default: 0,
    },

    /**
     * @zh 高度
     */
    height: {
      type: Number,
      default: 18,
    },

    /**
     * @zh 设备像素比
     */
    devicePixelRatio: {
      type: Number,
      default: 2,
    },

    /**
     * @zh 颜色
     */
    color: {
      type: String,
      default: '#AAA',
    },

    /**
     * @zh 单位值多少像素
     */
    scale: {
      type: Number,
      default: 1,
    },

    /**
     * @zh 步长
     */
    step: {
      type: Number,
      default: 30,
    },

    /**
     * @zh 文本函数
     */
    text: {
      type: Function,
      default: (num: number, { step }: { step: number }) => {
        if (num < step || num % step !== 0) return `${ num }f`
        num /= step
        return `${ String(~~(num / 60)).padStart(2, '0') }:${ String(~~(num % 60)).padStart(2, '0') }`
      },
    },
  },

  emits: {
    'update:width': (_width: any) => true,
  },

  setup(props) {
    const canvas = ref<HTMLCanvasElement>()
    const context = ref<CanvasRenderingContext2D>()
    const width = useProxiedModel(props, 'width')
    const height = toRef(props, 'height')
    const dpr = toRef(props, 'devicePixelRatio')
    const step = toRef(props, 'step')
    const canvasWidth = computed(() => width.value * dpr.value)
    const canvasHeight = computed(() => height.value * dpr.value)
    const targetWidth = computed(() => canvasWidth.value / 6)
    const valuePerPx = computed(() => Math.max(props.scale * dpr.value, targetWidth.value / (600 * step.value)))

    watch(canvas, init)
    watch(valuePerPx, render)

    function init() {
      if (!canvas.value) return
      if (!width.value) width.value = canvas.value.offsetWidth
      const context2d = canvas.value.getContext('2d')
      if (!context2d) return
      context.value = context2d
      nextTick().then(render)
    }

    function render() {
      if (!context.value || !canvas.value) return
      const context2d = context.value

      context2d?.clearRect(0, 0, canvas.value.width, canvas.value.height)
      context2d.fillStyle = context2d.strokeStyle = props.color
      context2d.lineWidth = 1
      context2d.font = `${ props.height }px Arial`

      function drawLine(x: number, height: number) {
        context2d.beginPath()
        context2d.moveTo(x, 0)
        context2d.lineTo(x, height)
        context2d.stroke()
      }

      function drawText(x: number, text: string) {
        context2d.fillText(text, x, canvasHeight.value)
      }

      function round(num: number, target: number) {
        return Math.ceil(num / target) * target
      }

      function calc(valuePerPx: number) {
        let largeScaleValue = targetWidth.value / valuePerPx
        if (largeScaleValue / step.value > 2) {
          largeScaleValue = round(largeScaleValue, step.value * 5)
        } else if (largeScaleValue > step.value) {
          largeScaleValue = round(largeScaleValue, step.value)
        } else if (largeScaleValue > 2) {
          largeScaleValue = round(largeScaleValue, 5)
        } else {
          largeScaleValue = round(largeScaleValue, 1)
        }
        const largeScale = largeScaleValue * valuePerPx
        const count = Math.min(largeScaleValue, 10)
        const smallScale = largeScale / count
        const smallScaleValue = largeScaleValue / count
        return { smallScale, smallScaleValue, largeScale }
      }

      const { smallScale, smallScaleValue, largeScale } = calc(valuePerPx.value)

      for (
        let count = ~~(largeScale / smallScale),
          h1 = canvasHeight.value,
          h2 = canvasHeight.value / 4,
          len = canvasWidth.value / smallScale,
          i = 0;
        i < len;
        i++
      ) {
        if (i > 0 && i % count === 0) {
          const x = i / count * largeScale + 1
          drawLine(x, h1)
          const text = props.text?.(i * smallScaleValue, { step: step.value })
          text !== undefined && drawText(x + h2, text)
        } else {
          const x = i * smallScale + 1
          drawLine(x, h2)
        }
      }
    }

    return () => (
      <canvas
        ref={ canvas }
        class="ve-time-axis"
        width={ canvasWidth.value }
        height={ canvasHeight.value }
      />
    )
  },
})

export type Timescale = InstanceType<typeof Timescale>
