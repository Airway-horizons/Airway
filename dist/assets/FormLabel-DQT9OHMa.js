import{aj as F,ak as x,w as b,a2 as i,r as y,a4 as L,a5 as v,ag as C,ah as k,j as m,a7 as q,$ as g,a8 as j}from"./index-DQumLT9L.js";function R(r){return x("MuiFormLabel",r)}const t=F("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),$=["children","className","color","component","disabled","error","filled","focused","required"],M=r=>{const{classes:e,color:d,focused:s,disabled:c,error:a,filled:l,required:n}=r,u={root:["root",`color${g(d)}`,c&&"disabled",a&&"error",l&&"filled",s&&"focused",n&&"required"],asterisk:["asterisk",a&&"error"]};return j(u,R,e)},N=b("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:r},e)=>i({},e.root,r.color==="secondary"&&e.colorSecondary,r.filled&&e.filled)})(({theme:r,ownerState:e})=>i({color:(r.vars||r).palette.text.secondary},r.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${t.focused}`]:{color:(r.vars||r).palette[e.color].main},[`&.${t.disabled}`]:{color:(r.vars||r).palette.text.disabled},[`&.${t.error}`]:{color:(r.vars||r).palette.error.main}})),U=b("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(r,e)=>e.asterisk})(({theme:r})=>({[`&.${t.error}`]:{color:(r.vars||r).palette.error.main}})),_=y.forwardRef(function(e,d){const s=L({props:e,name:"MuiFormLabel"}),{children:c,className:a,component:l="label"}=s,n=v(s,$),u=C(),o=k({props:s,muiFormControl:u,states:["color","required","focused","disabled","error","filled"]}),p=i({},s,{color:o.color||"primary",component:l,disabled:o.disabled,error:o.error,filled:o.filled,focused:o.focused,required:o.required}),f=M(p);return m.jsxs(N,i({as:l,ownerState:p,className:q(f.root,a),ref:d},n,{children:[c,o.required&&m.jsxs(U,{ownerState:p,"aria-hidden":!0,className:f.asterisk,children:[" ","*"]})]}))});export{_ as F,t as f};
