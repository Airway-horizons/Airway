import{u as P,a as F,r as A,b as T,c as E,P as R,j as e,S as o,T as d,L as c,R as l,p as m,I as H,d as I,e as k,H as q}from"./index-DQumLT9L.js";import{c as B,a as u}from"./mui-one-time-password-input.es-CrCnoD2A.js";import{u as C,F as z,o as M,R as p}from"./rhf-text-field-D4JfNq3U.js";import"./image-BQLAgES7.js";import"./highlight-DjC4x1cy.js";import"./styles-CbjE8cRF.js";import{A as N}from"./Alert-GYr9ZzaS.js";import{L as V}from"./LoadingButton-By3CRbWh.js";import"./new-password-icon-C06ihSJr.js";import"./TextField-Y2PbW22P.js";import"./FormControl-CkY9ZgKl.js";import"./FormLabel-DQT9OHMa.js";import"./Select-DVR-Fv5D.js";import"./Menu-DSL53x_F.js";import"./Close-88YqgUWU.js";import"./CircularProgress-D2eR23uJ.js";function _(){const{login:s}=P(),h=F(),[t,x]=A.useState(""),g=T().get("returnTo"),a=E(),j=B().shape({email:u().required("Email is required").email("Email must be a valid email address"),password:u().required("Password is required")}),b={email:"",password:""},n=C({resolver:M(j),defaultValues:b}),{reset:f,handleSubmit:w,formState:{isSubmitting:y}}=n,S=w(async i=>{try{await(s==null?void 0:s(i.email,i.password)),h.push(g||R)}catch(r){console.error(r),f(),x(typeof r=="string"?r:r.message)}}),v=e.jsxs(o,{spacing:2,sx:{mb:5},children:[e.jsx(d,{variant:"h4",children:"Sign in to Airway Horizons"}),e.jsxs(o,{direction:"row",spacing:.5,children:[e.jsx(d,{variant:"body2",children:"New user?"}),e.jsx(c,{component:l,href:m.auth.supabase.register,variant:"subtitle2",children:"Create an account"})]})]}),L=e.jsxs(o,{spacing:2.5,children:[e.jsx(p,{name:"email",label:"Email address"}),e.jsx(p,{name:"password",label:"Password",type:a.value?"text":"password",InputProps:{endAdornment:e.jsx(H,{position:"end",children:e.jsx(I,{onClick:a.onToggle,edge:"end",children:e.jsx(k,{icon:a.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(c,{component:l,href:m.auth.supabase.forgotPassword,variant:"body2",color:"inherit",underline:"always",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),e.jsx(V,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:y,children:"Login"})]});return e.jsxs(e.Fragment,{children:[v,!!t&&e.jsx(N,{severity:"error",sx:{mb:3},children:t}),e.jsx(z,{methods:n,onSubmit:S,children:L})]})}function te(){return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsx("title",{children:" Supabase: Login"})}),e.jsx(_,{})]})}export{te as default};
