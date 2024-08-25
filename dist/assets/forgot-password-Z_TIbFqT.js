import{u as f,a as j,p as i,j as e,S as o,L as F,R as b,e as y,T as n,H as w}from"./index-DQumLT9L.js";import{c as P,a as S}from"./mui-one-time-password-input.es-CrCnoD2A.js";import"./image-BQLAgES7.js";import"./highlight-DjC4x1cy.js";import"./styles-CbjE8cRF.js";import{P as v}from"./new-password-icon-C06ihSJr.js";import{u as R,F as L,o as k,R as E}from"./rhf-text-field-D4JfNq3U.js";import{L as H}from"./LoadingButton-By3CRbWh.js";import"./TextField-Y2PbW22P.js";import"./FormControl-CkY9ZgKl.js";import"./FormLabel-DQT9OHMa.js";import"./Select-DVR-Fv5D.js";import"./Menu-DSL53x_F.js";import"./CircularProgress-D2eR23uJ.js";function I(){const{forgotPassword:r}=f(),l=j(),m=P().shape({email:S().required("Email is required").email("Email must be a valid email address")}),c={email:""},a=R({resolver:k(m),defaultValues:c}),{handleSubmit:d,formState:{isSubmitting:u}}=a,h=d(async t=>{try{await(r==null?void 0:r(t.email));const s=new URLSearchParams({email:t.email}).toString(),g=`${i.auth.firebase.verify}?${s}`;l.push(g)}catch(s){console.error(s)}}),p=e.jsxs(o,{spacing:3,alignItems:"center",children:[e.jsx(E,{name:"email",label:"Email address"}),e.jsx(H,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:u,children:"Send Request"}),e.jsxs(F,{component:b,href:i.auth.firebase.login,color:"inherit",variant:"subtitle2",sx:{alignItems:"center",display:"inline-flex"},children:[e.jsx(y,{icon:"eva:arrow-ios-back-fill",width:16}),"Return to sign in"]})]}),x=e.jsxs(e.Fragment,{children:[e.jsx(v,{sx:{height:96}}),e.jsxs(o,{spacing:1,sx:{mt:3,mb:5},children:[e.jsx(n,{variant:"h3",children:"Forgot your password?"}),e.jsx(n,{variant:"body2",sx:{color:"text.secondary"},children:"Please enter the email address associated with your account and We will email you a link to reset your password."})]})]});return e.jsxs(e.Fragment,{children:[x,e.jsx(L,{methods:a,onSubmit:h,children:p})]})}function M(){return e.jsxs(e.Fragment,{children:[e.jsx(w,{children:e.jsx("title",{children:" Firebase: Forgot Password"})}),e.jsx(I,{})]})}export{M as default};
