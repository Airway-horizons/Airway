import{j as t,I as g,B as y,e as P,al as v,r as p,t as b,T as j,as as C,C as I,S as w,p as k,V as B}from"./index-DKBZeLg-.js";import{m as O,p as A}from"./index-DlY-7PTR.js";import"./_calendar-RtfEBB_7.js";import"./styles-Wua6TvqP.js";import"./label-DTvD9VeL.js";import"./styles-CUtbidbL.js";import"./image-BKPlAVtm.js";import"./text-max-line-BAWKjR9c.js";import"./index.esm-D_6cu47B.js";import"./upgrade-storage-illustration-klQDfmP8.js";import"./styles-D9akLodd.js";import{S as T,o as f}from"./search-not-found-DMf_kNQ3.js";import{u as L}from"./use-debounce-Cq4edN8p.js";import{u as W,a as F,P as R}from"./post-list-Vt-YL5cH.js";import{C as E}from"./custom-popover-PgAtfkGb.js";import{u as H}from"./use-popover-CkTT2lUg.js";import{B as M}from"./Button-CSJeYsbN.js";import{M as Q}from"./MenuItem-Aa_ftBWI.js";import{A as U}from"./Autocomplete-BJ2dHOFu.js";import{T as V}from"./TextField-BXXhQzmn.js";import{I as K}from"./InputAdornment-Cf2HNYxq.js";import{A as N}from"./Avatar-BV7IL0BM.js";import"./_baseIteratee-CxT-hlxp.js";import"./format-time-CHe147-R.js";import"./format-number-BbyDXVVU.js";import"./Card-CqYz1Nik.js";import"./CardContent-DxtaCoJB.js";import"./Close-CeQksNjq.js";import"./createSvgIcon-CJVRdbpi.js";import"./Chip-BA8lMi6D.js";import"./useFormControl-jotemotE.js";import"./formControlState-Dq1zat_P.js";import"./useSlot-CYZNaYOG.js";const _=[{value:"latest",label:"Latest"},{value:"popular",label:"Popular"},{value:"oldest",label:"Oldest"}];function z({sort:o,sortOptions:r,onSort:l}){const n=H();return t.jsxs(t.Fragment,{children:[t.jsxs(M,{disableRipple:!0,color:"inherit",onClick:n.onOpen,endIcon:t.jsx(g,{icon:n.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"}),sx:{fontWeight:"fontWeightSemiBold",textTransform:"capitalize"},children:["Sort By:",t.jsx(y,{component:"span",sx:{ml:.5,fontWeight:"fontWeightBold"},children:o})]}),t.jsx(E,{open:n.open,onClose:n.onClose,sx:{width:140},children:r.map(i=>t.jsx(Q,{selected:o===i.value,onClick:()=>{n.onClose(),l(i.value)},children:i.label},i.value))})]})}function G({query:o,results:r,onSearch:l,hrefItem:n,loading:i}){const m=P(),c=e=>{m.push(n(e))},u=e=>{o&&e.key==="Enter"&&c(o)};return t.jsx(U,{sx:{width:{xs:1,sm:260}},loading:i,autoHighlight:!0,popupIcon:null,options:r,onInputChange:(e,s)=>l(s),getOptionLabel:e=>e.title,noOptionsText:t.jsx(T,{query:o,sx:{bgcolor:"unset"}}),isOptionEqualToValue:(e,s)=>e.id===s.id,slotProps:{popper:{placement:"bottom-start",sx:{minWidth:320}},paper:{sx:{[` .${v.option}`]:{pl:.75}}}},renderInput:e=>t.jsx(V,{...e,placeholder:"Search...",onKeyUp:u,InputProps:{...e.InputProps,startAdornment:t.jsx(K,{position:"start",children:t.jsx(g,{icon:"eva:search-fill",sx:{ml:1,color:"text.disabled"}})}),endAdornment:t.jsxs(t.Fragment,{children:[i?t.jsx(g,{icon:"svg-spinners:8-dots-rotate",sx:{mr:-3}}):null,e.InputProps.endAdornment]})}}),renderOption:(e,s,{inputValue:d})=>{const h=O(s.title,d),x=A(s.title,h);return p.createElement("li",{...e,key:s.id},t.jsx(N,{alt:s.title,src:s.coverUrl,variant:"rounded",sx:{width:48,height:48,flexShrink:0,mr:1.5,borderRadius:1}},s.id),t.jsx(b,{underline:"none",onClick:()=>c(s.title),children:x.map((a,S)=>t.jsx(j,{component:"span",color:a.highlight?"primary":"textPrimary",sx:{typography:"body2",fontWeight:a.highlight?"fontWeightSemiBold":"fontWeightMedium"},children:a.text},S))},d))}})}function $(){const o=C(),[r,l]=p.useState("latest"),[n,i]=p.useState(""),m=L(n),{posts:c,postsLoading:u}=W(),{searchResults:e,searchLoading:s}=F(m),d=q({inputData:c,sortBy:r}),h=p.useCallback(a=>{l(a)},[]),x=p.useCallback(a=>{i(a)},[]);return t.jsxs(I,{maxWidth:o.themeStretch?!1:"lg",children:[t.jsx(j,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Blog"}),t.jsxs(w,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},sx:{mb:{xs:3,md:5}},children:[t.jsx(G,{query:m,results:e,onSearch:x,loading:s,hrefItem:a=>k.post.details(a)}),t.jsx(z,{sort:r,onSort:h,sortOptions:_})]}),t.jsx(R,{posts:d,loading:u})]})}const q=({inputData:o,sortBy:r})=>r==="latest"?f(o,["createdAt"],["desc"]):r==="oldest"?f(o,["createdAt"],["asc"]):r==="popular"?f(o,["totalViews"],["desc"]):o;function Bt(){return t.jsxs(t.Fragment,{children:[t.jsx(B,{children:t.jsx("title",{children:" Post: List"})}),t.jsx($,{})]})}export{Bt as default};
