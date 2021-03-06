# vue-form-json-schema

| Property | Value | Description  |
| ---------|-------| -------------|
| tag | [HTML element tag name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) | Render the `vue-form-json-schema` element with this tag name |
| model | `Object` | The form values. It is not possible to use `v-model` with this prop. The `change` event handler must be used |
| options | `Object` | See [Options](options.md) |
| schema | `Object` | A valid [JSON Schema]( http://json-schema.org/) (validated by [Ajv](https://github.com/epoberezkin/ajv)) |
| ui-schema | `Object` | See [uiSchema](ui-schema.md) |
| change | `Function` | When the `model` is updated this function will be called with the new value as the first parameter |
| state-change | `Function` | When the internal state is updated this function will be called with the new value as the first parameter. The state is an `Object` which contains information such as validation errors. |
| validated | `Function` | When a validation has been performed this function will be called a `Boolean` as the first parameter describing the overall form valid state |

```html
<template>
  <vue-form-json-schema
    tag="div"
    :model="model"
    :options="options"
    :schema="schema"
    :ui-schema="uiSchema"
    v-on:change="onModelUpdate"
    v-on:state-change="onStateUpdate"
    v-on:validated="onValidatedUpdate"
  />
</template>
```
