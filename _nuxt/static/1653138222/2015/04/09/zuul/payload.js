__NUXT_JSONP__("/2015/04/09/zuul", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A){return {data:[{article:{slug:l,description:"[![spring-cloud](\u002Fimages\u002F3b14a-spring-cloud.png)](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002F3b14a-spring-cloud.png)Long time no see, le d...",id:"1160",title:"Micro-services : routing avec Zuul",date:"2015-04-09",categories:["waza"],tags:[p,q,m,n,l],img:"3b14a-spring-cloud.png",cover:"cover8.jpg",toc:[],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002F3b14a-spring-cloud.png",rel:[g,h,i],target:j},children:[{type:b,tag:r,props:{alt:n,src:"\u002Fimages\u002F3b14a-spring-cloud.png"},children:[]}]},{type:a,value:"Long time no see, le dernier billet de blog date de janvier, une éternité en temps de développement. Ce délai car nous avons beaucoup travaillé sur Hopwork à repenser notre architecture et du coup, et bien je n'avais pas le temps pour blogger ^^ Mais qu'avons nous fait justement ? Eh bien nous avions déjà entamé un premier virage vers les micro services l'année dernière mais il restait encore beaucoup de points à adresser. Le temps pour passer de \"grosse appli monolithique\" à \"plein de trucs qui communiquent entre eux\" est non négligeable et on découvre des tas de petits détails qu'on n'imagine pas au début :"}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"comment gérer une fédération d'identité (one login to rule them all)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"gérer une configuration distribuée"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"le routage"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"le load balancing"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"dispatcher des évènements sur plusieurs services"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"les jobs"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"la découverte de services"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"simplifier l'écriture des appels de services"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"la composition de page"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"la résistance aux pannes"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"le monitoring"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"le déploiement"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"etc..."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je vais essayer de parler de ces points à travers différents futurs articles. Et je vous propose de commencer par le routage."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Si on a beaucoup parlé de "},{type:b,tag:f,props:{href:"http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fspring-boot-dans-le-doute-reboote\u002F",rel:[g,h,i],target:j,title:"Spring Boot : dans le doute reboote"},children:[{type:a,value:"Spring boot"}]},{type:a,value:" ces derniers temps, un autre projet de Spring va sans doute devenir l'un des plus importants sujets de discussion dans les prochains mois, le dénommé "},{type:b,tag:f,props:{href:"http:\u002F\u002Fprojects.spring.io\u002Fspring-cloud\u002F",rel:[g,h,i],target:j,title:s},children:[{type:a,value:s}]},{type:a,value:". Si Spring-Cloud a désormais presque un an au compteur pour sa version 1.0.0, les composants qui vont tout changer pour ceux qui pratiquent les micro services en Java ont à peine 1 mois en version stable : "},{type:b,tag:f,props:{href:"http:\u002F\u002Fcloud.spring.io\u002Fspring-cloud-netflix\u002Fspring-cloud-netflix.html",rel:[g,h,i],target:j},children:[{type:a,value:"Spring-cloud-netflix"}]},{type:a,value:", première release en "},{type:b,tag:"strong",props:{},children:[{type:a,value:"mars 2015"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Basiquement, il s'agit de l'intégration des outils de "},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002FNetflix",rel:[g,h,i],target:j},children:[{type:a,value:"netflix"}]},{type:a,value:" dans la stack spring-boot. Cette fameuse stack netflix, c'est celle qui leur sert pour que leur site soit \"hautement disponible\" et oui, on peut dire que leur intégration dans la stack Spring est une sacré bonne nouvelle"}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:t,rel:[g,h,i],target:j},children:[{type:a,value:t}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:u,rel:[g,h,i],target:j},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:v,rel:[g,h,i],target:j},children:[{type:a,value:v}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Prenons l'un des premiers pour l'instant, "},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002FNetflix\u002Fzuul",rel:[g,h,i],target:j},children:[{type:a,value:"Zuul"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Non, pas le gardien du portail dans Ghostbusters..."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002F716c0-zuulterrordog1.png",rel:[g,h,i],target:j},children:[{type:b,tag:r,props:{alt:"ZuulTerrorDog1",src:"\u002Fimages\u002F716c0-zuulterrordog1.png"},children:[]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Zuul est l'un des composants de base de la stack, c'est en soi un simple reverse proxy Java. Un reverse proxy, c'est un routeur qui va dispatcher vos utilisateurs sur vos différents services en fonction des urls appelés."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Par exemple un appel sur \u002Fblog renverra vers le blog, un appel vers \u002Fforum vers le forum etc..."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour tout les services \"externes\", on utilisera apache ou nginx qui sont de très bons outils pour cela. Par exemple avec nginx pour une redirection vers le blog de hopwork :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"location \u002Fblog {\nrewrite ^\u002Fblog\u002F(.*) \u002F$1 break;\nproxy_pass "},{type:b,tag:f,props:{href:w,rel:[g,h,i],target:j},children:[{type:a,value:w}]},{type:a,value:";\nproxy_read_timeout 90;\n}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Mais Zuul va apporter quelques petites choses en plus lorsqu'il s'agit d'une architecture micro services :"}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"un routage dynamique et du load balancing (on verra plus tard avec eureka et ribbon)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"la gestion de coupe circuit (on verra plus tard avec hystrix)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"des filtres"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"et, point non négligeable, aucun nginx à configurer sur le poste du développeur pour bénéficier d'un reverse proxy pendant la phase de dev."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et comment ça marche ?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Eh bien c'est vraiment très simple."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Voici une appli Spring boot qui utilise Zuul :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"@SpringBootApplication\n@EnableZuulProxy\npublic class FrontApplication {\npublic static void main(String[] args) {\nSpringApplication.run(FrontApplication.class, args);\n}\n}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Simple non ? Juste une annotation pour démarrer Zuul."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ensuite vous avez une configuration vous permettant de définir votre routing dans votre fichier application.yml"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"zuul:\nroutes:\nresource1:\npath: \u002Fresource1\u002F**\nurl: "},{type:b,tag:f,props:{href:k,rel:[g,h,i],target:j},children:[{type:a,value:k}]},{type:a,value:"\nresource2:\npath: \u002Fresource2\u002F**\nurl: "},{type:b,tag:f,props:{href:x,rel:[g,h,i],target:j},children:[{type:a,value:x}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et c'est terminé. Désormais pour l'utilisateur, il verra "},{type:b,tag:f,props:{href:y,rel:[g,h,i],target:j},children:[{type:a,value:y}]},{type:a,value:" mais en réalité il sera sur "},{type:b,tag:f,props:{href:k,rel:[g,h,i],target:j},children:[{type:a,value:k}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour l'essayer vous même, le projet d'exemple est sur github"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:z,rel:[g,h,i],target:j},children:[{type:a,value:z}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"La suite dans les prochains billets."}]}]},dir:"\u002Farticles\u002F2015\u002F04\u002F09",path:"\u002Farticles\u002F2015\u002F04\u002F09\u002Fzuul",extension:".md",createdAt:A,updatedAt:A,bodyPlainText:"\nspring-cloudLong time no see, le dernier billet de blog date de janvier, une éternité en temps de développement. Ce délai car nous avons beaucoup travaillé sur Hopwork à repenser notre architecture et du coup, et bien je n'avais pas le temps pour blogger ^^ Mais qu'avons nous fait justement ? Eh bien nous avions déjà entamé un premier virage vers les micro services l'année dernière mais il restait encore beaucoup de points à adresser. Le temps pour passer de \"grosse appli monolithique\" à \"plein de trucs qui communiquent entre eux\" est non négligeable et on découvre des tas de petits détails qu'on n'imagine pas au début :\n\ncomment gérer une fédération d'identité (one login to rule them all)\ngérer une configuration distribuée\nle routage\nle load balancing\ndispatcher des évènements sur plusieurs services\nles jobs\nla découverte de services\nsimplifier l'écriture des appels de services\nla composition de page\nla résistance aux pannes\nle monitoring\nle déploiement\n\netc...\n\nJe vais essayer de parler de ces points à travers différents futurs articles. Et je vous propose de commencer par le routage.\n\nSi on a beaucoup parlé de Spring boot ces derniers temps, un autre projet de Spring va sans doute devenir l'un des plus importants sujets de discussion dans les prochains mois, le dénommé Spring cloud. Si Spring-Cloud a désormais presque un an au compteur pour sa version 1.0.0, les composants qui vont tout changer pour ceux qui pratiquent les micro services en Java ont à peine 1 mois en version stable : Spring-cloud-netflix, première release en mars 2015\n\nBasiquement, il s'agit de l'intégration des outils de netflix dans la stack spring-boot. Cette fameuse stack netflix, c'est celle qui leur sert pour que leur site soit \"hautement disponible\" et oui, on peut dire que leur intégration dans la stack Spring est une sacré bonne nouvelle\n\nhttp:\u002F\u002Ffr.slideshare.net\u002Fstonse\u002Fmicroservices-at-netflix\nhttp:\u002F\u002Ftechblog.netflix.com\u002F2012\u002F11\u002Fhystrix.html\nhttp:\u002F\u002Ftechblog.netflix.com\u002F2013\u002F01\u002Fannouncing-ribbon-tying-netflix-mid.html\n\nPrenons l'un des premiers pour l'instant, Zuul.\n\nNon, pas le gardien du portail dans Ghostbusters...\n\nZuulTerrorDog1\n\nZuul est l'un des composants de base de la stack, c'est en soi un simple reverse proxy Java. Un reverse proxy, c'est un routeur qui va dispatcher vos utilisateurs sur vos différents services en fonction des urls appelés.\n\nPar exemple un appel sur \u002Fblog renverra vers le blog, un appel vers \u002Fforum vers le forum etc...\n\nPour tout les services \"externes\", on utilisera apache ou nginx qui sont de très bons outils pour cela. Par exemple avec nginx pour une redirection vers le blog de hopwork :\n\nlocation \u002Fblog {\n rewrite ^\u002Fblog\u002F(.\\*) \u002F$1 break;\n proxy\\_pass https:\u002F\u002Frblog.hopwork.com;\n proxy\\_read\\_timeout 90;\n }\n\nMais Zuul va apporter quelques petites choses en plus lorsqu'il s'agit d'une architecture micro services :\n\nun routage dynamique et du load balancing (on verra plus tard avec eureka et ribbon)\nla gestion de coupe circuit (on verra plus tard avec hystrix)\ndes filtres\n\net, point non négligeable, aucun nginx à configurer sur le poste du développeur pour bénéficier d'un reverse proxy pendant la phase de dev.\n\nEt comment ça marche ?\n\nEh bien c'est vraiment très simple.\n\nVoici une appli Spring boot qui utilise Zuul :\n\n@SpringBootApplication\n@EnableZuulProxy\npublic class FrontApplication {\n   public static void main(String\\[\\] args) {\n       SpringApplication.run(FrontApplication.class, args);\n   }\n}\n\nSimple non ? Juste une annotation pour démarrer Zuul.\n\nEnsuite vous avez une configuration vous permettant de définir votre routing dans votre fichier application.yml\n\nzuul:\n routes:\n  resource1:\n   path: \u002Fresource1\u002F\\\\\n   url: http:\u002F\u002Flocalhost:9001\u002Fresource1\u002F\n  resource2:\n   path: \u002Fresource2\u002F\\\\\n   url: http:\u002F\u002Flocalhost:9002\u002Fresource2\u002F\n\nEt c'est terminé. Désormais pour l'utilisateur, il verra http:\u002F\u002Flocalhost:8080\u002Fresource1 mais en réalité il sera sur http:\u002F\u002Flocalhost:9001\u002Fresource1\u002F\n\nPour l'essayer vous même, le projet d'exemple est sur github\n\nhttps:\u002F\u002Fgithub.com\u002Fhlassiege\u002Fzuul-sample\n\nLa suite dans les prochains billets.\n",readTime:{text:"4 min read",minutes:3.105,time:186300,words:621}},relatedArticles:[{slug:"spring-boot-et-ansible-sont-sur-un-bateau",description:"Il y a quelques jours je faisais un retweet [d'un article](http:\u002F\u002Fblog.adaofeliz.com\u002F2014\u002F11\u002F21\u002Ffirst-look-spring-boot-and-docker\u002F \"first-look-spring-...",id:"1119",title:"Spring-boot et Ansible sont sur un bateau",date:"2014-12-03",tags:["ansible","devops","ops",m],img:"61698-deploy.jpg",cover:"cover3.jpg",path:"\u002Farticles\u002F2014\u002F12\u002F03\u002Fspring-boot-et-ansible-sont-sur-un-bateau"},{slug:"spring-boot-et-vue-js-coderwatch-episode-4",description:"Voici le 4ème billet de cette série et pour ce billet nous allons parler de développement Backend avec une application Vue.js en Frontend. \nJe vais r...",id:"2073",title:"Spring Boot et Vue.js - Coderwatch episode 4",date:"2022-05-04",tags:["coderwatch",m,"startup","vuejs"],img:"pasted-image-0.png",cover:"cover7.jpg",path:"\u002Farticles\u002F2022\u002F05\u002F04\u002Fspring-boot-et-vue-js-coderwatch-episode-4"},{slug:"microservice-la-decouverte-automatique-de-services",description:"Le dernier billet de ce blog entamait une mini-série sur les microservices qui espère traiter des sujets suivants :\n- comment gérer une fédération d’...",id:"1196",title:"Microservice : la découverte automatique de services",date:"2015-05-05",tags:[p,"eureka",q,n,l],img:"0f9d8-microservice.jpg",cover:"cover6.jpg",path:"\u002Farticles\u002F2015\u002F05\u002F05\u002Fmicroservice-la-decouverte-automatique-de-services"}],_img:{"/_ipx/_/hugo-nb.jpg":"\u002F_nuxt\u002Fimage\u002Fc3e54c.jpg"}}],fetch:{},mutations:void 0}}("text","element","\n","p","li","a","nofollow","noopener","noreferrer","_blank","http:\u002F\u002Flocalhost:9001\u002Fresource1\u002F","zuul","spring-boot","spring-cloud","ul","backend","microservices","img","Spring cloud","http:\u002F\u002Ffr.slideshare.net\u002Fstonse\u002Fmicroservices-at-netflix","http:\u002F\u002Ftechblog.netflix.com\u002F2012\u002F11\u002Fhystrix.html","http:\u002F\u002Ftechblog.netflix.com\u002F2013\u002F01\u002Fannouncing-ribbon-tying-netflix-mid.html","https:\u002F\u002Frblog.hopwork.com","http:\u002F\u002Flocalhost:9002\u002Fresource2\u002F","http:\u002F\u002Flocalhost:8080\u002Fresource1","https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Fzuul-sample","2022-05-21T13:02:17.400Z")));