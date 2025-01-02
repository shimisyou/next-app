"use strict";(self.webpackChunknext_app=self.webpackChunknext_app||[]).push([[592],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutPropertiesLoose})},"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>extendSxProp});var _mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge/deepmerge.js"),_defaultSxConfig_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js");const splitProps=props=>{const result={systemProps:{},otherProps:{}},config=props?.theme?.unstable_sxConfig??_defaultSxConfig_js__WEBPACK_IMPORTED_MODULE_0__.A;return Object.keys(props).forEach((prop=>{config[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx,...other}=props,{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_1__.Q)(result)?{...systemProps,...result}:systemProps}:{...systemProps,...inSx},{...otherProps,sx:finalSx}}},"./node_modules/@mui/system/esm/useTheme/useTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>esm_useTheme_useTheme});var createTheme=__webpack_require__("./node_modules/@mui/system/esm/createTheme/createTheme.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),emotion_element_f0de968e_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js");const useThemeWithoutDefault=function useTheme(defaultTheme=null){const contextTheme=react.useContext(emotion_element_f0de968e_browser_esm.T);return!contextTheme||function isObjectEmpty(obj){return 0===Object.keys(obj).length}(contextTheme)?defaultTheme:contextTheme},systemDefaultTheme=(0,createTheme.A)();const esm_useTheme_useTheme=function useTheme_useTheme(defaultTheme=systemDefaultTheme){return useThemeWithoutDefault(defaultTheme)}},"./components/elements/Markdown/MarkdownEditor/MarkdownEditor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MarkdownEditorComponent:()=>MarkdownEditorComponent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={tags:["autodocs"],component:__webpack_require__("./components/elements/Markdown/MarkdownEditor/MarkdownEditor.tsx").n},MarkdownEditorComponent={args:{defaultValue:"",placeholder:"markdown形式で入力",onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()},play:async({canvasElement,args,step})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement);await step("初期値を検証",(async()=>{const textArea=canvas.getByRole("textbox");(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(textArea).toHaveValue(args.defaultValue)})),await step("新しい値を入力",(async()=>{const textArea=canvas.getByRole("textbox");await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(textArea,"This is a test."),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(textArea).toHaveValue(`${args.defaultValue}This is a test.`)})),await step("onChangeに値が渡されている確認",(async()=>{(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(args.onChange).toHaveBeenLastCalledWith(`${args.defaultValue}This is a test.`)}))}},__namedExportsOrder=["MarkdownEditorComponent"];MarkdownEditorComponent.parameters={...MarkdownEditorComponent.parameters,docs:{...MarkdownEditorComponent.parameters?.docs,source:{originalSource:"{\n  args: {\n    defaultValue: '',\n    placeholder: 'markdown形式で入力',\n    onChange: fn()\n  },\n  play: async ({\n    canvasElement,\n    args,\n    step\n  }) => {\n    const canvas = within(canvasElement);\n    await step('初期値を検証', async () => {\n      const textArea = canvas.getByRole('textbox');\n      expect(textArea).toHaveValue(args.defaultValue);\n    });\n    await step('新しい値を入力', async () => {\n      const textArea = canvas.getByRole('textbox');\n      await userEvent.type(textArea, 'This is a test.');\n      expect(textArea).toHaveValue(`${args.defaultValue}This is a test.`);\n    });\n    await step('onChangeに値が渡されている確認', async () => {\n      expect(args.onChange).toHaveBeenLastCalledWith(`${args.defaultValue}This is a test.`);\n    });\n  }\n}",...MarkdownEditorComponent.parameters?.docs?.source}}}},"./components/elements/Markdown/MarkdownEditor/MarkdownEditor.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>MarkdownEditor});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_uiw_react_md_editor__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@uiw/react-md-editor/esm/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),rehype_sanitize__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rehype-sanitize/lib/index.js");const MarkdownEditor=({defaultValue,placeholder,onChange})=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultValue);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{"data-color-mode":"light",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_uiw_react_md_editor__WEBPACK_IMPORTED_MODULE_1__.Ay,{value,textareaProps:{placeholder},onChange:value=>{setValue(value||""),onChange(value||"")},previewOptions:{rehypePlugins:[[rehype_sanitize__WEBPACK_IMPORTED_MODULE_4__.A]]}})})};MarkdownEditor.__docgenInfo={description:"",methods:[],displayName:"MarkdownEditor",props:{defaultValue:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}}}}]);