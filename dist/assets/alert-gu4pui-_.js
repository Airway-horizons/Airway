import{ak as x,aj as p,w as u,T as j,r as f,a4 as g,a5 as v,j as t,a2 as A,a7 as T,a8 as y,p as C,v as k,B as n,t as w,H as M}from"./index-DQumLT9L.js";import{C as U}from"./custom-breadcrumbs-BQV5gBXp.js";import{C as z}from"./component-hero-C336EFwW.js";import{C as r}from"./component-block-DB7opfSL.js";import{M as R}from"./Masonry-Dse6d4Jv.js";import{A as e}from"./Alert-GYr9ZzaS.js";import"./CardHeader-DRcDmvuE.js";import"./Close-88YqgUWU.js";function b(s){return x("MuiAlertTitle",s)}p("MuiAlertTitle",["root"]);const B=["className"],F=s=>{const{classes:i}=s;return y({root:["root"]},b,i)},H=u(j,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(s,i)=>i.root})(({theme:s})=>({fontWeight:s.typography.fontWeightMedium,marginTop:-2})),L=f.forwardRef(function(i,l){const a=g({props:i,name:"MuiAlertTitle"}),{className:d}=a,h=v(a,B),c=a,m=F(c);return t.jsx(H,A({gutterBottom:!0,component:"div",ownerState:c,ref:l,className:T(m.root,d)},h))}),o=["info","success","warning","error"];function N(){return t.jsxs(t.Fragment,{children:[t.jsx(z,{children:t.jsx(U,{heading:"Alert",links:[{name:"Components",href:C.components},{name:"Alert"}],moreLink:["https://mui.com/components/alert"]})}),t.jsx(k,{sx:{my:10},children:t.jsxs(R,{columns:{xs:1,sm:2},spacing:3,children:[t.jsx(r,{title:"Standard",children:o.map(s=>t.jsxs(e,{severity:s,onClose:()=>{},sx:{width:1},children:["This is an ",s," alert — check it out!"]},s))}),t.jsx(r,{title:"Filled",children:o.map(s=>t.jsxs(e,{severity:s,variant:"filled",onClose:()=>{},sx:{width:1},children:["This is an ",s," alert — check it out!"]},s))}),t.jsx(r,{title:"Outlined",children:o.map(s=>t.jsxs(e,{severity:s,variant:"outlined",onClose:()=>{},sx:{width:1},children:["This is an ",s," alert — check it out!"]},s))}),t.jsx(r,{title:"Description",children:o.map(s=>t.jsxs(e,{severity:s,onClose:()=>{},sx:{width:1},children:[t.jsxs(L,{sx:{textTransform:"capitalize"},children:[" ",s," "]}),"This is an ",s," alert — ",t.jsx("strong",{children:"check it out!"})]},s))}),t.jsxs(r,{title:"Actions",children:[t.jsx(e,{severity:"info",sx:{width:1},action:t.jsx(n,{color:"info",size:"small",variant:"soft",children:"Action"}),children:"This is an info alert — check it out!"}),t.jsx(e,{severity:"info",variant:"filled",sx:{width:1},action:t.jsxs(t.Fragment,{children:[t.jsx(n,{color:"inherit",size:"small",variant:"outlined",sx:{mr:1,border:s=>`1px solid ${w(s.palette.common.white,.48)}`},children:"Undo"}),t.jsx(n,{size:"small",color:"info",variant:"contained",sx:{bgcolor:"info.dark"},children:"Action"})]}),children:"This is an info alert — check it out!"}),t.jsx(e,{severity:"info",variant:"outlined",sx:{width:1},action:t.jsxs(t.Fragment,{children:[t.jsx(n,{color:"info",size:"small",variant:"outlined",sx:{mr:1},children:"Undo"}),t.jsx(n,{color:"info",size:"small",variant:"contained",sx:{bgcolor:"info.dark"},children:"Action"})]}),children:"This is an info alert — check it out!"})]})]})})]})}function V(){return t.jsxs(t.Fragment,{children:[t.jsx(M,{children:t.jsx("title",{children:" MUI: Alert"})}),t.jsx(N,{})]})}export{V as default};
