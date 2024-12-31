(self.webpackChunknext_app=self.webpackChunknext_app||[]).push([[385],{"./node_modules/@mui/icons-material/esm/Home.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__.A)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home")},"./node_modules/@mui/material/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Box_Box});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),styled_engine=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),styleFunctionSx=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),useTheme=__webpack_require__("./node_modules/@mui/system/esm/useTheme/useTheme.js"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");var ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),identifier=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");const Box_boxClasses=(0,__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js").A)("MuiBox",["root"]),defaultTheme=(0,createTheme.A)(),Box=function createBox(options={}){const{themeId,defaultTheme,defaultClassName="MuiBox-root",generateClassName}=options,BoxRoot=(0,styled_engine.Ay)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx.A);return react.forwardRef((function Box(inProps,ref){const theme=(0,useTheme.A)(defaultTheme),{className,component="div",...other}=(0,extendSxProp.A)(inProps);return(0,jsx_runtime.jsx)(BoxRoot,{as:component,ref,className:(0,clsx.A)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme:themeId&&theme[themeId]||theme,...other})}))}({themeId:identifier.A,defaultTheme,defaultClassName:Box_boxClasses.root,generateClassName:ClassNameGenerator.A.generate}),Box_Box=Box},"./node_modules/@mui/material/utils/createSvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>createSvgIcon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),memoTheme=__webpack_require__("./node_modules/@mui/material/utils/memoTheme.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSvgIconUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiSvgIcon",slot)}(0,generateUtilityClasses.A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const SvgIconRoot=(0,styled.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,"inherit"!==ownerState.color&&styles[`color${(0,capitalize.A)(ownerState.color)}`],styles[`fontSize${(0,capitalize.A)(ownerState.fontSize)}`]]}})((0,memoTheme.A)((({theme})=>({userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:theme.transitions?.create?.("fill",{duration:(theme.vars??theme).transitions?.duration?.shorter}),variants:[{props:props=>!props.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:theme.typography?.pxToRem?.(20)||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:theme.typography?.pxToRem?.(24)||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:theme.typography?.pxToRem?.(35)||"2.1875rem"}},...Object.entries((theme.vars??theme).palette).filter((([,value])=>value&&value.main)).map((([color])=>({props:{color},style:{color:(theme.vars??theme).palette?.[color]?.main}}))),{props:{color:"action"},style:{color:(theme.vars??theme).palette?.action?.active}},{props:{color:"disabled"},style:{color:(theme.vars??theme).palette?.action?.disabled}},{props:{color:"inherit"},style:{color:void 0}}]})))),SvgIcon=react.forwardRef((function SvgIcon(inProps,ref){const props=(0,DefaultPropsProvider.b)({props:inProps,name:"MuiSvgIcon"}),{children,className,color="inherit",component="svg",fontSize="medium",htmlColor,inheritViewBox=!1,titleAccess,viewBox="0 0 24 24",...other}=props,hasSvgAsChild=react.isValidElement(children)&&"svg"===children.type,ownerState={...props,color,component,fontSize,instanceFontSize:inProps.fontSize,inheritViewBox,viewBox,hasSvgAsChild},more={};inheritViewBox||(more.viewBox=viewBox);const classes=(ownerState=>{const{color,fontSize,classes}=ownerState,slots={root:["root","inherit"!==color&&`color${(0,capitalize.A)(color)}`,`fontSize${(0,capitalize.A)(fontSize)}`]};return(0,composeClasses.A)(slots,getSvgIconUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(SvgIconRoot,{as:component,className:(0,clsx.A)(classes.root,className),focusable:"false",color:htmlColor,"aria-hidden":!titleAccess||void 0,role:titleAccess?"img":void 0,ref,...more,...other,...hasSvgAsChild&&children.props,ownerState,children:[hasSvgAsChild?children.props.children:children,titleAccess?(0,jsx_runtime.jsx)("title",{children:titleAccess}):null]})}));SvgIcon&&(SvgIcon.muiName="SvgIcon");const SvgIcon_SvgIcon=SvgIcon;function createSvgIcon(path,displayName){function Component(props,ref){return(0,jsx_runtime.jsx)(SvgIcon_SvgIcon,{"data-testid":`${displayName}Icon`,ref,...props,children:path})}return Component.muiName=SvgIcon_SvgIcon.muiName,react.memo(react.forwardRef(Component))}},"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>extendSxProp});var _mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge/deepmerge.js"),_defaultSxConfig_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js");const splitProps=props=>{const result={systemProps:{},otherProps:{}},config=props?.theme?.unstable_sxConfig??_defaultSxConfig_js__WEBPACK_IMPORTED_MODULE_0__.A;return Object.keys(props).forEach((prop=>{config[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx,...other}=props,{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_1__.Q)(result)?{...systemProps,...result}:systemProps}:{...systemProps,...inSx},{...otherProps,sx:finalSx}}},"./node_modules/@mui/system/esm/useTheme/useTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>esm_useTheme_useTheme});var createTheme=__webpack_require__("./node_modules/@mui/system/esm/createTheme/createTheme.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),emotion_element_f0de968e_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js");const useThemeWithoutDefault=function useTheme(defaultTheme=null){const contextTheme=react.useContext(emotion_element_f0de968e_browser_esm.T);return!contextTheme||function isObjectEmpty(obj){return 0===Object.keys(obj).length}(contextTheme)?defaultTheme:contextTheme},systemDefaultTheme=(0,createTheme.A)();const esm_useTheme_useTheme=function useTheme_useTheme(defaultTheme=systemDefaultTheme){return useThemeWithoutDefault(defaultTheme)}},"./components/layout/Header/Header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Header_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),createSvgIcon=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"));const GitHub=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");var Home=__webpack_require__("./node_modules/@mui/icons-material/esm/Home.js");const Style=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"m2.53 19.65 1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61m19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6M7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34z"}),"Style");var Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),NeumorphicIconButton=__webpack_require__("./components/elements/Button/NeumorphicIconButton/NeumorphicIconButton.tsx");const Header=()=>(0,jsx_runtime.jsxs)(Box.A,{sx:{position:"fixed",top:0,left:0,right:0,zIndex:1e3,bgcolor:"#f5f5f5",borderRadius:"12px",boxShadow:"4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff",width:"100%",maxWidth:"1200px",p:{xs:2,md:3},mt:2,mb:3,display:"flex",justifyContent:"space-between",alignItems:"center",gap:2,mx:"auto"},children:[(0,jsx_runtime.jsxs)(Box.A,{sx:{display:"flex",alignItems:"center",gap:2},children:[(0,jsx_runtime.jsx)(link_default(),{href:"/",passHref:!0,children:(0,jsx_runtime.jsx)(NeumorphicIconButton.A,{children:(0,jsx_runtime.jsx)(Home.A,{sx:{color:"#444",fontSize:{xs:28,md:36}}})})}),(0,jsx_runtime.jsx)(link_default(),{href:"/tcg",passHref:!0,children:(0,jsx_runtime.jsx)(NeumorphicIconButton.A,{children:(0,jsx_runtime.jsx)(Style,{sx:{color:"#444",fontSize:{xs:28,md:36}}})})})]}),(0,jsx_runtime.jsx)(link_default(),{href:"https://github.com/shimisyou/next-app",passHref:!0,children:(0,jsx_runtime.jsx)(NeumorphicIconButton.A,{children:(0,jsx_runtime.jsx)(GitHub,{sx:{color:"#444",fontSize:{xs:28,md:36}}})})})]});Header.__docgenInfo={description:"",methods:[],displayName:"Header"};const Header_stories={component:Header},Default={},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}}},"./components/elements/Button/NeumorphicIconButton/NeumorphicIconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>NeumorphicIconButton_NeumorphicIconButton});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),memoTheme=__webpack_require__("./node_modules/@mui/material/utils/memoTheme.js"),createSimplePaletteValueFilter=__webpack_require__("./node_modules/@mui/material/utils/createSimplePaletteValueFilter.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getIconButtonUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiIconButton",slot)}const IconButton_iconButtonClasses=(0,generateUtilityClasses.A)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),IconButtonRoot=(0,styled.Ay)(ButtonBase.A,{name:"MuiIconButton",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,"default"!==ownerState.color&&styles[`color${(0,capitalize.A)(ownerState.color)}`],ownerState.edge&&styles[`edge${(0,capitalize.A)(ownerState.edge)}`],styles[`size${(0,capitalize.A)(ownerState.size)}`]]}})((0,memoTheme.A)((({theme})=>({textAlign:"center",flex:"0 0 auto",fontSize:theme.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(theme.vars||theme).palette.action.active,transition:theme.transitions.create("background-color",{duration:theme.transitions.duration.shortest}),variants:[{props:props=>!props.disableRipple,style:{"--IconButton-hoverBg":theme.vars?`rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.X4)(theme.palette.action.active,theme.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]}))),(0,memoTheme.A)((({theme})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter.A)()).map((([color])=>({props:{color},style:{color:(theme.vars||theme).palette[color].main}}))),...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter.A)()).map((([color])=>({props:{color},style:{"--IconButton-hoverBg":theme.vars?`rgba(${(theme.vars||theme).palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.X4)((theme.vars||theme).palette[color].main,theme.palette.action.hoverOpacity)}}))),{props:{size:"small"},style:{padding:5,fontSize:theme.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:theme.typography.pxToRem(28)}}],[`&.${IconButton_iconButtonClasses.disabled}`]:{backgroundColor:"transparent",color:(theme.vars||theme).palette.action.disabled}})))),IconButton_IconButton=react.forwardRef((function IconButton(inProps,ref){const props=(0,DefaultPropsProvider.b)({props:inProps,name:"MuiIconButton"}),{edge=!1,children,className,color="default",disabled=!1,disableFocusRipple=!1,size="medium",...other}=props,ownerState={...props,edge,color,disabled,disableFocusRipple,size},classes=(ownerState=>{const{classes,disabled,color,edge,size}=ownerState,slots={root:["root",disabled&&"disabled","default"!==color&&`color${(0,capitalize.A)(color)}`,edge&&`edge${(0,capitalize.A)(edge)}`,`size${(0,capitalize.A)(size)}`]};return(0,composeClasses.A)(slots,getIconButtonUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(IconButtonRoot,{className:(0,clsx.A)(classes.root,className),centerRipple:!0,focusRipple:!disableFocusRipple,disabled,ref,...other,ownerState,children})})),NeumorphicIconButton=({isInset=!1,children,sx={},...props})=>(0,jsx_runtime.jsx)(IconButton_IconButton,{sx:{bgcolor:"#f5f5f5",borderRadius:"50%",boxShadow:isInset?"inset 6px 6px 12px #d1d1d1, inset -6px -6px 12px #ffffff":"6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff","&:hover":{bgcolor:"#eaeaea"},width:{xs:48,md:64},height:{xs:48,md:64},...sx},...props,children}),NeumorphicIconButton_NeumorphicIconButton=NeumorphicIconButton;NeumorphicIconButton.__docgenInfo={description:"",methods:[],displayName:"NeumorphicIconButton",props:{isInset:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},sx:{defaultValue:{value:"{}",computed:!1},required:!1}},composes:["IconButtonProps"]}},"./node_modules/next/dist/client/get-domain-locale.js":(module,exports,__webpack_require__)=>{"use strict";var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}});const _normalizetrailingslash=__webpack_require__("./node_modules/next/dist/client/normalize-trailing-slash.js"),basePath=process.env.__NEXT_ROUTER_BASEPATH||"";function getDomainLocale(path,locale,locales,domainLocales){if(process.env.__NEXT_I18N_SUPPORT){const normalizeLocalePath=__webpack_require__("./node_modules/next/dist/client/normalize-locale-path.js").normalizeLocalePath,detectDomainLocale=__webpack_require__("./node_modules/next/dist/client/detect-domain-locale.js").detectDomainLocale,target=locale||normalizeLocalePath(path,locales).detectedLocale,domain=detectDomainLocale(domainLocales,void 0,target);if(domain){const proto="http"+(domain.http?"":"s")+"://",finalLocale=target===domain.defaultLocale?"":"/"+target;return""+proto+domain.domain+(0,_normalizetrailingslash.normalizePathTrailingSlash)(""+basePath+finalLocale+path)}return!1}return!1}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/link.js":(module,exports,__webpack_require__)=>{var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _default}});const _interop_require_default=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs"),_jsxruntime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_react=_interop_require_default._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),_resolvehref=__webpack_require__("./node_modules/next/dist/client/resolve-href.js"),_islocalurl=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/is-local-url.js"),_formaturl=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/format-url.js"),_utils=__webpack_require__("./node_modules/next/dist/shared/lib/utils.js"),_addlocale=__webpack_require__("./node_modules/next/dist/client/add-locale.js"),_routercontextsharedruntime=__webpack_require__("./node_modules/next/dist/shared/lib/router-context.shared-runtime.js"),_useintersection=__webpack_require__("./node_modules/next/dist/client/use-intersection.js"),_getdomainlocale=__webpack_require__("./node_modules/next/dist/client/get-domain-locale.js"),_addbasepath=__webpack_require__("./node_modules/next/dist/client/add-base-path.js"),_usemergedref=__webpack_require__("./node_modules/next/dist/client/use-merged-ref.js"),prefetched=new Set;function prefetch(router,href,as,options){if("undefined"!=typeof window&&(0,_islocalurl.isLocalURL)(href)){if(!options.bypassPrefetchedCheck){const prefetchedKey=href+"%"+as+"%"+(void 0!==options.locale?options.locale:"locale"in router?router.locale:void 0);if(prefetched.has(prefetchedKey))return;prefetched.add(prefetchedKey)}router.prefetch(href,as,options).catch((err=>{0}))}}function formatStringOrUrl(urlObjOrString){return"string"==typeof urlObjOrString?urlObjOrString:(0,_formaturl.formatUrl)(urlObjOrString)}const _default=_react.default.forwardRef((function LinkComponent(props,forwardedRef){let children;const{href:hrefProp,as:asProp,children:childrenProp,prefetch:prefetchProp=null,passHref,replace,shallow,scroll,locale,onClick,onMouseEnter:onMouseEnterProp,onTouchStart:onTouchStartProp,legacyBehavior=!1,...restProps}=props;children=childrenProp,!legacyBehavior||"string"!=typeof children&&"number"!=typeof children||(children=(0,_jsxruntime.jsx)("a",{children}));const router=_react.default.useContext(_routercontextsharedruntime.RouterContext),prefetchEnabled=!1!==prefetchProp;const{href,as}=_react.default.useMemo((()=>{if(!router){const resolvedHref=formatStringOrUrl(hrefProp);return{href:resolvedHref,as:asProp?formatStringOrUrl(asProp):resolvedHref}}const[resolvedHref,resolvedAs]=(0,_resolvehref.resolveHref)(router,hrefProp,!0);return{href:resolvedHref,as:asProp?(0,_resolvehref.resolveHref)(router,asProp):resolvedAs||resolvedHref}}),[router,hrefProp,asProp]),previousHref=_react.default.useRef(href),previousAs=_react.default.useRef(as);let child;legacyBehavior&&(child=_react.default.Children.only(children));const childRef=legacyBehavior?child&&"object"==typeof child&&child.ref:forwardedRef,[setIntersectionRef,isVisible,resetVisible]=(0,_useintersection.useIntersection)({rootMargin:"200px"}),setIntersectionWithResetRef=_react.default.useCallback((el=>{previousAs.current===as&&previousHref.current===href||(resetVisible(),previousAs.current=as,previousHref.current=href),setIntersectionRef(el)}),[as,href,resetVisible,setIntersectionRef]),setRef=(0,_usemergedref.useMergedRef)(setIntersectionWithResetRef,childRef);_react.default.useEffect((()=>{router&&isVisible&&prefetchEnabled&&prefetch(router,href,as,{locale})}),[as,href,isVisible,locale,prefetchEnabled,null==router?void 0:router.locale,router]);const childProps={ref:setRef,onClick(e){legacyBehavior||"function"!=typeof onClick||onClick(e),legacyBehavior&&child.props&&"function"==typeof child.props.onClick&&child.props.onClick(e),router&&(e.defaultPrevented||function linkClicked(e,router,href,as,replace,shallow,scroll,locale){const{nodeName}=e.currentTarget;if("A"===nodeName.toUpperCase()&&(function isModifiedEvent(event){const target=event.currentTarget.getAttribute("target");return target&&"_self"!==target||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.nativeEvent&&2===event.nativeEvent.which}(e)||!(0,_islocalurl.isLocalURL)(href)))return;e.preventDefault(),(()=>{const routerScroll=null==scroll||scroll;"beforePopState"in router?router[replace?"replace":"push"](href,as,{shallow,locale,scroll:routerScroll}):router[replace?"replace":"push"](as||href,{scroll:routerScroll})})()}(e,router,href,as,replace,shallow,scroll,locale))},onMouseEnter(e){legacyBehavior||"function"!=typeof onMouseEnterProp||onMouseEnterProp(e),legacyBehavior&&child.props&&"function"==typeof child.props.onMouseEnter&&child.props.onMouseEnter(e),router&&prefetch(router,href,as,{locale,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:process.env.__NEXT_LINK_NO_TOUCH_START?void 0:function onTouchStart(e){legacyBehavior||"function"!=typeof onTouchStartProp||onTouchStartProp(e),legacyBehavior&&child.props&&"function"==typeof child.props.onTouchStart&&child.props.onTouchStart(e),router&&prefetch(router,href,as,{locale,priority:!0,bypassPrefetchedCheck:!0})}};if((0,_utils.isAbsoluteUrl)(as))childProps.href=as;else if(!legacyBehavior||passHref||"a"===child.type&&!("href"in child.props)){const curLocale=void 0!==locale?locale:null==router?void 0:router.locale,localeDomain=(null==router?void 0:router.isLocaleDomain)&&(0,_getdomainlocale.getDomainLocale)(as,curLocale,null==router?void 0:router.locales,null==router?void 0:router.domainLocales);childProps.href=localeDomain||(0,_addbasepath.addBasePath)((0,_addlocale.addLocale)(as,curLocale,null==router?void 0:router.defaultLocale))}return legacyBehavior?_react.default.cloneElement(child,childProps):(0,_jsxruntime.jsx)("a",{...restProps,...childProps,children})}));("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/normalize-locale-path.js":(module,exports,__webpack_require__)=>{"use strict";var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"normalizeLocalePath",{enumerable:!0,get:function(){return normalizeLocalePath}});const normalizeLocalePath=(pathname,locales)=>process.env.__NEXT_I18N_SUPPORT?__webpack_require__("./node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js").normalizeLocalePath(pathname,locales):{pathname,detectedLocale:void 0};("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/use-intersection.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});const _react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_requestidlecallback=__webpack_require__("./node_modules/next/dist/client/request-idle-callback.js"),hasIntersectionObserver="function"==typeof IntersectionObserver,observers=new Map,idList=[];function observe(element,callback,options){const{id,observer,elements}=function createObserver(options){const id={root:options.root||null,margin:options.rootMargin||""},existing=idList.find((obj=>obj.root===id.root&&obj.margin===id.margin));let instance;if(existing&&(instance=observers.get(existing),instance))return instance;const elements=new Map,observer=new IntersectionObserver((entries=>{entries.forEach((entry=>{const callback=elements.get(entry.target),isVisible=entry.isIntersecting||entry.intersectionRatio>0;callback&&isVisible&&callback(isVisible)}))}),options);return instance={id,observer,elements},idList.push(id),observers.set(id,instance),instance}(options);return elements.set(element,callback),observer.observe(element),function unobserve(){if(elements.delete(element),observer.unobserve(element),0===elements.size){observer.disconnect(),observers.delete(id);const index=idList.findIndex((obj=>obj.root===id.root&&obj.margin===id.margin));index>-1&&idList.splice(index,1)}}}function useIntersection(param){let{rootRef,rootMargin,disabled}=param;const isDisabled=disabled||!hasIntersectionObserver,[visible,setVisible]=(0,_react.useState)(!1),elementRef=(0,_react.useRef)(null),setElement=(0,_react.useCallback)((element=>{elementRef.current=element}),[]);(0,_react.useEffect)((()=>{if(hasIntersectionObserver){if(isDisabled||visible)return;const element=elementRef.current;if(element&&element.tagName){return observe(element,(isVisible=>isVisible&&setVisible(isVisible)),{root:null==rootRef?void 0:rootRef.current,rootMargin})}}else if(!visible){const idleCallback=(0,_requestidlecallback.requestIdleCallback)((()=>setVisible(!0)));return()=>(0,_requestidlecallback.cancelIdleCallback)(idleCallback)}}),[isDisabled,rootMargin,rootRef,visible,elementRef.current]);const resetVisible=(0,_react.useCallback)((()=>{setVisible(!1)}),[]);return[setElement,visible,resetVisible]}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/use-merged-ref.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"useMergedRef",{enumerable:!0,get:function(){return useMergedRef}});const _react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function useMergedRef(refA,refB){const cleanupA=(0,_react.useRef)((()=>{})),cleanupB=(0,_react.useRef)((()=>{}));return(0,_react.useMemo)((()=>refA&&refB?current=>{null===current?(cleanupA.current(),cleanupB.current()):(cleanupA.current=applyRef(refA,current),cleanupB.current=applyRef(refB,current))}:refA||refB),[refA,refB])}function applyRef(refA,current){if("function"==typeof refA){const cleanup=refA(current);return"function"==typeof cleanup?cleanup:()=>refA(null)}return refA.current=current,()=>{refA.current=null}}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/link.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/client/link.js")}}]);