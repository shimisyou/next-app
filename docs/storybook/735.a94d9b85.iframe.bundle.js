"use strict";(self.webpackChunknext_app=self.webpackChunknext_app||[]).push([[735],{"./components/elements/Button/NeumorphicButton/NeumorphicButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),_barrel_optimize_names_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js");const NeumorphicButton=({children,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__.A,{sx:{bgcolor:"#f5f5f5",borderRadius:"16px",boxShadow:"6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff",color:"#333",padding:"10px 20px","&:hover":{bgcolor:"#eaeaea"}},...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"body1",sx:{fontWeight:"bold",textShadow:"0 0 5px rgba(0, 0, 0, 0.2)"},children})}),__WEBPACK_DEFAULT_EXPORT__=NeumorphicButton;NeumorphicButton.__docgenInfo={description:"",methods:[],displayName:"NeumorphicButton",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["ButtonProps"]}},"./components/elements/Text/NeumorphicText/NeumorphicText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>NeumorphicText});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js");const NeumorphicText=({isInset=!0,bgcolor="#f5f5f5",boxShadow,sx={},children,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__.A,{...props,sx:{display:"inline-block",fontWeight:600,p:1.5,px:4,bgcolor,borderRadius:"16px",textShadow:"0 0 3px rgba(0, 0, 0, 0.1)",boxShadow:boxShadow||(isInset?"inset 3px 3px 6px #cccccc, inset -3px -3px 6px #ffffff":"3px 3px 6px #cccccc, -3px -3px 6px #ffffff"),color:"#333",...sx},children});NeumorphicText.__docgenInfo={description:"",methods:[],displayName:"NeumorphicText",props:{isInset:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},bgcolor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#f5f5f5'",computed:!1}},boxShadow:{required:!1,tsType:{name:"string"},description:""},sx:{defaultValue:{value:"{}",computed:!1},required:!1}}}},"./features/TCG/components/CardSwiper/CardSwiper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>CardSwiper});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_elements_Button_NeumorphicButton_NeumorphicButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/elements/Button/NeumorphicButton/NeumorphicButton.tsx"),_components_elements_Text_NeumorphicText_NeumorphicText__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/elements/Text/NeumorphicText/NeumorphicText.tsx"),_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/CardHeader/CardHeader.js"),_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/material/CardContent/CardContent.js"),_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/material/CardActions/CardActions.js"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),swiper_modules__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/swiper/modules/index.mjs"),swiper_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/swiper/swiper-react.mjs"),_TCGCard_TCGCard__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./features/TCG/components/TCGCard/TCGCard.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js");const CardSwiper=({cards,onClose})=>{const[isEnd,setIsEnd]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",p:{xs:2,md:4},width:"100%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_8__.A,{sx:{width:"100%",bgcolor:"#f5f5f5",borderRadius:"12px",boxShadow:"4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff",margin:"16px 0",overflow:"hidden"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,{title:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,{sx:{textAlign:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_Text_NeumorphicText_NeumorphicText__WEBPACK_IMPORTED_MODULE_2__.y,{isInset:!0,children:"カードをめくろう!"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_10__.A,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.RC,{slidesPerView:1,modules:[swiper_modules__WEBPACK_IMPORTED_MODULE_4__.ZD,swiper_modules__WEBPACK_IMPORTED_MODULE_4__.Vx],effect:"cards",grabCursor:!0,navigation:{nextEl:".swiper-button-next"},pagination:{clickable:!0},oneWayMovement:!0,speed:500,nested:!0,onReachEnd:()=>{setIsEnd(!0)},allowSlideNext:!isEnd,style:{width:"100%",overflow:"visible"},cardsEffect:{perSlideOffset:1,rotate:!1,perSlideRotate:0,slideShadows:!1},children:cards.map((card=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.qr,{style:{display:"flex",justifyContent:"center",alignItems:"center",overflow:"visible"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TCGCard_TCGCard__WEBPACK_IMPORTED_MODULE_6__.T,{card,onClick:()=>console.log(card)})},card.id)))})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_11__.A,{sx:{justifyContent:"center",minHeight:"64px",marginBottom:"8px"},children:isEnd?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_Button_NeumorphicButton_NeumorphicButton__WEBPACK_IMPORTED_MODULE_1__.A,{onClick:()=>{onClose(),setIsEnd(!1)},children:"終了"},"end"):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_Button_NeumorphicButton_NeumorphicButton__WEBPACK_IMPORTED_MODULE_1__.A,{"aria-label":"めくる",className:"swiper-button-next",children:"めくる"},"next")})]})})};CardSwiper.__docgenInfo={description:"",methods:[],displayName:"CardSwiper",props:{cards:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  id: number;\n  name: string;\n  rarity: 'common' | 'super-rare' | 'rare' | 'ultra-rare';\n  img: string;\n}",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"rarity",value:{name:"union",raw:"'common' | 'super-rare' | 'rare' | 'ultra-rare'",elements:[{name:"literal",value:"'common'"},{name:"literal",value:"'super-rare'"},{name:"literal",value:"'rare'"},{name:"literal",value:"'ultra-rare'"}],required:!0}},{key:"img",value:{name:"string",required:!0}}]}}],raw:"CardType[]"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./features/TCG/components/TCGCard/TCGCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>TCGCard});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Box_Card_CardContent_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),_barrel_optimize_names_Box_Card_CardContent_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/CardContent/CardContent.js"),_barrel_optimize_names_Box_Card_CardContent_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_barrel_optimize_names_Box_Card_CardContent_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const TCGCard=({card,onClick})=>{const rarityStyles=(rarity=>{switch(rarity){case"ultra-rare":return{background:"linear-gradient(45deg, #ffd700 0%, #ffcc00 50%, #ffb700 100%)",boxShadow:"0 0 20px 10px rgba(255,223,0,1)",animation:"glow 2s infinite alternate",nameBackgroundColor:"linear-gradient(45deg, #ffd700 0%, #ffcc00 50%, #ffb700 100%)",nameTextColor:"black",rarityBackgroundColor:"linear-gradient(45deg, #ffd700 0%, #ffcc00 50%, #ffb700 100%)",rarityTextColor:"black",keyframes:"\n          @keyframes glow {\n            0% { box-shadow: 0 0 30px 15px rgba(255,223,0,0.8); }\n            100% { box-shadow: 0 0 40px 20px rgba(255,223,0,1); }\n          }\n        ",reflection:'\n          .reflection {\n            display: inline-block;\n            position: relative;\n            overflow: hidden;\n          }\n          .reflection:after {\n            content: "";\n            height: 100%;\n            width: 30px;\n            position: absolute;\n            top: -180px;\n            left: 0;\n            background-color: #fff;\n            opacity: 0;\n            transform: rotate(45deg);\n            animation: reflection 2s ease-in-out infinite;\n          }\n          @keyframes reflection {\n            0% { transform: scale(0) rotate(45deg); opacity: 0; }\n            80% { transform: scale(0) rotate(45deg); opacity: 0.5; }\n            81% { transform: scale(4) rotate(45deg); opacity: 1; }\n            100% { transform: scale(50) rotate(45deg); opacity: 0; }\n          }\n        '};case"super-rare":return{backgroundColor:"#b0e0e6",boxShadow:"0 0 8px 2px rgba(70,130,180,0.5)",animation:"subtlePulse 4s infinite alternate",nameBackgroundColor:"rgba(70,130,180,1)",nameTextColor:"white",rarityBackgroundColor:"rgba(70,130,180,1)",rarityTextColor:"white",keyframes:"\n          @keyframes subtlePulse {\n            0% { box-shadow: 0 0 8px 2px rgba(70,130,180,0.5); }\n            100% { box-shadow: 0 0 10px 4px rgba(70,130,180,0.7); }\n          }\n        ",reflection:'\n          .reflection {\n            display: inline-block;\n            position: relative;\n            overflow: hidden;\n          }\n          .reflection:after {\n            content: "";\n            height: 100%;\n            width: 30px;\n            position: absolute;\n            top: -180px;\n            left: 0;\n            background-color: #fff;\n            opacity: 0;\n            transform: rotate(45deg);\n            animation: reflection 2s ease-in-out infinite;\n          }\n          @keyframes reflection {\n            0% { transform: scale(0) rotate(45deg); opacity: 0; }\n            80% { transform: scale(0) rotate(45deg); opacity: 0.5; }\n            81% { transform: scale(4) rotate(45deg); opacity: 1; }\n            100% { transform: scale(50) rotate(45deg); opacity: 0; }\n          }\n        '};case"rare":return{backgroundColor:"#dcdcdc",boxShadow:"0 0 15px 5px rgba(192,192,192,0.8)",nameBackgroundColor:"rgba(192,192,192,1)",nameTextColor:"black",rarityBackgroundColor:"rgba(192,192,192,1)",rarityTextColor:"black",reflection:'\n          .reflection {\n            display: inline-block;\n            position: relative;\n            overflow: hidden;\n          }\n          .reflection:after {\n            content: "";\n            height: 100%;\n            width: 30px;\n            position: absolute;\n            top: -180px;\n            left: 0;\n            background-color: #fff;\n            opacity: 0;\n            transform: rotate(45deg);\n            animation: reflection 2s ease-in-out infinite;\n          }\n          @keyframes reflection {\n            0% { transform: scale(0) rotate(45deg); opacity: 0; }\n            80% { transform: scale(0) rotate(45deg); opacity: 0.5; }\n            81% { transform: scale(4) rotate(45deg); opacity: 1; }\n            100% { transform: scale(50) rotate(45deg); opacity: 0; }\n          }\n        '};default:return{padding:"16px",borderColor:"gray",backgroundColor:"white",boxShadow:"none",nameBackgroundColor:"rgba(240,240,240,0.9)",nameTextColor:"black",rarityBackgroundColor:"rgba(240,240,240,1)",rarityTextColor:"black"}}})(card.rarity);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.A,{onClick,sx:{borderRadius:4,p:2,display:"inline-block",background:rarityStyles.background,boxShadow:"10px 10px 30px rgba(0, 0, 0, 0.1)",transition:"transform 0.2s","&:hover":{transform:"scale(1.05)"}},className:rarityStyles.reflection?"reflection":"",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style",{children:rarityStyles.keyframes}),rarityStyles.reflection&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style",{children:rarityStyles.reflection}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{sx:{p:0,width:"100%","&.MuiCardContent-root":{paddingBottom:0}},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{sx:{textAlign:"left",backgroundColor:rarityStyles.nameBackgroundColor,color:rarityStyles.nameTextColor,padding:"4px 8px",borderRadius:"8px 8px 0 0",fontWeight:"bold",fontSize:"1rem"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,{variant:"body1",children:card.name})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{sx:{maxWidth:{xs:"200px",md:"200px"},maxHeight:{xs:"270px",md:"270px"},overflow:"hidden"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1__.A,{src:card.img,alt:card.name,width:250,height:300,style:{display:"block",margin:"0 auto",width:"100%"},objectFit:"cover"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{sx:{textAlign:"center",backgroundColor:rarityStyles.rarityBackgroundColor,color:rarityStyles.rarityTextColor,padding:"4px 8px",borderRadius:"0 0 8px 8px",fontWeight:"bold"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,{variant:"body2",children:card.rarity.toUpperCase()})})]})]})};TCGCard.__docgenInfo={description:"",methods:[],displayName:"TCGCard",props:{card:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  id: number;\n  name: string;\n  rarity: 'common' | 'super-rare' | 'rare' | 'ultra-rare';\n  img: string;\n}",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"rarity",value:{name:"union",raw:"'common' | 'super-rare' | 'rare' | 'ultra-rare'",elements:[{name:"literal",value:"'common'"},{name:"literal",value:"'super-rare'"},{name:"literal",value:"'rare'"},{name:"literal",value:"'ultra-rare'"}],required:!0}},{key:"img",value:{name:"string",required:!0}}]}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./features/TCG/mocks/packs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>generateCards,l:()=>mockPacks});const BASE_URL=__webpack_require__("./node_modules/process/browser.js").env.NEXT_PUBLIC_BASE_URL||"/next-app/storybook",generateRandomRarity=()=>{const random=Math.random();return random<=.001?"ultra-rare":random<=.2?"super-rare":random<=.5?"rare":"common"},generateCards=(packId,cardCount)=>Array.from({length:cardCount},((_,index)=>{const cardId=100*packId+index+1,randomImageNumber=Math.floor(10*Math.random())+1;return{id:cardId,name:`Card ${cardId}`,rarity:generateRandomRarity(),img:`${BASE_URL}/cards/series1/${String(randomImageNumber).padStart(2,"0")}.png`}})),mockPacks=Array.from({length:10},((_,index)=>{const packId=index+1;return{id:packId,name:`Pack ${packId}`,img:{front:{url:`${BASE_URL}/cards/series1/09.png`,alt:`Front of Pack ${packId}`},back:{url:`${BASE_URL}/pack1.png`,alt:`Back of Pack ${packId}`}},cards:generateCards(packId,5)}}))}}]);