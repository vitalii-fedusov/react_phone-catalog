(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{18:function(e,s,t){},24:function(e,s,t){"use strict";t.r(s);var c=t(10),a=t.n(c),i=t(8),n=t(3),l=(t(18),t(0)),r=t.n(l),j=t.p+"static/media/logo.c9417692.svg",o=t.p+"static/media/arrow-up.a61ad2d0.svg",b=t(1);const h=()=>Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)("div",{className:"footer__container",children:Object(b.jsxs)("div",{className:"footer__nav",children:[Object(b.jsx)("a",{href:"/",children:Object(b.jsx)("img",{className:"logo",src:j,alt:"Logo"})}),Object(b.jsxs)("ul",{className:"list",children:[Object(b.jsx)("li",{className:"list__item",children:Object(b.jsx)("a",{className:"list__link",target:"_blank",rel:"noreferrer",href:"https://github.com/vitalii-fedusov?tab=repositories",children:"Github"})}),Object(b.jsx)("li",{className:"list__item",children:Object(b.jsx)("a",{className:"list__link",href:"/",children:"Contacts"})}),Object(b.jsx)("li",{className:"list__item",children:Object(b.jsx)("a",{className:"list__link",href:"/",children:"Rights"})})]}),Object(b.jsxs)("div",{className:"footer__button-up",children:[Object(b.jsx)("p",{className:"footer__paragraph",children:"Back to top"}),Object(b.jsx)("button",{type:"button",className:"footer__link",onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},children:Object(b.jsx)("img",{className:"footer__arrow-up",src:o,alt:"Arrow up"})})]})]})})});var d=t(13),m=t.n(d),O=t.p+"static/media/favourites-hart-like.dbd19c03.svg",x=t.p+"static/media/shopping-bag.9229aff4.svg";const p=e=>{let{isActive:s}=e;return m()("list__link",{"list__link--active":s})},_=()=>Object(b.jsxs)("header",{className:"header top-bar",children:[Object(b.jsxs)("div",{className:"top-bar__nav",children:[Object(b.jsx)(i.b,{className:"logo",to:"/",children:Object(b.jsx)("img",{className:"logo__image",src:j,alt:"Logo"})}),Object(b.jsxs)("ul",{className:"list",children:[Object(b.jsx)("li",{className:"list__item",children:Object(b.jsx)(i.b,{className:p,to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"list__item",children:Object(b.jsx)(i.b,{className:p,to:"/phones",children:"Phones"})}),Object(b.jsx)("li",{className:"list__item",children:Object(b.jsx)(i.b,{className:p,to:"/tablets",children:"Tablets"})}),Object(b.jsx)("li",{className:"list__item",children:Object(b.jsx)(i.b,{className:p,to:"/accessories",children:"Accessories"})})]})]}),Object(b.jsxs)("div",{className:"top-bar__options",children:[Object(b.jsx)("a",{className:"top-bar__option",href:"/",children:Object(b.jsx)("img",{className:"icon",src:O,alt:"favourites"})}),Object(b.jsx)("a",{className:"top-bar__option",href:"/",children:Object(b.jsx)("img",{className:"icon",src:x,alt:"shopping bag"})})]})]}),g=()=>Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(_,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("main",{children:Object(b.jsx)(n.b,{})})}),Object(b.jsx)(h,{})]});var u=t(31),N=t(26),f=t(27),v=t(28),w=t(29),P=t(32),k=t(30);t(20),t(21),t(22),t(23);u.a.use([N.a,f.a,v.a,w.a]);const y=()=>Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Product Card"}),Object(b.jsx)(P.a,{id:"main",tag:"section",wrapperTag:"ul",slidesPerView:1,spaceBetween:30,loop:!0,pagination:{clickable:!0},navigation:!0,className:"mySwiper",children:[{id:1,src:"_new/img/banner-phones.png",alt:"banner-phones"},{id:2,src:"_new/img/banner-tablets.png",alt:"banner-tablets"},{id:3,src:"_new/img/banner-accessories.png",alt:"banner-accessories"}].map((e=>Object(b.jsx)(k.a,{tag:"li",children:Object(b.jsx)("img",{className:"swiper-image",src:e.src,style:{listStyle:"none"},alt:e.alt})},e.id)))})]}),A=r.a.createContext({phones:[],setPhones:()=>{}}),C=e=>{let{children:s}=e;const[t,c]=Object(l.useState)([]),a=Object(l.useMemo)((()=>({phones:t,setPhones:c})),[t]);return Object(b.jsx)(A.Provider,{value:a,children:s})},F="https://mate-academy.github.io/react_phone-catalog/_new/products.json";function S(){return fetch(F+"").then((e=>e.json()))}const E=()=>S();var T=function(e){return e.Phones="phones",e}(T||{});const B=()=>{const{phones:e,setPhones:s}=r.a.useContext(A),[t,c]=Object(l.useState)([]);return Object(l.useEffect)((()=>{c(function(e,s){const t=[...e];return t.filter((e=>e.category===s)),t.sort(((e,s)=>s.fullPrice-s.price-(e.fullPrice-e.price))),t}(e,T.Phones))}),[e]),Object(l.useEffect)((()=>{(async()=>{try{const e=await E();s(e)}catch(e){throw new Error}})()}),[s]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Products Slider"}),Object(b.jsx)("p",{children:t.length})]})},H=()=>Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Home Page"}),Object(b.jsx)(B,{}),Object(b.jsx)(y,{})]}),J=()=>Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("h1",{children:"Phones Page"})}),L=()=>Object(b.jsx)("h1",{children:"Tablets Page"}),G=()=>Object(b.jsx)("h1",{children:"Accessories Page"}),I=()=>Object(b.jsx)("h1",{children:"Not Found Page"}),M=()=>Object(b.jsx)(i.a,{children:Object(b.jsx)(n.e,{children:Object(b.jsxs)(n.c,{path:"/",element:Object(b.jsx)(g,{}),children:[Object(b.jsx)(n.c,{path:"home",element:Object(b.jsx)(n.a,{to:"/"})}),Object(b.jsx)(n.c,{index:!0,element:Object(b.jsx)(H,{})}),Object(b.jsx)(n.c,{path:"phones",element:Object(b.jsx)(J,{})}),Object(b.jsx)(n.c,{path:"tablets",element:Object(b.jsx)(L,{})}),Object(b.jsx)(n.c,{path:"accessories",element:Object(b.jsx)(G,{})}),Object(b.jsx)(n.c,{path:"*",element:Object(b.jsx)(I,{})})]})})});a.a.render(Object(b.jsx)(C,{children:Object(b.jsx)(M,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.1b3fd62f.chunk.js.map