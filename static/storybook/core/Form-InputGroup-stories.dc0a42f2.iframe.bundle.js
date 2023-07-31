"use strict";(self.webpackChunk_compassion_design_system_core=self.webpackChunk_compassion_design_system_core||[]).push([[468],{"./src/components/Form/InputGroup.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,MultipleIcons:()=>MultipleIcons,StartAdornment:()=>StartAdornment,Success:()=>Success,WithHint:()=>WithHint,WithText:()=>WithText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Forms/InputGroup",argTypes:{label:{control:"text"},size:{control:{type:"select"},options:["small","medium","large"]},state:{control:{type:"select"},options:["default","disabled","error","success"]},hint:{control:"text"},adornmentText:{control:"text"},adornmentPosition:{control:{type:"select"},options:["start","end"]}},decorators:[Story=>`<div style="width: 360px;">${Story()}</div>`]},InputGroup=({label="Label Text",value="",size="medium",state="default",hint="",iconRight="",iconLeft="",adornmentText="",adornmentPosition="end"})=>{const disabled="disabled"===state?"disabled":"",startPosition="start"===adornmentPosition;return`\n    <div class="form-field-row">\n        <label class="form-label ${disabled}" for="test-field">\n          ${label}\n        </label>\n        <div class="input-group">\n          ${startPosition?`\n            <div class="input-group-adornment ${size}">\n              <i class="ph-info ph-lg"></i>\n              ${adornmentText.length?`<span class="input-group-adornment-text">${adornmentText}</span>`:""}\n            </div>\n          `:""}\n          <div class="form-field ${state} ${size}">\n            ${iconLeft.length?`<span class="form-icon">${iconLeft}</span>`:""}\n            <input\n              id="test-field"\n              type="text"\n              value="${value}"\n              class="form-input"\n              placeholder="Input Value"\n              ${disabled}\n            />\n            ${iconRight.length?`<span class="form-icon">${iconRight}</span>`:""}\n          </div>\n          ${startPosition?"":`\n            <div class="input-group-adornment ${size}">\n              <i class="ph-info ph-lg"></i>\n              ${adornmentText.length?`<span class="input-group-adornment-text">${adornmentText}</span>`:""}\n            </div>\n          `}\n        </div>\n        ${hint.length?`<span class="form-hint ${state}">${hint}</span>`:""}\n    </div>\n`},FORM_ICON={success:'<i class="ph-check ph-lg"></i>',error:'<i class="ph-x ph-lg"></i>',info:'<i class="ph-info"></i>'},Default=InputGroup.bind({});Default.args={label:"Label Text",value:"Filled",state:"default"};const Disabled=InputGroup.bind({});Disabled.args={label:"Label Text",value:"Disabled",state:"disabled"};const Error=InputGroup.bind({});Error.args={label:"Label Text",value:"Error",state:"error",hint:"Hint Text",iconRight:FORM_ICON.error};const Success=InputGroup.bind({});Success.args={label:"Label Text",value:"Success",state:"success",iconRight:FORM_ICON.success};const MultipleIcons=InputGroup.bind({});MultipleIcons.args={label:"Label Text",value:"Text With Multiple Icons",iconLeft:FORM_ICON.info,iconRight:FORM_ICON.info};const StartAdornment=InputGroup.bind({});StartAdornment.args={label:"Label Text",value:"With Left Adornment",adornmentPosition:"start"};const WithText=InputGroup.bind({});WithText.args={label:"Label Text",adornmentText:"Text",adornmentPosition:"start"};const WithHint=InputGroup.bind({});WithHint.args={label:"Label Text",value:"With Hint",hint:"Sample hint"};const __namedExportsOrder=["Default","Disabled","Error","Success","MultipleIcons","StartAdornment","WithText","WithHint"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  label = 'Label Text',\n  value = '',\n  size = 'medium',\n  state = 'default',\n  hint = '',\n  iconRight = '',\n  iconLeft = '',\n  adornmentText = '',\n  adornmentPosition = 'end'\n}) => {\n  const disabled = state === 'disabled' ? 'disabled' : '';\n  const startPosition = adornmentPosition === 'start';\n  return `\n    <div class=\"form-field-row\">\n        <label class=\"form-label ${disabled}\" for=\"test-field\">\n          ${label}\n        </label>\n        <div class=\"input-group\">\n          ${startPosition ? `\n            <div class=\"input-group-adornment ${size}\">\n              <i class=\"ph-info ph-lg\"></i>\n              ${adornmentText.length ? `<span class=\"input-group-adornment-text\">${adornmentText}</span>` : ''}\n            </div>\n          ` : ''}\n          <div class=\"form-field ${state} ${size}\">\n            ${iconLeft.length ? `<span class=\"form-icon\">${iconLeft}</span>` : ''}\n            <input\n              id=\"test-field\"\n              type=\"text\"\n              value=\"${value}\"\n              class=\"form-input\"\n              placeholder=\"Input Value\"\n              ${disabled}\n            />\n            ${iconRight.length ? `<span class=\"form-icon\">${iconRight}</span>` : ''}\n          </div>\n          ${!startPosition ? `\n            <div class=\"input-group-adornment ${size}\">\n              <i class=\"ph-info ph-lg\"></i>\n              ${adornmentText.length ? `<span class=\"input-group-adornment-text\">${adornmentText}</span>` : ''}\n            </div>\n          ` : ''}\n        </div>\n        ${hint.length ? `<span class=\"form-hint ${state}\">${hint}</span>` : ''}\n    </div>\n`;\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"({\n  label = 'Label Text',\n  value = '',\n  size = 'medium',\n  state = 'default',\n  hint = '',\n  iconRight = '',\n  iconLeft = '',\n  adornmentText = '',\n  adornmentPosition = 'end'\n}) => {\n  const disabled = state === 'disabled' ? 'disabled' : '';\n  const startPosition = adornmentPosition === 'start';\n  return `\n    <div class=\"form-field-row\">\n        <label class=\"form-label ${disabled}\" for=\"test-field\">\n          ${label}\n        </label>\n        <div class=\"input-group\">\n          ${startPosition ? `\n            <div class=\"input-group-adornment ${size}\">\n              <i class=\"ph-info ph-lg\"></i>\n              ${adornmentText.length ? `<span class=\"input-group-adornment-text\">${adornmentText}</span>` : ''}\n            </div>\n          ` : ''}\n          <div class=\"form-field ${state} ${size}\">\n            ${iconLeft.length ? `<span class=\"form-icon\">${iconLeft}</span>` : ''}\n            <input\n              id=\"test-field\"\n              type=\"text\"\n              value=\"${value}\"\n              class=\"form-input\"\n              placeholder=\"Input Value\"\n              ${disabled}\n            />\n            ${iconRight.length ? `<span class=\"form-icon\">${iconRight}</span>` : ''}\n          </div>\n          ${!startPosition ? `\n            <div class=\"input-group-adornment ${size}\">\n              <i class=\"ph-info ph-lg\"></i>\n              ${adornmentText.length ? `<span class=\"input-group-adornment-text\">${adornmentText}</span>` : ''}\n            </div>\n          ` : ''}\n        </div>\n        ${hint.length ? `<span class=\"form-hint ${state}\">${hint}</span>` : ''}\n    </div>\n`;\n}",...Disabled.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"({\n  label = 'Label Text',\n  value = '',\n  size = 'medium',\n  state = 'default',\n  hint = '',\n  iconRight = '',\n  iconLeft = '',\n  adornmentText = '',\n  adornmentPosition = 'end'\n}) => {\n  const disabled = state === 'disabled' ? 'disabled' : '';\n  const startPosition = adornmentPosition === 'start';\n  return `\n    <div class=\"form-field-row\">\n        <label class=\"form-label ${disabled}\" for=\"test-field\">\n          ${label}\n        </label>\n        <div class=\"input-group\">\n          ${startPosition ? `\n            <div class=\"input-group-adornment ${size}\">\n              <i class=\"ph-info ph-lg\"></i>\n              ${adornmentText.length ? `<span class=\"input-group-adornment-text\">${adornmentText}</span>` : ''}\n            </div>\n          ` : ''}\n          <div class=\"form-field ${state} ${size}\">\n            ${iconLeft.length ? `<span class=\"form-icon\">${iconLeft}</span>` : ''}\n            <input\n              id=\"test-field\"\n              type=\"text\"\n              value=\"${value}\"\n              class=\"form-input\"\n              placeholder=\"Input Value\"\n              ${disabled}\n            />\n            ${iconRight.length ? `<span class=\"form-icon\">${iconRight}</span>` : ''}\n          </div>\n          ${!startPosition ? `\n            <div class=\"input-group-adornment ${size}\">\n              <i class=\"ph-info ph-lg\"></i>\n              ${adornmentText.length ? `<span class=\"input-group-adornment-text\">${adornmentText}</span>` : ''}\n            </div>\n          ` : ''}\n        </div>\n        ${hint.length ? `<span class=\"form-hint ${state}\">${hint}</span>` : ''}\n    </div>\n`;\n}",...Error.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"({\n  label = 'Label Text',\n  value = '',\n  size = 'medium',\n  state = 'default',\n  hint = '',\n  iconRight = '',\n  iconLeft = '',\n  adornmentText = '',\n  adornmentPosition = 'end'\n}) => {\n  const disabled = state === 'disabled' ? 'disabled' : '';\n  const startPosition = adornmentPosition === 'start';\n  return `\n    <div class=\"form-field-row\">\n        <label class=\"form-label ${disabled}\" for=\"test-field\">\n          ${label}\n        </label>\n        <div class=\"input-group\">\n          ${startPosition ? `\n            <div class=\"input-group-adornment ${size}\">\n              <i class=\"ph-info ph-lg\"></i>\n              ${adornmentText.length ? `<span class=\"input-group-adornment-text\">${adornmentText}</span>` : ''}\n            </div>\n          ` : ''}\n          <div class=\"form-field ${state} ${size}\">\n            ${iconLeft.length ? `<span class=\"form-icon\">${iconLeft}</span>` : ''}\n            <input\n              id=\"test-field\"\n              type=\"text\"\n              value=\"${value}\"\n              class=\"form-input\"\n              placeholder=\"Input Value\"\n              ${disabled}\n            />\n            ${iconRight.length ? `<span class=\"form-icon\">${iconRight}</span>` : ''}\n          </div>\n          ${!startPosition ? `\n            <div class=\"input-group-adornment ${size}\">\n              <i class=\"ph-info ph-lg\"></i>\n              ${adornmentText.length ? `<span class=\"input-group-adornment-text\">${adornmentText}</span>` : ''}\n            </div>\n          ` : ''}\n        </div>\n        ${hint.length ? `<span class=\"form-hint ${state}\">${hint}</span>` : ''}\n    </div>\n`;\n}",...Success.parameters?.docs?.source}}},MultipleIcons.parameters={...MultipleIcons.parameters,docs:{...MultipleIcons.parameters?.docs,source:{originalSource:"({\n  label = 'Label Text',\n  value = '',\n  size = 'medium',\n  state = 'default',\n  hint = '',\n  iconRight = '',\n  iconLeft = '',\n  adornmentText = '',\n  adornmentPosition = 'end'\n}) => {\n  const disabled = state === 'disabled' ? 'disabled' : '';\n  const startPosition = adornmentPosition === 'start';\n  return `\n    <div class=\"form-field-row\">\n        <label class=\"form-label ${disabled}\" for=\"test-field\">\n          ${label}\n        </label>\n        <div class=\"input-group\">\n          ${startPosition ? `\n            <div class=\"input-group-adornment ${size}\">\n              <i class=\"ph-info ph-lg\"></i>\n              ${adornmentText.length ? `<span class=\"input-group-adornment-text\">${adornmentText}</span>` : ''}\n            </div>\n          ` : ''}\n          <div class=\"form-field ${state} ${size}\">\n            ${iconLeft.length ? `<span class=\"form-icon\">${iconLeft}</span>` : ''}\n            <input\n              id=\"test-field\"\n              type=\"text\"\n              value=\"${value}\"\n              class=\"form-input\"\n              placeholder=\"Input Value\"\n              ${disabled}\n            />\n            ${iconRight.length ? `<span class=\"form-icon\">${iconRight}</span>` : ''}\n          </div>\n          ${!startPosition ? `\n            <div class=\"input-group-adornment ${size}\">\n              <i class=\"ph-info ph-lg\"></i>\n              ${adornmentText.length ? `<span class=\"input-group-adornment-text\">${adornmentText}</span>` : ''}\n            </div>\n          ` : ''}\n        </div>\n        ${hint.length ? `<span class=\"form-hint ${state}\">${hint}</span>` : ''}\n    </div>\n`;\n}",...MultipleIcons.parameters?.docs?.source}}},StartAdornment.parameters={...StartAdornment.parameters,docs:{...StartAdornment.parameters?.docs,source:{originalSource:"({\n  label = 'Label Text',\n  value = '',\n  size = 'medium',\n  state = 'default',\n  hint = '',\n  iconRight = '',\n  iconLeft = '',\n  adornmentText = '',\n  adornmentPosition = 'end'\n}) => {\n  const disabled = state === 'disabled' ? 'disabled' : '';\n  const startPosition = adornmentPosition === 'start';\n  return `\n    <div class=\"form-field-row\">\n        <label class=\"form-label ${disabled}\" for=\"test-field\">\n          ${label}\n        </label>\n        <div class=\"input-group\">\n          ${startPosition ? `\n            <div class=\"input-group-adornment ${size}\">\n              <i class=\"ph-info ph-lg\"></i>\n              ${adornmentText.length ? `<span class=\"input-group-adornment-text\">${adornmentText}</span>` : ''}\n            </div>\n          ` : ''}\n          <div class=\"form-field ${state} ${size}\">\n            ${iconLeft.length ? `<span class=\"form-icon\">${iconLeft}</span>` : ''}\n            <input\n              id=\"test-field\"\n              type=\"text\"\n              value=\"${value}\"\n              class=\"form-input\"\n              placeholder=\"Input Value\"\n              ${disabled}\n            />\n            ${iconRight.length ? `<span class=\"form-icon\">${iconRight}</span>` : ''}\n          </div>\n          ${!startPosition ? `\n            <div class=\"input-group-adornment ${size}\">\n              <i class=\"ph-info ph-lg\"></i>\n              ${adornmentText.length ? `<span class=\"input-group-adornment-text\">${adornmentText}</span>` : ''}\n            </div>\n          ` : ''}\n        </div>\n        ${hint.length ? `<span class=\"form-hint ${state}\">${hint}</span>` : ''}\n    </div>\n`;\n}",...StartAdornment.parameters?.docs?.source}}},WithText.parameters={...WithText.parameters,docs:{...WithText.parameters?.docs,source:{originalSource:"({\n  label = 'Label Text',\n  value = '',\n  size = 'medium',\n  state = 'default',\n  hint = '',\n  iconRight = '',\n  iconLeft = '',\n  adornmentText = '',\n  adornmentPosition = 'end'\n}) => {\n  const disabled = state === 'disabled' ? 'disabled' : '';\n  const startPosition = adornmentPosition === 'start';\n  return `\n    <div class=\"form-field-row\">\n        <label class=\"form-label ${disabled}\" for=\"test-field\">\n          ${label}\n        </label>\n        <div class=\"input-group\">\n          ${startPosition ? `\n            <div class=\"input-group-adornment ${size}\">\n              <i class=\"ph-info ph-lg\"></i>\n              ${adornmentText.length ? `<span class=\"input-group-adornment-text\">${adornmentText}</span>` : ''}\n            </div>\n          ` : ''}\n          <div class=\"form-field ${state} ${size}\">\n            ${iconLeft.length ? `<span class=\"form-icon\">${iconLeft}</span>` : ''}\n            <input\n              id=\"test-field\"\n              type=\"text\"\n              value=\"${value}\"\n              class=\"form-input\"\n              placeholder=\"Input Value\"\n              ${disabled}\n            />\n            ${iconRight.length ? `<span class=\"form-icon\">${iconRight}</span>` : ''}\n          </div>\n          ${!startPosition ? `\n            <div class=\"input-group-adornment ${size}\">\n              <i class=\"ph-info ph-lg\"></i>\n              ${adornmentText.length ? `<span class=\"input-group-adornment-text\">${adornmentText}</span>` : ''}\n            </div>\n          ` : ''}\n        </div>\n        ${hint.length ? `<span class=\"form-hint ${state}\">${hint}</span>` : ''}\n    </div>\n`;\n}",...WithText.parameters?.docs?.source}}},WithHint.parameters={...WithHint.parameters,docs:{...WithHint.parameters?.docs,source:{originalSource:"({\n  label = 'Label Text',\n  value = '',\n  size = 'medium',\n  state = 'default',\n  hint = '',\n  iconRight = '',\n  iconLeft = '',\n  adornmentText = '',\n  adornmentPosition = 'end'\n}) => {\n  const disabled = state === 'disabled' ? 'disabled' : '';\n  const startPosition = adornmentPosition === 'start';\n  return `\n    <div class=\"form-field-row\">\n        <label class=\"form-label ${disabled}\" for=\"test-field\">\n          ${label}\n        </label>\n        <div class=\"input-group\">\n          ${startPosition ? `\n            <div class=\"input-group-adornment ${size}\">\n              <i class=\"ph-info ph-lg\"></i>\n              ${adornmentText.length ? `<span class=\"input-group-adornment-text\">${adornmentText}</span>` : ''}\n            </div>\n          ` : ''}\n          <div class=\"form-field ${state} ${size}\">\n            ${iconLeft.length ? `<span class=\"form-icon\">${iconLeft}</span>` : ''}\n            <input\n              id=\"test-field\"\n              type=\"text\"\n              value=\"${value}\"\n              class=\"form-input\"\n              placeholder=\"Input Value\"\n              ${disabled}\n            />\n            ${iconRight.length ? `<span class=\"form-icon\">${iconRight}</span>` : ''}\n          </div>\n          ${!startPosition ? `\n            <div class=\"input-group-adornment ${size}\">\n              <i class=\"ph-info ph-lg\"></i>\n              ${adornmentText.length ? `<span class=\"input-group-adornment-text\">${adornmentText}</span>` : ''}\n            </div>\n          ` : ''}\n        </div>\n        ${hint.length ? `<span class=\"form-hint ${state}\">${hint}</span>` : ''}\n    </div>\n`;\n}",...WithHint.parameters?.docs?.source}}}}}]);