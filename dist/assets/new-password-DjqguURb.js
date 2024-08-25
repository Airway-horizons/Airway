import{u as A,a as E,b as L,c as H,p,r as T,j as e,S as h,I as x,d as w,e as n,T as i,L as f,R as N,H as $}from"./index-DQumLT9L.js";import{c as B,a,b as V}from"./mui-one-time-password-input.es-CrCnoD2A.js";import"./image-BQLAgES7.js";import"./highlight-DjC4x1cy.js";import"./styles-CbjE8cRF.js";import{S as W}from"./new-password-icon-C06ihSJr.js";import{u as z,R as l,F as D,o as O}from"./rhf-text-field-D4JfNq3U.js";import{u as U}from"./use-countdown-DRgN5Ehl.js";import{R as G}from"./rhf-code-2NtMsYI6.js";import{L as J}from"./LoadingButton-By3CRbWh.js";import"./TextField-Y2PbW22P.js";import"./FormControl-CkY9ZgKl.js";import"./FormLabel-DQT9OHMa.js";import"./Select-DVR-Fv5D.js";import"./Menu-DSL53x_F.js";import"./CircularProgress-D2eR23uJ.js";function K(){const{newPassword:t,forgotPassword:o}=A(),j=E(),b=L().get("email"),s=H(),{countdown:g,counting:d,startCountdown:c}=U(60),y=B().shape({code:a().min(6,"Code must be at least 6 characters").required("Code is required"),email:a().required("Email is required").email("Email must be a valid email address"),password:a().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:a().required("Confirm password is required").oneOf([V("password")],"Passwords must match")}),v={code:"",email:b||"",password:"",confirmPassword:""},m=z({mode:"onChange",resolver:O(y),defaultValues:v}),{watch:P,handleSubmit:C,formState:{isSubmitting:R}}=m,u=P(),S=C(async r=>{try{await(t==null?void 0:t(r.email,r.code,r.password)),j.push(p.auth.amplify.login)}catch(q){console.error(q)}}),F=T.useCallback(async()=>{try{c(),await(o==null?void 0:o(u.email))}catch(r){console.error(r)}},[o,c,u.email]),I=e.jsxs(h,{spacing:3,alignItems:"center",children:[e.jsx(l,{name:"email",label:"Email",placeholder:"example@gmail.com",InputLabelProps:{shrink:!0}}),e.jsx(G,{name:"code"}),e.jsx(l,{name:"password",label:"Password",type:s.value?"text":"password",InputProps:{endAdornment:e.jsx(x,{position:"end",children:e.jsx(w,{onClick:s.onToggle,edge:"end",children:e.jsx(n,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(l,{name:"confirmPassword",label:"Confirm New Password",type:s.value?"text":"password",InputProps:{endAdornment:e.jsx(x,{position:"end",children:e.jsx(w,{onClick:s.onToggle,edge:"end",children:e.jsx(n,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(J,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:R,children:"Update Password"}),e.jsxs(i,{variant:"body2",children:["Don’t have a code? ",e.jsxs(f,{variant:"subtitle2",onClick:F,sx:{cursor:"pointer",...d&&{color:"text.disabled",pointerEvents:"none"}},children:["Resend code ",d&&`(${g}s)`]})]}),e.jsxs(f,{component:N,href:p.auth.amplify.login,color:"inherit",variant:"subtitle2",sx:{alignItems:"center",display:"inline-flex"},children:[e.jsx(n,{icon:"eva:arrow-ios-back-fill",width:16}),"Return to sign in"]})]}),k=e.jsxs(e.Fragment,{children:[e.jsx(W,{sx:{height:96}}),e.jsxs(h,{spacing:1,sx:{mt:3,mb:5},children:[e.jsx(i,{variant:"h3",children:"Request sent successfully!"}),e.jsxs(i,{variant:"body2",sx:{color:"text.secondary"},children:["We've sent a 6-digit confirmation email to your email.",e.jsx("br",{}),"Please enter the code in below box to verify your email."]})]})]});return e.jsxs(e.Fragment,{children:[k,e.jsx(D,{methods:m,onSubmit:S,children:I})]})}function me(){return e.jsxs(e.Fragment,{children:[e.jsx($,{children:e.jsx("title",{children:" Amplify: New Password"})}),e.jsx(K,{})]})}export{me as default};
