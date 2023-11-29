"use strict";(self.webpackChunk_compassion_design_system_react=self.webpackChunk_compassion_design_system_react||[]).push([[747],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Emphasis:()=>Emphasis,Kinds:()=>Kinds,Playground:()=>Playground,Size:()=>Size,State:()=>State,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});var Button=__webpack_require__("./src/components/Button/Button.tsx"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx");const wrappingElementComment="The wrapping element is only used for Storybook layout and can be removed from your code.";var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Button_stories={title:"Components/Button",component:Button.Z},iconArgTypes={control:{type:"select"},options:Object.keys(Icon.$z).sort()},Default={args:{label:"Button Label"}},Playground={args:{label:"Controlled Button"},argTypes:{emphasis:{control:{type:"select"},options:["primary","secondary","tertiary"]},kind:{control:{type:"select"},options:["default","cta","white","inverted","destructive"]},size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"select"},options:[!0,!1]},icon:iconArgTypes,iconDescription:{control:"text"},iconPosition:{control:{type:"select"},options:["start","end"]},showLabel:{control:{type:"select"},options:[!0,!1]}}},Kinds=args=>(0,jsx_runtime.jsxs)("div",{className:"cds-storybook__story__wrap","data-comment":wrappingElementComment,children:[(0,jsx_runtime.jsx)(Button.Z,{label:"Default"}),(0,jsx_runtime.jsx)(Button.Z,{label:"CTA",kind:"cta"}),(0,jsx_runtime.jsx)(Button.Z,{label:"White",kind:"white"}),(0,jsx_runtime.jsx)(Button.Z,{label:"Inverted",kind:"inverted"}),(0,jsx_runtime.jsx)(Button.Z,{label:"Destructive",kind:"destructive"})]});Kinds.displayName="Kinds";const Emphasis=args=>(0,jsx_runtime.jsxs)("div",{className:"cds-storybook__story__wrap","data-comment":wrappingElementComment,children:[(0,jsx_runtime.jsx)(Button.Z,{label:"Primary",emphasis:"primary"}),(0,jsx_runtime.jsx)(Button.Z,{label:"Secondary",emphasis:"secondary"}),(0,jsx_runtime.jsx)(Button.Z,{label:"Tertiary",emphasis:"tertiary"})]});Emphasis.displayName="Emphasis";const Size=args=>(0,jsx_runtime.jsxs)("div",{className:"cds-storybook__story__wrap","data-comment":wrappingElementComment,children:[(0,jsx_runtime.jsx)(Button.Z,{label:"Small",size:"small"}),(0,jsx_runtime.jsx)(Button.Z,{label:"Medium",size:"medium"}),(0,jsx_runtime.jsx)(Button.Z,{label:"Large",size:"large"})]});Size.displayName="Size";const State=args=>(0,jsx_runtime.jsx)("div",{className:"cds-storybook__story__wrap","data-comment":wrappingElementComment,children:(0,jsx_runtime.jsx)(Button.Z,{label:"Disabled",disabled:!0})});State.displayName="State";const WithIcon=args=>(0,jsx_runtime.jsxs)("div",{className:"cds-storybook__story__wrap","data-comment":wrappingElementComment,children:[(0,jsx_runtime.jsx)(Button.Z,{label:"Icon Start",icon:"compass"}),(0,jsx_runtime.jsx)(Button.Z,{label:"Icon End",icon:"arrowRight",iconPosition:"end"}),(0,jsx_runtime.jsx)(Button.Z,{label:"Confirm choices",icon:"check",showLabel:!1})]});WithIcon.displayName="WithIcon",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Button Label'\n  }\n}",...Default.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Controlled Button'\n  },\n  argTypes: {\n    emphasis: emphasisArgTypes,\n    kind: kindArgTypes,\n    size: sizeArgTypes,\n    disabled: disabledArgTypes,\n    icon: iconArgTypes,\n    iconDescription: iconDescriptionArgType,\n    iconPosition: iconPositionArgTypes,\n    showLabel: showLabelArgTypes\n  }\n}",...Playground.parameters?.docs?.source}}},Kinds.parameters={...Kinds.parameters,docs:{...Kinds.parameters?.docs,source:{originalSource:'args => <div className={wrappingElementClass} data-comment={wrappingElementComment}>\n    <Button label="Default" />\n    <Button label="CTA" kind="cta" />\n    <Button label="White" kind="white" />\n    <Button label="Inverted" kind="inverted" />\n    <Button label="Destructive" kind="destructive" />\n  </div>',...Kinds.parameters?.docs?.source}}},Emphasis.parameters={...Emphasis.parameters,docs:{...Emphasis.parameters?.docs,source:{originalSource:'args => <div className={wrappingElementClass} data-comment={wrappingElementComment}>\n    <Button label="Primary" emphasis="primary" />\n    <Button label="Secondary" emphasis="secondary" />\n    <Button label="Tertiary" emphasis="tertiary" />\n  </div>',...Emphasis.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:'args => <div className={wrappingElementClass} data-comment={wrappingElementComment}>\n    <Button label="Small" size="small" />\n    <Button label="Medium" size="medium" />\n    <Button label="Large" size="large" />\n  </div>',...Size.parameters?.docs?.source}}},State.parameters={...State.parameters,docs:{...State.parameters?.docs,source:{originalSource:'args => <div className={wrappingElementClass} data-comment={wrappingElementComment}>\n    <Button label="Disabled" disabled />\n  </div>',...State.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'args => <div className={wrappingElementClass} data-comment={wrappingElementComment}>\n    <Button label="Icon Start" icon="compass" />\n    <Button label="Icon End" icon="arrowRight" iconPosition="end" />\n    <Button label="Confirm choices" icon="check" showLabel={false} />\n  </div>',...WithIcon.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Playground","Kinds","Emphasis","Size","State","WithIcon"];try{Kinds.displayName="Kinds",Kinds.__docgenInfo={description:"",displayName:"Kinds",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.stories.tsx#Kinds"]={docgenInfo:Kinds.__docgenInfo,name:"Kinds",path:"src/components/Button/Button.stories.tsx#Kinds"})}catch(__react_docgen_typescript_loader_error){}try{Emphasis.displayName="Emphasis",Emphasis.__docgenInfo={description:"",displayName:"Emphasis",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.stories.tsx#Emphasis"]={docgenInfo:Emphasis.__docgenInfo,name:"Emphasis",path:"src/components/Button/Button.stories.tsx#Emphasis"})}catch(__react_docgen_typescript_loader_error){}try{Size.displayName="Size",Size.__docgenInfo={description:"",displayName:"Size",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.stories.tsx#Size"]={docgenInfo:Size.__docgenInfo,name:"Size",path:"src/components/Button/Button.stories.tsx#Size"})}catch(__react_docgen_typescript_loader_error){}try{State.displayName="State",State.__docgenInfo={description:"",displayName:"State",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.stories.tsx#State"]={docgenInfo:State.__docgenInfo,name:"State",path:"src/components/Button/Button.stories.tsx#State"})}catch(__react_docgen_typescript_loader_error){}try{WithIcon.displayName="WithIcon",WithIcon.__docgenInfo={description:"",displayName:"WithIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.stories.tsx#WithIcon"]={docgenInfo:WithIcon.__docgenInfo,name:"WithIcon",path:"src/components/Button/Button.stories.tsx#WithIcon"})}catch(__react_docgen_typescript_loader_error){}}}]);