(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{23:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var s=c(12),a=c.n(s),r=c(7),n=c(3),i=(c(23),c(1)),l=c.n(i),o=c.p+"static/media/logo.c9417692.svg",d=c.p+"static/media/arrow-up.a61ad2d0.svg",j=c(0);const b=()=>Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("div",{className:"footer__container",children:Object(j.jsxs)("div",{className:"footer__nav",children:[Object(j.jsx)("a",{href:"/",children:Object(j.jsx)("img",{className:"logo",src:o,alt:"Logo"})}),Object(j.jsxs)("ul",{className:"list",children:[Object(j.jsx)("li",{className:"list__item",children:Object(j.jsx)("a",{className:"list__link",target:"_blank",rel:"noreferrer",href:"https://github.com/vitalii-fedusov?tab=repositories",children:"Github"})}),Object(j.jsx)("li",{className:"list__item",children:Object(j.jsx)("a",{className:"list__link",href:"/",children:"Contacts"})}),Object(j.jsx)("li",{className:"list__item",children:Object(j.jsx)("a",{className:"list__link",href:"/",children:"Rights"})})]}),Object(j.jsxs)("div",{className:"footer__button-up",children:[Object(j.jsx)("p",{className:"footer__paragraph",children:"Back to top"}),Object(j.jsx)("button",{type:"button",className:"footer__link",onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},children:Object(j.jsx)("img",{className:"footer__arrow-up",src:d,alt:"Arrow up"})})]})]})})});var h=c(9),m=c.n(h),u=c.p+"static/media/favourites-hart-like.dbd19c03.svg",O=c.p+"static/media/shopping-bag.9229aff4.svg";function p(e,t){const[c,s]=Object(i.useState)((()=>{const c=localStorage.getItem(e);if(null===c)return t;try{return JSON.parse(c)}catch(s){return localStorage.removeItem(e),t}}));return[c,t=>{localStorage.setItem(e,JSON.stringify(t)),s(t)}]}const _=l.a.createContext({hotPricePhones:[],setHotPriceProducts:()=>{},newPhones:[],setNewProducts:()=>{},cartPhones:[],setCartPhones:()=>{},favourites:[],setFavourites:()=>{},query:"",setQuery:()=>{}}),x=()=>l.a.useContext(_),g=e=>{let{children:t}=e;const[c,s]=Object(i.useState)([]),[a,r]=Object(i.useState)([]),[n,l]=p("cart",[]),[o,d]=p("favourites",[]),[b,h]=Object(i.useState)(""),m=Object(i.useMemo)((()=>({hotPricePhones:c,setHotPriceProducts:s,newPhones:a,setNewProducts:r,cartPhones:n,setCartPhones:l,favourites:o,setFavourites:d,query:b,setQuery:h})),[c,a,n,l,o,d,b,h]);return Object(j.jsx)(_.Provider,{value:m,children:t})};var N=c.p+"static/media/search.1e77bbf1.svg";const v=e=>{let{isActive:t}=e;return m()("list__link",{"list__link--active":t})},f=()=>{const e=Object(n.o)(),{cartPhones:t,favourites:c,query:s,setQuery:a}=x(),l=e.pathname.replace("/",""),[,d]=Object(r.d)();Object(i.useEffect)((()=>{d((e=>{const t=new URLSearchParams(e.toString());return t.set("query",s),t.get("query")||t.delete("query"),t}))}),[s,d]);return Object(j.jsxs)("header",{className:"header top-bar",children:[Object(j.jsxs)("div",{className:"top-bar__nav",children:[Object(j.jsx)(r.c,{className:"logo",to:"/",children:Object(j.jsx)("img",{className:"logo__image",src:o,alt:"Logo"})}),!e.pathname.includes("cart")&&Object(j.jsxs)("ul",{className:"list",children:[Object(j.jsx)("li",{className:"list__item",children:Object(j.jsx)(r.c,{className:v,to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"list__item",children:Object(j.jsx)(r.c,{className:v,to:"/phones",children:"Phones"})}),Object(j.jsx)("li",{className:"list__item",children:Object(j.jsx)(r.c,{className:v,to:"/tablets",children:"Tablets"})}),Object(j.jsx)("li",{className:"list__item",children:Object(j.jsx)(r.c,{className:v,to:"/accessories",children:"Accessories"})})]})]}),Object(j.jsxs)("div",{className:"top-bar__options",children:[("favourites"===l||"phones"===l||"tablets"===l||"accessories"===l)&&Object(j.jsxs)("label",{htmlFor:"input",className:"top-bar__option top-bar__input-container",children:[Object(j.jsx)("input",{id:"input",className:"top-bar__input",type:"text",placeholder:"Search in ".concat(l,"..."),value:s,onChange:e=>(e=>{setTimeout((()=>{}),1e3),a(e.target.value)})(e)}),s?Object(j.jsx)("button",{className:"top-bar__clear-query",type:"button",onClick:()=>a(""),"aria-label":"clear-query"}):Object(j.jsx)("img",{src:N,alt:"magnifier-icon"})]}),!e.pathname.includes("cart")&&Object(j.jsx)(r.c,{className:m()("top-bar__option",{"cart-is-active":e.pathname.includes("favourites")}),to:"/favourites",children:Object(j.jsxs)("div",{className:"icon-container",children:[Object(j.jsx)("img",{className:m()("icon",{"icon--with-amount":c.length>0}),src:u,alt:"favourites"}),c.length>0&&Object(j.jsx)("div",{className:"item-amount",children:c.length})]})}),Object(j.jsx)(r.c,{className:m()("top-bar__option",{"cart-is-active":e.pathname.includes("cart")}),to:"/cart",children:Object(j.jsxs)("div",{className:"icon-container",children:[Object(j.jsx)("img",{className:m()("icon",{"icon--with-amount":t.length>0}),src:O,alt:"shopping bag"}),t.length>0&&Object(j.jsx)("div",{className:"item-amount",children:t.length})]})})]})]})},y=()=>Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(f,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("main",{className:"main-container",children:Object(j.jsx)(n.b,{})})}),Object(j.jsx)(b,{})]});var w=c(17),k=c.n(w);c(40),c(41);const P=e=>{let{card:t,discount:c=!0}=e;const s=Object(n.o)().pathname.includes("phones")?t.phoneId:"phones/".concat(t.phoneId),{cartPhones:a,setCartPhones:i,favourites:l,setFavourites:o}=x(),d=t.id,b=a.map((e=>e.id)),h=l.map((e=>e.id));return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)(r.c,{to:s,className:"card__nav-link",children:Object(j.jsx)("img",{className:"card__image",src:t.image,alt:"phone_image"})}),Object(j.jsx)("h3",{className:"card__name",children:t.name}),Object(j.jsx)("div",{className:"card__price",children:c?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:"card__hot-price",children:"$".concat(t.price)}),Object(j.jsx)("p",{className:"card__full-price",children:"$".concat(t.fullPrice)})]}):Object(j.jsx)("p",{className:"card__hot-price",children:"$".concat(t.fullPrice)})}),Object(j.jsxs)("div",{className:"card__info",children:[Object(j.jsxs)("div",{className:"card__row",children:[Object(j.jsx)("p",{className:"card__char-name",children:"Screen"}),Object(j.jsx)("p",{className:"card__char-value",children:t.screen})]}),Object(j.jsxs)("div",{className:"card__row",children:[Object(j.jsx)("p",{className:"card__char-name",children:"Capacity"}),Object(j.jsx)("p",{className:"card__char-value",children:t.capacity})]}),Object(j.jsxs)("div",{className:"card__row",children:[Object(j.jsx)("p",{className:"card__char-name",children:"RAM"}),Object(j.jsx)("p",{className:"card__char-value",children:t.ram})]})]}),Object(j.jsxs)("div",{className:"card__button",children:[Object(j.jsx)("div",{onClick:()=>{const e={id:d,quantity:1,product:{...t}};if(a.find((t=>t.id===e.id)))return;const c=new Set([...a,e]),s=Array.from(c);i(s)},className:m()("card__link",{"card__link--added":b.includes(d)}),role:"presentation",children:b.includes(d)?"Added to cart":"Add to cart"}),h.includes(d)?Object(j.jsx)("div",{className:"card__icon card__icon--added","data-cy":"addToFavorite",role:"presentation",onClick:()=>{const e=l.filter((e=>e.id!==d));o(e)}}):Object(j.jsx)("div",{className:"card__icon","data-cy":"addToFavorite",role:"presentation",onClick:()=>{if(l.find((e=>e.id===d)))return;const e=[...l,t];o(e)}})]})]})},C=e=>{let{products:t,discount:c,title:s}=e;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"card-container","data-cy":"cardsContainer",children:[Object(j.jsx)("h1",{className:"slick-title",children:s}),Object(j.jsx)(k.a,{dots:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:3,children:t.map((e=>Object(j.jsx)(P,{card:e,discount:c},e.id)))})]})})};var S=c(56),E=c(51),A=c(52),F=c(53),T=c(54),q=c(47),L=c(57),I=c(55);c(42),c(43),c(44),c(45),c(46);S.a.use([E.a,A.a,F.a,T.a,q.a]);const R=()=>Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(L.a,{id:"main",tag:"section",wrapperTag:"ul",slidesPerView:1,spaceBetween:30,loop:!0,autoplay:{delay:5e3},pagination:{clickable:!0},navigation:!0,className:"mySwiper",children:[{id:1,src:"./img/banner-phones.png",alt:"banner-phones"},{id:2,src:"./img/banner-tablets.png",alt:"banner-tablets"},{id:3,src:"./img/banner-accessories.png",alt:"banner-accessories"}].map((e=>Object(j.jsx)(I.a,{tag:"li",children:Object(j.jsx)("img",{className:"swiper-image",src:e.src,style:{listStyle:"none"},alt:e.alt})},e.id)))})});var M=c.p+"static/media/category-phones.c3469de9.png",B=c.p+"static/media/category-tablets.70cceed3.png",$=c.p+"static/media/category-accessories.f97da0dc.png";const G=()=>Object(j.jsxs)("div",{className:"category","data-cy":"categoryLinksContainer",children:[Object(j.jsx)("h1",{className:"category__title",children:"Shop by category"}),Object(j.jsxs)("ul",{className:"category__list",children:[Object(j.jsxs)("li",{className:"category__item",children:[Object(j.jsx)(r.c,{className:"category__link category__phones",to:"/phones",children:Object(j.jsx)("img",{className:"category__image category__image--phones",src:M,alt:"Mobile phones"})}),Object(j.jsx)("h2",{className:"category__subtitle",children:"Mobile phones"}),Object(j.jsx)("p",{className:"category__paragraph",children:"71 modesl"})]}),Object(j.jsxs)("li",{className:"category__item",children:[Object(j.jsx)(r.c,{className:"category__link category__tablets",to:"/tablets",children:Object(j.jsx)("img",{className:"category__image",src:B,alt:"Tablets"})}),Object(j.jsx)("h2",{className:"category__subtitle",children:"Tablets"}),Object(j.jsx)("p",{className:"category__paragraph",children:"0 modesl"})]}),Object(j.jsxs)("li",{className:"category__item",children:[Object(j.jsx)(r.c,{className:"category__link category__accessories",to:"/accessories",children:Object(j.jsx)("img",{className:"category__image",src:$,alt:"Accessories"})}),Object(j.jsx)("h2",{className:"category__subtitle",children:"Accessories"}),Object(j.jsx)("p",{className:"category__paragraph",children:"0 modesl"})]})]})]}),U="https://mate-academy.github.io/react_phone-catalog/_new/products.json";function D(e){return new Promise((t=>setTimeout(t,e)))}function H(){return e="",D(500).then((()=>fetch(U+e))).then((e=>{if(!e.ok)throw new Error;return e.json()}));var e}const J=()=>H();function Q(e,t){const c=[...e];return c.filter((e=>e.category===t)),c}var z=c(58);const Y=()=>Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)(z.a,{color:"#313237",cssOverride:{display:"block",margin:"0 auto",padding:"100 100"},size:80})});let Z=function(e){return e.Phones="phones",e.Tablets="tablets",e.Accessories="accessories",e}({});const V=()=>{const{hotPricePhones:e,setHotPriceProducts:t,newPhones:c,setNewProducts:s}=x(),[a,r]=Object(i.useState)(!0);return Object(i.useEffect)((()=>{(async()=>{try{const e=(await J()).map((e=>({...e,name:"".concat(e.name," (iMT9G2FS/A)")})));t(function(e,t){const c=[...e];return c.filter((e=>e.category===t)),c.sort(((e,t)=>t.fullPrice-t.price-(e.fullPrice-e.price))),c}(e,Z.Phones)),s(function(e,t){const c=[...e];return c.filter((e=>e.category===t)),c.sort(((e,t)=>t.year-e.year)),c}(e,Z.Phones)),r(!1)}catch(e){throw new Error}})()}),[t,s]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(R,{}),a?Object(j.jsx)(Y,{}):Object(j.jsx)(C,{discount:!0,title:"Hot prices",products:e}),Object(j.jsx)(G,{}),a?Object(j.jsx)(Y,{}):Object(j.jsx)(C,{discount:!1,title:"Brand new models",products:c})]})};var W=c(18),K=c.n(W);const X=e=>{const t=Object(i.useRef)(null);return Object(i.useEffect)((()=>{const c=c=>{t.current&&!t.current.contains(c.target)&&e(c)};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}}),[e]),t};function ee(e,t){const c=new URLSearchParams(e.toString());return Object.entries(t).forEach((e=>{let[t,s]=e;null===s?c.delete(t):Array.isArray(s)?(c.delete(t),s.forEach((e=>{c.append(t,e)}))):c.set(t,s)})),c.toString()}const te=e=>{let{children:t,params:c,...s}=e;const[a]=Object(r.d)();return Object(j.jsx)(r.b,{to:{search:ee(a,c)},...s,children:t})};let ce=function(e){return e.AGE="age",e.NAME="name",e.PRICE="price",e}({});const se=()=>{const[e,t]=Object(i.useState)(!1),c=X((()=>t(!1))),[s,a]=Object(i.useState)("Newest"),[n]=Object(r.d)();Object(i.useEffect)((()=>{switch(n.get("sort")){case ce.PRICE:a("Cheapest");break;case ce.NAME:a("Alphabetically");break;default:a("Newest")}}),[n]);const l=()=>{t(!e)},o=[{field:"Newest",id:1,value:ce.AGE},{field:"Alphabetically",id:2,value:ce.NAME},{field:"Cheapest",id:3,value:ce.PRICE}];return Object(j.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown",ref:c,children:[Object(j.jsx)("p",{className:"dropdown__name",children:"Sort by"}),Object(j.jsx)("button",{type:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:l,className:m()("dropdown__button dropdown__button--select",{"dropdown__button--focused":e}),children:Object(j.jsx)("span",{children:s||"Choose a option"})}),e&&Object(j.jsx)("div",{className:"option-container",children:o.map((e=>Object(j.jsx)(te,{role:"button",onClick:()=>(e=>{e.value!==n.get("sort")?t(!1):l()})(e),className:"dropdown__button dropdown__button--option",params:{sort:e.value},children:e.field},e.id)))})]})},ae=e=>{let{currentAmount:t=16,length:c=100}=e;const[s,a]=Object(i.useState)(!1),r=X((()=>a(!1))),n=()=>{a(!s)},l=[{field:"16",id:1,value:16},{field:"8",id:2,value:8},{field:"4",id:3,value:4},{field:"all",id:4,value:c}];return Object(j.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown dropdown--per-page",ref:r,children:[Object(j.jsx)("p",{className:"dropdown__name",children:"Items on page"}),Object(j.jsx)("button",{type:"button",className:m()("dropdown__button dropdown__button--select",{"dropdown__button--focused":s}),"aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:n,onBlur:()=>n,children:Object(j.jsx)("span",{children:t<=16?t:"All"})}),s&&Object(j.jsx)("div",{className:"option-container",children:l.map((e=>Object(j.jsx)(te,{role:"button",onClick:()=>{var c;"all"!==(c=e.field)?+c!==t?a(!1):n():a(!1)},className:"dropdown__button dropdown__button--option",params:{perPage:e.value.toString()},children:e.field},e.id)))})]})};var re=c.p+"static/media/arrow-right-secondary-color.a374b573.svg";const ne=e=>{let{results:t=[]}=e;return Object(j.jsxs)("div",{className:"phones",children:[Object(j.jsx)("p",{className:"path",children:"".concat(t.length," results")}),t.length?Object(j.jsx)("div",{className:"phones-container",children:t.map((e=>Object(j.jsx)(P,{card:e,discount:!0},e.id)))}):Object(j.jsx)("h1",{children:"No matching results"})]})},ie=()=>{const[e,t]=Object(r.d)(),[c,s]=Object(i.useState)(!0),[a,n]=Object(i.useState)([]),l=e.get("sort")||"",o=+(e.get("perPage")||16),[d,b]=Object(i.useState)(a),h=+(e.get("page")||1),{query:m}=x(),[u,O]=Object(i.useState)(d);Object(i.useEffect)((()=>{window.scrollTo(0,0)}),[h]),Object(i.useEffect)((()=>{const e=m.toLowerCase(),t=d.filter((t=>t.name.toLowerCase().includes(e)));O(t)}),[m,d]),Object(i.useEffect)((()=>{const e=(()=>{const e=[...a];switch(l){case ce.PRICE:e.sort(((e,t)=>e.price-t.price));break;case ce.NAME:e.sort(((e,t)=>e.name.localeCompare(t.name)));break;default:e.sort(((e,t)=>t.year-e.year))}return e})();b(e)}),[a,l]),Object(i.useEffect)((()=>{(async()=>{try{const e=(await J()).map((e=>({...e,name:"".concat(e.name," (iMT9G2FS/A)")})));n(Q(e,Z.Phones)),s(!1)}catch(e){throw new Error}})()}),[n]);const p=(h-1)*o,_=p+o,g=d.slice(p,_),N=Math.ceil(a.length/o);return Object(j.jsx)(j.Fragment,{children:m?Object(j.jsx)(ne,{results:u}):Object(j.jsxs)("div",{className:"phones",children:[Object(j.jsxs)("div",{className:"path","data-cy":"breadCrumbs",children:[Object(j.jsx)(r.b,{to:"/",className:"go-home"}),Object(j.jsx)("img",{src:re,alt:"arrow_right"}),Object(j.jsx)("h3",{children:"Phones"})]}),Object(j.jsx)("h1",{className:"phones__title",children:"Mobile phones"}),Object(j.jsx)("p",{className:"phones__paragraph",children:"".concat(a.length," models")}),Object(j.jsxs)("div",{className:"dropdowns-container",children:[Object(j.jsx)(se,{}),Object(j.jsx)(ae,{currentAmount:o,length:a.length})]}),c?Object(j.jsx)(Y,{}):Object(j.jsx)("div",{className:"phones-container",children:g.map((e=>Object(j.jsx)(P,{card:e,discount:!0},e.id)))}),o>=4&&o<a.length&&Object(j.jsx)(K.a,{breakLabel:"...",nextLabel:"",onPageChange:e=>{const c=e.selected+1;t((e=>{const t=new URLSearchParams(e.toString());return t.set("page",c.toString()),t}))},pageRangeDisplayed:5,pageCount:N,previousLabel:"",renderOnZeroPageCount:null,initialPage:h-1})]})})};var le=c.p+"static/media/home.f28213b9.svg";const oe=()=>{const[e,t]=Object(i.useState)([]),[c,s]=Object(i.useState)(!0);Object(i.useEffect)((()=>{(async()=>{try{const e=await J();t(e),t((e=>e.filter((e=>e.category===Z.Tablets)))),s(!1)}catch(e){throw new Error}})()}),[t]);const{query:a}=x(),[r,n]=Object(i.useState)(e);return Object(i.useEffect)((()=>{const t=a.toLowerCase(),c=e.filter((e=>e.name.toLowerCase().includes(t)));n(c)}),[a,e]),Object(j.jsx)(j.Fragment,{children:a?Object(j.jsx)(ne,{results:r}):Object(j.jsxs)("div",{className:"tablets",children:[Object(j.jsxs)("div",{className:"path",children:[Object(j.jsx)("img",{src:le,alt:"home_icon"}),Object(j.jsx)("img",{src:re,alt:"arrow_right"}),Object(j.jsx)("h3",{children:"Tablets"})]}),Object(j.jsx)("h1",{className:"tablets__header",children:"Tablets"}),Object(j.jsx)("div",{children:c?Object(j.jsx)(Y,{}):Object(j.jsx)("div",{className:"phones-container",children:e.map((e=>Object(j.jsx)(P,{card:e,discount:!0},e.id)))})}),!c&&0===e.length&&Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"There are no tablets yet"})})]})})},de=()=>{const[e,t]=Object(i.useState)([]),[c,s]=Object(i.useState)(!0);Object(i.useEffect)((()=>{(async()=>{try{const e=await J();t(e),t((e=>e.filter((e=>e.category===Z.Accessories)))),s(!1)}catch(e){throw new Error}})()}),[t]);const{query:a}=x(),[r,n]=Object(i.useState)(e);return Object(i.useEffect)((()=>{const t=a.toLowerCase(),c=e.filter((e=>e.name.toLowerCase().includes(t)));n(c)}),[a,e]),Object(j.jsx)(j.Fragment,{children:a?Object(j.jsx)(ne,{results:r}):Object(j.jsxs)("div",{className:"tablets",children:[Object(j.jsxs)("div",{className:"path",children:[Object(j.jsx)("img",{src:le,alt:"home_icon"}),Object(j.jsx)("img",{src:re,alt:"arrow_right"}),Object(j.jsx)("h3",{children:"Accessories"})]}),Object(j.jsx)("h1",{className:"tablets__header",children:"Accessories"}),Object(j.jsx)("div",{children:c?Object(j.jsx)(Y,{}):Object(j.jsx)("div",{className:"phones-container",children:e.map((e=>Object(j.jsx)(P,{card:e,discount:!0},e.id)))})}),!c&&0===e.length&&Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"There are no accessories yet"})})]})})},je=()=>Object(j.jsx)("h1",{children:"Not Found Page"});var be=c.p+"static/media/arrow-left-black.7e79118d.svg";const he={id:"",category:"",phoneId:"",itemId:"",name:"",fullPrice:0,price:0,screen:"",capacity:"",ram:"",year:0,image:""},me=()=>{const e=Object(n.o)().pathname.replace("/phones/",""),t=e.replace(e[0],e[0].toUpperCase()),c=Object(n.q)(),[s,a]=Object(i.useState)(!0),[l,o]=Object(i.useState)(null),[d,b]=Object(i.useState)(""),[h,u]=Object(i.useState)([]),{cartPhones:O,setCartPhones:p,favourites:_,setFavourites:g}=x(),N=h.find((t=>t.itemId===e))||he,v=N.id,f=O.map((e=>e.id)),y=_.map((e=>e.id)),w=[null===l||void 0===l?void 0:l.screen,null===l||void 0===l?void 0:l.resolution,null===l||void 0===l?void 0:l.processor,null===l||void 0===l?void 0:l.ram,null===l||void 0===l?void 0:l.camera,null===l||void 0===l?void 0:l.zoom,null===l||void 0===l?void 0:l.cell.join(", ")],k=e=>{b(e)};return Object(i.useEffect)((()=>{(async()=>{try{const c=await(t="/".concat(e,".json"),D(500).then((()=>fetch("https://mate-academy.github.io/react_phone-catalog/_new/products"+t))).then((e=>{if(!e.ok)throw new Error;return e.json()})));o(c),a(!1),k((null===c||void 0===c?void 0:c.images[0])||"")}catch(c){throw new Error}var t})()}),[o,e]),Object(i.useEffect)((()=>{(async()=>{try{const e=(await J()).map((e=>({...e,name:"".concat(e.name," (iMT9G2FS/A)")})));u(Q(e,Z.Phones)),a(!1)}catch(e){throw new Error}})()}),[u]),Object(j.jsxs)("div",{className:"phones",children:[Object(j.jsxs)("div",{className:"path","data-cy":"breadCrumbs",children:[Object(j.jsx)(r.b,{to:"/",className:"go-home"}),Object(j.jsx)("img",{src:re,alt:"arrow_right"}),Object(j.jsx)(r.b,{to:"/phones",className:"phones__prev-page",children:"Phones"}),Object(j.jsx)("img",{src:re,alt:"arrow_right"}),Object(j.jsx)("h3",{children:t})]}),Object(j.jsxs)("button",{type:"button",className:"left-back",onClick:()=>c(-1),"data-cy":"backButton",children:[Object(j.jsx)("img",{src:be,alt:"arrow_right"}),Object(j.jsx)("p",{children:"Back"})]}),Object(j.jsx)("h1",{className:"phones__title phones__title--mb-40px",children:t}),s?Object(j.jsx)(Y,{}):Object(j.jsxs)(j.Fragment,{children:[N.id?Object(j.jsxs)("div",{className:"container-details",children:[Object(j.jsxs)("div",{className:"details",children:[Object(j.jsx)("div",{className:"details__small-photo-container",children:null===l||void 0===l?void 0:l.images.map((e=>Object(j.jsx)("div",{className:m()("details__small-photo",{selected:d===e}),onClick:()=>k(e),role:"presentation",children:Object(j.jsx)("img",{className:"details__small-image",src:e,alt:e})},e)))}),Object(j.jsx)("div",{className:"details__big-photo-container",children:Object(j.jsx)("div",{className:"details__big-photo",children:Object(j.jsx)("img",{className:"details__big-image",src:d,alt:d})})}),Object(j.jsxs)("aside",{className:"aside",children:[Object(j.jsx)("div",{className:"card__price aside__price",children:null!==l&&void 0!==l&&l.priceDiscount?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:"card__hot-price",children:"$".concat(null===l||void 0===l?void 0:l.priceDiscount)}),Object(j.jsx)("p",{className:"card__full-price",children:"$".concat(null===l||void 0===l?void 0:l.priceRegular)})]}):Object(j.jsx)("p",{className:"card__hot-price",children:"$".concat(null===l||void 0===l?void 0:l.priceRegular)})}),Object(j.jsxs)("div",{className:"card__info",children:[Object(j.jsxs)("div",{className:"card__button aside__button",children:[Object(j.jsx)("div",{onClick:()=>{const e={id:v,quantity:1,product:{...N}};if(O.find((t=>t.id===e.id)))return;const t=new Set([...O,e]),c=Array.from(t);p(c)},className:m()("card__link",{"card__link--added":f.includes(v)}),role:"presentation",children:f.includes(v)?"Added to cart":"Add to cart"}),y.includes(v)?Object(j.jsx)("div",{className:"card__icon card__icon--added","data-cy":"addToFavorite",role:"presentation",onClick:()=>{const e=_.filter((e=>e.id!==v));g(e)}}):Object(j.jsx)("div",{className:"card__icon","data-cy":"addToFavorite",role:"presentation",onClick:()=>{if(_.find((e=>e.id===v)))return;const e=[..._,N];g(e)}})]}),Object(j.jsxs)("div",{className:"card__row",children:[Object(j.jsx)("p",{className:"card__char-name",children:"Screen"}),Object(j.jsx)("p",{className:"card__char-value",children:null===l||void 0===l?void 0:l.screen})]}),Object(j.jsxs)("div",{className:"card__row",children:[Object(j.jsx)("p",{className:"card__char-name",children:"Capacity"}),Object(j.jsx)("p",{className:"card__char-value",children:null===l||void 0===l?void 0:l.capacity})]}),Object(j.jsxs)("div",{className:"card__row",children:[Object(j.jsx)("p",{className:"card__char-name",children:"RAM"}),Object(j.jsx)("p",{className:"card__char-value",children:null===l||void 0===l?void 0:l.ram})]})]})]}),Object(j.jsx)("p",{className:"details__phone-id",children:"ID: 802390"})]}),Object(j.jsx)("div",{children:Object(j.jsxs)("section",{className:"info",children:[Object(j.jsxs)("ul",{className:"info__about",children:[Object(j.jsx)("h2",{className:"info__title",children:"About"}),null===l||void 0===l?void 0:l.description.map((e=>Object(j.jsxs)("div",{className:"info__about-article",children:[Object(j.jsx)("h3",{className:"info__about-title",children:e.title}),Object(j.jsxs)("div",{className:"info__about-content",children:[e.text[0],e.text[1]&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:"br"}),Object(j.jsx)("p",{children:e.text[1]})]})]})]},e.title)))]}),Object(j.jsxs)("ul",{className:"info__specs",children:[Object(j.jsx)("h2",{className:"info__title",children:"Tech specs"}),["Screen","Resolution","Processor","RAM","Camera","Zoom","Cell"].map(((e,t)=>Object(j.jsxs)("li",{className:"card__row",children:[Object(j.jsx)("p",{className:"card__char-name",children:e}),Object(j.jsx)("p",{className:"card__char-value",children:w[t]})]},e)))]})]})})]}):Object(j.jsx)("h1",{children:"Phone was not found"}),Object(j.jsx)(C,{products:h,discount:!0,title:"You may also like"})]})]})},ue=()=>{const e=Object(n.q)(),{cartPhones:t,setCartPhones:c}=x(),[s,a]=Object(i.useState)(!1),r=t.reduce(((e,t)=>+e+ +t.product.price*t.quantity),0),l=t.reduce(((e,t)=>+e+t.quantity),0);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"cart-container",children:[Object(j.jsxs)("button",{type:"button",className:"left-back",onClick:()=>e(-1),"data-cy":"backButton",children:[Object(j.jsx)("img",{src:be,alt:"arrow_right"}),Object(j.jsx)("p",{children:"Back"})]}),Object(j.jsx)("h1",{className:"cart-title",children:"Cart"}),t.length>0?Object(j.jsxs)("div",{className:"cart",children:[Object(j.jsx)("ul",{className:"cart__list",children:t.map((e=>{const{image:s,name:a,price:r}=e.product;return Object(j.jsxs)("li",{className:"cart__item",children:[Object(j.jsxs)("div",{className:"cart__item--half",children:[Object(j.jsx)("button",{type:"button",className:"cart__button cart__delete","aria-label":"delete",onClick:()=>(e=>{const s=t.filter((t=>t.id!==e));c(s)})(e.id),"data-cy":"cartDeleteButton"}),Object(j.jsx)("img",{className:"cart__image",src:s,alt:a}),Object(j.jsx)("div",{children:e.product.name})]}),Object(j.jsxs)("div",{className:"cart__item--half",children:[Object(j.jsx)("button",{type:"button","aria-label":"decrease",className:m()("cart__button cart__minus",{"cart__minus--disabled":1===e.quantity}),onClick:()=>(e=>{const s=t.map((t=>t.id===e&&t.quantity>1?{...t,quantity:t.quantity-1}:t));c(s)})(e.id)}),Object(j.jsx)("div",{children:e.quantity}),Object(j.jsx)("button",{onClick:()=>(e=>{const s=t.map((t=>t.id===e?{...t,quantity:t.quantity+1}:t));c(s)})(e.id),type:"button","aria-label":"increase",className:"cart__button cart__plus"}),Object(j.jsx)("div",{className:"cart__phone-price",children:"$".concat(r)})]})]},e.id)}))}),Object(j.jsxs)("div",{className:"cart__aside",children:[Object(j.jsxs)("div",{className:"cart__price-container",children:[Object(j.jsx)("div",{className:"cart__total-price",children:"$".concat(r)}),Object(j.jsx)("div",{className:"cart__total","data-cy":"productQauntity",children:"Total for ".concat(l," items")})]}),Object(j.jsx)("div",{className:"cart__checkout card__link",onClick:()=>{a(!0),setTimeout((()=>{a(!1)}),3e3)},role:"presentation",children:s?"We are sorry, but this feature is not implemented yet":"Checkout"})]})]}):Object(j.jsx)("h2",{children:"Your cart is empty"})]})})},Oe=()=>{const{favourites:e}=x(),{query:t}=x(),[c,s]=Object(i.useState)(e);return Object(i.useEffect)((()=>{const c=t.toLowerCase(),a=e.filter((e=>e.name.toLowerCase().includes(c)));s(a)}),[t,e]),Object(j.jsx)(j.Fragment,{children:t?Object(j.jsx)(ne,{results:c}):Object(j.jsxs)("div",{className:"phones",children:[Object(j.jsxs)("div",{className:"path","data-cy":"breadCrumbs",children:[Object(j.jsx)(r.b,{to:"/",className:"go-home"}),Object(j.jsx)("img",{src:re,alt:"arrow_right"}),Object(j.jsx)("h3",{children:"Favourites"})]}),Object(j.jsx)("h1",{className:"phones__title",children:"Favourites"}),Object(j.jsx)("div",{className:"phones__paragraph",children:"".concat(e.length," items")}),Object(j.jsx)("div",{className:"phones-container",children:e.map((e=>Object(j.jsx)(P,{card:e,discount:!0},e.id)))})]})})};function pe(){const{pathname:e}=Object(n.o)();return Object(i.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null}const _e=()=>Object(j.jsxs)(r.a,{children:[Object(j.jsx)(pe,{}),Object(j.jsx)(n.e,{children:Object(j.jsxs)(n.c,{path:"/",element:Object(j.jsx)(y,{}),children:[Object(j.jsx)(n.c,{path:"home",element:Object(j.jsx)(n.a,{to:"/"})}),Object(j.jsx)(n.c,{index:!0,element:Object(j.jsx)(V,{})}),Object(j.jsx)(n.c,{path:"phones",element:Object(j.jsx)(ie,{})}),Object(j.jsx)(n.c,{path:"phones/:phoneId",element:Object(j.jsx)(me,{})}),Object(j.jsx)(n.c,{path:"tablets",element:Object(j.jsx)(oe,{})}),Object(j.jsx)(n.c,{path:"accessories",element:Object(j.jsx)(de,{})}),Object(j.jsx)(n.c,{path:"cart",element:Object(j.jsx)(ue,{})}),Object(j.jsx)(n.c,{path:"favourites",element:Object(j.jsx)(Oe,{})}),Object(j.jsx)(n.c,{path:"*",element:Object(j.jsx)(je,{})})]})})]});a.a.render(Object(j.jsx)(g,{children:Object(j.jsx)(_e,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.ee6955d5.chunk.js.map