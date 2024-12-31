"use strict";(self.webpackChunknext_app=self.webpackChunknext_app||[]).push([[461],{"./components/elements/Button/NeumorphicButton/NeumorphicButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),_barrel_optimize_names_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js");const NeumorphicButton=({children,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__.A,{sx:{bgcolor:"#f5f5f5",borderRadius:"16px",boxShadow:"6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff",color:"#333",padding:"10px 20px","&:hover":{bgcolor:"#eaeaea"}},...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"body1",sx:{fontWeight:"bold",textShadow:"0 0 5px rgba(0, 0, 0, 0.2)"},children})}),__WEBPACK_DEFAULT_EXPORT__=NeumorphicButton;NeumorphicButton.__docgenInfo={description:"",methods:[],displayName:"NeumorphicButton",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["ButtonProps"]}},"./components/elements/Text/NeumorphicText/NeumorphicText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>NeumorphicText});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js");const NeumorphicText=({isInset=!0,bgcolor="#f5f5f5",boxShadow,sx={},children,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__.A,{...props,sx:{display:"inline-block",fontWeight:600,p:1.5,px:4,bgcolor,borderRadius:"16px",textShadow:"0 0 3px rgba(0, 0, 0, 0.1)",boxShadow:boxShadow||(isInset?"inset 3px 3px 6px #cccccc, inset -3px -3px 6px #ffffff":"3px 3px 6px #cccccc, -3px -3px 6px #ffffff"),color:"#333",...sx},children});NeumorphicText.__docgenInfo={description:"",methods:[],displayName:"NeumorphicText",props:{isInset:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},bgcolor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#f5f5f5'",computed:!1}},boxShadow:{required:!1,tsType:{name:"string"},description:""},sx:{defaultValue:{value:"{}",computed:!1},required:!1}}}},"./features/TCG/components/CardSwiper/CardSwiper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>CardSwiper});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),NeumorphicButton=__webpack_require__("./components/elements/Button/NeumorphicButton/NeumorphicButton.tsx"),NeumorphicText=__webpack_require__("./components/elements/Text/NeumorphicText/NeumorphicText.tsx"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Card=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),CardHeader=__webpack_require__("./node_modules/@mui/material/CardHeader/CardHeader.js"),CardContent=__webpack_require__("./node_modules/@mui/material/CardContent/CardContent.js"),CardActions=__webpack_require__("./node_modules/@mui/material/CardActions/CardActions.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),modules=__webpack_require__("./node_modules/swiper/modules/index.mjs"),swiper_react=__webpack_require__("./node_modules/swiper/swiper-react.mjs");var TCGCard=__webpack_require__("./features/TCG/components/TCGCard/TCGCard.tsx");const CardSwiper=({cards,onClose})=>{const[isEnd,setIsEnd]=(0,react.useState)(!1);return(0,jsx_runtime.jsx)(Box.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",p:{xs:2,md:4},width:"100%"},children:(0,jsx_runtime.jsxs)(Card.A,{sx:{width:"100%",bgcolor:"#f5f5f5",borderRadius:"12px",boxShadow:"4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff",margin:"16px 0",overflow:"hidden"},children:[(0,jsx_runtime.jsx)(CardHeader.A,{title:(0,jsx_runtime.jsx)(Box.A,{sx:{textAlign:"center"},children:(0,jsx_runtime.jsx)(NeumorphicText.y,{isInset:!0,children:"カードをめくろう!"})})}),(0,jsx_runtime.jsx)(CardContent.A,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,jsx_runtime.jsx)(swiper_react.RC,{slidesPerView:1,modules:[modules.ZD,modules.Vx],effect:"cards",grabCursor:!0,navigation:{nextEl:".swiper-button-next"},pagination:{clickable:!0},oneWayMovement:!0,speed:500,nested:!0,onReachEnd:()=>{setIsEnd(!0)},allowSlideNext:!isEnd,style:{width:"100%",overflow:"visible"},cardsEffect:{perSlideOffset:1,rotate:!1,perSlideRotate:0,slideShadows:!1},children:cards.map((card=>(0,jsx_runtime.jsx)(swiper_react.qr,{style:{display:"flex",justifyContent:"center",alignItems:"center",overflow:"visible"},children:(0,jsx_runtime.jsx)(TCGCard.T,{card,onClick:()=>{}})},card.id)))})}),(0,jsx_runtime.jsx)(CardActions.A,{sx:{justifyContent:"center",minHeight:"64px",marginBottom:"8px"},children:isEnd?(0,jsx_runtime.jsx)(NeumorphicButton.A,{onClick:()=>{onClose(),(cards=>{const updatedCards=[...JSON.parse(localStorage.getItem("collectedCards")||"[]")];cards.forEach((newCard=>{const existingCard=updatedCards.find((card=>card.img===newCard.img&&card.rarity===newCard.rarity));existingCard?existingCard.count+=1:updatedCards.push({...newCard,count:1})})),localStorage.setItem("collectedCards",JSON.stringify(updatedCards))})(cards),setIsEnd(!1)},children:"終了"},"end"):(0,jsx_runtime.jsx)(NeumorphicButton.A,{"aria-label":"めくる",className:"swiper-button-next",children:"めくる"},"next")})]})})};CardSwiper.__docgenInfo={description:"",methods:[],displayName:"CardSwiper",props:{cards:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  id: number;\n  name: string;\n  rarity: 'common' | 'super-rare' | 'rare' | 'ultra-rare';\n  img: string;\n}",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"rarity",value:{name:"union",raw:"'common' | 'super-rare' | 'rare' | 'ultra-rare'",elements:[{name:"literal",value:"'common'"},{name:"literal",value:"'super-rare'"},{name:"literal",value:"'rare'"},{name:"literal",value:"'ultra-rare'"}],required:!0}},{key:"img",value:{name:"string",required:!0}}]}}],raw:"CardType[]"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./features/TCG/components/TCGCard/TCGCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>TCGCard});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),_barrel_optimize_names_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_barrel_optimize_names_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const defaultStyles={backgroundColor:"#ffffff",boxShadow:"4px 4px 8px rgba(0, 0, 0, 0.1)",nameBackgroundColor:"#f0f0f0",nameTextColor:"#333",rarityBackgroundColor:"#f0f0f0",rarityTextColor:"#333"},styles={"ultra-rare":{backgroundColor:"#ffeb3b",boxShadow:"0 0 10px rgba(255, 223, 0, 0.8)",nameBackgroundColor:"#ffd700",nameTextColor:"#000",rarityBackgroundColor:"#ffd700",rarityTextColor:"#000"},"super-rare":{backgroundColor:"#b0e0e6",boxShadow:"0 0 10px rgba(70, 130, 180, 0.5)",nameBackgroundColor:"#4682b4",nameTextColor:"#fff",rarityBackgroundColor:"#4682b4",rarityTextColor:"#fff"},rare:{backgroundColor:"#dcdcdc",boxShadow:"0 0 10px rgba(192, 192, 192, 0.5)",nameBackgroundColor:"#c0c0c0",nameTextColor:"#000",rarityBackgroundColor:"#c0c0c0",rarityTextColor:"#000"}},TCGCard=({card,onClick})=>{const rarityStyles=(rarity=card.rarity,{...defaultStyles,...styles[rarity]||{}});var rarity;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.A,{onClick,sx:{width:{xs:"140px",md:"200px"},height:{xs:"250px",md:"380px"},borderRadius:"12px",p:1,display:"flex",flexDirection:"column",justifyContent:"space-between",background:rarityStyles.backgroundColor,boxShadow:rarityStyles.boxShadow,position:"relative",overflow:"hidden",transition:"transform 0.2s","&:hover":{transform:"scale(1.02)"}},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{sx:{textAlign:"center",backgroundColor:rarityStyles.nameBackgroundColor,color:rarityStyles.nameTextColor,padding:"2px 4px",fontWeight:"bold",fontSize:"0.5rem",borderRadius:"8px 8px 0 0"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{variant:"body2",noWrap:!0,children:card.name})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{sx:{flex:1,position:"relative",aspectRatio:"2 / 3",overflow:"hidden"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1__.A,{src:card.img,alt:card.name,style:{objectFit:"cover"},fill:!0})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{sx:{textAlign:"center",backgroundColor:rarityStyles.rarityBackgroundColor,color:rarityStyles.rarityTextColor,padding:"2px 4px",fontWeight:"bold",fontSize:"0.5rem",borderRadius:"0 0 8px 8px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{variant:"body2",children:card.rarity.toUpperCase()})})]})};TCGCard.__docgenInfo={description:"",methods:[],displayName:"TCGCard",props:{card:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  id: number;\n  name: string;\n  rarity: 'common' | 'super-rare' | 'rare' | 'ultra-rare';\n  img: string;\n}",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"rarity",value:{name:"union",raw:"'common' | 'super-rare' | 'rare' | 'ultra-rare'",elements:[{name:"literal",value:"'common'"},{name:"literal",value:"'super-rare'"},{name:"literal",value:"'rare'"},{name:"literal",value:"'ultra-rare'"}],required:!0}},{key:"img",value:{name:"string",required:!0}}]}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./features/TCG/mocks/packs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>generateCards,l:()=>mockPacks});const BASE_URL=__webpack_require__("./node_modules/process/browser.js").env.NEXT_PUBLIC_BASE_URL||"/next-app/storybook",generateRandomRarity=()=>{const random=Math.random();return random<=.01?"ultra-rare":random<=.1?"super-rare":random<=.5?"rare":"common"},generateCards=(packId,cardCount)=>Array.from({length:cardCount},((_,index)=>{const cardId=100*packId+index+1,randomImageNumber=Math.floor(10*Math.random())+1;return{id:cardId,name:`Card ${cardId}`,rarity:generateRandomRarity(),img:`${BASE_URL}/cards/series1/${String(randomImageNumber).padStart(2,"0")}.png`}})),mockPacks=Array.from({length:10},((_,index)=>{const packId=index+1;return{id:packId,name:`Pack ${packId}`,img:{front:{url:`${BASE_URL}/cards/series1/09.png`,alt:`Front of Pack ${packId}`},back:{url:`${BASE_URL}/pack1.png`,alt:`Back of Pack ${packId}`}},cards:generateCards(packId,5)}}))}}]);