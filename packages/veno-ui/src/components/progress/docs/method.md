
:::demo

# 可用的实例方法

```html
<ve-spacer>
  <ve-button @click="progress.start()">Start</ve-button>
  <ve-button @click="progress.finish()">Finish</ve-button>
</ve-spacer>

<ve-progress ref="progress" class="mt-3" />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      progress: ref(),
    }
  }
})
```

:::