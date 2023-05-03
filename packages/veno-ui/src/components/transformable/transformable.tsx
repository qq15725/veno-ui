// Styles
import './styles/transformable.scss'

// Utils
import { computed, mergeProps, ref } from 'vue'
import { convertToUnit } from '@veno-ui/utils'
import { defineComponent } from '../../utils'
import { useTextColor } from '../../composables/color'

import { useProxiedModel } from '../../composables/proxied-model'
import type { PropType } from 'vue'

interface Anchor {
  type: 'rotate-top-left'
  | 'rotate-top-right'
  | 'rotate-bottom-left'
  | 'rotate-bottom-right'
  | 'resize-top'
  | 'resize-right'
  | 'resize-bottom'
  | 'resize-left'
  | 'resize-top-left'
  | 'resize-top-right'
  | 'resize-bottom-left'
  | 'resize-bottom-right'
  x: number
  y: number
  width: number
  height: number
  transparent?: boolean
}

interface Point {
  x: number
  y: number
}

function createCursorSvg(
  options: {
    type: 'rotate' | 'resize' | 'resize2'
    rotation: number
  },
) {
  const { type, rotation } = options

  let path: string
  switch (type) {
    case 'rotate':
      path = '<path d="M22.4789 9.45728L25.9935 12.9942L22.4789 16.5283V14.1032C18.126 14.1502 14.6071 17.6737 14.5675 22.0283H17.05L13.513 25.543L9.97889 22.0283H12.5674C12.6071 16.5691 17.0214 12.1503 22.4789 12.1031L22.4789 9.45728Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.4789 7.03223L27.4035 12.9945L21.4789 18.9521V15.1868C18.4798 15.6549 16.1113 18.0273 15.649 21.0284H19.475L13.5128 26.953L7.55519 21.0284H11.6189C12.1243 15.8155 16.2679 11.6677 21.4789 11.1559L21.4789 7.03223ZM22.4789 12.1031C17.0214 12.1503 12.6071 16.5691 12.5674 22.0284H9.97889L13.513 25.543L17.05 22.0284H14.5675C14.5705 21.6896 14.5947 21.3558 14.6386 21.0284C15.1157 17.4741 17.9266 14.6592 21.4789 14.1761C21.8063 14.1316 22.1401 14.1069 22.4789 14.1032V16.5284L25.9935 12.9942L22.4789 9.45729L22.4789 12.1031Z" fill="white"/>'
      break
    case 'resize':
      path = '<path d="m9 17.9907v.005l5.997 5.996.001-3.999h1.999 2.02v4l5.98-6.001-5.98-5.999.001 4.019-2.021.002h-2l.001-4.022zm1.411.003 3.587-3.588-.001 2.587h3.5 2.521v-2.585l3.565 3.586-3.564 3.585-.001-2.585h-2.521l-3.499-.001-.001 2.586z" fill="white"/><path d="m17.4971 18.9932h2.521v2.586l3.565-3.586-3.565-3.585v2.605h-2.521-3.5v-2.607l-3.586 3.587 3.586 3.586v-2.587z" fill="black"/>'
      break
    case 'resize2':
      path = '<path d="m19.7432 17.0869-4.072 4.068 2.829 2.828-8.473-.013-.013-8.47 2.841 2.842 4.075-4.068 1.414-1.415-2.844-2.842h8.486v8.484l-2.83-2.827z" fill="white"/><path d="m18.6826 16.7334-4.427 4.424 1.828 1.828-5.056-.016-.014-5.054 1.842 1.841 4.428-4.422 2.474-2.475-1.844-1.843h5.073v5.071l-1.83-1.828z" fill="black"/>'
      break
  }

  return `<svg height="32" width="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><filter id="shadow" color-interpolation-filters="sRGB"><feDropShadow dx="1" dy="1" stdDeviation="1.2" flood-opacity=".5"/></filter></defs><g fill="none" transform="rotate(${ rotation } 16 16)" filter="url(%23shadow)">${ path }</g></svg>`
    .replace(/"/g, '\'')
}

const cursors = {
  'rotate-top-left': (rotation: number) => createCursorSvg({ type: 'rotate', rotation: 360 + rotation }),
  'rotate-top-right': (rotation: number) => createCursorSvg({ type: 'rotate', rotation: 90 + rotation }),
  'rotate-bottom-left': (rotation: number) => createCursorSvg({ type: 'rotate', rotation: 270 + rotation }),
  'rotate-bottom-right': (rotation: number) => createCursorSvg({ type: 'rotate', rotation: 180 + rotation }),
  'resize-left': (rotation: number) => createCursorSvg({ type: 'resize', rotation: 180 + rotation }),
  'resize-top': (rotation: number) => createCursorSvg({ type: 'resize', rotation: 90 + rotation }),
  'resize-right': (rotation: number) => createCursorSvg({ type: 'resize', rotation: 180 + rotation }),
  'resize-bottom': (rotation: number) => createCursorSvg({ type: 'resize', rotation: 90 + rotation }),
  'resize-top-left': (rotation: number) => createCursorSvg({ type: 'resize2', rotation: 90 + rotation }),
  'resize-top-right': (rotation: number) => createCursorSvg({ type: 'resize2', rotation: 180 + rotation }),
  'resize-bottom-right': (rotation: number) => createCursorSvg({ type: 'resize2', rotation: 90 + rotation }),
  'resize-bottom-left': (rotation: number) => createCursorSvg({ type: 'resize2', rotation: 180 + rotation }),
}

function calculateRotation(point: Point, origin: Point, angle: number): Point {
  const radian = angle * Math.PI / 180
  return {
    x: (point.x - origin.x) * Math.cos(radian) - (point.y - origin.y) * Math.sin(radian) + origin.x,
    y: (point.x - origin.x) * Math.sin(radian) + (point.y - origin.y) * Math.cos(radian) + origin.y,
  }
}

function calculateCenter(point1: Point, point2: Point) {
  return {
    x: point1.x + ((point2.x - point1.x) / 2),
    y: point1.y + ((point2.y - point1.y) / 2),
  }
}

function calculateHypotenuse(point1: Point, point2: Point) {
  return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2)
}

