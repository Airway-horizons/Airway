import{r as G,a4 as X,aN as st,d as F,dR as nt,dS as at,j as e,a1 as s,ai as lt,aj as it,w as P,bc as ct,M as rt,a3 as ut,ac as Q,a6 as D,ay as pt,cj as dt,a7 as bt}from"./index-9PXStj3N.js";import{F as gt,L as Bt}from"./FirstPage-g7XaU7CH.js";import{T as K}from"./TableCell-C9fDz-S-.js";import{S as mt}from"./Select-De9_G4gT.js";const Pt=["backIconButtonProps","count","disabled","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton","slots","slotProps"],ht=G.forwardRef(function(o,B){var R,h,y,$,k,M,x,u;const{backIconButtonProps:N,count:I,disabled:f=!1,getItemAriaLabel:p,nextIconButtonProps:H,onPageChange:v,page:a,rowsPerPage:b,showFirstButton:g,showLastButton:L,slots:d={},slotProps:n={}}=o,U=X(o,Pt),l=st(),E=m=>{v(m,0)},z=m=>{v(m,a-1)},S=m=>{v(m,a+1)},i=m=>{v(m,Math.max(0,Math.ceil(I/b)-1))},c=(R=d.firstButton)!=null?R:F,T=(h=d.lastButton)!=null?h:F,w=(y=d.nextButton)!=null?y:F,_=($=d.previousButton)!=null?$:F,j=(k=d.firstButtonIcon)!=null?k:gt,A=(M=d.lastButtonIcon)!=null?M:Bt,r=(x=d.nextButtonIcon)!=null?x:nt,W=(u=d.previousButtonIcon)!=null?u:at,Y=l?T:c,Z=l?w:_,O=l?_:w,tt=l?c:T,ot=l?n.lastButton:n.firstButton,q=l?n.nextButton:n.previousButton,J=l?n.previousButton:n.nextButton,et=l?n.firstButton:n.lastButton;return e.jsxs("div",s({ref:B},U,{children:[g&&e.jsx(Y,s({onClick:E,disabled:f||a===0,"aria-label":p("first",a),title:p("first",a)},ot,{children:l?e.jsx(A,s({},n.lastButtonIcon)):e.jsx(j,s({},n.firstButtonIcon))})),e.jsx(Z,s({onClick:z,disabled:f||a===0,color:"inherit","aria-label":p("previous",a),title:p("previous",a)},q??N,{children:l?e.jsx(r,s({},n.nextButtonIcon)):e.jsx(W,s({},n.previousButtonIcon))})),e.jsx(O,s({onClick:S,disabled:f||(I!==-1?a>=Math.ceil(I/b)-1:!1),color:"inherit","aria-label":p("next",a),title:p("next",a)},J??H,{children:l?e.jsx(W,s({},n.previousButtonIcon)):e.jsx(r,s({},n.nextButtonIcon))})),L&&e.jsx(tt,s({onClick:i,disabled:f||a>=Math.ceil(I/b)-1,"aria-label":p("last",a),title:p("last",a)},et,{children:l?e.jsx(j,s({},n.firstButtonIcon)):e.jsx(A,s({},n.lastButtonIcon))}))]}))});function xt(t){return it("MuiTablePagination",t)}const C=lt("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]);var V;const It=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","disabled","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton","slotProps","slots"],ft=P(K,{name:"MuiTablePagination",slot:"Root",overridesResolver:(t,o)=>o.root})(({theme:t})=>({overflow:"auto",color:(t.vars||t).palette.text.primary,fontSize:t.typography.pxToRem(14),"&:last-child":{padding:0}})),vt=P(ct,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(t,o)=>s({[`& .${C.actions}`]:o.actions},o.toolbar)})(({theme:t})=>({minHeight:52,paddingRight:2,[`${t.breakpoints.up("xs")} and (orientation: landscape)`]:{minHeight:52},[t.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},[`& .${C.actions}`]:{flexShrink:0,marginLeft:20}})),Rt=P("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:(t,o)=>o.spacer})({flex:"1 1 100%"}),Lt=P("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:(t,o)=>o.selectLabel})(({theme:t})=>s({},t.typography.body2,{flexShrink:0})),St=P(mt,{name:"MuiTablePagination",slot:"Select",overridesResolver:(t,o)=>s({[`& .${C.selectIcon}`]:o.selectIcon,[`& .${C.select}`]:o.select},o.input,o.selectRoot)})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,[`& .${C.select}`]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),Tt=P(rt,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:(t,o)=>o.menuItem})({}),wt=P("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:(t,o)=>o.displayedRows})(({theme:t})=>s({},t.typography.body2,{flexShrink:0}));function jt({from:t,to:o,count:B}){return`${t}–${o} of ${B!==-1?B:`more than ${o}`}`}function Ct(t){return`Go to ${t} page`}const yt=t=>{const{classes:o}=t;return bt({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},xt,o)},_t=G.forwardRef(function(o,B){var R;const h=ut({props:o,name:"MuiTablePagination"}),{ActionsComponent:y=ht,backIconButtonProps:$,className:k,colSpan:M,component:x=K,count:u,disabled:N=!1,getItemAriaLabel:I=Ct,labelDisplayedRows:f=jt,labelRowsPerPage:p="Rows per page:",nextIconButtonProps:H,onPageChange:v,onRowsPerPageChange:a,page:b,rowsPerPage:g,rowsPerPageOptions:L=[10,25,50,100],SelectProps:d={},showFirstButton:n=!1,showLastButton:U=!1,slotProps:l={},slots:E={}}=h,z=X(h,It),S=h,i=yt(S),c=(R=l==null?void 0:l.select)!=null?R:d,T=c.native?"option":Tt;let w;(x===K||x==="td")&&(w=M||1e3);const _=Q(c.id),j=Q(c.labelId),A=()=>u===-1?(b+1)*g:g===-1?u:Math.min(u,(b+1)*g);return e.jsx(ft,s({colSpan:w,ref:B,as:x,ownerState:S,className:D(i.root,k)},z,{children:e.jsxs(vt,{className:i.toolbar,children:[e.jsx(Rt,{className:i.spacer}),L.length>1&&e.jsx(Lt,{className:i.selectLabel,id:j,children:p}),L.length>1&&e.jsx(St,s({variant:"standard"},!c.variant&&{input:V||(V=e.jsx(pt,{}))},{value:g,onChange:a,id:_,labelId:j},c,{classes:s({},c.classes,{root:D(i.input,i.selectRoot,(c.classes||{}).root),select:D(i.select,(c.classes||{}).select),icon:D(i.selectIcon,(c.classes||{}).icon)}),disabled:N,children:L.map(r=>G.createElement(T,s({},!dt(T)&&{ownerState:S},{className:i.menuItem,key:r.label?r.label:r,value:r.value?r.value:r}),r.label?r.label:r))})),e.jsx(wt,{className:i.displayedRows,children:f({from:u===0?0:b*g+1,to:A(),count:u===-1?-1:u,page:b})}),e.jsx(y,{className:i.actions,backIconButtonProps:$,count:u,nextIconButtonProps:H,onPageChange:v,page:b,rowsPerPage:g,showFirstButton:n,showLastButton:U,slotProps:l.actions,slots:E.actions,getItemAriaLabel:I,disabled:N})]})}))});export{_t as T,C as t};
