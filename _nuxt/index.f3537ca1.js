import{_ as v,a as w,b as C}from"./BlogSectionHeader.vue.312fa03b.js";import{_ as q}from"./BlogCard.vue.017a2f87.js";import{i as B,q as $,E as p,U as k,b as d,c as u,R as o,u as e,V as A,e as i,F as b,k as L,o as a,a as E}from"./entry.f7acea91.js";import{u as N,q as V}from"./query.2ac261f9.js";import{u as F}from"./composables.bbec42c4.js";/* empty css                       *//* empty css                    *//* empty css                           *//* empty css                */import"./nuxt-picture.0d47fc9b.js";import"./Dropdown.091d6606.js";import{s as g}from"./siteMetaData.b74feb44.js";/* empty css                        *//* empty css                      *//* empty css                     *//* empty css                      */import"./nuxt-link.bd602df9.js";import"./HeroSection.790348a4.js";import"./index.61d74bb5.js";import"./utils.6a095ff8.js";import"./_commonjsHelpers.28e086c5.js";const R={class:"flex flex-col items-start sm:flex-row pt-12"},T={class:"pt-16 grid xl:grid-cols-5 lg:grid-cols-3 gap-x-3 md:grid-cols-2 sm:grid-cols-1 items-stretch m-3"},D=B({__name:"index",async setup(H){let r,c;const n=$(),s=p(Array.isArray(n.query.tag)?n.query.tag[0]:n.query.tag||""),l=p("fr"),{data:_}=([r,c]=k(()=>N("articleList",()=>V("articles").only(["title","listed","description","language","img","slug","tags","author","date","draft","_path","cover"]).where({language:{$ne:"en"},listed:{$ne:!1}}).sort({date:-1}).find())),r=await r,c(),r);return F({title:g.title,meta:[{hid:"description",name:"description",content:g.description},{name:"robots",content:"noindex"}]}),(f,m)=>{const h=C,x=q;return a(),d("div",null,[(a(),u(A,null,[o(e(v),{"current-lang":e(l)},null,8,["current-lang"])],1024)),i("div",R,[o(e(w),{"current-tag":e(s)},null,8,["current-tag"]),i("div",null,[o(h,{"lang-switch":"EN","url-switch":"/blog"}),i("div",T,[(a(!0),d(b,null,L(e(_),t=>(a(),u(x,{key:t.title,"current-lang":e(l),"current-tag":e(s),title:t.title,img:"/covers/"+t.cover,description:t.description,lang:t.language,date:t.date,tags:t.tags,path:t._path,onChangeCurrentTag:m[0]||(m[0]=y=>s.value=y)},null,8,["current-lang","current-tag","title","img","description","lang","date","tags","path"]))),128))])])])])}}});const st=E(D,[["__scopeId","data-v-0dee2082"]]);export{st as default};
