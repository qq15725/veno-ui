:::demo

# 基本用法

```html
<ve-form
  :label-width="form.direction === 'inline' ? 70 : 100"
  :density="form.density"
  :direction="form.direction"
  :disabled="form.disabled"
  :hide-details="form.hideDetails"
  :readonly="form.readonly"
  :variant="form.variant"
  @submit="send"
>
  <ve-radio-group
    label="Variant"
    name="variant"
    v-model="form.variant"
  >
    <ve-radio value="contained" />
    <ve-radio value="outlined" />
    <ve-radio value="text" />
    <ve-radio value="contained-text" />
    <ve-radio value="contained-outlined" />
  </ve-radio-group>
  
  <ve-radio-group
    label="Density"
    messages="Messages"
    name="density"
    v-model="form.density"
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
    <ve-radio value="inline" />
  </ve-radio-group>

  <ve-form-control label :disabled="false">
    <ve-switch name="disabled" label="Disabled" v-model="form.disabled" :disabled="false" />
    <ve-switch name="readonly" label="Readonly" v-model="form.readonly" :readonly="false" />
    <ve-switch name="hide-details" label="HideDetails" v-model="form.hideDetails" />
  </ve-form-control>

  <ve-input
    clearable
    counter="48"
    label="Input"
    name="input"
    placeholder="请输入"
    v-model="form.input"
  />

  <ve-input
    auto-resize
    clearable
    counter="255"
    label="Textarea"
    name="textarea"
    placeholder="请输入"
    rows="3"
    type="textarea"
    v-model="form.textarea"
  />

  <ve-select
    clearable
    :items="[
      { value: 'Option 1' },
      { value: 'Option 2' },
      { value: 'Option 3' },
    ]"
    label="Select"
    name="select"
    placeholder="请选择"
    v-model="form.select"
  />
  
  <ve-date-picker
    clearable
    label="Date"
    name="date"
    placeholder="请选择"
    v-model="form.date"
  />
  
  <ve-date-picker
    clearable
    :format="['YYYY-MM-DD 00:00:00', 'YYYY-MM-DD 23:59:59']"
    label="DateRange"
    name="date-range"
    placeholder="请选择"
    range
    v-model="form.dateRange"
  />

  <ve-form-control label>
    <ve-switch label="Switch" name="switch" v-model="form.switch" />
  </ve-form-control>

  <ve-checkbox-group label="Checkbox" name="checkbox" v-model="form.checkbox">
    <ve-checkbox value="Checkbox 1" />
    <ve-checkbox value="Checkbox 2" />
    <ve-checkbox value="Checkbox 3" />
  </ve-checkbox-group>

  <ve-radio-group label="Radio" name="radio" v-model="form.radio">
    <ve-radio value="Radio1" />
    <ve-radio value="Radio2" />
  </ve-radio-group>

  <ve-form-control label>
    <ve-button color="primary" :loading="sending" type="submit">提交</ve-button>
  </ve-form-control>
</ve-form>

<ve-code class="mt-3" :value="form" />
```

```js
import { defineComponent, ref } from 'vue'
import { message } from 'veno-ui'

export default defineComponent({
  setup () {
    const sending = ref(false)
    
    return {
      form: ref({
        variant: 'contained',
        density: 'medium',
        direction: 'horizontal',
        hideDetails: true,
        disabled: false,
        readonly: false,
        radio: 'Radio1',
        switch: false,
        checkbox: [],
        select: null,
        input: null,
      }),
      sending,
      send: async () => {
        if (sending.value) return
        sending.value = true
        await message.info('Sending')
        message.success('Sended')
        sending.value = false
      }
    }
  }
})
```

:::