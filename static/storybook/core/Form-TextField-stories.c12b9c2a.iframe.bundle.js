"use strict";(self.webpackChunk_compassion_design_system_core=self.webpackChunk_compassion_design_system_core||[]).push([[975],{"./src/components/Form/TextField.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,IconLeft:()=>IconLeft,Info:()=>Info,Placeholder:()=>Placeholder,Success:()=>Success,WithHint:()=>WithHint,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Forms/TextField",argTypes:{label:{control:"text"},size:{control:{type:"select"},options:["small","medium","large"]},state:{control:{type:"select"},options:["default","disabled","error","success"]},hint:{control:"text"},iconLeft:{control:"text"},iconRight:{control:"text"}},decorators:[Story=>`<div style="width: 360px;">${Story()}</div>`]},TextField=({label="Label Text",value="",size="medium",state="default",hint="",iconRight="",iconLeft=""})=>{const disabled="disabled"===state?"disabled":"";return`\n    <div class="form-field-row">\n        <label class="form-label ${disabled}" for="test-field">\n          ${label}\n        </label>\n        <div class="form-field ${state} ${size}">\n        ${iconLeft.length?`<span class="form-icon">${iconLeft}</span>`:""}\n          <input\n            id="test-field"\n            type="text"\n            value="${value}"\n            class="form-input"\n            placeholder="Input Value"\n            ${disabled}\n          />\n          ${iconRight.length?`<span class="form-icon">${iconRight}</span>`:""}\n        </div>\n        ${hint.length?`<span class="form-hint ${state}">${hint}</span>`:""}\n    </div>\n`},FORM_ICON={success:'<i class="ph-check ph-lg"></i>',error:'<i class="ph-x ph-lg"></i>',info:'<i class="ph-info"></i>'},Default=TextField.bind({});Default.args={label:"Label Text",value:"Filled",state:"default"};const Disabled=TextField.bind({});Disabled.args={label:"Label Text",value:"Disabled",state:"disabled"};const Error=TextField.bind({});Error.args={label:"Label Text",value:"Error",state:"error",hint:"Hint Text",iconRight:FORM_ICON.error};const Success=TextField.bind({});Success.args={label:"Label Text",value:"Success",state:"success",iconRight:FORM_ICON.success};const Info=TextField.bind({});Info.args={label:"Label Text",iconRight:FORM_ICON.info};const IconLeft=TextField.bind({});IconLeft.args={label:"Label Text",iconLeft:FORM_ICON.info};const Placeholder=TextField.bind({});Placeholder.args={label:"Label Text",value:""};const WithHint=TextField.bind({});WithHint.args={label:"Label Text",value:"With Hint",hint:"Sample hint"};const __namedExportsOrder=["Default","Disabled","Error","Success","Info","IconLeft","Placeholder","WithHint"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  label = 'Label Text',\n  value = '',\n  size = 'medium',\n  state = 'default',\n  hint = '',\n  iconRight = '',\n  iconLeft = ''\n}) => {\n  const disabled = state === 'disabled' ? 'disabled' : '';\n  return `\n    <div class=\"form-field-row\">\n        <label class=\"form-label ${disabled}\" for=\"test-field\">\n          ${label}\n        </label>\n        <div class=\"form-field ${state} ${size}\">\n        ${iconLeft.length ? `<span class=\"form-icon\">${iconLeft}</span>` : ''}\n          <input\n            id=\"test-field\"\n            type=\"text\"\n            value=\"${value}\"\n            class=\"form-input\"\n            placeholder=\"Input Value\"\n            ${disabled}\n          />\n          ${iconRight.length ? `<span class=\"form-icon\">${iconRight}</span>` : ''}\n        </div>\n        ${hint.length ? `<span class=\"form-hint ${state}\">${hint}</span>` : ''}\n    </div>\n`;\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"({\n  label = 'Label Text',\n  value = '',\n  size = 'medium',\n  state = 'default',\n  hint = '',\n  iconRight = '',\n  iconLeft = ''\n}) => {\n  const disabled = state === 'disabled' ? 'disabled' : '';\n  return `\n    <div class=\"form-field-row\">\n        <label class=\"form-label ${disabled}\" for=\"test-field\">\n          ${label}\n        </label>\n        <div class=\"form-field ${state} ${size}\">\n        ${iconLeft.length ? `<span class=\"form-icon\">${iconLeft}</span>` : ''}\n          <input\n            id=\"test-field\"\n            type=\"text\"\n            value=\"${value}\"\n            class=\"form-input\"\n            placeholder=\"Input Value\"\n            ${disabled}\n          />\n          ${iconRight.length ? `<span class=\"form-icon\">${iconRight}</span>` : ''}\n        </div>\n        ${hint.length ? `<span class=\"form-hint ${state}\">${hint}</span>` : ''}\n    </div>\n`;\n}",...Disabled.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"({\n  label = 'Label Text',\n  value = '',\n  size = 'medium',\n  state = 'default',\n  hint = '',\n  iconRight = '',\n  iconLeft = ''\n}) => {\n  const disabled = state === 'disabled' ? 'disabled' : '';\n  return `\n    <div class=\"form-field-row\">\n        <label class=\"form-label ${disabled}\" for=\"test-field\">\n          ${label}\n        </label>\n        <div class=\"form-field ${state} ${size}\">\n        ${iconLeft.length ? `<span class=\"form-icon\">${iconLeft}</span>` : ''}\n          <input\n            id=\"test-field\"\n            type=\"text\"\n            value=\"${value}\"\n            class=\"form-input\"\n            placeholder=\"Input Value\"\n            ${disabled}\n          />\n          ${iconRight.length ? `<span class=\"form-icon\">${iconRight}</span>` : ''}\n        </div>\n        ${hint.length ? `<span class=\"form-hint ${state}\">${hint}</span>` : ''}\n    </div>\n`;\n}",...Error.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"({\n  label = 'Label Text',\n  value = '',\n  size = 'medium',\n  state = 'default',\n  hint = '',\n  iconRight = '',\n  iconLeft = ''\n}) => {\n  const disabled = state === 'disabled' ? 'disabled' : '';\n  return `\n    <div class=\"form-field-row\">\n        <label class=\"form-label ${disabled}\" for=\"test-field\">\n          ${label}\n        </label>\n        <div class=\"form-field ${state} ${size}\">\n        ${iconLeft.length ? `<span class=\"form-icon\">${iconLeft}</span>` : ''}\n          <input\n            id=\"test-field\"\n            type=\"text\"\n            value=\"${value}\"\n            class=\"form-input\"\n            placeholder=\"Input Value\"\n            ${disabled}\n          />\n          ${iconRight.length ? `<span class=\"form-icon\">${iconRight}</span>` : ''}\n        </div>\n        ${hint.length ? `<span class=\"form-hint ${state}\">${hint}</span>` : ''}\n    </div>\n`;\n}",...Success.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"({\n  label = 'Label Text',\n  value = '',\n  size = 'medium',\n  state = 'default',\n  hint = '',\n  iconRight = '',\n  iconLeft = ''\n}) => {\n  const disabled = state === 'disabled' ? 'disabled' : '';\n  return `\n    <div class=\"form-field-row\">\n        <label class=\"form-label ${disabled}\" for=\"test-field\">\n          ${label}\n        </label>\n        <div class=\"form-field ${state} ${size}\">\n        ${iconLeft.length ? `<span class=\"form-icon\">${iconLeft}</span>` : ''}\n          <input\n            id=\"test-field\"\n            type=\"text\"\n            value=\"${value}\"\n            class=\"form-input\"\n            placeholder=\"Input Value\"\n            ${disabled}\n          />\n          ${iconRight.length ? `<span class=\"form-icon\">${iconRight}</span>` : ''}\n        </div>\n        ${hint.length ? `<span class=\"form-hint ${state}\">${hint}</span>` : ''}\n    </div>\n`;\n}",...Info.parameters?.docs?.source}}},IconLeft.parameters={...IconLeft.parameters,docs:{...IconLeft.parameters?.docs,source:{originalSource:"({\n  label = 'Label Text',\n  value = '',\n  size = 'medium',\n  state = 'default',\n  hint = '',\n  iconRight = '',\n  iconLeft = ''\n}) => {\n  const disabled = state === 'disabled' ? 'disabled' : '';\n  return `\n    <div class=\"form-field-row\">\n        <label class=\"form-label ${disabled}\" for=\"test-field\">\n          ${label}\n        </label>\n        <div class=\"form-field ${state} ${size}\">\n        ${iconLeft.length ? `<span class=\"form-icon\">${iconLeft}</span>` : ''}\n          <input\n            id=\"test-field\"\n            type=\"text\"\n            value=\"${value}\"\n            class=\"form-input\"\n            placeholder=\"Input Value\"\n            ${disabled}\n          />\n          ${iconRight.length ? `<span class=\"form-icon\">${iconRight}</span>` : ''}\n        </div>\n        ${hint.length ? `<span class=\"form-hint ${state}\">${hint}</span>` : ''}\n    </div>\n`;\n}",...IconLeft.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:"({\n  label = 'Label Text',\n  value = '',\n  size = 'medium',\n  state = 'default',\n  hint = '',\n  iconRight = '',\n  iconLeft = ''\n}) => {\n  const disabled = state === 'disabled' ? 'disabled' : '';\n  return `\n    <div class=\"form-field-row\">\n        <label class=\"form-label ${disabled}\" for=\"test-field\">\n          ${label}\n        </label>\n        <div class=\"form-field ${state} ${size}\">\n        ${iconLeft.length ? `<span class=\"form-icon\">${iconLeft}</span>` : ''}\n          <input\n            id=\"test-field\"\n            type=\"text\"\n            value=\"${value}\"\n            class=\"form-input\"\n            placeholder=\"Input Value\"\n            ${disabled}\n          />\n          ${iconRight.length ? `<span class=\"form-icon\">${iconRight}</span>` : ''}\n        </div>\n        ${hint.length ? `<span class=\"form-hint ${state}\">${hint}</span>` : ''}\n    </div>\n`;\n}",...Placeholder.parameters?.docs?.source}}},WithHint.parameters={...WithHint.parameters,docs:{...WithHint.parameters?.docs,source:{originalSource:"({\n  label = 'Label Text',\n  value = '',\n  size = 'medium',\n  state = 'default',\n  hint = '',\n  iconRight = '',\n  iconLeft = ''\n}) => {\n  const disabled = state === 'disabled' ? 'disabled' : '';\n  return `\n    <div class=\"form-field-row\">\n        <label class=\"form-label ${disabled}\" for=\"test-field\">\n          ${label}\n        </label>\n        <div class=\"form-field ${state} ${size}\">\n        ${iconLeft.length ? `<span class=\"form-icon\">${iconLeft}</span>` : ''}\n          <input\n            id=\"test-field\"\n            type=\"text\"\n            value=\"${value}\"\n            class=\"form-input\"\n            placeholder=\"Input Value\"\n            ${disabled}\n          />\n          ${iconRight.length ? `<span class=\"form-icon\">${iconRight}</span>` : ''}\n        </div>\n        ${hint.length ? `<span class=\"form-hint ${state}\">${hint}</span>` : ''}\n    </div>\n`;\n}",...WithHint.parameters?.docs?.source}}}}}]);