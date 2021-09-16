import {
  ref,
  computed
} from 'vue'

import { propsFactory, convertToUnit } from '../utils'

interface DragProps
{
  left: number
  top: number
  draggable?: boolean
}

export const makeDragProps = propsFactory({
  top: {
    type: Number,
    default: 0,
  },
  left: {
    type: Number,
    default: 0,
  },
  draggable: Boolean,
}, 'drag')

export function useDrag (props: DragProps = { top: 0, left: 0, draggable: false }) {
  const el = ref<HTMLElement | null>(null)

  const state = ref({
    type: '',
    startX: 0,
    startY: 0,
    moveX: 0,
    moveY: 0,
    x: props.left,
    y: props.top,
  })

  function start (x: number, y: number) {
    state.value.startX = x
    state.value.startY = y
    state.value.moveX = x
    state.value.moveY = y
    state.value.type = 'start'
  }

  function move (x: number, y: number) {
    state.value.moveX = x
    state.value.moveY = y
    state.value.type = 'move'
  }

  function end () {
    state.value.x += state.value.moveX - state.value.startX
    state.value.y += state.value.moveY - state.value.startY
    state.value.startX = 0
    state.value.startY = 0
    state.value.moveX = 0
    state.value.moveY = 0
    state.value.type = 'end'
  }

  function mousedown (e: MouseEvent) {
    el.value = e.target as HTMLElement
    if (props?.draggable) {
      el.value?.setAttribute('draggable', 'true')
      el.value?.addEventListener('dragstart', dragstart)
      el.value?.addEventListener('drag', drag)
      el.value?.addEventListener('dragend', dragend)
    } else {
      window.addEventListener('mousemove', mousemove)
    }
    window.addEventListener('mouseup', mouseup)
    start(e.clientX, e.clientY)
    e.stopPropagation()
  }

  function mousemove (e: MouseEvent) {
    move(e.clientX, e.clientY)
  }

  function mouseup (e: MouseEvent) {
    if (props?.draggable) {
      el.value?.removeAttribute('draggable')
    } else {
      window.removeEventListener('mousemove', mousemove)
      window.removeEventListener('mouseup', mouseup)
      end()
    }
  }

  function touchstart (e: TouchEvent) {
    el.value = e.target as HTMLElement
    if (props?.draggable) {
      el.value?.setAttribute('draggable', 'true')
      el.value?.addEventListener('dragstart', dragstart)
      el.value?.addEventListener('drag', drag)
      el.value?.addEventListener('dragend', dragend)
    } else {
      window.addEventListener('touchmove', touchmove)
      window.addEventListener('touchend', touchend)
    }
    start(e.touches[0].clientX, e.touches[0].clientY)
    e.stopPropagation()
  }

  function touchmove (e: TouchEvent) {
    move(e.touches[0].clientX, e.touches[0].clientY)
  }

  function touchend (e: TouchEvent) {
    window.removeEventListener('touchmove', touchmove)
    window.removeEventListener('touchend', touchend)
    end()
  }

  function dragstart (e: DragEvent) {
    if (e.dataTransfer) {
      e.dataTransfer.setData('Text', el.value?.textContent || '')
      e.dataTransfer.effectAllowed = 'move'
    }
  }

  function drag (e: DragEvent) {
    move(e.clientX, e.clientY)
  }

  function dragend (e: DragEvent) {
    el.value?.removeAttribute('draggable')
    el.value?.removeEventListener('dragstart', dragstart)
    el.value?.removeEventListener('drag', drag)
    el.value?.removeEventListener('dragend', dragend)
    el.value = null
    end()
  }

  const dragStyles = computed(() => {
    const x = convertToUnit(state.value.x + state.value.moveX - state.value.startX)
    const y = convertToUnit(state.value.y + state.value.moveY - state.value.startY)
    return {
      transform: `translate3d(${ x }, ${ y }, 0)`,
    }
  })

  return {
    dragStyles,
    state,
    el,
    on: {
      touchstart,
      mousedown,
    },
  }
}