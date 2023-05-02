export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P){return {data:{"/articles/2020/03/02/integration-avec-hull-et-considerations-pratiques-sur-lusage-dapis":{_path:"\u002Farticles\u002F2020\u002F03\u002F02\u002Fintegration-avec-hull-et-considerations-pratiques-sur-lusage-dapis",_dir:"02",_draft:o,_partial:o,_locale:h,_empty:o,title:"Intégration avec Hull et considérations pratiques sur l'usage d'APIs",description:"Je vous propose aujourd'hui de découvrir [Hull](https:\u002F\u002Fwww.hull.io\u002F). que nous utilisons depuis quelques mois chez Malt.   Hull fait partie des outil...",id:"1471",date:"2020-03-02",categories:["waza"],tags:["api","data","datamarketing","hull"],img:"automate.png",cover:"cover8.jpg",readingTime:{text:"13 min read",minutes:12.015,time:720900,words:2403},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:"Je vous propose aujourd'hui de découvrir "},{type:a,tag:f,props:{href:"https:\u002F\u002Fwww.hull.io\u002F",rel:[g]},children:[{type:b,value:"Hull"}]},{type:b,value:". que nous utilisons depuis quelques mois chez Malt."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nHull fait partie des outils de \""},{type:a,tag:f,props:{href:"https:\u002F\u002Fwww.definitions-marketing.com\u002Fdefinition\u002Fdata-marketing\u002F",rel:[g]},children:[{type:b,value:"Data Marketing"}]},{type:b,value:"\" (marketing dirigé par la donnée). C'est un outil qui permet d'unifier des données de plusieurs sources (analytics, crm) et\u002Fou de les dispatcher vers plusieurs sources (mailchimp, intercom) tout en gardant la main sur la donnée, sa segmentation (audiences), son cycle de vie."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme je le disais plus haut, l'outil permet donc, par exemple, de créer des audiences à un seul endroit et de les pousser dans les outils d'envoi d'email, sms etc… pour ne pas reparamétrer cela dans chaque outil. C'est aussi une sorte de Hub de consolidation de données qui enrichit l'information dans plusieurs outils et la redispatch."}]},{type:a,tag:c,props:{},children:[{type:a,tag:n,props:{alt:h,src:"\u002Fimages\u002Fautomate.png"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"image tiré de leur site qui illustre l'enrichissement par plusieurs sources"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je ne vais pas trop m'étendre sur le fonctionnel, ici je vous propose plutôt de parler des problématiques d'intégration."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nC'est un billet un peu \"niche\" qui intéressera moins de monde mais je trouve les problématiques assez intéressantes en terme d'API et je me trouve moi même assez souvent en manque de sources quand je cherche à utiliser ce type d'outils. Même si vous ne connaissez pas ou ne comptez pas utiliser Hull, les réflexions sur l'ingestion et l'export de données vous intéresseront peut-être."}]},{type:a,tag:"disclaimer",props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Vous allez me dire que certains produits n'ont pas besoin qu'on leur dédie des billets de blog parce que leur doc est très bonne. Et c'est pas faux. Hull a une "},{type:a,tag:f,props:{href:"https:\u002F\u002Fwww.hull.io\u002Fdocs\u002F",rel:[g]},children:[{type:b,value:"documentation en ligne"}]},{type:b,value:" mais c'est un produit jeune et la documentation n'est pas toujours exacte ou exhaustive. Cependant elle s'améliore."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Maintenant que les présentations sont faites, parlons de la première étape : l'injection de données."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour injecter de la donnée nous avons plusieurs possibilités :"}]},{type:a,tag:j,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"l'API Firehose"}]},{type:a,tag:e,props:{},children:[{type:b,value:"un Webhook"}]},{type:a,tag:e,props:{},children:[{type:b,value:"Un connecteur SQL"}]}]},{type:a,tag:l,props:{id:t},children:[{type:b,value:u}]},{type:a,tag:c,props:{},children:[{type:b,value:"L'api est documenté ici : "},{type:a,tag:f,props:{href:p,rel:[g]},children:[{type:b,value:p}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Au moment où j'écris cette documentation elle a légèrement changé depuis le moment de notre intégration."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nNotamment cette api devait auparavant nécessiter que l'on créé un connecteur de type "},{type:a,tag:i,props:{},children:[{type:b,value:"incoming Webhook"}]},{type:b,value:" pour l'utiliser. Désormais on peut l'utiliser sur une url globale "},{type:a,tag:i,props:{},children:[{type:b,value:"firehose.hullapp.io"}]},{type:b,value:", même s'il faut toujours créer un connecteur pour avoir des credentials."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nCe n'est pas notre cas, nous sommes restés sur l'ancienne url et il est possible que cela explique de très nombreuses erreurs 500, 502, 504 que nous avons."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nJustement, faisons une digression sur le sujet."}]},{type:a,tag:"h3",props:{id:v},children:[{type:b,value:w}]},{type:a,tag:c,props:{},children:[{type:b,value:"Que ce soit Hull ou n'importe quel autre fournisseur, il faut partir du principe qu'une API externe n'est pas fiable. Cela peut être lié au réseau, ou à l'API elle même."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nSans parler de fiabilité, certaines API imposent un certain Rate Limiting (nombre d'appels max par période de temps)."},{type:a,tag:d,props:{},children:[]},{type:a,tag:"em",props:{},children:[{type:b,value:"A ce propos Hull n'impose pas de Rate limiting et gère au contraire celui des API externes au niveau de ces connecteurs. Très bon point."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme cela fait plusieurs fois que je parle de connecteur, je me permet d'en donner une définition très simple : un connecteur permet de déverser des données vers une destination ou d'aspirer des données depuis une source. Cela vous rappellera peut être des tas d'outils qui utilisent ces notions d'input\u002Foutput, comme Logstash par exemple. Sauf que les connecteurs Hull sont souvent fait pour aspirer\u002Fenvoyer des données vers des produits\u002FSAAS et non juste des composants techniques (bases de données)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Reprenons, même en évacuant cette notion de Rate limit, il reste la notion de fiabilité d'une API."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nAu tout début de notre intégration, nous avions le pattern suivant"}]},{type:a,tag:c,props:{},children:[{type:a,tag:n,props:{alt:h,src:"\u002Fimages\u002Fimage-3.png"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour résumer :"}]},{type:a,tag:j,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"lecture d'un event symbolisant un ordre de mise à jour de Hull"}]},{type:a,tag:e,props:{},children:[{type:b,value:"appel de l'API Firehose"}]},{type:a,tag:e,props:{},children:[{type:b,value:"En cas d'erreur, le message était réempilé en queue et relu plus tard"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Très bien, c'est résistant à l'erreur en théorie."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nMais cela peut avoir plusieurs défauts :"}]},{type:a,tag:j,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"on logge malgré tout des erreurs à chaque retry. Si l'API est capricieuse (c'est le cas de celle de Hull), c'est beaucoup de logs d'erreur \"attendus\""}]},{type:a,tag:e,props:{},children:[{type:b,value:"on induit une pression en plus sur une API déjà un peu malade, au risque de ne jamais lui permettre de s'en remettre."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nous avons fait une première action en changeant les choses comme cela :"}]},{type:a,tag:j,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:x}]},{type:a,tag:e,props:{},children:[{type:b,value:y}]},{type:a,tag:e,props:{},children:[{type:b,value:"en cas d'erreur, retry "},{type:a,tag:i,props:{},children:[{type:b,value:"silencieux"}]},{type:b,value:" avec un "},{type:a,tag:i,props:{},children:[{type:b,value:"délai"}]}]},{type:a,tag:e,props:{},children:[{type:b,value:z}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"C'est mieux mais dans certains cas, ça nous laissait malgré tout de nombreux messages en "},{type:a,tag:f,props:{href:"https:\u002F\u002Fwww.rabbitmq.com\u002Fdlx.html",rel:[g]},children:[{type:b,value:"deadletter"}]},{type:b,value:" queue sur RabbitMQ et cela, sans limite de temps."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nAprès 10 tentatives on reste dans la situation où l'on loggue beaucoup d'erreurs."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\n(et donc on casse nos quotas de logs sur Sentry, snif…)"},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nDe plus la deadletter de Rabbit n'est pas requêtable. On ne peut pas non plus filtrer les messages par queue d'origine etc… Donc cela reste assez pauvre si on veut contrôler ce qu'il y a dedans."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans le cadre de ce projet nous avons développé une nouvelle solution avec une mise en quarantaine des messages dans une base de données :"}]},{type:a,tag:j,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:x}]},{type:a,tag:e,props:{},children:[{type:b,value:y}]},{type:a,tag:e,props:{},children:[{type:b,value:"en cas d'erreur, retry silencieux avec un délai"}]},{type:a,tag:e,props:{},children:[{type:b,value:z}]},{type:a,tag:e,props:{},children:[{type:a,tag:i,props:{},children:[{type:b,value:"mise en quarantaine au bout de 11 tentatives"}]},{type:b,value:" ."}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:n,props:{alt:h,src:"\u002Fimages\u002Fimage-5.png"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il y a clairement du mieux, depuis cette quarantaine on peut filtrer les messages par queue d'origine, voir les messages en questions, rejouer les events selon un filtre etc…"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Malgré tout, nous avions un autre point."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nEn effet je parlais d'event tout à l'heure. Un event est de la forme : ProfileUpdated, AccountUpdated, EmailUpdated, ConversationStarted etc… Il existe de très nombreux events et on veut mettre à jour Hull sur beaucoup d'event car cela peut changer des informations ou des statistiques importantes (taux de contact par exemple)."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nUne action peut entrainer plusieurs events de nature différente."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nAutrement dit, pour un même user, il est possible d'appeler Hull "},{type:a,tag:i,props:{},children:[{type:b,value:"plusieurs fois"}]},{type:b,value:" avec des données très proches dans des "},{type:a,tag:i,props:{},children:[{type:b,value:"laps de temps assez courts"}]},{type:b,value:q}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il se trouve que Nicolas, Lead developper chez Malt, travaillait lui aussi sur une API partenaire à ce moment là : Oracle Netsuite. Si Hull est parfois capricieux, ça reste une API qui fonctionne. Netsuite en comparaison est une horreur à plus d'un titre."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nEt comme cette notion d'appel à des API partenaires est un sujet qui revient souvent il a développé une queue de commande qui permet entre autre :"}]},{type:a,tag:j,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"de prendre en compte les rates limites des API (inutile pour mon cas)"}]},{type:a,tag:e,props:{},children:[{type:b,value:"de dédoublonner les appels"}]},{type:a,tag:e,props:{},children:[{type:b,value:"de garder des séquences de commandes à faire dans un ordre"}]},{type:a,tag:e,props:{},children:[{type:b,value:"de gérer les retry"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"C'est pas le sujet de l'article donc Nico développera sans doute dans un autre billet à part car c'est devenue une brique très pratique chez nous."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nJe l'ai réutilisé sur Hull et j'ai donc désormais également un outil qui permet de temporiser mes envois sur Hull et qui dédoublonne par tranche de temps (configurable) pour éviter d'envoyer trop de commandes à Hull."}]},{type:a,tag:l,props:{id:A},children:[{type:b,value:B}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je ne vais pas revenir sur l'usage de l'API Firehose elle-même qui est pas "},{type:a,tag:f,props:{href:p,rel:[g]},children:[{type:b,value:"trop mal documentée"}]},{type:b,value:q},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nJ'ai cependant rencontré des difficultés sur les tokens JWT qui doivent être inclus dans ces appels."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nUn appel Firehose doit contenir plusieurs blocs d'informations. Chaque bloc d'information contient un header et ce header contient un token JWT."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nAu moment de l'intégration, la doc qui décrivait ce token était relativement petite. On peut la retrouver "},{type:a,tag:f,props:{href:"https:\u002F\u002Fwww.hull.io\u002Fdocs\u002Freference\u002Fidentity_resolution\u002F",rel:[g]},children:[{type:b,value:C}]},{type:b,value:", elle s'est améliorée."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nCe qu'elle ne décrit pas bien, c'est la structure d'un token d'exemple. Je vous propose donc de regarder à quoi cela ressemble :"}]},{type:a,tag:m,props:{code:D,meta:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:m,props:{__ignoreMap:h},children:[{type:b,value:D}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"io.hull.asUser permet de définir l'identité à utiliser pour résoudre l'utilisateur chez Hull. Il permet notamment d'utiliser un external_id qui peut être par exemple l'id dans notre système."}]},{type:a,tag:c,props:{},children:[{type:b,value:"On peut aussi faire la liaison entre un user et sa société, concept existant chez nous, en ajoutant un attribut io.hull.asAccount et qui définit l'ID de la société."}]},{type:a,tag:c,props:{},children:[{type:b,value:"L'objet déclaré plus haut est facile à construire à partir d'une Map."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par exemple"}]},{type:a,tag:m,props:{code:E,language:F,meta:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:m,props:{__ignoreMap:h},children:[{type:b,value:E}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ensuite il faut signer cet objet avec JWT. En Java cela donne :"}]},{type:a,tag:m,props:{code:G,language:F,meta:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:m,props:{__ignoreMap:h},children:[{type:b,value:G}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Petit point d'attention sur le claims.toJson() qui utilise donc une serialisation JSON de votre Map."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nEt donc pour les sous objets io.hull.asUser et io.hull.asAccount il faut bien penser à utiliser un JSONObject, sinon la sérialisation va donner"},{type:a,tag:d,props:{},children:[]},{type:b,value:"\n\"io.hull.asUser\" : \"{\\\"external_id\\\" : \\\"maltUserID\\\"}\" et non pas \"io.hull.asUser\" : {\"external_id\" : \"maltUserID\"}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Oui c'est bête mais j'ai fait l'erreur au début…"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Est-ce que ça a marché ? Pour le savoir, il suffit d'aller sur l'interface des logs de Hull :"}]},{type:a,tag:c,props:{},children:[{type:a,tag:n,props:{alt:h,src:"\u002Fimages\u002Fimage-1.png"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"L'interface marche relativement bien. C'est du Kibana derrière et il est simple de filtrer par champ, tranche de date etc…"},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nLe seul petit piège, c'est que Hull gère ça sans doute en interne sous forme de queue de message. De votre côté vous avez simplement reçu un code d'acquittement 204 (reçu mais sera traité plus tard)."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nEt cette attente peut aller jusque 5\u002F10 minutes. Donc le feedback est assez long entre votre envoi et le résultat."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nCe n'est clairement pas un souci dans le cas nominal parce que le choix est totalement logique d'une part, vu le volume Hull a pris une bonne décision sans doute, et d'autre part vous n'êtes pas à la minute pour un update dans la majorité du temps."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nMais j'avoue qu'en développement c'est un peu frustrant, notamment car l'appel de l'API ne fait aucun contrôle de surface donc pendant la phase d'intégration il arrive souvent de devoir attendre plusieurs minutes juste pour voir que votre format comporte une erreur (dans le token JWT la très grande majorité du temps)."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nJ'avoue qu'en dev j'aurais aimé un mode dégradé avec contrôle immédiat, mode à interdire en production bien sûr."}]},{type:a,tag:l,props:{id:H},children:[{type:b,value:I}]},{type:a,tag:c,props:{},children:[{type:b,value:"La seconde solution proposée repose sur un Webhook côté Hull que l'on retrouve documenté "},{type:a,tag:f,props:{href:"https:\u002F\u002Fwww.hull.io\u002Fdocs\u002Fconnectors\u002Fincoming-webhooks\u002F#incoming-webhooks",rel:[g]},children:[{type:b,value:C}]},{type:b,value:q},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nSur le principe j'ai rapidement choisi de ne pas utiliser cette solution."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nL'idée étant d'envoyer n'importe quel objet JSON et d'utiliser ensuite un éditeur de texte depuis l'interface d'admin de Hull pour traiter ce JSON et appeler directement l'API de Hull depuis cet éditeur en ligne."}]},{type:a,tag:c,props:{},children:[{type:a,tag:n,props:{alt:"Getting Started Step 3",src:"\u002Fimages\u002Fdashboard.png"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"J'avoue qu'avoir du code non versionné de mon côté, non testé et à synchroniser en même temps qu'un changement d'API, était plutôt rédhibitoire. Même si je comprends l'idée, cela permet à des utilisateurs \"non tech\" de votre équipe marketing de pouvoir hacker directement de leur côté. En pratique, je ne sais pas si c'est vraiment un cas d'usage fréquent d'avoir des personnes de l'équipe marketing qui font du javascript sur ce type d'interface."}]},{type:a,tag:l,props:{id:J},children:[{type:b,value:K}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cette solution est pour moi la plus séduisante sur le papier et je pense que nous l'utiliserons dans l'avenir. Il s'agit d'un connecteur direct sur une source de données."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nL'idée étant de créer une vue sur votre source de données et dès qu'elle change, les modifications sont reportées chez Hull. La seule chose à maintenir est donc une vue SQL par exemple sur votre base analytique."},{type:a,tag:d,props:{},children:[]},{type:a,tag:i,props:{},children:[{type:b,value:"Malheureusement"}]},{type:b,value:" nous ne l'avons pas testé car pour l'instant ce connecteur n'accepte pas encore les Datasources "},{type:a,tag:i,props:{},children:[{type:b,value:"BigQuery"}]},{type:b,value:" : "},{type:a,tag:f,props:{href:L,rel:[g]},children:[{type:b,value:L}]}]},{type:a,tag:l,props:{id:M},children:[{type:b,value:N}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sur le papier Hull est effectivement très pratique plutôt que de devoir maintenir des intégrations sur tous vos outils tierces, Intercom, Mailchimp, Salesforce, Customer.io pour ne citer que ceux la par exemple."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nEn effet Hull ayant des connecteurs pour ces outils, ce n'est plus à l'application de gérer ces données vers ces outils."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nEn pratique c'est globalement vrai, sauf… pour la suppression."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Déjà la suppression de données dans Hull est peu triviale dirons-nous."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nUn enregistrement dans Hull est identifié par un ID qui ne correspond pas à votre ID logique. En effet vous pouvez préciser un ID logique (external_id) correspondant aux ID utilisé dans votre application mais Hull a ses propres ID. Or l'API de DELETE ne fonctionne qu'à partir des ID Hull. Dommage de ne pas avoir proposé de DELETE qui fasse un lookup avec un external_id."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nD'ailleurs le DELETE n'est pas vraiment documenté pour les users : "},{type:a,tag:f,props:{href:"https:\u002F\u002Fwww.hull.io\u002Fdocs\u002Freference\u002Fhttp%5C_api\u002F",rel:[g]},children:[{type:b,value:"https:\u002F\u002Fwww.hull.io\u002Fdocs\u002Freference\u002Fhttp\\_api\u002F"}]},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nUne fois qu'on a cependant compris que l'on peut supprimer un user par son vrai ID, il faut le trouver."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nIl faut donc"}]},{type:a,tag:j,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"utiliser "},{type:a,tag:f,props:{href:"https:\u002F\u002Fwww.hull.io\u002Fdocs\u002Freference\u002Fhttp_api\u002F#search-for-users",rel:[g]},children:[{type:b,value:"l'API de search"}]},{type:b,value:" par son external_id. Vous noterez que cela ressemble furieusement à une requête elasticsearch"}]},{type:a,tag:e,props:{},children:[{type:b,value:"lire l'ID interne dans le résultat"}]},{type:a,tag:e,props:{},children:[{type:b,value:"appeler l'API de DELETE qui n'est pas documenté sur cet ID"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je ne cache pas, ça pique un peu."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais surtout, le DELETE n'est pas propagé vers les autres outils. Et c'est la le plus gros souci."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nUne solution un peu \"bof\" c'est de ne pas faire un DELETE mais de faire un UPDATE et de mettre à null tous les champs, ce qui rend la donnée totalement inutile."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nEn pratique, ca ne semble pas bien marcher non plus. Chaque outil ne supporte pas forcément de mettre à null l'ensemble des champs. De plus, Hull fonctionne aussi dans l'autre sens avec ces connecteurs."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nAutrement dit le connecteur vers Intercom, il met aussi à jour la donnée vers Hull. Donc on peut nullifier dans Hull puis récupérer la donnée depuis intercom. Du coup on ne s'en sort jamais."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour l'instant nous avons donc du créer des intégrations avec les autres outils (intercom etc…) pour supprimer nous même la donnée. Ce qui est quand même un gros défaut pour la solution et je ne suis pas certain de la fiabilité. Il est bien évident que nous travaillons toujours là dessus."}]},{type:a,tag:l,props:{id:O},children:[{type:b,value:P}]},{type:a,tag:c,props:{},children:[{type:b,value:"C'est un autre atout de Hull. Hull est aussi rempli d'informations utiles car il permet par exemple de savoir qu'il y a eu des contacts sur intercom, il peut indiquer les emails envoyés par customer.io ou avoir été enrichi par Clearbit etc…"},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nBref, de nombreuses choses que l'on veut récupérer ensuite chez soi."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nPour l'export, nous avons donc mis en place un "},{type:a,tag:f,props:{href:"https:\u002F\u002Fwww.hull.io\u002Fdocs\u002Fconnectors\u002Foutgoing-webhooks\u002F",rel:[g]},children:[{type:b,value:"Outgoing Webhook"}]},{type:b,value:" vers notre plateforme Data."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nUne fois mis en place, ce webhook permet de faire du BigQuery streaming et d'insérer la data directement depuis un code python deployé en Serverless dans Google Cloud Functions."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nJe ne détaille pas trop car cette architecture de plateforme data serait sans doute intéressante à décrire dans un autre billet."}]},{type:a,tag:c,props:{},children:[{type:b,value:"A savoir cependant sur ce webhook, plusieurs choses ne sont pas documentées :"}]},{type:a,tag:j,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"La doc ne précise pas comment sécuriser le webhook. Le support indique cependant qu'il faut paramétrer le webhook en https avec un paramètre GET secret que l'on lit dans le code de réception"}]},{type:a,tag:e,props:{},children:[{type:b,value:"la doc ne précise pas si Hull gère bien les cas où notre API échoue (et oui, nous aussi on peut échouer). A priori le support nous indique qu'il y a bien des retry mais nous n'avons aucune info, aucune stats, aucun monitoring donc cela reste un peu mystérieux."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"C'est tout pour ce billet. Au delà de l'outil, j'espère qu'il a pu être intéressant sur les approches employés ou pour avoir un aperçu de notre plateforme Data."}]},{type:a,tag:c,props:{},children:[{type:b,value:"A bientôt"}]}],toc:{title:h,searchDepth:k,depth:k,links:[{id:t,depth:k,text:u,children:[{id:v,depth:3,text:w}]},{id:A,depth:k,text:B},{id:H,depth:k,text:I},{id:J,depth:k,text:K},{id:M,depth:k,text:N},{id:O,depth:k,text:P}]}},_type:"markdown",_id:"content:articles:2020:03:02:integration-avec-hull-et-considerations-pratiques-sur-lusage-dapis.md",_source:"content",_file:"articles\u002F2020\u002F03\u002F02\u002Fintegration-avec-hull-et-considerations-pratiques-sur-lusage-dapis.md",_extension:"md"}},prerenderedAt:1683010267656}}("element","text","p","br","li","a","nofollow","","strong","ul",2,"h2","code","img",false,"https:\u002F\u002Fwww.hull.io\u002Fdocs\u002Fdata_lifecycle\u002Fingest\u002F#firehose-api",".",null,"pre","utilisation-de-lapi-firehose","Utilisation de l'API Firehose","comment-gérer-la-fiabilité-ou-absence-de-fiabilité-dune-api-externe","Comment gérer la fiabilité (ou absence de fiabilité) d'une API externe","lecture d'un event","appel de l'API","log d'erreur uniquement au bout de 10 tentatives","gestion-de-tokens-jwt","Gestion de tokens JWT","ici","Hull-Access-Token : { \"io.hull.active\" : true, \"io.hull.create\" : true, \"io.hull.asUser\" : {\"external\\_id\" : \"maltUserID\"}, \"io.hull.subjectType\" : \"user\", \"io.hull.asAccount\" : {\"external\\_id\" : \"maltCompanyID\"}}\n","Map mapOfClaims = new HashMap\u003C\u003E(Map.of(\n    \"io.hull.active\", true,\n    \"io.hull.create\", true,\n...\n));\n","java","public static String sign(String secret, String issuer, Map mapOfClaims) throws JoseException {\n   JsonWebSignature jwtSigner = new JsonWebSignature();\n   jwtSigner.setKey(new AesKey(secret.getBytes()));\njwtSigner.setAlgorithmHeaderValue(AlgorithmIdentifiers.HMAC\\_SHA256);\n   JwtClaims claims = new JwtClaims();\n   claims.setIssuer(issuer);\n   claims.setIssuedAtToNow();\n   claims.setExpirationTimeMinutesInTheFuture(20);\n   mapOfClaims.forEach(claims::setClaim);\n   jwtSigner.setPayload(claims.toJson());\n   return jwtSigner.getCompactSerialization();\n}\n","utilisation-dun-incoming-webhook","Utilisation d'un Incoming Webhook","utilisation-dun-connecteur-dimport","Utilisation d'un connecteur d'import","https:\u002F\u002Fwww.hull.io\u002Fdocs\u002Fconnectors\u002Fsql-importer\u002F","un-défaut-majeur","Un défaut majeur","lexport-de-données","L'export de données"))