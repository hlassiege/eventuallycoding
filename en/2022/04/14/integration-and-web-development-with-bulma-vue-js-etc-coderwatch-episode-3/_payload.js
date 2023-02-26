export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A){return {data:{"/articles/en/2022/04/14/integration-and-web-development-with-bulma-vue-js-etc-coderwatch-episode-3":{_path:"\u002Farticles\u002Fen\u002F2022\u002F04\u002F14\u002Fintegration-and-web-development-with-bulma-vue-js-etc-coderwatch-episode-3",_dir:"14",_draft:j,_partial:j,_locale:i,_empty:j,title:l,description:"Let's talk about web integration, HTML, CSS and Frontend dev. \nIn this post I will detail the Coderwatch implementation choices and I will focus only...",id:"2040",date:"2022-04-14",categories:["waza"],tags:["bulma","coderwatch","frontend","product","vuejs"],img:"pasted-image-0.png",cover:"cover6.jpg",language:"en",alternates:[{fr:"https:\u002F\u002Feventuallycoding.com\u002F2022\u002F04\u002F08\u002Fintegration-et-dev-web-avec-bulma-vue-js-etc-coderwatch-episode-3"}],readingTime:{text:"7 min read",minutes:6.525,time:391500,words:1305},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:"Let's talk about web integration, HTML, CSS and Frontend dev. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"In this post I will detail the Coderwatch implementation choices and I will focus only on the Frontend. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"So I'm going to talk about technological choices and frameworks. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"To set the context, this post is part of a mini-series around the creation of a side project. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"If you haven't read the first ones, my goal is to describe all the steps for creating a relatively simple application:"}]},{type:a,tag:c,props:{},children:[{type:a,tag:m,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Fwww.coderwatch.io\u002F",rel:[e]},children:[{type:b,value:"www.coderwatch.io"}]},{type:b,value:" "},{type:a,tag:n,props:{},children:[{type:b,value:": allowing you to learn computer languages ​​and frameworks while playing"}]},{type:b,value:" . I suggest you take quizzes, earn points, and gradually climb the rankings against other players while improving your knowledge."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"On each post from now on I will also give an status update on Coderwatch, the number of users and the important metrics. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Posts in this series:"}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2022\u002F04\u002F04\u002Fthis-is-the-story-of-a-side-project\u002F",rel:[e]},children:[{type:b,value:"This is the story of a side project: cultivating an idea, creating an MVP"}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2022\u002F04\u002F08\u002Fcoderwatch-episode-2-design-with-figma-and-procreate\u002F",rel:[e]},children:[{type:b,value:"Coderwatch: Episode 2: Design with Figma and Procreate"}]}]},{type:a,tag:f,props:{},children:[{type:b,value:l}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"In the previous post I created a model with Figma and now we have to roll up our sleeves to integrate it into HTML\u002FCSS. "}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"https:\u002F\u002Ftranslate.google.com\u002Fwebsite?sl=fr&tl=en&hl=fr&client=webapp&u=https:\u002F\u002Fi0.wp.com\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2022\u002F04\u002Fpasted-image-0.png?ssl%3D1",rel:[e]},children:[{type:a,tag:o,props:{alt:i,src:"\u002Fimages\u002Fpasted-image-0.png"},children:[]}]}]},{type:a,tag:h,props:{id:p},children:[{type:b,value:q}]},{type:a,tag:c,props:{},children:[{type:b,value:"First, I'd like to say that I'm more of a Backend developer and I haven't developed my skills as an integrator in the past. So what I'm going to describe here is really the approach of a Backend developer who wants to develop a side project and who has to compromise between the state of the art and the learning curve."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Because precisely, the whole objective of this challenge is to touch every aspect of the application creation, while controlling costs and time. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"For the record, I follow "},{type:a,tag:d,props:{href:"https:\u002F\u002Fwww.youtube.com\u002Fc\u002FBenjaminCode?app=desktop",rel:[e]},children:[{type:b,value:"Benjamin Code's Youtube channel"}]},{type:b,value:" and he is rather in favor of doing without CSS Frameworks which have the unfortunate tendency to be quite heavy for sometimes little added value, or even are counterproductive because they do not use not the latest features of the language. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"You can find his full pitch here (sorry, it's in french): "}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:r,rel:[e]},children:[{type:b,value:r}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"So I tried to apply his advice by using "},{type:a,tag:d,props:{href:"https:\u002F\u002Ftailwindcss.com\u002F",rel:[e]},children:[{type:b,value:"tailwindCSS"}]},{type:b,value:" first. It is a framework that stands out from the others because it only offers utility classes, no components. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"(This is however not totally true because there is "},{type:a,tag:d,props:{href:"http:\u002F\u002Ftailwindui.com",rel:[e]},children:[{type:b,value:"tailwindui.com"}]},{type:b,value:" which offers galleries of paid components.) "}]},{type:a,tag:c,props:{},children:[{type:b,value:"But the basic idea is that you can do anything with just the utility library."}]},{type:a,tag:c,props:{},children:[{type:b,value:"To be honest, it was quite painful. It's quite unpleasant to pollute your HTML so much and it requires some fundamentals that I didn't have at that time. Coding the responsive menu, using the flexboxes, all that was too much for a start. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"So I changed my mind pretty quickly."}]},{type:a,tag:c,props:{},children:[{type:b,value:"However, I kept the idea of ​​finding a fairly light component-oriented framework, from which I could import only what interests me, without Javascript and with simple responsive consideration."}]},{type:a,tag:c,props:{},children:[{type:b,value:"And you know what ? There are many of them and trying them all can quickly become a time sink!"}]},{type:a,tag:c,props:{},children:[{type:b,value:"However, I ended up with "},{type:a,tag:d,props:{href:"https:\u002F\u002Fbulma.io\u002F",rel:[e]},children:[{type:b,value:"Bulma"}]},{type:b,value:" :"}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"no Javascript included"}]},{type:a,tag:f,props:{},children:[{type:b,value:"modular"}]},{type:a,tag:f,props:{},children:[{type:b,value:"has components"}]},{type:a,tag:f,props:{},children:[{type:b,value:"built to be customized by an intelligent system "},{type:a,tag:d,props:{href:"https:\u002F\u002Fbulma.io\u002Fdocumentation\u002Fcustomize\u002Fvariables\u002F",rel:[e]},children:[{type:b,value:"of variables"}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"has a large number of utility classes"}]}]},{type:a,tag:h,props:{id:s},children:[{type:b,value:t}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ideally, for a SAAS, the best dev setup in my opinion is a front end made with a JS framework and a back end that only serves APIs. This is not always possible for SEO reasons and I will come back to this in a future post dedicated to SEO. But for Coderwatch, it seemed completely suitable to me."}]},{type:a,tag:c,props:{},children:[{type:b,value:"The choice of Vue.js was quite natural for me. I could certainly have looked at React, Solid or Svelte, but we already use Vue.js at Malt and really without any regrets. The framework is very powerful, very easy to pick up and with a strong online community to find help."}]},{type:a,tag:c,props:{},children:[{type:b,value:"However, I hesitated with Nuxt.js which is an overlay of Vue3 with support for Backend side development and advanced features such as server side rendering. However, considering the backend dev in Javascript did not please me too much. I will come back to this in the future post about the Backend."}]},{type:a,tag:c,props:{},children:[{type:b,value:"With Vue.js I use"}]},{type:a,tag:c,props:{},children:[{type:b,value:u},{type:a,tag:d,props:{href:"https:\u002F\u002Frouter.vuejs.org\u002F",rel:[e]},children:[{type:b,value:"vue-router"}]},{type:b,value:" for page routing"}]},{type:a,tag:c,props:{},children:[{type:b,value:u},{type:a,tag:d,props:{href:"https:\u002F\u002Fpinia.vuejs.org\u002F",rel:[e]},children:[{type:b,value:"Pinia"}]},{type:b,value:" for the management of a state management, I had however started with vuex at the start"}]},{type:a,tag:h,props:{id:v},children:[{type:b,value:w}]},{type:a,tag:c,props:{},children:[{type:b,value:" I might make some JS experts jump on this point, but for a non-specialist, the build is an indescribable pain to start with."}]},{type:a,tag:c,props:{},children:[{type:b,value:"There are a multitude of tools in each category:"}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"package manager: npm, pnpm, yarn"}]},{type:a,tag:f,props:{},children:[{type:b,value:"tooling (?): webpack, gulp, vite, parcel etc…"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Many tools have overlaps, some are sometimes used together. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"And when you look for docs online, it's hell because you always find docs either on the wrong version and which doesn't work, or docs with the wrong tool combination, or with another tool . "}]},{type:a,tag:c,props:{},children:[{type:b,value:"To illustrate, I started at a time when vuejs changed its official major version. I started with a config that officially changed the following week. Upgrading and finding the right documentation was a purge."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Another example, I didn't setup Typescript support at first. I thought it would be easy to add later. I finally spent 2 weeks struggling in a working branch to get Typescript working."}]},{type:a,tag:c,props:{},children:[{type:b,value:"And I'm not talking about the number of times you have to struggle to figure out why an "},{type:a,tag:m,props:{},children:[{type:b,value:"npm install"}]},{type:b,value:" doesn't work, linked to a conflicting library. It is a manual work to understand the version expected by one or the other of the libraries in question."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Personally, I come from the Java world with a tool that, in my opinion, changed things radically in 2004: Maven."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Maven came as a replacement for Ant and it offers a standardized build. Ant allows you to do everything with a lot of flexibility (like Gradle today?) but at the expense of standardization."}]},{type:a,tag:c,props:{},children:[{type:b,value:"When a dev goes from one maven project to another, even with several versions apart, he is always confortable. He don't have to learn a lot. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"From my perspective, with a novice eye, JavaScript suffers from having very powerful tools, but too numerous, with rising versions which very often are not compatible, with so much flexibility that it becomes very complex to find the right configuration at the beginning but above all it is a hell to evolve."}]},{type:a,tag:h,props:{id:x},children:[{type:b,value:y}]},{type:a,tag:c,props:{},children:[{type:b,value:"I probably wouldn't have said that a few years ago, but in the end I really enjoyed this HTML\u002FCSS integration phase."}]},{type:a,tag:c,props:{},children:[{type:b,value:"I learned a lot about the flexbox system, about clippaths, about the modularization of my components, CSS animations, positioning etc… "}]},{type:a,tag:c,props:{},children:[{type:b,value:"This step lasted about "},{type:a,tag:n,props:{},children:[{type:b,value:"a week"}]},{type:b,value:" (still in evening and weekend mode) for about twenty pages. At the end of this week I felt much more comfortable and I wanted to progress more. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"If we forget the tooling, it was really fun to work on this part, to build pages and funnel and to gradually see the result appear."}]},{type:a,tag:h,props:{id:z},children:[{type:b,value:A}]},{type:a,tag:c,props:{},children:[{type:b,value:"The official launch was 2 weeks ago. The player count is 33 and I saw an increase that day with the first article in this series. However, the rate of new users is quite low (and 99% are in France)."}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"https:\u002F\u002Ftranslate.google.com\u002Fwebsite?sl=fr&tl=en&hl=fr&client=webapp&u=https:\u002F\u002Fi0.wp.com\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2022\u002F04\u002Fpasted-image-0-8.png?ssl%3D1",rel:[e]},children:[{type:a,tag:o,props:{alt:i,src:"\u002Fimages\u002Fpasted-image-0-8.png"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"The number of quizzes played is 39, which implies that several players have played only once without returning. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"No user came via referral and only 3 questions were created by players."}]},{type:a,tag:c,props:{},children:[{type:b,value:"In short, for the moment the game has attracted almost only curious followers and we cannot say that it has found its product market fit. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"But it is certainly not at this stage that we should give up, the reverse would have been a surprise. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Three users gave me precise and interesting feedback on their journeys and I note a few limiting elements to properly introduce the game in the first moments of registration. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"The question I'm going to have to decide from now on is: should I focus on improving the game to turn current users into regular players and get them to promote it, or do I need to focus on gaining traffic. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Wait and see."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Thanks for reading me so far. Next week I'll be at Devoxx giving "},{type:a,tag:d,props:{href:"https:\u002F\u002Fcfp.devoxx.fr\u002F2022\u002Ftalk\u002FTBG-5289\u002FDevelopp(eur%7Ceuse)_Senior_avec_6_ans_d%E2%80%99experience,_et_apres_%3F",rel:[e]},children:[{type:b,value:"a talk on tech impact, leadership and careers"}]},{type:b,value:" so I probably won't write any posts. But the next post in this series will focus on Backend dev."}]},{type:a,tag:c,props:{},children:[{type:b,value:"See you soon"}]}],toc:{title:i,searchDepth:g,depth:g,links:[{id:p,depth:g,text:q},{id:s,depth:g,text:t},{id:v,depth:g,text:w},{id:x,depth:g,text:y},{id:z,depth:g,text:A}]}},_type:"markdown",_id:"content:articles:en:2022:04:14:integration-and-web-development-with-bulma-vue-js-etc-coderwatch-episode-3.md",_source:"content",_file:"articles\u002Fen\u002F2022\u002F04\u002F14\u002Fintegration-and-web-development-with-bulma-vue-js-etc-coderwatch-episode-3.md",_extension:"md"}},prerenderedAt:1677427112074}}("element","text","p","a","nofollow","li",2,"h2","",false,"ul","Integration and web development with Bulma, Vue.js etc… – Coderwatch episode 3","em","strong","img","htmlcss-integration-with-or-without-a-framework","HTML\u002FCSS integration, with or without a framework?","https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=77hwpuVHGps","a-single-page-application-with-vuejs","A single page application with Vue.js","– ","the-build-pain-in-the-ass-of-a-javascript-stack","The build, pain in the ass of a javascript stack","positive-personal-record-in-web-integration","Positive personal record in Web integration","numbers-of-the-week-on-coderwatch","Numbers of the week on Coderwatch"))