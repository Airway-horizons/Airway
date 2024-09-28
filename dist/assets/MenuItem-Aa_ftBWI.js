import{s as G,a0 as P,bn as V,y as r,bF as n,aN as d,bG as x,bH as C,r as c,x as E,_ as L,bI as $,A as T,D as _,j as I,E as O,F as w,bJ as D}from"./index-DKBZeLg-.js";import{l as k}from"./styles-CUtbidbL.js";const H=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],S=(a,e)=>{const{ownerState:s}=a;return[e.root,s.dense&&e.dense,s.divider&&e.divider,!s.disableGutters&&e.gutters]},z=a=>{const{disabled:e,dense:s,divider:t,disableGutters:l,selected:p,classes:o}=a,i=w({root:["root",s&&"dense",e&&"disabled",!l&&"gutters",t&&"divider",p&&"selected"]},D,o);return r({},o,i)},U=G(P,{shouldForwardProp:a=>V(a)||a==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:S})(({theme:a,ownerState:e})=>r({},a.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.divider&&{borderBottom:`1px solid ${(a.vars||a).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.primary.mainChannel} / ${a.vars.palette.action.selectedOpacity})`:d(a.palette.primary.main,a.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.primary.mainChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:d(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.primary.mainChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:d(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?`rgba(${a.vars.palette.primary.mainChannel} / ${a.vars.palette.action.selectedOpacity})`:d(a.palette.primary.main,a.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${n.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},[`& + .${x.root}`]:{marginTop:a.spacing(1),marginBottom:a.spacing(1)},[`& + .${x.inset}`]:{marginLeft:52},[`& .${k.root}`]:{marginTop:0,marginBottom:0},[`& .${k.inset}`]:{paddingLeft:36},[`& .${C.root}`]:{minWidth:36}},!e.dense&&{[a.breakpoints.up("sm")]:{minHeight:"auto"}},e.dense&&r({minHeight:32,paddingTop:4,paddingBottom:4},a.typography.body2,{[`& .${C.root} svg`]:{fontSize:"1.25rem"}}))),J=c.forwardRef(function(e,s){const t=E({props:e,name:"MuiMenuItem"}),{autoFocus:l=!1,component:p="li",dense:o=!1,divider:v=!1,disableGutters:i=!1,focusVisibleClassName:M,role:R="menuitem",tabIndex:g,className:B}=t,F=L(t,H),f=c.useContext($),m=c.useMemo(()=>({dense:o||f.dense||!1,disableGutters:i}),[f.dense,o,i]),u=c.useRef(null);T(()=>{l&&u.current&&u.current.focus()},[l]);const N=r({},t,{dense:m.dense,divider:v,disableGutters:i}),b=z(t),j=_(u,s);let y;return t.disabled||(y=g!==void 0?g:-1),I.jsx($.Provider,{value:m,children:I.jsx(U,r({ref:j,role:R,tabIndex:y,component:p,focusVisibleClassName:O(b.focusVisible,M),className:O(b.root,B)},F,{ownerState:N,classes:b}))})});export{J as M};
