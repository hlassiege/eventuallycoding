(window.webpackJsonp=window.webpackJsonp||[]).push([[19,11],{306:function(t,e,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("79cc11aa",content,!0,{sourceMap:!1})},307:function(t,e,n){"use strict";n.r(e);n(314),n(11),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338);var o=n(339),r={name:"HeroSection",mounted:function(){!function(){var canvas=document.getElementById("c");document.addEventListener("DOMContentLoaded",(function(){canvas.style.opacity=1}));var t=function(t){for(var e=new Float32Array(3*t),i=0;i<t;i++)e[i]=10*(Math.random()-.5);return e};document.addEventListener("mousemove",(function(t){t.clientX,t.clientY})),function(){var canvas=document.getElementById("c"),e=new o.j({canvas:canvas});e.setClearColor(new o.c("#202b3d"));var n=new o.h,r=new o.d(16777215,1);r.position.set(-1,2,4),n.add(r);var c=new o.e(75,2,1.5,5);c.position.z=2;var l=[new o.b,new o.b];l[0].setAttribute("position",new o.a(t(350),3)),l[1].setAttribute("position",new o.a(t(1500),3));var d=new o.i,m=[new o.g({size:.05,map:d.load("/sp1.png"),transparent:!0,color:"#0e6594"}),new o.g({size:.075,map:d.load("/sp2.png"),transparent:!0})],f=new o.f(l[0],m[0]),v=new o.f(l[1],m[1]);n.add(f),n.add(v),requestAnimationFrame((function t(time){if(function(t){var canvas=t.domElement,e=canvas.clientWidth,n=canvas.clientHeight,o=canvas.width!==e||canvas.height!==n;return o&&t.setSize(e,n,!1),o}(e)){var o=e.domElement;c.aspect=o.clientWidth/o.clientHeight,c.updateProjectionMatrix()}f.rotation.y=5e-5*time,f.rotation.x=5e-5*time,v.rotation.y=5e-5*time,v.rotation.x=5e-5*time,e.render(n,c),requestAnimationFrame(t)}))}()}()}},c=(n(310),n(20)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"flex items-center justify-center h-128 bg-transparent"},[n("canvas",{staticClass:"-z-10 absolute w-full h-128 block",attrs:{id:"c"}}),t._v(" "),n("div",{staticClass:"clip-ellipse absolute top-124  rotate-180"}),t._v(" "),t._t("content")],2)}),[],!1,null,null,null);e.default=component.exports},310:function(t,e,n){"use strict";n(306)},311:function(t,e,n){var o=n(57)((function(i){return i[1]}));o.push([t.i,".nuxt-content h2{font-weight:700;font-size:28px}.nuxt-content h3{font-weight:700;font-size:22px}.nuxt-content p{margin-bottom:20px}.clip-ellipse{-webkit-clip-path:ellipse(60% 100% at 50% 0);clip-path:ellipse(60% 100% at 50% 0);--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));height:100px;width:100%}",""]),o.locals={},t.exports=o},366:function(t,e,n){var content=n(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("668156ee",content,!0,{sourceMap:!1})},453:function(t,e,n){"use strict";n(366)},454:function(t,e,n){var o=n(57)((function(i){return i[1]}));o.push([t.i,".clip-ellipse[data-v-5af0f3ce]{-webkit-clip-path:ellipse(60% 100% at 50% 0);clip-path:ellipse(60% 100% at 50% 0);--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));height:100px;width:100%}",""]),o.locals={},t.exports=o},505:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(44),n(149)),c={components:{HeroSection:n(307).default},data:function(){return{siteMetaInfo:r.a,siteMetadata:r.a}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("resources").where({title:"Ressources"}).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article[0]});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Ressources | "+r.a.title,meta:[{hid:"description",name:"description",content:"Voici une liste de ressources assez variés que j'utilise fréquement ou qui m'ont influencé."},{hid:"og:description",name:"og:description",content:"Voici une liste de ressources assez variés que j'utilise fréquement ou qui m'ont influencé."},{hid:"og:type",name:"og:type",content:"article"},{hid:"og:title",name:"og:title",content:this.article.title},{hid:"og:url",name:"og:url",content:"https://eventuallycoding.com/resources"},{hid:"og:image",name:"og:image",content:"https://eventuallycoding.com/images/covers/"+this.article.cover},{name:"og:image:alt",content:this.article.title},{name:"twitter:text:title",content:this.article.title},{name:"twitter:image",content:"https://eventuallycoding.com/images/covers/"+this.article.cover},{name:"twitter:card",content:"summary"}],link:[{rel:"canonical",href:"https://eventuallycoding.com/resources"}]}}},l=(n(453),n(20)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("keep-alive",[n("HeroSection",{scopedSlots:t._u([{key:"content",fn:function(){return[n("img",{staticClass:"absolute top-96 w-96 -translate-y-32",attrs:{src:"/images/covers/"+t.article.cover,alt:t.article.title}})]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 mt-10"},[n("h1",{staticClass:"text-4xl text-gray-700 font-extrabold mb-10 text-center"},[t._v("\n      "+t._s(t.article.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"flex items-center font-medium mt-6 sm:mx-3 justify-center"},[n("nuxt-img",{staticClass:"mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800",attrs:{src:t.siteMetadata.author_image,loading:"lazy",alt:""}}),t._v(" "),n("div",[n("div",{staticClass:"text-slate-900 dark:text-slate-200"},[t._v("\n          "+t._s(t.siteMetadata.author)+"\n        ")]),t._v(" "),n("a",{staticClass:"text-sky-500 hover:text-sky-600 dark:text-sky-400",attrs:{target:"_blank",href:t.siteMetadata.twitter+t.siteMetadata.twitter_user}},[t._v("\n          @"+t._s(t.siteMetadata.twitter_user)+"\n        ")])])],1),t._v(" "),n("img",{staticClass:"mx-auto w-4/5 my-10 rounded-md drop-shadow-sm",attrs:{src:t.article.image}}),t._v(" "),n("nuxt-content",{staticClass:"prose  min-w-full p-10 mx-auto",attrs:{document:t.article}})],1)],1)}),[],!1,null,"5af0f3ce",null);e.default=component.exports;installComponents(component,{HeroSection:n(307).default})}}]);