import{_ as v}from"./AuthorIntro.32e2e32d.js";import{_ as b}from"./nuxt-link.ddbb7177.js";import{i as y,E as w,U as k,b as m,c as u,R as n,w as l,u as o,V as A,e as t,h as g,t as h,F as I,k as S,o as c,p as N,f as B,a as C}from"./entry.352216a8.js";import{u as H,q as L}from"./query.74344320.js";import{u as V}from"./composables.2b5b1a4f.js";/* empty css                       *//* empty css                    *//* empty css                           *//* empty css                */import{_ as $}from"./BlogCard.vue.417383ea.js";import"./nuxt-picture.b7b14eee.js";import{H as E}from"./HeroSection.686c4901.js";import{s as a}from"./siteMetaData.b74feb44.js";import"./Dropdown.c1732d59.js";/* empty css                      *//* empty css                     *//* empty css                      */import"./index.61d74bb5.js";import"./utils.36b98733.js";/* empty css                        */import"./_commonjsHelpers.28e086c5.js";const s=i=>(N("data-v-477dc1d2"),i=i(),B(),i),R={class:"flex flex-col items-center justify-center"},q={class:"p-3 text-white rounded"},D={class:"flex items-center"},F=["src"],j={class:"text-left"},z={class:"name rounded-xl font-bold p-2 tracking-wider"},K=s(()=>t("span",{class:"text-2xl"},"Hi, I'm",-1)),M={class:"font-extrabold text-2xl"},T={class:"mt-10"},U={class:""},G={class:"px-8"},J={class:"mt-20 w-5/6 lg:w-3/4 md:w-4/5 mx-auto lg:px-4 px-0"},O={class:"font-montserrat font-medium text-4xl mb-10 text-slate-800 mt-20"},P=s(()=>t("small",{class:"ml-3 text-gray-500"},"Switch to blog posts in ",-1)),Q={class:"pt-4 grid lg:grid-cols-3 gap-x-8 md:grid-cols-2 sm:grid-cols-1 items-stretch m-3"},W={class:"text-center mt-16 lg:hidden block"},X=s(()=>t("span",{class:"absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-pink-300 group-hover:translate-y-0 group-hover:translate-x-0"},null,-1)),Y=s(()=>t("span",{class:"relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75"}," Read more ",-1)),Z={class:"text-center mt-10 lg:block hidden"},tt=s(()=>t("span",{class:"absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-pink-300 group-hover:translate-y-0 group-hover:translate-x-0"},null,-1)),et=s(()=>t("span",{class:"relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75"}," Read more ",-1)),ot=s(()=>t("hr",{class:"mt-20 lg:w-3/4 w-full mx-auto"},null,-1)),st=y({__name:"index",async setup(i){let r,p;const _=w("fr"),{data:x}=([r,p]=k(()=>H("indexarticles",()=>L("articles").only(["listed","title","description","img","slug","tags","language","author","date","_path","cover"]).where({language:{$ne:"en"},listed:{$ne:!1}}).limit(6).sort({date:-1}).find())),r=await r,p(),r);return V({title:a.title,meta:[{hid:"description",name:"description",content:a.description},{hid:"og:description",name:"og:description",content:a.description},{hid:"og:type",name:"og:type",content:"article"},{hid:"og:title",name:"og:title",content:"A propos de l'auteur"},{hid:"og:url",name:"og:url",content:"https://eventuallycoding.com"},{name:"twitter:text:title",content:"A propos de l'auteur"},{name:"twitter:card",content:"summary"}]}),(nt,at)=>{const f=v,d=b;return c(),m("div",null,[(c(),u(A,null,[n(o(E),null,{content:l(()=>[t("div",R,[t("div",q,[t("div",D,[t("img",{src:o(a).author_image,loading:"lazy",alt:"me",class:"shadow-xl md:h-50 md:w-50 h-40 w-40 rounded-full hover:shadow-amber-700 hover:-translate-y-1 hover:shadow-2xl transition-all mr-10"},null,8,F),t("div",j,[t("p",z,[K,t("span",M,h(o(a).author),1)]),n(f)])])])])]),_:1})],1024)),t("div",T,[t("div",U,[t("div",G,[t("section",J,[t("div",O,[t("h2",null,[g(" Last blog posts "),t("small",null,"("+h(o(_))+")",1)])]),P,n(d,{class:"underline decoration-red-400 decoration-4 underline-offset-8 text-sm text-gray-500",to:"/",external:!0},{default:l(()=>[g("EN")]),_:1}),t("div",Q,[(c(!0),m(I,null,S(o(x),e=>(c(),u(o($),{key:e.title,title:e.title,img:"/covers/"+e.cover,description:e.description,"current-lang":o(_),lang:e.language,date:e.date,tags:e.tags,path:e._path},null,8,["title","img","description","current-lang","lang","date","tags","path"]))),128)),t("div",W,[n(d,{class:"relative inline-block group focus:outline-none focus:ring",to:"/blog"},{default:l(()=>[X,Y]),_:1})])]),t("div",Z,[n(d,{class:"relative inline-block group focus:outline-none focus:ring",to:"/blog"},{default:l(()=>[tt,et]),_:1})])]),ot])])])])}}});const Nt=C(st,[["__scopeId","data-v-477dc1d2"]]);export{Nt as default};