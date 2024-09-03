import{j as e,d as m,e as a,S as r,E as T,T as g,f as s,B as y,L as v,C as f,D as u,bq as I,i as C,h as k,R as D,cm as O,k as p,l as P,M as A,z as B,bs as N,dW as F,r as w,v as L,p as R,dX as E,G as b,H}from"./index-CHWzIY_h.js";import{u as $}from"./use-params-Ruk0b8pO.js";import"./order-list-view-2vF1PSXH.js";import{C as j}from"./CardHeader-zwIgXzya.js";import{f as h}from"./format-number-96TBaQmS.js";import{T as G,t as W,a as z,b as U,c as _,d as q,e as M}from"./TimelineItem-8uy1UrNH.js";import"./confirm-dialog-CyfCw_CU.js";import"./DialogTitle-C_SRpzK8.js";import"./dialogTitleClasses-rihN9atc.js";import"./DialogContent-B_ILtxE2.js";import"./DialogActions-C_grkc2-.js";import"./custom-breadcrumbs-BWMfD0bW.js";import"./table-pagination-custom-BCae77lO.js";import"./Checkbox-B35SLibW.js";import"./SwitchBase-w5r_ZJ4h.js";import"./TablePagination-D9c1xCVu.js";import"./FirstPage-BjCkeorD.js";import"./TableCell-D4saCj9C.js";import"./Select-adab-cTC.js";import"./Menu-BrkaIn3_.js";import"./FormControlLabel-DQmV4Ycc.js";import"./Switch-Cl_mmple.js";import"./table-no-data-BEBrfIpb.js";import"./empty-content-BRkTeaxv.js";import"./TableHead-8VNX44je.js";import"./table-empty-rows-DN-cgPya.js";import"./table-head-custom-ByRZp2j1.js";import"./DatePicker-GyzQXiGe.js";import"./index-BH5ek-XH.js";import"./TextField-kmKisOi-.js";import"./FormControl-tNAPYpQr.js";import"./FormLabel-D6us_HmJ.js";import"./ListItem-D5Uy0MlJ.js";import"./ListItemSecondaryAction-B2EnEDzn.js";import"./Chip-fxcrreIl.js";import"./utils-DnzRrJTV.js";function V({customer:i,delivery:t,payment:n,shippingAddress:o}){const c=e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Customer Info",action:e.jsx(m,{children:e.jsx(a,{icon:"solar:pen-bold"})})}),e.jsxs(r,{direction:"row",sx:{p:3},children:[e.jsx(T,{alt:i.name,src:i.avatarUrl,sx:{width:48,height:48,mr:2}}),e.jsxs(r,{spacing:.5,alignItems:"flex-start",sx:{typography:"body2"},children:[e.jsx(g,{variant:"subtitle2",children:i.name}),e.jsx(s,{sx:{color:"text.secondary"},children:i.email}),e.jsxs(s,{children:["IP Address:",e.jsx(s,{component:"span",sx:{color:"text.secondary",ml:.25},children:i.ipAddress})]}),e.jsx(y,{size:"small",color:"error",startIcon:e.jsx(a,{icon:"mingcute:add-line"}),sx:{mt:1},children:"Add to Blacklist"})]})]})]}),x=e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Delivery",action:e.jsx(m,{children:e.jsx(a,{icon:"solar:pen-bold"})})}),e.jsxs(r,{spacing:1.5,sx:{p:3,typography:"body2"},children:[e.jsxs(r,{direction:"row",alignItems:"center",children:[e.jsx(s,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Ship by"}),t.shipBy]}),e.jsxs(r,{direction:"row",alignItems:"center",children:[e.jsx(s,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Speedy"}),t.speedy]}),e.jsxs(r,{direction:"row",alignItems:"center",children:[e.jsx(s,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Tracking No."}),e.jsx(v,{underline:"always",color:"inherit",children:t.trackingNumber})]})]})]}),l=e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Shipping",action:e.jsx(m,{children:e.jsx(a,{icon:"solar:pen-bold"})})}),e.jsxs(r,{spacing:1.5,sx:{p:3,typography:"body2"},children:[e.jsxs(r,{direction:"row",children:[e.jsx(s,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Address"}),o.fullAddress]}),e.jsxs(r,{direction:"row",children:[e.jsx(s,{component:"span",sx:{color:"text.secondary",width:120,flexShrink:0},children:"Phone number"}),o.phoneNumber]})]})]}),d=e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Payment",action:e.jsx(m,{children:e.jsx(a,{icon:"solar:pen-bold"})})}),e.jsxs(r,{direction:"row",alignItems:"center",sx:{p:3,typography:"body2"},children:[e.jsx(s,{component:"span",sx:{color:"text.secondary",flexGrow:1},children:"Phone number"}),n.cardNumber,e.jsx(a,{icon:"logos:mastercard",width:24,sx:{ml:.5}})]})]});return e.jsxs(f,{children:[c,e.jsx(u,{sx:{borderStyle:"dashed"}}),x,e.jsx(u,{sx:{borderStyle:"dashed"}}),l,e.jsx(u,{sx:{borderStyle:"dashed"}}),d]})}function X({items:i,taxes:t,shipping:n,discount:o,subTotal:c,totalAmount:x}){const l=e.jsxs(r,{spacing:2,alignItems:"flex-end",sx:{my:3,textAlign:"right",typography:"body2"},children:[e.jsxs(r,{direction:"row",children:[e.jsx(s,{sx:{color:"text.secondary"},children:"Subtotal"}),e.jsx(s,{sx:{width:160,typography:"subtitle2"},children:h(c)||"-"})]}),e.jsxs(r,{direction:"row",children:[e.jsx(s,{sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(s,{sx:{width:160,...n&&{color:"error.main"}},children:n?`- ${h(n)}`:"-"})]}),e.jsxs(r,{direction:"row",children:[e.jsx(s,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(s,{sx:{width:160,...o&&{color:"error.main"}},children:o?`- ${h(o)}`:"-"})]}),e.jsxs(r,{direction:"row",children:[e.jsx(s,{sx:{color:"text.secondary"},children:"Taxes"}),e.jsx(s,{sx:{width:160},children:t?h(t):"-"})]}),e.jsxs(r,{direction:"row",sx:{typography:"subtitle1"},children:[e.jsx(s,{children:"Total"}),e.jsx(s,{sx:{width:160},children:h(x)||"-"})]})]});return e.jsxs(f,{children:[e.jsx(j,{title:"Details",action:e.jsx(m,{children:e.jsx(a,{icon:"solar:pen-bold"})})}),e.jsxs(r,{sx:{px:3},children:[e.jsx(I,{children:i.map(d=>e.jsxs(r,{direction:"row",alignItems:"center",sx:{py:3,minWidth:640,borderBottom:S=>`dashed 2px ${S.palette.background.neutral}`},children:[e.jsx(T,{src:d.coverUrl,variant:"rounded",sx:{width:48,height:48,mr:2}}),e.jsx(C,{primary:d.name,secondary:d.sku,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs(s,{sx:{typography:"body2"},children:["x",d.quantity]}),e.jsx(s,{sx:{width:110,textAlign:"right",typography:"subtitle2"},children:h(d.price)})]},d.id))}),l]})]})}function J({status:i,backLink:t,createdAt:n,orderNumber:o,statusOptions:c,onChangeStatus:x}){const l=k();return e.jsxs(e.Fragment,{children:[e.jsxs(r,{spacing:3,direction:{xs:"column",md:"row"},sx:{mb:{xs:3,md:5}},children:[e.jsxs(r,{spacing:1,direction:"row",alignItems:"flex-start",children:[e.jsx(m,{component:D,href:t,children:e.jsx(a,{icon:"eva:arrow-ios-back-fill"})}),e.jsxs(r,{spacing:.5,children:[e.jsxs(r,{spacing:1,direction:"row",alignItems:"center",children:[e.jsxs(g,{variant:"h4",children:[" Order ",o," "]}),e.jsx(O,{variant:"soft",color:i==="completed"&&"success"||i==="pending"&&"warning"||i==="cancelled"&&"error"||"default",children:i})]}),e.jsx(g,{variant:"body2",sx:{color:"text.disabled"},children:p(n)})]})]}),e.jsxs(r,{flexGrow:1,spacing:1.5,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[e.jsx(y,{color:"inherit",variant:"outlined",endIcon:e.jsx(a,{icon:"eva:arrow-ios-downward-fill"}),onClick:l.onOpen,sx:{textTransform:"capitalize"},children:i}),e.jsx(y,{color:"inherit",variant:"outlined",startIcon:e.jsx(a,{icon:"solar:printer-minimalistic-bold"}),children:"Print"}),e.jsx(y,{color:"inherit",variant:"contained",startIcon:e.jsx(a,{icon:"solar:pen-bold"}),children:"Edit"})]})]}),e.jsx(P,{open:l.open,onClose:l.onClose,arrow:"top-right",sx:{width:140},children:c.map(d=>e.jsx(A,{selected:d.value===i,onClick:()=>{l.onClose(),x(d.value)},children:d.label},d.value))})]})}function K({history:i}){const t=e.jsxs(r,{spacing:2,component:B,variant:"outlined",sx:{p:2.5,minWidth:260,flexShrink:0,borderRadius:2,typography:"body2",borderStyle:"dashed"},children:[e.jsxs(r,{spacing:.5,children:[e.jsx(s,{sx:{color:"text.disabled"},children:"Order time"}),p(i.orderTime)]}),e.jsxs(r,{spacing:.5,children:[e.jsx(s,{sx:{color:"text.disabled"},children:"Payment time"}),p(i.orderTime)]}),e.jsxs(r,{spacing:.5,children:[e.jsx(s,{sx:{color:"text.disabled"},children:"Delivery time for the carrier"}),p(i.orderTime)]}),e.jsxs(r,{spacing:.5,children:[e.jsx(s,{sx:{color:"text.disabled"},children:"Completion time"}),p(i.orderTime)]})]}),n=e.jsx(G,{sx:{p:0,m:0,[`& .${W.root}:before`]:{flex:0,padding:0}},children:i.timeline.map((o,c)=>{const x=c===0,l=c===i.timeline.length-1;return e.jsxs(z,{children:[e.jsxs(U,{children:[e.jsx(_,{color:x&&"primary"||"grey"}),l?null:e.jsx(q,{})]}),e.jsxs(M,{children:[e.jsx(g,{variant:"subtitle2",children:o.title}),e.jsx(s,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:p(o.time)})]})]},o.title)})});return e.jsxs(f,{children:[e.jsx(j,{title:"History"}),e.jsxs(r,{spacing:3,alignItems:{md:"flex-start"},direction:{xs:"column-reverse",md:"row"},sx:{p:3},children:[n,t]})]})}function Q({id:i}){const t=N(),n=F.filter(l=>l.id===i)[0],[o,c]=w.useState(n.status),x=w.useCallback(l=>{c(l)},[]);return e.jsxs(L,{maxWidth:t.themeStretch?!1:"lg",children:[e.jsx(J,{backLink:R.dashboard.order.root,orderNumber:n.orderNumber,createdAt:n.createdAt,status:o,onChangeStatus:x,statusOptions:E}),e.jsxs(b,{container:!0,spacing:3,children:[e.jsx(b,{xs:12,md:8,children:e.jsxs(r,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:[e.jsx(X,{items:n.items,taxes:n.taxes,shipping:n.shipping,discount:n.discount,subTotal:n.subTotal,totalAmount:n.totalAmount}),e.jsx(K,{history:n.history})]})}),e.jsx(b,{xs:12,md:4,children:e.jsx(V,{customer:n.customer,delivery:n.delivery,payment:n.payment,shippingAddress:n.shippingAddress})})]})]})}function Fe(){const i=$(),{id:t}=i;return e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx("title",{children:" Dashboard: Order Details"})}),e.jsx(Q,{id:`${t}`})]})}export{Fe as default};
