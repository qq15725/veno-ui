export const IS_NODE = typeof process !== 'undefined'
export const IN_BROWSER = typeof window !== 'undefined'
export const IS_DEBUG = IS_NODE && process.env.DEBUG === 'true'
export const IS_PROD = IS_NODE && process.env.NODE_ENV === 'production'
export const SUPPORT_INTERSECTION_OBSERVER = IN_BROWSER && 'IntersectionObserver' in window
export const SUPPORT_TOUCH = IN_BROWSER && ('ontouchstart' in window || window.navigator.maxTouchPoints > 0)
