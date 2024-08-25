import{h as C,j as t,S as l,B as P,R as x,e as r,f as g,bu as b,d as v,l as k,M as w,r as f,p as d,T as u,d0 as L,F as I,D as B,v as D,H as S}from"./index-DQumLT9L.js";import{u as F}from"./use-params-m6MF5JYy.js";import"./_baseToString-DDDuf8FE.js";import"./axios-DYCcKomT.js";import"./image-BQLAgES7.js";import"./text-max-line-C46YOT5Q.js";import"./mui-one-time-password-input.es-CrCnoD2A.js";import"./highlight-DjC4x1cy.js";import"./styles-CbjE8cRF.js";import"./styles-CZezhFX0.js";import{a as T}from"./format-number-DbkgK7Ht.js";import{b as $}from"./blog-BChCMTKa.js";import{a as y}from"./_blog-C6iFTPs4.js";import{M as E}from"./markdown-DCy3Uff2.js";import{E as G}from"./empty-content-C-k1mDHV.js";import{P as O}from"./post-details-hero-B4vJlFiR.js";import{P as H,a as M}from"./post-comment-form-DCpUVDjf.js";import{a as U}from"./post-skeleton-DrSzkxhe.js";import{L as A}from"./LoadingButton-By3CRbWh.js";import{C as R}from"./Chip-BV5fqBH-.js";import{F as W}from"./FormControlLabel-DtJZHq2N.js";import{C as z}from"./Checkbox-Sn2x42hf.js";import{A as N}from"./AvatarGroup-Q7eg2jxd.js";import"./TextField-Y2PbW22P.js";import"./FormControl-CkY9ZgKl.js";import"./FormLabel-DQT9OHMa.js";import"./Select-DVR-Fv5D.js";import"./Menu-DSL53x_F.js";import"./Fab-D_vnC15G.js";import"./Zoom-BEJ_UPsN.js";import"./ListItem-CasPjPth.js";import"./ListItemSecondaryAction-C30uJhZz.js";import"./Pagination-DZ57WmWJ.js";import"./FirstPage-BHRCtckg.js";import"./rhf-text-field-D4JfNq3U.js";import"./Skeleton-DoNq6b-x.js";import"./CircularProgress-D2eR23uJ.js";import"./SwitchBase-C1d58dFN.js";function _({publish:e,backLink:m,editLink:c,liveLink:o,publishOptions:p,onChangePublish:a,sx:h,...j}){const n=C();return t.jsxs(t.Fragment,{children:[t.jsxs(l,{spacing:1.5,direction:"row",sx:{mb:{xs:3,md:5},...h},...j,children:[t.jsx(P,{component:x,href:m,startIcon:t.jsx(r,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),t.jsx(g,{sx:{flexGrow:1}}),e==="published"&&t.jsx(b,{title:"Go Live",children:t.jsx(v,{component:x,href:o,children:t.jsx(r,{icon:"eva:external-link-fill"})})}),t.jsx(b,{title:"Edit",children:t.jsx(v,{component:x,href:c,children:t.jsx(r,{icon:"solar:pen-bold"})})}),t.jsx(A,{color:"inherit",variant:"contained",loading:!e,loadingIndicator:"Loading…",endIcon:t.jsx(r,{icon:"eva:arrow-ios-downward-fill"}),onClick:n.onOpen,sx:{textTransform:"capitalize"},children:e})]}),t.jsx(k,{open:n.open,onClose:n.onClose,arrow:"top-right",sx:{width:140},children:p.map(i=>t.jsxs(w,{selected:i.value===e,onClick:()=>{n.onClose(),a(i.value)},children:[i.value==="published"&&t.jsx(r,{icon:"eva:cloud-upload-fill"}),i.value==="draft"&&t.jsx(r,{icon:"solar:file-text-bold"}),i.label]},i.value))})]})}function V({title:e}){const[m,c]=f.useState(""),{post:o,postLoading:p,postError:a}=$(e),h=f.useCallback(s=>{c(s)},[]);f.useEffect(()=>{o&&c(o==null?void 0:o.publish)},[o]);const j=t.jsx(U,{}),n=t.jsx(G,{filled:!0,title:`${a==null?void 0:a.message}`,action:t.jsx(P,{component:x,href:d.dashboard.post.root,startIcon:t.jsx(r,{icon:"eva:arrow-ios-back-fill",width:16}),sx:{mt:3},children:"Back to List"}),sx:{py:20}}),i=o&&t.jsxs(t.Fragment,{children:[t.jsx(_,{backLink:d.dashboard.post.root,editLink:d.dashboard.post.edit(`${o==null?void 0:o.title}`),liveLink:d.post.details(`${o==null?void 0:o.title}`),publish:m||"",onChangePublish:h,publishOptions:y}),t.jsx(O,{title:o.title,coverUrl:o.coverUrl}),t.jsxs(l,{sx:{maxWidth:720,mx:"auto",mt:{xs:5,md:10}},children:[t.jsx(u,{variant:"subtitle1",sx:{mb:5},children:o.description}),t.jsx(E,{children:o.content}),t.jsxs(l,{spacing:3,sx:{py:3,borderTop:s=>`dashed 1px ${s.palette.divider}`,borderBottom:s=>`dashed 1px ${s.palette.divider}`},children:[t.jsx(l,{direction:"row",flexWrap:"wrap",spacing:1,children:o.tags.map(s=>t.jsx(R,{label:s,variant:"soft"},s))}),t.jsxs(l,{direction:"row",alignItems:"center",children:[t.jsx(W,{control:t.jsx(z,{defaultChecked:!0,size:"small",color:"error",icon:t.jsx(r,{icon:"solar:heart-bold"}),checkedIcon:t.jsx(r,{icon:"solar:heart-bold"})}),label:T(o.totalFavorites),sx:{mr:1}}),t.jsx(N,{sx:{[`& .${L.avatar}`]:{width:32,height:32}},children:o.favoritePerson.map(s=>t.jsx(I,{alt:s.name,src:s.avatarUrl},s.name))})]})]}),t.jsxs(l,{direction:"row",sx:{mb:3,mt:5},children:[t.jsx(u,{variant:"h4",children:"Comments"}),t.jsxs(u,{variant:"subtitle2",sx:{color:"text.disabled"},children:["(",o.comments.length,")"]})]}),t.jsx(H,{}),t.jsx(B,{sx:{mt:5,mb:2}}),t.jsx(M,{comments:o.comments})]})]});return t.jsxs(D,{maxWidth:!1,children:[p&&j,a&&n,o&&i]})}function Tt(){const e=F(),{title:m}=e;return t.jsxs(t.Fragment,{children:[t.jsx(S,{children:t.jsx("title",{children:" Dashboard: Post Details"})}),t.jsx(V,{title:`${m}`})]})}export{Tt as default};
