import{n as g,r as d,j as r,f as c,F as m,w as b,x as v,t as j}from"./index-DQumLT9L.js";import{I as C}from"./image-BQLAgES7.js";import{u as S,L as I}from"./use-light-box-C-8sc5U8.js";import{u,a as x,b as T}from"./carousel-arrow-index-k919HEf0.js";const i=64,w=b("div")(({length:o,theme:l})=>({position:"relative",margin:l.spacing(0,"auto"),"& .slick-slide":{lineHeight:0},...o===1&&{maxWidth:i*1+16},...o===2&&{maxWidth:i*2+32},...(o===3||o===4)&&{maxWidth:i*3+48},...o>=5&&{maxWidth:i*6},...o>3&&{"&:before, &:after":{...v({direction:"to left",startColor:`${j(l.palette.background.default,0)} 0%`,endColor:`${l.palette.background.default} 100%`}),top:0,zIndex:9,content:"''",height:"100%",position:"absolute",width:i*2/3},"&:after":{right:0,transform:"scaleX(-1)"}}}));function L({product:o}){const l=g(),a=o.images.map(e=>({src:e})),t=S(a),s=u({rtl:!1,draggable:!1,adaptiveHeight:!0}),n=u({rtl:!1,centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,variableWidth:!0,centerPadding:"0px",slidesToShow:a.length>3?3:a.length});d.useEffect(()=>{s.onSetNav(),n.onSetNav()},[s,n]),d.useEffect(()=>{t.open&&s.onTogo(t.selected)},[s,t.open,t.selected]);const p=r.jsxs(c,{sx:{mb:3,borderRadius:2,overflow:"hidden",position:"relative"},children:[r.jsx(x,{...s.carouselSettings,asNavFor:n.nav,ref:s.carouselRef,children:a.map(e=>r.jsx(C,{alt:e.src,src:e.src,ratio:"1/1",onClick:()=>t.onOpen(e.src),sx:{cursor:"zoom-in"}},e.src))}),r.jsx(T,{index:s.currentIndex,total:a.length,onNext:n.onNext,onPrev:n.onPrev})]}),h=r.jsx(w,{length:a.length,children:r.jsx(x,{...n.carouselSettings,asNavFor:s.nav,ref:n.carouselRef,children:a.map((e,f)=>r.jsx(c,{sx:{px:.5},children:r.jsx(m,{alt:e.src,src:e.src,variant:"rounded",sx:{width:i,height:i,opacity:.48,cursor:"pointer",...s.currentIndex===f&&{opacity:1,border:`solid 2.5px ${l.palette.primary.main}`}}},e.src)},e.src))})});return r.jsxs(c,{sx:{"& .slick-slide":{float:l.direction==="rtl"?"right":"left"}},children:[p,h,r.jsx(I,{index:t.selected,slides:a,open:t.open,close:t.onClose,onGetCurrentIndex:e=>t.setSelected(e)})]})}export{L as P};
