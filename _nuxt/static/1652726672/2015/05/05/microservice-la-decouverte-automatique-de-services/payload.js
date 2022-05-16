__NUXT_JSONP__("/2015/05/05/microservice-la-decouverte-automatique-de-services", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D){return {data:[{article:{slug:"microservice-la-decouverte-automatique-de-services",description:"Le dernier billet de ce blog entamait une mini-série sur les microservices qui espère traiter des sujets suivants :\n- comment gérer une fédération d’...",title:"Microservice : la découverte automatique de services",date:"2015-05-05",categories:["waza"],tags:["backend",k,o,"spring-cloud","zuul"],img:"0f9d8-microservice.jpg",cover:"cover1.jpg",toc:[{id:k,depth:p,text:n},{id:q,depth:p,text:r}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"Le dernier billet de ce blog entamait une mini-série sur les microservices qui espère traiter des sujets suivants :"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"comment gérer une fédération d’identité (one login to rule them all)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"gérer une configuration distribuée"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fzuul\u002F",rel:[g,h,i],target:j,title:"Micro-services : routing avec Zuul"},children:[{type:a,value:"le routage"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"le load balancing"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"dispatcher des évènements sur plusieurs services"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"les jobs"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"la découverte de services"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"simplifier l’écriture des appels de services"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fmicro-services-la-composition-de-page-avec-zuul-et-sitemesh\u002F",rel:[g,h,i],target:j,title:"Micro-services : la composition de page avec Zuul et Sitemesh"},children:[{type:a,value:"la composition de page"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"la résistance aux pannes"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"le monitoring"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"le déploiement"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Le dernier billet s’attardait sur la composition de page. Pour ce billet, nous allons parler de \"service discovery\", la découverte de service pour les francophones."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Comme je l'évoquais dans le billet précédent, une architecture en micro services implique l'utilisation de plusieurs services qui apparaissent comme un seul service pour l'utilisateur final. Par exemple le visiteur sur Hopwork voit un seul domaine avec de multiples pages, la recherche, les annonces d'emploi, la page d'accueil qui sont en réalité plusieurs applications web sur le serveur :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F05\u002F0f9d8-microservice.jpg",rel:[g,h,i],target:j},children:[{type:b,tag:m,props:{alt:"microservice",src:"\u002Fimages\u002F0f9d8-microservice.jpg"},children:[]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Parmi les intérêts de ce type de solution, vous pouvez augmenter le nombre de services qui vont gérer la recherche et laisser les autres inchangé. Si tout avait été dans la même application, vous auriez du dupliquer l'ensemble de votre bloc applicatif alors qu'une grande partie ne le nécessite sans doute pas."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F05\u002Fcbbe8-microservices.jpg",rel:[g,h,i],target:j},children:[{type:b,tag:m,props:{alt:o,src:"\u002Fimages\u002Fcbbe8-microservices.jpg"},children:[]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"La problématique qui se pose alors, c'est de pouvoir ajouter un nouveau service de type \"search\", qu'il soit automatiquement découvert par le reste de l'applicatif et que les requêtes lui parviennent."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Si vous utilisiez nginx, vous pourriez déjà avoir un système de load balancing sur vos différents services de search "},{type:b,tag:f,props:{href:"http:\u002F\u002Fnginx.org\u002Fen\u002Fdocs\u002Fhttp\u002Fload_balancing.html",rel:[g,h,i],target:j},children:[{type:a,value:"préalablement configuré"}]},{type:a,value:". Ceci vous impose cependant de relancer nginx. Il existe malgré tout "},{type:b,tag:f,props:{href:"http:\u002F\u002Fnginx.com\u002Fproducts\u002Fon-the-fly-reconfiguration\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"une solution de reconfiguration à chaud pour nginx PLUS"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Si vous avez aussi une configuration inter micro services, une solution à base de nginx vous pousserait également à placer un frontal nginx devant chaque grappe de service. Envisageable, mais sans doute un peu pénible. Et dans ce cas de figure, nginx devient un spof (single point of failure). Il vous faut alors envisager de mettre en place de "},{type:b,tag:f,props:{href:"http:\u002F\u002Fnginx.com\u002Fblog\u002Fhigh-availability-clustering-with-nginx-plus\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"la haute disponibilité sur chaque frontal nginx"}]},{type:a,value:" pour chaque grappe de microservice."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ca serait envisageable mais nous allons voir une autre approche, toujours avec les outils de netflix qui ont été intégrés dans Spring Cloud."}]},{type:a,value:c},{type:b,tag:s,props:{id:k},children:[{type:b,tag:f,props:{href:"#eureka",ariaHidden:t,tabIndex:u},children:[{type:b,tag:v,props:{className:[w,x]},children:[]}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002FNetflix\u002Feureka",rel:[g,h,i],target:j},children:[{type:a,value:n}]},{type:a,value:" est un composant utilisé par Netflix en tant que, je cite, \"AWS Service registry for resilient mid-tier load balancing and failover\". Et en réalité ce n'est pas restreint à AWS."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"C'est donc un outil qui va permettre de réaliser de la découverte de service et que vous allez interroger pour avoir des informations sur les applications qui rendent un service donné."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F05\u002Fae328-eureka1.jpg",rel:[g,h,i],target:j},children:[{type:b,tag:m,props:{alt:k,src:"\u002Fimages\u002Fae328-eureka1.jpg"},children:[]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"La cinématique est donc la suivante :"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"pour chaque service, inscription auprès d'Eureka en tant que fournisseur d'un service X"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"pour chaque consommateur de service :\n"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"récupération au démarrage puis périodiquement de la liste des fournisseurs pour chaque service"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"appel direct vers un fournisseur"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour bien clarifier, le consommateur de service n'appelle pas Eureka à chaque fois qu'il a besoin de réaliser un appel vers un fournisseur de service !"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"La liste des fournisseurs de service est mise à jour périodiquement à travers un \"heartbeat\" communiqué à l'ensemble des clients Eureka. Mais un client peut très bien tomber sur un fournisseur down à un instant T."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Mais c'est pas un SPOF tout ça ?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Eh bien Eureka est lui-même un fournisseur de service et "},{type:b,tag:f,props:{href:"http:\u002F\u002Fcloud.spring.io\u002Fspring-cloud-netflix\u002Fspring-cloud-netflix.html#_high_availability_zones_and_regions",rel:[g,h,i],target:j},children:[{type:a,value:"peut donc lui-même s'enregistrer auprès d'autres serveurs eureka"}]},{type:a,value:" pour former un cluster de serveur Eureka. C'est bien sûr la configuration recommandée pour tourner en production."}]},{type:a,value:c},{type:b,tag:s,props:{id:q},children:[{type:b,tag:f,props:{href:"#mise-en-oeuvre",ariaHidden:t,tabIndex:u},children:[{type:b,tag:v,props:{className:[w,x]},children:[]}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Avant de démarrer, vous pouvez retrouver l'ensemble des sources disponible ici : "},{type:b,tag:f,props:{href:y,rel:[g,h,i],target:j},children:[{type:a,value:y}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Sur ce repo github, nous avons 3 applications :"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"le serveur Eureka"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"un fournisseur de service"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"un client du service fourni"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour le serveur Eureka, il ne s'agit que d'un main avec deux annotations spécifiques à Eureka :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"@SpringBootApplication\n@EnableEurekaServer\n@EnableDiscoveryClient\npublic class EurekaServerApplication {\npublic static void main(String[] args) {\nSpringApplication.run(EurekaServerApplication.class, args);\n}\n}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour le fournisseur de service, l'annotation devient :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Par contre il faut bien préciser l'url du serveur eureka et le nom du service proposé dans le fichier de configuration :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"server.port: 8081"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"eureka:\ninstance:\nleaseRenewalIntervalInSeconds: 10\nclient:\nregistryFetchIntervalSeconds: 5\nserviceUrl:\ndefaultZone: "},{type:b,tag:f,props:{href:A,rel:[g,h,i],target:j},children:[{type:a,value:A}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"spring.application.name: service1"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Enfin le client du service qui est également un EurekaClient utilise la même annotation :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et pour nous assurer que tout fonctionne, nous allons créer un endpoint pour afficher l'adresse d'un fournisseur de service déclaré dans le registre Eureka :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"@Autowired\nprivate DiscoveryClient discoveryClient;"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"@RequestMapping(\"\u002F\")\npublic String serviceUrl() {\nInstanceInfo instance = discoveryClient.getNextServerFromEureka(\"service1\", false);\nreturn instance.getHomePageUrl();\n}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Une fois toutes les applications lancées, vous pouvez retrouver la page de Eureka sur "},{type:b,tag:f,props:{href:B,rel:[g,h,i],target:j},children:[{type:a,value:B}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F05\u002F8e85f-eurekaui.jpg",rel:[g,h,i],target:j},children:[{type:b,tag:m,props:{alt:"eurekaui",src:"\u002Fimages\u002F8e85f-eurekaui.jpg"},children:[]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Vous noterez donc que 3 services sont enregistrés car le serveur et le client sont aussi des fournisseurs de services."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et vous avez un nouvel endpoint "},{type:b,tag:f,props:{href:C,rel:[g,h,i],target:j},children:[{type:a,value:C}]},{type:a,value:" qui vous donne la liste des services enregistrés ainsi que toutes les instances de fournisseur déclarés. Par exemple pour moi ici :"}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:a,value:"SERVICE1\n\n  hugo\\_pro\n  SERVICE1\n  192.168.50.1\n  UP\n  UNKNOWN\n  8081\n  443\n  1\n  \n    MyOwn\n  \n  \n    10\n    90\n    1430824522750\n    1430824522750\n    0\n    1430824492689\n  \n  \n  http:\u002F\u002Fhugo\\_pro:8081\u002F\n  http:\u002F\u002Fhugo\\_pro:8081\u002Finfo\n  http:\u002F\u002Fhugo\\_pro:8081\u002Fhealth\n  service1\n  false\n  1430824522750\n  1430824522656\n  ADDED\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Voilà, nous avons fait une petite introduction à Eureka. Pour l'instant nous allons en rester là mais nous allons voir par la suite comment combiner Eureka et Zuul pour faire du loadbalancing. Puis nous verrons comment utiliser Eureka pour faire des appels Rest. C'est loin d'être fini :)"}]}]},dir:"\u002Farticles\u002F2015\u002F05\u002F05",path:"\u002Farticles\u002F2015\u002F05\u002F05\u002Fmicroservice-la-decouverte-automatique-de-services",extension:".md",createdAt:D,updatedAt:D,bodyPlainText:"\nLe dernier billet de ce blog entamait une mini-série sur les microservices qui espère traiter des sujets suivants :\n\ncomment gérer une fédération d’identité (one login to rule them all)\ngérer une configuration distribuée\nle routage\nle load balancing\ndispatcher des évènements sur plusieurs services\nles jobs\nla découverte de services\nsimplifier l’écriture des appels de services\nla composition de page\nla résistance aux pannes\nle monitoring\nle déploiement\n\nLe dernier billet s’attardait sur la composition de page. Pour ce billet, nous allons parler de \"service discovery\", la découverte de service pour les francophones.\n\nComme je l'évoquais dans le billet précédent, une architecture en micro services implique l'utilisation de plusieurs services qui apparaissent comme un seul service pour l'utilisateur final. Par exemple le visiteur sur Hopwork voit un seul domaine avec de multiples pages, la recherche, les annonces d'emploi, la page d'accueil qui sont en réalité plusieurs applications web sur le serveur :\n\nmicroservice\n\n \n\nParmi les intérêts de ce type de solution, vous pouvez augmenter le nombre de services qui vont gérer la recherche et laisser les autres inchangé. Si tout avait été dans la même application, vous auriez du dupliquer l'ensemble de votre bloc applicatif alors qu'une grande partie ne le nécessite sans doute pas.\n\nmicroservices\n\n \n\nLa problématique qui se pose alors, c'est de pouvoir ajouter un nouveau service de type \"search\", qu'il soit automatiquement découvert par le reste de l'applicatif et que les requêtes lui parviennent.\n\nSi vous utilisiez nginx, vous pourriez déjà avoir un système de load balancing sur vos différents services de search préalablement configuré. Ceci vous impose cependant de relancer nginx. Il existe malgré tout une solution de reconfiguration à chaud pour nginx PLUS.\n\nSi vous avez aussi une configuration inter micro services, une solution à base de nginx vous pousserait également à placer un frontal nginx devant chaque grappe de service. Envisageable, mais sans doute un peu pénible. Et dans ce cas de figure, nginx devient un spof (single point of failure). Il vous faut alors envisager de mettre en place de la haute disponibilité sur chaque frontal nginx pour chaque grappe de microservice.\n\nCa serait envisageable mais nous allons voir une autre approche, toujours avec les outils de netflix qui ont été intégrés dans Spring Cloud.\n\nEureka\n\nEureka est un composant utilisé par Netflix en tant que, je cite, \"AWS Service registry for resilient mid-tier load balancing and failover\". Et en réalité ce n'est pas restreint à AWS.\n\nC'est donc un outil qui va permettre de réaliser de la découverte de service et que vous allez interroger pour avoir des informations sur les applications qui rendent un service donné.\n\neureka\n\nLa cinématique est donc la suivante :\n\npour chaque service, inscription auprès d'Eureka en tant que fournisseur d'un service X\npour chaque consommateur de service :\n    récupération au démarrage puis périodiquement de la liste des fournisseurs pour chaque service\n    appel direct vers un fournisseur\n\nPour bien clarifier, le consommateur de service n'appelle pas Eureka à chaque fois qu'il a besoin de réaliser un appel vers un fournisseur de service !\n\nLa liste des fournisseurs de service est mise à jour périodiquement à travers un \"heartbeat\" communiqué à l'ensemble des clients Eureka. Mais un client peut très bien tomber sur un fournisseur down à un instant T.\n\nMais c'est pas un SPOF tout ça ?\n\nEh bien Eureka est lui-même un fournisseur de service et peut donc lui-même s'enregistrer auprès d'autres serveurs eureka pour former un cluster de serveur Eureka. C'est bien sûr la configuration recommandée pour tourner en production.\n\nMise en oeuvre\n\nAvant de démarrer, vous pouvez retrouver l'ensemble des sources disponible ici : https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Fmicroservice-sandbox\u002Ftree\u002Fmaster\u002Fdiscovery\n\nSur ce repo github, nous avons 3 applications :\n\nle serveur Eureka\nun fournisseur de service\nun client du service fourni\n\nPour le serveur Eureka, il ne s'agit que d'un main avec deux annotations spécifiques à Eureka :\n\n@SpringBootApplication\n@EnableEurekaServer\n@EnableDiscoveryClient\npublic class EurekaServerApplication {\n    public static void main(String\\[\\] args) {\n        SpringApplication.run(EurekaServerApplication.class, args);\n    }\n}\n\nPour le fournisseur de service, l'annotation devient :\n\n@EnableEurekaClient\n\nPar contre il faut bien préciser l'url du serveur eureka et le nom du service proposé dans le fichier de configuration :\n\nserver.port: 8081\n\neureka:\n  instance:\n    leaseRenewalIntervalInSeconds: 10\n  client:\n    registryFetchIntervalSeconds: 5\n    serviceUrl:\n      defaultZone: http:\u002F\u002Flocalhost:8761\u002Feureka\u002F\n\nspring.application.name: service1\n\nEnfin le client du service qui est également un EurekaClient utilise la même annotation :\n\n@EnableEurekaClient\n\nEt pour nous assurer que tout fonctionne, nous allons créer un endpoint pour afficher l'adresse d'un fournisseur de service déclaré dans le registre Eureka :\n\n@Autowired\nprivate DiscoveryClient discoveryClient;\n\n@RequestMapping(\"\u002F\")\npublic String serviceUrl() {\n    InstanceInfo instance = discoveryClient.getNextServerFromEureka(\"service1\", false);\n    return instance.getHomePageUrl();\n}\n\nUne fois toutes les applications lancées, vous pouvez retrouver la page de Eureka sur http:\u002F\u002Flocalhost:8761\n\neurekaui\n\nVous noterez donc que 3 services sont enregistrés car le serveur et le client sont aussi des fournisseurs de services.\n\nEt vous avez un nouvel endpoint http:\u002F\u002Flocalhost:8761\u002Feureka\u002Fapps\u002F qui vous donne la liste des services enregistrés ainsi que toutes les instances de fournisseur déclarés. Par exemple pour moi ici :\n\n    SERVICE1\n\n      hugo\\_pro\n      SERVICE1\n      192.168.50.1\n      UP\n      UNKNOWN\n      8081\n      443\n      1\n\n        MyOwn\n\n        10\n        90\n        1430824522750\n        1430824522750\n        0\n        1430824492689\n\n      http:\u002F\u002Fhugo\\_pro:8081\u002F\n      http:\u002F\u002Fhugo\\_pro:8081\u002Finfo\n      http:\u002F\u002Fhugo\\_pro:8081\u002Fhealth\n      service1\n      false\n      1430824522750\n      1430824522656\n      ADDED\n\n\nVoilà, nous avons fait une petite introduction à Eureka. Pour l'instant nous allons en rester là mais nous allons voir par la suite comment combiner Eureka et Zuul pour faire du loadbalancing. Puis nous verrons comment utiliser Eureka pour faire des appels Rest. C'est loin d'être fini :)\n",readTime:{text:"5 min read",minutes:4.645,time:278700,words:929}},_img:{"/_ipx/_/hugo-nb.jpg":"\u002F_nuxt\u002Fimage\u002Fc3e54c.jpg"}}],fetch:{},mutations:void 0}}("text","element","\n","p","li","a","nofollow","noopener","noreferrer","_blank","eureka","ul","img","Eureka","microservices",3,"mise-en-oeuvre","Mise en oeuvre","h3","true",-1,"span","icon","icon-link","https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Fmicroservice-sandbox\u002Ftree\u002Fmaster\u002Fdiscovery","@EnableEurekaClient","http:\u002F\u002Flocalhost:8761\u002Feureka\u002F","http:\u002F\u002Flocalhost:8761","http:\u002F\u002Flocalhost:8761\u002Feureka\u002Fapps\u002F","2022-05-16T18:42:45.615Z")));