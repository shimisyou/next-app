"use strict";(self.webpackChunknext_app=self.webpackChunknext_app||[]).push([[803],{"./features/TCG/components/CardSwiper/CardSwiperContainer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithInteraction:()=>WithInteraction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_mocks_packs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./features/TCG/mocks/packs.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"features/TCG/CardSwiper/CardSwiperContainer",component:__webpack_require__("./features/TCG/components/CardSwiper/CardSwiperContainer.tsx").m,args:{cards:(0,_mocks_packs__WEBPACK_IMPORTED_MODULE_1__.HZ)(1,5)}},Default={},WithInteraction={args:{cards:(0,_mocks_packs__WEBPACK_IMPORTED_MODULE_1__.HZ)(1,5)},play:async({args,step})=>{await step("ナビゲーションボタンでスライドを進める",(async()=>{const modal=_storybook_test__WEBPACK_IMPORTED_MODULE_0__.nj.getByRole("dialog"),nextButton=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(modal).getByRole("button",{name:/めくる/i});for(let i=0;i<args.cards.length-1;i++)await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(nextButton),await new Promise((resolve=>setTimeout(resolve,500)));const endButton=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(modal).getByRole("button",{name:/終了/i});(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(endButton).toBeInTheDocument()})),await step("終了ボタンでモーダルが閉じること",(async()=>{const endButton=_storybook_test__WEBPACK_IMPORTED_MODULE_0__.nj.getByRole("button",{name:/終了/i});await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(endButton),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(_storybook_test__WEBPACK_IMPORTED_MODULE_0__.nj.queryByRole("dialog")).not.toBeInTheDocument()}))}},__namedExportsOrder=["Default","WithInteraction"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},WithInteraction.parameters={...WithInteraction.parameters,docs:{...WithInteraction.parameters?.docs,source:{originalSource:"{\n  args: {\n    cards: generateCards(1, 5)\n  },\n  play: async ({\n    args,\n    step\n  }) => {\n    await step('ナビゲーションボタンでスライドを進める', async () => {\n      const modal = screen.getByRole('dialog');\n      const nextButton = within(modal).getByRole('button', {\n        name: /めくる/i\n      });\n      for (let i = 0; i < args.cards.length - 1; i++) {\n        await userEvent.click(nextButton);\n        await new Promise(resolve => setTimeout(resolve, 500)); // Optional delay for better simulation\n      }\n      const endButton = within(modal).getByRole('button', {\n        name: /終了/i\n      });\n      expect(endButton).toBeInTheDocument();\n    });\n    await step('終了ボタンでモーダルが閉じること', async () => {\n      const endButton = screen.getByRole('button', {\n        name: /終了/i\n      });\n      await userEvent.click(endButton);\n      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();\n    });\n  }\n}",...WithInteraction.parameters?.docs?.source}}}},"./features/TCG/components/CardSwiper/CardSwiperContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>CardSwiperContainer});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Box_Modal_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_barrel_optimize_names_Box_Modal_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Modal/Modal.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_CardSwiper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./features/TCG/components/CardSwiper/CardSwiper.tsx");const CardSwiperContainer=({cards,onComplete})=>{const[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),modalRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{open&&modalRef.current&&modalRef.current.focus()}),[open]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Modal_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Modal_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{open,slotProps:{backdrop:{style:{backgroundColor:"transparent",backdropFilter:"blur(10px)"}}},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description","aria-modal":"true",role:"dialog",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Modal_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{ref:modalRef,tabIndex:-1,sx:{maxWidth:"600px",margin:"auto",outline:"none",position:"relative"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CardSwiper__WEBPACK_IMPORTED_MODULE_2__.b,{cards,onClose:()=>{setOpen(!1),onComplete&&onComplete()}})})})})};CardSwiperContainer.__docgenInfo={description:"",methods:[],displayName:"CardSwiperContainer",props:{cards:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  id: number;\n  name: string;\n  rarity: 'common' | 'super-rare' | 'rare' | 'ultra-rare';\n  img: string;\n}",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"rarity",value:{name:"union",raw:"'common' | 'super-rare' | 'rare' | 'ultra-rare'",elements:[{name:"literal",value:"'common'"},{name:"literal",value:"'super-rare'"},{name:"literal",value:"'rare'"},{name:"literal",value:"'ultra-rare'"}],required:!0}},{key:"img",value:{name:"string",required:!0}}]}}],raw:"CardType[]"},description:""},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}}}]);