(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[243],{8177:(e,t,n)=>{Promise.resolve().then(n.bind(n,238))},238:(e,t,n)=>{"use strict";n.d(t,{PackSwiperContainer:()=>R});var r=n(5155),o=n(8998),i=n(2115),a=n(9713),l=n(2282),s=n(4736);let d=e=>{let{children:t,...n}=e;return(0,r.jsx)(l.A,{sx:{bgcolor:"#f5f5f5",borderRadius:"16px",boxShadow:"6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff",color:"#333",padding:"10px 20px","&:hover":{bgcolor:"#eaeaea"}},...n,children:(0,r.jsx)(s.default,{variant:"body1",sx:{fontWeight:"bold",textShadow:"0 0 5px rgba(0, 0, 0, 0.2)"},children:t})})},x=e=>{let{isInset:t=!0,bgcolor:n="#f5f5f5",boxShadow:o,sx:i={},children:a,...l}=e;return(0,r.jsx)(s.default,{...l,sx:{display:"inline-block",fontWeight:600,p:1.5,px:4,bgcolor:n,borderRadius:"16px",textShadow:"0 0 3px rgba(0, 0, 0, 0.1)",boxShadow:o||(t?"inset 3px 3px 6px #cccccc, inset -3px -3px 6px #ffffff":"3px 3px 6px #cccccc, -3px -3px 6px #ffffff"),color:"#333",...i},children:a})};var c=n(8191),f=n(3551),p=n(2479),h=n(9841),g=n(4290),u=n(3628),b=n(5565);let m=e=>{switch(e){case"ultra-rare":return{background:"linear-gradient(45deg, #ffd700 0%, #ffcc00 50%, #ffb700 100%)",boxShadow:"0 0 20px 10px rgba(255,223,0,1)",animation:"glow 2s infinite alternate",nameBackgroundColor:"linear-gradient(45deg, #ffd700 0%, #ffcc00 50%, #ffb700 100%)",nameTextColor:"black",rarityBackgroundColor:"linear-gradient(45deg, #ffd700 0%, #ffcc00 50%, #ffb700 100%)",rarityTextColor:"black",keyframes:"\n          @keyframes glow {\n            0% { box-shadow: 0 0 30px 15px rgba(255,223,0,0.8); }\n            100% { box-shadow: 0 0 40px 20px rgba(255,223,0,1); }\n          }\n        ",reflection:'\n          .reflection {\n            display: inline-block;\n            position: relative;\n            overflow: hidden;\n          }\n          .reflection:after {\n            content: "";\n            height: 100%;\n            width: 30px;\n            position: absolute;\n            top: -180px;\n            left: 0;\n            background-color: #fff;\n            opacity: 0;\n            transform: rotate(45deg);\n            animation: reflection 2s ease-in-out infinite;\n          }\n          @keyframes reflection {\n            0% { transform: scale(0) rotate(45deg); opacity: 0; }\n            80% { transform: scale(0) rotate(45deg); opacity: 0.5; }\n            81% { transform: scale(4) rotate(45deg); opacity: 1; }\n            100% { transform: scale(50) rotate(45deg); opacity: 0; }\n          }\n        '};case"super-rare":return{backgroundColor:"#b0e0e6",boxShadow:"0 0 8px 2px rgba(70,130,180,0.5)",animation:"subtlePulse 4s infinite alternate",nameBackgroundColor:"rgba(70,130,180,1)",nameTextColor:"white",rarityBackgroundColor:"rgba(70,130,180,1)",rarityTextColor:"white",keyframes:"\n          @keyframes subtlePulse {\n            0% { box-shadow: 0 0 8px 2px rgba(70,130,180,0.5); }\n            100% { box-shadow: 0 0 10px 4px rgba(70,130,180,0.7); }\n          }\n        ",reflection:'\n          .reflection {\n            display: inline-block;\n            position: relative;\n            overflow: hidden;\n          }\n          .reflection:after {\n            content: "";\n            height: 100%;\n            width: 30px;\n            position: absolute;\n            top: -180px;\n            left: 0;\n            background-color: #fff;\n            opacity: 0;\n            transform: rotate(45deg);\n            animation: reflection 2s ease-in-out infinite;\n          }\n          @keyframes reflection {\n            0% { transform: scale(0) rotate(45deg); opacity: 0; }\n            80% { transform: scale(0) rotate(45deg); opacity: 0.5; }\n            81% { transform: scale(4) rotate(45deg); opacity: 1; }\n            100% { transform: scale(50) rotate(45deg); opacity: 0; }\n          }\n        '};case"rare":return{backgroundColor:"#dcdcdc",boxShadow:"0 0 15px 5px rgba(192,192,192,0.8)",nameBackgroundColor:"rgba(192,192,192,1)",nameTextColor:"black",rarityBackgroundColor:"rgba(192,192,192,1)",rarityTextColor:"black",reflection:'\n          .reflection {\n            display: inline-block;\n            position: relative;\n            overflow: hidden;\n          }\n          .reflection:after {\n            content: "";\n            height: 100%;\n            width: 30px;\n            position: absolute;\n            top: -180px;\n            left: 0;\n            background-color: #fff;\n            opacity: 0;\n            transform: rotate(45deg);\n            animation: reflection 2s ease-in-out infinite;\n          }\n          @keyframes reflection {\n            0% { transform: scale(0) rotate(45deg); opacity: 0; }\n            80% { transform: scale(0) rotate(45deg); opacity: 0.5; }\n            81% { transform: scale(4) rotate(45deg); opacity: 1; }\n            100% { transform: scale(50) rotate(45deg); opacity: 0; }\n          }\n        '};default:return{padding:"16px",borderColor:"gray",backgroundColor:"white",boxShadow:"none",nameBackgroundColor:"rgba(240,240,240,0.9)",nameTextColor:"black",rarityBackgroundColor:"rgba(240,240,240,1)",rarityTextColor:"black"}}},w=e=>{let{card:t,onClick:n}=e,i=m(t.rarity);return(0,r.jsxs)(c.A,{onClick:n,sx:{borderRadius:4,p:2,display:"inline-block",background:i.background,boxShadow:"10px 10px 30px rgba(0, 0, 0, 0.1)",transition:"transform 0.2s","&:hover":{transform:"scale(1.05)"}},className:i.reflection?"reflection":"",children:[(0,r.jsx)("style",{children:i.keyframes}),i.reflection&&(0,r.jsx)("style",{children:i.reflection}),(0,r.jsxs)(p.A,{sx:{p:0,width:"100%","&.MuiCardContent-root":{paddingBottom:0}},children:[(0,r.jsx)(o.default,{sx:{textAlign:"left",backgroundColor:i.nameBackgroundColor,color:i.nameTextColor,padding:"4px 8px",borderRadius:"8px 8px 0 0",fontWeight:"bold",fontSize:"1rem"},children:(0,r.jsx)(s.default,{variant:"body1",children:t.name})}),(0,r.jsx)(o.default,{sx:{maxWidth:{xs:"200px",md:"200px"},maxHeight:{xs:"270px",md:"270px"},overflow:"hidden"},children:(0,r.jsx)(b.default,{src:t.img,alt:t.name,width:250,height:300,style:{display:"block",margin:"0 auto",width:"100%"},objectFit:"cover"})}),(0,r.jsx)(o.default,{sx:{textAlign:"center",backgroundColor:i.rarityBackgroundColor,color:i.rarityTextColor,padding:"4px 8px",borderRadius:"0 0 8px 8px",fontWeight:"bold"},children:(0,r.jsx)(s.default,{variant:"body2",children:t.rarity.toUpperCase()})})]})]})},y=e=>{let{cards:t,onClose:n}=e,[a,l]=(0,i.useState)(!1);return(0,r.jsx)(o.default,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",p:{xs:2,md:4},width:"100%"},children:(0,r.jsxs)(c.A,{sx:{width:"100%",bgcolor:"#f5f5f5",borderRadius:"12px",boxShadow:"4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff",margin:"16px 0",overflow:"hidden"},children:[(0,r.jsx)(f.A,{title:(0,r.jsx)(o.default,{sx:{textAlign:"center"},children:(0,r.jsx)(x,{isInset:!0,children:"カードをめくろう!"})})}),(0,r.jsx)(p.A,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsx)(u.RC,{slidesPerView:1,modules:[g.ZD,g.Vx],effect:"cards",grabCursor:!0,navigation:{nextEl:".swiper-button-next"},pagination:{clickable:!0},oneWayMovement:!0,speed:500,nested:!0,onReachEnd:()=>{l(!0)},allowSlideNext:!a,style:{width:"100%",overflow:"visible"},cardsEffect:{perSlideOffset:1,rotate:!1,perSlideRotate:0,slideShadows:!1},children:t.map(e=>(0,r.jsx)(u.qr,{style:{display:"flex",justifyContent:"center",alignItems:"center",overflow:"visible"},children:(0,r.jsx)(w,{card:e,onClick:()=>console.log(e)})},e.id))})}),(0,r.jsx)(h.A,{sx:{justifyContent:"center",minHeight:"64px",marginBottom:"8px"},children:a?(0,r.jsx)(d,{onClick:()=>{n(),l(!1)},children:"終了"},"end"):(0,r.jsx)(d,{"aria-label":"めくる",className:"swiper-button-next",children:"めくる"},"next")})]})})},j=e=>{let{cards:t,onComplete:n}=e,[l,s]=(0,i.useState)(!0);return(0,r.jsx)(o.default,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"},children:(0,r.jsx)(a.A,{open:l,slotProps:{backdrop:{style:{backgroundColor:"transparent",backdropFilter:"blur(10px)"}}},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description","aria-modal":"true",role:"dialog",children:(0,r.jsx)(o.default,{sx:{maxWidth:"600px",margin:"auto",outline:"none",position:"relative"},children:(0,r.jsx)(y,{cards:t,onClose:()=>{s(!1),n&&n()}})})})})};var k=n(6854);n(2252);let C=e=>{let{content:t,onSlideChange:n}=e,[a,l]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=setTimeout(()=>{l(!0)},100);return()=>clearTimeout(e)},[]),(0,r.jsxs)(o.default,{sx:{width:"100%",overflow:"hidden",position:"relative"},children:[!a&&(0,r.jsx)(o.default,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,r.jsx)(k.A,{})}),a&&(0,r.jsx)(u.RC,{effect:"coverflow",grabCursor:!0,loop:!0,centeredSlides:!0,slidesPerView:1.5,breakpoints:{640:{slidesPerView:2},1024:{slidesPerView:3}},modules:[g.t9],coverflowEffect:{depth:100,rotate:-10,stretch:0,modifier:1,scale:1,slideShadows:!1},"aria-label":"Swiper container",role:"region",onSlideChange:n,children:t.map((e,t)=>(0,r.jsx)(u.qr,{children:(0,r.jsx)(o.default,{sx:{py:4,px:2},children:e})},t))})]})};n(6555);let v=e=>{let{url:t,alt:n,showText:i}=e;return(0,r.jsxs)(o.default,{sx:{position:"relative",width:{xs:"150px",md:"200px"},height:{xs:"280px",md:"380px"},display:"flex",flexDirection:"column",alignItems:"center",margin:"0 auto"},children:[(0,r.jsx)(c.A,{sx:{width:"100%",height:{xs:"220px",md:"300px"},overflow:"hidden",zIndex:2,borderRadius:"12px"},children:(0,r.jsxs)(p.A,{sx:{p:0,width:"100%",height:"100%",position:"relative"},children:[(0,r.jsx)(b.default,{src:t,alt:n,sizes:"(max-width: 600px) 150px, 200px",style:{objectFit:"fill"},fill:!0}),i&&(0,r.jsx)(o.default,{sx:{position:"absolute",bottom:"40px",width:"100%",textAlign:"center",color:"white",fontSize:{xs:"14px",md:"18px"},fontWeight:"bold",textShadow:"0 0 5px rgba(0, 0, 0, 0.5)"},children:"Card Game"})]})}),(0,r.jsx)(o.default,{sx:{position:"absolute",top:{xs:"240px",md:"320px"},width:{xs:"150px",md:"200px"},height:{xs:"40px",md:"60px"},overflow:"hidden",transform:"scaleY(-1)",opacity:.3,clipPath:"inset(0px 0px 0px 0px round 0px 0px 12px 12px)"},children:(0,r.jsx)(b.default,{src:t,alt:"".concat(n," Reflection"),sizes:"(max-width: 600px) 150px, 200px",style:{objectFit:"cover"},fill:!0})})]})},S=e=>{let{packImg:t}=e;return(0,r.jsx)(o.default,{sx:{width:{xs:"150px",md:"200px"},height:{xs:"280px",md:"380px"},margin:"0 auto"},children:(0,r.jsx)(u.RC,{effect:"flip",grabCursor:!0,modules:[g.n],flipEffect:{slideShadows:!1},style:{width:"100%",height:"100%",overflow:"hidden"},loop:!0,children:[t.front,t.back].map((e,t)=>(0,r.jsx)(u.qr,{children:(0,r.jsx)(v,{url:e.url,alt:e.alt,showText:0===t})},t))})})},A=e=>{let{packs:t,onSlideChange:n,onOpenPack:i}=e;return(0,r.jsx)(o.default,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",gap:2,padding:2},children:(0,r.jsxs)(c.A,{sx:{width:"100%",bgcolor:"#f5f5f5",borderRadius:"12px",boxShadow:"4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff",margin:"16px 0",overflow:"hidden"},children:[(0,r.jsx)(f.A,{title:(0,r.jsx)(o.default,{sx:{textAlign:"center"},children:(0,r.jsx)(x,{isInset:!0,variant:"h6",sx:{textAlign:"center"},children:"パックを選ぼう!"})})}),(0,r.jsxs)(p.A,{sx:{padding:"16px"},children:[" ",(0,r.jsx)(C,{content:t.map(e=>(0,r.jsx)(S,{packImg:e.img},e.id)),onSlideChange:e=>n(t[e.realIndex])})]}),(0,r.jsx)(h.A,{sx:{justifyContent:"center",padding:"16px"},children:(0,r.jsx)(d,{onClick:i,children:"開封"})})]})})},R=e=>{let{packs:t,fallback:n}=e,[a,l]=(0,i.useState)(null),[s,d]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{t&&t.length>0&&l(t[0])},[t]),t)?(0,r.jsx)(o.default,{children:s?a&&(0,r.jsx)(j,{cards:a.cards,onComplete:()=>{d(!1)}}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(A,{packs:t,onSlideChange:e=>{l(e)},onOpenPack:()=>{a&&d(!0)}})})}):(0,r.jsx)(r.Fragment,{children:n})}}},e=>{var t=t=>e(e.s=t);e.O(0,[424,509,890,799,441,517,358],()=>t(8177)),_N_E=e.O()}]);