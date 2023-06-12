"use strict";(self.webpackChunk_compassion_gds_core=self.webpackChunk_compassion_gds_core||[]).push([[999],{"./src/components/Modal/Modal.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Small:()=>Small,Wide:()=>Wide,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Modal",argTypes:{header:{control:"boolean"},footer:{control:"boolean"},title:{control:"text"},size:{control:{type:"select"},options:["default","small","wide"]}}},Template=({header=!0,footer=!0,title="title",size="default"})=>`\n    <button type="button" class="button-main secondary medium" onclick='openModal()'>Open Modal</button>\n    <span id="example-backdrop" style="position: fixed; inset: 0; background: black; opacity: 0.7; "></span>\n    <div id="example-modal" class="modal ${size}">\n        <span id="example-modal-close" class="modal-button-close" onclick='closeModal()'>\n          <i class="ph-x ph-xl"></i>\n        </span>\n        ${renderHeader({header,title})}\n        <div class="modal-body">\n          <div style="border: 3px dashed; text-align: center; border-radius: 4px; margin: 10px; padding: 10px;">Slot</div>\n        </div>\n        ${renderFooter({footer})}\n    </div>\n\n    <script>\n      var modal = document.getElementById('example-modal');\n      var backdrop = document.getElementById('example-backdrop');\n      \n      function openModal() {\n        modal.style.display = 'block';\n        backdrop.style.display = 'block';\n      }\n      \n      function closeModal() {\n        modal.style.display = 'none';\n        backdrop.style.display = 'none';\n      }\n    <\/script>\n`,renderHeader=({header,title})=>header?`<div class="modal-header">${title}</div>`:"",renderFooter=({footer})=>footer?'\n    <div class="modal-footer">\n      <button type="button" class="button-main secondary medium">Button 2</button>\n      <button type="button" class="button-main primary medium">Button 1</button>\n    </div>\n    ':"",Default=Template.bind({});Default.args={size:"default"};const Small=Template.bind({});Small.args={size:"small"};const Wide=Template.bind({});Wide.args={size:"wide"};const __namedExportsOrder=["Default","Small","Wide"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'({\n  header = true,\n  footer = true,\n  title = \'title\',\n  size = \'default\'\n}) => {\n  return `\n    <button type="button" class="button-main secondary medium" onclick=\'openModal()\'>Open Modal</button>\n    <span id="example-backdrop" style="position: fixed; inset: 0; background: black; opacity: 0.7; "></span>\n    <div id="example-modal" class="modal ${size}">\n        <span id="example-modal-close" class="modal-button-close" onclick=\'closeModal()\'>\n          <i class="ph-x ph-xl"></i>\n        </span>\n        ${renderHeader({\n    header,\n    title\n  })}\n        <div class="modal-body">\n          <div style="border: 3px dashed; text-align: center; border-radius: 4px; margin: 10px; padding: 10px;">Slot</div>\n        </div>\n        ${renderFooter({\n    footer\n  })}\n    </div>\n\n    <script>\n      var modal = document.getElementById(\'example-modal\');\n      var backdrop = document.getElementById(\'example-backdrop\');\n      \n      function openModal() {\n        modal.style.display = \'block\';\n        backdrop.style.display = \'block\';\n      }\n      \n      function closeModal() {\n        modal.style.display = \'none\';\n        backdrop.style.display = \'none\';\n      }\n    <\/script>\n`;\n}',...Default.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'({\n  header = true,\n  footer = true,\n  title = \'title\',\n  size = \'default\'\n}) => {\n  return `\n    <button type="button" class="button-main secondary medium" onclick=\'openModal()\'>Open Modal</button>\n    <span id="example-backdrop" style="position: fixed; inset: 0; background: black; opacity: 0.7; "></span>\n    <div id="example-modal" class="modal ${size}">\n        <span id="example-modal-close" class="modal-button-close" onclick=\'closeModal()\'>\n          <i class="ph-x ph-xl"></i>\n        </span>\n        ${renderHeader({\n    header,\n    title\n  })}\n        <div class="modal-body">\n          <div style="border: 3px dashed; text-align: center; border-radius: 4px; margin: 10px; padding: 10px;">Slot</div>\n        </div>\n        ${renderFooter({\n    footer\n  })}\n    </div>\n\n    <script>\n      var modal = document.getElementById(\'example-modal\');\n      var backdrop = document.getElementById(\'example-backdrop\');\n      \n      function openModal() {\n        modal.style.display = \'block\';\n        backdrop.style.display = \'block\';\n      }\n      \n      function closeModal() {\n        modal.style.display = \'none\';\n        backdrop.style.display = \'none\';\n      }\n    <\/script>\n`;\n}',...Small.parameters?.docs?.source}}},Wide.parameters={...Wide.parameters,docs:{...Wide.parameters?.docs,source:{originalSource:'({\n  header = true,\n  footer = true,\n  title = \'title\',\n  size = \'default\'\n}) => {\n  return `\n    <button type="button" class="button-main secondary medium" onclick=\'openModal()\'>Open Modal</button>\n    <span id="example-backdrop" style="position: fixed; inset: 0; background: black; opacity: 0.7; "></span>\n    <div id="example-modal" class="modal ${size}">\n        <span id="example-modal-close" class="modal-button-close" onclick=\'closeModal()\'>\n          <i class="ph-x ph-xl"></i>\n        </span>\n        ${renderHeader({\n    header,\n    title\n  })}\n        <div class="modal-body">\n          <div style="border: 3px dashed; text-align: center; border-radius: 4px; margin: 10px; padding: 10px;">Slot</div>\n        </div>\n        ${renderFooter({\n    footer\n  })}\n    </div>\n\n    <script>\n      var modal = document.getElementById(\'example-modal\');\n      var backdrop = document.getElementById(\'example-backdrop\');\n      \n      function openModal() {\n        modal.style.display = \'block\';\n        backdrop.style.display = \'block\';\n      }\n      \n      function closeModal() {\n        modal.style.display = \'none\';\n        backdrop.style.display = \'none\';\n      }\n    <\/script>\n`;\n}',...Wide.parameters?.docs?.source}}}}}]);