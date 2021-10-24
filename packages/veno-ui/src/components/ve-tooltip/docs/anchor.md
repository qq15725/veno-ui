:::demo

# 锚点

```html
<ve-row>
  <template
    v-for="(anchor, key) in anchors"
  >
    <ve-col cols="4">
      <ve-tooltip
        v-if="anchor"
        :key="key"
        :anchor="anchor"
        #activator="{ props }"
        text="提示"
      >
        <ve-button
          v-bind="props"
        >
          {{ anchor }}
        </ve-button>
      </ve-tooltip>
    </ve-col>
  </template>
</ve-row>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      anchors: ref([
        'top start', 'top', 'top end',
        'start top', null, 'end top',
        'start', null, 'end',
        'start bottom', null, 'end bottom',
        'bottom start', 'bottom', 'bottom end',
      ]),
    }
  }
})
```

:::