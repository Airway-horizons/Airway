import{al as D,w as k,$ as c,a2 as o,am as R,r as N,a4 as w,a5 as z,j as v,a7 as E,a8 as F,an as I}from"./index-DQumLT9L.js";const K=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,P,$,b,S;const a=44,U=D(P||(P=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),W=D($||($=l`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),B=r=>{const{classes:s,variant:e,color:t,disableShrink:d}=r,u={root:["root",e,`color${c(t)}`],svg:["svg"],circle:["circle",`circle${c(e)}`,d&&"circleDisableShrink"]};return F(u,I,s)},G=k("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.root,s[e.variant],s[`color${c(e.color)}`]]}})(({ownerState:r,theme:s})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:s.transitions.create("transform")},r.color!=="inherit"&&{color:(s.vars||s).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&R(b||(b=l`
      animation: ${0} 1.4s linear infinite;
    `),U)),L=k("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,s)=>s.svg})({display:"block"}),V=k("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.circle,s[`circle${c(e.variant)}`],e.disableShrink&&s.circleDisableShrink]}})(({ownerState:r,theme:s})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:s.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&R(S||(S=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),W)),q=N.forwardRef(function(s,e){const t=w({props:s,name:"MuiCircularProgress"}),{className:d,color:u="primary",disableShrink:_=!1,size:p=40,style:j,thickness:i=3.6,value:m=0,variant:x="indeterminate"}=t,M=z(t,K),n=o({},t,{color:u,disableShrink:_,size:p,thickness:i,value:m,variant:x}),f=B(n),h={},g={},y={};if(x==="determinate"){const C=2*Math.PI*((a-i)/2);h.strokeDasharray=C.toFixed(3),y["aria-valuenow"]=Math.round(m),h.strokeDashoffset=`${((100-m)/100*C).toFixed(3)}px`,g.transform="rotate(-90deg)"}return v.jsx(G,o({className:E(f.root,d),style:o({width:p,height:p},g,j),ownerState:n,ref:e,role:"progressbar"},y,M,{children:v.jsx(L,{className:f.svg,ownerState:n,viewBox:`${a/2} ${a/2} ${a} ${a}`,children:v.jsx(V,{className:f.circle,style:h,ownerState:n,cx:a,cy:a,r:(a-i)/2,fill:"none",strokeWidth:i})})}))});export{q as C};
