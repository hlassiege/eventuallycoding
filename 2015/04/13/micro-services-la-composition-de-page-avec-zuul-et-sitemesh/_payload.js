export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S){return {data:{"/articles/2015/04/13/micro-services-la-composition-de-page-avec-zuul-et-sitemesh":{_path:"\u002Farticles\u002F2015\u002F04\u002F13\u002Fmicro-services-la-composition-de-page-avec-zuul-et-sitemesh",_dir:"13",_draft:r,_partial:r,_locale:s,_empty:r,title:"Micro-services : la composition de page avec Zuul et Sitemesh",description:"[![03BC](\u002Fimages\u002F07933-03bc.gif)](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002F07933-03bc.gif) Le dernier billet de ce blog entamait une min...",id:"1169",date:"2015-04-13",categories:["waza"],tags:["backend","microservices",q,"spring-boot","zuul"],img:"07933-03bc.gif",cover:"cover2.jpg",readingTime:{text:"9 min read",minutes:8.035,time:482100,words:1607},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002F07933-03bc.gif",rel:[i]},children:[{type:a,tag:m,props:{alt:"03BC",src:"\u002Fimages\u002F07933-03bc.gif"},children:[]}]},{type:b,value:" Le dernier billet de ce blog entamait une mini-série sur les microservices et j'espère bien susciter des commentaires afin d'améliorer le travail réalisé jusqu'ici. Voici une liste non exhaustive des différents sujets que j'aimerais traiter :"}]},{type:a,tag:l,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"comment gérer une fédération d’identité (one login to rule them all)"}]},{type:a,tag:f,props:{},children:[{type:b,value:"gérer une configuration distribuée"}]},{type:a,tag:f,props:{},children:[{type:a,tag:h,props:{href:t,rel:[i],title:u},children:[{type:b,value:"le routage"}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"le load balancing"}]},{type:a,tag:f,props:{},children:[{type:b,value:"dispatcher des évènements sur plusieurs services"}]},{type:a,tag:f,props:{},children:[{type:b,value:"les jobs"}]},{type:a,tag:f,props:{},children:[{type:b,value:"la découverte de services"}]},{type:a,tag:f,props:{},children:[{type:b,value:"simplifier l’écriture des appels de services"}]},{type:a,tag:f,props:{},children:[{type:b,value:"la composition de page"}]},{type:a,tag:f,props:{},children:[{type:b,value:"la résistance aux pannes"}]},{type:a,tag:f,props:{},children:[{type:b,value:"le monitoring"}]},{type:a,tag:f,props:{},children:[{type:b,value:"le déploiement"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le "},{type:a,tag:h,props:{href:t,rel:[i],title:u},children:[{type:b,value:"dernier billet"}]},{type:b,value:" s'attardait sur le routage. Dans ce billet j'aimerais aborder une problématique récurrente : la composition de pages"}]},{type:a,tag:c,props:{},children:[{type:b,value:"TLDR; le code avec l'utilisation de sitemesh est disponible sur "},{type:a,tag:h,props:{href:v,rel:[i]},children:[{type:b,value:"github"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tout d'abord, resituons le problème. Imaginons une application, au hasard Hopwork, que nous avons décomposé en microservices comme suit :"}]},{type:a,tag:l,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"le moteur de recherche"}]},{type:a,tag:f,props:{},children:[{type:b,value:"le back office freelance\u002Fclients"}]},{type:a,tag:f,props:{},children:[{type:b,value:"les pages \"statiques\" (accueil, comment ca marche etc...)"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002Fdf8a2-services.jpg",rel:[i]},children:[{type:a,tag:m,props:{alt:"services",src:"\u002Fimages\u002Fdf8a2-services.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous remarquerez sur les captures d'écran qu'il y a tout de même un élément commun : le menu Et si nous allions en bas de la page, nous aurions également le footer. Chaque page est donc composée comme suit :"}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002Fc7c59-composition.png",rel:[i]},children:[{type:a,tag:m,props:{alt:"composition",src:"\u002Fimages\u002Fc7c59-composition.png"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le footer ne bouge pas. Par contre le menu est dynamique. Il affiche votre nom quand vous êtes loggés ainsi que des items de menus différents par exemple."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Traditionnellement sur une application monolithique vous utiliseriez des inclusions de jsp, des custom tags, "},{type:a,tag:h,props:{href:w,rel:[i]},children:[{type:b,value:x}]},{type:b,value:", "},{type:a,tag:h,props:{href:"http:\u002F\u002Fwww.thymeleaf.org\u002F",rel:[i]},children:[{type:b,value:"thymeleaf"}]},{type:b,value:" etc..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et pour une application décomposé en plusieurs services ? Quelles seraient les solutions à envisager ?"}]},{type:a,tag:n,props:{id:y},children:[{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sans doute la pire solution mais il ne faut rien écarter. Ici il s'agit simplement d'avoir votre menu et votre footer dupliqué dans chaque micro services."}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002F3f257-duplication.jpg",rel:[i]},children:[{type:a,tag:m,props:{alt:"duplication",src:"\u002Fimages\u002F3f257-duplication.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bon, vous imaginez sans mal les inconvénients :"}]},{type:a,tag:l,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"effort de maintenance démultipliée"}]},{type:a,tag:f,props:{},children:[{type:b,value:"aucun mécanisme pour qu'une application ait le même menu que les autres, vous pourriez avoir des liens dans le footer différent par exemple"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par contre à sa décharge, cette méthode a quand même des avantages :"}]},{type:a,tag:l,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:A}]},{type:a,tag:f,props:{},children:[{type:b,value:"vous pouvez utiliser des versions différentes de css pour un rendu équivalent"}]},{type:a,tag:f,props:{},children:[{type:b,value:B}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ce dernier point est très important. Mais l'effort de maintenance reste beaucoup trop important pour envisager sérieusement cette solution."}]},{type:a,tag:n,props:{id:C},children:[{type:b,value:D}]},{type:a,tag:c,props:{},children:[{type:b,value:"C'est une petite amélioration du cas précédent. Le code css\u002Fjs\u002Fhtml reste dupliqué, permettant à chaque microservices d'évoluer indépendamment. Mais le contenu du menu et du footer est dynamique. Ce qui reste une petite amélioration intéressante."}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002F43bd1-duplication-with-db1.jpg",rel:[i]},children:[{type:a,tag:m,props:{alt:"duplication-with-db",src:"\u002Fimages\u002F43bd1-duplication-with-db1.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"L'effort de maintenance reste très important."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Une variante de cette solution serait d'avoir le code html complet du header\u002Ffooter en base de données."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cette fois on élimine l'effort de maintenance. Le versionning peut se faire facilement."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le défaut majeur repose sur le fait que votre menu peut avoir des composantes dynamiques et afficher certains items :"}]},{type:a,tag:l,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"si l'utilisateur est loggé ou non"}]},{type:a,tag:f,props:{},children:[{type:b,value:"si certaines fonctionnalités sont affichées pour lui (feature flipping)"}]},{type:a,tag:f,props:{},children:[{type:b,value:"si certaines fonctionnalités lui sont accessibles (hopwork analytiques ou widgets non disponible pour les clients par exemple)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Voyons autre chose."}]},{type:a,tag:n,props:{id:E},children:[{type:b,value:F}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ca parait simple comme idée, il suffit ensuite d'utiliser cette jsp ensuite avec une directive d'inclusion :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u003C%@ include file=\"include\u002Fmenu.jsp\"\u002F\u003E"}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002F65476-webresources.jpg",rel:[i]},children:[{type:a,tag:m,props:{alt:"webresources",src:"\u002Fimages\u002F65476-webresources.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Plusieurs défauts à celà :"}]},{type:a,tag:l,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"ce n'est pas si simple de partager une jsp dans un jar. D'ailleurs je n'ai pas réussi. La seule solution technique que j'ai trouvé a été d'utiliser une dépendance sous forme de war avec le plugin maven war qui fait ensuite une fusion des deux wars"}]},{type:a,tag:f,props:{},children:[{type:b,value:"cela implique que toutes vos applications web partagent la même technologie. Si a un moment vous choisisissez d'utiliser Thymeleaf ou velocity dans un autre service, votre jsp devient inutile."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Pire, même pour du contenu statique, vous êtes obligé d'en faire une jsp. Dommage."}]},{type:a,tag:f,props:{},children:[{type:b,value:"cela impose de relivrer pour avoir la dernière version du menu ou du footer"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Quelques avantages :"}]},{type:a,tag:l,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:B}]},{type:a,tag:f,props:{},children:[{type:b,value:"vous dépendez d'une version stable et pouvez évoluer quand vous le souhaitez (pensez aux gros refactoring js et css qui pourrait impacter chaque application)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Evidemment on peut partir du principe que ces éléments bougent peu donc le jeu ne vaut pas la chandelle d'aller plus loin et on peut accepter des désynchro de temps en temps. Pour être honnête, c'était ma première pensée de prime abord."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et puis je suis tombé sur un vieux billet de Matt Raible de 2005 : "},{type:a,tag:h,props:{href:"http:\u002F\u002Fraibledesigns.com\u002Frd\u002Fentry\u002Fuse_sitemesh_to_decorate_multiple",rel:[i]},children:[{type:b,value:"Use SiteMesh to decorate multiple webapps"}]}]},{type:a,tag:n,props:{id:G},children:[{type:b,value:H}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je ne connaissais pas bien "},{type:a,tag:h,props:{href:"http:\u002F\u002Fwiki.sitemesh.org\u002Fwiki\u002F",rel:[i]},children:[{type:b,value:q}]},{type:b,value:". Je l'avais croisé sur un projet pour un voyagiste d'affaire il y a quelques années mais a l'époque, tout le monde se demandait surtout ce que ca foutait dans le projet :) Les joies du legacy. Mais ce billet très court de M. Raible m'a convaincu de tester."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sitemesh en soi est finalement très simple à comprendre. Il agit en tant que filtre de servlet pour décorer votre page. C'est très différent d'un "},{type:a,tag:h,props:{href:w,rel:[i]},children:[{type:b,value:x}]},{type:b,value:" dans le sens ou votre page d'origine est complète. Nous sommes ici dans le cas d'un parfait exemple du "},{type:a,tag:h,props:{href:"http:\u002F\u002Ffr.wikipedia.org\u002Fwiki\u002FD%C3%A9corateur_%28patron_de_conception%29",rel:[i]},children:[{type:b,value:"pattern decorator"}]},{type:b,value:"."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous pourriez par exemple avoir le code suivant :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"A title"}]},{type:a,tag:c,props:{},children:[{type:b,value:I}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cette décoration se fait à l'aide d'un fichier decorators.html qui décrit la décoration à réaliser. Par exemple :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Site name : A title"}]},{type:a,tag:c,props:{},children:[{type:b,value:J}]},{type:a,tag:c,props:{},children:[{type:b,value:I}]},{type:a,tag:c,props:{},children:[{type:b,value:J}]},{type:a,tag:c,props:{},children:[{type:b,value:"Chose intéressante, le billet de M. Raible semblait suggérer que ce décorateur pouvait se trouver dans une autre application web."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bon, ce ne fut pas si simple au final. En effet sitemesh est un projet peu actif (5 commits en un an). La version 3 a apporté son lot de simplification, mais elle a aussi dégagé le support des décorateurs cross webapp (dans une autre application web)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cependant ca s'est quand même avéré très simple à mettre en place."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il a suffit de rajouter un filtre sitemesh :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"@Configuration\n@ConditionalOnProperty(\"sitemesh.filter.enabled\")\npublic class SitemeshConfig {\n@Bean\npublic FilterRegistrationBean siteMeshFilter() {\nFilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();\nfilterRegistrationBean.setFilter(new MySiteMeshFilter());\nreturn filterRegistrationBean;\n}\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Au passage vous remarquerez l'utilisation des beans conditionnels facilité avec spring-boot. Ce filtre est actif ou non en fonction d'une configuration \"sitemesh.filter.enabled\""}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et le filtre sitemesh en lui-même :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public class MySiteMeshFilter extends ConfigurableSiteMeshFilter {\n@Override\nprotected void applyCustomConfiguration(SiteMeshFilterBuilder builder) {\nbuilder.addDecoratorPath(\"\u002F*\", \"\u002Fdecorators\u002Fdecorator\");\n}\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ok, mais ce n'est pas cross webapp ça."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Effectivement, mais l'astuce très simple consiste à créer un controleur qui va servir le contenu d'une autre page distante"}]},{type:a,tag:c,props:{},children:[{type:b,value:"@Controller\npublic class SitemeshController {\nprivate final OkHttpClient client = new OkHttpClient();\n@Value(\"${sitemesh.decorator.url}\")\nprivate String decoratorUrl;\n@RequestMapping(value = \"\u002Fdecorators\u002Fdecorator\", method = RequestMethod.GET)\n@ResponseBody\npublic Object decorator() throws IOException {\nRequest request = new Request.Builder()\n.url(decoratorUrl)\n.build();\nResponse response = client.newCall(request).execute();\nreturn response.body().string();\n}\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"J'ai utilisé ici "},{type:a,tag:h,props:{href:"http:\u002F\u002Fsquare.github.io\u002Fokhttp\u002F",rel:[i]},children:[{type:b,value:"okHttp"}]},{type:b,value:" pour la récupération du contenu distant."}]},{type:a,tag:c,props:{},children:[{type:b,value:"A partir de là, vous êtes capable de décorer votre page à partir d'un décorateur commun à tous vos services."}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002F3d5ad-sitemesh.jpg",rel:[i]},children:[{type:a,tag:m,props:{alt:q,src:"\u002Fimages\u002F3d5ad-sitemesh.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais que vient faire Zuul dans tout cela ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si vous avez lu le premier billet de cette série, nous utilisons Zuul pour présenter une seule url au client et pour lui inviter de naviguer sans arrêt entre différents sous domaines correspondant à mes applications."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et dans notre cas cela nous permet de partager aussi des ressources en commun :"}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002Fad5b9-zuul-sitemesh.jpg",rel:[i]},children:[{type:a,tag:m,props:{alt:"zuul-sitemesh",src:"\u002Fimages\u002Fad5b9-zuul-sitemesh.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Au final cette solution est très intéressante :"}]},{type:a,tag:l,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"aucune duplication de code"}]},{type:a,tag:f,props:{},children:[{type:b,value:"les pages dans vos applications sont complètes et peuvent donc être utilisées de facon autonome"}]},{type:a,tag:f,props:{},children:[{type:b,value:A}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"mais elle comporte quand même des inconvénients :"}]},{type:a,tag:l,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"si vous souhaitez le rendu final, vous devez avoir au moins le proxy Zuul lancé en même temps pour travailler."}]},{type:a,tag:f,props:{},children:[{type:b,value:"si vous partagez des css\u002Fjs sur le proxy Zuul, il y a des risques de casser votre microservice le jour ou le proxy Zuul fait évoluer ces ressources sans prévenir. Il faut sans doute penser à les versionner"}]},{type:a,tag:f,props:{},children:[{type:b,value:"la petite astuce avec le controleur intermédiaire n'est pas des plus optimales en terme de chemin."}]}]},{type:a,tag:n,props:{id:K},children:[{type:b,value:L}]},{type:a,tag:c,props:{},children:[{type:b,value:"Selon moi, spring-cloud qui se veut la réponse absolue pour construire des microservices en Java aurait vocation à répondre à ce point. Et je pense que cela pourrait passer par l'utilisation de filtres Zuul en post filtering. Par contre ceux-ci sont assez mal documentées et je n'ai pas encore bien compris comment en rajouter. On en entend parler sur "},{type:a,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002FNetflix\u002Fzuul\u002Fwiki\u002FWriting-Filters",rel:[i]},children:[{type:b,value:"la doc officielle de Netflix"}]},{type:b,value:", mais rien ne permet de comprendre comment les associer à Zuul dans le cas de Spring-cloud."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par rapport à la solution précédente, on déporterait la responsabilité de la décoration au proxy. Cela éviterait la petite astuce avec le controleur supplémentaire vu ci-dessus. Par contre on reste obligé d'avoir le proxy Zuul lancé pour travailler. Mais de toute facon ca semble assez inéluctable vu les responsabilités qu'on lui donne de plus en plus."}]},{type:a,tag:n,props:{id:M},children:[{type:b,value:N}]},{type:a,tag:c,props:{},children:[{type:b,value:"Piste intéressante, ca se versionne sans souci, ca permet de laisser chaque application vivre sa vie indépendamment. Ca oblige toujours à garder le proxy Zuul qui héberge la resource allumé cependant. Par contre je ne suis vraiment pas fan d'avoir un composant qui js qui induit une petite pause au chargement et un affichage qui se fait en deux temps."}]},{type:a,tag:n,props:{id:O},children:[{type:b,value:P}]},{type:a,tag:c,props:{},children:[{type:b,value:"Aucune idée pour être honnête, je ne connais pas assez pour savoir si c'est très différent d'une widget (en mieux). Mais si le défaut de l'affichage est le même, pas plus d'intérêt selon moi."}]},{type:a,tag:n,props:{id:Q},children:[{type:b,value:R}]},{type:a,tag:"table",props:{},children:[{type:a,tag:"thead",props:{},children:[{type:a,tag:p,props:{},children:[{type:a,tag:o,props:{align:d},children:[{type:b,value:"Solution"}]},{type:a,tag:o,props:{align:d},children:[{type:b,value:"Utilisation de contenu dynamique"}]},{type:a,tag:o,props:{align:d},children:[{type:b,value:"Pas de duplication de code"}]},{type:a,tag:o,props:{align:d},children:[{type:b,value:"Insensible au refactoring"}]},{type:a,tag:o,props:{align:d},children:[{type:b,value:"Pas de relivraison pour mise à jour"}]},{type:a,tag:o,props:{align:d},children:[{type:b,value:"Peut utiliser des technos différentes"}]},{type:a,tag:o,props:{align:d},children:[{type:b,value:"Microservices autonomes"}]},{type:a,tag:o,props:{align:d},children:[{type:b,value:"Confort utilisateur"}]}]}]},{type:a,tag:"tbody",props:{},children:[{type:a,tag:p,props:{},children:[{type:a,tag:e,props:{align:d},children:[{type:b,value:"widgets\u002Fwebcomponent"}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:S}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]}]},{type:a,tag:p,props:{},children:[{type:a,tag:e,props:{align:d},children:[{type:b,value:"zuul filter"}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]}]},{type:a,tag:p,props:{},children:[{type:a,tag:e,props:{align:d},children:[{type:b,value:q}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]}]},{type:a,tag:p,props:{},children:[{type:a,tag:e,props:{align:d},children:[{type:b,value:"Construction via base de données"}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:S}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:"partiel"}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]}]},{type:a,tag:p,props:{},children:[{type:a,tag:e,props:{align:d},children:[{type:b,value:"Duplication html\u002Fjs\u002Fjsp"}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]}]},{type:a,tag:p,props:{},children:[{type:a,tag:e,props:{align:d},children:[{type:b,value:"Partage de jsp"}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"(1) on pourrait imager un menu statique qui présenterait un aspect \"basique\" et qui serait ensuite modifié en js si l'utilisateur est connecté et si certains items devait être rajouté au menu. Cela laisserait cependant un désagréable effet de clignotement pour l'utilisateur final"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si cela vous intéresse, voici le code sous github : "},{type:a,tag:h,props:{href:v,rel:[i]},children:[{type:b,value:"microservices-sandbox"}]}]}],toc:{title:s,searchDepth:k,depth:k,links:[{id:y,depth:k,text:z},{id:C,depth:k,text:D},{id:E,depth:k,text:F},{id:G,depth:k,text:H},{id:K,depth:k,text:L},{id:M,depth:k,text:N},{id:O,depth:k,text:P},{id:Q,depth:k,text:R}]}},_type:"markdown",_id:"content:articles:2015:04:13:micro-services-la-composition-de-page-avec-zuul-et-sitemesh.md",_source:"content",_file:"articles\u002F2015\u002F04\u002F13\u002Fmicro-services-la-composition-de-page-avec-zuul-et-sitemesh.md",_extension:"md"}},prerenderedAt:1676842541816}}("element","text","p",null,"td","li","oui","a","nofollow","non",2,"ul","img","h2","th","tr","sitemesh",false,"","http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fzuul\u002F","Micro-services : routing avec Zuul","https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Fmicroservice-sandbox\u002Ftree\u002Fmaster\u002Fcompose","https:\u002F\u002Ftiles.apache.org\u002F","tiles","dupliquer-vos-éléments-communs-dans-chaque-application","Dupliquer vos éléments communs dans chaque application.","vous pouvez utiliser des technologies de templating différentes dans chaque application (jinja en python, jsp en java etc...)","vos applications sont vraiment autonomes et peuvent être utilisées toute seules","reconstruire-le-code-du-footer-et-du-menu-dynamiquement-via-des-méta-données-dans-une-base-de-données","Reconstruire le code du footer et du menu dynamiquement via des méta données dans une base de données","partager-une-jsp-commune-dans-un-jar-pour-pouvoir-linclure-dans-chaque-application-web","Partager une jsp commune dans un jar pour pouvoir l'inclure dans chaque application web","utilisons-sitemesh-alors","Utilisons sitemesh alors","hello world","added by sitemesh","autre-pistes-non-explorées-encore-les-filtres-zuul","Autre pistes non explorées encore : les filtres Zuul","et-un-widget-js","Et un widget js ?","et-les-webcomponents","Et les webcomponents ?","tableau-récapitulatif","Tableau récapitulatif","non (1)"))