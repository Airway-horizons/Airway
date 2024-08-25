import{j as e,C as T,f as c,T as I,cP as H,S as v,n as O,x as J,t as E,dA as q,B as V,dB as K,m as U,r as m,h as P,c as F,e as j,d as Q,i as _,k as X,d0 as Z,F as ee,A as se,dC as oe,l as N,M as S,D as te,bj as ae,bv as ne,v as re,G as C,p as B,bt as ie,dD as R,dE as le,H as ce}from"./index-DQumLT9L.js";import"./image-BQLAgES7.js";import{U as de}from"./upload-box-lPQfG9bG.js";import{d as f}from"./format-number-DbkgK7Ht.js";import{u as pe}from"./use-copy-to-clipboard-DuH9h7nI.js";import{F as me,a as he,b as L,c as xe,d as W}from"./file-manager-folder-item-DH3Yt_Bl.js";import{C as ge}from"./Checkbox-Sn2x42hf.js";import{A as ue}from"./AvatarGroup-Q7eg2jxd.js";import{u as z,C as G}from"./use-chart-DgHRyZQ0.js";import{C as je}from"./CardHeader-DRcDmvuE.js";import"./preview-multi-file-DLZb0AAl.js";import"./index-SXeguD1C.js";import"./tslib.es6-D0YySzq7.js";import"./fade-o6mfZnVH.js";import"./transition-BJzcwH5q.js";import"./index-C2PO5cNn.js";import"./confirm-dialog-Bc-Xsgi3.js";import"./DialogTitle-BR7MB9Ne.js";import"./dialogTitleClasses-DoSL4AIa.js";import"./DialogContent-BWFRvN7V.js";import"./DialogActions-BM5MBnWR.js";import"./ListItem-CasPjPth.js";import"./ListItemSecondaryAction-C30uJhZz.js";import"./TextField-Y2PbW22P.js";import"./FormControl-CkY9ZgKl.js";import"./FormLabel-DQT9OHMa.js";import"./Select-DVR-Fv5D.js";import"./Menu-DSL53x_F.js";import"./Autocomplete-CrAcmVXV.js";import"./Close-88YqgUWU.js";import"./Chip-BV5fqBH-.js";import"./upload-DB4P0C0v.js";import"./SwitchBase-C1d58dFN.js";function D({title:s,value:r,total:i,icon:h,sx:a,...l}){return e.jsxs(T,{sx:{p:3,...a},...l,children:[e.jsx(c,{component:"img",src:h,sx:{width:48,height:48}}),e.jsx(I,{variant:"h6",sx:{mt:3},children:s}),e.jsx(H,{value:24,variant:"determinate",color:"inherit",sx:{my:2,height:6,"&:before":{bgcolor:"divider",opacity:1}}}),e.jsxs(v,{direction:"row",spacing:.5,justifyContent:"flex-end",sx:{typography:"subtitle2"},children:[e.jsx(c,{sx:{mr:.5,typography:"body2",color:"text.disabled"},children:f(r)}),` / ${f(i)}`]})]})}function ve({sx:s,...r}){const i=O();return e.jsxs(v,{alignItems:"center",sx:{...J({direction:"135deg",startColor:E(i.palette.primary.light,.2),endColor:E(i.palette.primary.main,.2)}),p:5,borderRadius:2,backgroundColor:"common.white",...s},...r,children:[e.jsx(q,{}),e.jsx(V,{size:"large",color:"inherit",variant:"contained",sx:{mt:5,mb:2,color:"common.white",bgcolor:"grey.800","&:hover":{bgcolor:"grey.700"}},children:"Upgrade Plan"}),e.jsx(I,{variant:"caption",sx:{color:"primary.dark",textAlign:"center"},children:"Upgrade your plan and get more space"})]})}function ye({file:s,onDelete:r,sx:i,...h}){var M,A;const{enqueueSnackbar:a}=K(),{copy:l}=pe(),g=U("up","sm"),[d,n]=m.useState(""),t=P(),y=F(),u=F(),x=F(s.isFavorited),o=m.useCallback(b=>{n(b.target.value)},[]),w=m.useCallback(()=>{a("Copied!"),l(s.url)},[l,a,s.url]),k=e.jsxs(c,{sx:{top:0,right:8,position:"absolute",...g&&{flexShrink:0,position:"unset"}},children:[e.jsx(ge,{color:"warning",icon:e.jsx(j,{icon:"eva:star-outline"}),checkedIcon:e.jsx(j,{icon:"eva:star-fill"}),checked:x.value,onChange:x.onToggle}),e.jsx(Q,{color:t.open?"inherit":"default",onClick:t.onOpen,children:e.jsx(j,{icon:"eva:more-vertical-fill"})})]}),Y=e.jsx(_,{onClick:u.onTrue,primary:s.name,secondary:e.jsxs(e.Fragment,{children:[f(s.size),e.jsx(c,{sx:{mx:.75,width:2,height:2,borderRadius:"50%",bgcolor:"currentColor"}}),X(s.modifiedAt)]}),primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{mt:.5,component:"span",alignItems:"center",typography:"caption",color:"text.disabled",display:"inline-flex"}}),$=e.jsx(ue,{max:3,sx:{[`& .${Z.avatar}`]:{width:24,height:24,"&:first-of-type":{fontSize:12}}},children:(M=s.shared)==null?void 0:M.map(b=>e.jsx(ee,{alt:b.name,src:b.avatarUrl},b.id))});return e.jsxs(e.Fragment,{children:[e.jsxs(v,{component:se,variant:"outlined",spacing:1,direction:{xs:"column",sm:"row"},alignItems:{xs:"unset",sm:"center"},sx:{borderRadius:2,bgcolor:"unset",cursor:"pointer",position:"relative",p:{xs:2.5,sm:2},"&:hover":{bgcolor:"background.paper",boxShadow:b=>b.customShadows.z20},...i},...h,children:[e.jsx(oe,{file:s.type,sx:{width:36,height:36,mr:1}}),Y,!!((A=s==null?void 0:s.shared)!=null&&A.length)&&$,k]}),e.jsxs(N,{open:t.open,onClose:t.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(S,{onClick:()=>{t.onClose(),w()},children:[e.jsx(j,{icon:"eva:link-2-fill"}),"Copy Link"]}),e.jsxs(S,{onClick:()=>{t.onClose(),y.onTrue()},children:[e.jsx(j,{icon:"solar:share-bold"}),"Share"]}),e.jsx(te,{sx:{borderStyle:"dashed"}}),e.jsxs(S,{onClick:()=>{t.onClose(),r()},sx:{color:"error.main"},children:[e.jsx(j,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(me,{item:s,favorited:x.value,onFavorite:x.onToggle,onCopyLink:w,open:u.value,onClose:u.onFalse,onDelete:()=>{u.onFalse(),r()}}),e.jsx(he,{open:y.value,shared:s.shared,inviteEmail:d,onChangeInvite:o,onCopyLink:w,onClose:()=>{y.onFalse(),n("")}})]})}function be({title:s,subheader:r,chart:i,...h}){const{labels:a,colors:l,series:g,options:d}=i,n=P(),[t,y]=m.useState("Week"),u=z({chart:{stacked:!0},colors:l,stroke:{width:0},xaxis:{categories:t==="Week"&&a.week||t==="Month"&&a.month||a.year},tooltip:{y:{formatter:o=>f(o)}},plotOptions:{bar:{borderRadius:t==="Week"&&8||t==="Month"&&6||10,columnWidth:"20%"}},...d}),x=m.useCallback(o=>{n.onClose(),y(o)},[n]);return e.jsxs(e.Fragment,{children:[e.jsxs(T,{...h,children:[e.jsx(je,{title:s,subheader:r,action:e.jsxs(ae,{onClick:n.onOpen,sx:{pl:1,py:.5,pr:.5,borderRadius:1,typography:"subtitle2",bgcolor:"background.neutral"},children:[t,e.jsx(j,{width:16,icon:n.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:.5}})]})}),g.map(o=>e.jsx(c,{sx:{mt:3,mx:3},children:o.type===t&&e.jsx(G,{dir:"ltr",type:"bar",series:o.data,options:u,width:"100%",height:364})},o.type))]}),e.jsx(N,{open:n.open,onClose:n.onClose,sx:{width:140},children:g.map(o=>e.jsx(S,{selected:o.type===t,onClick:()=>x(o.type),children:o.type},o.type))})]})}function Ce({data:s,total:r,chart:i,...h}){const a=O(),{colors:l=[a.palette.info.main,a.palette.info.dark],series:g,options:d}=i,n=z({chart:{offsetY:-16,sparkline:{enabled:!0}},grid:{padding:{top:24,bottom:24}},legend:{show:!1},plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"56%"},dataLabels:{name:{offsetY:8},value:{offsetY:-40},total:{label:`Used of ${f(r)} / 50GB`,color:a.palette.text.disabled,fontSize:a.typography.body2.fontSize,fontWeight:a.typography.body2.fontWeight}}}},fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:l[0],opacity:1},{offset:100,color:l[1],opacity:1}]}},...d});return e.jsxs(T,{...h,children:[e.jsx(G,{dir:"ltr",type:"radialBar",series:[g],options:n,width:"100%",height:360}),e.jsx(v,{spacing:3,sx:{px:3,pb:5},children:s.map(t=>e.jsxs(v,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(c,{sx:{width:40,height:40},children:t.icon}),e.jsx(_,{primary:t.name,secondary:`${t.filesCount} files`,secondaryTypographyProps:{mt:.5,component:"span",typography:"caption",color:"text.disabled"}}),e.jsxs(c,{sx:{typography:"subtitle2"},children:[" ",f(t.usedStorage)," "]})]},t.name))})]})}const p=1e9*24,fe={week:["Mon","Tue","Web","Thu","Fri","Sat","Sun"],month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],year:["2018","2019","2020","2021","2022"]};function we(){const s=O(),r=U("down","sm"),i=ne(),[h,a]=m.useState(""),[l,g]=m.useState([]),d=F(),n=F(),t=m.useCallback(o=>{a(o.target.value)},[]),y=m.useCallback(()=>{d.onFalse(),a(""),console.info("CREATE NEW FOLDER")},[d]),u=m.useCallback(o=>{const w=o.map(k=>Object.assign(k,{preview:URL.createObjectURL(k)}));g([...l,...w])},[l]),x=e.jsx(Ce,{total:p,chart:{series:76},data:[{name:"Images",usedStorage:p/2,filesCount:223,icon:e.jsx(c,{component:"img",src:"/assets/icons/files/ic_img.svg"})},{name:"Media",usedStorage:p/5,filesCount:223,icon:e.jsx(c,{component:"img",src:"/assets/icons/files/ic_video.svg"})},{name:"Documents",usedStorage:p/5,filesCount:223,icon:e.jsx(c,{component:"img",src:"/assets/icons/files/ic_document.svg"})},{name:"Other",usedStorage:p/10,filesCount:223,icon:e.jsx(c,{component:"img",src:"/assets/icons/files/ic_file.svg"})}]});return e.jsxs(e.Fragment,{children:[e.jsx(re,{maxWidth:i.themeStretch?!1:"xl",children:e.jsxs(C,{container:!0,spacing:3,children:[r&&e.jsx(C,{xs:12,children:x}),e.jsx(C,{xs:12,sm:6,md:4,children:e.jsx(D,{title:"Dropbox",value:p/10,total:p,icon:"/assets/icons/app/ic_dropbox.svg"})}),e.jsx(C,{xs:12,sm:6,md:4,children:e.jsx(D,{title:"Drive",value:p/5,total:p,icon:"/assets/icons/app/ic_drive.svg"})}),e.jsx(C,{xs:12,sm:6,md:4,children:e.jsx(D,{title:"OneDrive",value:p/2,total:p,icon:"/assets/icons/app/ic_onedrive.svg"})}),e.jsxs(C,{xs:12,md:6,lg:8,children:[e.jsx(be,{title:"Data Activity",chart:{labels:fe,colors:[s.palette.primary.main,s.palette.error.main,s.palette.warning.main,s.palette.text.disabled],series:[{type:"Week",data:[{name:"Images",data:[20,34,48,65,37,48,9]},{name:"Media",data:[10,34,13,26,27,28,18]},{name:"Documents",data:[10,14,13,16,17,18,28]},{name:"Other",data:[5,12,6,7,8,9,48]}]},{type:"Month",data:[{name:"Images",data:[10,34,13,56,77,88,99,77,45,12,43,34]},{name:"Media",data:[10,34,13,56,77,88,99,77,45,12,43,34]},{name:"Documents",data:[10,34,13,56,77,88,99,77,45,12,43,34]},{name:"Other",data:[10,34,13,56,77,88,99,77,45,12,43,34]}]},{type:"Year",data:[{name:"Images",data:[10,34,13,56,77]},{name:"Media",data:[10,34,13,56,77]},{name:"Documents",data:[10,34,13,56,77]},{name:"Other",data:[10,34,13,56,77]}]}]}}),e.jsxs("div",{children:[e.jsx(L,{title:"Folders",link:B.dashboard.fileManager,onOpen:d.onTrue,sx:{mt:5}}),e.jsx(ie,{children:e.jsx(v,{direction:"row",spacing:3,sx:{pb:3},children:R.map(o=>e.jsx(xe,{folder:o,onDelete:()=>console.info("DELETE",o.id),sx:{...R.length>3&&{minWidth:222}}},o.id))})}),e.jsx(L,{title:"Recent Files",link:B.dashboard.fileManager,onOpen:n.onTrue,sx:{mt:2}}),e.jsx(v,{spacing:2,children:le.slice(0,5).map(o=>e.jsx(ye,{file:o,onDelete:()=>console.info("DELETE",o.id)},o.id))})]})]}),e.jsxs(C,{xs:12,md:6,lg:4,children:[e.jsx(de,{onDrop:u,placeholder:e.jsxs(v,{spacing:.5,alignItems:"center",sx:{color:"text.disabled"},children:[e.jsx(j,{icon:"eva:cloud-upload-fill",width:40}),e.jsx(I,{variant:"body2",children:"Upload file"})]}),sx:{mb:3,py:2.5,width:"auto",height:"auto",borderRadius:1.5}}),e.jsx(c,{sx:{display:{xs:"none",sm:"block"}},children:x}),e.jsx(ve,{sx:{mt:3}})]})]})}),e.jsx(W,{open:n.value,onClose:n.onFalse}),e.jsx(W,{open:d.value,onClose:d.onFalse,title:"New Folder",folderName:h,onChangeFolderName:t,onCreate:y})]})}function ts(){return e.jsxs(e.Fragment,{children:[e.jsx(ce,{children:e.jsx("title",{children:" Dashboard: File"})}),e.jsx(we,{})]})}export{ts as default};
