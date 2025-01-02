"use strict";(self.webpackChunknext_app=self.webpackChunknext_app||[]).push([[291],{"./features/sample/SampleForm/SampleForm.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SampleFormComponent:()=>SampleFormComponent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SampleForm_stories});var dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),MarkdownEditor=__webpack_require__("./components/elements/Markdown/MarkdownEditor/MarkdownEditor.tsx"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),console=__webpack_require__("./node_modules/console-browserify/index.js");const SampleForm=()=>{const{control,handleSubmit,getValues}=(0,index_esm.mN)({defaultValues:{markdown:"",title:""}});return(0,jsx_runtime.jsxs)("form",{onSubmit:handleSubmit((data=>{console.log(data)})),children:[(0,jsx_runtime.jsxs)(Stack.A,{spacing:1,gap:1,children:[(0,jsx_runtime.jsx)(index_esm.xI,{name:"title",control,rules:{required:!0},render:({field})=>(0,jsx_runtime.jsx)(TextField.A,{label:"タイトル",required:!0,defaultValue:getValues("title"),onChange:field.onChange})}),(0,jsx_runtime.jsx)(index_esm.xI,{name:"markdown",control,render:({field})=>(0,jsx_runtime.jsx)(MarkdownEditor.n,{...field,defaultValue:getValues("markdown"),onChange:field.onChange,placeholder:"本文を入力してくだい"})})]}),(0,jsx_runtime.jsx)(Button.A,{type:"submit",variant:"contained",color:"primary",sx:{mt:2},children:"Submit"})]})};SampleForm.__docgenInfo={description:"",methods:[],displayName:"SampleForm"};const SampleForm_stories={component:SampleForm},SampleFormComponent={args:{defaultValue:"",placeholder:"markdown形式で入力",onChange:(0,dist.fn)()},play:async({})=>{}},__namedExportsOrder=["SampleFormComponent"];SampleFormComponent.parameters={...SampleFormComponent.parameters,docs:{...SampleFormComponent.parameters?.docs,source:{originalSource:"{\n  args: {\n    defaultValue: '',\n    placeholder: 'markdown形式で入力',\n    onChange: fn()\n  },\n  play: async ({}) => {}\n}",...SampleFormComponent.parameters?.docs?.source}}}},"./components/elements/Markdown/MarkdownEditor/MarkdownEditor.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>MarkdownEditor});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_uiw_react_md_editor__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@uiw/react-md-editor/esm/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),rehype_sanitize__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rehype-sanitize/lib/index.js");const MarkdownEditor=({defaultValue,placeholder,onChange})=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultValue);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{"data-color-mode":"light",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_uiw_react_md_editor__WEBPACK_IMPORTED_MODULE_1__.Ay,{value,textareaProps:{placeholder},onChange:value=>{setValue(value||""),onChange(value||"")},previewOptions:{rehypePlugins:[[rehype_sanitize__WEBPACK_IMPORTED_MODULE_4__.A]]}})})};MarkdownEditor.__docgenInfo={description:"",methods:[],displayName:"MarkdownEditor",props:{defaultValue:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}}}}]);