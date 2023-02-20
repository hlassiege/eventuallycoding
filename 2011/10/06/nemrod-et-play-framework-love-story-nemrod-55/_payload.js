export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P){return {data:{"/articles/2011/10/06/nemrod-et-play-framework-love-story-nemrod-55":{_path:"\u002Farticles\u002F2011\u002F10\u002F06\u002Fnemrod-et-play-framework-love-story-nemrod-55",_dir:"06",_draft:i,_partial:i,_locale:j,_empty:i,title:"Nemrod et Play Framework : love story (Nemrod 5\u002F5)",description:"[![](\u002Fimages\u002Flogo-web.png \"logo-web\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F10\u002Flogo-web.png) J’ai découvert Play Framework en version 1...",id:"417",date:"2011-10-06",categories:["waza"],tags:["localizeyourapps","nemrod","play"],img:"logo-web.png",cover:"cover5.jpg",readingTime:{text:"7 min read",minutes:6.985,time:419100,words:1397},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F10\u002Flogo-web.png",rel:[g]},children:[{type:a,tag:"img",props:{alt:j,src:"\u002Fimages\u002Flogo-web.png",title:"logo-web"},children:[]}]},{type:b,value:" J’ai découvert Play Framework en version 1.0 (octobre 2009 si j’en crois la release notes) et j’avais tout de suite adhéré au concept. Sa productivité m’a tout de suite rappelé mes lointaines années où je faisais du PHP avec les avantages du Java en plus. Mais ça n’était encore qu’une version 1.0, pas très reconnu et avec de belles inconnues concernant son utilisation sur une application conséquente."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le temps a passé, "},{type:a,tag:f,props:{href:"http:\u002F\u002Fwww.playframework.org\u002F",rel:[g]},children:[{type:b,value:"Play Framework"}]},{type:b,value:" a 2 ans d’existence, sa stack s’est étoffé de pas mal de modules et on commence à trouver des applications qui l’utilisent."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bref, si vous vous rappelez ce qui avait été dit dans les chapitres précédents, l’objectif était de développer vite, de voir rapidement une idée se matérialiser sur une page web. Il était hors de question de créer 5 fichiers java, 3 fichiers xml et je ne sais quoi encore pour avoir un résultat. On perd vite de vue l’objectif quand on met longtemps à le réaliser."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Allez, maintenant dans le détail, voici ce qui nous a plus et moins plu sur Play Framework. Attention, ceci n’est pas un tutorial d’utilisation de Play Framework mais uniquement un retour d’expérience."}]},{type:a,tag:k,props:{id:l},children:[{type:b,value:m}]},{type:a,tag:d,props:{id:n},children:[{type:b,value:o}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sans doute l’un des points les plus importants. Je ne vais pas le détailler c’est sans doute celui que tout le monde connaît. Une modif dans le code, pas de relance de serveur, un F5 sur la page et tout est recompilé. Encore plus puissant que PHP si vous avez activé le mode update de JPA puisque vous n’avez même pas à faire vos ALTER en base de données. Au pire, même si vous relancez le serveur si par exemple la sémantique de vos données à changé, on est loin du temps de redémarrage d’un serveur “classique”, 10 secondes sur mon poste."}]},{type:a,tag:d,props:{id:p},children:[{type:b,value:q}]},{type:a,tag:c,props:{},children:[{type:b,value:"Play Framework utilise (certains disent “abuse”) de la programmation par aspect. Pour les actions écrites dans les contrôleurs, vous pouvez donc définir des comportements via les intercepteurs : @After, @Before, @Catch, @Finally Et vous pouvez écrire vos propres intercepteurs avec @With. Tout le module de sécurité de "},{type:a,tag:f,props:{href:"http:\u002F\u002Fwww.localizeyourapps.com",rel:[g]},children:[{type:b,value:"Localizeyourapps"}]},{type:b,value:" utilise une extension du module Secure qui fonctionne sur ce principe."}]},{type:a,tag:d,props:{id:r},children:[{type:b,value:s}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous avez déjà fait du Struts ? Vous vous rappelez du fichier qui définit toute la navigation et des ActionForward ? La même chose avec Play Framework : "},{type:a,tag:t,props:{},children:[{type:b,value:"public static void show(Long id) { Client client = Client.findById(id); render(client); }"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:t,props:{},children:[{type:b,value:"public static void create(String name) { Client client = new Client(name); client.save(); \u002F\u002F On redirige vers la page qui montre le client juste en appelant la méthode du contrôleur ! show(client.id); }"}]}]},{type:a,tag:d,props:{id:u},children:[{type:b,value:v}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par défaut l’API est déjà très sympa pour valider les formulaires. Vous rajoutez à cela les validateurs custom et le module Jquery Validation et vous avez un framework très puissant pour la gestion de vos formulaires."}]},{type:a,tag:d,props:{id:w},children:[{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:"Lancer un job toutes les heures, facile, une petite annotation et le tour est joué :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"@Every(\"1h\")"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les jobs sont utilisés dans Nemrod pour la purge des fichiers d’import et le chargement d’un jeu de données initial à l’import."}]},{type:a,tag:d,props:{id:y},children:[{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je parlais des jobs Quartz juste au dessus. Mais finalement l’énorme force de Play Framework c’est l’intégration des outils. Que ce soit Quartz ou JPA. tout est intégré avec une configuration minimale et pas de prise de tête. Pour peu que vous vouliez utiliser d’autres frameworks comme CAMEL, AMQP etc..., il y a des modules pour ça."}]},{type:a,tag:d,props:{id:A},children:[{type:b,value:B}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous savez combien Nemrod utilise de mémoire sur l’instance live ? 64Mo de ram ! Et il y a clairement de la marge, aucun tuning n’a été fait pour l’instant. Vous en aviez marre des 1Go de lancement de vos serveurs d’applis traditionnels, Play est fait pour vous."}]},{type:a,tag:d,props:{id:C},children:[{type:b,value:D}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nemrod est déployé sur playapps. Et pour cela, on utilise un module Playapps qui permet de réaliser l’install en moins de 5 minutes. D’ailleurs je compte proposer quelques patchs pour l’utilisation du module en mode non interactif histoire de pouvoir l’automatiser sur Jenkins. Pour info, si vous êtes sur Stax, Cloudbees ou Heroku, il y a aussi des modules pour vous."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bon, après je ne vais pas non plus m’étendre mais l’architecture en général d’une appli Play a vraiment de quoi plaire, du Stateless, des url faciles à réécrire etc..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bon, mais si voyait maintenant les points un peu moins bons"}]},{type:a,tag:k,props:{id:E},children:[{type:b,value:F}]},{type:a,tag:d,props:{id:G},children:[{type:b,value:H}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je vais peut être surprendre quelques personnes mais oui, les tests nous ont posé problème avec Play. Déjà pour utiliser play auto-test, il faut que chaque test étendent UnitTest. Sauf que étendre UnitTest ca implique un démarrage du serveur Play pour chaque test. Et ça, c’est plutôt coûteux. Grosso modo nous avons environ 2s par classe de tests. Multipliez ça par une 30aine de tests et vous obtenez rapidement un temps qui frôle la minute. Imaginez ça sur des suites de tests plus importantes, ça peut être assez gênant."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Toujours sur les tests, il n’est pas si simple de tester un contrôleur."}]},{type:a,tag:I,props:{},children:[{type:a,tag:J,props:{},children:[{type:b,value:"Soit on fait du FunctionalTest mais il est difficile d'enchaîner plusieurs actions après une page authentifié. J’ai pas trouvé d’exemples là-dessus et je n’ai pas réussi pour l’instant."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"C’est dommage, sachant que chaque action correspondant à une méthode d’un contrôleur, de ne pas pouvoir tester un contrôleur de façon plus simple."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il y a un module qui tente d’apporter des solutions : "},{type:a,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002FGuyMograbi\u002Fplay%5C_test%5C_module",rel:[g]},children:[{type:b,value:"https:\u002F\u002Fgithub.com\u002FGuyMograbi\u002Fplay\\_test\\_module"}]},{type:b,value:" Mais devoir créer un contrôleur de test par contrôleur et surcharger chaque méthode ne me plaît pas des masses."}]},{type:a,tag:I,props:{},children:[{type:a,tag:J,props:{},children:[{type:b,value:"Soit on fait du selenium. Mais je ne suis pas un grand fan du selenium à outrance. C’est souvent lourd à maintenir, surtout quand l’appli évolue vite côté IHM comme c’est le cas de Nemrod. Et je n’ai pas encore vu comment ajouter ces propres librairies de méthodes dans les tags selenium qui sont compris par Play. A la limite ça permettrait de factoriser quelques actions."}]}]},{type:a,tag:d,props:{id:K},children:[{type:b,value:L}]},{type:a,tag:c,props:{},children:[{type:b,value:"Autre point qui me chagrine c’est le build. Ok je suis super habitué à Maven et j’aime bien pouvoir choisir les plugins que j'exécute en fonction des profiles. J’aime bien séparer mes tests unitaires de mes tests d’intégration ou de mes tests de performance. La c’est plus dur. J’ai un goal auto-test pour lancer tout les types de tests sans distinctions. Si je déclare un plugin cobertura il s’execute tout le temps, même quand je fais tourner le site en DEV. Quand je déclare une dépendance elle est toujours incluse, il n’y a pas de notions de scope de test par exemple. Bref, il manque un peu de maturité et sans doute quelques modules pour avoir plus de souplesse sur le build."}]},{type:a,tag:d,props:{id:M},children:[{type:b,value:N}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sur le principe, les templates dans Play sont vraiment sympa. Les tags sont facile à créer, il y a pas de cycle de vie méga complexe à comprendre pour créer une page etc... Mais en pratique, il y a quand même des petits trucs rapidement fatiguants. Premièrement la courbe d’apprentissage est relativement élevé. Heureusement qu’ils ont rajouté une cheatsheet récemment parce que sinon c’est pas inné de connaître tout les signes cryptiques utilisable dans un template. Mais bon, on va dire que c’est un mauvais moment à passer. Par contre le fait de ne pas avoir d’auto complétion ou de vérification syntaxique dans mon IDE ça c’est dur. Même une fois qu’on commence à comprendre les templates on n’est jamais à l’abri d’une faute découverte à l'exécution. Sur ce sujet, il semble que Play 2.0 va bientôt intégrer Japid et que ce dernier peut être utilisé avec un plugin Eclipse. Ok, ça c’est une bonne chose. Même si la lecture de la doc du plugin Japid m’a un peu donné mal à la tête ^^ Vive les notations $ ~ { % ! Je prévois quand même d’y passer, ne serait-ce que pour les perfs qui sont annoncées bien meilleures qu’avec les templates Groovy."}]},{type:a,tag:d,props:{id:O},children:[{type:b,value:P}]},{type:a,tag:c,props:{},children:[{type:b,value:"Allez, soyons honnête, ça n’a rien à voir avec Play mais JPA commence à me sortir par les yeux. Ça fait quelques temps que j’utilise Hibernate et JPA maintenant et c’est vraiment “pourquoi faire simple quand on peut faire compliqué”. Malheureusement comme je souhaite que Nemrod soit multi base de données, c’est un passage obligé. Et donc mon seul reproche de Play sur ce coup là c’est que ce soit tellement simple d’utiliser JPA ^^ Ben oui, pour le coup comme c’est simple et que les modifs de schéma sont faites sans relancer le serveur ça en devient presque magique. Et puis un jour on se réveille avec 4000 requêtes joués par page, des transactions super longues qui bloquent la base et des performances en berne."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Au final, Play c’est quand même le productivity killer, le retour aux sources pour les développement web. Il manque quelques petits trucs et j’attends de découvrir la version 2.0 avec impatience pour voir l’évolution prise."}]}],toc:{title:j,searchDepth:h,depth:h,links:[{id:l,depth:h,text:m,children:[{id:n,depth:e,text:o},{id:p,depth:e,text:q},{id:r,depth:e,text:s},{id:u,depth:e,text:v},{id:w,depth:e,text:x},{id:y,depth:e,text:z},{id:A,depth:e,text:B},{id:C,depth:e,text:D}]},{id:E,depth:h,text:F,children:[{id:G,depth:e,text:H},{id:K,depth:e,text:L},{id:M,depth:e,text:N},{id:O,depth:e,text:P}]}]}},_type:"markdown",_id:"content:articles:2011:10:06:nemrod-et-play-framework-love-story-nemrod-55.md",_source:"content",_file:"articles\u002F2011\u002F10\u002F06\u002Fnemrod-et-play-framework-love-story-nemrod-55.md",_extension:"md"}},prerenderedAt:1676930268271}}("element","text","p","h3",3,"a","nofollow",2,false,"","h2","ce-quon-a-aimé","Ce qu'on a aimé","la-compilation-à-chaud","La compilation à chaud","les-intercepteurs","Les intercepteurs","les-redirections","Les redirections","code-inline","les-validateurs","Les validateurs","les-jobs","Les jobs","lintégration","L’intégration","lempreinte-mémoire","L’empreinte mémoire","le-déploiement-sur-playapps","Le déploiement sur playapps","ce-quon-a-moins-aimé","Ce qu'on a moins aimé","les-tests","Les tests","ul","li","le-build","Le build","les-templates","Les templates","jpa","JPA"))