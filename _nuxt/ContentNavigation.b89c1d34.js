import{l as f,_ as v,i as l,y as d,j as g,z as h,v as _,x as s}from"./entry.a1929bb4.js";import{q as y,h as m,e as C,j as w,u as $}from"./query.c3fe30e7.js";import{_ as j}from"./nuxt-link.9a4cc246.js";import{w as c,s as N,u as P,a as T}from"./utils.3f3b1046.js";/* empty css                       *//* empty css                           *//* empty css                */import"./nuxt-picture.ad53cabe.js";/* empty css                        *//* empty css                      *//* empty css                     *//* empty css                      */import"./index.61d74bb5.js";import"./_commonjsHelpers.28e086c5.js";const x=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=y(e));const a=e.params(),i=t.experimental.stripQueryParameters?c(`/navigation/${`${m(a)}.${t.integrity}`}/${C(a)}.json`):c(`/navigation/${m(a)}.${t.integrity}.json`);if(N())return(await v(()=>import("./client-db.52da939a.js"),["./client-db.52da939a.js","./entry.a1929bb4.js","./entry.f5433194.css","./utils.3f3b1046.js","./index.61d74bb5.js","./query.c3fe30e7.js","./index.a6ef77ff.js","./_commonjsHelpers.28e086c5.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(i,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:w(a),previewToken:P("previewToken").value}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},V=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=g(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=T();return{navigation:n}}const{data:i}=await $(`content-navigation-${m(a.value)}`,()=>x(a.value));return{navigation:i}},render(e){const t=_(),{navigation:a}=e,i=o=>s(j,{to:o._path},()=>o.title),n=(o,p)=>s("ul",p?{"data-level":p}:null,o.map(r=>r.children?s("li",null,[i(r),n(r.children,p+1)]):s("li",null,i(r)))),u=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):u(a)}});export{V as default};