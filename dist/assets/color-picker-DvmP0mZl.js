import{r as d,j as a,S as u,bj as j,t as o,e as w}from"./index-DQumLT9L.js";const g=d.forwardRef(({colors:p,selected:n,onSelectColor:r,limit:x="auto",sx:h,...l},f)=>{const e=typeof n=="string",c=d.useCallback(t=>{if(e)t!==n&&r(t);else{const s=n.includes(t)?n.filter(i=>i!==t):[...n,t];r(s)}},[r,n,e]);return a.jsx(u,{ref:f,direction:"row",display:"inline-flex",sx:{flexWrap:"wrap",...x!=="auto"&&{width:x*36,justifyContent:"flex-end"},...h},...l,children:p.map(t=>{const s=e?n===t:n.includes(t);return a.jsx(j,{sx:{width:36,height:36,borderRadius:"50%"},onClick:()=>{c(t)},children:a.jsx(u,{alignItems:"center",justifyContent:"center",sx:{width:20,height:20,bgcolor:t,borderRadius:"50%",border:i=>`solid 1px ${o(i.palette.grey[500],.16)}`,...s&&{transform:"scale(1.3)",boxShadow:`4px 4px 8px 0 ${o(t,.48)}`,outline:`solid 2px ${o(t,.08)}`,transition:i=>i.transitions.create("all",{duration:i.transitions.duration.shortest})}},children:a.jsx(w,{width:s?12:0,icon:"eva:checkmark-fill",sx:{color:i=>i.palette.getContrastText(t),transition:i=>i.transitions.create("all",{duration:i.transitions.duration.shortest})}})})},t)})})}),k=g;export{k as C};
