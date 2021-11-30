// Types
import type { RouteRecordRaw, RouteLocationRaw } from 'vue-router'

interface MenuItem
{
  title: string
  category?: string
  to?: RouteLocationRaw
  value?: string
  children?: MenuItem[]
}

export function convertRoutesToMenus (routes: RouteRecordRaw[]): MenuItem[] {
  return routes
    .map<MenuItem>(({ name, meta = {} }) => {
      const { title, category } = meta
      return {
        category: category as string | undefined,
        title: title as string,
        to: { name },
      }
    })
    .reduce<MenuItem[]>((items, item) => {
      if (item.category) {
        let parent = items.find(v => item.category === v.value)
        if (!parent) {
          parent = {
            title: item.category,
            value: item.category,
            children: [],
          }
          items.push(parent)
        }
        if (parent.children) {
          parent.children.push(item)
          parent.title = `${ item.category }(${ parent.children.length })`
        }
      } else {
        items.push(item)
      }
      return items
    }, [])
    .sort((a, b) => {
      if (a.value === '通用') {
        return -1
      }
      return (b.children as any[]).length - (a.children as any[]).length
    })
}