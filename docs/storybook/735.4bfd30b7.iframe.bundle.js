"use strict";(self.webpackChunknext_app=self.webpackChunknext_app||[]).push([[735],{"./components/elements/Button/NeumorphicButton/NeumorphicButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),_barrel_optimize_names_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const colorStyles={normal:{backgroundColor:"#f5f5f5",textColor:"#333",shadow:"6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff"},danger:{backgroundColor:"#ffe5e5",textColor:"#d32f2f",shadow:"6px 6px 12px #d1b1b1, -6px -6px 12px #ffffff"},primary:{backgroundColor:"#e3f2fd",textColor:"#1976d2",shadow:"6px 6px 12px #b1c1d1, -6px -6px 12px #ffffff"}},sizeStyles={small:{padding:"6px 12px",fontSize:10},medium:{padding:"10px 20px",fontSize:14},large:{padding:"14px 28px",fontSize:18}},NeumorphicButton=({text,colorVariant="normal",size="medium",sx={},...props})=>{const colorStyle=colorStyles[colorVariant],sizeStyle=sizeStyles[size];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.A,{sx:{bgcolor:colorStyle.backgroundColor,borderRadius:"16px",boxShadow:colorStyle.shadow,color:colorStyle.textColor,padding:sizeStyle.padding,"&:hover":{bgcolor:colorStyle.backgroundColor,opacity:.9},...sx},...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{variant:"body2",fontSize:sizeStyle.fontSize,sx:{fontWeight:600},children:text})})},__WEBPACK_DEFAULT_EXPORT__=NeumorphicButton;NeumorphicButton.__docgenInfo={description:"Neumorphicスタイルのボタンコンポーネント。",methods:[],displayName:"NeumorphicButton",props:{text:{required:!0,tsType:{name:"string"},description:"ボタンに表示するテキスト（必須）。"},colorVariant:{required:!1,tsType:{name:"union",raw:"'normal' | 'danger' | 'primary'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'primary'"}]},description:"カラータイプを指定 ('normal', 'danger', 'primary')。",defaultValue:{value:"'normal'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"サイズを指定 ('small', 'medium', 'large')。",defaultValue:{value:"'medium'",computed:!1}},sx:{defaultValue:{value:"{}",computed:!1},required:!1}},composes:["Omit"]}},"./components/elements/Text/NeumorphicText/NeumorphicText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>NeumorphicText});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js");const NeumorphicText=({isInset=!0,bgcolor="#f5f5f5",boxShadow,sx={},children,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__.A,{...props,sx:{display:"inline-block",fontWeight:600,p:1.5,px:4,bgcolor,borderRadius:"16px",textShadow:"0 0 3px rgba(0, 0, 0, 0.1)",boxShadow:boxShadow||(isInset?"inset 3px 3px 6px #cccccc, inset -3px -3px 6px #ffffff":"3px 3px 6px #cccccc, -3px -3px 6px #ffffff"),color:"#333",...sx},children});NeumorphicText.__docgenInfo={description:"",methods:[],displayName:"NeumorphicText",props:{isInset:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},bgcolor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#f5f5f5'",computed:!1}},boxShadow:{required:!1,tsType:{name:"string"},description:""},sx:{defaultValue:{value:"{}",computed:!1},required:!1}}}},"./features/TCG/components/CardSwiper/CardSwiper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>CardSwiper});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_elements_Button_NeumorphicButton_NeumorphicButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/elements/Button/NeumorphicButton/NeumorphicButton.tsx"),_components_elements_Text_NeumorphicText_NeumorphicText__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/elements/Text/NeumorphicText/NeumorphicText.tsx"),_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/CardHeader/CardHeader.js"),_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/CardContent/CardContent.js"),_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/material/CardActions/CardActions.js"),swiper_modules__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/swiper/modules/index.mjs"),swiper_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/swiper/swiper-react.mjs"),_TCGCard_TCGCard__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./features/TCG/components/TCGCard/TCGCard.tsx");const CardSwiper=({cards,isEnd,onReset,onReachEnd})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_6__.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",p:{xs:2,md:4},width:"100%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,{sx:{width:"100%",bgcolor:"#f5f5f5",borderRadius:"12px",boxShadow:"4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff",margin:"16px 0",overflow:"hidden"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_8__.A,{title:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_6__.A,{sx:{textAlign:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_Text_NeumorphicText_NeumorphicText__WEBPACK_IMPORTED_MODULE_2__.y,{isInset:!0,children:"カードをめくろう!"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.RC,{slidesPerView:1,modules:[swiper_modules__WEBPACK_IMPORTED_MODULE_3__.ZD,swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Vx],effect:"cards",grabCursor:!0,navigation:{nextEl:".swiper-button-next"},pagination:{clickable:!0},oneWayMovement:!0,speed:500,nested:!0,onReachEnd,allowSlideNext:!isEnd,style:{width:"100%",overflow:"visible"},cardsEffect:{perSlideOffset:1,rotate:!1,perSlideRotate:0,slideShadows:!1},children:cards.map((card=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.qr,{style:{display:"flex",justifyContent:"center",alignItems:"center",overflow:"visible"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TCGCard_TCGCard__WEBPACK_IMPORTED_MODULE_5__.T,{card})},card.id)))})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardActions_CardContent_CardHeader_mui_material__WEBPACK_IMPORTED_MODULE_10__.A,{sx:{justifyContent:"center",minHeight:"64px",marginBottom:"8px"},children:isEnd?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_Button_NeumorphicButton_NeumorphicButton__WEBPACK_IMPORTED_MODULE_1__.A,{text:"終了",onClick:onReset},"end"):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_Button_NeumorphicButton_NeumorphicButton__WEBPACK_IMPORTED_MODULE_1__.A,{text:"めくる","aria-label":"めくる",className:"swiper-button-next"},"next")})]})});CardSwiper.__docgenInfo={description:"",methods:[],displayName:"CardSwiper",props:{cards:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  id: number;\n  name: string;\n  rarity: 'common' | 'super-rare' | 'rare' | 'ultra-rare';\n  img: string;\n}",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"rarity",value:{name:"union",raw:"'common' | 'super-rare' | 'rare' | 'ultra-rare'",elements:[{name:"literal",value:"'common'"},{name:"literal",value:"'super-rare'"},{name:"literal",value:"'rare'"},{name:"literal",value:"'ultra-rare'"}],required:!0}},{key:"img",value:{name:"string",required:!0}}]}}],raw:"CardType[]"},description:""},isEnd:{required:!0,tsType:{name:"boolean"},description:""},onReset:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onReachEnd:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./features/TCG/components/TCGCard/TCGCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>TCGCard});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),_barrel_optimize_names_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_barrel_optimize_names_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const defaultStyles={backgroundColor:"#ffffff",boxShadow:"4px 4px 8px rgba(0, 0, 0, 0.2)",highlightColor:"rgba(255, 255, 255, 0.3)",overlayBackgroundColor:"rgba(0, 0, 0, 0.3)"},TCGCard=({card,onClick})=>{const rarityStyles=(rarity=>{switch(rarity){case"ultra-rare":return{backgroundColor:"#ffeb3b",boxShadow:"0 0 20px rgba(255, 223, 0, 0.8)",shineColor:"rgba(255, 223, 0, 0.3)",highlightColor:"rgba(255, 255, 255, 0.6)",overlayBackgroundColor:"rgba(255, 223, 0, 0.8)"};case"super-rare":return{backgroundColor:"#b0e0e6",boxShadow:"0 0 15px rgba(70, 130, 180, 0.5)",shineColor:"rgba(70, 130, 180, 0.3)",highlightColor:"rgba(255, 255, 255, 0.4)",overlayBackgroundColor:"rgba(70, 130, 180, 0.8)"};case"rare":return{backgroundColor:"#dcdcdc",boxShadow:"0 0 10px rgba(192, 192, 192, 0.5)",shineColor:"rgba(192, 192, 192, 0.3)",highlightColor:"rgba(255, 255, 255, 0.3)",overlayBackgroundColor:"rgba(192, 192, 192, 0.6)"};default:return defaultStyles}})(card.rarity);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.A,{onClick,sx:{width:{xs:"140px",md:"180px"},height:{xs:"220px",md:"280px"},borderRadius:"12px",display:"flex",flexDirection:"column",justifyContent:"space-between",background:rarityStyles.backgroundColor,boxShadow:"4px 4px 8px rgba(0, 0, 0, 0.15), -4px -4px 8px rgba(255, 255, 255, 0.8)",position:"relative",overflow:"hidden",padding:"6px"},children:["common"!==card.rarity&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{sx:{position:"absolute",top:0,left:"-50%",width:"150%",height:"100%",background:`linear-gradient(90deg, transparent, ${rarityStyles.highlightColor}, transparent)`,animation:"moveLight 2.5s infinite",zIndex:5,pointerEvents:"none"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{sx:{flex:1,position:"relative",aspectRatio:"2 / 3",overflow:"hidden",zIndex:1,borderRadius:"8px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1__.A,{src:card.img,alt:card.name,style:{objectFit:"cover"},fill:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{variant:"caption",sx:{position:"absolute",top:"5px",left:"10%",right:"10%",width:"80%",fontSize:"0.5rem",backgroundColor:rarityStyles.overlayBackgroundColor,color:"#fff",pl:"4px",borderRadius:"4px",textAlign:"left",zIndex:3},children:card.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{variant:"caption",fontSize:"0.4rem",sx:{position:"absolute",bottom:"0",left:"0",width:"100%",backgroundColor:rarityStyles.overlayBackgroundColor,color:"#fff",padding:"4px",fontWeight:"medium",fontSize:"0.4rem",textAlign:"center",zIndex:3},children:card.rarity.toUpperCase()})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style",{children:"\n          @keyframes moveLight {\n            0% { transform: translateX(-100%); }\n            100% { transform: translateX(100%); }\n          }\n        "})]})};TCGCard.__docgenInfo={description:"",methods:[],displayName:"TCGCard",props:{card:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  id: number;\n  name: string;\n  rarity: 'common' | 'super-rare' | 'rare' | 'ultra-rare';\n  img: string;\n}",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"rarity",value:{name:"union",raw:"'common' | 'super-rare' | 'rare' | 'ultra-rare'",elements:[{name:"literal",value:"'common'"},{name:"literal",value:"'super-rare'"},{name:"literal",value:"'rare'"},{name:"literal",value:"'ultra-rare'"}],required:!0}},{key:"img",value:{name:"string",required:!0}}]}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./features/TCG/mocks/cardsData.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>cardsData});const cardsData={ultraRare:[{name:"ネッシー",img:"/cards/series1/ultra-rare/01.png"},{name:"王様",img:"/cards/series1/ultra-rare/02.png"},{name:"王女",img:"/cards/series1/ultra-rare/03.png"},{name:"ツチノコ",img:"/cards/series1/ultra-rare/04.png"}],superRare:[{name:"サメちゃん",img:"/cards/series1/super-rare/01.png"},{name:"ポセイドン",img:"/cards/series1/super-rare/02.png"},{name:"青いウーパールーパー",img:"/cards/series1/super-rare/03.png"},{name:"雪女",img:"/cards/series1/super-rare/04.png"},{name:"リュウグウノツカイ",img:"/cards/series1/super-rare/05.png"},{name:"虫取り少年",img:"/cards/series1/super-rare/06.png"}],rare:[{name:"巫女",img:"/cards/series1/rare/01.png"},{name:"ユグドラシル",img:"/cards/series1/rare/02.png"},{name:"船長",img:"/cards/series1/rare/03.png"},{name:"雪だるま",img:"/cards/series1/rare/04.png"},{name:"ラッパー",img:"/cards/series1/rare/05.png"}],common:[{name:"オオカミ",img:"/cards/series1/common/01.png"},{name:"近所のじっちゃん",img:"/cards/series1/common/02.png"},{name:"偉そうな犬",img:"/cards/series1/common/03.png"},{name:"森の少女",img:"/cards/series1/common/04.png"},{name:"森のねえさん",img:"/cards/series1/common/05.png"},{name:"パン屋のお兄さん",img:"/cards/series1/common/06.png"},{name:"下っ端山賊",img:"/cards/series1/common/07.png"},{name:"通行人",img:"/cards/series1/common/08.png"},{name:"バニー",img:"/cards/series1/common/09.png"},{name:"マグロ",img:"/cards/series1/common/10.png"}]}},"./features/TCG/mocks/packs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HZ:()=>generateCards,lB:()=>mockPacks,up:()=>generateMockPacks});var _cardsData__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./features/TCG/mocks/cardsData.ts");const BASE_URL=__webpack_require__("./node_modules/process/browser.js").env.NEXT_PUBLIC_BASE_URL||"/next-app/storybook",rarityMapping={ultraRare:"ultra-rare",superRare:"super-rare",rare:"rare",common:"common"},generateUniqueId=()=>{const newCounter=parseInt(localStorage.getItem("globalCardIdCounter")||"0",10)+1;return localStorage.setItem("globalCardIdCounter",newCounter.toString()),newCounter},generateCards=cardCount=>Array.from({length:cardCount},(()=>{const internalRarity=(()=>{const random=Math.random();return random<=.01?"ultraRare":random<=.05?"superRare":random<=.1?"rare":"common"})(),card=(rarity=>{const cards=_cardsData__WEBPACK_IMPORTED_MODULE_0__.q[rarity];return cards[Math.floor(Math.random()*cards.length)]})(internalRarity);return{id:generateUniqueId(),name:card.name,rarity:rarityMapping[internalRarity],img:`${BASE_URL}${card.img}`}})),mockPacks=Array.from({length:10},(()=>{const packId=generateUniqueId();return{id:packId,name:`Pack ${packId}`,img:{front:{url:`${BASE_URL}/cards/series1/pack-front.png`,alt:`Front of Pack ${packId}`},back:{url:`${BASE_URL}/cards/series1/pack-back.png`,alt:`Back of Pack ${packId}`}},cards:generateCards(5)}})),generateMockPacks=(packCount=10,cardCount=5)=>Array.from({length:packCount},(()=>{const packId=generateUniqueId();return{id:packId,name:`Pack ${packId}`,img:{front:{url:`${BASE_URL}/cards/series1/pack-front.png`,alt:`Front of Pack ${packId}`},back:{url:`${BASE_URL}/cards/series1/pack-back.png`,alt:`Back of Pack ${packId}`}},cards:generateCards(cardCount)}}))}}]);