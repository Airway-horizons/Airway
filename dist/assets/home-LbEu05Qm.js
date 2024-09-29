import{u as Ne,m as He,r as u,M as he,i as ce,a as Re,f as me,b as Pe,c as Fe,j as e,B as a,d as o,e as ue,p as ge,g as ie,h as W,k as xe,S as f,H as fe,T as h,I as G,l as ve,n as S,C as k,G as H,s as j,o as ne,q as ye,P as ze,L as De,t as Ee,v as We,w as $e,x as Oe,_ as _e,y as R,z as Ve,A as Be,D as Le,E as Ge,F as qe,J as pe,K as Ke,N as Q,O as Z,Q as ee,R as Je,U as N,V as Xe}from"./index-BMnZ0nBx.js";import{v as c}from"./fade-o6mfZnVH.js";import{T as Ye,s as Qe}from"./helper-BDFWxGi2.js";import{M as Ze}from"./motion-container-x374eZv-.js";import{B as je}from"./Button-CdxFkIC7.js";import{M as se}from"./motion-viewport-dG_QxUme.js";import{C as q}from"./Card-CpaL27fk.js";import{I as et}from"./image-DrmBSAw3.js";import{T as tt}from"./text-max-line-CsTbK1JJ.js";import{u as be,C as we,a as ke}from"./carousel-arrow-index-CBaXSNrE.js";import{C as K}from"./CardContent-CBl34Q8i.js";import{R as it}from"./Rating-BZaTl48t.js";import{A as nt}from"./Avatar-BrxJ4cDj.js";import{L as st}from"./ListItemText-BH30Ujfw.js";import{t as rt}from"./helper-BsRYrhP4.js";import"./transition-BJzcwH5q.js";import"./format-number-6QSOVhfj.js";import"./styles-Cvrm-AEK.js";import"./use-popover-DWdZlYvU.js";import"./index-DMXsK-wS.js";import"./createSvgIcon-B3Y5J_4Q.js";import"./useSlot-BWk0i0tv.js";function ot(t){const i=Ne(()=>He(t)),{isStatic:n}=u.useContext(he);if(n){const[,r]=u.useState(t);u.useEffect(()=>i.on("change",r),[])}return i}function at(t,i={}){const{isStatic:n}=u.useContext(he),r=u.useRef(null),s=ot(ce(t)?t.get():t),p=()=>{r.current&&r.current.stop()};return u.useInsertionEffect(()=>s.attach((g,d)=>{if(n)return d(g);if(p(),r.current=Re({keyframes:[s.get(),g],velocity:s.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...i,onUpdate:d}),!me.isProcessing){const v=performance.now()-me.timestamp;v<30&&(r.current.time=Pe(v))}return s.get()},p),[JSON.stringify(i)]),Fe(()=>{if(ce(t))return t.on("change",g=>s.set(parseFloat(g)))},[s]),s}function lt({color:t="primary",size:i=3,scrollYProgress:n,sx:r,...s}){const p=at(n,{stiffness:100,damping:30,restDelta:.001});return e.jsx(a,{component:o.div,sx:{top:0,left:0,right:0,height:i,zIndex:1999,position:"fixed",transformOrigin:"0%",bgcolor:"text.primary",...t!=="inherit"&&{background:g=>`linear-gradient(135deg, ${g.palette[t].light} 0%, ${g.palette[t].main} 100%)`},...r},style:{scaleX:p},...s})}function dt({tours:t}){const i=ue(),n=u.useCallback(r=>{i.push(ge.packageDetails(r))},[i]);return e.jsx(a,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:t==null?void 0:t.map(r=>e.jsx(Ye,{tour:r,onView:()=>n(r.id)},r.id))})}const ct=j("div")(({theme:t})=>({...ne({color:S(t.palette.background.default,t.palette.mode==="light"?.9:.94),imgUrl:"/assets/background/overlay_3.jpg"}),width:"100%",height:"100vh",position:"relative",[t.breakpoints.up("md")]:{top:0,left:0,position:"fixed"}})),mt=j("div")(({theme:t})=>({height:"100%",overflow:"hidden",position:"relative",[t.breakpoints.up("md")]:{marginTop:fe.H_DESKTOP_OFFSET}})),pt=j(o.h1)(({theme:t})=>({padding:0,marginTop:0,lineHeight:1,fontWeight:900,marginBottom:0,letterSpacing:0,textAlign:"center",backgroundSize:"400%",fontSize:`${64/16}rem`,fontFamily:t.typography.fontSecondaryFamily,color:"#0f5e55"})),ht=j("div")(({theme:t})=>({top:-80,width:480,right:-80,height:480,borderRadius:"50%",position:"absolute",filter:"blur(100px)",WebkitFilter:"blur(100px)",backgroundColor:S(t.palette.primary.darker,.12)})),ut=j("div")(({theme:t})=>({height:400,bottom:-200,left:"10%",right:"10%",borderRadius:"50%",position:"absolute",filter:"blur(100px)",WebkitFilter:"blur(100px)",backgroundColor:S(t.palette.primary.darker,.12)})),L=j("div")(({opacity:t=1,anchor:i="left",theme:n})=>({...ye({opacity:t,color:n.palette.background.default}),zIndex:9,bottom:0,height:80,width:"50%",position:"absolute",clipPath:"polygon(0% 0%, 100% 100%, 0% 100%)",...i==="left"&&{left:0,...n.direction==="rtl"&&{transform:"scale(-1, 1)"}},...i==="right"&&{right:0,transform:"scaleX(-1)",...n.direction==="rtl"&&{transform:"scaleX(1)"}}}));function gt(){var $;const t=ie("up","md"),i=W(),n=ue(),r=u.useRef(null),{scrollY:s}=xe(),[p,g]=u.useState(0),d=i.palette.mode==="light",v=u.useCallback(()=>{let y=0;r.current&&(y=r.current.offsetHeight),s.on("change",J=>{const X=J*100/y;g(Math.floor(X))})},[s]);u.useEffect(()=>{v()},[v]);const l={repeatType:"loop",ease:"linear",duration:60*4,repeat:1/0},m=1-p/100,x=p>120,C=e.jsxs(f,{alignItems:"self-end",justifyContent:"center",sx:{height:1,mx:"auto",maxWidth:480,opacity:m>0?m:0,mt:{md:`-${fe.H_DESKTOP+p*2.5}px`}},children:[e.jsx(o.div,{variants:c().in,children:e.jsx(pt,{animate:{backgroundPosition:"200% center"},transition:{repeatType:"reverse",ease:"linear",duration:20,repeat:1/0},children:"Airway Horizons"})}),e.jsx(o.div,{variants:c().in,children:e.jsx(h,{sx:{textAlign:"center",color:"#1b7d77",fontStyle:"italic",fontSize:18},children:"-Explore Beyond Limits"})}),e.jsx(o.div,{variants:c().in,children:e.jsx(h,{variant:"body2",sx:{textAlign:"center",mb:2,mt:4},children:"We create transformative travel experiences through tailored adventures and cultural immersion, inspiring personal growth and lasting memories. Join us!"})}),e.jsxs(a,{sx:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(o.div,{variants:c().in,children:e.jsx(f,{spacing:1.5,direction:{xs:"column-reverse",sm:"row"},sx:{mb:5,mt:2},children:e.jsx(f,{alignItems:"center",spacing:2,children:e.jsx(je,{color:"inherit",size:"large",variant:"contained",startIcon:e.jsx(G,{icon:"eva:flash-fill",width:24}),onClick:()=>{n.push(ge.packages)},children:"View all packages"})})})}),e.jsxs(f,{spacing:3,sx:{textAlign:"center"},children:[e.jsx(o.div,{variants:c().in,children:e.jsx(h,{variant:"overline",sx:{opacity:.48},children:"Available at"})}),e.jsx(f,{spacing:2,direction:"row",justifyContent:"center",children:($=Qe)==null?void 0:$.map(y=>e.jsx("a",{href:y==null?void 0:y.path,target:"_blank",rel:"noopener noreferrer",children:e.jsx(ve,{sx:{"&:hover":{bgcolor:S(y.color,.08)}},children:e.jsx(G,{color:y.color,icon:y.icon})},y.name)}))})]})]})]}),P=e.jsxs(f,{direction:"row",alignItems:"flex-start",sx:{height:"150%",position:"absolute",opacity:m>0?m:0,transform:`skew(${-16-p/24}deg, ${4-p/16}deg)`,...i.direction==="rtl"&&{transform:`skew(${16+p/24}deg, ${4+p/16}deg)`}},children:[e.jsxs(f,{component:o.div,variants:c().in,sx:{width:344,position:"relative"},children:[e.jsx(a,{component:o.img,animate:{y:["0%","100%"]},transition:l,alt:d?"light_1":"dark_1",src:d?"/assets/images/home/hero/light_1.webp":"/assets/images/home/hero/dark_1.webp",sx:{position:"absolute",mt:-5}}),e.jsx(a,{component:o.img,animate:{y:["-100%","0%"]},transition:l,alt:d?"light_1":"dark_1",src:d?"/assets/images/home/hero/light_1.webp":"/assets/images/home/hero/dark_1.webp",sx:{position:"absolute"}})]}),e.jsxs(f,{component:o.div,variants:c().in,sx:{width:720,position:"relative",ml:-5},children:[e.jsx(a,{component:o.img,animate:{y:["100%","0%"]},transition:l,alt:d?"light_2":"dark_2",src:d?"/assets/images/home/hero/light_2.webp":"/assets/images/home/hero/dark_2.webp",sx:{position:"absolute",mt:-5}}),e.jsx(a,{component:o.img,animate:{y:["0%","-100%"]},transition:l,alt:d?"light_2":"dark_2",src:d?"/assets/images/home/hero/light_2.webp":"/assets/images/home/hero/dark_2.webp",sx:{position:"absolute"}})]})]}),b=e.jsxs(e.Fragment,{children:[e.jsx(L,{}),e.jsx(L,{anchor:"right",opacity:.48}),e.jsx(L,{anchor:"right",opacity:.48,sx:{height:48,zIndex:10}}),e.jsx(L,{anchor:"right",sx:{zIndex:11,height:24}})]}),F=e.jsxs(e.Fragment,{children:[t&&e.jsx(ht,{}),e.jsx(ut,{})]});return e.jsxs(e.Fragment,{children:[e.jsx(ct,{ref:r,sx:{...x&&{opacity:0}},children:e.jsxs(mt,{children:[e.jsx(k,{component:Ze,sx:{height:1},maxWidth:"xl",children:e.jsxs(H,{container:!0,columnSpacing:{md:0},sx:{height:1},children:[e.jsx(H,{xs:12,md:6,children:C}),t&&e.jsx(H,{md:6,children:P})]})}),F]})}),t&&b,e.jsx(a,{sx:{height:{md:"100vh"}}})]})}const xt=[{icon:"/home/traveller.png",title:"Professional tour guides",description:"Professional guides offering in-depth knowledge and commentary on attractions."},{icon:"/home/customer-satisfaction.png",title:"Customer satisfaction",description:"Meeting or exceeding customer expectations for a positive and fulfilling experience."},{icon:"/home/secure-payment.png",title:"Secure payment",description:"A system ensuring safe and protected transactions for financial data."}];function ft(){return e.jsxs(k,{component:se,sx:{pb:{xs:10,md:15},pt:{xs:7}},children:[e.jsxs(f,{spacing:3,sx:{textAlign:"center",mb:{xs:5,md:10}},children:[e.jsx(o.div,{variants:c().inUp,children:e.jsx(h,{component:"div",variant:"overline",sx:{color:"text.disabled"},children:"Airway Horizons"})}),e.jsx(o.div,{variants:c().inDown,children:e.jsx(h,{variant:"h2",children:"What we helps you?"})})]}),e.jsx(a,{gap:{xs:3,lg:10},display:"grid",alignItems:"center",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:xt.map((t,i)=>e.jsx(o.div,{variants:c().inUp,children:e.jsxs(q,{sx:{textAlign:"center",boxShadow:{md:"none"},bgcolor:"background.default",p:n=>n.spacing(10,5),...i===1&&{boxShadow:n=>({md:`-40px 40px 80px ${n.palette.mode==="light"?S(n.palette.grey[500],.16):S(n.palette.common.black,.4)}`})}},children:[e.jsx(a,{component:"img",src:t.icon,alt:t.title,sx:{mx:"auto",width:64,height:64}}),e.jsx(h,{variant:"h5",sx:{mt:2,mb:2},children:t.title}),e.jsx(h,{sx:{color:"text.secondary"},children:t.description})]})},t.title))})]})}function vt(){const t=ie("up","md"),i=e.jsxs(e.Fragment,{children:[t?e.jsx(a,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)"}):e.jsx(a,{}),e.jsx(o.div,{variants:c().in,children:e.jsxs(a,{sx:{textAlign:"center"},children:[e.jsx(o.div,{variants:c().inDown,children:e.jsx(h,{variant:"h4",children:"Still have questions?"})}),e.jsx(o.div,{variants:c().inDown,children:e.jsx(h,{sx:{mt:2,mb:5,color:"text.secondary"},children:"Please describe your case to receive the most accurate advice."})}),e.jsx(o.div,{variants:c().inUp,children:e.jsx(je,{color:"inherit",size:"large",variant:"contained",href:"mailto:admin@airwayhorizons.com?subject=[Feedback] from Customer",children:"Contact us"})})]})})]});return e.jsx(a,{sx:{py:10,bgcolor:n=>S(n.palette.grey[500],.04)},children:e.jsx(k,{component:se,children:i})})}function yt({data:t}){const i=be({slidesToShow:4,centerMode:!0,centerPadding:"60px",responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1,centerPadding:"0"}}]});return e.jsx(a,{sx:{overflow:"hidden",position:"relative"},children:e.jsx(we,{filled:!0,icon:"noto:rightwards-hand",onNext:i.onNext,onPrev:i.onPrev,children:e.jsx(ke,{ref:i.carouselRef,...i.carouselSettings,children:t==null?void 0:t.map(n=>e.jsx(a,{sx:{px:1},children:e.jsx(jt,{item:n})},n.id))})})})}function jt({item:t}){const i=W(),{coverUrl:n,title:r,destination:s}=t;return e.jsxs(ze,{sx:{borderRadius:2,overflow:"hidden",position:"relative"},children:[e.jsx(et,{alt:r,src:n,ratio:"3/4"}),e.jsxs(K,{sx:{bottom:0,zIndex:9,width:"100%",textAlign:"left",position:"absolute",color:"common.white",...ne({direction:"to top",startColor:`${i.palette.grey[900]} 25%`,endColor:`${S(i.palette.grey[900],0)} 100%`})},children:[e.jsx(tt,{variant:"h6",sx:{mb:2},children:r}),e.jsx(De,{to:`/packages?id=${s}`,style:{textDecoration:"none",color:"#fff"},children:e.jsxs(Ee,{color:"inherit",variant:"overline",sx:{opacity:.72,alignItems:"center",display:"inline-flex",transition:i.transitions.create(["opacity"]),"&:hover":{opacity:1},cursor:"pointer"},children:["View package",e.jsx(G,{icon:"eva:arrow-forward-fill",width:16,sx:{ml:1}})]})})]})]})}function bt(t){return $e("MuiMasonry",t)}We("MuiMasonry",["root"]);const wt=["children","className","component","columns","spacing","sequential","defaultColumns","defaultHeight","defaultSpacing"],T=t=>Number(t.replace("px","")),kt={flexBasis:"100%",width:0,margin:0,padding:0},St=t=>{const{classes:i}=t;return qe({root:["root"]},bt,i)},Ct=({ownerState:t,theme:i})=>{let n={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const r={};if(t.isSSR){const l={},m=T(i.spacing(t.defaultSpacing));for(let x=1;x<=t.defaultColumns;x+=1)l[`&:nth-of-type(${t.defaultColumns}n+${x%t.defaultColumns})`]={order:x};return r.height=t.defaultHeight,r.margin=-(m/2),r["& > *"]=R({},n["& > *"],l,{margin:m/2,width:`calc(${(100/t.defaultColumns).toFixed(2)}% - ${m}px)`}),R({},n,r)}const s=pe({values:t.spacing,breakpoints:i.breakpoints.values}),p=Ke(i);n=Q(n,Z({theme:i},s,l=>{let m;if(typeof l=="string"&&!Number.isNaN(Number(l))||typeof l=="number"){const x=Number(l);m=ee(p,x)}else m=l;return R({margin:`calc(0px - (${m} / 2))`,"& > *":{margin:`calc(${m} / 2)`}},t.maxColumnHeight&&{height:typeof m=="number"?Math.ceil(t.maxColumnHeight+T(m)):`calc(${t.maxColumnHeight}px + ${m})`})}));const d=pe({values:t.columns,breakpoints:i.breakpoints.values});return n=Q(n,Z({theme:i},d,l=>{const x=`${(100/Number(l)).toFixed(2)}%`,C=typeof s=="string"&&!Number.isNaN(Number(s))||typeof s=="number"?ee(p,Number(s)):"0px";return{"& > *":{width:`calc(${x} - ${C})`}}})),typeof s=="object"&&(n=Q(n,Z({theme:i},s,(l,m)=>{if(m){const x=Number(l),C=Object.keys(d).pop(),P=ee(p,x);return{"& > *":{width:`calc(${`${(100/(typeof d=="object"?d[m]||d[C]:d)).toFixed(2)}%`} - ${P})`}}}return null}))),n},Tt=j("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(t,i)=>[i.root]})(Ct),Mt=u.forwardRef(function(i,n){const r=Oe({props:i,name:"MuiMasonry"}),{children:s,className:p,component:g="div",columns:d=4,spacing:v=1,sequential:l=!1,defaultColumns:m,defaultHeight:x,defaultSpacing:C}=r,P=_e(r,wt),b=u.useRef(),[F,$]=u.useState(),y=!F&&x&&m!==void 0&&C!==void 0,[J,X]=u.useState(y?m-1:0),re=R({},r,{spacing:v,columns:d,maxColumnHeight:F,defaultColumns:m,defaultHeight:x,defaultSpacing:C,isSSR:y}),Se=St(re),oe=u.useCallback(M=>{if(!b.current||!M||M.length===0)return;const w=b.current,O=b.current.firstChild,ae=w.clientWidth,le=O.clientWidth;if(ae===0||le===0)return;const de=window.getComputedStyle(O),Me=T(de.marginLeft),Ue=T(de.marginRight),_=Math.round(ae/(le+Me+Ue)),z=new Array(_).fill(0);let D=!1,E=1;w.childNodes.forEach(U=>{if(U.nodeType!==Node.ELEMENT_NODE||U.dataset.class==="line-break"||D)return;const V=window.getComputedStyle(U),Ae=T(V.marginTop),Ie=T(V.marginBottom),Y=T(V.height)?Math.ceil(T(V.height))+Ae+Ie:0;if(Y===0){D=!0;return}for(let I=0;I<U.childNodes.length;I+=1){const B=U.childNodes[I];if(B.tagName==="IMG"&&B.clientHeight===0){D=!0;break}}if(!D)if(l)z[E-1]+=Y,U.style.order=E,E+=1,E>_&&(E=1);else{const I=z.indexOf(Math.min(...z));z[I]+=Y;const B=I+1;U.style.order=B}}),D||Ve.flushSync(()=>{$(Math.max(...z)),X(_>0?_-1:0)})},[l]);Be(()=>{if(typeof ResizeObserver>"u")return;let M;const w=new ResizeObserver(()=>{M=requestAnimationFrame(oe)});return b.current&&b.current.childNodes.forEach(O=>{w.observe(O)}),()=>{M&&window.cancelAnimationFrame(M),w&&w.disconnect()}},[d,v,s,oe]);const Ce=Le(n,b),Te=new Array(J).fill("").map((M,w)=>e.jsx("span",{"data-class":"line-break",style:R({},kt,{order:w+1})},w));return e.jsxs(Tt,R({as:g,className:Ge(Se.root,p),ref:Ce,ownerState:re},P,{children:[s,Te]}))}),Ut=[{name:"Della",postedDate:"March 2024",ratingNumber:"4",avatarUrl:"",content:"Our Uttarakhand trip with Airway Horizons was a delightful mix of adventure and serenity. From the peaceful lakes in Nainital to the thrill of river rafting in Rishikesh, every moment was memorable. The team provided great support throughout, and we are already looking forward to our next journey!"},{name:"Mr. Hashim & Team",postedDate:"September 2024",ratingNumber:"5",avatarUrl:"",content:"Kashmir was beyond breathtaking! From the scenic beauty of Gulmarg to the peaceful houseboat stay in Srinagar, every detail of the trip was perfectly managed by Airway Horizons. It was an unforgettable experience, and we couldn't have asked for a better adventure!"},{name:"Mr. Afsal & Wife",postedDate:"August 2024",ratingNumber:"4",avatarUrl:"",content:"Our Maldives getaway was magical! From the stunning beaches to the seamless planning by Airway Horizons, everything was just perfect. The whole experience felt like a dream come true for us. Truly unforgettable!"},{name:"Mr. Ravi & Team",postedDate:"July 2024",ratingNumber:"5",avatarUrl:"",content:"Our US group trip was a remarkable journey! Every destination was thoughtfully curated, and the attention to detail by Airway Horizons made it a seamless experience. We’ll cherish these memories forever!"},{name:"Lena UK",postedDate:"August 2024",ratingNumber:"3",avatarUrl:"",content:'The Cultural Immersion Program in Sattal was an eye-opening experience! Engaging with the local communities and exploring Uttarakhand’s rich heritage gave me a deeper connection to the place. Airway Horizons ensured everything was well-organized, making it both educational and unforgettable."'},{name:"George",postedDate:"June 2024",ratingNumber:"5",avatarUrl:"",content:"The CAS program in Krabi, organized by Airway Horizons, was amazing! I loved kayaking, rock climbing, and engaging with local children during our service project. It was a great way to learn about teamwork and different cultures. Highly recommend Airway Horizons for an unforgettable experience!"}];function At(){const t=W(),i=ie("up","md"),n=e.jsxs(a,{sx:{maxWidth:{md:360},textAlign:{xs:"center",md:"unset"}},children:[e.jsx(o.div,{variants:c().inUp,children:e.jsx(h,{variant:"overline",sx:{color:"common.white",opacity:.48},children:"Testimonials"})}),e.jsx(o.div,{variants:c().inUp,children:e.jsxs(h,{variant:"h2",sx:{my:3,color:"common.white"},children:["Travel Beyond ",e.jsx("br",{})," Your Limits!"]})}),e.jsx(o.div,{variants:c().inUp,children:e.jsx(h,{sx:{color:"common.white"},children:"We transform travel into a life-changing adventure! Our tailored trips, from thrilling adventures to enriching cultural immersion programs, provide unforgettable experiences that resonate long after the journey ends. Each trip is thoughtfully designed to reflect real-life lessons, fostering personal growth and a deeper understanding of the world. We can't recommend ourselves enough for anyone seeking an extraordinary travel experience!"})})]}),r=e.jsx(a,{sx:{py:{md:10},height:{md:1},...i&&{...Je.y}},children:e.jsx(Mt,{spacing:3,columns:{xs:1,md:2},sx:{ml:0},children:Ut.map(s=>e.jsx(o.div,{variants:c().inUp,children:e.jsx(It,{testimonial:s})},s.name))})});return e.jsx(a,{sx:{...ne({color:S(t.palette.grey[900],.9),imgUrl:"/assets/images/about/testimonials.jpg"}),overflow:"hidden",height:{md:840},py:{xs:10,md:0}},children:e.jsx(k,{component:se,sx:{position:"relative",height:1},children:e.jsxs(H,{container:!0,spacing:3,alignItems:"center",justifyContent:{xs:"center",md:"space-between"},sx:{height:1},children:[e.jsx(H,{xs:10,md:4,children:n}),e.jsx(H,{xs:12,md:7,lg:6,alignItems:"center",sx:{height:1},children:r})]})})})}function It({testimonial:t,sx:i,...n}){const r=W(),{name:s,ratingNumber:p,postedDate:g,content:d,avatarUrl:v}=t;return e.jsxs(f,{spacing:3,sx:{...ye({color:r.palette.common.white,opacity:.08}),p:3,borderRadius:2,color:"common.white",...i,mt:5},...n,children:[e.jsx(G,{icon:"mingcute:quote-left-fill",width:40,sx:{opacity:.48}}),e.jsx(h,{variant:"body2",children:d}),e.jsx(it,{value:p,readOnly:!0,size:"small"}),e.jsxs(f,{direction:"row",children:[e.jsx(nt,{alt:s,src:v,sx:{mr:2}}),e.jsx(st,{primary:s,primaryTypographyProps:{typography:"subtitle2",mb:.5},secondaryTypographyProps:{typography:"caption",color:"inherit",sx:{opacity:.64}}})]})]})}const Nt=j(q)(({theme:t})=>({position:"relative",borderRadius:"50%",overflow:"hidden",width:200,height:200,boxShadow:t.shadows[5],display:"flex",alignItems:"center",justifyContent:"center"})),Ht=j("img")({width:"100%",height:"100%",objectFit:"cover"}),Rt=j(K)(({theme:t})=>({position:"absolute",bottom:0,left:0,right:0,background:"rgba(0, 0, 0, 0.5)",color:"white",padding:t.spacing(1),height:"100%",textAlign:"center",alignContent:"center"})),Pt=({coverUrl:t,title:i})=>e.jsx(o.div,{whileHover:{scale:1.05},style:{borderRadius:"50%",marginTop:"20px",display:"flex",justifyContent:"center"},children:e.jsxs(Nt,{children:[e.jsx(Ht,{src:t,alt:i}),e.jsx(Rt,{children:e.jsx(h,{variant:"subtitle1",children:i})})]})}),te=[{id:0,title:"CAS - Creativity Activity and Service",coverUrl:"/home/slider/0.jpeg"},{id:1,title:"Adventure Expeditions",coverUrl:"/home/slider/1.jpeg"},{id:2,title:"Culture And History",coverUrl:"/home/slider/2.jpeg"},{id:3,title:"Wildlife and Marine Conservation",coverUrl:"/home/slider/3.jpeg"},{id:4,title:"Study Tours (For students 15-22)",coverUrl:"/home/slider/4.jpeg"},{id:5,title:"Holidays (Adventure & Normal)",coverUrl:"/home/slider/5.jpeg"},{id:6,title:"Honeymoon Trips",coverUrl:"/home/slider/6.jpeg"}],A={slidesToShow:5,slidesToScroll:1,infinite:!0,centerMode:!0,centerPadding:"20px",speed:700,dots:!0,fade:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]},Ft=()=>{const t=be({slidesToShow:A.slidesToShow,centerMode:A.centerMode,centerPadding:A.centerPadding,infinite:A.infinite,speed:A.speed,dots:A.dots,responsive:A.responsive});return e.jsx(a,{sx:{overflow:"hidden",position:"relative"},children:e.jsx(we,{filled:!0,onNext:t.onNext,onPrev:t.onPrev,children:e.jsx(ke,{ref:t.carouselRef,...t.carouselSettings,children:te==null?void 0:te.map((i,n)=>e.jsx(a,{sx:{px:1,transition:"transform 0.3s ease",transform:`scale(${t.currentIndex===n?1:.9})`,height:"100px"},children:e.jsx(Pt,{coverUrl:i.coverUrl,title:i.title})},n))})})})},zt=()=>{const t=N(s=>s.breakpoints.down("sm")),i=N(s=>s.breakpoints.up("sm")&&s.breakpoints.down("md")),n=N(s=>s.breakpoints.up("md")&&s.breakpoints.down("lg"));N(s=>s.breakpoints.up("lg"));const r=t?"530px":i?"800px":n?"1000px":"1200px";return e.jsxs(k,{maxWidth:"lg",sx:{mt:4},children:[e.jsx(o.div,{variants:c().inDown,children:e.jsx(h,{variant:"h2",align:"center",sx:{mb:5},children:"Gallery"})}),e.jsx(a,{sx:{textAlign:"center"},children:e.jsx("iframe",{src:"https://snapwidget.com/embed/1080471",width:"100%",height:r,frameBorder:"0",scrolling:"no",allowTransparency:"true",title:"Instagram Gallery",className:"snapwidget-widget",style:{pointerEvents:"none"}})})]})},Dt=[{id:1,image:"/status/lakshadweep/lakshadweep.jpg",title:"Lakshadweep",video:"/status/lakshadweep/lakshadweep.mp4"},{id:2,image:"/status/malaysia/malaysia.jpg",title:"Malaysia",video:"/status/malaysia/malaysia.mp4"}],Et=()=>{const[t,i]=u.useState(!1),[n,r]=u.useState(""),s=W(),p=N(s.breakpoints.down("sm")),g=N(s.breakpoints.between("sm","md")),d=l=>{r(l),i(!0)},v=()=>{i(!1),r("")};return e.jsxs(a,{sx:{display:"flex",gap:2,p:2,mt:2},children:[Dt.map(l=>e.jsxs(o.div,{onClick:()=>d(l.video),whileHover:{scale:1.1},style:{cursor:"pointer",position:"relative"},children:[e.jsx(a,{sx:{width:100,height:100,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",border:"5px solid #0d5d54",borderRadius:"50%",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.2)",transition:"transform 0.3s ease"},children:e.jsx(a,{component:"img",src:l.image,alt:l.title,sx:{width:"100%",height:"100%",borderRadius:"50%",objectFit:"cover"}})}),e.jsx(h,{variant:"caption",align:"center",sx:{position:"absolute",bottom:-25,left:"50%",transform:"translateX(-50%)",color:"#fff",textShadow:"1px 1px 2px rgba(0, 0, 0, 0.7)"},children:l.title})]},l.id)),t&&e.jsxs(a,{sx:{position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.8)",zIndex:9999},children:[e.jsx(ve,{onClick:v,sx:{position:"absolute",top:10,right:10,color:"#fff"},children:"X"}),e.jsx("video",{controls:!0,style:{width:p?"100%":g?"60%":"25%",height:"90%"},src:n,autoPlay:!0})]})]})},Wt=[{id:0,title:"India tours and activities",coverUrl:"/home/des/0.jpg",destination:"India"},{id:1,title:"Nepal tours and activities",coverUrl:"/home/des/1.jpg",destination:"Nepal"},{id:2,title:"Canada tours and activities",coverUrl:"/home/des/2.jpg",destination:"Canada"},{id:3,title:"Spain tours and activities",coverUrl:"/home/des/3.jpg",destination:"Spain"},{id:4,title:"Iceland tours and activities",coverUrl:"/home/des/4.jpg",destination:"Iceland"},{id:5,title:"Thailand tours and activities",coverUrl:"/home/des/5.jpg",destination:"Thailand"},{id:6,title:"Srilanka tours and activities",coverUrl:"/home/des/6.jpg",destination:"Sri Lanka"},{id:7,title:"USA tours and activities",coverUrl:"/home/des/7.jpg",destination:"USA"},{id:8,title:"Maldives tours and activities",coverUrl:"/home/des/8.jpg",destination:"Maldives"},{id:9,title:"England tours and activities",coverUrl:"/home/des/9.jpg",destination:"England"},{id:10,title:"Indonesia tours and activities",coverUrl:"/home/des/10.jpg",destination:"Indonesia"}];function $t(){var i;const{scrollYProgress:t}=xe();return e.jsxs(e.Fragment,{children:[e.jsx(lt,{scrollYProgress:t}),e.jsx(gt,{}),e.jsxs(a,{sx:{overflow:"hidden",position:"relative",bgcolor:"background.default"},children:[e.jsx(k,{maxWidth:"lg",children:e.jsx(Et,{})}),e.jsx(ft,{}),e.jsx(k,{maxWidth:"xl",children:e.jsx(a,{gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(1, 1fr)"},sx:{mb:3,alignItems:"flex-start"},children:e.jsxs(q,{sx:{border:"none",boxShadow:"none"},children:[e.jsxs(f,{spacing:3,sx:{textAlign:"center",mb:{xs:5,md:5},mt:0},children:[e.jsx(o.div,{variants:c().inDown,children:e.jsx(h,{variant:"h2",children:"Our Top Destinations"})}),e.jsx(o.div,{variants:c().inUp,children:e.jsx(h,{component:"div",variant:"overline",sx:{color:"text.disabled",textTransform:"capitalize",fontWeight:"normal"},children:"We offer creativity, adventure, culture, conservation in our trips."})})]}),e.jsx(K,{children:e.jsx(yt,{data:Wt})})]})})}),e.jsxs(k,{maxWidth:"lg",sx:{mb:10},children:[e.jsxs(f,{spacing:3,sx:{textAlign:"center",mb:{xs:5,md:10},mt:"102px"},children:[e.jsx(o.div,{variants:c().inDown,children:e.jsx(h,{variant:"h2",children:"Featured Tours"})}),e.jsx(o.div,{variants:c().inUp,children:e.jsx(h,{component:"div",variant:"overline",sx:{color:"text.disabled"},children:"Our Featured Tours can help you find the trip thats perfect for you!"})})]}),e.jsx(dt,{tours:(i=rt)==null?void 0:i.slice(0,9)})]}),e.jsx(At,{}),e.jsx(k,{maxWidth:"xl",children:e.jsx(a,{gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(1, 1fr)"},sx:{mb:3,alignItems:"flex-start"},children:e.jsxs(q,{sx:{border:"none",boxShadow:"none"},children:[e.jsxs(f,{spacing:3,sx:{textAlign:"center",mb:{xs:5,md:5},mt:5},children:[e.jsx(o.div,{variants:c().inDown,children:e.jsx(h,{variant:"h2",children:"Programs We Provide"})}),e.jsx(o.div,{variants:c().inUp,children:e.jsx(h,{component:"div",variant:"overline",sx:{color:"text.disabled",textTransform:"capitalize",fontWeight:"normal"},children:"Experience guided tours, cultural immersions, adventure activities, and personalized itineraries for unforgettable travel experiences."})})]}),e.jsx(K,{children:e.jsx(Ft,{})})]})})}),e.jsx(vt,{}),e.jsx(zt,{})]})]})}function di(){return e.jsxs(e.Fragment,{children:[e.jsx(Xe,{children:e.jsx("title",{children:"Airway Horizons: Home"})}),e.jsx($t,{})]})}export{di as default};
