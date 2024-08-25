import{r as c,h as i,j as o,p as x,v,f as s,B as m,aM as u,T as e,l as j,H as f}from"./index-DQumLT9L.js";import{C}from"./custom-breadcrumbs-BQV5gBXp.js";import{C as b}from"./component-hero-C336EFwW.js";import{C as l}from"./component-block-DB7opfSL.js";import{F as g}from"./FormControl-CkY9ZgKl.js";import{F as P}from"./FormLabel-DQT9OHMa.js";import{R as y}from"./RadioGroup-ChcwlZO5.js";import{F}from"./FormControlLabel-DtJZHq2N.js";import{R as B}from"./Radio-BRHVJkmq.js";import"./CardHeader-DRcDmvuE.js";import"./FormGroup-4nGdzxLL.js";import"./SwitchBase-C1d58dFN.js";function E(){const[p,d]=c.useState("top-left"),n=i(),t=i(),a=i(),h=c.useCallback(r=>{d(r.target.value)},[]);return o.jsxs(o.Fragment,{children:[o.jsx(b,{children:o.jsx(C,{heading:"Popover",links:[{name:"Components",href:x.components},{name:"Popover"}],moreLink:["https://mui.com/components/popover"]})}),o.jsxs(v,{sx:{my:10},children:[o.jsxs(s,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{mb:3},children:[o.jsxs(l,{title:"Click",children:[o.jsx(m,{variant:"contained",onClick:n.onOpen,children:"Open Popover"}),o.jsx(u,{open:!!n.open,anchorEl:n.open,onClose:n.onClose,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:o.jsxs(s,{sx:{p:2,maxWidth:280},children:[o.jsx(e,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),o.jsx(e,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]}),o.jsxs(l,{title:"Hover",children:[o.jsx(e,{"aria-owns":t.open?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:t.onOpen,onMouseLeave:t.onClose,children:"Hover with a Popover."}),o.jsx(u,{id:"mouse-over-popover",open:!!t.open,anchorEl:t.open,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:t.onClose,disableRestoreFocus:!0,sx:{pointerEvents:"none"},children:o.jsxs(s,{sx:{p:2,maxWidth:280},children:[o.jsx(e,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),o.jsx(e,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]})]}),o.jsxs(l,{title:"Customized",children:[o.jsx(m,{variant:"contained",onClick:a.onOpen,sx:{mr:5},children:"Open Customized"}),o.jsxs(g,{children:[o.jsx(P,{sx:{typography:"body2"},children:"Arrow"}),o.jsx(y,{value:p,onChange:h,children:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","left-top","left-center","left-bottom","right-top","right-center","right-bottom"].map(r=>o.jsx(F,{value:r,control:o.jsx(B,{}),label:r},r))})]}),o.jsx(j,{open:a.open,onClose:a.onClose,arrow:p,children:o.jsxs(s,{sx:{p:2,maxWidth:280},children:[o.jsx(e,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),o.jsx(e,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]})]})]})}function I(){return o.jsxs(o.Fragment,{children:[o.jsx(f,{children:o.jsx("title",{children:" MUI: Popover"})}),o.jsx(E,{})]})}export{I as default};
