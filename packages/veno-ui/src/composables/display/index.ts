// Utils
import { inject, reactive, ref, toRefs, watchEffect } from 'vue'
import { mergeDeep } from '../../utils'

// Globals
import { IN_BROWSER, SUPPORTS_TOUCH } from '../../utils/globals'

// Types
import type { InjectionKey, ToRefs } from 'vue'

export type DisplayBreakpoint = keyof DisplayThresholds

export interface DisplayThresholds {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

export interface DisplayOptions {
  mobileBreakpoint?: number | DisplayBreakpoint
  thresholds?: Partial<DisplayThresholds>
}

export interface InternalDisplayOptions {
  mobileBreakpoint: number | DisplayBreakpoint
  thresholds: DisplayThresholds
}

export interface DisplayPlatform {
  android: boolean
  ios: boolean
  cordova: boolean
  electron: boolean
  chrome: boolean
  edge: boolean
  firefox: boolean
  opera: boolean
  win: boolean
  mac: boolean
  linux: boolean
  touch: boolean
  ssr: boolean
}

export interface DisplayInstance {
  xs: boolean
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean
  xxl: boolean
  smAndUp: boolean
  mdAndUp: boolean
  lgAndUp: boolean
  xlAndUp: boolean
  smAndDown: boolean
  mdAndDown: boolean
  lgAndDown: boolean
  xlAndDown: boolean
  name: DisplayBreakpoint
  height: number
  width: number
  mobile: boolean
  mobileBreakpoint: number | DisplayBreakpoint
  platform: DisplayPlatform
  thresholds: DisplayThresholds
}

export const DisplayKey: InjectionKey<ToRefs<DisplayInstance>> = Symbol.for('veno-ui:display')

const defaultDisplayOptions: DisplayOptions = {
  mobileBreakpoint: 'lg',
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560,
  },
}

const parseDisplayOptions = (options: DisplayOptions = defaultDisplayOptions) => {
  return mergeDeep(defaultDisplayOptions, options) as InternalDisplayOptions
}

// Cross-browser support as described in:
// https://stackoverflow.com/questions/1248081
function getClientWidth () {
  return IN_BROWSER ? Math.max(
    document.documentElement!.clientWidth,
    window.innerWidth
  ) : 0 // SSR
}

function getClientHeight () {
  return IN_BROWSER ? Math.max(
    document.documentElement!.clientHeight,
    window.innerHeight
  ) : 0 // SSR
}

function getPlatform (): DisplayPlatform {
  const userAgent = IN_BROWSER ? window.navigator.userAgent : 'ssr'

  function match (regexp: RegExp) {
    return Boolean(userAgent.match(regexp))
  }

  const android = match(/android/i)
  const ios = match(/iphone|ipad|ipod/i)
  const cordova = match(/cordova/i)
  const electron = match(/electron/i)
  const chrome = match(/chrome/i)
  const edge = match(/edge/i)
  const firefox = match(/firefox/i)
  const opera = match(/opera/i)
  const win = match(/win/i)
  const mac = match(/mac/i)
  const linux = match(/linux/i)
  const ssr = match(/ssr/i)

  return {
    android,
    ios,
    cordova,
    electron,
    chrome,
    edge,
    firefox,
    opera,
    win,
    mac,
    linux,
    touch: SUPPORTS_TOUCH,
    ssr,
  }
}

export function createDisplay (options?: DisplayOptions): ToRefs<DisplayInstance> {
  const { thresholds, mobileBreakpoint } = parseDisplayOptions(options)

  const height = ref(getClientHeight())
  const platform = getPlatform()
  const state = reactive({} as DisplayInstance)
  const width = ref(getClientWidth())

  function onResize () {
    height.value = getClientHeight()
    width.value = getClientWidth()
  }

  // eslint-disable-next-line max-statements
  watchEffect(() => {
    const xs = width.value < thresholds.sm
    const sm = width.value < thresholds.md && !xs
    const md = width.value < thresholds.lg && !(sm || xs)
    const lg = width.value < thresholds.xl && !(md || sm || xs)
    const xl = width.value < thresholds.xxl && !(lg || md || sm || xs)
    const xxl = width.value >= thresholds.xxl
    const name =
      xs ? 'xs'
        : sm ? 'sm'
        : md ? 'md'
          : lg ? 'lg'
            : xl ? 'xl'
              : 'xxl'
    const breakpointValue = typeof mobileBreakpoint === 'number' ? mobileBreakpoint : thresholds[mobileBreakpoint]
    const mobile = !platform.ssr
      ? width.value < breakpointValue
      : platform.android || platform.ios || platform.opera

    state.xs = xs
    state.sm = sm
    state.md = md
    state.lg = lg
    state.xl = xl
    state.xxl = xxl
    state.smAndUp = !xs
    state.mdAndUp = !(xs || sm)
    state.lgAndUp = !(xs || sm || md)
    state.xlAndUp = !(xs || sm || md || lg)
    state.smAndDown = !(md || lg || xl || xxl)
    state.mdAndDown = !(lg || xl || xxl)
    state.lgAndDown = !(xl || xxl)
    state.xlAndDown = !xxl
    state.name = name
    state.height = height.value
    state.width = width.value
    state.mobile = mobile
    state.mobileBreakpoint = mobileBreakpoint
    state.platform = platform
    state.thresholds = thresholds
  })

  if (IN_BROWSER) {
    window.addEventListener('resize', onResize, { passive: true })
  }

  return toRefs(state)
}

export function useDisplay () {
  const provider = inject(DisplayKey)
  if (!provider) throw new Error('Could not find VenoUi display injection')
  return provider
}
