"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[655],{6036:(e,r,t)=>{t.r(r),t.d(r,{default:()=>z});var n=t(2115),i=t(3463),o=t(4581),a=t(7157),s=t(7123),l=t(4577),c=t(5523),u=t(2879),p=t(2611),f=t(5212);let d=(e,r)=>e.filter(e=>r.includes(e)),m=(e,r,t)=>{let n=e.keys[0];Array.isArray(r)?r.forEach((r,n)=>{t((r,t)=>{n<=e.keys.length-1&&(0===n?Object.assign(r,t):r[e.up(e.keys[n])]=t)},r)}):r&&"object"==typeof r?(Object.keys(r).length>e.keys.length?e.keys:d(e.keys,Object.keys(r))).forEach(i=>{if(e.keys.includes(i)){let o=r[i];void 0!==o&&t((r,t)=>{n===i?Object.assign(r,t):r[e.up(i)]=t},o)}}):("number"==typeof r||"string"==typeof r)&&t((e,r)=>{Object.assign(e,r)},r)};function b(e){return`--Grid-${e}Spacing`}function g(e){return`--Grid-parent-${e}Spacing`}let y="--Grid-columns",v="--Grid-parent-columns",k=({theme:e,ownerState:r})=>{let t={};return m(e.breakpoints,r.size,(e,r)=>{let n={};"grow"===r&&(n={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===r&&(n={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof r&&(n={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${r} / var(${v}) - (var(${v}) - ${r}) * (var(${g("column")}) / var(${v})))`}),e(t,n)}),t},w=({theme:e,ownerState:r})=>{let t={};return m(e.breakpoints,r.offset,(e,r)=>{let n={};"auto"===r&&(n={marginLeft:"auto"}),"number"==typeof r&&(n={marginLeft:0===r?"0px":`calc(100% * ${r} / var(${v}) + var(${g("column")}) * ${r} / var(${v}))`}),e(t,n)}),t},$=({theme:e,ownerState:r})=>{if(!r.container)return{};let t={[y]:12};return m(e.breakpoints,r.columns,(e,r)=>{let n=r??12;e(t,{[y]:n,"> *":{[v]:n}})}),t},h=({theme:e,ownerState:r})=>{if(!r.container)return{};let t={};return m(e.breakpoints,r.rowSpacing,(r,n)=>{let i="string"==typeof n?n:e.spacing?.(n);r(t,{[b("row")]:i,"> *":{[g("row")]:i}})}),t},x=({theme:e,ownerState:r})=>{if(!r.container)return{};let t={};return m(e.breakpoints,r.columnSpacing,(r,n)=>{let i="string"==typeof n?n:e.spacing?.(n);r(t,{[b("column")]:i,"> *":{[g("column")]:i}})}),t},A=({theme:e,ownerState:r})=>{if(!r.container)return{};let t={};return m(e.breakpoints,r.direction,(e,r)=>{e(t,{flexDirection:r})}),t},S=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},gap:`var(${b("row")}) var(${b("column")})`}}),G=e=>{let r=[];return Object.entries(e).forEach(([e,t])=>{!1!==t&&void 0!==t&&r.push(`grid-${e}-${String(t)}`)}),r},j=(e,r="xs")=>{function t(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(t(e))return[`spacing-${r}-${String(e)}`];if("object"==typeof e&&!Array.isArray(e)){let r=[];return Object.entries(e).forEach(([e,n])=>{t(n)&&r.push(`spacing-${e}-${String(n)}`)}),r}return[]},E=e=>void 0===e?[]:"object"==typeof e?Object.entries(e).map(([e,r])=>`direction-${e}-${r}`):[`direction-xs-${String(e)}`];var N=t(5155);let O=(0,f.A)(),_=(0,l.A)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>r.root});function M(e){return(0,c.A)({props:e,name:"MuiGrid",defaultTheme:O})}var R=t(9142),W=t(314),C=t(5761);let z=function(e={}){let{createStyledComponent:r=_,useThemeProps:t=M,useTheme:l=u.A,componentName:c="MuiGrid"}=e,f=(e,r)=>{let{container:t,direction:n,spacing:i,wrap:o,size:l}=e,u={root:["root",t&&"container","wrap"!==o&&`wrap-xs-${String(o)}`,...E(n),...G(l),...t?j(i,r.breakpoints.keys[0]):[]]};return(0,s.A)(u,e=>(0,a.Ay)(c,e),{})};function d(e,r,t=()=>!0){let n={};return null===e||(Array.isArray(e)?e.forEach((e,i)=>{null!==e&&t(e)&&r.keys[i]&&(n[r.keys[i]]=e)}):"object"==typeof e?Object.keys(e).forEach(r=>{let i=e[r];null!=i&&t(i)&&(n[r]=i)}):n[r.keys[0]]=e),n}let m=r($,x,h,k,A,S,w),b=n.forwardRef(function(e,r){let a=l(),s=t(e),c=(0,p.A)(s),{className:u,children:b,columns:g=12,container:y=!1,component:v="div",direction:k="row",wrap:w="wrap",size:$={},offset:h={},spacing:x=0,rowSpacing:A=x,columnSpacing:S=x,unstable_level:G=0,...j}=c,E=d($,a.breakpoints,e=>!1!==e),O=d(h,a.breakpoints),_=e.columns??(G?void 0:g),M=e.spacing??(G?void 0:x),R=e.rowSpacing??e.spacing??(G?void 0:A),W=e.columnSpacing??e.spacing??(G?void 0:S),C={...c,level:G,columns:_,container:y,direction:k,wrap:w,spacing:M,rowSpacing:R,columnSpacing:W,size:E,offset:O},z=f(C,a);return(0,N.jsx)(m,{ref:r,as:v,ownerState:C,className:(0,i.A)(z.root,u),...j,children:n.Children.map(b,e=>n.isValidElement(e)&&(0,o.A)(e,["Grid"])&&y&&e.props.container?n.cloneElement(e,{unstable_level:e.props?.unstable_level??G+1}):e)})});return b.muiName="Grid",b}({createStyledComponent:(0,R.Ay)("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,t.container&&r.container]}}),componentName:"MuiGrid2",useThemeProps:e=>(0,W.b)({props:e,name:"MuiGrid2"}),useTheme:C.A})}}]);