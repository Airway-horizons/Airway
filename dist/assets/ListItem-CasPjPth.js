import{aj as q,ak as K,w as E,a2 as a,cj as Q,bI as C,r as b,a4 as X,a5 as F,ck as R,aJ as Y,ao as Z,aG as tt,a7 as A,j as c,cl as G,a8 as et,bj as st}from"./index-DQumLT9L.js";import{L as at}from"./ListItemSecondaryAction-C30uJhZz.js";function ot(t){return K("MuiListItem",t)}const l=q("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),nt=["className"],it=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],rt=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},ct=t=>{const{alignItems:e,button:s,classes:i,dense:d,disabled:p,disableGutters:f,disablePadding:y,divider:x,hasSecondaryAction:u,selected:I}=t;return et({root:["root",d&&"dense",!f&&"gutters",!y&&"padding",x&&"divider",p&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",u&&"secondaryAction",I&&"selected"],container:["container"]},ot,i)},lt=E("div",{name:"MuiListItem",slot:"Root",overridesResolver:rt})(({theme:t,ownerState:e})=>a({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&a({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${Q.root}`]:{paddingRight:48}},{[`&.${l.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${l.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:C(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${l.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:C(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${l.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${l.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:C(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:C(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),dt=E("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),gt=b.forwardRef(function(e,s){const i=X({props:e,name:"MuiListItem"}),{alignItems:d="center",autoFocus:p=!1,button:f=!1,children:y,className:x,component:u,components:I={},componentsProps:j={},ContainerComponent:O="li",ContainerProps:{className:_}={},dense:k=!1,disabled:N=!1,disableGutters:P=!1,disablePadding:U=!1,divider:D=!1,focusVisibleClassName:T,secondaryAction:S,selected:w=!1,slotProps:z={},slots:H={}}=i,J=F(i.ContainerProps,nt),W=F(i,it),M=b.useContext(R),L=b.useMemo(()=>({dense:k||M.dense||!1,alignItems:d,disableGutters:P}),[d,M.dense,k,P]),$=b.useRef(null);Y(()=>{p&&$.current&&$.current.focus()},[p]);const r=b.Children.toArray(y),V=r.length&&Z(r[r.length-1],["ListItemSecondaryAction"]),m=a({},i,{alignItems:d,autoFocus:p,button:f,dense:L.dense,disabled:N,disableGutters:P,disablePadding:U,divider:D,hasSecondaryAction:V,selected:w}),h=ct(m),B=tt($,s),v=H.root||I.Root||lt,g=z.root||j.root||{},o=a({className:A(h.root,g.className,x),disabled:N},W);let n=u||"li";return f&&(o.component=u||"div",o.focusVisibleClassName=A(l.focusVisible,T),n=st),V?(n=!o.component&&!u?"div":n,O==="li"&&(n==="li"?n="div":o.component==="li"&&(o.component="div")),c.jsx(R.Provider,{value:L,children:c.jsxs(dt,a({as:O,className:A(h.container,_),ref:B,ownerState:m},J,{children:[c.jsx(v,a({},g,!G(v)&&{as:n,ownerState:a({},m,g.ownerState)},o,{children:r})),r.pop()]}))})):c.jsx(R.Provider,{value:L,children:c.jsxs(v,a({},g,{as:n,ref:B},!G(v)&&{ownerState:a({},m,g.ownerState)},o,{children:[r,S&&c.jsx(at,{children:S})]}))})});export{gt as L};
