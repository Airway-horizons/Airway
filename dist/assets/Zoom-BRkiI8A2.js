import{r as c,n as W,a3 as q,aE as A,j as B,a0 as E,bP as D,d1 as G,d2 as g}from"./index-CHWzIY_h.js";const H=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],J={entering:{transform:"none"},entered:{transform:"none"}},N=c.forwardRef(function(l,p){const e=W(),y={enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen},{addEndListener:f,appear:T=!0,children:s,easing:m,in:x,onEnter:u,onEntered:P,onEntering:R,onExit:h,onExited:L,onExiting:j,style:a,timeout:d=y,TransitionComponent:v=D}=l,w=q(l,H),r=c.useRef(null),b=A(r,s.ref,p),o=n=>t=>{if(n){const i=r.current;t===void 0?n(i):n(i,t)}},C=o(R),Z=o((n,t)=>{G(n);const i=g({style:a,timeout:d,easing:m},{mode:"enter"});n.style.webkitTransition=e.transitions.create("transform",i),n.style.transition=e.transitions.create("transform",i),u&&u(n,t)}),_=o(P),k=o(j),S=o(n=>{const t=g({style:a,timeout:d,easing:m},{mode:"exit"});n.style.webkitTransition=e.transitions.create("transform",t),n.style.transition=e.transitions.create("transform",t),h&&h(n)}),z=o(L),F=n=>{f&&f(r.current,n)};return B.jsx(v,E({appear:T,in:x,nodeRef:r,onEnter:Z,onEntered:_,onEntering:C,onExit:S,onExited:z,onExiting:k,addEndListener:F,timeout:d},w,{children:(n,t)=>c.cloneElement(s,E({style:E({transform:"scale(0)",visibility:n==="exited"&&!x?"hidden":void 0},J[n],a,s.props.style),ref:b},t))}))});export{N as Z};
