(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[298],{7582:(e,t,r)=>{Promise.resolve().then(r.bind(r,2959)),Promise.resolve().then(r.bind(r,2282)),Promise.resolve().then(r.bind(r,4736)),Promise.resolve().then(r.t.bind(r,8173,23))},7756:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var l=r(5155),o=r(2282),i=r(4736);let a=e=>{let{children:t,...r}=e;return(0,l.jsx)(o.default,{sx:{bgcolor:"#f5f5f5",borderRadius:"16px",boxShadow:"6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff",color:"#333",padding:"10px 20px","&:hover":{bgcolor:"#eaeaea"}},...r,children:(0,l.jsx)(i.default,{variant:"body1",sx:{fontWeight:"bold",textShadow:"0 0 5px rgba(0, 0, 0, 0.2)"},children:t})})}},3755:(e,t,r)=>{"use strict";r.d(t,{y:()=>i});var l=r(5155),o=r(4736);let i=e=>{let{isInset:t=!0,bgcolor:r="#f5f5f5",boxShadow:i,sx:a={},children:n,...d}=e;return(0,l.jsx)(o.default,{...d,sx:{display:"inline-block",fontWeight:600,p:1.5,px:4,bgcolor:r,borderRadius:"16px",textShadow:"0 0 3px rgba(0, 0, 0, 0.1)",boxShadow:i||(t?"inset 3px 3px 6px #cccccc, inset -3px -3px 6px #ffffff":"3px 3px 6px #cccccc, -3px -3px 6px #ffffff"),color:"#333",...a},children:n})}},2959:(e,t,r)=>{"use strict";r.d(t,{PackSwiperContainer:()=>k});var l=r(5155),o=r(8998),i=r(2115),a=r(9566),n=r(7756),d=r(3755),s=r(4665),x=r(3551),c=r(2479),f=r(9841),p=r(4290),h=r(3628),u=r(1314),g=r(7614);let m=e=>{let{cards:t,onClose:r}=e,[a,m]=(0,i.useState)(!1);return(0,l.jsx)(o.default,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",p:{xs:2,md:4},width:"100%"},children:(0,l.jsxs)(s.default,{sx:{width:"100%",bgcolor:"#f5f5f5",borderRadius:"12px",boxShadow:"4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff",margin:"16px 0",overflow:"hidden"},children:[(0,l.jsx)(x.A,{title:(0,l.jsx)(o.default,{sx:{textAlign:"center"},children:(0,l.jsx)(d.y,{isInset:!0,children:"カードをめくろう!"})})}),(0,l.jsx)(c.default,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,l.jsx)(h.RC,{slidesPerView:1,modules:[p.ZD,p.Vx],effect:"cards",grabCursor:!0,navigation:{nextEl:".swiper-button-next"},pagination:{clickable:!0},oneWayMovement:!0,speed:500,nested:!0,onReachEnd:()=>{m(!0)},allowSlideNext:!a,style:{width:"100%",overflow:"visible"},cardsEffect:{perSlideOffset:1,rotate:!1,perSlideRotate:0,slideShadows:!1},children:t.map(e=>(0,l.jsx)(h.qr,{style:{display:"flex",justifyContent:"center",alignItems:"center",overflow:"visible"},children:(0,l.jsx)(g.T,{card:e,onClick:()=>{}})},e.id))})}),(0,l.jsx)(f.A,{sx:{justifyContent:"center",minHeight:"64px",marginBottom:"8px"},children:a?(0,l.jsx)(n.A,{onClick:()=>{r(),(0,u.eV)(t),m(!1)},children:"終了"},"end"):(0,l.jsx)(n.A,{"aria-label":"めくる",className:"swiper-button-next",children:"めくる"},"next")})]})})},b=e=>{let{cards:t,onComplete:r}=e,[n,d]=(0,i.useState)(!0);return(0,l.jsx)(o.default,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"},children:(0,l.jsx)(a.A,{open:n,slotProps:{backdrop:{style:{backgroundColor:"transparent",backdropFilter:"blur(10px)"}}},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description","aria-modal":"true",role:"dialog",children:(0,l.jsx)(o.default,{sx:{maxWidth:"600px",margin:"auto",outline:"none",position:"relative"},children:(0,l.jsx)(m,{cards:t,onClose:()=>{d(!1),r&&r()}})})})})};var j=r(6854);r(2252);let w=e=>{let{content:t,onSlideChange:r}=e,[a,n]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=setTimeout(()=>{n(!0)},100);return()=>clearTimeout(e)},[]),(0,l.jsxs)(o.default,{sx:{width:"100%",overflow:"hidden",position:"relative"},children:[!a&&(0,l.jsx)(o.default,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,l.jsx)(j.A,{})}),a&&(0,l.jsx)(h.RC,{effect:"coverflow",grabCursor:!0,loop:!0,centeredSlides:!0,slidesPerView:1.5,breakpoints:{640:{slidesPerView:2},1024:{slidesPerView:3}},modules:[p.t9],coverflowEffect:{depth:100,rotate:-10,stretch:0,modifier:1,scale:1,slideShadows:!1},"aria-label":"Swiper container",role:"region",onSlideChange:r,children:t.map((e,t)=>(0,l.jsx)(h.qr,{children:(0,l.jsx)(o.default,{sx:{py:4,px:2},children:e})},t))})]})};var C=r(5565);r(6555);let y=e=>{let{url:t,alt:r,showText:i}=e;return(0,l.jsxs)(o.default,{sx:{position:"relative",width:{xs:"150px",md:"200px"},height:{xs:"280px",md:"380px"},display:"flex",flexDirection:"column",alignItems:"center",margin:"0 auto"},children:[(0,l.jsx)(s.default,{sx:{width:"100%",height:{xs:"220px",md:"300px"},overflow:"hidden",zIndex:2,borderRadius:"12px"},children:(0,l.jsxs)(c.default,{sx:{p:0,width:"100%",height:"100%",position:"relative"},children:[(0,l.jsx)(C.default,{src:t,alt:r,sizes:"(max-width: 600px) 150px, 200px",style:{objectFit:"fill"},fill:!0}),i&&(0,l.jsx)(o.default,{sx:{position:"absolute",bottom:"40px",width:"100%",textAlign:"center",color:"white",fontSize:{xs:"14px",md:"18px"},fontWeight:"bold",textShadow:"0 0 5px rgba(0, 0, 0, 0.5)"},children:"Card Game"})]})}),(0,l.jsx)(o.default,{sx:{position:"absolute",top:{xs:"240px",md:"320px"},width:{xs:"150px",md:"200px"},height:{xs:"40px",md:"60px"},overflow:"hidden",transform:"scaleY(-1)",opacity:.3,clipPath:"inset(0px 0px 0px 0px round 0px 0px 12px 12px)"},children:(0,l.jsx)(C.default,{src:t,alt:"".concat(r," Reflection"),sizes:"(max-width: 600px) 150px, 200px",style:{objectFit:"cover"},fill:!0})})]})},v=e=>{let{packImg:t}=e;return(0,l.jsx)(o.default,{sx:{width:{xs:"150px",md:"200px"},height:{xs:"280px",md:"380px"},margin:"0 auto"},children:(0,l.jsx)(h.RC,{effect:"flip",grabCursor:!0,modules:[p.n],flipEffect:{slideShadows:!1},style:{width:"100%",height:"100%",overflow:"hidden"},loop:!0,children:[t.front,t.back].map((e,t)=>(0,l.jsx)(h.qr,{children:(0,l.jsx)(y,{url:e.url,alt:e.alt,showText:0===t})},t))})})},S=e=>{let{packs:t,onSlideChange:r,onOpenPack:i}=e;return(0,l.jsx)(o.default,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",gap:2,padding:2},children:(0,l.jsxs)(s.default,{sx:{width:"100%",bgcolor:"#f5f5f5",borderRadius:"12px",boxShadow:"4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff",margin:"16px 0",overflow:"hidden"},children:[(0,l.jsx)(x.A,{title:(0,l.jsx)(o.default,{sx:{textAlign:"center"},children:(0,l.jsx)(d.y,{isInset:!0,variant:"h6",sx:{textAlign:"center"},children:"パックを選ぼう!"})})}),(0,l.jsxs)(c.default,{sx:{padding:"16px"},children:[" ",(0,l.jsx)(w,{content:t.map(e=>(0,l.jsx)(v,{packImg:e.img},e.id)),onSlideChange:e=>r(t[e.realIndex])})]}),(0,l.jsx)(f.A,{sx:{justifyContent:"center",padding:"16px"},children:(0,l.jsx)(n.A,{onClick:i,children:"開封"})})]})})},k=e=>{let{packs:t,fallback:r}=e,[a,n]=(0,i.useState)(t),[d,s]=(0,i.useState)(null),[x,c]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{a&&a.length>0&&s(a[0])},[a]),a&&0!==a.length)?(0,l.jsx)(o.default,{children:x?d&&(0,l.jsx)(b,{cards:d.cards,onComplete:()=>{if(d){let e=a.filter(e=>e.id!==d.id);n(e),e.length>0?s(e[0]):s(null)}c(!1)}}):(0,l.jsx)(S,{packs:a,onSlideChange:e=>{s(e)},onOpenPack:()=>{d&&c(!0)}})}):(0,l.jsx)(l.Fragment,{children:r})}},7614:(e,t,r)=>{"use strict";r.d(t,{T:()=>c});var l=r(5155),o=r(4665),i=r(8998),a=r(4736),n=r(5565);let d={backgroundColor:"#ffffff",boxShadow:"4px 4px 8px rgba(0, 0, 0, 0.1)",nameBackgroundColor:"#f0f0f0",nameTextColor:"#333",rarityBackgroundColor:"#f0f0f0",rarityTextColor:"#333"},s={"ultra-rare":{backgroundColor:"#ffeb3b",boxShadow:"0 0 10px rgba(255, 223, 0, 0.8)",nameBackgroundColor:"#ffd700",nameTextColor:"#000",rarityBackgroundColor:"#ffd700",rarityTextColor:"#000"},"super-rare":{backgroundColor:"#b0e0e6",boxShadow:"0 0 10px rgba(70, 130, 180, 0.5)",nameBackgroundColor:"#4682b4",nameTextColor:"#fff",rarityBackgroundColor:"#4682b4",rarityTextColor:"#fff"},rare:{backgroundColor:"#dcdcdc",boxShadow:"0 0 10px rgba(192, 192, 192, 0.5)",nameBackgroundColor:"#c0c0c0",nameTextColor:"#000",rarityBackgroundColor:"#c0c0c0",rarityTextColor:"#000"}},x=e=>({...d,...s[e]||{}}),c=e=>{let{card:t,onClick:r}=e,d=x(t.rarity);return(0,l.jsxs)(o.default,{onClick:r,sx:{width:{xs:"140px",md:"200px"},height:{xs:"250px",md:"380px"},borderRadius:"12px",p:1,display:"flex",flexDirection:"column",justifyContent:"space-between",background:d.backgroundColor,boxShadow:d.boxShadow,position:"relative",overflow:"hidden",transition:"transform 0.2s","&:hover":{transform:"scale(1.02)"}},children:[(0,l.jsx)(i.default,{sx:{textAlign:"center",backgroundColor:d.nameBackgroundColor,color:d.nameTextColor,padding:"2px 4px",fontWeight:"bold",fontSize:"0.5rem",borderRadius:"8px 8px 0 0"},children:(0,l.jsx)(a.default,{variant:"body2",noWrap:!0,children:t.name})}),(0,l.jsx)(i.default,{sx:{flex:1,position:"relative",aspectRatio:"2 / 3",overflow:"hidden"},children:(0,l.jsx)(n.default,{src:t.img,alt:t.name,style:{objectFit:"cover"},fill:!0})}),(0,l.jsx)(i.default,{sx:{textAlign:"center",backgroundColor:d.rarityBackgroundColor,color:d.rarityTextColor,padding:"2px 4px",fontWeight:"bold",fontSize:"0.5rem",borderRadius:"0 0 8px 8px"},children:(0,l.jsx)(a.default,{variant:"body2",children:t.rarity.toUpperCase()})})]})}},1314:(e,t,r)=>{"use strict";r.d(t,{eV:()=>o,kv:()=>a,sw:()=>n,uJ:()=>i});let l="collectedCards",o=e=>{let t=[...JSON.parse(localStorage.getItem(l)||"[]")];e.forEach(e=>{let r=t.find(t=>t.img===e.img&&t.rarity===e.rarity);r?r.count+=1:t.push({...e,count:1})}),localStorage.setItem(l,JSON.stringify(t))},i=()=>JSON.parse(localStorage.getItem(l)||"[]"),a=e=>{let t=i().filter(t=>t.id!==e);localStorage.setItem(l,JSON.stringify(t))},n=()=>{localStorage.removeItem(l)}}},e=>{var t=t=>e(e.s=t);e.O(0,[424,275,72,712,566,496,126,441,517,358],()=>t(7582)),_N_E=e.O()}]);