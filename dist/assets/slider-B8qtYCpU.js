import{r as c,j as e,p as b,v as f,S as g,e as d,f as x,t as C,T as p,H as V}from"./index-DQumLT9L.js";import{C as y}from"./custom-breadcrumbs-BQV5gBXp.js";import{C as S}from"./component-hero-C336EFwW.js";import{C as t}from"./component-block-DB7opfSL.js";import{M as k}from"./Masonry-Dse6d4Jv.js";import{S as l}from"./Slider-P35hVlg9.js";import"./CardHeader-DRcDmvuE.js";import"./visuallyHidden-Dan1xhjv.js";const m=[{value:0,label:"0°C"},{value:20,label:"20°C"},{value:37,label:"37°C"},{value:100,label:"100°C"}],L=[{value:0,label:"$0"},{value:25,label:"250"},{value:50,label:"500"},{value:75,label:"750"},{value:100,label:"1000"}];function o(a){return a>0?`$${a}0`:`${a}`}function T(a){return a>0?`$${a}`:a}function s(a){return`$${a}°C`}function D(a){return m.findIndex(r=>r.value===a)+1}function $(){const[a,r]=c.useState(30),[n,h]=c.useState([20,37]),j=(i,u)=>{r(u)},v=(i,u)=>{h(u)};return e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsx(y,{heading:"Slider",links:[{name:"Components",href:b.components},{name:"Slider"}],moreLink:["https://mui.com/components/slider"]})}),e.jsx(f,{sx:{my:10},children:e.jsxs(k,{columns:{xs:1,md:3},spacing:3,children:[e.jsx(t,{title:"Volume",children:e.jsxs(g,{direction:"row",alignItems:"center",spacing:1,width:1,children:[e.jsx(d,{icon:"eva:volume-mute-fill",width:24}),e.jsx(l,{value:a,onChange:j,"aria-labelledby":"continuous-slider"}),e.jsx(d,{icon:"eva:volume-up-fill",width:24})]})}),e.jsx(t,{title:"Disabled",children:e.jsx(l,{disabled:!0,defaultValue:30})}),e.jsx(t,{title:"Temperature",children:e.jsx(l,{defaultValue:30,getAriaValueText:s,valueLabelDisplay:"auto",step:10,marks:!0,min:10,max:110})}),e.jsxs(t,{title:"Sizes",children:[e.jsx(l,{size:"medium",marks:!0,min:10,step:10,max:110,defaultValue:30,valueLabelDisplay:"auto",getAriaValueText:s}),e.jsx(l,{marks:!0,min:10,step:10,max:110,defaultValue:30,valueLabelDisplay:"auto",getAriaValueText:s})]}),e.jsx(t,{title:"Small steps",children:e.jsx(l,{defaultValue:5e-8,getAriaValueText:s,step:1e-8,marks:!0,min:-5e-8,max:1e-7,valueLabelDisplay:"auto"})}),e.jsx(t,{title:"Custom marks",children:e.jsx(l,{defaultValue:20,getAriaValueText:s,step:10,valueLabelDisplay:"auto",marks:m})}),e.jsx(t,{title:"Restricted values",children:e.jsx(l,{defaultValue:20,valueLabelFormat:D,getAriaValueText:s,step:null,valueLabelDisplay:"auto",marks:m})}),e.jsxs(t,{title:"Range",children:[e.jsx(x,{sx:{width:"100%"},children:e.jsx(l,{scale:i=>i*10,step:10,marks:L,value:n,onChange:v,valueLabelDisplay:"on",getAriaValueText:o,valueLabelFormat:T})}),e.jsxs(x,{sx:{p:2,width:"100%",borderRadius:1,bgcolor:i=>C(i.palette.grey[500],.12)},children:[e.jsxs(p,{variant:"subtitle2",gutterBottom:!0,children:["Min: ",o(n[0])]}),e.jsxs(p,{variant:"subtitle2",children:["Max: ",o(n[1])]})]})]})]})})]})}function H(){return e.jsxs(e.Fragment,{children:[e.jsx(V,{children:e.jsx("title",{children:" MUI: Slider"})}),e.jsx($,{})]})}export{H as default};
