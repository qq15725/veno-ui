:::demo

# 基本用法

```html
<ve-form
  :density="density"
  :direction="direction"
  label-width="100"
  :disabled="disabled"
  :readonly="readonly"
  :hide-details="hideDetails"
>
  <ve-radio-group
    label="Density"
    v-model="density"
    messages="Messages"
  >
    <ve-radio label="compact" />
    <ve-radio label="comfortable" />
    <ve-radio label="medium" />
  </ve-radio-group>

  <ve-radio-group label="Direction" v-model="direction">
    <ve-radio label="horizontal" />
    <ve-radio label="vertical" />
  </ve-radio-group>

  <ve-switch
    label="Disabled"
    v-model="disabled"
    :disabled="false"
  />

  <ve-switch
    label="Readonly"
    v-model="readonly"
    :readonly="false"
  />

  <ve-switch label="HideDetails" v-model="hideDetails" />

  <ve-input
    label="Input"
    placeholder="请输入"
    clearable
    counter="48"
  />

  <ve-input
    label="Textarea"
    type="textarea"
    placeholder="请输入"
    clearable
    rows="3"
    auto-grow
    counter="255"
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
  />

  <ve-switch label="Switch" />

  <ve-checkbox-group label="Checkbox">
    <ve-checkbox label="Checkbox 1" />
    <ve-checkbox label="Checkbox 2" />
    <ve-checkbox label="Checkbox 3" />
  </ve-checkbox-group>

  <ve-radio-group label="Radio">
    <ve-radio label="Radio1" />
    <ve-radio label="Radio2" />
  </ve-radio-group>

  <ve-form-control>
    <template #prepend><div style="width: 100px;"></div></template>
    <ve-button>提交</ve-button>
  </ve-form-control>
</ve-form>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      density: ref('medium'),
      direction: ref('horizontal'),
      hideDetails: ref(false),
      disabled: ref(false),
      readonly: ref(false),
    }
  }
})
```

:::