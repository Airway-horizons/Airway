import{ai as v,ah as y,r as s,a3 as j,aD as b,aE as w,ab as P,j as f,a0 as U,a5 as V,a6 as E}from"./index-CHWzIY_h.js";import{a as F}from"./Radio-BvWvllsl.js";import{F as M}from"./FormGroup-ClIldgWr.js";function N(a){return v("MuiRadioGroup",a)}y("MuiRadioGroup",["root","row","error"]);const S=["actions","children","className","defaultValue","name","onChange","value"],_=a=>{const{classes:o,row:t,error:r}=a;return E({root:["root",t&&"row",r&&"error"]},N,o)},D=s.forwardRef(function(o,t){const{actions:r,children:l,className:m,defaultValue:p,name:R,onChange:n,value:h}=o,x=j(o,S),u=s.useRef(null),C=_(o),[i,c]=b({controlled:h,default:p,name:"RadioGroup"});s.useImperativeHandle(r,()=>({focus:()=>{let e=u.current.querySelector("input:not(:disabled):checked");e||(e=u.current.querySelector("input:not(:disabled)")),e&&e.focus()}}),[]);const g=w(t,u),d=P(R),G=s.useMemo(()=>({name:d,onChange(e){c(e.target.value),n&&n(e,e.target.value)},value:i}),[d,n,c,i]);return f.jsx(F.Provider,{value:G,children:f.jsx(M,U({role:"radiogroup",ref:g,className:V(C.root,m)},x,{children:l}))})});export{D as R};
