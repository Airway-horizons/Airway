import{r as p,j as n,S as f,a0 as j,n as o,I as w,l as b}from"./index-DKBZeLg-.js";const m=p.forwardRef(({colors:l,selected:s,onSelectColor:e,limit:r="auto",sx:x,...u},c)=>{const a=typeof s=="string",h=p.useCallback(t=>{if(a)t!==s&&e(t);else{const d=s.includes(t)?s.filter(i=>i!==t):[...s,t];e(d)}},[e,s,a]);return n.jsx(f,{ref:c,direction:"row",display:"inline-flex",sx:{flexWrap:"wrap",...r!=="auto"&&{width:r*36,justifyContent:"flex-end"},...x},...u,children:l.map(t=>{const d=a?s===t:s.includes(t);return n.jsx(j,{sx:{width:36,height:36,borderRadius:"50%"},onClick:()=>{h(t)},children:n.jsx(f,{alignItems:"center",justifyContent:"center",sx:{width:20,height:20,bgcolor:t,borderRadius:"50%",border:i=>`solid 1px ${o(i.palette.grey[500],.16)}`,...d&&{transform:"scale(1.3)",boxShadow:`4px 4px 8px 0 ${o(t,.48)}`,outline:`solid 2px ${o(t,.08)}`,transition:i=>i.transitions.create("all",{duration:i.transitions.duration.shortest})}},children:n.jsx(w,{width:d?12:0,icon:"eva:checkmark-fill",sx:{color:i=>i.palette.getContrastText(t),transition:i=>i.transitions.create("all",{duration:i.transitions.duration.shortest})}})})},t)})})}),y=p.forwardRef(({quantity:l,onIncrease:s,onDecrease:e,disabledIncrease:r,disabledDecrease:x,sx:u,...c},a)=>n.jsxs(f,{ref:a,flexShrink:0,direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:.5,width:88,borderRadius:1,typography:"subtitle2",border:h=>`solid 1px ${o(h.palette.grey[500],.2)}`,...u},...c,children:[n.jsx(b,{size:"small",onClick:e,disabled:x,sx:{borderRadius:.75},children:n.jsx(w,{icon:"eva:minus-fill",width:16})}),l,n.jsx(b,{size:"small",onClick:s,disabled:r,sx:{borderRadius:.75},children:n.jsx(w,{icon:"mingcute:add-line",width:16})})]}));export{m as C,y as I};
