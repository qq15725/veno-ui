// Utils
import { app } from './app-instance'
import { toKebabCase } from '@veno-ui/utils'
import { getPropsDescriptions } from './props-descriptions'

// Types
import type { Options, Component } from './types'

function getPropType (type: any): any {
  if (Array.isArray(type)) return type.map(t => getPropType(t))
  if (!type) return 'any'
  return type.name.toLowerCase()
}

function parseFunctionParams (func: any) {
  const [, regular] = /function\s\((.*)\)\s\{.*/i.exec(func) || []
  const [, arrow] = /\((.*)\)\s=>\s\{.*/i.exec(func) || []
  const args = regular || arrow
  return args ? `(${ args }) => {}` : undefined
}

function getPropDefault (def: any, type: any) {
  if (typeof def === 'function' && type !== 'function') {
    return def.call({}, {})
  }
  if (typeof def === 'string') {
    return def ? `'${ def }'` : def
  }
  if (type === 'function') {
    return parseFunctionParams(def)
  }
  if (def == null && (
    type === 'boolean' ||
    (Array.isArray(type) && type.includes('boolean'))
  )) {
    return false
  }
  return def
}

export function getComponentsApi (options: Options) {
  const propsDescriptions = getPropsDescriptions(options.fileGlobs)

  const rawComponents = app._context.components as any

  const components: Component[] = []

  for (const componentName in rawComponents) {
    const rawComponent = rawComponents[componentName]

    const component: Component = {
      name: toKebabCase(componentName).replace('ve-', ''),
      props: [],
      slots: [],
      events: [],
      functions: []
    }

    // props
    for (const propName in rawComponent.props || {}) {
      const prop = rawComponent.props[propName] || {}
      const source = prop.source
      const name = toKebabCase(propName)
      const type = getPropType(typeof prop === 'function' ? prop : prop.type)
      component.props.push({
        name,
        source,
        default: getPropDefault(prop.default, type),
        type,
        descriptions: propsDescriptions.filter(v => {
          return v.name === propName && (v.source === source || v.source === component.name)
        })
      })
    }

    // events
    for (const emitName in rawComponent.emits || {}) {
      component.events.push({
        name: emitName
      })
    }

    components.push(component)
  }

  return components
}