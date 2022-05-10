// Styles
import './styles/device-status-bar.scss'

// Utils
import { computed, onBeforeUnmount, ref, unref } from 'vue'
import { convertToUnit, genericComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'
import { makeColorProps, useColor } from '../../composables/color'

// Types
export type DeviceStatusBar = InstanceType<typeof DeviceStatusBar>

export const DeviceStatusBar = genericComponent()({
  name: 'VeDeviceStatusBar',

  props: {
    height: {
      type: Number,
      default: 20,
    },
    battery: {
      type: Number,
      default: 100,
    },
    operator: {
      type: String,
      default: 'Z+',
    },
    ...makeTagProps(),
    ...makeColorProps(),
  },

  setup(props) {
    function getClockValue() {
      const now = new Date()
      const hour = now.getHours()
      const minute = now.getMinutes()
      let text = hour >= 12 ? '下午' : '上午'
      text += `${ Math.abs(hour - 12) }:`
      text += minute > 10 ? minute : `0${ minute }`
      return text
    }

    const clock = ref(getClockValue())

    const clockTimer = setInterval(() => {
      clock.value = getClockValue()
    }, 1000)

    onBeforeUnmount(() => {
      clearInterval(clockTimer)
    })

    const { colorClasses, colorStyles } = useColor(computed(() => {
      const { textColor, color } = unref(props)
      return {
        background: color,
        text: textColor,
      }
    }))

    return () => {
      return (
        <props.tag
          class={ [
            've-device-status-bar',
            colorClasses.value,
          ] }
          style={ [
            {
              height: convertToUnit(props.height),
            },
            colorStyles.value,
          ] }
        >
          <div className="ve-device-status-bar__clock">{ clock.value }</div>
          <div className="ve-device-status-bar__mobile-signal">
            { [...Array(4)].map(_ => <div />) }
          </div>
          <div className="ve-device-status-bar__mobile-operator">{ props.operator }</div>
          <div className="ve-device-status-bar__wifi-signal">
            { [...Array(3)].map(_ => <div />) }
          </div>
          <div className="ve-device-status-bar__spacer" />
          <div className="ve-device-status-bar__battery-percentage">
            { props.battery }%
          </div>
          <div className="ve-device-status-bar__battery">
            <div style={ { width: `${ props.battery }%` } } />
          </div>
        </props.tag>
      )
    }
  },
})