export const Transformable = defineComponent({
  name: 'Transformable',

  props: {
    /**
     * @zh 位置大小及旋转
     */
    modelValue: {
      type: Object as PropType<{
        top: number
        left: number
        width: number
        height: number
        rotation: number
      }>,
      default: () => ({
        top: 0,
        left: 0,
        width: 100,
        height: 100,
        rotation: 0,
      }),
    },

    /**
     * @zh 可以移动
     */
    moveable: {
      type: Boolean,
      default: true,
    },

    /**
     * @zh 可以旋转
     */
    rotatable: {
      type: Boolean,
      default: true,
    },

    /**
     * @zh 可以调整尺寸
     */
    resizable: {
      type: Boolean,
      default: true,
    },

    /**
     * @zh 颜色
     */
    color: {
      type: String,
      default: 'primary',
    },

    /**
     * @zh 定位模式
     */
    position: {
      type: String as PropType<'absolute' | 'fixed'>,
      default: 'absolute',
    },

    /**
     * @zh 隐藏显示可拖拽的锚点
     */
    hideAnchors: {
      type: Boolean,
      default: false,
    },
  },

  emits: {
    'update:modelValue': (_modelValue: any) => true,
  },

  setup(props, { slots }) {
    const { textColorClasses, textColorStyles } = useTextColor(props, 'color')
    const model = useProxiedModel(props, 'modelValue', props.modelValue)
    const isTransforming = ref(false)
    const anchors = computed<Anchor[]>(() => {
      const { width, height } = model.value
      const size = 8
      const size1 = size * 1.6
      const size2 = size * 2.25
      return [
        { type: 'rotate-top-left', x: -size2, y: -size2, width: size2, height: size2 },
        { type: 'rotate-top-right', x: width, y: -size2, width: size2, height: size2 },
        { type: 'rotate-bottom-left', x: -size2, y: height, width: size2, height: size2 },
        { type: 'rotate-bottom-right', x: width, y: height, width: size2, height: size2 },
        { type: 'resize-top', x: 0, y: -size / 2, width, height: size },
        { type: 'resize-right', x: width - size / 2, y: 0, width: size, height },
        { type: 'resize-bottom', x: 0, y: height - size / 2, width, height: size },
        { type: 'resize-left', x: -size / 2, y: 0, width: size, height },
        { type: 'resize-top-left', x: -size / 2, y: -size / 2, width: size, height: size, transparent: false },
        { type: 'resize-top-right', x: width - size / 2, y: -size / 2, width: size, height: size, transparent: false },
        { type: 'resize-bottom-left', x: -size / 2, y: height - size / 2, width: size, height: size, transparent: false },
        { type: 'resize-bottom-right', x: width - size / 2, y: height - size / 2, width: size, height: size, transparent: false },
        { type: 'resize-top-left', x: -size1 / 2, y: -size1 / 2, width: size1, height: size1 },
        { type: 'resize-top-right', x: width - size1 / 2, y: -size1 / 2, width: size1, height: size1 },
        { type: 'resize-bottom-left', x: -size1 / 2, y: height - size1 / 2, width: size1, height: size1 },
        { type: 'resize-bottom-right', x: width - size1 / 2, y: height - size1 / 2, width: size1, height: size1 },
      ] as Anchor[]
    })

    function start(event: MouseEvent, index?: number) {
      event.preventDefault()
      event.stopPropagation()

      const { left, top, width, height, rotation } = model.value

      const anchor = index === undefined
        ? { type: 'move', x: 0, y: 0, width: 0, height: 0 }
        : anchors.value[index]
      const isMove = anchor.type === 'move'
      const isRotation = anchor.type.startsWith('rotate')
      const isHorizontal = anchor.type === 'resize-left' || anchor.type === 'resize-right'
      const isHorizontalVertical = anchor.type.split('-').length === 2

      const centerPoint = {
        x: left + width / 2,
        y: top + height / 2,
      }

      const startingPointBefore = {
        x: left + anchor.x + anchor.width / 2,
        y: top + anchor.y + anchor.height / 2,
      }

      const startingPoint = calculateRotation(
        startingPointBefore,
        centerPoint,
        isMove ? 0 : rotation,
      )

      const symmetricPoint = {
        x: centerPoint.x * 2 - startingPoint.x,
        y: centerPoint.y * 2 - startingPoint.y,
      }

      const client = {
        x: event.clientX,
        y: event.clientY,
      }

      const rotationBefore = Math.atan2(
        startingPoint.y - centerPoint.y,
        startingPoint.x - centerPoint.x,
      ) / (Math.PI / 180)

      function move(event: MouseEvent) {
        const updated: Record<string, any> = {}

        const clientOffset = {
          x: event.clientX - client.x,
          y: event.clientY - client.y,
        }

        const cursorPoint = {
          x: startingPoint.x + clientOffset.x,
          y: startingPoint.y + clientOffset.y,
        }

        if (isMove) {
          updated.left = cursorPoint.x
          updated.top = cursorPoint.y
        } else if (isRotation) {
          const rotationAfter = Math.atan2(
            cursorPoint.y - centerPoint.y,
            cursorPoint.x - centerPoint.x,
          ) / (Math.PI / 180)

          updated.rotation = rotation + rotationAfter - rotationBefore
        } else if (isHorizontalVertical) {
          const rotationBefore = calculateRotation(cursorPoint, startingPoint, -rotation)
          const rotationAfter = calculateRotation(
            isHorizontal
              ? { x: rotationBefore.x, y: startingPoint.y }
              : { x: startingPoint.x, y: rotationBefore.y },
            startingPoint,
            rotation,
          )

          const newCenterPoint = {
            x: rotationAfter.x - (rotationAfter.x - symmetricPoint.x) / 2,
            y: rotationAfter.y + (symmetricPoint.y - rotationAfter.y) / 2,
          }

          const hypotenuse = calculateHypotenuse(rotationAfter, symmetricPoint)

          if (isHorizontal) {
            updated.width = hypotenuse
            updated.height = model.value.height
          } else {
            updated.width = model.value.width
            updated.height = hypotenuse
          }

          updated.left = newCenterPoint.x - (updated.width / 2)
          updated.top = newCenterPoint.y - (updated.height / 2)
        } else {
          const newCenterPoint = calculateCenter(cursorPoint, symmetricPoint)

          const points = [
            calculateRotation(cursorPoint, newCenterPoint, -rotation),
            calculateRotation(symmetricPoint, newCenterPoint, -rotation),
          ]

          const [minX, maxX] = points[0].x > points[1].x
            ? [points[1].x, points[0].x]
            : [points[0].x, points[1].x]

          const [minY, maxY] = points[0].y > points[1].y
            ? [points[1].y, points[0].y]
            : [points[0].y, points[1].y]

          updated.width = maxX - minX
          updated.height = maxY - minY
          updated.left = minX
          updated.top = minY
        }

        for (const [key, value] of Object.entries(updated)) {
          updated[key] = ~~value
        }

        if (
          ('width' in updated && updated.width <= 0)
          || ('height' in updated && updated.height <= 0)
        ) return

        model.value = {
          ...model.value,
          ...updated,
        }
      }

      function end() {
        document.removeEventListener('pointermove', move)
        document.removeEventListener('pointerup', end, true)
        isTransforming.value = false
      }

      document.addEventListener('pointermove', move)
      document.addEventListener('pointerup', end, true)
      isTransforming.value = true
    }

    return () => {
      const { left, top, width, height, rotation } = model.value
      const radian = rotation * Math.PI / 180
      const cos = Math.cos(radian)
      const sin = Math.sin(radian)

      const moveable = props.moveable
        ? { onPointerdown: start }
        : {}

      const transform = `matrix(${ cos }, ${ sin }, ${ -sin }, ${ cos }, ${ left }, ${ top })`

      return (
        <>
          { slots.default?.({
            value: model.value,
            moveable,
            props: mergeProps(moveable, {
              style: {
                width: convertToUnit(width),
                height: convertToUnit(height),
                transform,
              },
            }),
          }) }

          <svg
            class={ [
              've-transformable',
              ...textColorClasses.value,
            ] }
            style={ {
              position: props.position,
              ...textColorStyles.value,
            } }
            width={ width }
            height={ height }
            transform={ transform }
          >
            <rect
              width="100%"
              height="100%"
              fill="none"
              class={ [
                've-transformable__anchor',
                (isTransforming.value || props.hideAnchors) && 've-transformable__anchor--hide',
              ] }
            />

            <g pointer-events="all">
              { anchors.value
                .filter(anchor => {
                  const { type } = anchor
                  return !(
                    (!props.resizable && type.startsWith('resize'))
                    || (!props.rotatable && type.startsWith('rotate'))
                  )
                })
                .map((anchor, index) => {
                  const { type, x, y, width, height, transparent = true } = anchor

                  return (
                    <rect
                      aria-label={ type }
                      x={ x }
                      y={ y }
                      width={ width }
                      height={ height }
                      fill="white"
                      onPointerdown={ (event: PointerEvent) => start(event, index) }
                      class={ [
                        've-transformable__anchor',
                        transparent
                          ? 've-transformable__anchor--transparent'
                          : 've-transformable__anchor--pointer-none',
                        (isTransforming.value || props.hideAnchors) && 've-transformable__anchor--hide',
                      ] }
                      cursor={
                        isTransforming.value
                          ? 'auto'
                          : `url("data:image/svg+xml,${ cursors[type](rotation) }") 16 16, pointer`
                      }
                    />
                  )
                }) }
            </g>
          </svg>
        </>
      )
    }
  },
})

export type Transformable = InstanceType<typeof Transformable>
