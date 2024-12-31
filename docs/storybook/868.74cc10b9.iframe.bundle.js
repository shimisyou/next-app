"use strict";(self.webpackChunknext_app=self.webpackChunknext_app||[]).push([[868],{"./components/elements/CoverFlowSwiper/CoverFlowSwiper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>CoverFlowSwiper});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),memoTheme=__webpack_require__("./node_modules/@mui/material/utils/memoTheme.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),createSimplePaletteValueFilter=__webpack_require__("./node_modules/@mui/material/utils/createSimplePaletteValueFilter.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getCircularProgressUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiCircularProgress",slot)}(0,generateUtilityClasses.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const circularRotateKeyframe=emotion_react_browser_esm.i7`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,circularDashKeyframe=emotion_react_browser_esm.i7`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,rotateAnimation="string"!=typeof circularRotateKeyframe?emotion_react_browser_esm.AH`
        animation: ${circularRotateKeyframe} 1.4s linear infinite;
      `:null,dashAnimation="string"!=typeof circularDashKeyframe?emotion_react_browser_esm.AH`
        animation: ${circularDashKeyframe} 1.4s ease-in-out infinite;
      `:null,CircularProgressRoot=(0,styled.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],styles[`color${(0,capitalize.A)(ownerState.color)}`]]}})((0,memoTheme.A)((({theme})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:theme.transitions.create("transform")}},{props:{variant:"indeterminate"},style:rotateAnimation||{animation:`${circularRotateKeyframe} 1.4s linear infinite`}},...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter.A)()).map((([color])=>({props:{color},style:{color:(theme.vars||theme).palette[color].main}})))]})))),CircularProgressSVG=(0,styled.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(props,styles)=>styles.svg})({display:"block"}),CircularProgressCircle=(0,styled.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.circle,styles[`circle${(0,capitalize.A)(ownerState.variant)}`],ownerState.disableShrink&&styles.circleDisableShrink]}})((0,memoTheme.A)((({theme})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:theme.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState})=>"indeterminate"===ownerState.variant&&!ownerState.disableShrink,style:dashAnimation||{animation:`${circularDashKeyframe} 1.4s ease-in-out infinite`}}]})))),CircularProgress_CircularProgress=react.forwardRef((function CircularProgress(inProps,ref){const props=(0,DefaultPropsProvider.b)({props:inProps,name:"MuiCircularProgress"}),{className,color="primary",disableShrink=!1,size=40,style,thickness=3.6,value=0,variant="indeterminate",...other}=props,ownerState={...props,color,disableShrink,size,thickness,value,variant},classes=(ownerState=>{const{classes,variant,color,disableShrink}=ownerState,slots={root:["root",variant,`color${(0,capitalize.A)(color)}`],svg:["svg"],circle:["circle",`circle${(0,capitalize.A)(variant)}`,disableShrink&&"circleDisableShrink"]};return(0,composeClasses.A)(slots,getCircularProgressUtilityClass,classes)})(ownerState),circleStyle={},rootStyle={},rootProps={};if("determinate"===variant){const circumference=2*Math.PI*((44-thickness)/2);circleStyle.strokeDasharray=circumference.toFixed(3),rootProps["aria-valuenow"]=Math.round(value),circleStyle.strokeDashoffset=`${((100-value)/100*circumference).toFixed(3)}px`,rootStyle.transform="rotate(-90deg)"}return(0,jsx_runtime.jsx)(CircularProgressRoot,{className:(0,clsx.A)(classes.root,className),style:{width:size,height:size,...rootStyle,...style},ownerState,ref,role:"progressbar",...rootProps,...other,children:(0,jsx_runtime.jsx)(CircularProgressSVG,{className:classes.svg,ownerState,viewBox:"22 22 44 44",children:(0,jsx_runtime.jsx)(CircularProgressCircle,{className:classes.circle,style:circleStyle,ownerState,cx:44,cy:44,r:(44-thickness)/2,fill:"none",strokeWidth:thickness})})})}));__webpack_require__("./node_modules/swiper/swiper.css");var modules=__webpack_require__("./node_modules/swiper/modules/index.mjs"),swiper_react=__webpack_require__("./node_modules/swiper/swiper-react.mjs");const CoverFlowSwiper=({content,onSlideChange})=>{const[isReady,setIsReady]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{const timer=setTimeout((()=>{setIsReady(!0)}),100);return()=>clearTimeout(timer)}),[]),(0,jsx_runtime.jsxs)(Box.A,{sx:{width:"100%",overflow:"hidden",position:"relative"},children:[!isReady&&(0,jsx_runtime.jsx)(Box.A,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,jsx_runtime.jsx)(CircularProgress_CircularProgress,{})}),isReady&&(0,jsx_runtime.jsx)(swiper_react.RC,{effect:"coverflow",grabCursor:!0,loop:!0,centeredSlides:!0,slidesPerView:1.5,breakpoints:{640:{slidesPerView:2},1024:{slidesPerView:3}},modules:[modules.t9],coverflowEffect:{depth:100,rotate:-10,stretch:0,modifier:1,scale:1,slideShadows:!1},"aria-label":"Swiper container",role:"region",onSlideChange,children:content.map(((slideContent,index)=>(0,jsx_runtime.jsx)(swiper_react.qr,{children:(0,jsx_runtime.jsx)(Box.A,{sx:{py:4,px:2},children:slideContent})},index)))})]})};CoverFlowSwiper.__docgenInfo={description:"",methods:[],displayName:"CoverFlowSwiper",props:{content:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},onSlideChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(swiper: SwiperInstance) => void",signature:{arguments:[{type:{name:"SwiperInstance"},name:"swiper"}],return:{name:"void"}}},description:""}}}},"./features/TCG/components/PackSwiper/PackSwiper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_elements_Button_NeumorphicButton_NeumorphicButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/elements/Button/NeumorphicButton/NeumorphicButton.tsx"),_components_elements_CoverFlowSwiper_CoverFlowSwiper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/elements/CoverFlowSwiper/CoverFlowSwiper.tsx"),_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/CardHeader/CardHeader.js"),_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/CardContent/CardContent.js"),_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/CardActions/CardActions.js"),_ReversiblePack_ReversiblePack__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./features/TCG/components/ReversiblePack/ReversiblePack.tsx");const PackSwiper=({packs,onSlideChange,onOpenPack})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",gap:2,padding:2},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,{sx:{width:"100%",bgcolor:"#f5f5f5",borderRadius:"12px",boxShadow:"4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff",margin:"16px 0",overflow:"hidden"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.A,{title:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{sx:{textAlign:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,{variant:"h6",sx:{display:"inline-block",fontWeight:600,p:1.5,px:4,bgcolor:"#f5f5f5",borderRadius:"16px",textShadow:"0 0 3px rgba(0, 0, 0, 0.1)",boxShadow:"inset 3px 3px 6px #cccccc, inset -3px -3px 6px #ffffff",color:"#333"},children:"パックを選ぼう!"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.A,{sx:{padding:"16px"},children:[" ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_CoverFlowSwiper_CoverFlowSwiper__WEBPACK_IMPORTED_MODULE_2__.q,{content:packs.map((pack=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ReversiblePack_ReversiblePack__WEBPACK_IMPORTED_MODULE_3__.f,{packImg:pack.img},pack.id))),onSlideChange:swiper=>onSlideChange(packs[swiper.realIndex])})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,{sx:{justifyContent:"center",padding:"16px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_Button_NeumorphicButton_NeumorphicButton__WEBPACK_IMPORTED_MODULE_1__.A,{onClick:onOpenPack,children:"開封"})})]})}),__WEBPACK_DEFAULT_EXPORT__=PackSwiper;PackSwiper.__docgenInfo={description:"",methods:[],displayName:"PackSwiper",props:{packs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  id: number;\n  name: string;\n  img: ReversibleImage; // パックの画像情報\n  cards: Card[]; // 含まれるカード\n}",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"img",value:{name:"signature",type:"object",raw:"{\n  front: PackImage;\n  back: PackImage;\n}",signature:{properties:[{key:"front",value:{name:"signature",type:"object",raw:"{\n  url: string;\n  alt: string;\n}",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!0}}]},required:!0}},{key:"back",value:{name:"signature",type:"object",raw:"{\n  url: string;\n  alt: string;\n}",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"cards",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  id: number;\n  name: string;\n  rarity: 'common' | 'super-rare' | 'rare' | 'ultra-rare';\n  img: string;\n}",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"rarity",value:{name:"union",raw:"'common' | 'super-rare' | 'rare' | 'ultra-rare'",elements:[{name:"literal",value:"'common'"},{name:"literal",value:"'super-rare'"},{name:"literal",value:"'rare'"},{name:"literal",value:"'ultra-rare'"}],required:!0}},{key:"img",value:{name:"string",required:!0}}]}}],raw:"Card[]",required:!0}}]}}],raw:"Pack[]"},description:""},onSlideChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedPack: Pack) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{\n  id: number;\n  name: string;\n  img: ReversibleImage; // パックの画像情報\n  cards: Card[]; // 含まれるカード\n}",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"img",value:{name:"signature",type:"object",raw:"{\n  front: PackImage;\n  back: PackImage;\n}",signature:{properties:[{key:"front",value:{name:"signature",type:"object",raw:"{\n  url: string;\n  alt: string;\n}",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!0}}]},required:!0}},{key:"back",value:{name:"signature",type:"object",raw:"{\n  url: string;\n  alt: string;\n}",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"cards",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  id: number;\n  name: string;\n  rarity: 'common' | 'super-rare' | 'rare' | 'ultra-rare';\n  img: string;\n}",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"rarity",value:{name:"union",raw:"'common' | 'super-rare' | 'rare' | 'ultra-rare'",elements:[{name:"literal",value:"'common'"},{name:"literal",value:"'super-rare'"},{name:"literal",value:"'rare'"},{name:"literal",value:"'ultra-rare'"}],required:!0}},{key:"img",value:{name:"string",required:!0}}]}}],raw:"Card[]",required:!0}}]}},name:"selectedPack"}],return:{name:"void"}}},description:""},onOpenPack:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./features/TCG/components/ReversiblePack/ReversiblePack.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>ReversiblePack});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Card=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),CardContent=__webpack_require__("./node_modules/@mui/material/CardContent/CardContent.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/swiper/swiper.css"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),effect_flip=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/swiper/modules/effect-flip.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(effect_flip.A,options);effect_flip.A&&effect_flip.A.locals&&effect_flip.A.locals;var modules=__webpack_require__("./node_modules/swiper/modules/index.mjs"),swiper_react=__webpack_require__("./node_modules/swiper/swiper-react.mjs");const CardWithReflection=({url,alt,showText})=>(0,jsx_runtime.jsxs)(Box.A,{sx:{position:"relative",width:{xs:"150px",md:"200px"},height:{xs:"280px",md:"380px"},display:"flex",flexDirection:"column",alignItems:"center",margin:"0 auto"},children:[(0,jsx_runtime.jsx)(Card.A,{sx:{width:"100%",height:{xs:"220px",md:"300px"},overflow:"hidden",zIndex:2,borderRadius:"12px"},children:(0,jsx_runtime.jsxs)(CardContent.A,{sx:{p:0,width:"100%",height:"100%",position:"relative"},children:[(0,jsx_runtime.jsx)(next_image.A,{src:url,alt,sizes:"(max-width: 600px) 150px, 200px",style:{objectFit:"fill"},fill:!0}),showText&&(0,jsx_runtime.jsx)(Box.A,{sx:{position:"absolute",bottom:"40px",width:"100%",textAlign:"center",color:"white",fontSize:{xs:"14px",md:"18px"},fontWeight:"bold",textShadow:"0 0 5px rgba(0, 0, 0, 0.5)"},children:"Card Game"})]})}),(0,jsx_runtime.jsx)(Box.A,{sx:{position:"absolute",top:{xs:"240px",md:"320px"},width:{xs:"150px",md:"200px"},height:{xs:"40px",md:"60px"},overflow:"hidden",transform:"scaleY(-1)",opacity:.3,clipPath:"inset(0px 0px 0px 0px round 0px 0px 12px 12px)"},children:(0,jsx_runtime.jsx)(next_image.A,{src:url,alt:`${alt} Reflection`,sizes:"(max-width: 600px) 150px, 200px",style:{objectFit:"cover"},fill:!0})})]}),ReversiblePack=({packImg})=>(0,jsx_runtime.jsx)(Box.A,{sx:{width:{xs:"150px",md:"200px"},height:{xs:"280px",md:"380px"},margin:"0 auto"},children:(0,jsx_runtime.jsx)(swiper_react.RC,{effect:"flip",grabCursor:!0,modules:[modules.n],flipEffect:{slideShadows:!1},style:{width:"100%",height:"100%",overflow:"hidden"},loop:!0,children:[packImg.front,packImg.back].map(((side,index)=>(0,jsx_runtime.jsx)(swiper_react.qr,{children:(0,jsx_runtime.jsx)(CardWithReflection,{url:side.url,alt:side.alt,showText:0===index})},index)))})});ReversiblePack.__docgenInfo={description:"",methods:[],displayName:"ReversiblePack",props:{packImg:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  front: PackImage;\n  back: PackImage;\n}",signature:{properties:[{key:"front",value:{name:"signature",type:"object",raw:"{\n  url: string;\n  alt: string;\n}",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!0}}]},required:!0}},{key:"back",value:{name:"signature",type:"object",raw:"{\n  url: string;\n  alt: string;\n}",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!0}}]},required:!0}}]}},description:""}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/swiper/modules/effect-flip.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".swiper.swiper-flip {\n  overflow: visible;\n}\n.swiper-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-flip .swiper-slide-active,\n.swiper-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n/* Flip slide shadows start */\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* Flip slide shadows end */\n","",{version:3,sources:["webpack://./node_modules/swiper/modules/effect-flip.css"],names:[],mappings:"AAAA;EACE,iBAAiB;AACnB;AACA;EACE,oBAAoB;EACpB,mCAAmC;UAC3B,2BAA2B;EACnC,UAAU;AACZ;AACA;EACE,oBAAoB;AACtB;AACA;;EAEE,oBAAoB;AACtB;AACA,6BAA6B;AAC7B;;;;EAIE,UAAU;EACV,mCAAmC;UAC3B,2BAA2B;AACrC;AACA,2BAA2B",sourcesContent:[".swiper.swiper-flip {\n  overflow: visible;\n}\n.swiper-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-flip .swiper-slide-active,\n.swiper-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n/* Flip slide shadows start */\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* Flip slide shadows end */\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
//# sourceMappingURL=868.74cc10b9.iframe.bundle.js.map