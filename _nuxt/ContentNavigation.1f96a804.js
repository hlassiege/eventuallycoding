import{q as m,w as c,h as p,e as v,s as l,j as d,a as g,u as y}from"./query.80dd0a23.js";import{X as h,Y as _,J as w,I as C,Z as $,f as x,$ as P,x as N,O as E,L as f}from"./entry.4b920acf.js";import{u as T}from"./preview.2b4e4c46.js";import{_ as j}from"./nuxt-link.85d8dba7.js";const S="$s";function b(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=S+n,r=w(),i=h(r.payload.state,a);if(i.value===void 0&&o){const s=o();if(_(s))return r.payload.state[a]=s,s;i.value=s}return i}const D=async t=>{const{content:e}=C().public;typeof(t==null?void 0:t.params)!="function"&&(t=m(t));const n=t.params(),o=e.experimental.stripQueryParameters?c(`/navigation/${`${p(n)}.${e.integrity}`}/${v(n)}.json`):c(`/navigation/${p(n)}.${e.integrity}.json`);if(l())return(await $(()=>import("./client-db.f1d5d85b.js"),["./client-db.f1d5d85b.js","./entry.4b920acf.js","./query.80dd0a23.js","./preview.2b4e4c46.js","./index.288f722b.js","./_commonjsHelpers.725317a4.js"],import.meta.url).then(i=>i.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:d(n),previewToken:T().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},R=x({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=P(t),n=N(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&b("dd-navigation").value){const{navigation:a}=g();return{navigation:a}}const{data:o}=await y(`content-navigation-${p(n.value)}`,()=>D(n.value));return{navigation:o}},render(t){const e=E(),{navigation:n}=t,o=i=>f(j,{to:i._path},()=>i.title),a=(i,s)=>f("ul",s?{"data-level":s}:null,i.map(u=>u.children?f("li",null,[o(u),a(u.children,s+1)]):f("li",null,o(u)))),r=i=>a(i,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),Q=R;export{Q as default};
