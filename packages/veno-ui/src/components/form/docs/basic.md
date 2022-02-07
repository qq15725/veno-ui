:::demo

# 基本用法

```html

<ve-form
  label-width="100"
  :density="form.density"
  :direction="form.direction"
  :disabled="form.disabled"
  :readonly="form.readonly"
  :hide-details="form.hideDetails"
>
  <ve-radio-group
    name="density"
    label="Density"
    v-model="form.density"
    messages="Messages"
  >
    <ve-radio value="ultra-high" />
    <ve-radio value="high" />
    <ve-radio value="medium" />
    <ve-radio value="low" />
    <ve-radio value="ultra-low" />
  </ve-radio-group>

  <ve-radio-group name="direction" label="Direction" v-model="form.direction">
    <ve-radio value="horizontal" />
    <ve-radio value="vertical" />
  </ve-radio-group>

  <ve-form-control label :disabled="false">
    <ve-switch name="disabled" label="Disabled" v-model="form.disabled" :disabled="false" />
    <ve-switch name="readonly" label="Readonly" v-model="form.readonly" :readonly="false" />
    <ve-switch name="hide-details" label="HideDetails" v-model="form.hideDetails" />
  </ve-form-control>

  <ve-input
    name="input"
    label="Input"
    placeholder="请输入"
    clearable
    counter="48"
  />

  <ve-input
    name="textarea"
    label="Textarea"
    type="textarea"
    placeholder="请输入"
    clearable
    rows="3"
    auto-grow
    counter="255"
  />

  <ve-select
    name="select"
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
    <ve-switch name="switch" label="Switch" />
  </ve-form-control>

  <ve-checkbox-group name="checkbox" label="Checkbox">
    <ve-checkbox value="Checkbox 1" />
    <ve-checkbox value="Checkbox 2" />
    <ve-checkbox value="Checkbox 3" />
  </ve-checkbox-group>

  <ve-radio-group name="radio" label="Radio">
    <ve-radio value="Radio1" />
    <ve-radio value="Radio2" />
  </ve-radio-group>

  <ve-form-control label>
    <ve-button color="primary">提交</ve-button>
  </ve-form-control>
</ve-form>

<ve-code class="mt-3" language="json" :value="JSON.stringify(form, null, 2)" />
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      form: ref({
        density: 'medium',
        direction: 'horizontal',
        hideDetails: true,
        disabled: false,
        readonly: false,
      }),
    }
  }
})
```

:::