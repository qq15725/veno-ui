:::demo

# 基本用法

```html
<ve-form
  :density="density"
  :layout="layout"
>
  <ve-radio-group
    label="Density"
    label-width="100"
    v-model="density"
    :hide-details="hideDetails"
  >
    <ve-radio label="compact" />
    <ve-radio label="comfortable" />
    <ve-radio label="medium" />
  </ve-radio-group>

  <ve-radio-group
    label="Layout"
    label-width="100"
    v-model="layout"
    :hide-details="hideDetails"
  >
    <ve-radio label="horizontal" />
    <ve-radio label="vertical" />
    <ve-radio label="inline" />
  </ve-radio-group>

  <ve-switch
    label="HideDetails"
    label-width="100"
    v-model="hideDetails"
    :hide-details="hideDetails"
  />

  <ve-input
    label="Input"
    label-width="100"
    placeholder="请输入"
    clearable
    :hide-details="hideDetails"
  />

  <ve-select
    label="Select"
    label-width="100"
    placeholder="请选择"
    :items="[
    { label: '选项1', value: 1 },
    { label: '选项2', value: 2 },
    { label: '选项3', value: 3 },
  ]"
    clearable
    :hide-details="hideDetails"
  />

  <ve-switch
    label="Switch"
    label-width="100"
    :hide-details="hideDetails"
  />

  <ve-checkbox
    label="Checkbox"
    label-width="100"
    :hide-details="hideDetails"
  >
    Checkbox One
  </ve-checkbox>

  <ve-radio-group
    label="Radio"
    label-width="100"
    :hide-details="hideDetails"
  >
    <ve-radio true-value="1">Radio One</ve-radio>
    <ve-radio true-value="2">Radio Two</ve-radio>
  </ve-radio-group>

  <ve-form-item
    label-width="100"
    :hide-details="hideDetails"
  >
    <ve-button>提交</ve-button>
  </ve-form-item>
</ve-form>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      density: ref('medium'),
      layout: ref('horizontal'),
      hideDetails: ref(false),
    }
  }
})
```

:::