:::demo

# 基本用法

```html
<ve-form
  :label-width="form.props.inline ? 'auto' : 100"
  v-bind="form.props"
  @submit="send"
  v-model="form"
>
  <ve-radio-group
    label="Variant"
    name="props.variant"
    :items="['contained', 'outlined', 'text', 'contained-text', 'contained-outlined']"
  />
  
  <ve-radio-group
    label="Size"
    name="props.size"
    :items="['x-small', 'small', 'medium', 'large', 'x-large']"
  />
  
  <ve-radio-group
    label="Density"
    messages="Messages"
    name="props.density"
    :items="['ultra-high', 'high', 'medium', 'low', 'ultra-low']"
  />

  <ve-radio-group 
    name="props.direction"
    label="Direction" 
    :items="['horizontal', 'vertical']"
  />

  <ve-form-control label :disabled="false">
    <ve-switch name="props.inline" label="Inline" />
    <ve-switch name="props.disabled" label="Disabled" :disabled="false" />
    <ve-switch name="props.readonly" label="Readonly" :readonly="false" />
    <ve-switch name="props.hideDetails" label="HideDetails" />
  </ve-form-control>

  <ve-input
    clearable
    counter="48"
    label="Input"
    name="input"
    placeholder="请输入"
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
  />

  <ve-select
    clearable
    label="Select"
    name="select"
    placeholder="请选择"
    :items="['Option 1', 'Option 2', 'Option 3']"
  />
  
  <ve-date-picker
    clearable
    label="Date"
    name="date"
    placeholder="请选择"
  />
  
  <ve-date-picker
    clearable
    :format="['YYYY-MM-DD 00:00:00', 'YYYY-MM-DD 23:59:59']"
    label="DateRange"
    name="dateRange"
    placeholder="请选择"
    range
  />

  <ve-form-control label>
    <ve-switch label="Switch" name="switch" />
  </ve-form-control>

  <ve-checkbox-group 
    label="Checkbox" 
    name="checkbox" 
    :items="['Checkbox 1', 'Checkbox 2', 'Checkbox 3']"
  />

  <ve-radio-group
    label="Radio" 
    name="radio" 
    :items="['Radio1', 'Radio2']"
  />

  <ve-form-control label>
    <ve-button color="primary" :loading="sending" type="submit">提交</ve-button>
  </ve-form-control>
</ve-form>

<ve-code class="mt-3 p-3" :code="form" theme="dark" />
```

```js
import { defineComponent, ref } from 'vue'
import { message } from 'veno-ui'

export default defineComponent({
  setup () {
    const sending = ref(false)
    
    return {
      form: ref({
        props: {
          variant: 'contained',
          size: 'medium',
          density: 'medium',
          direction: 'horizontal',
          inline: false,
          hideDetails: true,
          disabled: false,
          readonly: false,
        },
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