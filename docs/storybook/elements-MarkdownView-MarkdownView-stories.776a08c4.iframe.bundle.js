"use strict";(self.webpackChunknext_app=self.webpackChunknext_app||[]).push([[946],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutPropertiesLoose})},"./components/elements/MarkdownView/MarkdownView.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MarkdownViewComponent:()=>MarkdownViewComponent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MarkdownView_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),esm=__webpack_require__("./node_modules/@uiw/react-md-editor/esm/index.js");const MarkdownView=({markdown})=>(0,jsx_runtime.jsx)(Box.A,{"data-color-mode":"light",children:(0,jsx_runtime.jsx)(esm.Ay.Markdown,{source:markdown,style:{padding:"20px"}})}),MarkdownView_MarkdownView=MarkdownView;MarkdownView.__docgenInfo={description:"",methods:[],displayName:"MarkdownView",props:{markdown:{required:!0,tsType:{name:"string"},description:""}}};const MarkdownView_stories={title:"components/elements/MarkdownView",tags:["autodocs"],component:MarkdownView_MarkdownView},MarkdownViewComponent={args:{markdown:'\n# 見出し\n\n**このマークダウンについて**\n\n## 見出し2\n\n\n## コードブロック\n\n```javascript\nalert("アラート")\n```\n\n## テーブル\n| Header | Header |\n|--------|--------|\n| Cell   | Cell   |\n| Cell   | Cell   |\n| Cell   | Cell   |\n'}},__namedExportsOrder=["MarkdownViewComponent"];MarkdownViewComponent.parameters={...MarkdownViewComponent.parameters,docs:{...MarkdownViewComponent.parameters?.docs,source:{originalSource:"{\n  args: {\n    markdown: markdown\n  }\n}",...MarkdownViewComponent.parameters?.docs?.source}}}}}]);