"use strict";(self.webpackChunk_compassion_design_system_core=self.webpackChunk_compassion_design_system_core||[]).push([[686],{"./src/components/Icon/Icon.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color:()=>Color,Default:()=>Default,Size:()=>Size,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Icon",decorators:[]},iconDescriptionArgType={control:"text"},phosphorIconClassesArgType={control:"text"},sizeArgType={control:{type:"select"},options:["xs","sm","md","lg"]},colorArgType={control:{type:"select"},options:["default","primary","muted"]},Template=({phosphorIconClasses="ph-church",size="md",color="default",iconDescription="icon"})=>`\n  <div class=".c-icon__container ">\n    <i class="${[phosphorIconClasses,`c-icon__svg--${size}`,`c-icon__svg--${color}`].join(" ")}" aria-hidden="true"></i>\n    <span class="c-icon__description">${iconDescription}</span>\n  </div>\n  `,Default=Template.bind({});Default.argTypes={iconDescription:iconDescriptionArgType,phosphorIconClasses:phosphorIconClassesArgType,size:sizeArgType,color:colorArgType},Default.args={iconDescription:"Compass",phosphorIconClasses:"ph-compass",size:"md",color:"default"};const Size=Template.bind({});Size.argTypes={iconDescription:iconDescriptionArgType,phosphorIconClasses:phosphorIconClassesArgType,size:sizeArgType},Size.args={iconDescription:"Confetti",phosphorIconClasses:"ph-confetti",size:"md"};const Color=Template.bind({});Color.argTypes={iconDescription:iconDescriptionArgType,phosphorIconClasses:phosphorIconClassesArgType,color:colorArgType},Color.args={iconDescription:"Confetti",phosphorIconClasses:"ph-confetti",color:"default"};const __namedExportsOrder=["Default","Size","Color"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  phosphorIconClasses = 'ph-church',\n  size = 'md',\n  color = 'default',\n  iconDescription = 'icon'\n}) => {\n  // Create CSS classes in the .module.css file and add them as needed\n  const classNames = [phosphorIconClasses, `c-icon__svg--${size}`, `c-icon__svg--${color}`].join(' ');\n\n  // Add component html to the return statement below\n  return `\n  <div class=\".c-icon__container \">\n    <i class=\"${classNames}\" aria-hidden=\"true\"></i>\n    <span class=\"c-icon__description\">${iconDescription}</span>\n  </div>\n  `;\n}",...Default.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:"({\n  phosphorIconClasses = 'ph-church',\n  size = 'md',\n  color = 'default',\n  iconDescription = 'icon'\n}) => {\n  // Create CSS classes in the .module.css file and add them as needed\n  const classNames = [phosphorIconClasses, `c-icon__svg--${size}`, `c-icon__svg--${color}`].join(' ');\n\n  // Add component html to the return statement below\n  return `\n  <div class=\".c-icon__container \">\n    <i class=\"${classNames}\" aria-hidden=\"true\"></i>\n    <span class=\"c-icon__description\">${iconDescription}</span>\n  </div>\n  `;\n}",...Size.parameters?.docs?.source}}},Color.parameters={...Color.parameters,docs:{...Color.parameters?.docs,source:{originalSource:"({\n  phosphorIconClasses = 'ph-church',\n  size = 'md',\n  color = 'default',\n  iconDescription = 'icon'\n}) => {\n  // Create CSS classes in the .module.css file and add them as needed\n  const classNames = [phosphorIconClasses, `c-icon__svg--${size}`, `c-icon__svg--${color}`].join(' ');\n\n  // Add component html to the return statement below\n  return `\n  <div class=\".c-icon__container \">\n    <i class=\"${classNames}\" aria-hidden=\"true\"></i>\n    <span class=\"c-icon__description\">${iconDescription}</span>\n  </div>\n  `;\n}",...Color.parameters?.docs?.source}}}}}]);