import{r as s,j as t,p as m,v as p,H as j}from"./index-DQumLT9L.js";import{C as h}from"./custom-breadcrumbs-BQV5gBXp.js";import{C as g}from"./component-hero-C336EFwW.js";import{C as e}from"./component-block-DB7opfSL.js";import{M as P}from"./Masonry-Dse6d4Jv.js";import{P as n}from"./Pagination-DZ57WmWJ.js";import{T as f}from"./TablePagination-BxLclrvg.js";import"./CardHeader-DRcDmvuE.js";import"./FirstPage-BHRCtckg.js";import"./TableCell-C3uJnGFm.js";import"./Select-DVR-Fv5D.js";import"./Menu-DSL53x_F.js";const o=["standard","primary","secondary","info","success","warning","error"],C=["small","medium","large"];function v(){const[i,r]=s.useState(2),[u,c]=s.useState(10),d=s.useCallback((a,x)=>{r(x)},[]),l=s.useCallback(a=>{c(parseInt(a.target.value,10)),r(0)},[]);return t.jsxs(t.Fragment,{children:[t.jsx(g,{children:t.jsx(h,{heading:"Pagination",links:[{name:"Components",href:m.components},{name:"Pagination"}],moreLink:["https://mui.com/components/pagination"]})}),t.jsx(p,{sx:{my:10},children:t.jsxs(P,{columns:{xs:1,md:2},spacing:3,children:[t.jsxs(e,{title:"Circular",children:[t.jsx(n,{shape:"circular",count:10,variant:"text"}),t.jsx(n,{shape:"circular",count:10,variant:"text",disabled:!0}),t.jsx(n,{shape:"circular",count:10,variant:"outlined"}),t.jsx(n,{shape:"circular",count:10,variant:"outlined",disabled:!0}),t.jsx(n,{shape:"circular",count:10,variant:"soft"}),t.jsx(n,{shape:"circular",count:10,variant:"soft",disabled:!0})]}),t.jsxs(e,{title:"Rounded",children:[t.jsx(n,{shape:"rounded",count:10,variant:"text"}),t.jsx(n,{shape:"rounded",count:10,variant:"text",disabled:!0}),t.jsx(n,{shape:"rounded",count:10,variant:"outlined"}),t.jsx(n,{shape:"rounded",count:10,variant:"outlined",disabled:!0}),t.jsx(n,{shape:"rounded",count:10,variant:"soft"}),t.jsx(n,{shape:"rounded",count:10,variant:"soft",disabled:!0})]}),t.jsxs(e,{title:"Colors",children:[o.map(a=>t.jsx(n,{color:a,count:10,variant:"text"},a)),o.map(a=>t.jsx(n,{color:a,count:10,variant:"outlined"},a)),o.map(a=>t.jsx(n,{color:a,count:10,variant:"soft"},a))]}),t.jsx(e,{title:"Sizes",children:C.map(a=>t.jsx(n,{count:10,size:a},a))}),t.jsxs(e,{title:"Buttons",children:[t.jsx(n,{count:10,showFirstButton:!0,showLastButton:!0}),t.jsx(n,{count:10,hidePrevButton:!0,hideNextButton:!0})]}),t.jsxs(e,{title:"Ranges",children:[t.jsx(n,{count:11,defaultPage:6,siblingCount:0}),t.jsx(n,{count:11,defaultPage:6}),t.jsx(n,{count:11,defaultPage:6,siblingCount:0,boundaryCount:2}),t.jsx(n,{count:11,defaultPage:6,boundaryCount:2})]}),t.jsx(e,{title:"Table",children:t.jsx(f,{component:"div",count:100,page:i,onPageChange:d,rowsPerPage:u,onRowsPerPageChange:l})})]})})]})}function M(){return t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsx("title",{children:" MUI: Pagination"})}),t.jsx(v,{})]})}export{M as default};
