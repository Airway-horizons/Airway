import{j as s,s as m,$ as N,y as i,ag as I,_ as P,v as T,w as U,T as M,r as x,x as F,ah as H,E as L,F as O,B as d,t as E,V,S as W}from"./index-BhdCYkZV.js";import{c as q}from"./createSvgIcon-BFEWvRmZ.js";const D=q(s.jsx("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),G=["slots","slotProps"],J=m(N)(({theme:e})=>i({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":i({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":i({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:I(e.palette.grey[200],.12)}:{backgroundColor:I(e.palette.grey[600],.12)})})),K=m(D)({width:24,height:16});function Q(e){const{slots:r={},slotProps:a={}}=e,o=P(e,G),t=e;return s.jsx("li",{children:s.jsx(J,i({focusRipple:!0},o,{ownerState:t,children:s.jsx(K,i({as:r.CollapsedIcon,ownerState:t},a.collapsedIcon))}))})}function X(e){return U("MuiBreadcrumbs",e)}const Y=T("MuiBreadcrumbs",["root","ol","li","separator"]),Z=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],k=e=>{const{classes:r}=e;return O({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},X,r)},ee=m(M,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${Y.li}`]:r.li},r.root]})({}),se=m("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),re=m("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function oe(e,r,a,o){return e.reduce((t,p,c)=>(c<e.length-1?t=t.concat(p,s.jsx(re,{"aria-hidden":!0,className:r,ownerState:o,children:a},`separator-${c}`)):t.push(p),t),[])}const te=x.forwardRef(function(r,a){const o=F({props:r,name:"MuiBreadcrumbs"}),{children:t,className:p,component:c="nav",slots:g={},slotProps:n={},expandText:B="Show path",itemsAfterCollapse:f=1,itemsBeforeCollapse:b=1,maxItems:y=8,separator:S="/"}=o,_=P(o,Z),[v,$]=x.useState(!1),u=i({},o,{component:c,expanded:v,expandText:B,itemsAfterCollapse:f,itemsBeforeCollapse:b,maxItems:y,separator:S}),h=k(u),z=H({elementType:g.CollapsedIcon,externalSlotProps:n.collapsedIcon,ownerState:u}),R=x.useRef(null),A=l=>{const j=()=>{$(!0);const w=R.current.querySelector("a[href],button,[tabindex]");w&&w.focus()};return b+f>=l.length?l:[...l.slice(0,b),s.jsx(Q,{"aria-label":B,slots:{CollapsedIcon:g.CollapsedIcon},slotProps:{collapsedIcon:z},onClick:j},"ellipsis"),...l.slice(l.length-f,l.length)]},C=x.Children.toArray(t).filter(l=>x.isValidElement(l)).map((l,j)=>s.jsx("li",{className:h.li,children:l},`child-${j}`));return s.jsx(ee,i({ref:a,component:c,color:"text.secondary",className:L(h.root,p),ownerState:u},_,{children:s.jsx(se,{className:h.ol,ref:R,ownerState:u,children:oe(v||y&&C.length<=y?C:A(C),h.separator,S,u)})}))});function ae({link:e,activeLast:r,disabled:a}){const o={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...a&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},t=s.jsxs(s.Fragment,{children:[e.icon&&s.jsx(d,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:e.icon}),e.name]});return e.href?s.jsx(E,{component:V,href:e.href,sx:o,children:t}):s.jsxs(d,{sx:o,children:[" ",t," "]})}function de({links:e,action:r,heading:a,moreLink:o,activeLast:t,sx:p,...c}){const g=e&&e[(e==null?void 0:e.length)-1].name;return s.jsxs(d,{sx:{...p},children:[s.jsxs(W,{direction:"row",alignItems:"center",children:[s.jsxs(d,{sx:{flexGrow:1},children:[a&&s.jsx(M,{variant:"h4",gutterBottom:!0,children:a}),!!(e!=null&&e.length)&&s.jsx(te,{separator:s.jsx(le,{}),...c,children:e==null?void 0:e.map(n=>s.jsx(ae,{link:n,activeLast:t,disabled:n.name===g},n.name||""))})]}),r&&s.jsxs(d,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!o&&s.jsx(d,{sx:{mt:2},children:o==null?void 0:o.map(n=>s.jsx(E,{href:n,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:n},n))})]})}function le(){return s.jsx(d,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}export{de as C};
