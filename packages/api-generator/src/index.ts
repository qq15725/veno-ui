import { createApp } from 'vue'
import { createVenoUi } from 'veno-ui'

// Types
import type { Component } from './types'

const app = createApp({})
app.use(createVenoUi())

const kebabCase = (str: string) => {
  let kebab = ''
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i)
    if (charCode >= 65 && charCode <= 90) {
      kebab += `${ i > 0 ? '-' : '' }${ str[i].toLowerCase() }`
    } else {
      kebab += str[i]
    }
  }
  return kebab
}

function getPropType (type: any): any {
  if (Array.isArray(type)) {
    return type.map(t => getPropType(t))
  }
  if (!type) return 'any'
  return type.name.toLowerCase()
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

function parseFunctionParams (func: any) {
  const [, regular] = /function\s\((.*)\)\s\{.*/i.exec(func) || []
  const [, arrow] = /\((.*)\)\s=>\s\{.*/i.exec(func) || []
  const args = regular || arrow
  return args ? `(${ args }) => {}` : undefined
}

const getComponentsApi = () => {
  const rawComponents = app._context.components as any
  const components: Component[] = []
  for (const componentName in rawComponents) {
    const rawComponent = rawComponents[componentName]
    const component: Component = {
      name: kebabCase(componentName).replace('ve-', ''),
      props: [],
      slots: [],
      events: [],
      functions: []
    }

    for (const propName in rawComponent.props || {}) {
      const prop = rawComponent.props[propName] || {}
      const name = kebabCase(propName)
      const type = getPropType(typeof prop === 'function' ? prop : prop.type)
      component.props.push({
        name,
        source: prop.source,
        default: getPropDefault(prop.default, type),
        type,
      })
    }

    for (const emitName in rawComponent.emits || {}) {
      component.events.push({
        name: emitName
      })
    }

    components.push(component)
  }

  return components
}

const getCompleteApi = () => {
  return [
    ...getComponentsApi(),
    // ...getComposablesApi(),
    // ...getDirectivesApi(),
  ].sort((a, b) => a.name.localeCompare(b.name))
}

export {
  getCompleteApi,
  getComponentsApi,
  // getComposablesApi,
  // getDirectivesApi,
}