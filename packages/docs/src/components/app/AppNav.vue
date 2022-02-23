<script lang="ts" setup>
  // Utils
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '@/stores/app'
  // @ts-ignore
  import pages from '~pages'

  const { menuActive } = storeToRefs(useAppStore())

  const stringCollator = new Intl.Collator('en-US', { sensitivity: 'accent', usage: 'sort' })

  function sortFunc (a, b) {
    return !a.$children && b.$children
        ? -1
        : a.$children && !b.$children
            ? 1
            : stringCollator.compare(a.title, b.title)
  }

  const opened = ['components']
  const staticMenus = [
    { title: '组件', value: 'components', $children: [] }
  ]
  const menus = pages
      .filter(i => i.meta?.isNav)
      .reduce((items, route) => {
        const { name, meta } = route
        const { title, category, apiType } = meta || {}
        let item = { title: title ?? name, value: name, to: { name } }
        let subItems
        {
          if (apiType === 'components') {
            subItems = items[0].$children
          } else {
            subItems = items
          }
        }
        if (category) {
          const value = `group-${ category }`
          let group = subItems.find(v => value === v.value)
          if (!group) {
            group = { title: category, value, apiType }
            subItems.push(group)
          }
          group.$children = group.$children || []
          group.$children.push(item)
          opened.push(value)
        } else {
          subItems.push(item)
        }
        return items
      }, staticMenus)
      .map(v => {
        v.$children = v.$children.sort(sortFunc)
        return v
      })
      .sort(sortFunc)
</script>

<template>
  <ve-drawer v-model="menuActive" show-toggler>
    <ve-scrollbar>
      <ve-list
          nav
          :items="menus"
          :opened="opened"
      >
        <template #header="{ item: { title, apiType } }">
          <ve-list-subheader v-if="apiType">{{ title }}</ve-list-subheader>
          <ve-list-subheader
              v-else
              class="text-subtitle-1"
              style="opacity: 1; font-weight: 500;"
          >
            {{ title }}
          </ve-list-subheader>
        </template>
      </ve-list>
    </ve-scrollbar>
  </ve-drawer>
</template>