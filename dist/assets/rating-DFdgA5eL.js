import{r as c,j as e,p as x,v as u,e as o,f as j,H as f}from"./index-DQumLT9L.js";import{C as h}from"./custom-breadcrumbs-BQV5gBXp.js";import{C as p}from"./component-hero-C336EFwW.js";import{C as n}from"./component-block-DB7opfSL.js";import{M as g}from"./Masonry-Dse6d4Jv.js";import{R as s}from"./Rating-DfBD8T8R.js";import"./CardHeader-DRcDmvuE.js";import"./visuallyHidden-Dan1xhjv.js";const C={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"},d={1:{icon:e.jsx(o,{icon:"ic:round-sentiment-very-dissatisfied"}),label:"Very Dissatisfied"},2:{icon:e.jsx(o,{icon:"ic:round-sentiment-dissatisfied"}),label:"Dissatisfied"},3:{icon:e.jsx(o,{icon:"ic:round-sentiment-neutral"}),label:"Neutral"},4:{icon:e.jsx(o,{icon:"ic:round-sentiment-satisfied"}),label:"Satisfied"},5:{icon:e.jsx(o,{icon:"ic:round-sentiment-very-satisfied"}),label:"Very Satisfied"}};function b(){const[i,l]=c.useState(2),[r,m]=c.useState(-1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsx(h,{heading:"Rating",links:[{name:"Components",href:x.components},{name:"Rating"}],moreLink:["https://mui.com/components/rating"]})}),e.jsx(u,{sx:{my:10},children:e.jsxs(g,{columns:{xs:1,sm:2,md:3},spacing:3,children:[e.jsx(n,{title:"Controlled",children:e.jsx(s,{name:"simple-controlled",value:i,onChange:(t,a)=>{l(a)}})}),e.jsx(n,{title:"Read only",children:e.jsx(s,{name:"read-only",value:i,readOnly:!0})}),e.jsx(n,{title:"Disabled",children:e.jsx(s,{name:"disabled",value:i,disabled:!0})}),e.jsx(n,{title:"Pristine",children:e.jsx(s,{name:"pristine",value:null})}),e.jsx(n,{title:"Custom empty icon",children:e.jsx(s,{name:"customized-empty",defaultValue:2,precision:.5})}),e.jsx(n,{title:"Custom icon and color",children:e.jsx(s,{name:"customized-color",defaultValue:2,getLabelText:t=>`${t} Heart${t!==1?"s":""}`,precision:.5,icon:e.jsx(o,{icon:"solar:heart-bold"}),emptyIcon:e.jsx(o,{icon:"solar:heart-bold"}),sx:{color:"info.main","&:hover":{color:"info.dark"}}})}),e.jsx(n,{title:"10 stars",children:e.jsx(s,{name:"customized-10",defaultValue:2,max:10})}),e.jsx(n,{title:"Custom icon set",children:e.jsx(s,{name:"customized-icons",defaultValue:2,getLabelText:t=>d[t].label,IconContainerComponent:v})}),e.jsxs(n,{title:"Hover feedback",children:[e.jsx(s,{name:"hover-feedback",value:i,precision:.5,onChange:(t,a)=>{l(a)},onChangeActive:(t,a)=>{m(a)}}),i!==null&&e.jsx(j,{sx:{ml:2},children:C[r!==-1?r:i]})]}),e.jsxs(n,{title:"Half ratings",children:[e.jsx(s,{name:"half-rating",defaultValue:2.5,precision:.5}),e.jsx(s,{name:"half-rating-read",defaultValue:2.5,precision:.5,readOnly:!0})]}),e.jsxs(n,{title:"Sizes",children:[e.jsx(s,{name:"size-small",defaultValue:2,size:"small"}),e.jsx(s,{name:"size-medium",defaultValue:2}),e.jsx(s,{name:"size-large",defaultValue:2,size:"large"})]})]})})]})}function v(i){const{value:l,...r}=i;return e.jsx("span",{...r,children:d[l].icon})}function E(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:e.jsx("title",{children:" MUI: Rating"})}),e.jsx(b,{})]})}export{E as default};
