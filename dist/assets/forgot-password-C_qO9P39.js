import{j as e,S as o,e as t,L as h,R as x,p as g,T as i,H as f}from"./index-DQumLT9L.js";import{c as j,a as w}from"./mui-one-time-password-input.es-CrCnoD2A.js";import"./image-BQLAgES7.js";import"./highlight-DjC4x1cy.js";import"./styles-CbjE8cRF.js";import{P as y}from"./new-password-icon-C06ihSJr.js";import{u as F,F as b,o as P,R as v}from"./rhf-text-field-D4JfNq3U.js";import{L as S}from"./LoadingButton-By3CRbWh.js";import"./TextField-Y2PbW22P.js";import"./FormControl-CkY9ZgKl.js";import"./FormLabel-DQT9OHMa.js";import"./Select-DVR-Fv5D.js";import"./Menu-DSL53x_F.js";import"./CircularProgress-D2eR23uJ.js";function R(){const a=j().shape({email:w().required("Email is required").email("Email must be a valid email address")}),n={email:""},s=F({resolver:P(a),defaultValues:n}),{handleSubmit:l,formState:{isSubmitting:m}}=s,d=l(async p=>{try{await new Promise(r=>setTimeout(r,500)),console.info("DATA",p)}catch(r){console.error(r)}}),c=e.jsxs(o,{spacing:3,alignItems:"center",children:[e.jsx(v,{name:"email",label:"Email address"}),e.jsx(S,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:m,endIcon:e.jsx(t,{icon:"eva:arrow-ios-forward-fill"}),sx:{justifyContent:"space-between",pl:2,pr:1.5},children:"Send Request"}),e.jsxs(h,{component:x,href:g.authDemo.modern.login,color:"inherit",variant:"subtitle2",sx:{alignItems:"center",display:"inline-flex"},children:[e.jsx(t,{icon:"eva:arrow-ios-back-fill",width:16}),"Return to sign in"]})]}),u=e.jsxs(e.Fragment,{children:[e.jsx(y,{sx:{height:96}}),e.jsxs(o,{spacing:1,sx:{mt:3,mb:5},children:[e.jsx(i,{variant:"h3",children:"Forgot your password?"}),e.jsx(i,{variant:"body2",sx:{color:"text.secondary"},children:"Please enter the email address associated with your account and We will email you a link to reset your password."})]})]});return e.jsxs(b,{methods:s,onSubmit:d,children:[u,c]})}function z(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:e.jsx("title",{children:" Auth Classic: Forgot Password"})}),e.jsx(R,{})]})}export{z as default};
