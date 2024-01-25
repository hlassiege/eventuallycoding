import{_ as f}from"./nuxt-img.a1322432.js";import{_ as h}from"./nuxt-link.223f9b54.js";import{H as g}from"./HeroSection.e91bc4ac.js";import{s as p}from"./siteMetaData.389eae67.js";import{f as _,o as s,g as w,w as l,a as t,b as i,u as b,d as o,c as r,h as u,t as d,F as y,r as v}from"./entry.2e87e90f.js";const k={class:"flex flex-col items-center justify-center"},S={class:"p-3 text-white rounded"},$={class:"flex items-center"},L={class:"text-left"},B=t("p",{class:"name rounded-xl font-bold p-2 tracking-wider"},[t("span",{class:"font-extrabold text-2xl font-bruno"},"Writing")],-1),H={class:"mb-6 text-white w-full mx-auto"},N=t("p",{class:"mt-8 mb-4 md:text-xl text-base font-mark"},[o(" Here you can browse my thoughts on different topics, "),t("br"),o(" mostly on Software Development, "),t("br"),o(" Entrepreneurship and Startups."),t("br")],-1),z={class:"mt-8 mb-4 md:text-xl text-base font-mark"},C=t("br",null,null,-1),et=_({__name:"BlogSectionHeader",props:{currentLang:{type:String,default:"en"}},setup(e){return(a,m)=>{const c=f,n=h,x=g;return s(),w(x,null,{content:l(()=>[t("div",k,[t("div",S,[t("div",$,[i(c,{src:b(p).author_image,loading:"lazy",alt:"me",class:"shadow-xl md:h-50 md:w-50 h-40 w-40 rounded-full hover:shadow-amber-700 hover:-translate-y-1 hover:shadow-2xl transition-all mr-10"},null,8,["src"]),t("div",L,[B,t("div",H,[N,t("p",z,[o(" I'm also the author of "),i(n,{class:"underline",to:(e.currentLang==="en"?"/en":"")+"/2023/02/impactful-software-engineering"},{default:l(()=>[o('"Impactful Software Engineering"')]),_:1},8,["to"]),C,o(" that you can read for free here. ")])])])])])])]),_:1})}}}),T={class:"hidden px-6 py-6 space-y-8 sm:block w-[200px]","aria-label":"Sidebar"},F={class:""},M={key:0},V=t("h3",{class:"text-lg font-medium text-gray-700"},"Filter:",-1),E=[V],I={key:1,class:"inline-flex items-center mt-8 mb-8 flex px-3 py-1 text-left text-slate-600 flex items-stretch text-sm transition duration-150 ease-out border border-gray-700 outline-none group lg:hover:border-gray-400",href:"#"},j={class:"text-sm font-medium"},D=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 my-auto right-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),R=t("div",null,[t("h3",{class:"text-lg font-medium text-gray-700"}," Recommended topics : ")],-1),A={class:"w-full"},W={class:"flex flex-wrap -mx-2"},q=["href"],G={class:"px-1 mt-2"},J={tabindex:"-1",class:"flex items-stretch text-sm transition duration-150 ease-out border border-gray-700 outline-none group lg:hover:border-gray-400"},K={class:"flex px-3 py-1 text-left text-slate-600"},ot=_({__name:"BlogFilterBar",props:{currentTag:{type:String,default:""},currentLang:{type:String,default:""}},setup(e){const a=["agile","architecture","backend","engineering","future-of-work","freelance","lateralthoughts","product","startup"];return(m,c)=>(s(),r("aside",T,[t("div",F,[e.currentTag?(s(),r("div",M,E)):u("",!0),e.currentTag?(s(),r("a",I,[t("span",j,d(e.currentTag)+"   ",1),D])):u("",!0),R,t("div",A,[t("div",W,[(s(),r(y,null,v(a,n=>t("a",{key:n,href:"blog?tag="+n},[t("div",G,[t("button",J,[t("div",K," #"+d(n),1)])])],8,q)),64))])])])]))}}),O={class:"font-montserrat font-medium text-center text-md text-slate-800 pt-[60px] -mt-16"},P=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 inline-block",viewBox:"0 0 512 512"},[t("path",{d:"M266.3 48.3L232.5 73.6c-5.4 4-8.5 10.4-8.5 17.1v9.1c0 6.8 5.5 12.3 12.3 12.3c2.4 0 4.8-.7 6.8-2.1l41.8-27.9c2-1.3 4.4-2.1 6.8-2.1h1c6.2 0 11.3 5.1 11.3 11.3c0 3-1.2 5.9-3.3 8l-19.9 19.9c-5.8 5.8-12.9 10.2-20.7 12.8l-26.5 8.8c-5.8 1.9-9.6 7.3-9.6 13.4c0 3.7-1.5 7.3-4.1 10l-17.9 17.9c-6.4 6.4-9.9 15-9.9 24v4.3c0 16.4 13.6 29.7 29.9 29.7c11 0 21.2-6.2 26.1-16l4-8.1c2.4-4.8 7.4-7.9 12.8-7.9c4.5 0 8.7 2.1 11.4 5.7l16.3 21.7c2.1 2.9 5.5 4.5 9.1 4.5c8.4 0 13.9-8.9 10.1-16.4l-1.1-2.3c-3.5-7 0-15.5 7.5-18l21.2-7.1c7.6-2.5 12.7-9.6 12.7-17.6c0-10.3 8.3-18.6 18.6-18.6H400c8.8 0 16 7.2 16 16s-7.2 16-16 16H379.3c-7.2 0-14.2 2.9-19.3 8l-4.7 4.7c-2.1 2.1-3.3 5-3.3 8c0 6.2 5.1 11.3 11.3 11.3h11.3c6 0 11.8 2.4 16 6.6l6.5 6.5c1.8 1.8 2.8 4.3 2.8 6.8s-1 5-2.8 6.8l-7.5 7.5C386 262 384 266.9 384 272s2 10 5.7 13.7L408 304c10.2 10.2 24.1 16 38.6 16H454c6.5-20.2 10-41.7 10-64c0-111.4-87.6-202.4-197.7-207.7zm172 307.9c-3.7-2.6-8.2-4.1-13-4.1c-6 0-11.8-2.4-16-6.6L396 332c-7.7-7.7-18-12-28.9-12c-9.7 0-19.2-3.5-26.6-9.8L314 287.4c-11.6-9.9-26.4-15.4-41.6-15.4H251.4c-12.6 0-25 3.7-35.5 10.7L188.5 301c-17.8 11.9-28.5 31.9-28.5 53.3v3.2c0 17 6.7 33.3 18.7 45.3l16 16c8.5 8.5 20 13.3 32 13.3H248c13.3 0 24 10.7 24 24c0 2.5 .4 5 1.1 7.3c71.3-5.8 132.5-47.6 165.2-107.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM187.3 100.7c-6.2-6.2-16.4-6.2-22.6 0l-32 32c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l32-32c6.2-6.2 6.2-16.4 0-22.6z"})],-1),Q=t("small",{class:"ml-3 text-gray-500"},"Switch to ",-1),st=_({__name:"BlogContentLanguageSwitcher",props:{langSwitch:{type:String,default:"FR"},urlSwitch:{type:String,default:"/fr/blog"}},setup(e){return(a,m)=>{const c=h;return s(),r("div",O,[P,Q,i(c,{class:"underline decoration-red-400 decoration-4 underline-offset-8 text-md text-gray-500",to:e.urlSwitch,external:!0},{default:l(()=>[o(d(e.langSwitch),1)]),_:1},8,["to"])])}}});export{et as _,ot as a,st as b};