import{ak as c,aj as p,w as u,a2 as a,r as v,a4 as g,a5 as x,j as C,a7 as f,a8 as D}from"./index-DQumLT9L.js";import{d as m}from"./dialogTitleClasses-DoSL4AIa.js";function w(o){return c("MuiDialogContent",o)}p("MuiDialogContent",["root","dividers"]);const j=["className","dividers"],R=o=>{const{classes:s,dividers:t}=o;return D({root:["root",t&&"dividers"]},w,s)},b=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:t}=o;return[s.root,t.dividers&&s.dividers]}})(({theme:o,ownerState:s})=>a({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},s.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${m.root} + &`]:{paddingTop:0}})),U=v.forwardRef(function(s,t){const e=g({props:s,name:"MuiDialogContent"}),{className:r,dividers:n=!1}=e,l=x(e,j),i=a({},e,{dividers:n}),d=R(i);return C.jsx(b,a({className:f(d.root,r),ownerState:i,ref:t},l))});export{U as D};
