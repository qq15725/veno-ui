// Utils
import { ref } from 'vue'
import {
  acceleratedEasing,
  deceleratedEasing,
  defineComponent,
  nullifyTransforms
} from '../../utils'

// Composables
import { useSharedClickTarget } from '../../composables/shared-click-target'

// Components
import { Transition } from 'vue'

// Types
import type { PropType } from 'vue'

export const DialogTransition = defineComponent({
  name: 'VeDialogTransition',

  props: {
    target: Object as PropType<HTMLElement>,
  },

  setup (props, { slots }) {
    const { clickTargetEl } = useSharedClickTarget()
    const targetEl = ref<HTMLElement>()

    const getTransform = (el: Element) => {
      let transform = 'translate(0px, 0px) scale(0.1)'

      if (targetEl.value && document.documentElement.contains(targetEl.value)) {
        const { x, y } = getDimensions(targetEl.value, el as HTMLElement)
        transform = `translate(${ x }px, ${ y }px) scale(0.1)`
      }
      return transform
    }

    const functions = {
      onBeforeEnter (el: Element) {
        (el as HTMLElement).style.pointerEvents = 'none'
      },
      async onEnter (el: Element, done: () => void) {
        await new Promise(resolve => requestAnimationFrame(resolve))

        targetEl.value = props.target ?? clickTargetEl.value

        el.animate([
          { transform: getTransform(el), opacity: 0 },
          { transform: '' },
        ], {
          duration: 225,
          easing: deceleratedEasing,
        }).finished.then(() => done())
      },
      onAfterEnter (el: Element) {
        (el as HTMLElement).style.removeProperty('pointer-events')
      },
      onBeforeLeave (el: Element) {
        (el as HTMLElement).style.pointerEvents = 'none'
      },
      async onLeave (el: Element, done: () => void) {
        await new Promise(resolve => requestAnimationFrame(resolve))

        el.animate([
          { transform: '' },
          { transform: getTransform(el), opacity: 0 },
        ], {
          duration: 125,
          easing: acceleratedEasing,
        }).finished.then(() => done())
      },
      onAfterLeave (el: Element) {
        (el as HTMLElement).style.removeProperty('pointer-events')
      },
    }

    return () => {
      return (
        <Transition
          name="dialog-transition"
          { ...functions }
          css={ false }
          v-slots={ slots }
        />
      )
    }
  },
})

function getDimensions (target: HTMLElement, el: HTMLElement) {
  const targetBox = target.getBoundingClientRect()
  const elBox = nullifyTransforms(el)
  const [originX, originY] = getComputedStyle(el)
    .transformOrigin
    .split(' ')
    .map(v => parseFloat(v))
  const [anchorSide, anchorOffset] = getComputedStyle(el)
    .getPropertyValue('--ve-overlay-anchor-origin')
    .split(' ')

  let offsetX = targetBox.left + targetBox.width / 2
  if (anchorSide === 'left' || anchorOffset === 'left') {
    offsetX -= targetBox.width / 2
  } else if (anchorSide === 'right' || anchorOffset === 'right') {
    offsetX += targetBox.width / 2
  }

  let offsetY = targetBox.top + targetBox.height / 2
  if (anchorSide === 'top' || anchorOffset === 'top') {
    offsetY -= targetBox.height / 2
  } else if (anchorSide === 'bottom' || anchorOffset === 'bottom') {
    offsetY += targetBox.height / 2
  }

  return {
    x: offsetX - (originX + elBox.left),
    y: offsetY - (originY + elBox.top),
  }
}
