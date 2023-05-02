export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_){return {data:{"/articles/2012/11/11/nosql-4-bases-a-la-loupe-24":{_path:"\u002Farticles\u002F2012\u002F11\u002F11\u002Fnosql-4-bases-a-la-loupe-24",_dir:"11",_draft:q,_partial:q,_locale:h,_empty:q,title:E,description:"[![](\u002Fimages\u002Fnosql-logo.gif \"nosql-logo\")](http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-14\u002Fnosql-logo\u002F)Vous vous rappelez du bouquin [7 d...",id:"666",date:"2012-11-11",categories:["waza"],tags:["lucene",r,s],img:"nosql-logo.gif",cover:"cover2.jpg",readingTime:{text:"10 min read",minutes:9.61,time:576600,words:1922},body:{type:"root",children:[{type:b,tag:c,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-14\u002Fnosql-logo\u002F",rel:[f]},children:[{type:b,tag:t,props:{alt:h,src:"\u002Fimages\u002Fnosql-logo.gif",title:"nosql-logo"},children:[]}]},{type:a,value:"Vous vous rappelez du bouquin "},{type:b,tag:e,props:{href:"http:\u002F\u002Fpragprog.com\u002Fbook\u002Frwdata\u002Fseven-databases-in-seven-weeks",rel:[f]},children:[{type:a,value:"7 databases in seven weeks"}]},{type:a,value:" ? Pour le coup j'ai eu l'occasion de réaliser une expérience un peu moins ambitieuse, seulement 4 bases de données. Et si je n'ai pas été aussi loin que le bouquin précédent je vous propose quand même un retour d'expérience sur :"}]},{type:b,tag:u,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:v}]},{type:b,tag:g,props:{},children:[{type:a,value:"Solr"}]},{type:b,tag:g,props:{},children:[{type:a,value:"Elastic Search"}]},{type:b,tag:g,props:{},children:[{type:a,value:w}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ce billet fait partie d'une série de plusieurs billets dont le premier est "},{type:b,tag:e,props:{href:F,rel:[f],title:G},children:[{type:a,value:"ici"}]},{type:a,value:". Et le sujet de celui-ci est MongoDb et Redis."}]},{type:b,tag:x,props:{id:s},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fredis.io\u002F",rel:[f]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"Note : Redis n'est pas disponible sur Windows du coup j'ai du prendre une version non officielle pour tester."}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"C'est la première base de données que j'ai testé sous les conseils de "},{type:b,tag:e,props:{href:"https:\u002F\u002Ffr.twitter.com\u002Fjblemee",rel:[f]},children:[{type:a,value:"Jean Baptiste Lemée"}]},{type:a,value:". Il s'agit avant tout d'un stockage "},{type:b,tag:d,props:{},children:[{type:a,value:"clé-valeur"}]},{type:a,value:" mais il permet aussi de manipuler des listes et des sets. On hésite parfois à la considérer comme une base de données et plus comme un cache."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Et pourtant c'est bien une base de données, les données sont persisté sur disque."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Sur le chapitre des fonctionnalités Redis, malgré le fait qu'il soit rangé dans la catégorie des bases clé valeurs, reste assez riche. On pourra gérer des transactions, enchaîner des commandes (pipeline), gérer des listes ou des sets. Sur le papier c'est donc pas mal : rapide, fonctionnellement plus riche que d'autres équivalents clé-valeur. Mais malgré tout on est quand même loin de la richesse fonctionnelle attendue, pas de recherche full text ou de géospatial et surtout une représentation des données qui va nous obliger à pas mal de gymnastique."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Avec ce mode de stockage, il faut être imaginatif et changer sa façon de concevoir ces modèles de données. Notamment il faut penser \"dénormalisation\"."}]},{type:b,tag:c,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Explication."}]},{type:a,value:" Redis est orienté clé valeur donc même si nous pouvons stocker notre document sous forme Json il nous sera alors impossible de requêter sur une de ces propriétés, ce n’est donc pas suffisant. Du coup, on va dénormaliser notre objet au maximum et stocker chaque propriété selon des conventions de nommage que nous allons nous fixer. Par exemple pour un objet Profile nous pourrions avoir les records suivants :"}]},{type:b,tag:c,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"\"id:1:login\" =\u003E \"loginDuPremierProfile\" \"login:loginDuPremierProfile\" =\u003E 1"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ces deux premiers records permettront de rechercher très rapidement o(1) un profile par son login ou bien de connaitre le login du profile d'id 1."}]},{type:b,tag:c,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"\"id:1:email\" =\u003E \""},{type:b,tag:e,props:{href:H},children:[{type:a,value:I}]},{type:a,value:"\" \"email:"},{type:b,tag:e,props:{href:H},children:[{type:a,value:I}]},{type:a,value:"\" =\u003E 1"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"même genre d'exemple avec l'email."}]},{type:b,tag:c,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"\"profile:1:object\" =\u003E représentation JSON de mon objet Profile"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Et enfin un dernier record permettant de stocker l'objet entier lorsqu'on veut le récupérer en une seule fois."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Un exemple avec redis-cli en ligne de commande :"}]},{type:b,tag:i,props:{code:J,meta:l},children:[{type:b,tag:m,props:{},children:[{type:b,tag:i,props:{__ignoreMap:h},children:[{type:a,value:J}]}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Une recherche par login va donc se faire en plusieurs requêtes :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"\"login:loginDuPremierProfile\" va nous renvoyer 1 \"profile:1:object\" va nous renvoyer l'objet sérialisé en json."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Je ne vais pas plus loin pour mon exemple mais vous pouvez trouver la liste des opérations possibles sur vos données ici : "},{type:b,tag:e,props:{href:K,rel:[f]},children:[{type:a,value:K}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Voyons les APIs"}]},{type:b,tag:k,props:{id:"jedis"},children:[{type:a,value:L}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ce fut a mon sens une erreur en testant Redis, j'ai utilisé "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fxetorthio\u002Fjedis",rel:[f]},children:[{type:a,value:L}]},{type:a,value:" comme client et je suis donc resté très proche du protocole. Sauf qu'il ne s'agit pas du protocole le plus simple."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Voyons par exemple le code pour le cas que j'ai décrit plus haut :"}]},{type:b,tag:i,props:{code:M,meta:l},children:[{type:b,tag:m,props:{},children:[{type:b,tag:i,props:{__ignoreMap:h},children:[{type:a,value:M}]}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Je sens que vous comprenez à quel point les migrations de données vont être galère (par exemple le jour où vous décidez de rajouter une autre propriété disponible pour la recherche...)"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Vous pouvez jeter un oeil sur "},{type:b,tag:e,props:{href:"https:\u002F\u002Fbitbucket.org\u002Fhlassiege\u002Fnosql\u002Fsrc\u002F821b12c7c105\u002Fsrc\u002Ftest\u002Fjava\u002Fcom\u002Fsandbox\u002FJedisTest.java?at=default",rel:[f]},children:[{type:a,value:n}]},{type:a,value:", pour moi ce fut une mauvaise entrée en matière. J’ai peu apprécié l’API. Par contre côté perf je n’ai pas été décu :"}]},{type:b,tag:c,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:n}]},{type:a,value:y},{type:b,tag:d,props:{},children:[{type:a,value:z}]},{type:a,value:" [+- 0.01], round.gc: 0.00 [+- 0.00], GC.calls: 2, GC.time: 0.00, time.total: 57.59, time.warmup: 57.25, time.bench: 0.34 "},{type:b,tag:d,props:{},children:[{type:a,value:n}]},{type:a,value:A},{type:b,tag:d,props:{},children:[{type:a,value:"0.00"}]},{type:a,value:" [+- 0.00], round.gc: 0.00 [+- 0.00], GC.calls: 0, GC.time: 0.00, time.total: 0.07, time.warmup: 0.03, time.bench: 0.04 "},{type:b,tag:d,props:{},children:[{type:a,value:n}]},{type:a,value:B},{type:b,tag:d,props:{},children:[{type:a,value:z}]},{type:a,value:" [+- 0.00], round.gc: 0.00 [+- 0.00], GC.calls: 2, GC.time: 0.00, time.total: 0.43, time.warmup: 0.15, time.bench: 0.28"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Et surtout, quelque soit la volumétrie ce temps est constant puisqu'on accède à chaque enregistrement par sa clé."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Par la suite on m'a conseillé d'autres apis sans doute plus adapté :"}]},{type:b,tag:u,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:N}]},{type:b,tag:g,props:{},children:[{type:a,value:"Spring Data"}]}]},{type:b,tag:k,props:{id:"johm"},children:[{type:a,value:N}]},{type:b,tag:c,props:{},children:[{type:b,tag:e,props:{href:O,rel:[f]},children:[{type:a,value:O}]},{type:a,value:" J’ai voulu tester Johm car le premier a m’avoir aiguillé vers des Apis plus haut niveau m’avait conseillé Ohm (pour Ruby). Mais malgré l’annonce sur Github : "},{type:b,tag:j,props:{},children:[{type:a,value:"JOhm is still in active development."}]},{type:a,value:", le dernier commit date de 2 ans... J’ai quand même voulu testé mais Johm n’est pas compatible avec les dernières versions de Redis. Epic fail."}]},{type:b,tag:k,props:{id:"spring-data-redis"},children:[{type:a,value:"Spring data Redis"}]},{type:b,tag:c,props:{},children:[{type:b,tag:e,props:{href:P,rel:[f]},children:[{type:a,value:P}]},{type:a,value:" Pour le coup même si j’utilise Spring depuis 2006 et que j’en ai été un grand fan, aujourd’hui je n’avais pas envie de faire entrer le loup dans la bergerie. Je serais ravi d’approfondir le fond de ma pensée autour d’un verre, mais ce n’est pas le sujet de ce billet. Bon, malgré tout si j’avais choisi Redis, ce que je n’ai pas fait au final, je pense que ca aurait été l’API à choisir."}]},{type:b,tag:x,props:{id:r},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.mongodb.org\u002F",rel:[f]},children:[{type:a,value:w}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"MongoDb fait partie de la famille des bases Nosql orienté document. Plus riche fonctionnellement que Redis on va notamment trouver le support des recherches géospatiales, des fonctions d’aggrégation, le stockage de fichiers de grandes tailles avec GridFS. Par contre pas de transactionnalité excepté au niveau du document, ce qui va nécessiter de recourir à certaines astuces pour gérer la cohérence de nos données. "},{type:b,tag:j,props:{},children:[{type:a,value:Q}]},{type:a,value:". Tout d’abord s’il n’y a pas de transaction lorsqu’on agit sur plusieurs documents, on a tout de même des \"transactions\" au niveau document. Ca tombe bien, cette première stratégie consiste donc à stocker des documents Json contenant votre entité et ses relations et c’est exactement ce qui nous convient pour notre relation entre Profile et Adress. Exemple :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"{ _id : 1 , login: “login1”, address : { zipCode : “69003”}}"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ici, mon entité inclut un attribut address qui aurait pu être stocké dans une table à part avec un modèle relationnel classique."}]},{type:b,tag:c,props:{},children:[{type:a,value:"D’autres techniques décrite dans la doc permettent d’envisager des “transactions” applicatives : "},{type:b,tag:e,props:{href:R,rel:[f]},children:[{type:a,value:R}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Si vous en êtes là, peut être faut-il quand même se poser des questions..."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour mes tests j’ai souhaité utiliser Jongo et Morphia, deux librairies avec des approches relativement différentes. La première va rechercher la performance en restant très proche du protocole. La seconde va proposer plus de simplicité d’utilisation via un mapping document objet."}]},{type:b,tag:k,props:{id:"jongo"},children:[{type:a,value:"Jongo"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Jongo reste très proche du shell mongo donc il faut aimer manipuler le json. J’ai été un peu perplexe au début. Je me suis pris quelques murs et puis finalement, avec l’aide de la formation en ligne de 10gen je me suis bien habitué à la syntaxe. Les performances obtenues sont relativement sympa :"}]},{type:b,tag:c,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:o}]},{type:a,value:y},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:" [+- 0.00], round.gc: 0.00 [+- 0.00], GC.calls: 0, GC.time: 0.00, time.total: 0.17, time.warmup: 0.10, time.bench: 0.07 "},{type:b,tag:d,props:{},children:[{type:a,value:o}]},{type:a,value:A},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:" [+- 0.01], round.gc: 0.00 [+- 0.00], GC.calls: 1, GC.time: 0.02, time.total: 0.18, time.warmup: 0.06, time.bench: 0.12 "},{type:b,tag:d,props:{},children:[{type:a,value:o}]},{type:a,value:B},{type:b,tag:d,props:{},children:[{type:a,value:z}]},{type:a,value:" [+- 0.00], round.gc: 0.00 [+- 0.00], GC.calls: 1, GC.time: 0.01, time.total: 0.52, time.warmup: 0.22, time.bench: 0.29 "},{type:b,tag:d,props:{},children:[{type:a,value:o}]},{type:a,value:S},{type:b,tag:d,props:{},children:[{type:a,value:"0.21"}]},{type:a,value:" [+- 0.03], round.gc: 0.00 [+- 0.00], GC.calls: 3, GC.time: 0.15, time.total: 3.81, time.warmup: 1.67, time.bench: 2.14"}]},{type:b,tag:c,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fbitbucket.org\u002Fhlassiege\u002Fnosql\u002Fsrc\u002F821b12c7c105\u002Fsrc\u002Ftest\u002Fjava\u002Fcom\u002Fsandbox\u002FJongoTest.java?at=default",rel:[f]},children:[{type:a,value:"Le code complet sous bitbucket"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Quelques exemple de code :"}]},{type:b,tag:i,props:{code:T,meta:l},children:[{type:b,tag:m,props:{},children:[{type:b,tag:i,props:{__ignoreMap:h},children:[{type:a,value:T}]}]}]},{type:b,tag:k,props:{id:"morphia"},children:[{type:a,value:"Morphia"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour tout dire, nous avions choisi Jongo au début suite aux premières phases de ce bench et à l’époque j’avais obtenu un facteur de 1 à 10 entre Jongo et Morphia. Sauf que maintenant que je maîtrise mieux les deux APIs et les réglages, les dernières tests montrent une autre réalité :"}]},{type:b,tag:c,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:d,props:{},children:[{type:a,value:U}]},{type:a,value:" [+- 0.00], round.gc: 0.00 [+- 0.00], GC.calls: 0, GC.time: 0.00, time.total: 0.34, time.warmup: 0.14, time.bench: 0.21 "},{type:b,tag:d,props:{},children:[{type:a,value:p}]},{type:a,value:A},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:" [+- 0.00], round.gc: 0.00 [+- 0.00], GC.calls: 0, GC.time: 0.00, time.total: 0.15, time.warmup: 0.06, time.bench: 0.08 "},{type:b,tag:d,props:{},children:[{type:a,value:p}]},{type:a,value:B},{type:b,tag:d,props:{},children:[{type:a,value:U}]},{type:a,value:" [+- 0.00], round.gc: 0.00 [+- 0.00], GC.calls: 0, GC.time: 0.00, time.total: 0.28, time.warmup: 0.11, time.bench: 0.17 "},{type:b,tag:d,props:{},children:[{type:a,value:p}]},{type:a,value:S},{type:b,tag:d,props:{},children:[{type:a,value:"0.18"}]},{type:a,value:" [+- 0.04], round.gc: 0.00 [+- 0.00], GC.calls: 2, GC.time: 0.14, time.total: 2.93, time.warmup: 1.15, time.bench: 1.78"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour le coup, l'API fait vraiment penser à un O(object) D(document) M(Mapping) et on s'éloigne beaucoup plus du protocole."}]},{type:b,tag:c,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fbitbucket.org\u002Fhlassiege\u002Fnosql\u002Fsrc\u002F821b12c7c105\u002Fsrc\u002Ftest\u002Fjava\u002Fcom\u002Fsandbox\u002FMorphiaTest.java?at=default",rel:[f]},children:[{type:a,value:"Le code complet sur bitbucket"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Quelques exemples :"}]},{type:b,tag:i,props:{code:V,meta:l},children:[{type:b,tag:m,props:{},children:[{type:b,tag:i,props:{__ignoreMap:h},children:[{type:a,value:V}]}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Verdict : Dans les deux cas la mise en place a été très simple. Sur l’aspect performance on reste sur des performances équivalentes. Jongo semble être très souple en restant proche du protocole au détriment par contre d’une lisibilité assez médiocre cependant quand on aborde des requêtes complexes. Avec le recul j’aurais peut être du partir sur du Morphia. Quoi qu’il en soit, utiliser les deux APIs en fonction des besoins ne doit poser aucun souci de toute façon."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Dernier point, en terme de fonctionnalités il me manque encore des capacités de recherche full-text digne de ce nom. Du coup en s’inspirant de ce que beaucoup d’autres ont fait avant nous, nous allons coupler notre solution avec du "},{type:b,tag:d,props:{},children:[{type:a,value:"Lucene"}]},{type:a,value:W}]},{type:b,tag:x,props:{id:X},children:[{type:a,value:Y}]},{type:b,tag:c,props:{},children:[{type:a,value:"Lucene est un superbe outil spécialisé sur la recherche. En terme de fonctionnalités on va retrouver tout ce qui nous intéresse : recherche full text, par synonyme, géospatiale, fuzzy etc..."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Tout d’abord, enfonçons des portes ouvertes, on y stocke des documents, on les lit, les supprime, les modifie, oui c’est une forme de bases de données pour ceux qui en douteraient encore."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Du coup, si c’est une base de données et qu’on y trouve toutes les fonctionnalités, pourquoi ne pas en faire notre stockage primaire ?"}]},{type:b,tag:c,props:{},children:[{type:a,value:"La première fois que JB m’a parlé d’utiliser Lucene + Mongo ou Redis j’avoue ne pas avoir bien compris le but. Pourquoi deux modes de stockage ? Même après la présentation faite au JUG par Xebia "},{type:b,tag:e,props:{href:Z,rel:[f]},children:[{type:a,value:Z}]},{type:a,value:" je n’avais pas encore le recul nécessaire. Et oui, il a fallu que je pratique car je fais partie des personnes qui comprennent vite quand on leur explique longtemps ^^"}]},{type:b,tag:c,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-24\u002Fmongo-lucene\u002F",rel:[f]},children:[{type:b,tag:t,props:{alt:h,src:"\u002Fimages\u002Fmongo.lucene-300x91.png",title:"mongo.lucene"},children:[]}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Effectivement ma première idée lorsque j’ai testé Lucene c’était de l’utiliser comme stockage primaire. Sans entrer dans les détails Lucene fait bien la différence entre le "},{type:b,tag:d,props:{},children:[{type:a,value:"stockage"}]},{type:a,value:" d’une donnée, qui permet donc d’utiliser Lucene comme un entrepôt de données, et "},{type:b,tag:d,props:{},children:[{type:a,value:"l’indexation"}]},{type:a,value:" d’une donnée qui la rend disponible pour la recherche. Dans notre cas, il suffisait de stocker la donner en plus de l’indexer."}]},{type:b,tag:c,props:{},children:[{type:a,value:"J’ai donc cherché et lu pas mal d’articles indiquant que la bonne pratique c’était de n’utiliser Lucene que pour rechercher des ID."}]},{type:b,tag:c,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:Q}]},{type:a,value:W}]},{type:b,tag:c,props:{},children:[{type:a,value:"Lucene est optimisé pour les recherches, moins pour manipuler de la donnée et pas forcément la meilleure solution lorsqu’il s’agit de mettre à jour ces données régulièrement. De plus si on stocke chaque information un index lucene peut vite prendre la place. Mongo propose moins de fonctionnalités de recherche mais permet de manipuler des données efficacement."}]},{type:b,tag:c,props:{},children:[{type:a,value:"La pratique courante donc c’est de profiter des capacités de recherche de Lucene et de l’efficacité de Mongo pour le stockage. On stocke uniquement les ID de nos entités sous Lucene et on indexe toutes les propriétés nécessaires à la recherche. Le stockage s’effectue donc sous Mongo. Les recherches permettent de récupérer des ID qui permettront par la suite d’aller chercher nos enregistrements dans Mongo."}]},{type:b,tag:c,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-24\u002Fmongo-lucene2\u002F",rel:[f]},children:[{type:b,tag:t,props:{alt:h,src:"\u002Fimages\u002Fmongo.lucene2-300x294.png",title:"mongo.lucene2"},children:[]}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Cool, en tout cas une chose était sure, le projet se ferait avec Lucene."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Billet suivant nous verrons que les choses n’étant jamais simples on ne n’est pas contenté de Lucene."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour voir chaque billet :"}]},{type:b,tag:u,props:{},children:[{type:b,tag:g,props:{},children:[{type:b,tag:e,props:{href:F,rel:[f],title:G},children:[{type:a,value:"L'intro"}]}]},{type:b,tag:g,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-24\u002F",rel:[f],title:E},children:[{type:a,value:"Redis et Mongo"}]}]},{type:b,tag:g,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-34\u002F",rel:[f],title:"Nosql, 4 bases à la loupe 3\u002F4"},children:[{type:a,value:"ElasticSearch et Solr"}]}]},{type:b,tag:g,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-44\u002F",rel:[f]},children:[{type:a,value:"Le récap"}]}]}]}],toc:{title:h,searchDepth:_,depth:_,links:[{id:s,depth:D,text:v},{id:r,depth:D,text:w},{id:X,depth:D,text:Y}]}},_type:"markdown",_id:"content:articles:2012:11:11:nosql-4-bases-a-la-loupe-24.md",_source:"content",_file:"articles\u002F2012\u002F11\u002F11\u002Fnosql-4-bases-a-la-loupe-24.md",_extension:"md"}},prerenderedAt:1683010269368}}("text","element","p","strong","a","nofollow","li","","code","em","h4",null,"pre","JedisTest","JongoTest","MorphiaTest",false,"mongodb","redis","img","ul","Redis","MongoDb","h3",".findByLoginShouldReturnSomething: [measured 10 out of 15 rounds, threads: 1 (sequential)] round: ","0.03",".assertThatMyDatabaseHasMoreThan100Profile: [measured 10 out of 15 rounds, threads: 1 (sequential)] round: ",".testSearchWithEmbeddedObject: [measured 10 out of 15 rounds, threads: 1 (sequential)] round: ","0.01",3,"Nosql, 4 bases à la loupe 2\u002F4","http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-14\u002F","Nosql, 4 bases à la loupe 1\u002F4","mailto:profile@email.com","profile@email.com","\nredis 127.0.0.1:6379\u003E get profile:login1:object\n\"{\"address\":{\"zipCode\":\"1\",\"loc\":[0.0,0.0]},\"_id\":\"login1\"}\"\n","http:\u002F\u002Fredis.io\u002Fcommands","Jedis","\nObjectMapper mapper = new ObjectMapper();\njedis.set(\"fid:\"+profile.getLogin()+\":login\",profile.getLogin());\njedis.set(\"flogin:\"+profile.getLogin(),profile.getLogin());\njedis.set(\"fid:\"+profile.getLogin()+\":zipcode\",profile.getAddress().getZipCode());\njedis.set(\"zipcode:\"+profile.getAddress().getZipCode(), profile.getLogin());\njedis.set(\"profile:\"+profile.getLogin()+\":object\",mapper.writeValueAsString(profile));\njedis.incr(\"profile:count\");\n","Johm","https:\u002F\u002Fgithub.com\u002Fxetorthio\u002Fjohm","http:\u002F\u002Fwww.springsource.org\u002Fspring-data\u002Fredis","Explication","http:\u002F\u002Fdocs.mongodb.org\u002Fmanual\u002Ftutorial\u002Fperform-two-phase-commits\u002F",".testGeoSpatialSearch: [measured 10 out of 15 rounds, threads: 1 (sequential)] round: ","\n    return profiles.find(\"{login:#}\",login).as(Profile.class);\n    return profiles.find(\"{address.loc : {$near: [0, 0], $maxDistance: 5}}\").as(Profile.class);\n","0.02","\n        return ds.find(Profile.class).field(\"address.zipCode\").equal(\"94500\").asList();\n        return ds.find(Profile.class).field(\"address.loc\").near(0,0,100).asList();\n",".","mongo-et-lucene","Mongo et Lucene","http:\u002F\u002Fwww.parisjug.org\u002Fxwiki\u002Fbin\u002Fview\u002FMeeting\u002F20120703",2))