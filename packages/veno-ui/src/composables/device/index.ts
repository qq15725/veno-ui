// Utils
import { computed } from 'vue'
import { propsFactory, convertToUnit } from '../../utils'

export const deviceModels: Dictionary<DeviceModel> = {
  iphonex: {
    width: 375,
    height: 812,
    statusBarHeight: 24,
  },
  iphone6plus: {
    width: 414,
    height: 736,
    statusBarHeight: 24,
  },
  iphone7plus: {
    width: 414,
    height: 736,
    statusBarHeight: 24,
  },
  iphone8plus: {
    width: 414,
    height: 736,
    statusBarHeight: 24,
  },
  iphone6: {
    width: 375,
    height: 667,
    statusBarHeight: 24,
  },
  iphone7: {
    width: 375,
    height: 667,
    statusBarHeight: 24,
  },
  iphone8: {
    width: 375,
    height: 667,
    statusBarHeight: 24,
  },
}

export interface DeviceModel
{
  width: number | string,
  height: number | string,
  statusBarHeight: number,
}

export interface DeviceProps
{
  model?: string
  autoHeight: boolean
}

export const makeDeviceProps = propsFactory({
  model: String,
  autoHeight: Boolean,
}, 'device')

export function useDevice (props: DeviceProps) {
  const deviceModel = computed(() => {
    return props.model && props.model in deviceModels
      ? deviceModels[props.model]
      : {
        width: '100%',
        height: '100%',
        statusBarHeight: 0,
      }
  })

  const deviceStyles = computed(() => {
    return {
      width: convertToUnit(deviceModel.value.width),
      height: props.autoHeight ? null : convertToUnit(deviceModel.value.height),
      minHeight: props.autoHeight ? convertToUnit(deviceModel.value.height) : null,
    }
  })

  return {
    deviceModel,
    deviceStyles,
  }
}