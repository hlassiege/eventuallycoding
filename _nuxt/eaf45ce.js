(window.webpackJsonp=window.webpackJsonp||[]).push([[18,5,6,7,11,14],{306:function(t,e,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("79cc11aa",content,!0,{sourceMap:!1})},307:function(t,e,n){"use strict";n.r(e);n(314),n(11),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338);var r=n(339),o={name:"HeroSection",mounted:function(){!function(){var canvas=document.getElementById("c");document.addEventListener("DOMContentLoaded",(function(){canvas.style.opacity=1}));var t=function(t){for(var e=new Float32Array(3*t),i=0;i<t;i++)e[i]=10*(Math.random()-.5);return e};document.addEventListener("mousemove",(function(t){t.clientX,t.clientY})),function(){var canvas=document.getElementById("c"),e=new r.j({canvas:canvas});e.setClearColor(new r.c("#202b3d"));var n=new r.h,o=new r.d(16777215,1);o.position.set(-1,2,4),n.add(o);var l=new r.e(75,2,1.5,5);l.position.z=2;var c=[new r.b,new r.b];c[0].setAttribute("position",new r.a(t(350),3)),c[1].setAttribute("position",new r.a(t(1500),3));var d=new r.i,m=[new r.g({size:.05,map:d.load("/sp1.png"),transparent:!0,color:"#0e6594"}),new r.g({size:.075,map:d.load("/sp2.png"),transparent:!0})],v=new r.f(c[0],m[0]),f=new r.f(c[1],m[1]);n.add(v),n.add(f),requestAnimationFrame((function t(time){if(function(t){var canvas=t.domElement,e=canvas.clientWidth,n=canvas.clientHeight,r=canvas.width!==e||canvas.height!==n;return r&&t.setSize(e,n,!1),r}(e)){var r=e.domElement;l.aspect=r.clientWidth/r.clientHeight,l.updateProjectionMatrix()}v.rotation.y=5e-5*time,v.rotation.x=5e-5*time,f.rotation.y=5e-5*time,f.rotation.x=5e-5*time,e.render(n,l),requestAnimationFrame(t)}))}()}()}},l=(n(310),n(20)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"flex items-center justify-center h-128 bg-transparent"},[n("canvas",{staticClass:"-z-10 absolute w-full h-128 block",attrs:{id:"c"}}),t._v(" "),n("div",{staticClass:"clip-ellipse absolute top-124  rotate-180"}),t._v(" "),t._t("content")],2)}),[],!1,null,null,null);e.default=component.exports},310:function(t,e,n){"use strict";n(306)},311:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,".nuxt-content h2{font-weight:700;font-size:28px}.nuxt-content h3{font-weight:700;font-size:22px}.nuxt-content p{margin-bottom:20px}.clip-ellipse{-webkit-clip-path:ellipse(60% 100% at 50% 0);clip-path:ellipse(60% 100% at 50% 0);--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));height:100px;width:100%}",""]),r.locals={},t.exports=r},313:function(t,e,n){"use strict";n.r(e);n(24),n(50),n(28),n(60),n(45),n(73);var r={name:"BlogCard",props:["title","description","date","slug","path","img","tags","currentTag"],emits:["changeCurrentTag"],data:function(){return{postTitle:this.title,postDescription:this.description,postSlug:this.slug,postDate:this.date,postLink:this.path.replace("articles/","")}},computed:{isFiltered:function(){return!this.currentTag||this.tags&&this.tags.includes(this.currentTag)}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("fr",{weekday:"short",year:"numeric",month:"short",day:"numeric"})}}},o=n(20),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isFiltered?n("div",{staticClass:"mb-4 bg-white border border-gray-200 min-h-[400px] border-b-2 border-b-slate-400\nhover:drop-shadow-xl hover:border-gray-300 transition-all hover:-translate-y-1"},[n("nuxt-link",{staticClass:"overflow-hidden ",attrs:{to:t.postLink}},[t.img?n("img",{staticClass:"object-cover w-full h-52",attrs:{src:"/images/"+t.img,alt:""}}):n("img",{staticClass:"object-contain w-full h-52",attrs:{src:"/images/post-anonymous.jpg",alt:""}})]),t._v(" "),n("div",{staticClass:"p-3"},[n("div",{staticClass:"text-xs text-slate-400 left-2"},[t._v("\n        "+t._s(t.formatDate(t.postDate))+"\n      ")]),t._v(" "),n("h5",{staticClass:"text-lg font-bold "},[n("nuxt-link",{staticClass:"overflow-hidden ",attrs:{to:t.postLink}},[t._v("\n        "+t._s(t.postTitle)+"\n        ")])],1),t._v(" "),n("p",{staticClass:"mt-2 text-[12px] my-3 flex flex-wrap -m-1 "},t._l(t.tags,(function(e){return n("a",{key:e,staticClass:"m-1 leading-loose text-slate-400 border border-current lowercase px-2 rounded font-medium",attrs:{href:"/blog?tag="+e},on:{click:function(n){return n.preventDefault(),t.$emit("changeCurrentTag",e)}}},[t._v("#"+t._s(e))])})),0)])],1):t._e()}),[],!1,null,null,null);e.default=component.exports},341:function(t,e,n){var content=n(353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("7865bed9",content,!0,{sourceMap:!1})},342:function(t,e,n){var content=n(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("3f533b74",content,!0,{sourceMap:!1})},352:function(t,e,n){"use strict";n(341)},353:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,".card-lateral:hover img[data-v-f2b33ad2]{--tw-skew-x:6deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-property:all;transition-duration:300ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}",""]),r.locals={},t.exports=r},354:function(t,e,n){"use strict";n(342)},355:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,'.timeline[data-v-18f62b6c]{position:relative}.timeline .timeline-item[data-v-18f62b6c]{width:100%}.timeline .timeline-item .timeline-content[data-v-18f62b6c]{position:relative;padding:10px 30px;border-radius:4px;background:#fbfbfb;box-shadow:0 20px 25px -15px rgba(0,0,0,.3)}.timeline .timeline-item .timeline-content[data-v-18f62b6c]:after{content:"";position:absolute;width:0;height:0;top:30px;right:-15px;border-color:transparent transparent transparent #f5f5f5;border-style:solid;border-width:10px 0 10px 15px}.timeline .timeline-item:nth-child(2n) .timeline-content[data-v-18f62b6c]{float:right}.timeline .timeline-item:nth-child(2n) .timeline-content[data-v-18f62b6c]:after{content:"";position:absolute;width:0;height:0;top:30px;left:-15px;border-color:transparent #f5f5f5 transparent transparent;border-style:solid;border-width:10px 15px 10px 0}.timeline .timeline-item[data-v-18f62b6c]:after{content:"";display:block;clear:both}.timeline .timeline-img[data-v-18f62b6c]{width:30px;height:30px;background:#3f51b5;border-radius:50%;position:absolute;left:50%;margin-top:25px;margin-left:-15px}.timeline .timeline-card[data-v-18f62b6c]{padding:0!important}.timeline .timeline-card p[data-v-18f62b6c]{padding:0 20px}.timeline .timeline-card a[data-v-18f62b6c]{margin-left:20px}.timeline[data-v-18f62b6c]:before{content:"";background:#c5cae9;width:5px;height:95%;position:absolute;left:50%;transform:translateX(-50%)}@media screen and (max-width:768px){.timeline[data-v-18f62b6c]:before{left:-25px;transform:translateX(-70%)}.timeline .timeline-img[data-v-18f62b6c]{left:-26px}.timeline .timeline-content[data-v-18f62b6c]{max-width:100%;width:100%;margin-left:10px}.timeline .timeline-item:nth-child(2n) .timeline-content[data-v-18f62b6c]{float:none}.timeline .timeline-item:nth-child(odd) .timeline-content[data-v-18f62b6c]:after{content:"";position:absolute;width:0;height:0;top:30px;left:-15px;border-color:transparent #f5f5f5 transparent transparent;border-style:solid;border-width:10px 15px 10px 0}}',""]),r.locals={},t.exports=r},367:function(t,e,n){var content=n(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("19c29a46",content,!0,{sourceMap:!1})},369:function(t,e,n){"use strict";n.r(e);n(11),n(21);var r=[{event:"Co-fondateur et CTO chez Malt",date:"201(2|4)- En cours",location:"Europe",description:"Malt c'est tout simplement LA place de marché pour les freelances qui cherchent à trouver des clients et se simplifier la vie.<br>\n                Au moment où j’écris ces lignes (édité en 2022), Malt c’est 500 personnes qui travaillent depuis Paris, Lyon, Munich, Madrid, Berlin, Bruxelles, Amsterdam et en remote, 800 000 inscrits, 300 000 freelances.<br>\n                Et tout ça, ça a commencé en 2012 avec 3 personnes ! <br>\n                Sur ce blog, vous retrouverez une bonne partie de ce que j'ai appris dans cette super aventure.",images:[{src:"/logos/malt.png",alt:"Malt logo",class:"w-10 h-10 mx-3"}]},{event:"Freelance",date:"2010-201(4|6)",location:"Paris-Lyon",description:"Enfin Free ! <br> Ce sera mes premiers pas dans l'entreprenariat et me donnera l'occasion de créer 3 entreprises sur la période : Lateral-thoughts, Localizeyourapp et Malt.<br>Cela constitue un autre gros thème de ce blog : l'entreprenariat, le freelancing et le développement web.",images:[{src:"/logos/lateral-thoughts.svg",alt:"Logo Lateral-thoughts",class:"h-8 mx-3"},{src:"/logos/malt.png",alt:"Logo Malt",class:"w-10 h-10 mx-5 my-auto"},{src:"/logos/localizeyourapp.jpg",alt:"Logo Localizeyourapp",class:"h-10 mx-6"},{src:"/logos/enedis.jpg",alt:"Logo Enedis",class:"w-10 h-10 mx-4 my-auto"},{src:"/logos/egencia.jpg",alt:"Logo Egencia",class:"w-10 h-10 mx-4 my-auto"},{src:"/logos/seb.jpg",alt:"Logo Seb",class:"w-10 h-10 mx-4 my-auto"},{src:"/logos/directassurance.jpg",alt:"Logo Direct Assurance",class:"w-10 h-10 mx-4 my-auto"}]},{event:"Edition de logiciel - Finance",date:"2006-2010",location:"Paris",description:"J'ai eu le nez creux en choisissant le domaine de la finance juste au moment de la crise des subprimes ! \\o/\n                <br>\n                Mais c'est ici que je découvre que j'adore faire du produit et penser long terme. <br>\n                Et cela m'influencera sur tout le reste de mon parcours, par les personnes que je vais rencontrer, par les méthodes de travail, l'international,\n                un peu aussi malheureusement par ce que je ne souhaitais pas reproduire moi-même en terme de management.<br>\n                Cela correspond aux tout premiers billets de ce blog (une partie n'est plus en ligne) !",images:[{src:"/logos/sungard-vector-logo.png",alt:"Logo sungard",class:"h-10 mx-3"}]},{event:"Conseil et monde du service",date:"2002-2006",location:"Paris",description:"Voici venu le temps des costumes, des clients corporate et du monde de la prestation, un univers à part entière.<br>\n                Ce sera cependant très formateur avec une grande diversité d'expériences et plein de belles premières rencontres et de supers apprentissages.<br>\n                Mais aussi une certitude, si je refaisais du service dans le futur, ce ne serait pas dans ces conditions (coucou le freelancing!).",images:[{src:"/logos/sg.jpg",alt:"Logo Société Générale",class:"w-10 h-10 mx-5 my-auto"},{src:"/logos/bouygyes.jpg",alt:"Logo Bouygues Telecom",class:"w-10 h-10 mx-5 my-auto"},{src:"/logos/orange.jpg",alt:"Logo Orange",class:"w-10 h-10 mx-5 my-auto"}]},{event:"Premier job dans une startup",date:"2001",location:"Paris",description:"Ici on peut constater l'instinct, juste avant l'explosion de la bulle internet.<br>\n                2001 pour l'anecdote c'est : l'explosion de la bulle internet, la fin du passage à l'Euro, le World Trade center... <br>\n                Le marché du travail était loin d'être rose après ça.",images:[]},{event:"naissance",date:"20eme siècle",location:"France, planète terre",description:"J'ai plus la date exacte, c'est pas important ;)<br>\n                Et vous savez quoi, je suis toujours nostalgique des films des années 80/90.",images:[]}],o={title:"EventuallyCoding",author:"Hugo Lassiège",author_image:"/author.png",position:"CTO",location:"Lyon, France",slogan:"A la fin de l'envoi, je code !",description:"Speaking about the stuff I do, product, efficiency, tech stack and more.",language:"fr-FR",theme:"system",siteUrl:"https://eventuallycoding.com/",siteRepo:"#",image:"~/assets/author.png",github:"https://github.com/hlassiege",githubUser:"hlassiege",twitter:"https://twitter.com/",twitter_user:"hugolassiege",stackoverflow:"#",youtube:"#",linkedin:"https://www.linkedin.com/in/hugolassiege/",rss:"/rss.xml"},l={data:function(){return{siteMetaData:o,timeline:r}},mounted:function(){document.querySelectorAll(".timeline-item").forEach((function(t){new IntersectionObserver((function(t){t.forEach((function(t){var e=t.target.dataset.animate;t.isIntersecting?t.target.classList.add(e):t.target.classList.remove(e)}))})).observe(t)}))}},c=(n(354),n(20)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-24"},[t._m(0),t._v(" "),n("section",{staticClass:"timeline w-5/6 md:w-full lg:w-3/4  mx-auto "},[n("div",{},t._l(t.timeline,(function(e,r){return n("div",{key:e.event,staticClass:"timeline-item mb-20",attrs:{"data-animate":r%2==0?"animate-fade-in-left":"animate-fade-in-right"}},[n("div",{staticClass:"timeline-img"}),t._v(" "),n("div",{staticClass:"timeline-content w-5/12 "},[n("div",{staticClass:"title flex-row flex "},[n("div",[n("h3",{staticClass:"flex items-center mb-1 text-lg font-semibold text-gray-900"},[t._v("\n                "+t._s(e.event)+"\n              ")]),t._v(" "),n("span",{staticClass:"block mb-2 text-sm font-normal leading-none text-gray-400 "},[t._v(t._s(e.location)+" - "+t._s(e.date))])])]),t._v(" "),n("p",{staticClass:"mb-4 text-base font-normal text-gray-500 "},[n("span",{domProps:{innerHTML:t._s(e.description)}})]),t._v(" "),n("div",{staticClass:"flex flex-row flex-wrap"},t._l(e.images,(function(image){return n("img",{key:image.src,staticClass:"mr-[8px]",class:image.class,attrs:{src:image.src,alt:image.alt}})})),0)])])})),0)]),t._v(" "),n("div",{staticClass:"text-center mt-10 lg:block sm:hidden"},[n("a",{staticClass:"relative inline-block group focus:outline-none focus:ring",attrs:{href:t.siteMetaData.linkedin,target:"_blank"}},[n("span",{staticClass:"absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-pink-300 group-hover:translate-y-0 group-hover:translate-x-0"}),t._v(" "),n("span",{staticClass:"relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75"},[t._v("\n                  CV sérieux sur linkedin\n      ")])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-16 mt-20 w-5/6 lg:w-3/4 md:w-4/5 mx-auto px-4"},[n("h2",{staticClass:"font-montserrat font-medium text-4xl mb-10 text-slate-800 mt-20"},[t._v("Parcours")])])}],!1,null,"18f62b6c",null);e.default=component.exports},370:function(t,e,n){"use strict";n.r(e);n(24),n(50),n(28),n(60);var r={name:"BlogCardHorizontal",props:["title","description","date","slug","path","img","tags"],data:function(){return{postTitle:this.title,postDescription:this.description,postSlug:this.slug,postDate:this.date,postLink:this.path.replace("articles/","")}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("fr",{weekday:"short",year:"numeric",month:"short",day:"numeric"})}}},o=(n(352),n(20)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-lateral mb-4 bg-white border border-gray-200 border-b-2 border-b-slate-400\nhover:drop-shadow-xl hover:border-gray-300 transition-all hover:-translate-y-1 flex flex-row"},[n("nuxt-link",{staticClass:"w-1/4",attrs:{to:t.postLink}},[n("img",{staticClass:"object-cover w-56 h-56",attrs:{src:"/images/"+t.img,alt:t.postTitle}})]),t._v(" "),n("div",{staticClass:"p-3 w-3/4 my-auto"},[n("div",{staticClass:"text-xs text-slate-400 left-2"},[t._v("\n      "+t._s(t.formatDate(t.postDate))+"\n    ")]),t._v(" "),n("h5",{staticClass:"text-lg font-bold "},[n("nuxt-link",{staticClass:"overflow-hidden ",attrs:{to:t.postLink}},[t._v("\n        "+t._s(t.postTitle)+"\n      ")])],1),t._v(" "),n("p",{staticClass:"mt-2 text-[12px] my-3 flex flex-wrap -m-1 "},t._l(t.tags,(function(e){return n("a",{key:e,staticClass:"m-1 leading-loose text-slate-400 border border-current lowercase px-2 rounded font-medium",attrs:{href:"/blog?tag="+e}},[t._v("\n        #"+t._s(e)+"\n      ")])})),0)])],1)}),[],!1,null,"f2b33ad2",null);e.default=component.exports},372:function(t,e,n){"use strict";n.r(e);var r=n(20),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-6 text-center md:w-3/4 w-full mx-auto"},[n("h2",{staticClass:"mt-6 text-4xl text-gray-700 font-bold capitalize"},[t._v("\n    Salut !\n  ")]),t._v(" "),n("p",{staticClass:"mt-8 mb-4 text-center text-xl"},[t._v("\n    Je m’appelle Hugo. Je suis développeur depuis 20 ans, CTO et co-fondateur de "),n("a",{staticClass:"text-slate-500 hover:text-slate-600",attrs:{href:"https://www.malt.fr"}},[t._v("Malt")]),t._v(" depuis 10 ans.\n  "),n("br"),t._v("\n    Je travaille depuis le crack de la bulle Internet et le bug de l’an 2000.\n  "),n("br"),t._v("\n    Pourtant, personne n’a encore fait le lien et je cours toujours alors chuutt…\n  ")])])}],!1,null,null,null);e.default=component.exports},455:function(t,e,n){"use strict";n(367)},456:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,".writing-vertical[data-v-44c0a06e]{writing-mode:vertical-rl}#c[data-v-44c0a06e]{transition:opacity 1.5s ease-out}.clip-ellipse[data-v-44c0a06e]{-webkit-clip-path:ellipse(60% 100% at 50% 0);clip-path:ellipse(60% 100% at 50% 0);--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));height:100px;width:100%}",""]),r.locals={},t.exports=r},501:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(24),n(50),n(44),n(149)),l=n(313),c=n(370),d=n(307);n(78),n(51),n(11),n(30),n(52),n(34),n(28),n(53),n(35);function m(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var f=[{event:"Podcast - If this then dev",title:"Progression de carrière",location:"Online",date:"17/08/2022",link:"https://ifttd.io/progression-de-carriere/"},{event:"JUG Lyon",title:"Développ(eur|euse) Senior avec 6 ans d’expérience, et après ?",location:"Lyon",date:"28/06/2022",link:"https://www.youtube.com/watch?v=7WIvR77TG4g"},{event:"We are Developers",title:"Senior after 6 years, what's next?",location:"Berlin",date:"14/06/2022",link:"https://www.wearedevelopers.com/world-congress/speakers"},{event:"Devoxx France",title:"Développ(eur|euse) Senior avec 6 ans d’expérience, et après ?",location:"Paris",date:"26/04/2022",link:"https://www.youtube.com/watch?v=X5MYKj1C2qM"},{event:"Codeurs en Seine, French Tech Normandy, NWS et LeVillageByCA",title:"Que veulent les devs à l’ère post covid",location:"Rouen",date:"24/11/2021",link:"https://youtu.be/igs5RjxnYJ4?t=3104"},{event:"Podcast tout se transforme",title:"Freelances : vers une hybridation du travail ?",location:"Lyon",date:"18/02/2021",link:"https://toutsetransforme.fr/le-podcast"},{event:"Silicon.fr",title:"Administrer et superviser son infrastructure IT dans un monde multicloud",location:"Paris",date:"04/02/2021",link:"https://www.silicon-events.fr/journee-du-cloud/session/a6e8a4b1-a13f-eb11-b9ee-000d3a20ef5e"},{event:"France is AI",title:"Getting smarter on talent acquisition",location:"Online",date:"16/11/2020",link:"https://www.youtube.com/watch?v=3Dyfpv3fnAc&t=20045s"},{event:"Podcast Tech Rocks",title:"Paroles de Tech Leaders",location:"Online",date:"05/10/2020",link:"https://podcast.ausha.co/tech-rocks/hugo-lassiege-malt-1-1-s02ep17"},{event:"Le Podcast Tech - Lilian",title:"CTO de Malt : comment tout a commencé…",location:"Online",date:"11/05/2020",link:"https://shows.acast.com/les-podcasts-de-lilian/episodes/cto-de-malt-comment-tout-a-commence"},{event:"Meetup Tech.Rocks",title:"Comment manager en remote ? Le replay",location:"Online",date:"19/04/2020",link:"https://www.tech.rocks/blog/meetup-tech-rocks-comment-manager-en-remote-le-replay"},{event:"Mixit",title:"Table-ronde – « Entrepreneuriat : comment se lancer dans l’aventure ? ",location:"Lyon",date:"24/05/2019",link:"https://mixitconf.org/2019/table-ronde-entrepreneuriat-comment-se-lancer-dans-l-aventure-"},{event:"Elasticsearch Barcelona Meetup",title:"Elasticsearch at Malt ",location:"Barcelona",date:"25/04/2019",link:"https://twitter.com/louisemarliere/status/1121487046948917248?lang=fr"},{event:"Elasticsearch Paris Meetup",title:"Elasticsearch at Malt ",location:"Paris",date:"22/01/2019",link:"https://www.elastic.co/fr/videos/the-different-use-cases-of-elasticsearch-at-malt"},{event:"Human Talks",title:"FROM 0 TO 1 : ÉVOLUTION D’UNE STACK TECHNIQUE SUR 5 ANS",location:"Lyon",date:"09/05/2017",link:"https://humantalks.com/talks/1068-from-0-to-1-evolution-d-une-stack-technique-sur-5"},{event:"Human Talks",title:"Demain, tous freelances ?",location:"Lyon",date:"10/09/2013",link:"https://humantalks.com/talks/243-tous-freelances"},{event:"Human Talks",title:"Epic fail",location:"Lyon",date:"08/10/2014",link:"https://humantalks.com/talks/256-epic-fail"},{event:"Human Talks",title:"Déployez votre application Spring-boot avec Ansible",location:"Lyon",date:"10/02/2014",link:"https://humantalks.com/talks/576-deployez-votre-application-spring-boot-avec-ansibl"},{event:"Devoxx",title:"BOF – Les NoSSII",location:"Paris",date:"28/03/2013",link:"https://blog.ninja-squad.com/2013/03/22/nossii-devoxx-france/"},{event:"Devoxx",title:"Quickie – localizeyourapps",location:"Paris",date:"13/05/2012",link:"https://fr.slideshare.net/hlassiege/localizeyourapps-devoxx2012"}],h={components:{HeroSection:d.default,BlogCard:l.default,BlogCardHorizontal:c.default},data:function(){return{siteMetaInfo:o.a,events:f}},mounted:function(){!function(){var t,e=m(document.querySelectorAll(".dynamic-letters"));try{for(e.s();!(t=e.n()).done;){var n=t.value,text=n.innerText;n.setAttribute("aria-label",text),n.innerHTML="";for(var r=function(i){var span=document.createElement("span");span.setAttribute("class","inline-block hover:text-fuchsia-400 transition-all"),span.setAttribute("aria-hidden","true");var t=text[i];" "===t&&(t="&nbsp;"),span.innerHTML=t,span.addEventListener("mouseover",(function(){span.classList.add("animate-rubberBand"),setTimeout((function(){span.classList.remove("animate-rubberBand")}),1050)}),!1),n.appendChild(span)},i=0;i<text.length;i++)r(i)}}catch(t){e.e(t)}finally{e.f()}}()},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,t.route,e.next=3,n("articles",{deep:!0},r.slug).only(["title","description","img","slug","tags","author","date","path","cover"]).limit(3).sortBy("date","desc").fetch();case 3:return o=e.sent,e.abrupt("return",{articles:o});case 5:case"end":return e.stop()}}),e)})))()},head:{title:o.a.title,meta:[{hid:"description",name:"description",content:o.a.description},{hid:"og:description",name:"og:description",content:o.a.description},{hid:"og:type",name:"og:type",content:"article"},{hid:"og:title",name:"og:title",content:"A propos de l'auteur"},{hid:"og:url",name:"og:url",content:"https://eventuallycoding.com"},{hid:"og:image",name:"og:image",content:"https://eventuallycoding.com"+o.a.author_image},{name:"twitter:text:title",content:"A propos de l'auteur"},{name:"twitter:image",content:"https://eventuallycoding.com"+o.a.author_image},{name:"twitter:card",content:"summary"}]}},x=(n(455),n(20)),component=Object(x.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("keep-alive",[n("HeroSection",{scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{staticClass:"flex flex-col items-center justify-center"},[n("div",{staticClass:"p-5 text-white rounded "},[n("div",{staticClass:"lg:text-7xl md:text-5xl text-2xl font-bruno "},[n("span",{staticClass:"dynamic-letters"},[t._v("Eventually Coding")])])]),t._v(" "),n("div",{staticClass:"p-3 text-white rounded "},[n("div",{staticClass:"md:block flex justify-center items-center"},[n("nuxt-img",{staticClass:"shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full hover:shadow-amber-700 hover:-translate-y-1 hover:shadow-2xl transition-all",attrs:{src:t.siteMetaInfo.author_image,loading:"lazy",alt:"me"}})],1),t._v(" "),n("div",{staticClass:"text-center"},[t._v("\n              "+t._s(t.siteMetaInfo.author)+"\n            ")])])])]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"mt-10"},[n("div",{},[n("div",{staticClass:"px-8"},[n("AuthorIntro"),t._v(" "),n("hr",{staticClass:"mt-20"}),t._v(" "),n("section",{staticClass:"mt-20 w-5/6 lg:w-3/4 md:w-4/5 mx-auto lg:px-4 px-0"},[t._m(0),t._v(" "),n("div",{staticClass:"pt-4 grid lg:grid-cols-3 gap-x-8 md:grid-cols-2 sm:grid-cols-1 items-stretch m-3"},[t._l(t.articles,(function(article){return n("BlogCard",{key:article.title,attrs:{title:article.title,img:"/covers/"+article.cover,description:article.description,date:article.date,slug:article.slug,tags:article.tags,path:article.path}})})),t._v(" "),n("div",{staticClass:"text-center mt-16 lg:hidden block"},[n("nuxt-link",{staticClass:"relative inline-block group focus:outline-none focus:ring",attrs:{to:"/blog"}},[n("span",{staticClass:"absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-pink-300 group-hover:translate-y-0 group-hover:translate-x-0"}),t._v(" "),n("span",{staticClass:"relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75"},[t._v("\n                  En lire plus\n                ")])])],1)],2),t._v(" "),n("div",{staticClass:"text-center mt-10 lg:block hidden"},[n("nuxt-link",{staticClass:"relative inline-block group focus:outline-none focus:ring",attrs:{to:"/blog"}},[n("span",{staticClass:"absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-pink-300 group-hover:translate-y-0 group-hover:translate-x-0"}),t._v(" "),n("span",{staticClass:"relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75"},[t._v("\n                  En lire plus\n              ")])])],1)]),t._v(" "),n("TimeLine"),t._v(" "),n("hr",{staticClass:"mt-20 lg:w-3/4 w-full mx-auto"}),t._v(" "),n("div",{staticClass:"mt-20 lg:w-3/4 w-full mx-auto lg:px-4 px-0 mb-10"},[t._m(1),t._v(" "),n("div",{staticClass:"overflow-hidden overflow-x-auto border border-gray-100 rounded"},[n("table",{staticClass:"min-w-full text-sm divide-y divide-gray-200"},[t._m(2),t._v(" "),n("tbody",{staticClass:"divide-y divide-gray-100"},t._l(t.events,(function(e){return n("tr",{key:e.date+e.title,staticClass:"hover:bg-slate-300 transition-colors"},[n("td",{staticClass:"px-4 py-2 font-medium text-gray-900 whitespace-nowrap"},[t._v(t._s(e.event))]),t._v(" "),n("td",{staticClass:"px-4 py-2 text-gray-700 whitespace-nowrap"},[n("a",{staticClass:"text-blue-500 hover:text-blue-700",attrs:{href:e.link}},[t._v(t._s(e.title))])]),t._v(" "),n("td",{staticClass:"px-4 py-2 text-gray-700 whitespace-nowrap"},[t._v(t._s(e.location))]),t._v(" "),n("td",{staticClass:"px-4 py-2 text-gray-700 whitespace-nowrap"},[t._v(t._s(e.date))])])})),0)])])])],1)])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"font-montserrat font-medium text-4xl mb-10 text-slate-800 mt-20"},[n("h2",[t._v("Derniers billets")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-16 "},[n("h2",{staticClass:"font-montserrat font-medium text-4xl mb-10 text-slate-800 mt-20"},[t._v("Evènements passés")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",{staticClass:"bg-gray-50"},[n("th",{staticClass:"px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"},[t._v("Evènement")]),t._v(" "),n("th",{staticClass:"px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"},[t._v("Titre")]),t._v(" "),n("th",{staticClass:"px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"},[t._v("Lieu")]),t._v(" "),n("th",{staticClass:"px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"},[t._v("Date")])])])}],!1,null,"44c0a06e",null);e.default=component.exports;installComponents(component,{HeroSection:n(307).default,AuthorIntro:n(372).default,BlogCard:n(313).default,TimeLine:n(369).default})}}]);