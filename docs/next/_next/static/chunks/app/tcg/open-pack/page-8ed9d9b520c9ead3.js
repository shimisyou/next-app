(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[298],{2974:(e,r,t)=>{Promise.resolve().then(t.bind(t,1480))},1480:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>_});var a=t(5155),n=t(7756),s=t(8998),i=t(2115);let o=e=>{let[r,t]=(0,i.useState)(e),[a,n]=(0,i.useState)(null),[s,o]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{r.length>0&&n(r[0])},[r]),{packs:r,selectedPack:a,isPackOpened:s,handleSlideChange:e=>{n(e)},handleOpenPack:()=>{a&&o(!0)},handleOnComplete:()=>{if(a){let e=r.filter(e=>e.id!==a.id);t(e),n(e[0]||null)}o(!1)}}};var l=t(9566),d=t(3755),c=t(4665),x=t(3551),p=t(2479),f=t(9841),g=t(4290),m=t(3628),u=t(1314),h=t(7614);let b=e=>{let{cards:r,onClose:t}=e,[o,l]=(0,i.useState)(!1);return(0,a.jsx)(s.default,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",p:{xs:2,md:4},width:"100%"},children:(0,a.jsxs)(c.default,{sx:{width:"100%",bgcolor:"#f5f5f5",borderRadius:"12px",boxShadow:"4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff",margin:"16px 0",overflow:"hidden"},children:[(0,a.jsx)(x.A,{title:(0,a.jsx)(s.default,{sx:{textAlign:"center"},children:(0,a.jsx)(d.y,{isInset:!0,children:"カードをめくろう!"})})}),(0,a.jsx)(p.default,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)(m.RC,{slidesPerView:1,modules:[g.ZD,g.Vx],effect:"cards",grabCursor:!0,navigation:{nextEl:".swiper-button-next"},pagination:{clickable:!0},oneWayMovement:!0,speed:500,nested:!0,onReachEnd:()=>{l(!0)},allowSlideNext:!o,style:{width:"100%",overflow:"visible"},cardsEffect:{perSlideOffset:1,rotate:!1,perSlideRotate:0,slideShadows:!1},children:r.map(e=>(0,a.jsx)(m.qr,{style:{display:"flex",justifyContent:"center",alignItems:"center",overflow:"visible"},children:(0,a.jsx)(h.T,{card:e,onClick:()=>{}})},e.id))})}),(0,a.jsx)(f.A,{sx:{justifyContent:"center",minHeight:"64px",marginBottom:"8px"},children:o?(0,a.jsx)(n.A,{onClick:()=>{t(),(0,u.eV)(r),l(!1)},children:"終了"},"end"):(0,a.jsx)(n.A,{"aria-label":"めくる",className:"swiper-button-next",children:"めくる"},"next")})]})})},j=e=>{let{cards:r,onComplete:t}=e,[n,o]=(0,i.useState)(!0),d=(0,i.useRef)(null);return(0,i.useEffect)(()=>{n&&d.current&&d.current.focus()},[n]),(0,a.jsx)(s.default,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"},children:(0,a.jsx)(l.A,{open:n,slotProps:{backdrop:{style:{backgroundColor:"transparent",backdropFilter:"blur(10px)"}}},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description","aria-modal":"true",role:"dialog",children:(0,a.jsx)(s.default,{ref:d,tabIndex:-1,sx:{maxWidth:"600px",margin:"auto",outline:"none",position:"relative"},children:(0,a.jsx)(b,{cards:r,onClose:()=>{o(!1),t&&t()}})})})})};var w=t(6854);t(2252);let k=e=>{let{content:r,onSlideChange:t}=e,[n,o]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=setTimeout(()=>{o(!0)},100);return()=>clearTimeout(e)},[]),(0,a.jsxs)(s.default,{sx:{width:"100%",overflow:"hidden",position:"relative"},children:[!n&&(0,a.jsx)(s.default,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,a.jsx)(w.A,{})}),n&&(0,a.jsx)(m.RC,{effect:"coverflow",grabCursor:!0,loop:!0,spaceBetween:5,centeredSlides:!0,slidesPerView:1.5,breakpoints:{640:{slidesPerView:2},1024:{slidesPerView:3}},nested:!0,modules:[g.t9],coverflowEffect:{depth:100,rotate:-10,stretch:0,modifier:1,scale:1,slideShadows:!1},"aria-label":"Swiper container",role:"region",onSlideChange:t,children:r.map((e,r)=>(0,a.jsx)(m.qr,{children:(0,a.jsx)(s.default,{sx:{py:2},children:e})},r))})]})};var C=t(5565);t(6555);let v=e=>{let{url:r,alt:t,showText:n}=e;return(0,a.jsxs)(s.default,{sx:{position:"relative",width:{xs:"120px",md:"200px"},height:{xs:"220px",md:"380px"},display:"flex",flexDirection:"column",alignItems:"center",margin:"0 auto"},children:[(0,a.jsx)(c.default,{sx:{width:"100%",height:{xs:"180px",md:"300px"},overflow:"hidden",zIndex:2,borderRadius:"12px"},children:(0,a.jsxs)(p.default,{sx:{p:0,width:"100%",height:"100%",position:"relative"},children:[(0,a.jsx)(C.default,{src:r,alt:t,sizes:"(max-width: 600px) 150px, 200px",style:{objectFit:"fill"},fill:!0}),n&&(0,a.jsx)(s.default,{sx:{position:"absolute",bottom:"40px",width:"100%",textAlign:"center",color:"white",fontSize:{xs:"14px",md:"18px"},fontWeight:"bold",textShadow:"0 0 5px rgba(0, 0, 0, 0.5)"},children:"Card Game"})]})}),(0,a.jsx)(s.default,{sx:{position:"absolute",top:{xs:"190px",md:"320px"},width:{xs:"120px",md:"200px"},height:{xs:"40px",md:"60px"},overflow:"hidden",transform:"scaleY(-1)",opacity:.3,clipPath:"inset(0px 0px 0px 0px round 0px 0px 12px 12px)"},children:(0,a.jsx)(C.default,{src:r,alt:"".concat(t," Reflection"),sizes:"(max-width: 600px) 150px, 200px",style:{objectFit:"cover"},fill:!0})})]})},y=e=>{let{packImg:r}=e;return(0,a.jsx)(s.default,{sx:{width:{xs:"120px",md:"200px"},height:{xs:"230px",md:"380px"},margin:"0 auto"},children:(0,a.jsx)(m.RC,{effect:"flip",grabCursor:!0,nested:!0,modules:[g.n],flipEffect:{slideShadows:!1},style:{width:"100%",height:"100%",overflow:"hidden"},loop:!0,children:[r.front,r.back].map((e,r)=>(0,a.jsx)(m.qr,{children:(0,a.jsx)(v,{url:e.url,alt:e.alt,showText:0===r})},r))})})},S=e=>{let{packs:r,onSlideChange:t,onOpenPack:i}=e;return(0,a.jsx)(s.default,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",gap:2,paddingX:2},children:(0,a.jsxs)(c.default,{sx:{width:"100%",bgcolor:"#f5f5f5",borderRadius:"12px",boxShadow:"4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff",margin:"16px 0",overflow:"hidden"},children:[(0,a.jsx)(x.A,{title:(0,a.jsx)(s.default,{sx:{textAlign:"center"},children:(0,a.jsx)(d.y,{isInset:!0,variant:"h6",sx:{textAlign:"center"},children:"パックを選ぼう!"})})}),(0,a.jsx)(p.default,{sx:{padding:1,pb:0},children:(0,a.jsx)(k,{content:r.map(e=>(0,a.jsx)(y,{packImg:e.img},e.id)),onSlideChange:e=>t(r[e.realIndex])})}),(0,a.jsx)(f.A,{sx:{justifyContent:"center",pb:2},children:(0,a.jsx)(n.A,{onClick:i,children:"開封"})})]})})},I=e=>{let{packs:r,fallback:t}=e,{packs:n,selectedPack:i,isPackOpened:l,handleSlideChange:d,handleOpenPack:c,handleOnComplete:x}=o(r);return 0===n.length?(0,a.jsx)(a.Fragment,{children:t}):(0,a.jsx)(s.default,{children:l?i&&(0,a.jsx)(j,{cards:i.cards,onComplete:x}):(0,a.jsx)(S,{packs:n,onSlideChange:d,onOpenPack:c})})},A={ultraRare:[{name:"ネッシー",img:"/cards/series1/ultra-rare/01.png"},{name:"王様",img:"/cards/series1/ultra-rare/02.png"},{name:"王女",img:"/cards/series1/ultra-rare/03.png"},{name:"ツチノコ",img:"/cards/series1/ultra-rare/04.png"}],superRare:[{name:"サメちゃん",img:"/cards/series1/super-rare/01.png"},{name:"ポセイドン",img:"/cards/series1/super-rare/02.png"},{name:"青いウーパールーパー",img:"/cards/series1/super-rare/03.png"},{name:"雪女",img:"/cards/series1/super-rare/04.png"},{name:"リュウグウノツカイ",img:"/cards/series1/super-rare/05.png"},{name:"虫取り少年",img:"/cards/series1/super-rare/06.png"}],rare:[{name:"巫女",img:"/cards/series1/rare/01.png"},{name:"ユグドラシル",img:"/cards/series1/rare/02.png"},{name:"船長",img:"/cards/series1/rare/03.png"},{name:"雪だるま",img:"/cards/series1/rare/04.png"},{name:"ラッパー",img:"/cards/series1/rare/05.png"}],common:[{name:"オオカミ",img:"/cards/series1/common/01.png"},{name:"近所のじっちゃん",img:"/cards/series1/common/02.png"},{name:"偉そうな犬",img:"/cards/series1/common/03.png"},{name:"森の少女",img:"/cards/series1/common/04.png"},{name:"森のねえさん",img:"/cards/series1/common/05.png"},{name:"パン屋のお兄さん",img:"/cards/series1/common/06.png"},{name:"下っ端山賊",img:"/cards/series1/common/07.png"},{name:"通行人",img:"/cards/series1/common/08.png"},{name:"バニー",img:"/cards/series1/common/09.png"},{name:"マグロ",img:"/cards/series1/common/10.png"}]},R="https://shimisyou.github.io/next-app/next",P={ultraRare:"ultra-rare",superRare:"super-rare",rare:"rare",common:"common"},E="globalCardIdCounter",z=()=>{let e=parseInt(localStorage.getItem(E)||"0",10)+1;return localStorage.setItem(E,e.toString()),e},O=()=>{let e=Math.random();return e<=.01?"ultraRare":e<=.05?"superRare":e<=.1?"rare":"common"},B=e=>{let r=A[e],t=Math.floor(Math.random()*r.length);return r[t]},N=e=>Array.from({length:e},()=>{let e=O(),r=B(e);return{id:z(),name:r.name,rarity:P[e],img:"".concat(R).concat(r.img)}});Array.from({length:10},()=>{let e=z();return{id:e,name:"Pack ".concat(e),img:{front:{url:"".concat(R,"/cards/series1/pack-front.png"),alt:"Front of Pack ".concat(e)},back:{url:"".concat(R,"/cards/series1/pack-back.png"),alt:"Back of Pack ".concat(e)}},cards:N(5)}});let F=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return Array.from({length:e},()=>{let e=z();return{id:e,name:"Pack ".concat(e),img:{front:{url:"".concat(R,"/cards/series1/pack-front.png"),alt:"Front of Pack ".concat(e)},back:{url:"".concat(R,"/cards/series1/pack-back.png"),alt:"Back of Pack ".concat(e)}},cards:N(r)}})};var D=t(8173),V=t.n(D);let W=()=>{let[e,r]=(0,i.useState)([]);return(0,i.useEffect)(()=>{r(F())},[]),e},_=()=>{let e=W();return e.length?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.default,{sx:{px:2},children:(0,a.jsx)(V(),{href:"/tcg/card",passHref:!0,children:(0,a.jsx)(n.A,{children:"カード一覧へ"})})}),(0,a.jsx)(I,{packs:e,fallback:(0,a.jsx)("div",{children:"Loading packs..."})})]}):(0,a.jsx)("div",{children:"Loading packs..."})}},7756:(e,r,t)=>{"use strict";t.d(r,{A:()=>i});var a=t(5155),n=t(2282),s=t(4736);t(2115);let i=e=>{let{children:r,sx:t={},...i}=e;return(0,a.jsx)(n.A,{sx:{bgcolor:"#f5f5f5",borderRadius:"16px",boxShadow:"6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff",color:"#333",padding:"10px 20px","&:hover":{bgcolor:"#eaeaea"},...t},...i,children:(0,a.jsx)(s.default,{sx:{fontWeight:"bold",textShadow:"0 0 5px rgba(0, 0, 0, 0.2)"},children:r})})}},3755:(e,r,t)=>{"use strict";t.d(r,{y:()=>s});var a=t(5155),n=t(4736);let s=e=>{let{isInset:r=!0,bgcolor:t="#f5f5f5",boxShadow:s,sx:i={},children:o,...l}=e;return(0,a.jsx)(n.default,{...l,sx:{display:"inline-block",fontWeight:600,p:1.5,px:4,bgcolor:t,borderRadius:"16px",textShadow:"0 0 3px rgba(0, 0, 0, 0.1)",boxShadow:s||(r?"inset 3px 3px 6px #cccccc, inset -3px -3px 6px #ffffff":"3px 3px 6px #cccccc, -3px -3px 6px #ffffff"),color:"#333",...i},children:o})}},7614:(e,r,t)=>{"use strict";t.d(r,{T:()=>c});var a=t(5155),n=t(4665),s=t(8998),i=t(4736),o=t(5565);let l={backgroundColor:"#ffffff",boxShadow:"4px 4px 8px rgba(0, 0, 0, 0.2)",highlightColor:"rgba(255, 255, 255, 0.3)",overlayBackgroundColor:"rgba(0, 0, 0, 0.3)"},d=e=>{switch(e){case"ultra-rare":return{backgroundColor:"#ffeb3b",boxShadow:"0 0 20px rgba(255, 223, 0, 0.8)",shineColor:"rgba(255, 223, 0, 0.3)",highlightColor:"rgba(255, 255, 255, 0.6)",overlayBackgroundColor:"rgba(255, 223, 0, 0.8)"};case"super-rare":return{backgroundColor:"#b0e0e6",boxShadow:"0 0 15px rgba(70, 130, 180, 0.5)",shineColor:"rgba(70, 130, 180, 0.3)",highlightColor:"rgba(255, 255, 255, 0.4)",overlayBackgroundColor:"rgba(70, 130, 180, 0.8)"};case"rare":return{backgroundColor:"#dcdcdc",boxShadow:"0 0 10px rgba(192, 192, 192, 0.5)",shineColor:"rgba(192, 192, 192, 0.3)",highlightColor:"rgba(255, 255, 255, 0.3)",overlayBackgroundColor:"rgba(192, 192, 192, 0.6)"};default:return l}},c=e=>{let{card:r,onClick:t}=e,l=d(r.rarity);return(0,a.jsxs)(n.default,{onClick:t,sx:{width:{xs:"140px",md:"180px"},height:{xs:"220px",md:"280px"},borderRadius:"12px",display:"flex",flexDirection:"column",justifyContent:"space-between",background:l.backgroundColor,boxShadow:"4px 4px 8px rgba(0, 0, 0, 0.15), -4px -4px 8px rgba(255, 255, 255, 0.8)",position:"relative",overflow:"hidden",padding:"6px"},children:["common"!==r.rarity&&(0,a.jsx)(s.default,{sx:{position:"absolute",top:0,left:"-50%",width:"150%",height:"100%",background:"linear-gradient(90deg, transparent, ".concat(l.highlightColor,", transparent)"),animation:"moveLight 2.5s infinite",zIndex:5,pointerEvents:"none"}}),(0,a.jsxs)(s.default,{sx:{flex:1,position:"relative",aspectRatio:"2 / 3",overflow:"hidden",zIndex:1,borderRadius:"8px"},children:[(0,a.jsx)(o.default,{src:r.img,alt:r.name,style:{objectFit:"cover"},fill:!0}),(0,a.jsx)(i.default,{variant:"caption",sx:{position:"absolute",top:"5px",left:"10%",right:"10%",width:"80%",fontSize:"0.5rem",backgroundColor:l.overlayBackgroundColor,color:"#fff",pl:"4px",borderRadius:"4px",textAlign:"left",zIndex:3},children:r.name}),(0,a.jsx)(i.default,{variant:"caption",fontSize:"0.4rem",sx:{position:"absolute",bottom:"0",left:"0",width:"100%",backgroundColor:l.overlayBackgroundColor,color:"#fff",padding:"4px",fontWeight:"medium",fontSize:"0.4rem",textAlign:"center",zIndex:3},children:r.rarity.toUpperCase()})]}),(0,a.jsx)("style",{children:"\n          @keyframes moveLight {\n            0% { transform: translateX(-100%); }\n            100% { transform: translateX(100%); }\n          }\n        "})]})}},1314:(e,r,t)=>{"use strict";t.d(r,{eV:()=>n,kv:()=>i,sw:()=>o,uJ:()=>s});let a="collectedCards",n=e=>{let r=[...JSON.parse(localStorage.getItem(a)||"[]")];e.forEach(e=>{let t=r.find(r=>r.img===e.img&&r.rarity===e.rarity);t?t.count+=1:r.push({...e,count:1,createdAt:new Date().toISOString()})}),localStorage.setItem(a,JSON.stringify(r))},s=()=>JSON.parse(localStorage.getItem(a)||"[]"),i=e=>{let r=s().filter(r=>r.id!==e);localStorage.setItem(a,JSON.stringify(r))},o=()=>{localStorage.removeItem("globalCardIdCounter"),localStorage.removeItem(a)}}},e=>{var r=r=>e(e.s=r);e.O(0,[424,275,72,712,566,496,126,441,517,358],()=>r(2974)),_N_E=e.O()}]);