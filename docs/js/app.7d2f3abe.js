(function(e){function t(t){for(var s,r,o=t[0],l=t[1],c=t[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);m&&m(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},i={app:0},n=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/bubbletea/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var m=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},"26b3":function(e,t,a){},"3e29":function(e,t,a){"use strict";var s=a("4204"),i=a.n(s);i.a},4204:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"red"}),a("header",[a("div",{staticClass:"menu-bar menu-bar-animated",on:{click:function(t){e.clicked=!e.clicked}}},[a("div",{staticClass:"menu-bar--bar"})]),a("nav",{directives:[{name:"show",rawName:"v-show",value:e.clicked,expression:"clicked"}],staticClass:"navigation_mobile"},[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"fas fa-house-user"}),e._v(" Home")]),a("router-link",{attrs:{to:"/about"}},[a("i",{staticClass:"far fa-address-card"}),e._v(" Rólunk")]),a("router-link",{attrs:{to:"/contact"}},[a("i",{staticClass:"far fa-envelope"}),e._v(" Kapcsolat")])],1),a("nav",{staticClass:"navigation"},[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),a("router-link",{attrs:{to:"/about"}},[e._v("Rólunk")]),a("router-link",{attrs:{to:"/contact"}},[e._v("Kapcsolat")])],1),a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:"images/logo_1920.jpg",alt:"JBubble logo"}})])],1),a("div",{staticClass:"main_section",on:{click:function(t){return e.clickClose()}}},[a("div",{staticClass:"sidenav"},[a("div",[a("router-link",{attrs:{to:"/Teak"}},[e._v("Tea")])],1),a("div",[a("router-link",{attrs:{to:"/gyumolcsaroma"}},[e._v("Gyümölcs aroma")])],1),a("div",[a("router-link",{attrs:{to:"/tejesaroma"}},[e._v("Tejes aroma")])],1),a("div",[a("router-link",{attrs:{to:"/Teak"}},[e._v("Gyümölcs buborékok")])],1),a("div",[a("router-link",{attrs:{to:"/zselek"}},[e._v("Gyümölcs Zselék")])],1)]),a("div",{staticClass:"content"},[a("router-view")],1)]),e._m(0)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",[a("div",{staticClass:"social_icons"},[a("img",{attrs:{src:"images/PNG/facebook.png"}})]),a("p",[e._v("Bubble Tea | 2020")]),a("div",[a("img",{attrs:{src:"images/PNG/instagram.png"}})])])}],r={data:function(){return{clicked:!1}},created:function(){this.clickClose},methods:{clickClose:function(){this.clicked=!1}}},o=r,l=(a("034f"),a("2877")),c=Object(l["a"])(o,i,n,!1,null,null,null),m=c.exports,u=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("section",{staticClass:"slidesec"},[a("vueper-slides",{ref:"myVueperSlides",attrs:{autoplay:"","pause-on-hover":e.pauseOnHover},on:{"autoplay-pause":function(t){e.internalAutoPlaying=!1},"autoplay-resume":function(t){e.internalAutoPlaying=!0}}},e._l(e.slides,(function(e){return a("vueper-slide",{key:e.id,attrs:{title:e.title,content:e.content,image:e.image}})})),1),e._m(0)],1),e._m(1),e._m(2),e._m(3),e._m(4)])},d=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("#jkoktelbubbletea")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"baracksec"},[a("img",{staticClass:"cetli",attrs:{src:"./images/section/Cetli1.png",width:"100%",alt:"Barack Tea"}}),a("div",{staticClass:"tea"},[a("img",{attrs:{src:"./images/section/barack_tea.png",width:"100%",alt:"Barack Tea"}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"lime"},[a("img",{staticClass:"cetli",attrs:{src:"./images/section/Cetli2.png",alt:""}}),a("div",{staticClass:"tea"},[a("img",{attrs:{src:"./images/section/Teafuvek.png",width:"100%",alt:""}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"korte"},[a("img",{staticClass:"cetli",attrs:{src:"./images/section/cetli3.png",width:"50%",alt:""}}),a("img",{staticClass:"osszetett",attrs:{src:"./images/section/osszetett.png",width:"100%",alt:""}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"shop"},[a("img",{staticClass:"cetli",attrs:{src:"./images/section/Cetli4.png",width:"100%",alt:""}}),a("img",{attrs:{src:"./images/section/utolsofooldalkep.png",width:"100%",alt:""}}),a("img",{staticClass:"lablec",attrs:{src:"./images/section/lablec.png",width:"100%",alt:""}})])}],g=a("b1b5"),f=(a("2ec8"),{name:"home",components:{VueperSlides:g["VueperSlides"],VueperSlide:g["VueperSlide"]},data:function(){return{pauseOnHover:!0,autoPlaying:!0,internalAutoPlaying:!0,slides:[{id:"slide-1",image:"./images/dia1.jpg"},{id:"slide-2",image:"./images/dia2.jpg"},{id:"slide-3",image:"./images/dia3.jpg"}]}}}),v=f,_=(a("fd6f"),Object(l["a"])(v,p,d,!1,null,"064e19b4",null)),b=_.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("h3",[e._v("Rólunk oldal")]),a("p",[e._v("Büszkén mondhatjuk el Nektek, hogy immáron két éve üzemel a "),a("br"),e._v(" J Koktél Bubble Tea.")]),a("hr"),a("p",[e._v("Kecskeméten elsőkézből ajánljuk a Tajvan ról származó különleges ízvilágot. "),a("br"),e._v(" Tea választékunk frissen van főzve, ízesítése lehet Gyümölcsös vagy Tejes - amihez színes feltétet - Gyümölcs Buborékot és vagy Gyümölcs Zselét választhatsz a tökéletes ízért!")]),e._v(" "),a("br"),a("hr"),a("p",[e._v("Megtiszteltetés, hogy a vásárlóink visszajelzése alapján Mi készítjük az ország legfinomabb Bubble Tea jét.")]),a("p",[e._v("Nincs más hátra mint - válaszd ki a teád, ízesítsd és adj feltétet hozzá - még ma.")])])}],k={},y=Object(l["a"])(k,C,h,!1,null,null,null),j=y.exports,z=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("h3",[e._v("Teak page")]),a("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem, debitis cumque expedita a consequuntur non eaque voluptas laudantium. Laborum voluptates ad id hic nobis laboriosam soluta excepturi perferendis eveniet.")])])}],L={},G=Object(l["a"])(L,z,S,!1,null,null,null),w=G.exports,M=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("h3",[e._v("Kapcsolat")]),a("img",{attrs:{src:"./images/contact.png",width:"100%",alt:"Contact"}}),a("a",{staticClass:"contact",attrs:{target:"_blank",href:"https://www.google.com/maps/place/Kecskem%C3%A9t,+Arany+J%C3%A1nos+u.+3,+6000/@46.9086414,19.689936,17z/data=!3m1!4b1!4m5!3m4!1s0x4743da10da0bc2ef:0x103ed06c7c73dc2e!8m2!3d46.9086378!4d19.6921247"}},[a("h4",[e._v("Nézz be hozzánk!")])])])}],O={},Y=Object(l["a"])(O,M,A,!1,null,null,null),$=Y.exports,E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("h3",[e._v("Gyumolcs aroma oldal")]),a("p",[e._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[e._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[e._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[e._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[e._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[e._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[e._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[e._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[e._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")])])}],T={},q=Object(l["a"])(T,E,x,!1,null,null,null),P=q.exports,D=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},B=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("h3",[e._v("Tej aroma oldal")]),a("div",{staticClass:"aromak"},[a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}})])])}],K={},N=K,J=(a("ab83"),Object(l["a"])(N,D,B,!1,null,null,null)),V=J.exports,H=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Z=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("h3",[e._v("Zselék")]),a("div",{staticClass:"aromak"},[a("img",{staticClass:"aroma",attrs:{src:"images/zselek/Áfonya GYÜMÖLCS  zsele-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/zselek/Ananász GYÜMÖLCS  zsele-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/zselek/Licsi GYÜMÖLCS  zsele-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/zselek/Szamóca GYÜMÖLCS  zsele-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/zselek/Zold Alma GYÜMÖLCS  zsele-01.png"}})])])}],R={},F=R,I=(a("3e29"),Object(l["a"])(F,H,Z,!1,null,null,null)),Q=I.exports;s["a"].use(u["a"]);var U=new u["a"]({mode:"history",base:"/bubbletea/",routes:[{path:"/",name:"home",component:b},{path:"/about",name:"about",component:j},{path:"/teak",name:"teak",component:w},{path:"/contact",name:"contact",component:$},{path:"/gyumolcsaroma",name:"gyumaroma",component:P},{path:"/tejesaroma",component:V},{path:"/zselek",component:Q}]});s["a"].config.productionTip=!1,new s["a"]({router:U,render:function(e){return e(m)}}).$mount("#app")},"85ec":function(e,t,a){},ab83:function(e,t,a){"use strict";var s=a("b4d7"),i=a.n(s);i.a},b4d7:function(e,t,a){},fd6f:function(e,t,a){"use strict";var s=a("26b3"),i=a.n(s);i.a}});
//# sourceMappingURL=app.7d2f3abe.js.map