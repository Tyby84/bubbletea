(function(i){function e(e){for(var s,n,r=e[0],l=e[1],m=e[2],c=0,p=[];c<r.length;c++)n=r[c],Object.prototype.hasOwnProperty.call(t,n)&&t[n]&&p.push(t[n][0]),t[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(i[s]=l[s]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,m||[]),a()}function a(){for(var i,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==t[l]&&(s=!1)}s&&(o.splice(e--,1),i=n(n.s=a[0]))}return i}var s={},t={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return i[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=i,n.c=s,n.d=function(i,e,a){n.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:a})},n.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},n.t=function(i,e){if(1&e&&(i=n(i)),8&e)return i;if(4&e&&"object"===typeof i&&i&&i.__esModule)return i;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var s in i)n.d(a,s,function(e){return i[e]}.bind(null,s));return a},n.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return n.d(e,"a",e),e},n.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},n.p="/bubbletea/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var m=0;m<r.length;m++)e(r[m]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(i,e,a){i.exports=a("56d7")},"034f":function(i,e,a){"use strict";var s=a("85ec"),t=a.n(s);t.a},"3e29":function(i,e,a){"use strict";var s=a("4204"),t=a.n(s);t.a},4204:function(i,e,a){},"56d7":function(i,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),t=function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"red"}),a("header",[a("div",{staticClass:"menu-bar menu-bar-animated",on:{click:function(e){i.clicked=!i.clicked}}},[a("div",{staticClass:"menu-bar--bar"})]),a("nav",{directives:[{name:"show",rawName:"v-show",value:i.clicked,expression:"clicked"}],staticClass:"navigation_mobile"},[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"fas fa-house-user"}),i._v(" Home")]),a("router-link",{attrs:{to:"/about"}},[a("i",{staticClass:"far fa-address-card"}),i._v(" Rólunk")]),a("router-link",{attrs:{to:"/contact"}},[a("i",{staticClass:"far fa-envelope"}),i._v(" Kapcsolat")])],1),a("nav",{staticClass:"navigation"},[a("router-link",{attrs:{to:"/"}},[i._v("Home")]),a("router-link",{attrs:{to:"/about"}},[i._v("Rólunk")]),a("router-link",{attrs:{to:"/contact"}},[i._v("Kapcsolat")])],1),a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:"images/logo_1920.jpg",alt:"JBubble logo"}})])],1),a("div",{staticClass:"main_section"},[a("div",{staticClass:"sidenav"},[a("div",[a("router-link",{attrs:{to:"/Teak"}},[i._v("Teák")])],1),a("div",[a("router-link",{attrs:{to:"/gyumolcsaroma"}},[i._v("Gyümölcs aroma")])],1),a("div",[a("router-link",{attrs:{to:"/tejesaroma"}},[i._v("Tejes aroma")])],1),a("div",[a("router-link",{attrs:{to:"/Teak"}},[i._v("Gyümölcs buborékok")])],1),a("div",[a("router-link",{attrs:{to:"/zselek"}},[i._v("Zselék")])],1)]),a("div",{staticClass:"content"},[a("router-view")],1)]),i._m(0)])},o=[function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("footer",[a("div",{staticClass:"social_icons"},[a("img",{attrs:{src:"images/PNG/facebook.png"}})]),a("p",[i._v("Bubble Tea | 2020")]),a("div",[a("img",{attrs:{src:"images/PNG/instagram.png"}})])])}],n={data:function(){return{clicked:!1}}},r=n,l=(a("034f"),a("2877")),m=Object(l["a"])(r,t,o,!1,null,null,null),u=m.exports,c=a("8c4f"),p=function(){var i=this,e=i.$createElement;i._self._c;return i._m(0)},d=[function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",{staticClass:"page"},[a("h3",[i._v("JBubble Tea")]),a("img",{attrs:{src:"./images/welcome.JPG",width:"100%",alt:""}})])}],g={name:"home",components:{}},f=g,v=(a("6bec"),Object(l["a"])(f,p,d,!1,null,"36163caa",null)),_=v.exports,b=function(){var i=this,e=i.$createElement;i._self._c;return i._m(0)},C=[function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",{staticClass:"page"},[a("h3",[i._v("Rólunk oldal")]),a("p",[i._v("Büszkén mondhatjuk el Nektek, hogy immáron két éve üzemel a J Koktél Bubble Tea.")]),a("p",[i._v("Kecskeméten elsőkézből ajánljuk a Tajvan ról származó különleges ízvilágot. Tea választékunk frissen van főzve, ízesítése lehet Gyümölcsös vagy Tejes - amihez színes feltétet - Gyümölcs Buborékot és vagy Gyümölcs Zselét választhatsz a tökéletes ízért!")]),a("p",[i._v("Megtiszteltetés, hogy a vásárlóink visszajelzése alapján Mi készítjük az ország legfinomabb Bubble Tea jét.")]),a("p",[i._v("Nincs más hátra mint - válaszd ki a teád, ízesítsd és adj feltétet hozzá - még ma.")])])}],h={},k=Object(l["a"])(h,b,C,!1,null,null,null),S=k.exports,j=function(){var i=this,e=i.$createElement;i._self._c;return i._m(0)},y=[function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",{staticClass:"page"},[a("h3",[i._v("Teak page")]),a("p",[i._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem, debitis cumque expedita a consequuntur non eaque voluptas laudantium. Laborum voluptates ad id hic nobis laboriosam soluta excepturi perferendis eveniet.")])])}],L={},z=Object(l["a"])(L,j,y,!1,null,null,null),G=z.exports,q=function(){var i=this,e=i.$createElement;i._self._c;return i._m(0)},M=[function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",{staticClass:"page"},[a("h3",[i._v("Kapcsolat oldal")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")])])}],D={},Y=Object(l["a"])(D,q,M,!1,null,null,null),O=Y.exports,w=function(){var i=this,e=i.$createElement;i._self._c;return i._m(0)},A=[function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",{staticClass:"page"},[a("h3",[i._v("Gyumolcs aroma oldal")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")]),a("p",[i._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum dignissimos distinctio adipisci, odio, illum, aperiam ipsum aspernatur officiis assumenda sint doloremque nisi. Dolore ad eligendi ullam sapiente labore praesentium.")])])}],x={},$=Object(l["a"])(x,w,A,!1,null,null,null),E=$.exports,T=function(){var i=this,e=i.$createElement;i._self._c;return i._m(0)},P=[function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",{staticClass:"page"},[a("h3",[i._v("Tej aroma oldal")]),a("div",{staticClass:"aromak"},[a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/tejes/Áfonya GYÜMÖLCS  Aroma-01.png"}})])])}],B={},J=B,K=(a("ab83"),Object(l["a"])(J,T,P,!1,null,null,null)),N=K.exports,Z=function(){var i=this,e=i.$createElement;i._self._c;return i._m(0)},R=[function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",{staticClass:"page"},[a("h3",[i._v("Zselék")]),a("div",{staticClass:"aromak"},[a("img",{staticClass:"aroma",attrs:{src:"images/zselek/Áfonya GYÜMÖLCS  zsele-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/zselek/Ananász GYÜMÖLCS  zsele-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/zselek/Licsi GYÜMÖLCS  zsele-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/zselek/Szamóca GYÜMÖLCS  zsele-01.png"}}),a("img",{staticClass:"aroma",attrs:{src:"images/zselek/Zold Alma GYÜMÖLCS  zsele-01.png"}})])])}],H={},F=H,I=(a("3e29"),Object(l["a"])(F,Z,R,!1,null,null,null)),Q=I.exports;s["a"].use(c["a"]);var U=new c["a"]({mode:"history",base:"/bubbletea/",routes:[{path:"/",name:"home",component:_},{path:"/about",name:"about",component:S},{path:"/teak",name:"teak",component:G},{path:"/contact",name:"contact",component:O},{path:"/gyumolcsaroma",name:"gyumaroma",component:E},{path:"/tejesaroma",component:N},{path:"/zselek",component:Q}]});s["a"].config.productionTip=!1,new s["a"]({router:U,render:function(i){return i(u)}}).$mount("#app")},"6bec":function(i,e,a){"use strict";var s=a("d671"),t=a.n(s);t.a},"85ec":function(i,e,a){},ab83:function(i,e,a){"use strict";var s=a("b4d7"),t=a.n(s);t.a},b4d7:function(i,e,a){},d671:function(i,e,a){}});
//# sourceMappingURL=app.928136e3.js.map