import{u as F,r as A,a as P,c as q,p,j as e,S as t,T as l,L as m,R as L,I as N,d as E,e as I,H as T}from"./index-DQumLT9L.js";import{c as k,a}from"./mui-one-time-password-input.es-CrCnoD2A.js";import"./image-BQLAgES7.js";import"./highlight-DjC4x1cy.js";import"./styles-CbjE8cRF.js";import"./new-password-icon-C06ihSJr.js";import{u as B,F as H,o as $,R as i}from"./rhf-text-field-D4JfNq3U.js";import{A as C}from"./Alert-GYr9ZzaS.js";import{L as M}from"./LoadingButton-By3CRbWh.js";import"./TextField-Y2PbW22P.js";import"./FormControl-CkY9ZgKl.js";import"./FormLabel-DQT9OHMa.js";import"./Select-DVR-Fv5D.js";import"./Menu-DSL53x_F.js";import"./Close-88YqgUWU.js";import"./CircularProgress-D2eR23uJ.js";function V(){const{register:o}=F(),[c,u]=A.useState(""),x=P(),n=q(),h=k().shape({firstName:a().required("First name required"),lastName:a().required("Last name required"),email:a().required("Email is required").email("Email must be a valid email address"),password:a().required("Password is required")}),g={firstName:"",lastName:"",email:"",password:""},d=B({resolver:$(h),defaultValues:g}),{reset:y,handleSubmit:j,formState:{isSubmitting:f}}=d,b=j(async s=>{try{await(o==null?void 0:o(s.email,s.password,s.firstName,s.lastName));const r=new URLSearchParams({email:s.email}).toString(),R=`${p.auth.amplify.verify}?${r}`;x.push(R)}catch(r){console.error(r),y(),u(typeof r=="string"?r:r.message)}}),v=e.jsxs(t,{spacing:2,sx:{mb:5,position:"relative"},children:[e.jsx(l,{variant:"h4",children:"Get started absolutely free"}),e.jsxs(t,{direction:"row",spacing:.5,children:[e.jsx(l,{variant:"body2",children:" Already have an account? "}),e.jsx(m,{href:p.auth.amplify.login,component:L,variant:"subtitle2",children:"Sign in"})]})]}),w=e.jsxs(l,{component:"div",sx:{mt:2.5,textAlign:"center",typography:"caption",color:"text.secondary"},children:["By signing up, I agree to ",e.jsx(m,{underline:"always",color:"text.primary",children:"Terms of Service"})," and ",e.jsx(m,{underline:"always",color:"text.primary",children:"Privacy Policy"}),"."]}),S=e.jsxs(t,{spacing:2.5,children:[e.jsxs(t,{direction:{xs:"column",sm:"row"},spacing:2,children:[e.jsx(i,{name:"firstName",label:"First name"}),e.jsx(i,{name:"lastName",label:"Last name"})]}),e.jsx(i,{name:"email",label:"Email address"}),e.jsx(i,{name:"password",label:"Password",type:n.value?"text":"password",InputProps:{endAdornment:e.jsx(N,{position:"end",children:e.jsx(E,{onClick:n.onToggle,edge:"end",children:e.jsx(I,{icon:n.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(M,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:f,children:"Create account"})]});return e.jsxs(e.Fragment,{children:[v,!!c&&e.jsx(C,{severity:"error",sx:{mb:3},children:c}),e.jsx(H,{methods:d,onSubmit:b,children:S}),w]})}function te(){return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx("title",{children:" Amplify: Register"})}),e.jsx(V,{})]})}export{te as default};
