(function(a){function t(t){for(var e,c,l=t[0],n=t[1],o=t[2],u=0,g=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&g.push(i[c][0]),i[c]=0;for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(a[e]=n[e]);m&&m(t);while(g.length)g.shift()();return r.push.apply(r,o||[]),s()}function s(){for(var a,t=0;t<r.length;t++){for(var s=r[t],e=!0,l=1;l<s.length;l++){var n=s[l];0!==i[n]&&(e=!1)}e&&(r.splice(t--,1),a=c(c.s=s[0]))}return a}var e={},i={app:0},r=[];function c(t){if(e[t])return e[t].exports;var s=e[t]={i:t,l:!1,exports:{}};return a[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=a,c.c=e,c.d=function(a,t,s){c.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:s})},c.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},c.t=function(a,t){if(1&t&&(a=c(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var e in a)c.d(s,e,function(t){return a[t]}.bind(null,e));return s},c.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return c.d(t,"a",t),t},c.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var m=n;r.push([0,"chunk-vendors"]),s()})({0:function(a,t,s){a.exports=s("56d7")},"034f":function(a,t,s){"use strict";var e=s("85ec"),i=s.n(e);i.a},"05eb":function(a,t,s){},"0f30":function(a,t){},3463:function(a,t,s){"use strict";var e=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},i=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"page"},[s("h3",{attrs:{id:"top"}},[a._v("Gyümölcs Zselék")]),s("p",[a._v('"A szín az íz és a textúra egyedi kombinációja"')]),s("div",{staticClass:"aromak"},[s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/zselek/Áfonya GYÜMÖLCS  zsele-01.png"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/zselek/Ananász GYÜMÖLCS  zsele-01.png"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/zselek/Licsi GYÜMÖLCS  zsele-01.png"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/zselek/Szamóca GYÜMÖLCS  zsele-01.png"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/zselek/Zold Alma GYÜMÖLCS  zsele-01.png"}}),s("span",{staticClass:"circle"})])]),s("a",{staticClass:"totop",attrs:{href:"#top"}},[s("i",{staticClass:"fas fa-chevron-up"})])])}];s.d(t,"a",(function(){return e})),s.d(t,"b",(function(){return i}))},"50f2":function(a,t,s){"use strict";var e=s("0f30"),i=s.n(e);t["default"]=i.a},"56d7":function(a,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"red"}),s("header",[s("div",{staticClass:"menu-bar menu-bar-animated",on:{click:function(t){a.clicked=!a.clicked}}},[s("div",{staticClass:"menu-bar--bar"})]),s("nav",{directives:[{name:"show",rawName:"v-show",value:a.clicked,expression:"clicked"}],staticClass:"navigation_mobile"},[s("router-link",{attrs:{to:"/"}},[s("i",{staticClass:"fas fa-house-user"}),a._v(" Home")]),s("router-link",{attrs:{to:"/about"}},[s("i",{staticClass:"far fa-address-card"}),a._v(" Rólunk")]),s("router-link",{attrs:{to:"/contact"}},[s("i",{staticClass:"far fa-envelope"}),a._v(" Kapcsolat")]),s("router-link",{attrs:{to:"/menu"}},[s("i",{staticClass:"fas fa-book-open"}),a._v(" Menü")])],1),s("nav",{staticClass:"navigation"},[a._m(0),s("router-link",{attrs:{to:"/"}},[a._v("Home")]),s("router-link",{attrs:{to:"/about"}},[a._v("Rólunk")]),s("router-link",{attrs:{to:"/contact"}},[a._v("Kapcsolat")]),s("router-link",{attrs:{to:"/menu"}},[a._v("Menü")])],1),s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:"images/logo.png",alt:"JBubble logo"}})])],1),s("div",{staticClass:"main_section",on:{click:function(t){return a.clickClose()}}},[s("div",{staticClass:"sidenav"},[s("div",[s("router-link",{attrs:{to:"/Teak"}},[a._v("Teák")])],1),s("div",[s("router-link",{attrs:{to:"/gyumolcsaroma"}},[a._v("Gyümölcs Aromák")])],1),s("div",[s("router-link",{attrs:{to:"/tejesaroma"}},[a._v("Tejes Aromák")])],1),s("div",[s("router-link",{attrs:{to:"/gyumBubi"}},[a._v("Gyümölcs Buborékok")])],1),s("div",[s("router-link",{attrs:{to:"/zselek"}},[a._v("Gyümölcs Zselék")])],1)]),s("div",{staticClass:"content"},[s("transition",{attrs:{name:"fade"}},[s("keep-alive",[s("router-view")],1)],1)],1)]),a._m(1),a._m(2)])},r=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"topsoc"},[s("a",{attrs:{target:"_blank",href:"https://www.facebook.com/jkoktelbubbletea/"}},[s("i",{staticClass:"fab fa-facebook-f"})]),s("a",{attrs:{target:"_blank",href:"https://www.instagram.com/jkoktelbubbletea/"}},[s("i",{staticClass:"fab fa-instagram"})]),s("a",{staticClass:"contact",attrs:{target:"_blank",href:"https://www.google.com/maps/place//data=!4m2!3m1!1s0x4743db8da860d687:0xe6555099849f565b?utm_source=mstt_1"}},[s("i",{staticClass:"fas fa-map-marked-alt"})])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("footer",[s("p",[a._v("© jkoktelbubbletea | 2020")])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"footer"},[s("div",{staticClass:"social_icons"},[s("a",{attrs:{target:"_blank",href:"https://www.facebook.com/jkoktelbubbletea/"}},[s("img",{attrs:{src:"images/PNG/facebook.png"}})])]),s("p",[a._v("© jkoktelbubbletea | 2020")]),s("div",[s("a",{attrs:{target:"_blank",href:"https://www.instagram.com/jkoktelbubbletea/"}},[s("img",{attrs:{src:"images/PNG/instagram.png"}})])])])}],c={data:function(){return{clicked:!1}},mounted:function(){this.clickClose,this.onscroll},methods:{clickClose:function(){this.clicked=!1},onscroll:function(){var a=document.getElementsByClassName("page");console.log(a)}}},l=c,n=(s("034f"),s("2877")),o=Object(n["a"])(l,i,r,!1,null,null,null),m=o.exports,u=s("8c4f"),g=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"page",attrs:{id:"top"}},[s("div",{staticClass:"onlySm"},[s("section",{staticClass:"slidesec",attrs:{id:"top"}},[s("vueper-slides",{ref:"myVueperSlides",attrs:{autoplay:"","pause-on-hover":a.pauseOnHover},on:{"autoplay-pause":function(t){a.internalAutoPlaying=!1},"autoplay-resume":function(t){a.internalAutoPlaying=!0}}},a._l(a.slides,(function(a){return s("vueper-slide",{key:a.id,attrs:{title:a.title,content:a.content,image:a.image}})})),1),a._m(0)],1),a._m(1),a._m(2),a._m(3),a._m(4),a._m(5)]),a._m(6)])},p=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("h3",[a._v("#jkoktelbubbletea")])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("section",{staticClass:"baracksec"},[s("img",{staticClass:"cetli",attrs:{src:"./images/section/Cetli1.png",width:"100%",alt:"Barack Tea"}}),s("div",{staticClass:"tea"},[s("img",{attrs:{src:"./images/section/barack_tea.png",width:"100%",alt:"Barack Tea"}})])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("section",{staticClass:"lime"},[s("img",{staticClass:"cetli",attrs:{src:"./images/section/Cetli2.png",alt:""}}),s("div",{staticClass:"tea"},[s("img",{attrs:{src:"./images/section/Teafuvek.png",width:"100%",alt:""}})])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("section",{staticClass:"korte"},[s("img",{staticClass:"cetli",attrs:{src:"./images/section/cetli3.png",width:"50%",alt:""}}),s("img",{staticClass:"osszetett",attrs:{src:"./images/section/osszetett.png",width:"100%",alt:""}})])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("section",{staticClass:"shop"},[s("img",{staticClass:"cetli",attrs:{src:"./images/section/Cetli4.png",width:"100%",alt:""}}),s("img",{staticClass:"utolsokep",attrs:{src:"./images/section/utolsofooldalkep.png",width:"100%",alt:""}})])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("a",{staticClass:"totop",attrs:{href:"#top"}},[s("i",{staticClass:"fas fa-chevron-up"})])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"onlyLg"},[s("img",{staticClass:"cetli",attrs:{src:"./images/section/Cetli1.png",width:"65%",alt:""}}),s("img",{staticClass:"felsoKozep",attrs:{src:"./images/homeLg/rsz_felso_kozep_foto.png",width:"50%",alt:""}}),s("img",{staticClass:"felsojobb",attrs:{src:"./images/homeLg/rsz_felso_jobb_foto.png",width:"27%",alt:""}}),s("img",{staticClass:"balfelso",attrs:{src:"./images/homeLg/rsz_felso_bal_foto.png",width:"27%",alt:""}}),s("img",{staticClass:"cetli2",attrs:{src:"./images/section/cetli3.png",width:"18%",alt:""}}),s("img",{staticClass:"kozephosszu",attrs:{src:"./images/homeLg/rsz_kozepso_hosszu_foto.png",alt:""}}),s("img",{staticClass:"cetli3",attrs:{src:"./images/section/Cetli2.png",alt:""}}),s("img",{staticClass:"alsoPic",attrs:{src:"./images/homeLg/also.png",width:"100%",alt:""}}),s("img",{staticClass:"cetli4",attrs:{src:"./images/section/Cetli4.png",width:"100%",alt:""}}),s("a",{staticClass:"totop",attrs:{href:"#top"}},[s("i",{staticClass:"fas fa-chevron-up"})])])}],v=s("b1b5"),C=(s("2ec8"),{name:"home",components:{VueperSlides:v["VueperSlides"],VueperSlide:v["VueperSlide"]},data:function(){return{pauseOnHover:!0,autoPlaying:!0,internalAutoPlaying:!0,slides:[{id:"slide-1",image:"./images/dia1.jpg"},{id:"slide-2",image:"./images/dia2.jpg"},{id:"slide-3",image:"./images/dia3.jpg"}]}}}),b=C,d=(s("ea30"),Object(n["a"])(b,g,p,!1,null,"6a87d72b",null)),f=d.exports,k=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},_=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"page rolunk"},[s("h3",{attrs:{id:"top"}},[a._v("Rólunk")]),s("p",[a._v("Büszkén mondhatjuk el Nektek, "),s("br",{staticClass:"onlySm"}),a._v(" hogy immáron két éve üzemel"),s("br"),a._v(" a J Koktél Bubble Tea.")]),s("br"),s("p",[a._v("Kecskeméten elsőkézből ajánljuk a Tajvan-ról származó különleges ízvilágot. "),s("br"),a._v(" Tea választékunk frissen van főzve, ízesítése lehet Gyümölcsös vagy Tejes - amihez színes feltétet - Gyümölcs Buborékot és vagy Gyümölcs Zselét választhatsz a tökéletes ízért!")]),a._v(" "),s("br"),s("p",[a._v("Megtiszteltetés, hogy a vásárlóink visszajelzése alapján Mi készítjük az ország legfinomabb Bubble Tea-jét.")]),s("br"),s("p",[a._v("Nincs más hátra mint - válaszd ki a teád, ízesítsd és adj feltétet hozzá "),s("br"),a._v(" - még ma.")]),s("a",{staticClass:"totop onlySm",attrs:{href:"#top"}},[s("i",{staticClass:"fas fa-chevron-up"})])])}],h={},y=Object(n["a"])(h,k,_,!1,null,null,null),z=y.exports,S=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},M=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"page teak",staticStyle:{"text-align":"center"}},[s("h3",{attrs:{id:"top"}},[a._v("Teák")]),s("p",[a._v('"Igazi tealevélből készűl az Igazi Tea"')]),s("div",{staticClass:"aromak"},[s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/feketetea.png",alt:"Fekete Tea"}}),s("span",{staticClass:"circle teakor"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/zoldtea.png",alt:"Zöld Tea"}}),s("span",{staticClass:"circle teakor"})])]),s("a",{staticClass:"totop onlySm",attrs:{href:"#top"}},[s("i",{staticClass:"fas fa-chevron-up"})])])}],G={},j=Object(n["a"])(G,S,M,!1,null,null,null),w=j.exports,L=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},A=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"page kontaktOldal"},[s("h3",{attrs:{id:"top"}},[a._v("Kapcsolat")]),s("div",{staticClass:"onlySm"},[s("img",{staticClass:"contactImg",attrs:{src:"./images/KapcsolatMob.png",width:"100%",alt:"Contact"}})]),s("div",{staticClass:"onlyLg"},[s("img",{staticClass:"contactImg",attrs:{src:"./images/contactpc.png",width:"100%",alt:"Contact"}})]),s("a",{staticClass:"contact",attrs:{target:"_blank",href:"https://www.google.com/maps/place//data=!4m2!3m1!1s0x4743db8da860d687:0xe6555099849f565b?utm_source=mstt_1"}},[s("h4",[s("i",{staticClass:"fas fa-map-marker-alt"}),a._v(" Nézz be hozzánk!")])])])}],Y={},E=Object(n["a"])(Y,L,A,!1,null,null,null),$=E.exports,T=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},x=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"page"},[s("h3",{attrs:{id:"top"}},[a._v("Gyümölcs Aromák")]),s("p",[a._v('"Az édes és savanyú ízek változatos választéka, amelyeket ízlésedre formálhatod"')]),s("div",{staticClass:"aromak"},[s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/aroma/Áfonya GYÜMÖLCS  Aroma-01.png",alt:"Áfonya aroma"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/aroma/Ananász GYÜMÖLCS  Aroma-01.png",alt:"Ananász aroma"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/aroma/Barack GYÜMÖLCS  Aroma-01.png",alt:"Barack aroma"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/aroma/Görögdinnye GYÜMÖLCS  Aroma-01.png",alt:"Görögdinnye aroma"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/aroma/Gránátalma GYÜMÖLCS  Aroma-01.png",alt:"Gránátalma aroma"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/aroma/Guava GYÜMÖLCS  Aroma-01.png",alt:"Guava aroma"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/aroma/Kiwi GYÜMÖLCS  Aroma-01.png",alt:"Kiwi aroma"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/aroma/Licsi GYÜMÖLCS  Aroma-01.png",alt:"Licsi aroma"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/aroma/Mangó GYÜMÖLCS  Aroma-01.png",alt:"Mangó aroma"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/aroma/Maracuja GYÜMÖLCS  Aroma-01.png",alt:"Maracuja aroma"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/aroma/Meggy GYÜMÖLCS  Aroma-01.png",alt:"Meggy aroma"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/aroma/Mini mandarin GYÜMÖLCS  Aroma-01.png",alt:"Mini mandarin aroma"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/aroma/Narancs GYÜMÖLCS  Aroma-01.png",alt:"Narancs aroma"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/aroma/Sárkány Gyümölcs GYÜMÖLCS  Aroma-01.png",alt:"Sárkány Gyümölcs aroma"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/aroma/Szamóca GYÜMÖLCS  Aroma-01.png",alt:"Szamóca aroma"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/aroma/Szilva GYÜMÖLCS  Aroma-01.png",alt:"Szilva aroma"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/aroma/Szõlõ GYÜMÖLCS  Aroma-01.png",alt:"szőlő aroma"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/aroma/Zöld alma GYÜMÖLCS  Aroma-01.png",alt:"Zöld alma aroma"}}),s("span",{staticClass:"circle"})])]),s("a",{staticClass:"totop",attrs:{href:"#top"}},[s("i",{staticClass:"fas fa-chevron-up"})])])}],O={},B=Object(n["a"])(O,T,x,!1,null,null,null),K=B.exports,P=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},J=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"page"},[s("h3",{attrs:{id:"top"}},[a._v("Tejes Aromák")]),s("p",[a._v('"Az egzotikus gyümölcsöknek köszönhető '),s("br",{staticClass:"onlySm"}),a._v('az egyedi tej tea íz"')]),s("div",{staticClass:"aromak"},[s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/tejes/Áfonya TEJ  Aroma-01.png"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/tejes/Görögdinnye TEJ  Aroma-01.png"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/tejes/Matcha TEJ  Aroma-01.png"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/tejes/Mogyoros Kave TEJ  Aroma-01.png"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/tejes/Mokka kave TEJ  Aroma-01.png"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/tejes/Tiramisu Kave TEJ  Aroma-01.png"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/tejes/Truffle csoki TEJ  Aroma-01.png"}}),s("span",{staticClass:"circle"})])]),s("a",{staticClass:"totop",attrs:{href:"#top"}},[s("i",{staticClass:"fas fa-chevron-up"})])])}],N={},Z=Object(n["a"])(N,P,J,!1,null,null,null),V=Z.exports,I=s("f778"),H=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},R=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"page"},[s("h3",[a._v("Menü")]),s("div",{staticClass:"onlySm"},[s("img",{staticClass:"menupic",staticStyle:{margin:"-45px auto 0 auto",width:"100%"},attrs:{src:"./images/Menu.png",alt:"MenüSm"}})]),s("div",{staticClass:"onlyLg"},[s("img",{staticStyle:{margin:"0 auto",display:"block"},attrs:{src:"./images/menupc.png",alt:"Menü",width:"65%"}})])])}],F={},q=Object(n["a"])(F,H,R,!1,null,null,null),D=q.exports,Q=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},U=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"page"},[s("h3",{attrs:{id:"top"}},[a._v("Gyümölcs Buborékok")]),s("p",[a._v('"A gyöngygolyócskák ízének széles skálája, '),s("br",{staticClass:"onlySm"}),a._v('ráharapva robbanak"')]),s("div",{staticClass:"aromak"},[s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/bubik/Áfonya GYÜMÖLCS  bubiv2.png",alt:"Áfonya buborék"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/bubik/Ananász GYÜMÖLCS  bubiv2.png",alt:"Ananász buborék"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/bubik/Banán GYÜMÖLCS  bubiv2.png",alt:"Banán buborék"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/bubik/Barack GYÜMÖLCS  bubiv2.png",alt:"Barack buborék"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/bubik/csoki GYÜMÖLCS  bubiv2.png",alt:"Csoki buborék"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/bubik/Gránátalma GYÜMÖLCS  bubiv2.png",alt:"Gránátalma buborék"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/bubik/kávé GYÜMÖLCS  bubiv2.png",alt:"Kávé buborék"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/bubik/Kiwi GYÜMÖLCS  bubiv2.png",alt:"Kiwi buborék"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/bubik/Licsi GYÜMÖLCS  bubiv2.png",alt:"Licsi buborék"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/bubik/Málna GYÜMÖLCS  bubiv2.png",alt:"Málna buborék"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/bubik/Mangó GYÜMÖLCS  bubiv2.png",alt:"Mangó buborék"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/bubik/Meggy GYÜMÖLCS  bubiv2.png",alt:"Meggy buborék"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/bubik/Narancs GYÜMÖLCS  bubiv2.png",alt:"Narancs buborék"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/bubik/Sárgadinnye GYÜMÖLCS  bubiv2.png",alt:"Sárgadinnye buborék"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/bubik/Szamóca GYÜMÖLCS  bubiv2.png",alt:"Szamóca buborék"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/bubik/Szõlõ GYÜMÖLCS  bubiv2.png",alt:"Szőlő buborék"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/bubik/Vörös Áfonya GYÜMÖLCS  bubiv2.png",alt:"Vörös Áfonya buborék"}}),s("span",{staticClass:"circle"})]),s("div",[s("img",{staticClass:"aroma",attrs:{src:"./images/bubik/Zöld alma GYÜMÖLCS  bubiv2.png",alt:"Zöld alma buborék"}}),s("span",{staticClass:"circle"})])]),s("a",{staticClass:"totop",attrs:{href:"#top"}},[s("i",{staticClass:"fas fa-chevron-up"})])])}],W={},X=Object(n["a"])(W,Q,U,!1,null,null,null),aa=X.exports;e["a"].use(u["a"]);var ta=new u["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"home",component:f},{path:"/about",name:"about",component:z},{path:"/teak",name:"teak",component:w},{path:"/contact",name:"contact",component:$},{path:"/gyumolcsaroma",name:"gyumaroma",component:K},{path:"/tejesaroma",component:V},{path:"/zselek",component:I["default"]},{path:"/menu",component:D},{path:"/gyumBubi",component:aa}],scrollBehavior:function(a,t,s){return document.getElementById("top").scrollIntoView(),null}});e["a"].config.productionTip=!1,new e["a"]({router:ta,render:function(a){return a(m)}}).$mount("#app")},"85ec":function(a,t,s){},ea30:function(a,t,s){"use strict";var e=s("05eb"),i=s.n(e);i.a},f778:function(a,t,s){"use strict";var e=s("3463"),i=s("50f2"),r=s("2877"),c=Object(r["a"])(i["default"],e["a"],e["b"],!1,null,null,null);t["default"]=c.exports}});
//# sourceMappingURL=app.93024612.js.map