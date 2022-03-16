/**
 * Shamelessly stolen from vuejs/vue/blob/dev/src/core/util/debug.js
 */

const classifyRE = /(?:^|[-_])(\w)/g
const classify = (str: string) => str
  .replace(classifyRE, c => c.toUpperCase())
  .replace(/[-_]/g, '')

function formatComponentName (vm: any, includeFile?: boolean): string {
  if (vm.$root === vm) {
    return '<Root>'
  }
  const options = typeof vm === 'function' && vm.cid != null
    ? vm.options
    : vm._isVue
      ? vm.$options || vm.constructor.options
      : vm || {}
  let name = options.name || options._componentTag
  const file = options.__file
  if (!name && file) {
    const match = file.match(/([^/\\]+)\.vue$/)
    name = match?.[1]
  }

  return (
    (name ? `<${ classify(name) }>` : `<Anonymous>`) +
    (file && includeFile !== false ? ` at ${ file }` : '')
  )
}

export function generateComponentTrace (vm: any): string {
  if (vm._isVue && vm.$parent) {
    const tree: any[] = []
    let currentRecursiveSequence = 0
    while (vm) {
      if (tree.length > 0) {
        const last: any = tree[tree.length - 1]
        if (last.constructor === vm.constructor) {
          currentRecursiveSequence++
          vm = vm.$parent
          continue
        } else if (currentRecursiveSequence > 0) {
          tree[tree.length - 1] = [last, currentRecursiveSequence]
          currentRecursiveSequence = 0
        }
      }
      tree.push(vm)
      vm = vm.$parent
    }
    return '\n\nfound in\n\n' + tree
      .map((vm, i) => `${
        i === 0 ? '---> ' : ' '.repeat(5 + i * 2)
      }${
        Array.isArray(vm)
          ? `${ formatComponentName(vm[0]) }... (${ vm[1] } recursive calls)`
          : formatComponentName(vm)
      }`)
      .join('\n')
  } else {
    return `\n\n(found in ${ formatComponentName(vm) })`
  }
}
