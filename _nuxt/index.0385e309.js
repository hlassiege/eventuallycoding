import{_ as v,a as w,b as C}from"./BlogContentLanguageSwitcher.vue.9b33014c.js";import{_ as q}from"./BlogCard.vue.1cf11952.js";import{f as B,q as $,m as g,s as A,c as d,g as _,b as i,u as e,K as b,a as c,F as k,r as L,o as n,_ as N}from"./entry.be9296c3.js";import{u as E,q as F}from"./query.2c3877d9.js";import{u as K}from"./vue.f36acd1f.4a230744.js";import{s as m}from"./siteMetaData.b74feb44.js";import"./nuxt-img.c935ce31.js";import"./nuxt-link.a1797a78.js";import"./HeroSection.ff648bb4.js";import"./preview.787e991d.js";const T={class:"flex flex-col items-start sm:flex-row pt-12"},V={class:"pt-16 grid xl:grid-cols-5 lg:grid-cols-3 gap-x-3 md:grid-cols-2 sm:grid-cols-1 items-stretch m-3"},D=B({__name:"index",async setup(H){let a,l;const r=$(),s=g(Array.isArray(r.query.tag)?r.query.tag[0]:r.query.tag||""),o=g("fr"),{data:p}=([a,l]=A(()=>E("articleList",()=>F("articles").only(["title","listed","description","language","img","slug","tags","author","date","draft","_path","cover"]).where({language:{$ne:"en"},listed:{$ne:!1}}).sort({date:-1}).find())),a=await a,l(),a);return K({title:m.title,meta:[{hid:"description",name:"description",content:m.description},{name:"robots",content:"noindex"}]}),(f,u)=>{const h=C,x=q;return n(),d("div",null,[(n(),_(b,null,[i(e(v),{"current-lang":e(o)},null,8,["current-lang"])],1024)),c("div",T,[i(e(w),{"current-tag":e(s),"current-lang":e(o)},null,8,["current-tag","current-lang"]),c("div",null,[i(h,{"lang-switch":"EN","url-switch":"/blog"}),c("div",V,[(n(!0),d(k,null,L(e(p),t=>(n(),_(x,{key:t.title,"current-lang":e(o),"current-tag":e(s),title:t.title,img:"/"+t.cover,description:t.description,lang:t.language,date:t.date,tags:t.tags,path:t._path,onChangeCurrentTag:u[0]||(u[0]=y=>s.value=y)},null,8,["current-lang","current-tag","title","img","description","lang","date","tags","path"]))),128))])])])])}}});const Q=N(D,[["__scopeId","data-v-26420357"]]);export{Q as default};
