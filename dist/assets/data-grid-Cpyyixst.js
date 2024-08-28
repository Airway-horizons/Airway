import{r as l,a4 as _,ac as v,aF as B,j as e,M as W,a1 as H,e as u,S as g,F as U,T as y,L as k,f as p,J as $,dn as K,cn as z,cO as Q,p as q,v as J,C as I,eS as i,H as X}from"./index-9PXStj3N.js";import{C as Y}from"./custom-breadcrumbs-DuhqyhxY.js";import{C as Z}from"./component-hero-Bj5IGqFC.js";import{u as ee,f as te,g as re,h as oe,i as ne,j as se,k as ae,l as ie,D as T,G as h,a as le,b as ce,c as de,d as ue,e as me}from"./DataGrid-Bnrzsrxx.js";import{c as he}from"./format-number-DdI7Nsn7.js";import{E as N}from"./empty-content-DAIjjgZ6.js";import{R as A}from"./Rating-BbBh16UC.js";import{L as fe}from"./ListItemIcon-C7WB0tUS.js";import{a as pe}from"./Menu-CNl6fHH1.js";import{C as S}from"./CardHeader-Ku5J0E_d.js";import"./TextField-CbHhpLIE.js";import"./FormControl-BNnV7ofI.js";import"./FormLabel-CU7-epWv.js";import"./Select-De9_G4gT.js";import"./index-BfYlpBiz.js";import"./Autocomplete-BaJmFtAK.js";import"./Close-DY-CD3mo.js";import"./Chip-DxwugM88.js";import"./ClickAwayListener-CXB3_-3D.js";import"./Checkbox-CM-8Bpaf.js";import"./SwitchBase-i39qGljK.js";import"./Switch-BEAoBhNK.js";import"./Skeleton-DmUipOkv.js";import"./CircularProgress-CGlsyqdu.js";import"./TablePagination-CnPGfMYI.js";import"./FirstPage-g7XaU7CH.js";import"./TableCell-C9fDz-S-.js";import"./FormControlLabel-BXyUhOdn.js";import"./visuallyHidden-Dan1xhjv.js";const xe=["onClick"],be=l.forwardRef(function(r,c){var d;const{onClick:m}=r,f=_(r,xe),a=ee(),n=te(),o=re(a,se),w=v(),C=v(),[x,b]=l.useState(!1),D=l.useRef(null),E=B(c,D),G=[{icon:e.jsx(n.slots.densityCompactIcon,{}),label:a.current.getLocaleText("toolbarDensityCompact"),value:"compact"},{icon:e.jsx(n.slots.densityStandardIcon,{}),label:a.current.getLocaleText("toolbarDensityStandard"),value:"standard"},{icon:e.jsx(n.slots.densityComfortableIcon,{}),label:a.current.getLocaleText("toolbarDensityComfortable"),value:"comfortable"}],M=l.useMemo(()=>{switch(o){case"compact":return e.jsx(n.slots.densityCompactIcon,{});case"comfortable":return e.jsx(n.slots.densityComfortableIcon,{});default:return e.jsx(n.slots.densityStandardIcon,{})}},[o,n]),R=s=>{b(j=>!j),m==null||m(s)},O=()=>{b(!1)},F=s=>{a.current.setDensity(s),b(!1)},P=s=>{ae(s.key)&&s.preventDefault(),ie(s.key)&&b(!1)};if(n.disableDensitySelector)return null;const V=G.map((s,j)=>e.jsxs(W,{onClick:()=>F(s.value),selected:s.value===o,children:[e.jsx(fe,{children:s.icon}),s.label]},j));return e.jsxs(l.Fragment,{children:[e.jsx(n.slots.baseButton,H({ref:E,size:"small",startIcon:M,"aria-label":a.current.getLocaleText("toolbarDensityLabel"),"aria-haspopup":"menu","aria-expanded":x,"aria-controls":x?C:void 0,id:w},f,{onClick:R},(d=n.slotProps)==null?void 0:d.baseButton,{children:a.current.getLocaleText("toolbarDensity")})),e.jsx(oe,{open:x,target:D.current,onClose:O,position:"bottom-start",children:e.jsx(pe,{id:C,className:ne.menuList,"aria-labelledby":w,onKeyDown:P,autoFocusItem:x,children:V})})]})}),ge=[{field:"id",headerName:"ID",width:120},{field:"firstName",headerName:"First name",width:160,editable:!0},{field:"lastName",headerName:"Last name",width:160,editable:!0},{field:"age",headerName:"Age",type:"number",width:120,editable:!0,align:"center",headerAlign:"center"},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",flex:1,renderCell:t=>`${t.row.firstName} ${t.row.lastName}`},{type:"actions",field:"actions",headerName:"Actions",align:"right",headerAlign:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,getActions:t=>[e.jsx(h,{showInMenu:!0,icon:e.jsx(u,{icon:"solar:eye-bold"}),label:"View",onClick:()=>console.info("VIEW",t.row.id)}),e.jsx(h,{showInMenu:!0,icon:e.jsx(u,{icon:"solar:pen-bold"}),label:"Edit",onClick:()=>console.info("EDIT",t.row.id)}),e.jsx(h,{showInMenu:!0,icon:e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),label:"Delete",onClick:()=>console.info("DELETE",t.row.id),sx:{color:"error.main"}})]}];function je({data:t}){return e.jsx(T,{columns:ge,rows:t,checkboxSelection:!0,disableRowSelectionOnClick:!0})}const ye=[{field:"id",headerName:"Id",filterable:!1},{field:"name",headerName:"Name",flex:1,minWidth:160,hideable:!1,renderCell:t=>e.jsxs(g,{spacing:2,direction:"row",alignItems:"center",sx:{minWidth:0},children:[e.jsx(U,{alt:t.row.name,sx:{width:36,height:36},children:t.row.name.charAt(0).toUpperCase()}),e.jsx(y,{component:"span",variant:"body2",noWrap:!0,children:t.row.name})]})},{field:"email",headerName:"Email",flex:1,minWidth:160,editable:!0,renderCell:t=>e.jsx(k,{color:"inherit",noWrap:!0,children:t.row.email})},{type:"dateTime",field:"lastLogin",headerName:"Last login",align:"right",headerAlign:"right",width:120,renderCell:t=>e.jsxs(g,{sx:{textAlign:"right"},children:[e.jsx(p,{component:"span",children:$(t.row.lastLogin)}),e.jsx(p,{component:"span",sx:{color:"text.secondary",typography:"caption"},children:K(t.row.lastLogin)})]})},{type:"number",field:"rating",headerName:"Rating",width:140,renderCell:t=>e.jsx(A,{size:"small",value:t.row.rating,precision:.5,readOnly:!0})},{type:"singleSelect",field:"status",headerName:"Status",align:"center",headerAlign:"center",width:100,editable:!0,valueOptions:["online","alway","busy"],renderCell:t=>e.jsx(z,{variant:"soft",color:t.row.status==="busy"&&"error"||t.row.status==="alway"&&"warning"||"success",sx:{mx:"auto"},children:t.row.status})},{type:"boolean",field:"isAdmin",align:"center",headerAlign:"center",width:80,renderCell:t=>t.row.isAdmin?e.jsx(u,{icon:"eva:checkmark-circle-2-fill",sx:{color:"primary.main"}}):"-"},{type:"number",field:"performance",headerName:"Performance",align:"center",headerAlign:"center",width:160,renderCell:t=>e.jsxs(g,{spacing:1,direction:"row",alignItems:"center",sx:{px:1,width:1,height:1},children:[e.jsx(Q,{value:t.row.performance,variant:"determinate",color:t.row.performance<30&&"error"||t.row.performance>30&&t.row.performance<70&&"warning"||"primary",sx:{width:1,height:6}}),e.jsx(y,{variant:"caption",sx:{width:80},children:he(t.row.performance)})]})},{type:"actions",field:"actions",headerName:"Actions",align:"right",headerAlign:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,getActions:t=>[e.jsx(h,{showInMenu:!0,icon:e.jsx(u,{icon:"solar:eye-bold"}),label:"View",onClick:()=>console.info("VIEW",t.row.id)}),e.jsx(h,{showInMenu:!0,icon:e.jsx(u,{icon:"solar:pen-bold"}),label:"Edit",onClick:()=>console.info("EDIT",t.row.id)}),e.jsx(h,{showInMenu:!0,icon:e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),label:"Delete",onClick:()=>console.info("DELETE",t.row.id),sx:{color:"error.main"}})]}],we={id:!1},Ce=["id","actions"];function De({data:t}){const[r,c]=l.useState([]),[d,m]=l.useState(we),f=l.useMemo(()=>ye.map(o=>o.field==="rating"?{...o,filterOperators:Ne}:o),[]),a=()=>f.filter(o=>!Ce.includes(o.field)).map(o=>o.field),n=t.filter(o=>r.includes(o.id)).map(o=>o.id);return console.info("SELECTED ROWS",n),e.jsx(T,{checkboxSelection:!0,disableRowSelectionOnClick:!0,rows:t,columns:f,onRowSelectionModelChange:o=>{c(o)},columnVisibilityModel:d,onColumnVisibilityModelChange:o=>m(o),slots:{toolbar:ve,noRowsOverlay:()=>e.jsx(N,{title:"No Data"}),noResultsOverlay:()=>e.jsx(N,{title:"No results found"})},slotProps:{toolbar:{showQuickFilter:!0},columnsPanel:{getTogglableColumns:a}}})}function ve(){return e.jsxs(le,{children:[e.jsx(ce,{}),e.jsx(p,{sx:{flexGrow:1}}),e.jsx(de,{}),e.jsx(ue,{}),e.jsx(be,{}),e.jsx(me,{})]})}function Ie({item:t,applyValue:r,focusElementRef:c}){const d=l.useRef(null);l.useImperativeHandle(c,()=>({focus:()=>{d.current.querySelector(`input[value="${Number(t.value)||""}"]`).focus()}}));const m=(f,a)=>{r({...t,value:a})};return e.jsx(A,{ref:d,precision:.5,value:Number(t.value),onChange:m,name:"custom-rating-filter-operator",sx:{ml:2}})}const Ne=[{label:"Above",value:"above",getApplyFilterFn:t=>!t.field||!t.value||!t.operator?null:r=>Number(r.value)>=Number(t.value),InputComponent:Ie,InputComponentProps:{type:"number"},getValueAsString:t=>`${t} Stars`}],L=[...Array(20)].map((t,r)=>{const c=r%2&&"online"||r%3&&"alway"||r%4&&"busy"||"offline";return{id:i.id(r),status:c,email:i.email(r),name:i.fullName(r),age:i.number.age(r),lastLogin:i.time(r),isAdmin:i.boolean(r),lastName:i.lastName(r),rating:i.number.rating(r),firstName:i.firstName(r),performance:i.number.percent(r)}});function Se(){return e.jsxs(e.Fragment,{children:[e.jsxs(Z,{children:[e.jsx(Y,{heading:"DataGrid",links:[{name:"Components",href:q.components},{name:"DataGrid"}],moreLink:["https://mui.com/x/react-data-grid/"],sx:{mb:0}}),e.jsxs(y,{variant:"body2",sx:{my:3},children:["This component includes 2 ",e.jsx("strong",{children:"Free"})," and ",e.jsx("strong",{children:"Paid"})," versions from MUI.",e.jsx("br",{}),"Paid version will have more features. Please read more"," ",e.jsx(k,{href:"https://mui.com/x/react-data-grid/",target:"_blank",rel:"noopener",children:"here"})]})]}),e.jsx(J,{sx:{my:10},children:e.jsxs(g,{spacing:5,children:[e.jsxs(I,{children:[e.jsx(S,{title:"Basic",sx:{mb:2}}),e.jsx(p,{sx:{height:390},children:e.jsx(je,{data:L})})]}),e.jsxs(I,{children:[e.jsx(S,{title:"Custom",sx:{mb:2}}),e.jsx(p,{sx:{height:720},children:e.jsx(De,{data:L})})]})]})})]})}function ot(){return e.jsxs(e.Fragment,{children:[e.jsx(X,{children:e.jsx("title",{children:" MUI: DataGrid"})}),e.jsx(Se,{})]})}export{ot as default};
