export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return {data:{"/articles/2015/04/09/zuul":{_path:"\u002Farticles\u002F2015\u002F04\u002F09\u002Fzuul",_dir:"09",_draft:h,_partial:h,_locale:j,_empty:h,title:"Micro-services : routing avec Zuul",description:"[![spring-cloud](\u002Fimages\u002F3b14a-spring-cloud.png)](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002F3b14a-spring-cloud.png)Long time no see, le d...",id:"1160",date:"2015-04-09",categories:["waza"],tags:["backend","microservices","spring-boot",k,"zuul"],img:"3b14a-spring-cloud.png",cover:"cover8.jpg",readingTime:{text:"3 min read",minutes:2.76,time:165600,words:552},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002F3b14a-spring-cloud.png",rel:[f]},children:[{type:a,tag:l,props:{alt:k,src:"\u002Fimages\u002F3b14a-spring-cloud.png"},children:[]}]},{type:b,value:"Long time no see, le dernier billet de blog date de janvier, une éternité en temps de développement. Ce délai car nous avons beaucoup travaillé sur Hopwork à repenser notre architecture et du coup, et bien je n'avais pas le temps pour blogger ^^ Mais qu'avons nous fait justement ? Eh bien nous avions déjà entamé un premier virage vers les micro services l'année dernière mais il restait encore beaucoup de points à adresser. Le temps pour passer de \"grosse appli monolithique\" à \"plein de trucs qui communiquent entre eux\" est non négligeable et on découvre des tas de petits détails qu'on n'imagine pas au début :"}]},{type:a,tag:i,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"comment gérer une fédération d'identité (one login to rule them all)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"gérer une configuration distribuée"}]},{type:a,tag:d,props:{},children:[{type:b,value:"le routage"}]},{type:a,tag:d,props:{},children:[{type:b,value:"le load balancing"}]},{type:a,tag:d,props:{},children:[{type:b,value:"dispatcher des évènements sur plusieurs services"}]},{type:a,tag:d,props:{},children:[{type:b,value:"les jobs"}]},{type:a,tag:d,props:{},children:[{type:b,value:"la découverte de services"}]},{type:a,tag:d,props:{},children:[{type:b,value:"simplifier l'écriture des appels de services"}]},{type:a,tag:d,props:{},children:[{type:b,value:"la composition de page"}]},{type:a,tag:d,props:{},children:[{type:b,value:"la résistance aux pannes"}]},{type:a,tag:d,props:{},children:[{type:b,value:"le monitoring"}]},{type:a,tag:d,props:{},children:[{type:b,value:"le déploiement"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"etc..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je vais essayer de parler de ces points à travers différents futurs articles. Et je vous propose de commencer par le routage."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si on a beaucoup parlé de "},{type:a,tag:e,props:{href:"http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fspring-boot-dans-le-doute-reboote\u002F",rel:[f],title:"Spring Boot : dans le doute reboote"},children:[{type:b,value:"Spring boot"}]},{type:b,value:" ces derniers temps, un autre projet de Spring va sans doute devenir l'un des plus importants sujets de discussion dans les prochains mois, le dénommé "},{type:a,tag:e,props:{href:"http:\u002F\u002Fprojects.spring.io\u002Fspring-cloud\u002F",rel:[f],title:m},children:[{type:b,value:m}]},{type:b,value:". Si Spring-Cloud a désormais presque un an au compteur pour sa version 1.0.0, les composants qui vont tout changer pour ceux qui pratiquent les micro services en Java ont à peine 1 mois en version stable : "},{type:a,tag:e,props:{href:"http:\u002F\u002Fcloud.spring.io\u002Fspring-cloud-netflix\u002Fspring-cloud-netflix.html",rel:[f]},children:[{type:b,value:"Spring-cloud-netflix"}]},{type:b,value:", première release en "},{type:a,tag:"strong",props:{},children:[{type:b,value:"mars 2015"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Basiquement, il s'agit de l'intégration des outils de "},{type:a,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002FNetflix",rel:[f]},children:[{type:b,value:"netflix"}]},{type:b,value:" dans la stack spring-boot. Cette fameuse stack netflix, c'est celle qui leur sert pour que leur site soit \"hautement disponible\" et oui, on peut dire que leur intégration dans la stack Spring est une sacré bonne nouvelle"}]},{type:a,tag:i,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{href:n,rel:[f]},children:[{type:b,value:n}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{href:o,rel:[f]},children:[{type:b,value:o}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{href:p,rel:[f]},children:[{type:b,value:p}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Prenons l'un des premiers pour l'instant, "},{type:a,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002FNetflix\u002Fzuul",rel:[f]},children:[{type:b,value:"Zuul"}]},{type:b,value:"."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Non, pas le gardien du portail dans Ghostbusters..."}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002F716c0-zuulterrordog1.png",rel:[f]},children:[{type:a,tag:l,props:{alt:"ZuulTerrorDog1",src:"\u002Fimages\u002F716c0-zuulterrordog1.png"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Zuul est l'un des composants de base de la stack, c'est en soi un simple reverse proxy Java. Un reverse proxy, c'est un routeur qui va dispatcher vos utilisateurs sur vos différents services en fonction des urls appelés."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par exemple un appel sur \u002Fblog renverra vers le blog, un appel vers \u002Fforum vers le forum etc..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour tout les services \"externes\", on utilisera apache ou nginx qui sont de très bons outils pour cela. Par exemple avec nginx pour une redirection vers le blog de hopwork :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"location \u002Fblog {\nrewrite ^\u002Fblog\u002F(.*) \u002F$1 break;\nproxy_pass "},{type:a,tag:e,props:{href:q,rel:[f]},children:[{type:b,value:q}]},{type:b,value:";\nproxy_read_timeout 90;\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais Zuul va apporter quelques petites choses en plus lorsqu'il s'agit d'une architecture micro services :"}]},{type:a,tag:i,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"un routage dynamique et du load balancing (on verra plus tard avec eureka et ribbon)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"la gestion de coupe circuit (on verra plus tard avec hystrix)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"des filtres"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"et, point non négligeable, aucun nginx à configurer sur le poste du développeur pour bénéficier d'un reverse proxy pendant la phase de dev."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et comment ça marche ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Eh bien c'est vraiment très simple."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Voici une appli Spring boot qui utilise Zuul :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"@SpringBootApplication\n@EnableZuulProxy\npublic class FrontApplication {\npublic static void main(String[] args) {\nSpringApplication.run(FrontApplication.class, args);\n}\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Simple non ? Juste une annotation pour démarrer Zuul."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ensuite vous avez une configuration vous permettant de définir votre routing dans votre fichier application.yml"}]},{type:a,tag:c,props:{},children:[{type:b,value:"zuul:\nroutes:\nresource1:\npath: \u002Fresource1\u002F**\nurl: "},{type:a,tag:e,props:{href:g,rel:[f]},children:[{type:b,value:g}]},{type:b,value:"\nresource2:\npath: \u002Fresource2\u002F**\nurl: "},{type:a,tag:e,props:{href:r,rel:[f]},children:[{type:b,value:r}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et c'est terminé. Désormais pour l'utilisateur, il verra "},{type:a,tag:e,props:{href:s,rel:[f]},children:[{type:b,value:s}]},{type:b,value:" mais en réalité il sera sur "},{type:a,tag:e,props:{href:g,rel:[f]},children:[{type:b,value:g}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour l'essayer vous même, le projet d'exemple est sur github"}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:t,rel:[f]},children:[{type:b,value:t}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"La suite dans les prochains billets."}]}],toc:{title:j,searchDepth:u,depth:u,links:[]}},_type:"markdown",_id:"content:articles:2015:04:09:zuul.md",_source:"content",_file:"articles\u002F2015\u002F04\u002F09\u002Fzuul.md",_extension:"md"}},prerenderedAt:1698044545121}}("element","text","p","li","a","nofollow","http:\u002F\u002Flocalhost:9001\u002Fresource1\u002F",false,"ul","","spring-cloud","img","Spring cloud","http:\u002F\u002Ffr.slideshare.net\u002Fstonse\u002Fmicroservices-at-netflix","http:\u002F\u002Ftechblog.netflix.com\u002F2012\u002F11\u002Fhystrix.html","http:\u002F\u002Ftechblog.netflix.com\u002F2013\u002F01\u002Fannouncing-ribbon-tying-netflix-mid.html","https:\u002F\u002Frblog.hopwork.com","http:\u002F\u002Flocalhost:9002\u002Fresource2\u002F","http:\u002F\u002Flocalhost:8080\u002Fresource1","https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Fzuul-sample",2))