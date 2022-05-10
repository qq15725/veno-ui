// Utils
import { toKebabCase, toPascalCase } from './utils'

interface VenoUiResolverOptions
{
  prefix?: string
}

/**
 * Resolver for unplugin-vue-components and unplugin-auto-import
 *
 * @param options
 */
export function VenoUiResolver (options: VenoUiResolverOptions = {}) {
  const {
    prefix: rawPrefix = 've'
  } = options

  const prefix = rawPrefix ? `${ toKebabCase(rawPrefix) }-` : ''

  return [
    {
      type: 'component' as const,
      resolve: (name: string) => {
        const kebab = toKebabCase(name)
        if (!kebab.startsWith(prefix)) return
        const slice = kebab.slice(prefix.length)
        return {
          name: toPascalCase(slice),
          from: 'veno-ui/components'
        }
      }
    }
  ]
}