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
    <ve-radio value="ultra-high" />
    <ve-radio value="high" />
    <ve-radio value="medium" />
    <ve-radio value="low" />
    <ve-radio value="ultra-low" />
  </ve-radio-group>

  <ve-radio-group label="Direction" v-model="direction">
    <ve-radio value="horizontal" />
    <ve-radio value="vertical" />
  </ve-radio-group>

  <ve-form-control label :disabled="false">
    <ve-switch label="Disabled" v-model="disabled" :disabled="false" />
    <ve-switch label="Readonly" v-model="readonly" :readonly="false" />
    <ve-switch label="HideDetails" v-model="hideDetails" />
  </ve-form-control>

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

  <ve-form-control label>
    <ve-switch label="Switch" />
  </ve-form-control>

  <ve-checkbox-group label="Checkbox">
    <ve-checkbox value="Checkbox 1" />
    <ve-checkbox value="Checkbox 2" />
    <ve-checkbox value="Checkbox 3" />
  </ve-checkbox-group>

  <ve-radio-group label="Radio">
    <ve-radio value="Radio1" />
    <ve-radio value="Radio2" />
  </ve-radio-group>

  <ve-form-control label>
    <ve-button color="primary">提交</ve-button>
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