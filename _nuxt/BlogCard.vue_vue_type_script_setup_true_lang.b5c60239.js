import{l as f,v as y,B as i,u as b,o as t,b as r,X as u,V as m,e as o,Z as l,h as x,$ as v,a0 as w,a2 as k,U as C,Q as S}from"./entry.1f061433.js";const T=""+globalThis.__publicAssetsURL("images/post-anonymous.jpg"),q={key:0,class:"mb-4 bg-white border border-gray-200 min-h-[400px] border-b-2 border-b-slate-400 hover:drop-shadow-xl hover:border-gray-300 transition-all hover:-translate-y-1"},B=["src"],D={key:1,class:"object-contain w-full h-52",src:T,alt:""},L={class:"p-3"},N={class:"text-xs text-slate-400 left-2"},V={class:"text-lg font-bold"},j={class:"mt-2 text-[12px] my-3 flex flex-wrap -m-1"},$=["onClick","href"],M=f({__name:"BlogCard",props:{title:{type:String,required:!0},description:{type:String,required:!0},date:{type:String,required:!1},path:{type:String,required:!0},img:{type:String,required:!1},tags:{type:Array,required:!1},currentTag:{type:String,required:!1}},emits:["changeCurrentTag"],setup(s,{emit:A}){const e=s;function g(n){return new Date(n).toLocaleDateString("fr",{weekday:"short",year:"numeric",month:"short",day:"numeric"})}const h=y(()=>!e.currentTag||e.tags&&e.tags.includes(e.currentTag)),p=i(e.title),_=i(e.date),c=i(e.path.replace("articles/",""));return(n,F)=>{const d=S;return b(h)?(t(),r("div",q,[u(d,{class:"overflow-hidden",to:c.value},{default:m(()=>[s.img?(t(),r("img",{key:0,class:"object-cover w-full h-52",src:"/images/"+s.img,alt:""},null,8,B)):(t(),r("img",D))]),_:1},8,["to"]),o("div",L,[o("div",N,l(g(_.value)),1),o("h5",V,[u(d,{class:"overflow-hidden",to:c.value},{default:m(()=>[x(l(p.value),1)]),_:1},8,["to"])]),o("p",j,[(t(!0),r(v,null,w(s.tags,a=>(t(),r("a",{onClick:k(U=>n.$emit("changeCurrentTag",a),["prevent"]),href:"/blog?tag="+a,key:a,class:"m-1 leading-loose text-slate-400 border border-current lowercase px-2 rounded font-medium"},"#"+l(a),9,$))),128))])])])):C("",!0)}}});export{M as _};