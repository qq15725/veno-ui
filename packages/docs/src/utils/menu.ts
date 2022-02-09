// Types
import type { RouteRecordRaw, RouteLocationRaw } from 'vue-router'

// 菜单项
interface MenuItem
{
  title: string // 标题
  value: any // 唯一值

  // 可选
  to?: RouteLocationRaw // 页面路由
  $children?: MenuItem[] // 子菜单项
}

function createStringCollator (locale = 'en-US'): Intl.Collator {
  return new Intl.Collator(
    locale,
    { sensitivity: 'accent', usage: 'sort' }
  )
}

const defaultStringCollator = createStringCollator()

// 路由转化成菜单项
export function routeToMenuItem (route: RouteRecordRaw): MenuItem {
  return {
    title: (route.meta?.title ?? route.name) as string,
    value: route.name,
    to: {
      name: route.name
    },
  }
}

// 创建菜单组
export function createMenuGroup (title: string): MenuItem {
  return {
    title,
    value: `group-${ title }`,
  }
}

// 路由组转化成菜单列表
export function routesToMenus (routes: RouteRecordRaw[]): MenuItem[] {
  return routes
    .filter(route => !!route.meta?.isNav)
    .reduce<MenuItem[]>((menus, route) => {
      function initMenuGroup (title: string) {
        const menuGroup = createMenuGroup(title)
        menus.push(menuGroup)
        return menuGroup
      }

      const menuItem = routeToMenuItem(route)
      const title = (route.meta?.category || '') as string
      if (title) {
        const menuGroup = menus.find(v => `group-${ title }` === v.value)
          || initMenuGroup(title)
        menuGroup.$children = menuGroup.$children || []
        menuGroup.$children.push(menuItem)
      } else {
        menus.push(menuItem)
      }

      return menus
    }, [] as MenuItem[])
    .sort((a, b) => {
      if (!a.$children && b.$children) {
        return -1
      } else if (a.$children && !b.$children) {
        return 1
      } else {
        return defaultStringCollator.compare(a.title, b.title)
      }
    })
}