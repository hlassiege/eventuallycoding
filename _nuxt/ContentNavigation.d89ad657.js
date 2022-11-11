import{_ as r,l as d,B as S,A,K as $,L as I,b as D,e as b,s as v,M as C,v as f,N as P,k as L,O as M,d as i,t as q,P as F,m as H,Q as U}from"./entry.61895315.js";import{u as K}from"./asyncData.46bd69c8.js";import{h as R,j as W}from"./query.078c3dde.js";import{w as G,s as Q,u as Y,a as J}from"./utils.02e0520f.js";/* empty css                                                                   */import"./Dropdown.4c630c06.js";/* empty css                                                    */import"./sitemetainfo.7469eb96.js";/* empty css                                                                  *//* empty css                                                                 */import"./ContentDoc.6eff4ff2.js";import"./ContentList.fec49a9b.js";import"./ContentQuery.da9cdff7.js";import"./ContentRenderer.5af0e372.js";import"./ContentRendererMarkdown.3dc1aeaf.js";import"./ContentSlot.32361a1c.js";import"./DocumentDrivenEmpty.dab20881.js";import"./DocumentDrivenNotFound.6723ade2.js";import"./Markdown.d65c8ce9.js";import"./ProseCode.0224e6b1.js";import"./_commonjsHelpers.f8a6f4fc.js";const X=async e=>{let t=e;typeof(t==null?void 0:t.params)=="function"&&(t=t.params());const a=G(t?`/navigation/${R(t)}.json`:"/navigation");if(Q())return(await r(()=>import("./client-db.19693ea6.js"),["./client-db.19693ea6.js","./entry.61895315.js","./entry.2fb37f22.css","./utils.02e0520f.js","./query.078c3dde.js","./_commonjsHelpers.f8a6f4fc.js"],import.meta.url).then(n=>n.generateNavigation))(t||{});const o=await $fetch(a,{method:"GET",responseType:"json",params:{_params:W(t||{}),previewToken:Y("previewToken").value}});if(typeof o=="string"&&o.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return o};const Z=d({emits:{error(e){return!0}},setup(e,{slots:t,emit:a}){const o=S(null),u=A();return $(n=>{if(!u.isHydrating)return a("error",n),o.value=n,!1}),()=>{var n,s;return o.value?(n=t.error)==null?void 0:n.call(t,{error:o}):(s=t.default)==null?void 0:s.call(t)}}}),ee=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),te=d({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t}){const a=S(!1);return I(()=>{a.value=!0}),o=>{var m;if(a.value)return(m=t.default)==null?void 0:m.call(t);const u=t.fallback||t.placeholder;if(u)return u();const n=o.fallback||o.placeholder||"",s=o.fallbackTag||o.placeholderTag||"span";return D(s,null,n)}}}),T=new WeakMap;function re(e){if(T.has(e))return T.get(e);const t={...e};return t.render?t.render=(a,...o)=>{var u;if(a.mounted$){const n=e.render(a,...o);return n.children===null||typeof n.children=="string"?b(n.type,n.props,n.children,n.patchFlag,n.dynamicProps,n.shapeFlag):v(n)}else return v("div",(u=a.$attrs)!=null?u:a._.attrs)}:t.template&&(t.template=`
      <template v-if="mounted$">${e.template}</template>
      <template v-else><div></div></template>
    `),t.setup=(a,o)=>{var n;const u=S(!1);return I(()=>{u.value=!0}),Promise.resolve(((n=e.setup)==null?void 0:n.call(e,a,o))||{}).then(s=>typeof s!="function"?{...s,mounted$:u}:(...m)=>{if(u.value){const l=s(...m);return l.children===null||typeof l.children=="string"?b(l.type,l.props,l.children,l.patchFlag,l.dynamicProps,l.shapeFlag):v(l)}else return v("div",o.attrs)})},T.set(e,t),t}const ie=Object.freeze(Object.defineProperty({__proto__:null,default:te,createClientOnly:re},Symbol.toStringTag,{value:"Module"})),oe=d({name:"DevOnly",setup(e,t){return()=>null}}),ne=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"})),ae=d({name:"ServerPlaceholder",render(){return D("div")}}),ue=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"})),le=d({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(e,{slots:t}){const a=se({duration:e.duration,throttle:e.throttle}),o=A();return o.hook("page:start",a.start),o.hook("page:finish",a.finish),C(()=>a.clear),()=>v("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${a.progress.value}%`,height:`${e.height}px`,opacity:a.isLoading.value?1:0,background:e.color,backgroundSize:`${100/a.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},t)}});function se(e){const t=S(0),a=S(!1),o=f(()=>1e4/e.duration);let u=null,n=null;function s(){l(),t.value=0,a.value=!0,e.throttle?n=setTimeout(_,e.throttle):_()}function m(){t.value=100,y()}function l(){clearInterval(u),clearTimeout(n),u=null,n=null}function h(p){t.value=Math.min(100,t.value+p)}function y(){l(),setTimeout(()=>{a.value=!1,setTimeout(()=>{t.value=0},400)},500)}function _(){u=setInterval(()=>{h(o.value)},100)}return{progress:t,isLoading:a,start:s,finish:m,clear:l}}const _e=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"})),V=()=>A().$img,z={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},B=e=>{const t=f(()=>({provider:e.provider,preset:e.preset})),a=f(()=>({width:P(e.width),height:P(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),o=f(()=>({...e.modifiers,width:P(e.width),height:P(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:t,attrs:a,modifiers:o}},j={...z,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},de=d({name:"NuxtImg",props:j,setup:(e,t)=>{const a=V(),o=B(e),u=S(!1),n=f(()=>a.getSizes(e.src,{...o.options.value,sizes:e.sizes,modifiers:{...o.modifiers.value,width:P(e.width),height:P(e.height)}})),s=f(()=>{const _=o.attrs.value;return e.sizes&&(_.sizes=n.value.sizes,_.srcset=n.value.srcset),_}),m=f(()=>{let _=e.placeholder;if(_===""&&(_=!0),!_||u.value)return!1;if(typeof _=="string")return _;const p=Array.isArray(_)?_:typeof _=="number"?[_,_]:[10,10];return a(e.src,{...o.modifiers.value,width:p[0],height:p[1],quality:p[2]||50},o.options.value)}),l=f(()=>e.sizes?n.value.src:a(e.src,o.modifiers.value,o.options.value)),h=f(()=>m.value?m.value:l.value);if(e.preload){const _=Object.values(n.value).every(p=>p);L({link:[{rel:"preload",as:"image",..._?{href:n.value.src,imagesizes:n.value.sizes,imagesrcset:n.value.srcset}:{href:h.value}}]})}const y=S(null);return I(()=>{if(m.value){const _=new Image;_.src=l.value,_.onload=()=>{y.value.src=l.value,u.value=!0}}}),()=>v("img",{ref:y,key:h.value,src:h.value,...s.value,...t.attrs})}}),me=Object.freeze(Object.defineProperty({__proto__:null,imgProps:j,default:de},Symbol.toStringTag,{value:"Module"})),N={...z,legacyFormat:{type:String,default:null},imgAttrs:{type:Object,default:null}},pe=d({name:"NuxtPicture",props:N,setup:(e,t)=>{var h,y,_;const a=V(),o=B(e),u=f(()=>["png","webp","gif"].includes(n.value)),n=f(()=>M(e.src)),s=f(()=>e.format||n.value==="svg"?"svg":"webp"),m=f(()=>e.legacyFormat?e.legacyFormat:{webp:u.value?"png":"jpeg",svg:"png"}[s.value]||n.value),l=f(()=>s.value==="svg"?[{srcset:e.src}]:(m.value!==s.value?[m.value,s.value]:[s.value]).map(O=>{const{srcset:k,sizes:w,src:x}=a.getSizes(e.src,{...o.options.value,sizes:e.sizes||a.options.screens,modifiers:{...o.modifiers.value,format:O}});return{src:x,type:`image/${O}`,sizes:w,srcset:k}}));if(e.preload){const p=(h=l.value)!=null&&h[1]?1:0,O={rel:"preload",as:"image",imagesrcset:l.value[p].srcset};(_=(y=l.value)==null?void 0:y[p])!=null&&_.sizes&&(O.imagesizes=l.value[p].sizes),L({link:[O]})}return()=>{var p;return v("picture",{key:l.value[0].src},[...(p=l.value)!=null&&p[1]?[v("source",{type:l.value[1].type,sizes:l.value[1].sizes,srcset:l.value[1].srcset})]:[],v("img",{...o.attrs.value,...e.imgAttrs,...t.attrs,src:l.value[0].src,sizes:l.value[0].sizes,srcset:l.value[0].srcset})])}}}),fe=Object.freeze(Object.defineProperty({__proto__:null,pictureProps:N,default:pe},Symbol.toStringTag,{value:"Module"})),ve=e=>Object.fromEntries(Object.entries(e).filter(([,t])=>t!==void 0)),g=(e,t)=>(a,o)=>(L(()=>e({...ve(a),...o.attrs},o)),()=>{var u,n;return t?(n=(u=o.slots).default)==null?void 0:n.call(u):null}),E={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},ce=d({name:"Script",inheritAttrs:!1,props:{...E,async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,fetchpriority:String,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String,body:Boolean,renderPriority:[String,Number]},setup:g((e,{slots:t})=>{var u;const a={...e},o=(((u=t.default)==null?void 0:u.call(t))||[]).filter(({children:n})=>n).map(({children:n})=>n).join("");return o&&(a.children=o),{script:[a]}})}),ge=d({name:"NoScript",inheritAttrs:!1,props:{...E,title:String,body:Boolean,renderPriority:[String,Number]},setup:g((e,{slots:t})=>{var u;const a={...e},o=(((u=t.default)==null?void 0:u.call(t))||[]).filter(({children:n})=>n).map(({children:n})=>n).join("");return o&&(a.children=o),{noscript:[a]}})}),he=d({name:"Link",inheritAttrs:!1,props:{...E,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:g(e=>({link:[e]}))}),Ee=d({name:"Base",inheritAttrs:!1,props:{...E,href:String,target:String},setup:g(e=>({base:e}))}),ye=d({name:"Title",inheritAttrs:!1,setup:g((e,{slots:t})=>{var o,u,n;return{title:((n=(u=(o=t.default)==null?void 0:o.call(t))==null?void 0:u[0])==null?void 0:n.children)||null}})}),Se=d({name:"Meta",inheritAttrs:!1,props:{...E,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:g(e=>{const t={...e};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),Pe=d({name:"Style",inheritAttrs:!1,props:{...E,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:g((e,{slots:t})=>{var u,n,s;const a={...e},o=(s=(n=(u=t.default)==null?void 0:u.call(t))==null?void 0:n[0])==null?void 0:s.children;return o&&(a.children=o),{style:[a]}})}),Oe=d({name:"Head",inheritAttrs:!1,setup:(e,t)=>()=>{var a,o;return(o=(a=t.slots).default)==null?void 0:o.call(a)}}),Te=d({name:"Html",inheritAttrs:!1,props:{...E,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:g(e=>({htmlAttrs:e}),!0)}),Ae=d({name:"Body",inheritAttrs:!1,props:{...E,renderPriority:[String,Number]},setup:g(e=>({bodyAttrs:e}),!0)}),c=Object.freeze(Object.defineProperty({__proto__:null,Script:ce,NoScript:ge,Link:he,Base:Ee,Title:ye,Meta:Se,Style:Pe,Head:Oe,Html:Te,Body:Ae},Symbol.toStringTag,{value:"Module"}));i(()=>r(()=>import("./Disclaimer.c2d14af7.js"),["./Disclaimer.c2d14af7.js","./entry.61895315.js","./entry.2fb37f22.css","./Disclaimer.3e7e8e32.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./Image.21ccc987.js"),["./Image.21ccc987.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./AuthorIntro.2a1e0263.js"),["./AuthorIntro.2a1e0263.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./BlogCard.3a284291.js"),["./BlogCard.3a284291.js","./BlogCard.vue_vue_type_script_setup_true_lang.b631c296.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./BlogCardHorizontal.01e3b4f6.js"),["./BlogCardHorizontal.01e3b4f6.js","./entry.61895315.js","./entry.2fb37f22.css","./asyncData.46bd69c8.js","./query.078c3dde.js","./utils.02e0520f.js","./Dropdown.4c630c06.js","./_commonjsHelpers.f8a6f4fc.js","./sitemetainfo.7469eb96.js","./ContentDoc.6eff4ff2.js","./ContentRenderer.5af0e372.js","./ContentRendererMarkdown.3dc1aeaf.js","./ContentQuery.da9cdff7.js","./ContentList.fec49a9b.js","./ContentSlot.32361a1c.js","./DocumentDrivenEmpty.dab20881.js","./DocumentDrivenNotFound.6723ade2.js","./Markdown.d65c8ce9.js","./ProseCode.0224e6b1.js","./ProseCode.e63e49c6.css","./Disclaimer.3e7e8e32.css","./HeroSection.4c50b1af.css","./TheHeader.19f98060.css","./TimeLine.f4b611fa.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./Dropdown.4c630c06.js"),["./Dropdown.4c630c06.js","./_commonjsHelpers.f8a6f4fc.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./HeroSection.c05e4b2f.js"),["./HeroSection.c05e4b2f.js","./entry.61895315.js","./entry.2fb37f22.css","./HeroSection.4c50b1af.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./PageSidebar.d4136e52.js"),["./PageSidebar.d4136e52.js","./Dropdown.4c630c06.js","./_commonjsHelpers.f8a6f4fc.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProjectCard.f035d12b.js"),["./ProjectCard.f035d12b.js","./github_new.c6ffbd0b.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./TheFooter.ed2040e9.js"),["./TheFooter.ed2040e9.js","./sitemetainfo.7469eb96.js","./github_new.c6ffbd0b.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./TheHeader.d4568ccd.js"),["./TheHeader.d4568ccd.js","./entry.61895315.js","./entry.2fb37f22.css","./TheHeader.19f98060.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./TimeLine.962f234e.js"),["./TimeLine.962f234e.js","./entry.61895315.js","./entry.2fb37f22.css","./TimeLine.f4b611fa.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./blogItem.ab172d91.js"),["./blogItem.ab172d91.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ContentDoc.6eff4ff2.js"),["./ContentDoc.6eff4ff2.js","./entry.61895315.js","./entry.2fb37f22.css","./ContentRenderer.5af0e372.js","./ContentRendererMarkdown.3dc1aeaf.js","./_commonjsHelpers.f8a6f4fc.js","./ContentQuery.da9cdff7.js","./asyncData.46bd69c8.js","./query.078c3dde.js","./utils.02e0520f.js"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ContentList.fec49a9b.js"),["./ContentList.fec49a9b.js","./ContentQuery.da9cdff7.js","./entry.61895315.js","./entry.2fb37f22.css","./asyncData.46bd69c8.js","./query.078c3dde.js","./utils.02e0520f.js"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>Promise.resolve().then(()=>Le),void 0,import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ContentQuery.da9cdff7.js"),["./ContentQuery.da9cdff7.js","./entry.61895315.js","./entry.2fb37f22.css","./asyncData.46bd69c8.js","./query.078c3dde.js","./utils.02e0520f.js"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ContentRenderer.5af0e372.js"),["./ContentRenderer.5af0e372.js","./ContentRendererMarkdown.3dc1aeaf.js","./entry.61895315.js","./entry.2fb37f22.css","./_commonjsHelpers.f8a6f4fc.js"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ContentRendererMarkdown.3dc1aeaf.js"),["./ContentRendererMarkdown.3dc1aeaf.js","./entry.61895315.js","./entry.2fb37f22.css","./_commonjsHelpers.f8a6f4fc.js"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ContentSlot.32361a1c.js"),["./ContentSlot.32361a1c.js","./utils.02e0520f.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./DocumentDrivenEmpty.dab20881.js"),["./DocumentDrivenEmpty.dab20881.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./DocumentDrivenNotFound.6723ade2.js"),["./DocumentDrivenNotFound.6723ade2.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./Markdown.d65c8ce9.js"),["./Markdown.d65c8ce9.js","./ContentSlot.32361a1c.js","./utils.02e0520f.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseA.9be7a995.js"),["./ProseA.9be7a995.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseBlockquote.c96c9337.js"),["./ProseBlockquote.c96c9337.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseCode.0224e6b1.js"),["./ProseCode.0224e6b1.js","./entry.61895315.js","./entry.2fb37f22.css","./ProseCode.e63e49c6.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseCodeInline.d6f3f952.js"),["./ProseCodeInline.d6f3f952.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseEm.cc12220a.js"),["./ProseEm.cc12220a.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseH1.2ebabb33.js"),["./ProseH1.2ebabb33.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseH2.1a1d9167.js"),["./ProseH2.1a1d9167.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseH3.49fb687c.js"),["./ProseH3.49fb687c.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseH4.3fdd3bdc.js"),["./ProseH4.3fdd3bdc.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseH5.a1188f79.js"),["./ProseH5.a1188f79.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseH6.e97c14ff.js"),["./ProseH6.e97c14ff.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseHr.7cd2c7c3.js"),["./ProseHr.7cd2c7c3.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseImg.e1ebf012.js"),["./ProseImg.e1ebf012.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseLi.e5340f2b.js"),["./ProseLi.e5340f2b.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseOl.2e742ac5.js"),["./ProseOl.2e742ac5.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseP.ad9c09c2.js"),["./ProseP.ad9c09c2.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseStrong.643d968b.js"),["./ProseStrong.643d968b.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseTable.c08a2925.js"),["./ProseTable.c08a2925.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseTbody.8881aa50.js"),["./ProseTbody.8881aa50.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseTd.fc24e99c.js"),["./ProseTd.fc24e99c.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseTh.3474e81d.js"),["./ProseTh.3474e81d.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseThead.0ce3aa75.js"),["./ProseThead.0ce3aa75.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseTr.20ab8b30.js"),["./ProseTr.20ab8b30.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseUl.e454572b.js"),["./ProseUl.e454572b.js","./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./welcome.79056e47.js"),["./welcome.79056e47.js","./entry.61895315.js","./entry.2fb37f22.css","./asyncData.46bd69c8.js","./query.078c3dde.js","./utils.02e0520f.js","./Dropdown.4c630c06.js","./_commonjsHelpers.f8a6f4fc.js","./sitemetainfo.7469eb96.js","./ContentDoc.6eff4ff2.js","./ContentRenderer.5af0e372.js","./ContentRendererMarkdown.3dc1aeaf.js","./ContentQuery.da9cdff7.js","./ContentList.fec49a9b.js","./ContentSlot.32361a1c.js","./DocumentDrivenEmpty.dab20881.js","./DocumentDrivenNotFound.6723ade2.js","./Markdown.d65c8ce9.js","./ProseCode.0224e6b1.js","./ProseCode.e63e49c6.css","./Disclaimer.3e7e8e32.css","./HeroSection.4c50b1af.css","./TheHeader.19f98060.css","./TimeLine.f4b611fa.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./entry.61895315.js").then(e=>e.a6),["./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>Promise.resolve().then(()=>ee),void 0,import.meta.url).then(e=>e.default||e));i(()=>r(()=>Promise.resolve().then(()=>ie),void 0,import.meta.url).then(e=>e.default||e));i(()=>r(()=>Promise.resolve().then(()=>ne),void 0,import.meta.url).then(e=>e.default||e));i(()=>r(()=>Promise.resolve().then(()=>ue),void 0,import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./entry.61895315.js").then(e=>e.a4),["./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>Promise.resolve().then(()=>_e),void 0,import.meta.url).then(e=>e.default||e));i(()=>r(()=>Promise.resolve().then(()=>me),void 0,import.meta.url).then(e=>e.default||e));i(()=>r(()=>Promise.resolve().then(()=>fe),void 0,import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./entry.61895315.js").then(e=>e.a5),["./entry.61895315.js","./entry.2fb37f22.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>Promise.resolve().then(()=>c),void 0,import.meta.url).then(e=>e.Script));i(()=>r(()=>Promise.resolve().then(()=>c),void 0,import.meta.url).then(e=>e.NoScript));i(()=>r(()=>Promise.resolve().then(()=>c),void 0,import.meta.url).then(e=>e.Link));i(()=>r(()=>Promise.resolve().then(()=>c),void 0,import.meta.url).then(e=>e.Base));i(()=>r(()=>Promise.resolve().then(()=>c),void 0,import.meta.url).then(e=>e.Title));i(()=>r(()=>Promise.resolve().then(()=>c),void 0,import.meta.url).then(e=>e.Meta));i(()=>r(()=>Promise.resolve().then(()=>c),void 0,import.meta.url).then(e=>e.Style));i(()=>r(()=>Promise.resolve().then(()=>c),void 0,import.meta.url).then(e=>e.Head));i(()=>r(()=>Promise.resolve().then(()=>c),void 0,import.meta.url).then(e=>e.Html));i(()=>r(()=>Promise.resolve().then(()=>c),void 0,import.meta.url).then(e=>e.Body));const Ie=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=q(e),a=f(()=>{var u;return typeof((u=t.value)==null?void 0:u.params)=="function"?t.value.params():t.value});if(!a.value&&F("dd-navigation").value){const{navigation:u}=J();return{navigation:u}}const{data:o}=await K(`content-navigation-${R(a.value)}`,()=>X(a.value));return{navigation:o}},render(e){const t=H(),{navigation:a}=e,o=s=>v(U,{to:s._path},()=>s.title),u=(s,m)=>v("ul",m?{"data-level":m}:null,s.map(l=>l.children?v("li",null,[o(l),u(l.children,m+1)]):v("li",null,o(l)))),n=s=>u(s,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):n(a)}}),Le=Object.freeze(Object.defineProperty({__proto__:null,default:Ie},Symbol.toStringTag,{value:"Module"}));export{Ie as default};