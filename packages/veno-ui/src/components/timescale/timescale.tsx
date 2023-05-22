// Styles
import './styles/timescale.scss'

// Utils
import { computed, nextTick, ref, watch } from 'vue'
import { defineComponent } from '../../utils'
import { useProxiedModel } from '../../composables/proxied-model'

export const Timescale = defineComponent({
  name: 'VeTimescale',

  props: {
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 18,
    },
    color: {
      type: String,
      default: '#AAA',
    },
    unitWidth: {
      type: Number,
      default: 1,
    },
    unitStepSize: {
      type: Number,
      default: 30,
    },
    largeScaleWidth: {
      type: Number,
      default: 400,
    },
    devicePixelRatio: {
      type: Number,
      default: 2,
    },
  },

  emits: {
    'update:width': (_width: any) => true,
  },

  setup(props) {
    const canvas = ref<HTMLCanvasElement>()
    const context = ref<CanvasRenderingContext2D>()
    const width = useProxiedModel(props, 'width')
    const canvasWidth = computed(() => width.value * props.devicePixelRatio)
    const canvasHeight = computed(() => props.height * props.devicePixelRatio)

    watch(canvas, init)
    watch(() => props.unitWidth, render)

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

      function convertTo(num: number) {
        return `${ String(~~(num / 60)).padStart(2, '0') }:${ String(~~(num % 60)).padStart(2, '0') }`
      }

      function calcUint(unitWidth: number) {
        let smallScale = unitWidth
        let largeScale = smallScale * props.unitStepSize
        if (largeScale > props.largeScaleWidth) {
          return { unit: 'f', smallScale, largeScale, rate: 1 }
        }
        const value = props.largeScaleWidth / largeScale
        let rate = ~~value
        if (rate > 2) rate = Math.ceil(value / 5) * 5
        largeScale = largeScale * rate
        smallScale = largeScale / 10
        return { unit: 's', smallScale, largeScale, rate }
      }

      const { unit, largeScale, smallScale, rate } = calcUint(
        Math.max(props.unitWidth, 0.01),
      )

      for (let x = 0; x < canvasWidth.value; x += largeScale) {
        if (x > 0) {
          drawLine(x + 1, canvasHeight.value)
          drawText(x + canvasHeight.value / 4, unit === 'f' ? `${ String(x / largeScale) }f` : convertTo(x / largeScale * rate))
        }
        for (let x1 = x; x1 < x + largeScale; x1 += smallScale) {
          if (x1 === x || x1 >= x + largeScale) continue
          drawLine(x1 + 1, canvasHeight.value / 4)
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
