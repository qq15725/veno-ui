<template>
  <ve-row>
    <ve-col
        v-for="(item, index) in [
            { title: 'Red / 浪漫红', color: 'red' },
            { title: 'Pink', color: 'pink' },
            { title: 'Purple / 青春紫', color: 'purple' },
            { title: 'Deep-Purple / 暗夜紫', color: 'deep-purple' },
            { title: 'Indigo', color: 'indigo' },
            { title: 'Blue / 海蔚蓝', color: 'blue' },
            { title: 'Light-Blue', color: 'light-blue' },
            { title: 'Cyan / 碧涛青', color: 'cyan' },
            { title: 'Teal', color: 'teal' },
            { title: 'Green / 仙野绿', color: 'green' },
            { title: 'Light-Green', color: 'light-green' },
            { title: 'Lime / 新生绿', color: 'lime' },
            { title: 'Yellow / 柠檬黄', color: 'yellow' },
            { title: 'Amber', color: 'amber' },
            { title: 'Orange / 活力橙', color: 'orange' },
            { title: 'Deep-Orange', color: 'deep-orange' },
            { title: 'Brown', color: 'brown' },
            { title: 'Blue-Grey', color: 'blue-grey' },
            { title: 'Gray / 中性灰', color: 'grey' },
        ]"
        :key="index"
        cols="4"
    >
      <ve-list dense>
        <ve-list-subheader class="justify-center text-h4">{{ item.title }}</ve-list-subheader>
        <ve-list-item
            v-for="i in 4" :key="i"
            :class="`bg-${item.color}-n${5 - i}`"
            :title="`${item.color}-n${5 - i}`"
        />
        <ve-list-item
            :class="`bg-${item.color}`"
            :title="`${item.color}`"
        />
        <ve-list-item
            v-for="i in 4" :key="i"
            :class="`bg-${item.color}-${i}`"
            :title="`${item.color}-${i}`"
        />
      </ve-list>
    </ve-col>
  </ve-row>
</template>