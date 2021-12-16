:::demo

# 基本用法

```html
<ve-form
  :density="density"
  :layout="layout"
  label-width="100"
>
  <ve-radio-group
    label="Density"
    v-model="density"
    :hide-details="hideDetails"
  >
    <ve-radio label="compact" />
    <ve-radio label="comfortable" />
    <ve-radio label="medium" />
  </ve-radio-group>

  <ve-radio-group
    label="Layout"
    v-model="layout"
    :hide-details="hideDetails"
  >
    <ve-radio label="horizontal" />
    <ve-radio label="vertical" />
    <ve-radio label="inline" />
  </ve-radio-group>

  <ve-switch
    label="HideDetails"
    v-model="hideDetails"
    :hide-details="hideDetails"
  />

  <ve-input
    label="Input"
    placeholder="请输入"
    clearable
    :hide-details="hideDetails"
  />

  <ve-select
    label="Select"
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
    :hide-details="hideDetails"
  />

  <ve-checkbox
    label="Checkbox"
    :hide-details="hideDetails"
  >
    Checkbox One
  </ve-checkbox>

  <ve-radio-group
    label="Radio"
    :hide-details="hideDetails"
  >
    <ve-radio true-value="1">Radio One</ve-radio>
    <ve-radio true-value="2">Radio Two</ve-radio>
  </ve-radio-group>

  <ve-form-item
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