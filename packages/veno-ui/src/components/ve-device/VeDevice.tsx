import './styles/ve-device.scss'

import { defineComponent } from 'vue'

import { makeTagProps } from '../../composables/tag'
import { makeVariantProps, useVariant } from '../../composables/variant'
import { makeDeviceProps, useDevice } from '../../composables/device'
import { convertToUnit } from '../../utils'

import VeDeviceStatusBar from './VeDeviceStatusBar'

export default defineComponent({
  name: 'VeDevice',

  props: {
    battery: {
      type: Number,
      default: 100,
    },
    operator: {
      type: String,
      default: 'Z+',
    },
    headerColor: {
      type: String,
      default: '#FFF',
    },
    ...makeDeviceProps(),
    ...makeTagProps(),
    ...makeVariantProps({
      color: '#F5F5F5',
    } as const),
  },

  setup (props, { slots }) {
    const { colorClasses, colorStyles, variantClasses } = useVariant(props, 've-device')
    const { deviceModel, deviceStyles } = useDevice(props)

    return () => {
      return (
        <props.tag
          class={ [
            've-device',
            variantClasses.value,
            colorClasses.value,
          ] }
          style={ [
            deviceStyles.value,
            colorStyles.value,
          ] }
        >
          <div
            class="ve-device__app-header"
            style={ {
              backgroundColor: props.headerColor,
            } }
          >
            { deviceModel.value.statusBarHeight > 0 && (
              <VeDeviceStatusBar
                height={ deviceModel.value.statusBarHeight }
                battery={ props.battery }
                operator={ props.operator }
              />
            ) }

            { slots.header && (
              <div class="ve-device__app-bar">
                { slots.header?.() }
              </div>
            ) }
          </div>

          <div class="ve-device__app-main">
            { slots.default?.() }
          </div>

          {
            props.autoHeight
            && typeof deviceModel.value.height === 'number'
            && (
              <div
                class="ve-device__height-tip"
                style={ {
                  top: convertToUnit(deviceModel.value.height - 21),
                } }
              >
                { props.model }高度
              </div>
            )
          }
        </props.tag>
      )
    }
  }
})