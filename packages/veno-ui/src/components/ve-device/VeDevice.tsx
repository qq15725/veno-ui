import './styles/ve-device.scss'

import { defineComponent } from 'vue'

import { makeTagProps } from '../../composables/tag'
import { makeVariantProps, useVariant } from '../../composables/variant'
import { makeDeviceProps, useDevice } from '../../composables/device'
import { convertToUnit } from '../../utils'

export default defineComponent({
  props: {
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
          { deviceModel.value.statusBarHeight && (
            <div
              class="ve-device__status-bar"
              style={ {
                height: convertToUnit(deviceModel.value.statusBarHeight),
              } }
            >
              上午10:00
            </div>
          ) }

          { slots.header && (
            <div class="ve-device__app-bar">
              { slots.header?.() }
            </div>
          ) }

          <div class="ve-device__app-main">{ slots.default?.() }</div>

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