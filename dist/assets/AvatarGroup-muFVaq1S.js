import{w as y,a0 as l,c_ as S,c$ as L,r as n,a2 as D,a3 as U,j as G,a5 as x,E as V,a6 as k,d0 as w}from"./index-CHWzIY_h.js";const z=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],N={small:-16,medium:null},I=s=>{const{classes:a}=s;return k({root:["root"],avatar:["avatar"]},w,a)},W=y("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(s,a)=>l({[`& .${S.avatar}`]:a.avatar},a.root)})(({theme:s,ownerState:a})=>{const r=a.spacing&&N[a.spacing]!==void 0?N[a.spacing]:-a.spacing;return{[`& .${L.root}`]:{border:`2px solid ${(s.vars||s).palette.background.default}`,boxSizing:"content-box",marginLeft:r??-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}}),B=n.forwardRef(function(a,r){var A;const i=D({props:a,name:"MuiAvatarGroup"}),{children:C,className:E,component:g="div",componentsProps:M={},max:c=5,renderSurplus:f,slotProps:$={},spacing:b="medium",total:j,variant:p="circular"}=i,R=U(i,z);let t=c<2?2:c;const h=l({},i,{max:c,spacing:b,component:g,variant:p}),d=I(h),u=n.Children.toArray(C).filter(o=>n.isValidElement(o)),e=j||u.length;e===t&&(t+=1),t=Math.min(e+1,t);const P=Math.min(u.length,t-1),v=Math.max(e-t,e-P,0),_=f?f(v):`+${v}`,m=(A=$.additionalAvatar)!=null?A:M.additionalAvatar;return G.jsxs(W,l({as:g,ownerState:h,className:x(d.root,E),ref:r},R,{children:[v?G.jsx(V,l({variant:p},m,{className:x(d.avatar,m==null?void 0:m.className),children:_})):null,u.slice(0,P).reverse().map(o=>n.cloneElement(o,{className:x(o.props.className,d.avatar),variant:o.props.variant||p}))]}))});export{B as A};
