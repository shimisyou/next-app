(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98],{4138:(e,r,t)=>{Promise.resolve().then(t.bind(t,9111))},9111:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>b});var o=t(5155),n=t(7614);let a=(0,t(2983).A)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");var i=t(8998),l=t(894),d=t(4736),s=t(2115),c=t(7756),f=t(2158),x=t(3755),p=t(1314),g=t(8173),u=t.n(g);let b=()=>{let[e,r]=(0,s.useState)([]);(0,s.useEffect)(()=>{r((0,p.uJ)())},[]);let t=e=>{(0,p.kv)(e),r((0,p.uJ)())};return(0,o.jsxs)(i.default,{children:[(0,o.jsxs)(i.default,{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:2,children:[(0,o.jsx)(x.y,{variant:"body1",children:"所持カード"}),(0,o.jsxs)(i.default,{display:"flex",alignItems:"center",justifyContent:"center",gap:2,children:[(0,o.jsx)(u(),{href:"/tcg/open-pack",passHref:!0,children:(0,o.jsx)(c.A,{children:"カードを集める"})}),(0,o.jsx)(f.A,{onClick:()=>{(0,p.sw)(),r([])},children:(0,o.jsx)(a,{})})]})]}),(0,o.jsx)(i.default,{sx:{display:"flex",flexWrap:"wrap",gap:3,justifyContent:"center",marginTop:"16px"},children:e.map(e=>(0,o.jsxs)(i.default,{sx:{position:"relative",display:"inline-block"},children:[(0,o.jsx)(l.A,{onClick:()=>t(e.id),sx:{position:"absolute",top:"8px",right:"8px",zIndex:10,bgcolor:"#ffffff","&:hover":{bgcolor:"#f5f5f5"}},children:(0,o.jsx)(a,{fontSize:"small"})}),(0,o.jsx)(n.T,{card:e}),(0,o.jsxs)(d.default,{sx:{position:"absolute",bottom:"-8px",right:"8px",backgroundColor:"#ffffff",borderRadius:"4px",padding:"2px 4px",color:"gray",fontSize:"0.8rem",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"},children:["x",e.count]})]},e.id))})]})}},7756:(e,r,t)=>{"use strict";t.d(r,{A:()=>i});var o=t(5155),n=t(2282),a=t(4736);let i=e=>{let{children:r,...t}=e;return(0,o.jsx)(n.default,{sx:{bgcolor:"#f5f5f5",borderRadius:"16px",boxShadow:"6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff",color:"#333",padding:"10px 20px","&:hover":{bgcolor:"#eaeaea"}},...t,children:(0,o.jsx)(a.default,{variant:"body1",sx:{fontWeight:"bold",textShadow:"0 0 5px rgba(0, 0, 0, 0.2)"},children:r})})}},2158:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});var o=t(5155),n=t(894);let a=e=>{let{isInset:r=!1,children:t,sx:a={},...i}=e;return(0,o.jsx)(n.A,{sx:{bgcolor:"#f5f5f5",borderRadius:"50%",boxShadow:r?"inset 6px 6px 12px #d1d1d1, inset -6px -6px 12px #ffffff":"6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff","&:hover":{bgcolor:"#eaeaea"},width:{xs:48,md:64},height:{xs:48,md:64},...a},...i,children:t})}},3755:(e,r,t)=>{"use strict";t.d(r,{y:()=>a});var o=t(5155),n=t(4736);let a=e=>{let{isInset:r=!0,bgcolor:t="#f5f5f5",boxShadow:a,sx:i={},children:l,...d}=e;return(0,o.jsx)(n.default,{...d,sx:{display:"inline-block",fontWeight:600,p:1.5,px:4,bgcolor:t,borderRadius:"16px",textShadow:"0 0 3px rgba(0, 0, 0, 0.1)",boxShadow:a||(r?"inset 3px 3px 6px #cccccc, inset -3px -3px 6px #ffffff":"3px 3px 6px #cccccc, -3px -3px 6px #ffffff"),color:"#333",...i},children:l})}},7614:(e,r,t)=>{"use strict";t.d(r,{T:()=>c});var o=t(5155),n=t(4665),a=t(2479),i=t(8998),l=t(4736),d=t(5565);let s=e=>{switch(e){case"ultra-rare":return{background:"linear-gradient(45deg, #ffd700 0%, #ffcc00 50%, #ffb700 100%)",boxShadow:"0 0 20px 10px rgba(255,223,0,1)",animation:"glow 2s infinite alternate",nameBackgroundColor:"linear-gradient(45deg, #ffd700 0%, #ffcc00 50%, #ffb700 100%)",nameTextColor:"black",rarityBackgroundColor:"linear-gradient(45deg, #ffd700 0%, #ffcc00 50%, #ffb700 100%)",rarityTextColor:"black",keyframes:"\n          @keyframes glow {\n            0% { box-shadow: 0 0 30px 15px rgba(255,223,0,0.8); }\n            100% { box-shadow: 0 0 40px 20px rgba(255,223,0,1); }\n          }\n        ",reflection:'\n          .reflection {\n            display: inline-block;\n            position: relative;\n            overflow: hidden;\n          }\n          .reflection:after {\n            content: "";\n            height: 100%;\n            width: 30px;\n            position: absolute;\n            top: -180px;\n            left: 0;\n            background-color: #fff;\n            opacity: 0;\n            transform: rotate(45deg);\n            animation: reflection 2s ease-in-out infinite;\n          }\n          @keyframes reflection {\n            0% { transform: scale(0) rotate(45deg); opacity: 0; }\n            80% { transform: scale(0) rotate(45deg); opacity: 0.5; }\n            81% { transform: scale(4) rotate(45deg); opacity: 1; }\n            100% { transform: scale(50) rotate(45deg); opacity: 0; }\n          }\n        '};case"super-rare":return{backgroundColor:"#b0e0e6",boxShadow:"0 0 8px 2px rgba(70,130,180,0.5)",animation:"subtlePulse 4s infinite alternate",nameBackgroundColor:"rgba(70,130,180,1)",nameTextColor:"white",rarityBackgroundColor:"rgba(70,130,180,1)",rarityTextColor:"white",keyframes:"\n          @keyframes subtlePulse {\n            0% { box-shadow: 0 0 8px 2px rgba(70,130,180,0.5); }\n            100% { box-shadow: 0 0 10px 4px rgba(70,130,180,0.7); }\n          }\n        ",reflection:'\n          .reflection {\n            display: inline-block;\n            position: relative;\n            overflow: hidden;\n          }\n          .reflection:after {\n            content: "";\n            height: 100%;\n            width: 30px;\n            position: absolute;\n            top: -180px;\n            left: 0;\n            background-color: #fff;\n            opacity: 0;\n            transform: rotate(45deg);\n            animation: reflection 2s ease-in-out infinite;\n          }\n          @keyframes reflection {\n            0% { transform: scale(0) rotate(45deg); opacity: 0; }\n            80% { transform: scale(0) rotate(45deg); opacity: 0.5; }\n            81% { transform: scale(4) rotate(45deg); opacity: 1; }\n            100% { transform: scale(50) rotate(45deg); opacity: 0; }\n          }\n        '};case"rare":return{backgroundColor:"#dcdcdc",boxShadow:"0 0 15px 5px rgba(192,192,192,0.8)",nameBackgroundColor:"rgba(192,192,192,1)",nameTextColor:"black",rarityBackgroundColor:"rgba(192,192,192,1)",rarityTextColor:"black",reflection:'\n          .reflection {\n            display: inline-block;\n            position: relative;\n            overflow: hidden;\n          }\n          .reflection:after {\n            content: "";\n            height: 100%;\n            width: 30px;\n            position: absolute;\n            top: -180px;\n            left: 0;\n            background-color: #fff;\n            opacity: 0;\n            transform: rotate(45deg);\n            animation: reflection 2s ease-in-out infinite;\n          }\n          @keyframes reflection {\n            0% { transform: scale(0) rotate(45deg); opacity: 0; }\n            80% { transform: scale(0) rotate(45deg); opacity: 0.5; }\n            81% { transform: scale(4) rotate(45deg); opacity: 1; }\n            100% { transform: scale(50) rotate(45deg); opacity: 0; }\n          }\n        '};default:return{padding:"16px",borderColor:"gray",backgroundColor:"white",boxShadow:"none",nameBackgroundColor:"rgba(240,240,240,0.9)",nameTextColor:"black",rarityBackgroundColor:"rgba(240,240,240,1)",rarityTextColor:"black"}}},c=e=>{let{card:r,onClick:t}=e,c=s(r.rarity);return(0,o.jsxs)(n.default,{onClick:t,sx:{borderRadius:4,p:2,display:"inline-block",background:c.background,boxShadow:"10px 10px 30px rgba(0, 0, 0, 0.1)",transition:"transform 0.2s","&:hover":{transform:"scale(1.05)"}},className:c.reflection?"reflection":"",children:[(0,o.jsx)("style",{children:c.keyframes}),c.reflection&&(0,o.jsx)("style",{children:c.reflection}),(0,o.jsxs)(a.default,{sx:{p:0,width:"100%","&.MuiCardContent-root":{paddingBottom:0}},children:[(0,o.jsx)(i.default,{sx:{textAlign:"left",backgroundColor:c.nameBackgroundColor,color:c.nameTextColor,padding:"4px 8px",borderRadius:"8px 8px 0 0",fontWeight:"bold",fontSize:"1rem"},children:(0,o.jsx)(l.default,{variant:"body1",children:r.name})}),(0,o.jsx)(i.default,{sx:{maxWidth:{xs:"200px",md:"200px"},maxHeight:{xs:"270px",md:"270px"},overflow:"hidden"},children:(0,o.jsx)(d.default,{src:r.img,alt:r.name,width:250,height:300,style:{display:"block",margin:"0 auto",width:"100%"},objectFit:"cover"})}),(0,o.jsx)(i.default,{sx:{textAlign:"center",backgroundColor:c.rarityBackgroundColor,color:c.rarityTextColor,padding:"4px 8px",borderRadius:"0 0 8px 8px",fontWeight:"bold"},children:(0,o.jsx)(l.default,{variant:"body2",children:r.rarity.toUpperCase()})})]})]})}},1314:(e,r,t)=>{"use strict";t.d(r,{eV:()=>n,kv:()=>i,sw:()=>l,uJ:()=>a});let o="collectedCards",n=e=>{let r=[...JSON.parse(localStorage.getItem(o)||"[]")];e.forEach(e=>{let t=r.find(r=>r.img===e.img&&r.rarity===e.rarity);t?t.count+=1:r.push({...e,count:1})}),localStorage.setItem(o,JSON.stringify(r))},a=()=>JSON.parse(localStorage.getItem(o)||"[]"),i=e=>{let r=a().filter(r=>r.id!==e);localStorage.setItem(o,JSON.stringify(r))},l=()=>{localStorage.removeItem(o)}}},e=>{var r=r=>e(e.s=r);e.O(0,[275,72,712,174,852,441,517,358],()=>r(4138)),_N_E=e.O()}]);