export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){return {data:{"/articles/2015/05/05/microservice-la-decouverte-automatique-de-services":{_path:"\u002Farticles\u002F2015\u002F05\u002F05\u002Fmicroservice-la-decouverte-automatique-de-services",_dir:"05",_draft:j,_partial:j,_locale:k,_empty:j,title:"Microservice : la découverte automatique de services",description:"Le dernier billet de ce blog entamait une mini-série sur les microservices qui espère traiter des sujets suivants :\n- comment gérer une fédération d’...",id:"1196",date:"2015-05-05",categories:["waza"],tags:["backend",g,m,"spring-cloud","zuul"],img:"0f9d8-microservice.jpg",cover:"cover6.jpg",readingTime:{text:"5 min read",minutes:4.16,time:249600,words:832},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:"Le dernier billet de ce blog entamait une mini-série sur les microservices qui espère traiter des sujets suivants :"}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"comment gérer une fédération d’identité (one login to rule them all)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"gérer une configuration distribuée"}]},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{href:"http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fzuul\u002F",rel:[f],title:"Micro-services : routing avec Zuul"},children:[{type:b,value:"le routage"}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"le load balancing"}]},{type:a,tag:d,props:{},children:[{type:b,value:"dispatcher des évènements sur plusieurs services"}]},{type:a,tag:d,props:{},children:[{type:b,value:"les jobs"}]},{type:a,tag:d,props:{},children:[{type:b,value:"la découverte de services"}]},{type:a,tag:d,props:{},children:[{type:b,value:"simplifier l’écriture des appels de services"}]},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{href:"http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fmicro-services-la-composition-de-page-avec-zuul-et-sitemesh\u002F",rel:[f],title:"Micro-services : la composition de page avec Zuul et Sitemesh"},children:[{type:b,value:"la composition de page"}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"la résistance aux pannes"}]},{type:a,tag:d,props:{},children:[{type:b,value:"le monitoring"}]},{type:a,tag:d,props:{},children:[{type:b,value:"le déploiement"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le dernier billet s’attardait sur la composition de page. Pour ce billet, nous allons parler de \"service discovery\", la découverte de service pour les francophones."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme je l'évoquais dans le billet précédent, une architecture en micro services implique l'utilisation de plusieurs services qui apparaissent comme un seul service pour l'utilisateur final. Par exemple le visiteur sur Hopwork voit un seul domaine avec de multiples pages, la recherche, les annonces d'emploi, la page d'accueil qui sont en réalité plusieurs applications web sur le serveur :"}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F05\u002F0f9d8-microservice.jpg",rel:[f]},children:[{type:a,tag:i,props:{alt:"microservice",src:"\u002Fimages\u002F0f9d8-microservice.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Parmi les intérêts de ce type de solution, vous pouvez augmenter le nombre de services qui vont gérer la recherche et laisser les autres inchangé. Si tout avait été dans la même application, vous auriez du dupliquer l'ensemble de votre bloc applicatif alors qu'une grande partie ne le nécessite sans doute pas."}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F05\u002Fcbbe8-microservices.jpg",rel:[f]},children:[{type:a,tag:i,props:{alt:m,src:"\u002Fimages\u002Fcbbe8-microservices.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"La problématique qui se pose alors, c'est de pouvoir ajouter un nouveau service de type \"search\", qu'il soit automatiquement découvert par le reste de l'applicatif et que les requêtes lui parviennent."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si vous utilisiez nginx, vous pourriez déjà avoir un système de load balancing sur vos différents services de search "},{type:a,tag:e,props:{href:"http:\u002F\u002Fnginx.org\u002Fen\u002Fdocs\u002Fhttp\u002Fload_balancing.html",rel:[f]},children:[{type:b,value:"préalablement configuré"}]},{type:b,value:". Ceci vous impose cependant de relancer nginx. Il existe malgré tout "},{type:a,tag:e,props:{href:"http:\u002F\u002Fnginx.com\u002Fproducts\u002Fon-the-fly-reconfiguration\u002F",rel:[f]},children:[{type:b,value:"une solution de reconfiguration à chaud pour nginx PLUS"}]},{type:b,value:"."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si vous avez aussi une configuration inter micro services, une solution à base de nginx vous pousserait également à placer un frontal nginx devant chaque grappe de service. Envisageable, mais sans doute un peu pénible. Et dans ce cas de figure, nginx devient un spof (single point of failure). Il vous faut alors envisager de mettre en place de "},{type:a,tag:e,props:{href:"http:\u002F\u002Fnginx.com\u002Fblog\u002Fhigh-availability-clustering-with-nginx-plus\u002F",rel:[f]},children:[{type:b,value:"la haute disponibilité sur chaque frontal nginx"}]},{type:b,value:" pour chaque grappe de microservice."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ca serait envisageable mais nous allons voir une autre approche, toujours avec les outils de netflix qui ont été intégrés dans Spring Cloud."}]},{type:a,tag:n,props:{id:g},children:[{type:b,value:l}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002FNetflix\u002Feureka",rel:[f]},children:[{type:b,value:l}]},{type:b,value:" est un composant utilisé par Netflix en tant que, je cite, \"AWS Service registry for resilient mid-tier load balancing and failover\". Et en réalité ce n'est pas restreint à AWS."}]},{type:a,tag:c,props:{},children:[{type:b,value:"C'est donc un outil qui va permettre de réaliser de la découverte de service et que vous allez interroger pour avoir des informations sur les applications qui rendent un service donné."}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F05\u002Fae328-eureka1.jpg",rel:[f]},children:[{type:a,tag:i,props:{alt:g,src:"\u002Fimages\u002Fae328-eureka1.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"La cinématique est donc la suivante :"}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"pour chaque service, inscription auprès d'Eureka en tant que fournisseur d'un service X"}]},{type:a,tag:d,props:{},children:[{type:b,value:"pour chaque consommateur de service :"},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"récupération au démarrage puis périodiquement de la liste des fournisseurs pour chaque service"}]},{type:a,tag:d,props:{},children:[{type:b,value:"appel direct vers un fournisseur"}]}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour bien clarifier, le consommateur de service n'appelle pas Eureka à chaque fois qu'il a besoin de réaliser un appel vers un fournisseur de service !"}]},{type:a,tag:c,props:{},children:[{type:b,value:"La liste des fournisseurs de service est mise à jour périodiquement à travers un \"heartbeat\" communiqué à l'ensemble des clients Eureka. Mais un client peut très bien tomber sur un fournisseur down à un instant T."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais c'est pas un SPOF tout ça ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Eh bien Eureka est lui-même un fournisseur de service et "},{type:a,tag:e,props:{href:"http:\u002F\u002Fcloud.spring.io\u002Fspring-cloud-netflix\u002Fspring-cloud-netflix.html#_high_availability_zones_and_regions",rel:[f]},children:[{type:b,value:"peut donc lui-même s'enregistrer auprès d'autres serveurs eureka"}]},{type:b,value:" pour former un cluster de serveur Eureka. C'est bien sûr la configuration recommandée pour tourner en production."}]},{type:a,tag:n,props:{id:o},children:[{type:b,value:p}]},{type:a,tag:c,props:{},children:[{type:b,value:"Avant de démarrer, vous pouvez retrouver l'ensemble des sources disponible ici : "},{type:a,tag:e,props:{href:q,rel:[f]},children:[{type:b,value:q}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sur ce repo github, nous avons 3 applications :"}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"le serveur Eureka"}]},{type:a,tag:d,props:{},children:[{type:b,value:"un fournisseur de service"}]},{type:a,tag:d,props:{},children:[{type:b,value:"un client du service fourni"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour le serveur Eureka, il ne s'agit que d'un main avec deux annotations spécifiques à Eureka :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"@SpringBootApplication\n@EnableEurekaServer\n@EnableDiscoveryClient\npublic class EurekaServerApplication {\npublic static void main(String[] args) {\nSpringApplication.run(EurekaServerApplication.class, args);\n}\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour le fournisseur de service, l'annotation devient :"}]},{type:a,tag:c,props:{},children:[{type:b,value:r}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par contre il faut bien préciser l'url du serveur eureka et le nom du service proposé dans le fichier de configuration :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"server.port: 8081"}]},{type:a,tag:c,props:{},children:[{type:b,value:"eureka:\ninstance:\nleaseRenewalIntervalInSeconds: 10\nclient:\nregistryFetchIntervalSeconds: 5\nserviceUrl:\ndefaultZone: "},{type:a,tag:e,props:{href:s,rel:[f]},children:[{type:b,value:s}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"spring.application.name: service1"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Enfin le client du service qui est également un EurekaClient utilise la même annotation :"}]},{type:a,tag:c,props:{},children:[{type:b,value:r}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et pour nous assurer que tout fonctionne, nous allons créer un endpoint pour afficher l'adresse d'un fournisseur de service déclaré dans le registre Eureka :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"@Autowired\nprivate DiscoveryClient discoveryClient;"}]},{type:a,tag:c,props:{},children:[{type:b,value:"@RequestMapping(\"\u002F\")\npublic String serviceUrl() {\nInstanceInfo instance = discoveryClient.getNextServerFromEureka(\"service1\", false);\nreturn instance.getHomePageUrl();\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Une fois toutes les applications lancées, vous pouvez retrouver la page de Eureka sur "},{type:a,tag:e,props:{href:t,rel:[f]},children:[{type:b,value:t}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F05\u002F8e85f-eurekaui.jpg",rel:[f]},children:[{type:a,tag:i,props:{alt:"eurekaui",src:"\u002Fimages\u002F8e85f-eurekaui.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous noterez donc que 3 services sont enregistrés car le serveur et le client sont aussi des fournisseurs de services."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et vous avez un nouvel endpoint "},{type:a,tag:e,props:{href:u,rel:[f]},children:[{type:b,value:u}]},{type:b,value:" qui vous donne la liste des services enregistrés ainsi que toutes les instances de fournisseur déclarés. Par exemple pour moi ici :"}]},{type:a,tag:v,props:{code:w,meta:null},children:[{type:a,tag:"pre",props:{},children:[{type:a,tag:v,props:{__ignoreMap:k},children:[{type:b,value:w}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Voilà, nous avons fait une petite introduction à Eureka. Pour l'instant nous allons en rester là mais nous allons voir par la suite comment combiner Eureka et Zuul pour faire du loadbalancing. Puis nous verrons comment utiliser Eureka pour faire des appels Rest. C'est loin d'être fini :)"}]}],toc:{title:k,searchDepth:x,depth:x,links:[{id:g,depth:y,text:l},{id:o,depth:y,text:p}]}},_type:"markdown",_id:"content:articles:2015:05:05:microservice-la-decouverte-automatique-de-services.md",_source:"content",_file:"articles\u002F2015\u002F05\u002F05\u002Fmicroservice-la-decouverte-automatique-de-services.md",_extension:"md"}},prerenderedAt:1677968146295}}("element","text","p","li","a","nofollow","eureka","ul","img",false,"","Eureka","microservices","h3","mise-en-oeuvre","Mise en oeuvre","https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Fmicroservice-sandbox\u002Ftree\u002Fmaster\u002Fdiscovery","@EnableEurekaClient","http:\u002F\u002Flocalhost:8761\u002Feureka\u002F","http:\u002F\u002Flocalhost:8761","http:\u002F\u002Flocalhost:8761\u002Feureka\u002Fapps\u002F","code","SERVICE1\n\n  hugo\\_pro\n  SERVICE1\n  192.168.50.1\n  UP\n  UNKNOWN\n  8081\n  443\n  1\n  \n    MyOwn\n  \n  \n    10\n    90\n    1430824522750\n    1430824522750\n    0\n    1430824492689\n  \n  \n  http:\u002F\u002Fhugo\\_pro:8081\u002F\n  http:\u002F\u002Fhugo\\_pro:8081\u002Finfo\n  http:\u002F\u002Fhugo\\_pro:8081\u002Fhealth\n  service1\n  false\n  1430824522750\n  1430824522656\n  ADDED\n",2,3))