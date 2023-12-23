(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{23:function(e,c,t){},48:function(e,c,t){"use strict";t.r(c);var s=t(12),a=t.n(s),r=t(8),n=t(3),i=(t(23),t(0)),l=t.n(i),o=t.p+"static/media/logo.c9417692.svg",j=t.p+"static/media/arrow-up.a61ad2d0.svg",d=t(1);const b=()=>Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("div",{className:"footer__container",children:Object(d.jsxs)("div",{className:"footer__nav",children:[Object(d.jsx)("a",{href:"/",children:Object(d.jsx)("img",{className:"logo",src:o,alt:"Logo"})}),Object(d.jsxs)("ul",{className:"list",children:[Object(d.jsx)("li",{className:"list__item",children:Object(d.jsx)("a",{className:"list__link",target:"_blank",rel:"noreferrer",href:"https://github.com/vitalii-fedusov?tab=repositories",children:"Github"})}),Object(d.jsx)("li",{className:"list__item",children:Object(d.jsx)("a",{className:"list__link",href:"/",children:"Contacts"})}),Object(d.jsx)("li",{className:"list__item",children:Object(d.jsx)("a",{className:"list__link",href:"/",children:"Rights"})})]}),Object(d.jsxs)("div",{className:"footer__button-up",children:[Object(d.jsx)("p",{className:"footer__paragraph",children:"Back to top"}),Object(d.jsx)("button",{type:"button",className:"footer__link",onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},children:Object(d.jsx)("img",{className:"footer__arrow-up",src:j,alt:"Arrow up"})})]})]})})});var h=t(9),m=t.n(h),O=t.p+"static/media/favourites-hart-like.dbd19c03.svg",p=t.p+"static/media/shopping-bag.9229aff4.svg";const x=e=>{let{isActive:c}=e;return m()("list__link",{"list__link--active":c})},_=()=>Object(d.jsxs)("header",{className:"header top-bar",children:[Object(d.jsxs)("div",{className:"top-bar__nav",children:[Object(d.jsx)(r.c,{className:"logo",to:"/",children:Object(d.jsx)("img",{className:"logo__image",src:o,alt:"Logo"})}),Object(d.jsxs)("ul",{className:"list",children:[Object(d.jsx)("li",{className:"list__item",children:Object(d.jsx)(r.c,{className:x,to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"list__item",children:Object(d.jsx)(r.c,{className:x,to:"/phones",children:"Phones"})}),Object(d.jsx)("li",{className:"list__item",children:Object(d.jsx)(r.c,{className:x,to:"/tablets",children:"Tablets"})}),Object(d.jsx)("li",{className:"list__item",children:Object(d.jsx)(r.c,{className:x,to:"/accessories",children:"Accessories"})})]})]}),Object(d.jsxs)("div",{className:"top-bar__options",children:[Object(d.jsx)("a",{className:"top-bar__option",href:"/",children:Object(d.jsx)("img",{className:"icon",src:O,alt:"favourites"})}),Object(d.jsx)("a",{className:"top-bar__option",href:"/",children:Object(d.jsx)("img",{className:"icon",src:p,alt:"shopping bag"})})]})]}),u=()=>Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(_,{}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("main",{className:"main-container",children:Object(d.jsx)(n.b,{})})}),Object(d.jsx)(b,{})]});var g=t(17),N=t.n(g);t(40),t(41);const v=e=>{let{card:c,discount:t}=e;const s=Object(n.o)().pathname.includes("phones")?c.phoneId:"phones/".concat(c.phoneId);return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)(r.c,{to:s,className:"card__nav-link",children:Object(d.jsx)("img",{className:"card__image",src:c.image,alt:"phone_image"})}),Object(d.jsx)("h3",{className:"card__name",children:c.name}),Object(d.jsx)("div",{className:"card__price",children:t?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"card__hot-price",children:"$".concat(c.price)}),Object(d.jsx)("p",{className:"card__full-price",children:"$".concat(c.fullPrice)})]}):Object(d.jsx)("p",{className:"card__hot-price",children:"$".concat(c.fullPrice)})}),Object(d.jsxs)("div",{className:"card__info",children:[Object(d.jsxs)("div",{className:"card__row",children:[Object(d.jsx)("p",{className:"card__char-name",children:"Screen"}),Object(d.jsx)("p",{className:"card__char-value",children:c.screen})]}),Object(d.jsxs)("div",{className:"card__row",children:[Object(d.jsx)("p",{className:"card__char-name",children:"Capacity"}),Object(d.jsx)("p",{className:"card__char-value",children:c.capacity})]}),Object(d.jsxs)("div",{className:"card__row",children:[Object(d.jsx)("p",{className:"card__char-name",children:"RAM"}),Object(d.jsx)("p",{className:"card__char-value",children:c.ram})]})]}),Object(d.jsxs)("div",{className:"card__button",children:[Object(d.jsx)("a",{className:"card__link",href:"/",children:"Add to cart"}),Object(d.jsx)("div",{className:"card__icon"})]})]})},f=e=>{let{products:c,discount:t,title:s}=e;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"card-container","data-cy":"cardsContainer",children:[Object(d.jsx)("h1",{className:"slick-title",children:s}),Object(d.jsx)(N.a,{dots:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:3,children:c.map((e=>Object(d.jsx)(v,{card:e,discount:t},e.id)))})]})})};var w=t(56),y=t(51),P=t(52),k=t(53),S=t(54),A=t(47),E=t(57),C=t(55);t(42),t(43),t(44),t(45),t(46);w.a.use([y.a,P.a,k.a,S.a,A.a]);const T=()=>Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(E.a,{id:"main",tag:"section",wrapperTag:"ul",slidesPerView:1,spaceBetween:30,loop:!0,pagination:{clickable:!0},navigation:!0,className:"mySwiper",children:[{id:1,src:"./img/banner-phones.png",alt:"banner-phones"},{id:2,src:"./img/banner-tablets.png",alt:"banner-tablets"},{id:3,src:"./img/banner-accessories.png",alt:"banner-accessories"}].map((e=>Object(d.jsx)(C.a,{tag:"li",children:Object(d.jsx)("img",{className:"swiper-image",src:e.src,style:{listStyle:"none"},alt:e.alt})},e.id)))})});var M=t.p+"static/media/category-phones.c3469de9.png",L=t.p+"static/media/category-tablets.70cceed3.png",R=t.p+"static/media/category-accessories.f97da0dc.png";const F=()=>Object(d.jsxs)("div",{className:"category","data-cy":"categoryLinksContainer",children:[Object(d.jsx)("h1",{className:"category__title",children:"Shop by category"}),Object(d.jsxs)("ul",{className:"category__list",children:[Object(d.jsxs)("li",{className:"category__item",children:[Object(d.jsx)(r.c,{className:"category__link category__phones",to:"/phones",children:Object(d.jsx)("img",{className:"category__image category__image--phones",src:M,alt:"Mobile phones"})}),Object(d.jsx)("h2",{className:"category__subtitle",children:"Mobile phones"}),Object(d.jsx)("p",{className:"category__paragraph",children:"95 modesl"})]}),Object(d.jsxs)("li",{className:"category__item",children:[Object(d.jsx)(r.c,{className:"category__link category__tablets",to:"/tablets",children:Object(d.jsx)("img",{className:"category__image",src:L,alt:"Tablets"})}),Object(d.jsx)("h2",{className:"category__subtitle",children:"Tablets"}),Object(d.jsx)("p",{className:"category__paragraph",children:"24 modesl"})]}),Object(d.jsxs)("li",{className:"category__item",children:[Object(d.jsx)(r.c,{className:"category__link category__accessories",to:"/accessories",children:Object(d.jsx)("img",{className:"category__image",src:R,alt:"Accessories"})}),Object(d.jsx)("h2",{className:"category__subtitle",children:"Accessories"}),Object(d.jsx)("p",{className:"category__paragraph",children:"100 modesl"})]})]})]}),I=l.a.createContext({hotPricePhones:[],setHotPriceProducts:()=>{},newPhones:[],setNewProducts:()=>{}}),B=e=>{let{children:c}=e;const[t,s]=Object(i.useState)([]),[a,r]=Object(i.useState)([]),n=Object(i.useMemo)((()=>({hotPricePhones:t,setHotPriceProducts:s,newPhones:a,setNewProducts:r})),[t,a]);return Object(d.jsx)(I.Provider,{value:n,children:c})},G="https://mate-academy.github.io/react_phone-catalog/_new/products.json";function H(e){return(c=500,new Promise((e=>setTimeout(e,c)))).then((()=>fetch(G+e))).then((e=>{if(!e.ok)throw new Error;return e.json()}));var c}const U=()=>H("");var $=t(58);const J=()=>Object(d.jsx)("div",{className:"loader",children:Object(d.jsx)($.a,{color:"#313237",cssOverride:{display:"block",margin:"0 auto",padding:"100 100"},size:80})});let q=function(e){return e.Phones="phones",e.Tablets="tablets",e.Accessories="accessories",e}({});const z=()=>{const{hotPricePhones:e,setHotPriceProducts:c,newPhones:t,setNewProducts:s}=l.a.useContext(I),[a,r]=Object(i.useState)(!0);return Object(i.useEffect)((()=>{(async()=>{try{const e=(await U()).map((e=>({...e,name:"".concat(e.name," (iMT9G2FS/A)")})));c(function(e,c){const t=[...e];return t.filter((e=>e.category===c)),t.sort(((e,c)=>c.fullPrice-c.price-(e.fullPrice-e.price))),t}(e,q.Phones)),s(function(e,c){const t=[...e];return t.filter((e=>e.category===c)),t.sort(((e,c)=>c.year-e.year)),t}(e,q.Phones)),r(!1)}catch(e){throw new Error}})()}),[c,s]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(T,{}),a?Object(d.jsx)(J,{}):Object(d.jsx)(f,{discount:!0,title:"Hot prices",products:e}),Object(d.jsx)(F,{}),a?Object(d.jsx)(J,{}):Object(d.jsx)(f,{discount:!1,title:"Brand new models",products:t})]})};var D=t(18),V=t.n(D);const Z=e=>{const c=Object(i.useRef)(null);return Object(i.useEffect)((()=>{const t=t=>{c.current&&!c.current.contains(t.target)&&e(t)};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}}),[e]),c};function K(e,c){const t=new URLSearchParams(e.toString());return Object.entries(c).forEach((e=>{let[c,s]=e;null===s?t.delete(c):Array.isArray(s)?(t.delete(c),s.forEach((e=>{t.append(c,e)}))):t.set(c,s)})),t.toString()}const Q=e=>{let{children:c,params:t,...s}=e;const[a]=Object(r.d)();return Object(d.jsx)(r.b,{to:{search:K(a,t)},...s,children:c})};let W=function(e){return e.AGE="age",e.NAME="name",e.PRICE="price",e}({});const X=()=>{const[e,c]=Object(i.useState)(!1),t=Z((()=>c(!1))),[s,a]=Object(i.useState)("Newest"),[n]=Object(r.d)();Object(i.useEffect)((()=>{switch(n.get("sort")){case W.PRICE:a("Cheapest");break;case W.NAME:a("Alphabetically");break;default:a("Newest")}}),[n]);const l=()=>{c(!e)},o=[{field:"Newest",id:1,value:W.AGE},{field:"Alphabetically",id:2,value:W.NAME},{field:"Cheapest",id:3,value:W.PRICE}];return Object(d.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown",ref:t,children:[Object(d.jsx)("p",{className:"dropdown__name",children:"Sort by"}),Object(d.jsx)("button",{type:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:l,className:m()("dropdown__button dropdown__button--select",{"dropdown__button--focused":e}),children:Object(d.jsx)("span",{children:s||"Choose a option"})}),e&&Object(d.jsx)("div",{className:"option-container",children:o.map((e=>Object(d.jsx)(Q,{role:"button",onClick:()=>(e=>{e.value!==n.get("sort")?c(!1):l()})(e),className:"dropdown__button dropdown__button--option",params:{sort:e.value},children:e.field},e.id)))})]})},Y=e=>{let{currentAmount:c=16,length:t=100}=e;const[s,a]=Object(i.useState)(!1),r=Z((()=>a(!1))),n=()=>{a(!s)},l=[{field:"16",id:1,value:16},{field:"8",id:2,value:8},{field:"4",id:3,value:4},{field:"all",id:4,value:t}];return Object(d.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown dropdown--per-page",ref:r,children:[Object(d.jsx)("p",{className:"dropdown__name",children:"Items on page"}),Object(d.jsx)("button",{type:"button",className:m()("dropdown__button dropdown__button--select",{"dropdown__button--focused":s}),"aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:n,onBlur:()=>n,children:Object(d.jsx)("span",{children:c<=16?c:"All"})}),s&&Object(d.jsx)("div",{className:"option-container",children:l.map((e=>Object(d.jsx)(Q,{role:"button",onClick:()=>{var t;"all"!==(t=e.field)?+t!==c?a(!1):n():a(!1)},className:"dropdown__button dropdown__button--option",params:{perPage:e.value.toString()},children:e.field},e.id)))})]})};var ee=t.p+"static/media/home.f28213b9.svg",ce=t.p+"static/media/arrow-right-secondary-color.a374b573.svg";const te=()=>{const[e,c]=Object(r.d)(),[t,s]=Object(i.useState)(!0),[a,n]=Object(i.useState)([]),l=e.get("sort")||"",o=+(e.get("perPage")||16),[j,b]=Object(i.useState)(a),h=+(e.get("page")||1);Object(i.useEffect)((()=>{const e=(()=>{const e=[...a];switch(l){case W.PRICE:e.sort(((e,c)=>e.price-c.price));break;case W.NAME:e.sort(((e,c)=>e.name.localeCompare(c.name)));break;default:e.sort(((e,c)=>c.year-e.year))}return e})();b(e)}),[a,l]),Object(i.useEffect)((()=>{(async()=>{try{const e=(await U()).map((e=>({...e,name:"".concat(e.name," (iMT9G2FS/A)")})));n(function(e,c){const t=[...e];return t.filter((e=>e.category===c)),t}(e,q.Phones)),s(!1)}catch(e){throw new Error}})()}),[n]);const m=(h-1)*o,O=m+o,p=j.slice(m,O),x=Math.ceil(a.length/o);return Object(d.jsxs)("div",{className:"phones",children:[Object(d.jsxs)("div",{className:"path",children:[Object(d.jsx)("img",{src:ee,alt:"home_icon"}),Object(d.jsx)("img",{src:ce,alt:"arrow_right"}),Object(d.jsx)("h3",{children:"Phones"})]}),Object(d.jsx)("h1",{className:"phones__title",children:"Mobile phones"}),Object(d.jsx)("p",{className:"phones__paragraph",children:"".concat(a.length," models")}),Object(d.jsxs)("div",{className:"dropdowns-container",children:[Object(d.jsx)(X,{}),Object(d.jsx)(Y,{currentAmount:o,length:a.length})]}),t?Object(d.jsx)(J,{}):Object(d.jsx)("div",{className:"phones-container",children:p.map((e=>Object(d.jsx)(v,{card:e,discount:!0},e.id)))}),o>=4&&o<a.length&&Object(d.jsx)(V.a,{breakLabel:"...",nextLabel:"",onPageChange:e=>{const t=e.selected+1;c((e=>{const c=new URLSearchParams(e.toString());return c.set("page",t.toString()),c}))},pageRangeDisplayed:5,pageCount:x,previousLabel:"",renderOnZeroPageCount:null,initialPage:h-1})]})},se=()=>{const[e,c]=Object(i.useState)([]),[t,s]=Object(i.useState)(!0);return Object(i.useEffect)((()=>{(async()=>{try{const e=await U();c(e),c((e=>e.filter((e=>e.category===q.Tablets)))),s(!1)}catch(e){throw new Error}})()}),[c]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"tablets",children:[Object(d.jsxs)("div",{className:"path",children:[Object(d.jsx)("img",{src:ee,alt:"home_icon"}),Object(d.jsx)("img",{src:ce,alt:"arrow_right"}),Object(d.jsx)("h3",{children:"Tablets"})]}),Object(d.jsx)("h1",{className:"tablets__header",children:"Tablets"}),Object(d.jsx)("div",{children:t?Object(d.jsx)(J,{}):Object(d.jsx)("div",{className:"phones-container",children:e.map((e=>Object(d.jsx)(v,{card:e,discount:!0},e.id)))})}),!t&&0===e.length&&Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"There are no tablets yet"})})]})})},ae=()=>{const[e,c]=Object(i.useState)([]),[t,s]=Object(i.useState)(!0);return Object(i.useEffect)((()=>{(async()=>{try{const e=await U();c(e),c((e=>e.filter((e=>e.category===q.Accessories)))),s(!1)}catch(e){throw new Error}})()}),[c]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"tablets",children:[Object(d.jsxs)("div",{className:"path",children:[Object(d.jsx)("img",{src:ee,alt:"home_icon"}),Object(d.jsx)("img",{src:ce,alt:"arrow_right"}),Object(d.jsx)("h3",{children:"Accessories"})]}),Object(d.jsx)("h1",{className:"tablets__header",children:"Accessories"}),Object(d.jsx)("div",{children:t?Object(d.jsx)(J,{}):Object(d.jsx)("div",{className:"phones-container",children:e.map((e=>Object(d.jsx)(v,{card:e,discount:!0},e.id)))})}),!t&&0===e.length&&Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"There are no accessories yet"})})]})})},re=()=>Object(d.jsx)("h1",{children:"Not Found Page"});var ne=t.p+"static/media/arrow-left-black.7e79118d.svg";const ie=()=>{const e=Object(n.o)().pathname.replace("/phones/",""),c=e.replace(e[0],e[0].toUpperCase()),t=Object(n.q)();return Object(d.jsxs)("div",{className:"phones",children:[Object(d.jsxs)("div",{className:"path",children:[Object(d.jsx)("img",{src:ee,alt:"home_icon"}),Object(d.jsx)("img",{src:ce,alt:"arrow_right"}),Object(d.jsx)("h3",{className:"phones__prev-name",children:"Phones"}),Object(d.jsx)("img",{src:ce,alt:"arrow_right"}),Object(d.jsx)("h3",{children:c})]}),Object(d.jsxs)("button",{type:"button",className:"left-back",onClick:()=>t(-1),children:[Object(d.jsx)("img",{src:ne,alt:"arrow_right"}),Object(d.jsx)("p",{children:"Back"})]}),Object(d.jsx)("h1",{className:"phones__title",children:c})]})},le=()=>Object(d.jsx)(r.a,{children:Object(d.jsx)(n.e,{children:Object(d.jsxs)(n.c,{path:"/",element:Object(d.jsx)(u,{}),children:[Object(d.jsx)(n.c,{path:"home",element:Object(d.jsx)(n.a,{to:"/"})}),Object(d.jsx)(n.c,{index:!0,element:Object(d.jsx)(z,{})}),Object(d.jsx)(n.c,{path:"phones",element:Object(d.jsx)(te,{})}),Object(d.jsx)(n.c,{path:"phones/:phoneId",element:Object(d.jsx)(ie,{})}),Object(d.jsx)(n.c,{path:"tablets",element:Object(d.jsx)(se,{})}),Object(d.jsx)(n.c,{path:"accessories",element:Object(d.jsx)(ae,{})}),Object(d.jsx)(n.c,{path:"*",element:Object(d.jsx)(re,{})})]})})});a.a.render(Object(d.jsx)(B,{children:Object(d.jsx)(le,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.586ea643.chunk.js.map