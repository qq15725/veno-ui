export interface BaseColors {
  background: string
  surface: string
  primary: string
  secondary: string
  success: string
  warning: string
  error: string
  info: string
}

export interface BaseOnColors {
  'on-background': string
  'on-surface': string
  'on-primary': string
  'on-secondary': string
  'on-success': string
  'on-warning': string
  'on-error': string
  'on-info': string
}

export interface Colors extends BaseColors {
  [key: string]: string
}
