import{w as S,a2 as l,d0 as _,d1 as L,r as n,a4 as D,a5 as U,j as G,a7 as x,F as V,a8 as k,d2 as w}from"./index-DQumLT9L.js";const z=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],N={small:-16,medium:null},F=s=>{const{classes:a}=s;return k({root:["root"],avatar:["avatar"]},w,a)},I=S("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(s,a)=>l({[`& .${_.avatar}`]:a.avatar},a.root)})(({theme:s,ownerState:a})=>{const r=a.spacing&&N[a.spacing]!==void 0?N[a.spacing]:-a.spacing;return{[`& .${L.root}`]:{border:`2px solid ${(s.vars||s).palette.background.default}`,boxSizing:"content-box",marginLeft:r??-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}}),q=n.forwardRef(function(a,r){var A;const i=D({props:a,name:"MuiAvatarGroup"}),{children:C,className:M,component:g="div",componentsProps:b={},max:c=5,renderSurplus:f,slotProps:j={},spacing:E="medium",total:R,variant:p="circular"}=i,$=U(i,z);let t=c<2?2:c;const h=l({},i,{max:c,spacing:E,component:g,variant:p}),d=F(h),u=n.Children.toArray(C).filter(o=>n.isValidElement(o)),e=R||u.length;e===t&&(t+=1),t=Math.min(e+1,t);const P=Math.min(u.length,t-1),v=Math.max(e-t,e-P,0),y=f?f(v):`+${v}`,m=(A=j.additionalAvatar)!=null?A:b.additionalAvatar;return G.jsxs(I,l({as:g,ownerState:h,className:x(d.root,M),ref:r},$,{children:[v?G.jsx(V,l({variant:p},m,{className:x(d.avatar,m==null?void 0:m.className),children:y})):null,u.slice(0,P).reverse().map(o=>n.cloneElement(o,{className:x(o.props.className,d.avatar),variant:o.props.variant||p}))]}))});export{q as A};
