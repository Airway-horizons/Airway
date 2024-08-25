import{h as R,a as z,m as O,j as s,S as a,C as A,cp as k,f as y,J as H,L as V,R as L,p as h,d as E,e as l,F as G,l as M,M as w,bv as N,r as d,v as Q,B as U,cm as _,co as W,H as q}from"./index-DQumLT9L.js";import{o as S}from"./orderBy-BAiUPrXu.js";import{u as J}from"./use-debounce-BahPiTZ4.js";import{P as $}from"./_blog-C6iFTPs4.js";import{u as K,a as X}from"./blog-BChCMTKa.js";import{C as Y}from"./custom-breadcrumbs-BQV5gBXp.js";import{P as Z,a as D}from"./post-search-fpPCarHI.js";import{P as ss}from"./post-skeleton-DrSzkxhe.js";import{a as P}from"./format-number-DbkgK7Ht.js";import{I as es}from"./image-BQLAgES7.js";import{T as I}from"./text-max-line-C46YOT5Q.js";import{P as ts,p as os}from"./Pagination-DZ57WmWJ.js";import"./axios-DYCcKomT.js";import"./mui-one-time-password-input.es-CrCnoD2A.js";import"./highlight-DjC4x1cy.js";import"./styles-CbjE8cRF.js";import"./styles-CZezhFX0.js";import"./_baseToString-DDDuf8FE.js";import"./_baseIteratee-vYTpPPPm.js";import"./_baseEach-Bte6FWsO.js";import"./Autocomplete-CrAcmVXV.js";import"./Select-DVR-Fv5D.js";import"./Menu-DSL53x_F.js";import"./Close-88YqgUWU.js";import"./Chip-BV5fqBH-.js";import"./TextField-Y2PbW22P.js";import"./FormControl-CkY9ZgKl.js";import"./FormLabel-DQT9OHMa.js";import"./Skeleton-DoNq6b-x.js";import"./FirstPage-BHRCtckg.js";function rs({post:t}){const o=R(),i=z(),n=O("up","sm"),{title:r,author:m,publish:x,coverUrl:u,createdAt:p,totalViews:f,totalShares:j,totalComments:b,description:g}=t;return s.jsxs(s.Fragment,{children:[s.jsxs(a,{component:A,direction:"row",children:[s.jsxs(a,{sx:{p:C=>C.spacing(3,3,2,3)},children:[s.jsxs(a,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mb:2},children:[s.jsx(k,{variant:"soft",color:x==="published"&&"info"||"default",children:x}),s.jsx(y,{component:"span",sx:{typography:"caption",color:"text.disabled"},children:H(p)})]}),s.jsxs(a,{spacing:1,flexGrow:1,children:[s.jsx(V,{color:"inherit",component:L,href:h.dashboard.post.details(r),children:s.jsx(I,{variant:"subtitle2",line:2,children:r})}),s.jsx(I,{variant:"body2",sx:{color:"text.secondary"},children:g})]}),s.jsxs(a,{direction:"row",alignItems:"center",children:[s.jsx(E,{color:o.open?"inherit":"default",onClick:o.onOpen,children:s.jsx(l,{icon:"eva:more-horizontal-fill"})}),s.jsxs(a,{spacing:1.5,flexGrow:1,direction:"row",flexWrap:"wrap",justifyContent:"flex-end",sx:{typography:"caption",color:"text.disabled"},children:[s.jsxs(a,{direction:"row",alignItems:"center",children:[s.jsx(l,{icon:"eva:message-circle-fill",width:16,sx:{mr:.5}}),P(b)]}),s.jsxs(a,{direction:"row",alignItems:"center",children:[s.jsx(l,{icon:"solar:eye-bold",width:16,sx:{mr:.5}}),P(f)]}),s.jsxs(a,{direction:"row",alignItems:"center",children:[s.jsx(l,{icon:"solar:share-bold",width:16,sx:{mr:.5}}),P(j)]})]})]})]}),n&&s.jsxs(y,{sx:{width:180,height:240,position:"relative",flexShrink:0,p:1},children:[s.jsx(G,{alt:m.name,src:m.avatarUrl,sx:{position:"absolute",top:16,right:16,zIndex:9}}),s.jsx(es,{alt:r,src:u,sx:{height:1,borderRadius:1.5}})]})]}),s.jsxs(M,{open:o.open,onClose:o.onClose,arrow:"bottom-center",sx:{width:140},children:[s.jsxs(w,{onClick:()=>{o.onClose(),i.push(h.dashboard.post.details(r))},children:[s.jsx(l,{icon:"solar:eye-bold"}),"View"]}),s.jsxs(w,{onClick:()=>{o.onClose(),i.push(h.dashboard.post.edit(r))},children:[s.jsx(l,{icon:"solar:pen-bold"}),"Edit"]}),s.jsxs(w,{onClick:()=>{o.onClose()},sx:{color:"error.main"},children:[s.jsx(l,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}function is({posts:t,loading:o}){const i=s.jsx(s.Fragment,{children:[...Array(16)].map((r,m)=>s.jsx(ss,{variant:"horizontal"},m))}),n=s.jsx(s.Fragment,{children:t.map(r=>s.jsx(rs,{post:r},r.id))});return s.jsxs(s.Fragment,{children:[s.jsx(y,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:o?i:n}),t.length>8&&s.jsx(ts,{count:8,sx:{mt:8,[`& .${os.ul}`]:{justifyContent:"center"}}})]})}const ns={publish:"all"};function as(){const t=N(),[o,i]=d.useState("latest"),[n,r]=d.useState(ns),[m,x]=d.useState(""),u=J(m),{posts:p,postsLoading:f}=K(),{searchResults:j,searchLoading:b}=X(u),g=ls({inputData:p,filters:n,sortBy:o}),C=d.useCallback(e=>{i(e)},[]),v=d.useCallback((e,c)=>{r(B=>({...B,[e]:c}))},[]),F=d.useCallback(e=>{x(e)},[]),T=d.useCallback((e,c)=>{v("publish",c)},[v]);return s.jsxs(Q,{maxWidth:t.themeStretch?!1:"lg",children:[s.jsx(Y,{heading:"List",links:[{name:"Dashboard",href:h.dashboard.root},{name:"Blog",href:h.dashboard.post.root},{name:"List"}],action:s.jsx(U,{component:L,href:h.dashboard.post.new,variant:"contained",startIcon:s.jsx(l,{icon:"mingcute:add-line"}),children:"New Post"}),sx:{mb:{xs:3,md:5}}}),s.jsxs(a,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},sx:{mb:{xs:3,md:5}},children:[s.jsx(Z,{query:u,results:j,onSearch:F,loading:b,hrefItem:e=>h.dashboard.post.details(e)}),s.jsx(D,{sort:o,onSort:C,sortOptions:$})]}),s.jsx(_,{value:n.publish,onChange:T,sx:{mb:{xs:3,md:5}},children:["all","published","draft"].map(e=>s.jsx(W,{iconPosition:"end",value:e,label:e,icon:s.jsxs(k,{variant:(e==="all"||e===n.publish)&&"filled"||"soft",color:e==="published"&&"info"||"default",children:[e==="all"&&p.length,e==="published"&&p.filter(c=>c.publish==="published").length,e==="draft"&&p.filter(c=>c.publish==="draft").length]}),sx:{textTransform:"capitalize"}},e))}),s.jsx(is,{posts:g,loading:f})]})}const ls=({inputData:t,filters:o,sortBy:i})=>{const{publish:n}=o;return i==="latest"&&(t=S(t,["createdAt"],["desc"])),i==="oldest"&&(t=S(t,["createdAt"],["asc"])),i==="popular"&&(t=S(t,["totalViews"],["desc"])),n!=="all"&&(t=t.filter(r=>r.publish===n)),t};function Gs(){return s.jsxs(s.Fragment,{children:[s.jsx(q,{children:s.jsx("title",{children:" Dashboard: Post List"})}),s.jsx(as,{})]})}export{Gs as default};
