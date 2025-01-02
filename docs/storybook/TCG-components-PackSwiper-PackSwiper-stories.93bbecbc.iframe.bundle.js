"use strict";(self.webpackChunknext_app=self.webpackChunknext_app||[]).push([[328],{"./features/TCG/components/PackSwiper/PackSwiper.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_mocks_packs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./features/TCG/mocks/packs.ts");const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./features/TCG/components/PackSwiper/PackSwiper.tsx").A,argTypes:{}},Default={args:{packs:_mocks_packs__WEBPACK_IMPORTED_MODULE_1__.lB,onOpenPack:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),onSlideChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()},play:async({canvasElement,args})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement),openButton=await canvas.findByRole("button",{name:/開封/i});await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(openButton),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(args.onOpenPack).toHaveBeenCalledTimes(1)}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    packs: mockPacks,\n    onOpenPack: fn(),\n    onSlideChange: fn()\n  },\n  play: async ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n\n    // ボタンを取得\n    const openButton = await canvas.findByRole('button', {\n      name: /開封/i\n    });\n\n    // ボタンをクリック\n    await userEvent.click(openButton);\n\n    // モック関数が呼ばれたかを確認\n    expect(args.onOpenPack).toHaveBeenCalledTimes(1);\n  }\n}",...Default.parameters?.docs?.source}}}},"./components/elements/Button/NeumorphicButton/NeumorphicButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),_barrel_optimize_names_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const NeumorphicButton=({children,sx={},...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.A,{sx:{bgcolor:"#f5f5f5",borderRadius:"16px",boxShadow:"6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff",color:"#333",padding:"10px 20px","&:hover":{bgcolor:"#eaeaea"},...sx},...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{sx:{fontWeight:"bold",textShadow:"0 0 5px rgba(0, 0, 0, 0.2)"},children})}),__WEBPACK_DEFAULT_EXPORT__=NeumorphicButton;NeumorphicButton.__docgenInfo={description:"Neumorphicスタイルのボタンコンポーネント。\n\nこのボタンは、立体的な影効果とカスタマイズ可能なスタイルを提供します。\n\n@param {NeumorphicButtonProps} props - ボタンのプロパティ。\n@returns {React.ReactNode} Neumorphicスタイルのボタンコンポーネント。",methods:[],displayName:"NeumorphicButton",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"ボタン内部に表示する子要素。\nテキスト、アイコン、または他のReact要素が渡せます。"},sx:{defaultValue:{value:"{}",computed:!1},required:!1}},composes:["ButtonProps"]}},"./components/elements/Text/NeumorphicText/NeumorphicText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>NeumorphicText});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js");const NeumorphicText=({isInset=!0,bgcolor="#f5f5f5",boxShadow,sx={},children,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__.A,{...props,sx:{display:"inline-block",fontWeight:600,p:1.5,px:4,bgcolor,borderRadius:"16px",textShadow:"0 0 3px rgba(0, 0, 0, 0.1)",boxShadow:boxShadow||(isInset?"inset 3px 3px 6px #cccccc, inset -3px -3px 6px #ffffff":"3px 3px 6px #cccccc, -3px -3px 6px #ffffff"),color:"#333",...sx},children});NeumorphicText.__docgenInfo={description:"",methods:[],displayName:"NeumorphicText",props:{isInset:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},bgcolor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#f5f5f5'",computed:!1}},boxShadow:{required:!1,tsType:{name:"string"},description:""},sx:{defaultValue:{value:"{}",computed:!1},required:!1}}}},"./features/TCG/mocks/packs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HZ:()=>generateCards,lB:()=>mockPacks});const cardsData={ultraRare:[{name:"ネッシー",img:"/cards/series1/ultra-rare/01.png"},{name:"王様",img:"/cards/series1/ultra-rare/02.png"},{name:"王女",img:"/cards/series1/ultra-rare/03.png"},{name:"ツチノコ",img:"/cards/series1/ultra-rare/04.png"}],superRare:[{name:"サメちゃん",img:"/cards/series1/super-rare/01.png"},{name:"ポセイドン",img:"/cards/series1/super-rare/02.png"},{name:"青いウーパールーパー",img:"/cards/series1/super-rare/03.png"},{name:"雪女",img:"/cards/series1/super-rare/04.png"},{name:"リュウグウノツカイ",img:"/cards/series1/super-rare/05.png"},{name:"虫取り少年",img:"/cards/series1/super-rare/06.png"}],rare:[{name:"巫女",img:"/cards/series1/rare/01.png"},{name:"ユグドラシル",img:"/cards/series1/rare/02.png"},{name:"船長",img:"/cards/series1/rare/03.png"},{name:"雪だるま",img:"/cards/series1/rare/04.png"},{name:"ラッパー",img:"/cards/series1/rare/05.png"}],common:[{name:"オオカミ",img:"/cards/series1/common/01.png"},{name:"近所のじっちゃん",img:"/cards/series1/common/02.png"},{name:"偉そうな犬",img:"/cards/series1/common/03.png"},{name:"森の少女",img:"/cards/series1/common/04.png"},{name:"森のねえさん",img:"/cards/series1/common/05.png"},{name:"パン屋のお兄さん",img:"/cards/series1/common/06.png"},{name:"下っ端山賊",img:"/cards/series1/common/07.png"},{name:"通行人",img:"/cards/series1/common/08.png"},{name:"バニー",img:"/cards/series1/common/09.png"},{name:"マグロ",img:"/cards/series1/common/10.png"}]};const BASE_URL=__webpack_require__("./node_modules/process/browser.js").env.NEXT_PUBLIC_BASE_URL||"/next-app/storybook",rarityMapping={ultraRare:"ultra-rare",superRare:"super-rare",rare:"rare",common:"common"},generateUniqueId=()=>{const newCounter=parseInt(localStorage.getItem("globalCardIdCounter")||"0",10)+1;return localStorage.setItem("globalCardIdCounter",newCounter.toString()),newCounter},generateCards=cardCount=>Array.from({length:cardCount},(()=>{const internalRarity=(()=>{const random=Math.random();return random<=.01?"ultraRare":random<=.05?"superRare":random<=.1?"rare":"common"})(),card=(rarity=>{const cards=cardsData[rarity];return cards[Math.floor(Math.random()*cards.length)]})(internalRarity);return{id:generateUniqueId(),name:card.name,rarity:rarityMapping[internalRarity],img:`${BASE_URL}${card.img}`}})),mockPacks=Array.from({length:10},(()=>{const packId=generateUniqueId();return{id:packId,name:`Pack ${packId}`,img:{front:{url:`${BASE_URL}/cards/series1/pack-front.png`,alt:`Front of Pack ${packId}`},back:{url:`${BASE_URL}/cards/series1/pack-back.png`,alt:`Back of Pack ${packId}`}},cards:generateCards(5)}}))}}]);