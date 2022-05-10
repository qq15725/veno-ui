:::demo

# 基本用法

```html
<ve-form v-model="props" inline hide-details>
  <ve-select
    label="Containment"
    placeholder="none"
    name="containment" 
    clearable 
    width="100"
    :items="['parent']"
  />
  <ve-form-control>
    <ve-switch label="Cursor" name="cursor" />
  </ve-form-control>
  <ve-form-control>
    <ve-switch label="Disabled" name="disabled" />
  </ve-form-control>
</ve-form>

<ve-card :height="200" border class="my-3">
  <ve-draggable v-bind="props" v-model="value" #default="{ props: draggable }">
    <ve-paper size="40" color="primary" class="p-3" v-bind="draggable" />
  </ve-draggable>
</ve-card>

<ve-code class="p-3 mb-3" :code="props" theme="dark" />

<ve-code class="p-3" :code="value" theme="dark" />
```

```js
import { defineComponent, mergeProps, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      props: ref({
        cursor: true,
        containment: 'parent',
      }),
      value: ref({ left: 100, top: 100 }),
    }
  }
})
```

:::