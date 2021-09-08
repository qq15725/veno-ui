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
    appMainColor: String,
    batteryPercentage: {
      type: Number,
      default: 100,
    },
    mobileOperator: {
      type: String,
      default: '中国移动',
    },
    ...makeTagProps(),
    ...makeVariantProps(),
    ...makeDeviceProps(),
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
          { deviceModel.value.statusBarHeight > 0 && (
            <VeDeviceStatusBar
              height={ deviceModel.value.statusBarHeight }
              batteryPercentage={ props.batteryPercentage }
              mobileOperator={ props.mobileOperator }
            />
          ) }

          { slots.header && (
            <div class="ve-device__app-bar">
              { slots.header?.() }
            </div>
          ) }

          <div
            class="ve-device__app-main"
            style={ { background: props.appMainColor } }
          >
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