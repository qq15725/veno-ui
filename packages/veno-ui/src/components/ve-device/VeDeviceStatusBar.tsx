import './styles/ve-device-status-bar.scss'

import { defineComponent, ref, onBeforeUnmount } from 'vue'

import { makeTagProps } from '../../composables/tag'
import { convertToUnit } from '../../utils'

export default defineComponent({
  name: 'VeDeviceStatusBar',

  props: {
    height: {
      type: Number,
      default: 20,
    },
    batteryPercentage: {
      type: Number,
      default: 100,
    },
    mobileOperator: {
      type: String,
      default: '中国移动',
    },
    ...makeTagProps(),
  },

  setup (props) {
    function getClockValue () {
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

    return () => {
      return (
        <props.tag
          class="ve-device-status-bar"
          style={ {
            height: convertToUnit(props.height),
          } }
        >
          <div class="ve-device-status-bar__clock">{ clock.value }</div>
          <div class="ve-device-status-bar__mobile-signal">
            { [...Array(4)].map(_ => <div />) }
          </div>
          <div class="ve-device-status-bar__mobile-operator">{ props.mobileOperator }</div>
          <div class="ve-device-status-bar__wifi-signal">
            { [...Array(3)].map(_ => <div />) }
          </div>
          <div class="ve-device-status-bar__spacer" />
          <div class="ve-device-status-bar__battery-percentage">
            { props.batteryPercentage }%
          </div>
          <div class="ve-device-status-bar__battery">
            <div style={ { width: `${ props.batteryPercentage }%` } } />
          </div>
        </props.tag>
      )
    }
  }
})