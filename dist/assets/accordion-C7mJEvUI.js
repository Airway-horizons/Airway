import{r as j,j as n,p as u,v as f,S as g,e as c,T as o,N as a,H as C}from"./index-DQumLT9L.js";import{C as v}from"./custom-breadcrumbs-BQV5gBXp.js";import{C as A}from"./component-hero-C336EFwW.js";import{C as l}from"./component-block-DB7opfSL.js";import{A as d,a as t,b as h}from"./AccordionDetails-B48RXTl6.js";import"./CardHeader-DRcDmvuE.js";const p=[...Array(4)].map((i,s)=>({id:a.id(s),value:`panel${s+1}`,heading:`Accordion ${s+1}`,subHeading:a.postTitle(s),detail:a.description(s)}));function b(){const[i,s]=j.useState(!1),x=e=>(r,m)=>{s(m?e:!1)};return n.jsxs(n.Fragment,{children:[n.jsx(A,{children:n.jsx(v,{heading:"Accordion",links:[{name:"Components",href:u.components},{name:"Accordion"}],moreLink:["https://mui.com/components/accordion"]})}),n.jsx(f,{sx:{my:10},children:n.jsxs(g,{spacing:5,children:[n.jsx(l,{title:"Simple",spacing:0,children:p.map((e,r)=>n.jsxs(d,{disabled:r===3,children:[n.jsx(t,{expandIcon:n.jsx(c,{icon:"eva:arrow-ios-downward-fill"}),children:n.jsx(o,{variant:"subtitle1",children:e.heading})}),n.jsx(h,{children:n.jsx(o,{children:e.detail})})]},e.value))}),n.jsx(l,{title:"Controlled",spacing:0,children:p.map((e,r)=>n.jsxs(d,{disabled:r===3,expanded:i===e.value,onChange:x(e.value),children:[n.jsxs(t,{expandIcon:n.jsx(c,{icon:"eva:arrow-ios-downward-fill"}),children:[n.jsx(o,{variant:"subtitle1",sx:{width:"33%",flexShrink:0},children:e.heading}),n.jsx(o,{sx:{color:"text.secondary"},children:e.subHeading})]}),n.jsx(h,{children:n.jsx(o,{children:e.detail})})]},e.value))})]})})]})}function T(){return n.jsxs(n.Fragment,{children:[n.jsx(C,{children:n.jsx("title",{children:" MUI: Accordion"})}),n.jsx(b,{})]})}export{T as default};
