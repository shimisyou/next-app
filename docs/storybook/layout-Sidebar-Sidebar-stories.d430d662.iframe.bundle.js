"use strict";(self.webpackChunknext_app=self.webpackChunknext_app||[]).push([[249],{"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _inheritsLoose(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,_setPrototypeOf(t,o)}__webpack_require__.d(__webpack_exports__,{A:()=>_inheritsLoose})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutPropertiesLoose})},"./node_modules/@mui/material/utils/useForkRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef/useForkRef.js").A},"./node_modules/@mui/utils/esm/setRef/setRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function setRef(ref,value){"function"==typeof ref?ref(value):ref&&(ref.current=value)}__webpack_require__.d(__webpack_exports__,{A:()=>setRef})},"./node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_useEnhancedEffect_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js");const __WEBPACK_DEFAULT_EXPORT__=function useEventCallback(fn){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(fn);return(0,_useEnhancedEffect_index_js__WEBPACK_IMPORTED_MODULE_1__.A)((()=>{ref.current=fn})),react__WEBPACK_IMPORTED_MODULE_0__.useRef(((...args)=>(0,ref.current)(...args))).current}},"./node_modules/@mui/utils/esm/useForkRef/useForkRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useForkRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_setRef_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/setRef/setRef.js");function useForkRef(...refs){return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>refs.every((ref=>null==ref))?null:instance=>{refs.forEach((ref=>{(0,_setRef_index_js__WEBPACK_IMPORTED_MODULE_1__.A)(ref,instance)}))}),refs)}},"./components/layout/Sidebar/Sidebar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./components/layout/Sidebar/Sidebar.tsx").A,args:{isOpen:!0,toggleSidebar:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},Default={},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}}},"./components/layout/Sidebar/Sidebar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Drawer_List_ListItem_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/Drawer/Drawer.js"),_barrel_optimize_names_Drawer_List_ListItem_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/List/List.js"),_barrel_optimize_names_Drawer_List_ListItem_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/ListItem/ListItem.js"),_barrel_optimize_names_Drawer_List_ListItem_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js");const Sidebar=({isOpen,toggleSidebar})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Drawer_List_ListItem_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__.Ay,{anchor:"left",open:isOpen,onClose:toggleSidebar,variant:"temporary",disableScrollLock:!0,slotProps:{backdrop:{style:{backgroundColor:"transparent"}}},sx:{"& .MuiDrawer-paper":{width:"240px",bgcolor:"#f5f5f5",boxShadow:"4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff",borderRadius:"0 16px 16px 0",padding:"16px"}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Drawer_List_ListItem_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.A,{sx:{gap:2,display:"flex",flexDirection:"column"},children:["Storybook"].map(((text,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Drawer_List_ListItem_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Ay,{component:"a",href:"https://shimisyou.github.io/next-app/storybook/",target:"_blank",sx:{bgcolor:"#f5f5f5",borderRadius:"16px",boxShadow:"6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff",color:"#333",padding:"15px 20px",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease-in-out","&:hover":{bgcolor:"#eaeaea"}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Drawer_List_ListItem_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{variant:"body1",sx:{fontWeight:"bold",textShadow:"0 0 5px rgba(0, 0, 0, 0.2)",textAlign:"center"},children:text})},index)))})}),__WEBPACK_DEFAULT_EXPORT__=Sidebar;Sidebar.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},toggleSidebar:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./node_modules/react-transition-group/esm/TransitionGroupContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createContext(null)}}]);