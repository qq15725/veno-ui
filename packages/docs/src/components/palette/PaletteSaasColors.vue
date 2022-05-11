<template>
  <ve-container>
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
          { title: 'Gray / 中性灰', color: 'grey' },
          { title: 'Blue-Grey', color: 'blue-grey' },
        ]"
        :key="index"
        cols="4"
      >
        <ve-list style="overflow: initial;">
          <ve-list-subheader class="justify-center text-h4">{{ item.title }}</ve-list-subheader>
          <template
            v-for="hue in [
              null,
              '50', '100', '200', '300', '400',
              '500', '600', '700', '800', '900',
              'a100', 'a200', 'a400', 'a700',
            ]"
            :key="hue"
          >
            <template v-if="hue === 'a100'">
              <div class="mt-1" />
            </template>

            <ve-hover v-slot="{ props, hover }">
              <ve-list-item
                v-bind="props"
                :class="hue ? `bg-${item.color}-${hue}` : `bg-${item.color}`"
                :title="hue ? `${item.color}-${hue}` : `${item.color}`"
                :style="hover ? 'transform: scale(1.05); z-index: 100;' : undefined"
                @click=""
              >
                <template #append v-if="!hue">
                  <div class="text-caption">light(400) dark(600)</div>
                </template>
              </ve-list-item>
            </ve-hover>
          </template>
        </ve-list>
      </ve-col>
    </ve-row>
  </ve-container>
</template>
