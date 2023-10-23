import g from"./ContentRenderer.88f02ca4.js";import{i as f,U as v,E as x,b as y,c as w,R as d,w as k,u as e,V as b,e as s,t as r,o as _,a as C}from"./entry.bb1a731e.js";import{u as H,q}from"./query.90e2bce3.js";import{u as B}from"./composables.6c461026.js";import{H as R}from"./HeroSection.eb31f238.js";import{s as p}from"./siteMetaData.b74feb44.js";import"./ContentRendererMarkdown.2c10e7c5.js";import"./index.a6ef77ff.js";import"./index.61d74bb5.js";import"./utils.ae4eaab1.js";/* empty css                        */const A=["src","alt"],I={class:"px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 mt-10"},V={class:"text-4xl text-gray-700 font-extrabold mb-10 text-center"},D={class:"flex items-center font-medium mt-6 sm:mx-3 justify-center"},E=["src"],M={class:"text-slate-900 dark:text-slate-200"},N=["href"],S=["src"],$=f({__name:"resources",async setup(j){var i,c,l,m,u;let a,n;const{data:t}=([a,n]=v(()=>H("resources",()=>q("resources").where({title:"Resources"}).findOne())),a=await a,n(),a),o=x(p);return B({title:"Resources | "+p.title,meta:[{hid:"description",name:"description",content:"Here is a list of various resources that I use frequently or that have influenced me"},{hid:"og:description",name:"og:description",content:"Here is a list of various resources that I use frequently or that have influenced me"},{hid:"og:type",name:"og:type",content:"article"},{hid:"og:title",name:"og:title",content:(i=t.value)==null?void 0:i.title},{hid:"og:url",name:"og:url",content:"https://eventuallycoding.com/resources"},{hid:"og:image",name:"og:image",content:"https://eventuallycoding.com/images/covers/"+((c=t.value)==null?void 0:c.cover)},{name:"og:image:alt",content:(l=t.value)==null?void 0:l.title},{name:"twitter:text:title",content:(m=t.value)==null?void 0:m.title},{name:"twitter:image",content:"https://eventuallycoding.com/images/covers/"+((u=t.value)==null?void 0:u.cover)},{name:"twitter:card",content:"summary"}],link:[{rel:"canonical",href:"https://eventuallycoding.com/resources"}]}),(z,K)=>{const h=g;return _(),y("div",null,[(_(),w(b,null,[d(e(R),null,{content:k(()=>[s("img",{src:"/images/covers/"+e(t).cover,alt:e(t).title,class:"absolute top-96 w-96 -translate-y-32"},null,8,A)]),_:1})],1024)),s("div",I,[s("h1",V,r(e(t).title),1),s("div",D,[s("img",{src:e(o).author_image,loading:"lazy",alt:"",class:"mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800"},null,8,E),s("div",null,[s("div",M,r(e(o).author),1),s("a",{target:"_blank",href:e(o).twitter+e(o).twitter_user,class:"text-sky-500 hover:text-sky-600 dark:text-sky-400"}," @"+r(e(o).twitter_user),9,N)])]),s("img",{class:"mx-auto w-4/5 my-10 rounded-md drop-shadow-sm",src:e(t).image},null,8,S),d(h,{class:"prose min-w-full p-10 mx-auto",value:e(t)},null,8,["value"])])])}}});const Y=C($,[["__scopeId","data-v-49fa4e1e"]]);export{Y as default};