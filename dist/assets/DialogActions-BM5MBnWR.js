import{ak as g,aj as p,w as u,a2 as e,r as d,a4 as f,a5 as m,j as x,a7 as D,a8 as y}from"./index-DQumLT9L.js";function A(s){return g("MuiDialogActions",s)}p("MuiDialogActions",["root","spacing"]);const S=["className","disableSpacing"],b=s=>{const{classes:t,disableSpacing:o}=s;return y({root:["root",!o&&"spacing"]},A,t)},j=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,!o.disableSpacing&&t.spacing]}})(({ownerState:s})=>e({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!s.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),R=d.forwardRef(function(t,o){const a=f({props:t,name:"MuiDialogActions"}),{className:n,disableSpacing:l=!1}=a,c=m(a,S),i=e({},a,{disableSpacing:l}),r=b(i);return x.jsx(j,e({className:D(r.root,n),ownerState:i,ref:o},c))});export{R as D};
