(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98],{4138:(e,r,o)=>{Promise.resolve().then(o.bind(o,9111))},9111:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>h});var t=o(5155),a=o(7614);let l=(0,o(2983).A)((0,t.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");var d=o(8998),x=o(894),i=o(4736),n=o(2115),f=o(7756),s=o(2158),c=o(3755),p=o(1314),u=o(8173),g=o.n(u);let h=()=>{let[e,r]=(0,n.useState)([]);(0,n.useEffect)(()=>{r((0,p.uJ)())},[]);let o=e=>{(0,p.kv)(e),r((0,p.uJ)())};return(0,t.jsxs)(d.default,{children:[(0,t.jsxs)(d.default,{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:2,children:[(0,t.jsx)(c.y,{variant:"body1",children:"所持カード"}),(0,t.jsxs)(d.default,{display:"flex",alignItems:"center",justifyContent:"center",gap:2,children:[(0,t.jsx)(g(),{href:"/tcg/open-pack",passHref:!0,children:(0,t.jsx)(f.A,{children:"カードを集める"})}),(0,t.jsx)(s.A,{onClick:()=>{(0,p.sw)(),r([])},children:(0,t.jsx)(l,{})})]})]}),(0,t.jsx)(d.default,{sx:{display:"flex",flexWrap:"wrap",gap:2,justifyContent:"center",marginTop:"16px"},children:e.map(e=>(0,t.jsxs)(d.default,{sx:{position:"relative",display:"inline-block"},children:[(0,t.jsx)(x.A,{onClick:()=>o(e.id),sx:{position:"absolute",top:"8px",right:"8px",zIndex:10,bgcolor:"#ffffff","&:hover":{bgcolor:"#f5f5f5"}},children:(0,t.jsx)(l,{fontSize:"small"})}),(0,t.jsx)(a.T,{card:e}),(0,t.jsxs)(i.default,{sx:{position:"absolute",bottom:"-8px",right:"8px",backgroundColor:"#ffffff",borderRadius:"4px",padding:"2px 4px",color:"gray",fontSize:"0.8rem",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"},children:["x",e.count]})]},e.id))})]})}},7756:(e,r,o)=>{"use strict";o.d(r,{A:()=>d});var t=o(5155),a=o(2282),l=o(4736);let d=e=>{let{children:r,...o}=e;return(0,t.jsx)(a.default,{sx:{bgcolor:"#f5f5f5",borderRadius:"16px",boxShadow:"6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff",color:"#333",padding:"10px 20px","&:hover":{bgcolor:"#eaeaea"}},...o,children:(0,t.jsx)(l.default,{variant:"body1",sx:{fontWeight:"bold",textShadow:"0 0 5px rgba(0, 0, 0, 0.2)"},children:r})})}},2158:(e,r,o)=>{"use strict";o.d(r,{A:()=>l});var t=o(5155),a=o(894);let l=e=>{let{isInset:r=!1,children:o,sx:l={},...d}=e;return(0,t.jsx)(a.A,{sx:{bgcolor:"#f5f5f5",borderRadius:"50%",boxShadow:r?"inset 6px 6px 12px #d1d1d1, inset -6px -6px 12px #ffffff":"6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff","&:hover":{bgcolor:"#eaeaea"},width:{xs:48,md:64},height:{xs:48,md:64},...l},...d,children:o})}},3755:(e,r,o)=>{"use strict";o.d(r,{y:()=>l});var t=o(5155),a=o(4736);let l=e=>{let{isInset:r=!0,bgcolor:o="#f5f5f5",boxShadow:l,sx:d={},children:x,...i}=e;return(0,t.jsx)(a.default,{...i,sx:{display:"inline-block",fontWeight:600,p:1.5,px:4,bgcolor:o,borderRadius:"16px",textShadow:"0 0 3px rgba(0, 0, 0, 0.1)",boxShadow:l||(r?"inset 3px 3px 6px #cccccc, inset -3px -3px 6px #ffffff":"3px 3px 6px #cccccc, -3px -3px 6px #ffffff"),color:"#333",...d},children:x})}},7614:(e,r,o)=>{"use strict";o.d(r,{T:()=>s});var t=o(5155),a=o(4665),l=o(8998),d=o(4736),x=o(5565);let i={backgroundColor:"#ffffff",boxShadow:"4px 4px 8px rgba(0, 0, 0, 0.1)",nameBackgroundColor:"#f0f0f0",nameTextColor:"#333",rarityBackgroundColor:"#f0f0f0",rarityTextColor:"#333"},n={"ultra-rare":{backgroundColor:"#ffeb3b",boxShadow:"0 0 10px rgba(255, 223, 0, 0.8)",nameBackgroundColor:"#ffd700",nameTextColor:"#000",rarityBackgroundColor:"#ffd700",rarityTextColor:"#000"},"super-rare":{backgroundColor:"#b0e0e6",boxShadow:"0 0 10px rgba(70, 130, 180, 0.5)",nameBackgroundColor:"#4682b4",nameTextColor:"#fff",rarityBackgroundColor:"#4682b4",rarityTextColor:"#fff"},rare:{backgroundColor:"#dcdcdc",boxShadow:"0 0 10px rgba(192, 192, 192, 0.5)",nameBackgroundColor:"#c0c0c0",nameTextColor:"#000",rarityBackgroundColor:"#c0c0c0",rarityTextColor:"#000"}},f=e=>({...i,...n[e]||{}}),s=e=>{let{card:r,onClick:o}=e,i=f(r.rarity);return(0,t.jsxs)(a.default,{onClick:o,sx:{width:{xs:"140px",md:"200px"},height:{xs:"250px",md:"380px"},borderRadius:"12px",p:1,display:"flex",flexDirection:"column",justifyContent:"space-between",background:i.backgroundColor,boxShadow:i.boxShadow,position:"relative",overflow:"hidden",transition:"transform 0.2s","&:hover":{transform:"scale(1.02)"}},children:[(0,t.jsx)(l.default,{sx:{textAlign:"center",backgroundColor:i.nameBackgroundColor,color:i.nameTextColor,padding:"2px 4px",fontWeight:"bold",fontSize:"0.5rem",borderRadius:"8px 8px 0 0"},children:(0,t.jsx)(d.default,{variant:"body2",noWrap:!0,children:r.name})}),(0,t.jsx)(l.default,{sx:{flex:1,position:"relative",aspectRatio:"2 / 3",overflow:"hidden"},children:(0,t.jsx)(x.default,{src:r.img,alt:r.name,style:{objectFit:"cover"},fill:!0})}),(0,t.jsx)(l.default,{sx:{textAlign:"center",backgroundColor:i.rarityBackgroundColor,color:i.rarityTextColor,padding:"2px 4px",fontWeight:"bold",fontSize:"0.5rem",borderRadius:"0 0 8px 8px"},children:(0,t.jsx)(d.default,{variant:"body2",children:r.rarity.toUpperCase()})})]})}},1314:(e,r,o)=>{"use strict";o.d(r,{eV:()=>a,kv:()=>d,sw:()=>x,uJ:()=>l});let t="collectedCards",a=e=>{let r=[...JSON.parse(localStorage.getItem(t)||"[]")];e.forEach(e=>{let o=r.find(r=>r.img===e.img&&r.rarity===e.rarity);o?o.count+=1:r.push({...e,count:1})}),localStorage.setItem(t,JSON.stringify(r))},l=()=>JSON.parse(localStorage.getItem(t)||"[]"),d=e=>{let r=l().filter(r=>r.id!==e);localStorage.setItem(t,JSON.stringify(r))},x=()=>{localStorage.removeItem(t)}}},e=>{var r=r=>e(e.s=r);e.O(0,[275,72,712,496,852,441,517,358],()=>r(4138)),_N_E=e.O()}]);