import{r as s,j as i,S as A,T as O,f as B}from"./index-DQumLT9L.js";import{C as E}from"./Checkbox-Sn2x42hf.js";import{T as I}from"./TablePagination-BxLclrvg.js";import{F as M}from"./FormControlLabel-DtJZHq2N.js";import{S as U}from"./Switch-BGGFZMDP.js";function H(e,c,n){return e?Math.max(0,(1+e)*c-n):0}function C(e,c,n){return e[n]===null?1:c[n]===null?-1:0}function J(e,c){return e==="desc"?(n,t)=>C(n,t,c):(n,t)=>-C(n,t,c)}function K(e){const[c,n]=s.useState(!!(e!=null&&e.defaultDense)),[t,l]=s.useState((e==null?void 0:e.defaultCurrentPage)||0),[d,h]=s.useState((e==null?void 0:e.defaultOrderBy)||"name"),[g,b]=s.useState((e==null?void 0:e.defaultRowsPerPage)||5),[m,x]=s.useState((e==null?void 0:e.defaultOrder)||"asc"),[r,u]=s.useState((e==null?void 0:e.defaultSelected)||[]),P=s.useCallback(a=>{a!==""&&(x(d===a&&m==="asc"?"desc":"asc"),h(a))},[m,d]),k=s.useCallback(a=>{const o=r.includes(a)?r.filter(f=>f!==a):[...r,a];u(o)},[r]),S=s.useCallback(a=>{l(0),b(parseInt(a.target.value,10))},[]),w=s.useCallback(a=>{n(a.target.checked)},[]),j=s.useCallback((a,o)=>{if(a){u(o);return}u([])},[]),T=s.useCallback((a,o)=>{l(o)},[]),R=s.useCallback(()=>{l(0)},[]),y=s.useCallback(a=>{u([]),t&&a<2&&l(t-1)},[t]),v=s.useCallback(({totalRowsInPage:a,totalRowsFiltered:o})=>{const f=r.length;if(u([]),t){if(f===a)l(t-1);else if(f===o)l(0);else if(f>a){const D=Math.ceil((o-f)/g)-1;l(D)}}},[t,g,r.length]);return{dense:c,order:m,page:t,orderBy:d,rowsPerPage:g,selected:r,onSelectRow:k,onSelectAllRows:j,onSort:P,onChangePage:T,onChangeDense:w,onResetPage:R,onChangeRowsPerPage:S,onUpdatePageDeleteRow:y,onUpdatePageDeleteRows:v,setPage:l,setDense:n,setOrder:x,setOrderBy:h,setSelected:u,setRowsPerPage:b}}function N({dense:e,action:c,rowCount:n,numSelected:t,onSelectAllRows:l,sx:d,...h}){return t?i.jsxs(A,{direction:"row",alignItems:"center",sx:{pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter",...e&&{height:38},...d},...h,children:[i.jsx(E,{indeterminate:!!t&&t<n,checked:!!n&&t===n,onChange:g=>l(g.target.checked)}),i.jsxs(O,{variant:"subtitle2",sx:{ml:2,flexGrow:1,color:"primary.main",...e&&{ml:3}},children:[t," selected"]}),c&&c]}):null}function Q({dense:e,onChangeDense:c,rowsPerPageOptions:n=[5,10,25],sx:t,...l}){return i.jsxs(B,{sx:{position:"relative",...t},children:[i.jsx(I,{rowsPerPageOptions:n,component:"div",...l,sx:{borderTopColor:"transparent"}}),c&&i.jsx(M,{label:"Dense",control:i.jsx(U,{checked:e,onChange:c}),sx:{pl:2,py:1.5,top:0,position:{sm:"absolute"}}})]})}export{N as T,Q as a,H as e,J as g,K as u};
