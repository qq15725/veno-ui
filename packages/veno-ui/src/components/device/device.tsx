// Styles
import './styles/device.scss'

// Utils
import { convertToUnit } from '@veno-ui/utils'
import { defineComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'
import { makeVariantProps, useVariant } from '../../composables/variant'
import { makeDeviceProps, useDevice } from '../../composables/device'

// Components
import { DeviceStatusBar } from './device-status-bar'

export const Device = defineComponent({
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
    headerColor: String,
    ...makeDeviceProps(),
    ...makeTagProps(),
    ...makeVariantProps(),
  },

  setup(props, { slots }) {
    const { colorClasses, colorStyles, variantClasses } = useVariant(props)
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
              <DeviceStatusBar
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
  },
})

export type Device = InstanceType<typeof Device>
