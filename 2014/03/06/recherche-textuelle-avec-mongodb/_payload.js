export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return {data:{"/articles/2014/03/06/recherche-textuelle-avec-mongodb":{_path:"\u002Farticles\u002F2014\u002F03\u002F06\u002Frecherche-textuelle-avec-mongodb",_dir:"06",_draft:i,_partial:i,_locale:j,_empty:i,title:"Recherche textuelle avec MongoDB",description:"[![mongo](\u002Fimages\u002Faf912-mongo.jpg)](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2014\u002F01\u002Faf912-mongo.jpg)Il y a maintenant 2 ans nous avions choisi ...",id:"1044",date:"2014-03-06",categories:["waza"],tags:["mongodb"],img:"af912-mongo.jpg",cover:"cover1.jpg",readingTime:{text:"6 min read",minutes:5.39,time:323400,words:1078},body:{type:"root",children:[{type:b,tag:c,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2014\u002F01\u002Faf912-mongo.jpg",rel:[f]},children:[{type:b,tag:"img",props:{alt:"mongo",src:"\u002Fimages\u002Faf912-mongo.jpg"},children:[]}]},{type:a,value:"Il y a maintenant 2 ans nous avions choisi d'utiliser MongoDB sur "},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.hopwork.com",rel:[f]},children:[{type:a,value:"HopWork"}]},{type:a,value:" à l'issu "},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-14\u002F",rel:[f],title:"Nosql, 4 bases à la loupe 1\u002F4"},children:[{type:a,value:"d'une petite série d'expérimentation"}]},{type:a,value:". Cette base m'avait séduit pour ces puissantes fonctionnalités de requêtage et sa facilité de mise en oeuvre. Dans ce billet j'aimerais revenir sur les fonctionnalités de recherche textuelles de MongoDB car, si elles sont puissantes, elles comportement aussi quelques pièges."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Voyons d'abord notre jeu de données. Il s'agit de document JSON. J'ai pris l'ensemble des membres de "},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.lateral-thoughts.com",rel:[f]},children:[{type:a,value:"www.lateral-thoughts.com"}]},{type:a,value:" comme profiles dans ma collection MongoDB :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"db.profile.find()\n{ \"_id\" : ObjectId(\"5315c3437fec2f001e01c882\"), \"firstName\" : \"Hugo\", \"lastName\" : \"Lassiege\" }\n{ \"_id\" : ObjectId(\"5315c3567fec2f001e01c883\"), \"firstName\" : \"Jean-Baptiste\", \"lastName\" : \"Lemée\" }\n{ \"_id\" : ObjectId(\"5315c3647fec2f001e01c884\"), \"firstName\" : \"Olivier\", \"lastName\" : \"Girardot\" }\n{ \"_id\" : ObjectId(\"5315c36e7fec2f001e01c885\"), \"firstName\" : \"Florent\", \"lastName\" : \"Biville\" }\n{ \"_id\" : ObjectId(\"5315c3777fec2f001e01c886\"), \"firstName\" : \"Nicolas\", \"lastName\" : \"Rey\" }\n{ \"_id\" : ObjectId(\"5315c37f7fec2f001e01c887\"), \"firstName\" : \"Vincent\", \"lastName\" : \"Doba\" }\n{ \"_id\" : ObjectId(\"5315c38a7fec2f001e01c888\"), \"firstName\" : \"Jonathan\", \"lastName\" : \"Dray\" }\n{ \"_id\" : ObjectId(\"5315c3937fec2f001e01c889\"), \"firstName\" : \"Stuart\", \"lastName\" : \"Corring\" }"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Faisons une première recherche simple pour trouver une personne par son nom de famille :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"db.profile.find({lastName:\"Lassiege\"})\n{ \"_id\" : ObjectId(\"5315c3437fec2f001e01c882\"), \"firstName\" : \"Hugo\", \"lastName\" : \"Lassiege\" }"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Fonctionnellement, cette recherche est équivalent à utiliser l'opération $in :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"db.profile.find({lastName : {$in:[\"Lassiege\"]}})\n{ \"_id\" : ObjectId(\"5315c3437fec2f001e01c882\"), \"firstName\" : \"Hugo\", \"lastName\" : \"Lassiege\" }"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Jusqu'ici tout va bien. Regardons cependant nos deux requêtes avec un explain plan :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"db.profile.find({lastName:\"Lassiege\"}).explain()\n{\n\"cursor\" : \"BasicCursor\",\n\"isMultiKey\" : false,\n\"n\" : 1,\n\"nscannedObjects\" : 8,\n\"nscanned\" : 8,\n\"nscannedObjectsAllPlans\" : 8,\n\"nscannedAllPlans\" : 8,\n\"scanAndOrder\" : false,\n\"indexOnly\" : false,\n\"nYields\" : 0,\n\"nChunkSkips\" : 0,\n\"millis\" : 0,\n\"indexBounds\" : {},\n\"server\" : \"HUGO:27017\"\n}"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Cet explain plan nous indique que nous avons scanné nos 8 éléments pour trouver notre résultat. Pas très grave dans le cas présent, mais parcourir l'ensemble des éléments d'une collection sera rapidement problématique sur une plus grosse volumétrie."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Nous allons poser un index pour résoudre ce point et améliorer nos recherches."}]},{type:b,tag:c,props:{},children:[{type:a,value:"db.profile.ensureIndex({lastName : 1})\ndb.profile.find({lastName : {$in:[\"Lassiege\"]}}).explain()\n{\n\"cursor\" : \"BtreeCursor lastName_1\",\n\"isMultiKey\" : false,\n\"n\" : 1,\n\"nscannedObjects\" : 1,\n\"nscanned\" : 1,\n\"nscannedObjectsAllPlans\" : 1,\n\"nscannedAllPlans\" : 1,\n\"scanAndOrder\" : false,\n\"indexOnly\" : false,\n\"nYields\" : 0,\n\"nChunkSkips\" : 0,\n\"millis\" : 0,\n\"indexBounds\" : {\n\"lastName\" : [\n[\n\"Lassiege\",\n\"Lassiege\"\n]\n]\n},\n\"server\" : \"HUGO:27017\"\n}"}]},{type:b,tag:c,props:{},children:[{type:a,value:"C'est déjà mieux. Nos deux requêtes passent désormais par cet index et effectuent une seule lecture par l'index."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Jusqu'ici tout va bien."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Mettons que désormais nous choisissions de chercher \""},{type:b,tag:d,props:{},children:[{type:a,value:"l"}]},{type:a,value:"assiege\" et non \""},{type:b,tag:d,props:{},children:[{type:a,value:"L"}]},{type:a,value:"assiege\"."}]},{type:b,tag:c,props:{},children:[{type:a,value:"db.profile.find({lastName:\"lassiege\"})"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Aucun résultat... C'est le drame. Il s'agit d'une recherche \"exacte\"."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour le fun, on pourrait utiliser une première méthode avec l'opérateur "},{type:b,tag:e,props:{href:"http:\u002F\u002Fdocs.mongodb.org\u002Fmanual\u002Freference\u002Foperator\u002Fquery\u002Fwhere\u002F",rel:[f]},children:[{type:a,value:"$where"}]},{type:a,value:" :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"db.profile.find( { $where: \"this.lastName.toUpperCase() == 'lassiege'.toUpperCase()\" } );\n{ \"_id\" : ObjectId(\"5315c3437fec2f001e01c882\"), \"firstName\" : \"Hugo\", \"lastName\" : \"Lassiege\" }"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Cet opérateur permet d'appliquer une fonction Javascript pour évaluer si un élément match ou non."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour être clair, si cet opérateur est peu utilisé, il y a une raison. Il ne profite pas de l'index posé sur la collection. On va vite oublier... "},{type:b,tag:d,props:{},children:[{type:a,value:"Il n'est pas recommandé d'utiliser cette technique."}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Le lecteur malin qui a suivi le dernier lien vers la doc disséminé dans ce texte aura remarqué la présence de l'opérateur $regex que l'on pourrait utiliser pour notre recherche :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"db.profile.find({lastName : {$regex: \u002Flassiege\u002Fi}})\n{ \"_id\" : ObjectId(\"5315c3437fec2f001e01c882\"), \"firstName\" : \"Hugo\", \"lastName\" : \"Lassiege\" }"}]},{type:b,tag:c,props:{},children:[{type:a,value:"La regexp \u002Flassiege\u002Fi permet en effet d'effectuer une recherche non sensible à la casse. Malheureusement, cette recherche ne profite pas non plus de notre index."}]},{type:b,tag:c,props:{},children:[{type:a,value:"A noter d'ailleurs que les seules recherches avec une regexp qui profiteront de l'index sont les requêtes du type \"Commençant par\" (avec un ^) et non case insensitive."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Bon alors, on ne peut pas rechercher efficacement de façon insensible à la casse ?"}]},{type:b,tag:c,props:{},children:[{type:a,value:"En réalité il existe deux techniques utilisées avec MongoDB."}]},{type:b,tag:k,props:{id:l},children:[{type:a,value:m}]},{type:b,tag:c,props:{},children:[{type:a,value:"Comme très souvent avec MongoDB, la réponse consiste à dupliquer l'information. Ainsi, une possibilité sera de stocker dans notre objet \"profile\" un champ last"},{type:b,tag:d,props:{},children:[{type:a,value:"n"}]},{type:a,value:"ame contenant le champ last"},{type:b,tag:d,props:{},children:[{type:a,value:"N"}]},{type:a,value:"ame mais normalisé selon notre besoin de recherche."}]},{type:b,tag:c,props:{},children:[{type:a,value:"{ \"_id\" : ObjectId(\"5315c3437fec2f001e01c882\"), \"firstName\" : \"Hugo\", \"lastName\" : \"Lassiege\", \"lastname\" : \"lassiege\" }"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ce champ pourra être utilisé lors d'une recherche avec un paramètre dont vous aurez changé la casse également."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Soyons clair, certains vont considérer que c'est \"étrange\" mais c'est la manière traditionnelle de le faire. "},{type:b,tag:d,props:{},children:[{type:a,value:"Et c'est toujours la technique à privilégier aujourd'hui."}]}]},{type:b,tag:k,props:{id:n},children:[{type:a,value:o}]},{type:b,tag:c,props:{},children:[{type:a,value:"Nous allons tirer parti d'une nouvelle fonctionnalité qui a été introduite en 2.4 : les index full text. Et nous verrons que ce n'est pas la panacée."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Tout d'abord, il s'agit d'une fonctionnalité en statut béta, non recommandé en production. Il faut l'activer au démarrage pour pouvoir l'utiliser :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"mongod --setParameter textSearchEnabled=true"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Nous pouvons désormais ajouter cet index full text :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"db.profile.ensureIndex({lastName : \"text\"})"}]},{type:b,tag:c,props:{},children:[{type:a,value:"La recherche va devoir être faite via une "},{type:b,tag:d,props:{},children:[{type:a,value:"commande"}]},{type:a,value:" et non via la méthode find habituelle."}]},{type:b,tag:c,props:{},children:[{type:a,value:"db.profile.runCommand(\"text\", {search:\"lassiege\"})\n{\n\"queryDebugString\" : \"lassieg||||||\",\n\"language\" : \"english\",\n\"results\" : [\n{\n\"score\" : 1,\n\"obj\" : {\n\"_id\" : ObjectId(\"5315c3437fec2f001e01c882\"),\n\"firstName\" : \"Hugo\",\n\"lastName\" : \"Lassiege\",\n\"lastname\" : \"lassiege\"\n}\n}\n],\n\"stats\" : {\n\"nscanned\" : 1,\n\"nscannedObjects\" : 0,\n\"n\" : 1,\n\"nfound\" : 1,\n\"timeMicros\" : 285\n},\n\"ok\" : 1\n}"}]},{type:b,tag:c,props:{},children:[{type:a,value:"A noter que l'on retrouve la possibilité de faire des filtres, des projections, une limitation du nombre de résultat mais pas de tri. Car le tri est donné par la pertinence du résultat renvoyé par la recherche full text."}]},{type:b,tag:c,props:{},children:[{type:a,value:"C'est un peu dommage car c'est assez peu homogène avec le reste. On aurait préféré passer par un find :"}]},{type:b,tag:p,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"avec éventuellement l'utilisation d'un "},{type:b,tag:e,props:{href:"http:\u002F\u002Fdocs.mongodb.org\u002Fmanual\u002Freference\u002Foperator\u002Fmeta\u002Fhint\u002F",rel:[f]},children:[{type:a,value:"Hint"}]},{type:a,value:" pour forcer le passage par l'index full text. db.profile.find(...).hint({lastname: \"text\"})"}]},{type:b,tag:g,props:{},children:[{type:a,value:"ou mieux, avec un opérateur spécifique $text db.profile.find({lastName : {$text : \"lassiege\"}})"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Et on aurait aimé contrôler le tri pour utiliser nos propres tris si besoin."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour conclure sur les index Full Text. Il faut bien se méfier sur leur utilisation :"}]},{type:b,tag:p,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Ils sont plus gourmands en espace disque (on stocke tous les tokens)"}]},{type:b,tag:g,props:{},children:[{type:a,value:"Ils sont plus coûteux à l'écriture (puisque MongoDB passe du temps à analyser vos termes et que le coût de stockage est plus lourd)"}]},{type:b,tag:g,props:{},children:[{type:a,value:"On ne peut pas avoir plusieurs index Full Text sur une collection. A la place on peut avoir uniquement un index Full Text qui regroupe plusieurs champs (la différence est importante)"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"En fait, pour ce cas d'usage, où il s'agit de gérer une recherche non sensible à la casse sur des noms de familles, la première méthode est la méthode à privilégier. Mais cela vous a peut-être permis de découvrir cette fonctionnalité."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Voilà c'est terminé. Vous venez de voir différents opérateurs pour vos recherches, les pièges relatifs à l'utilisation de certain d'entre eux, l'indexation et l'indexation full text."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Vous pouvez retourner à vos claviers."}]}],toc:{title:j,searchDepth:h,depth:h,links:[{id:l,depth:h,text:m},{id:n,depth:h,text:o}]}},_type:"markdown",_id:"content:articles:2014:03:06:recherche-textuelle-avec-mongodb.md",_source:"content",_file:"articles\u002F2014\u002F03\u002F06\u002Frecherche-textuelle-avec-mongodb.md",_extension:"md"}},prerenderedAt:1677657045930}}("text","element","p","strong","a","nofollow","li",2,false,"","h2","avant-la-24","Avant la 2.4","depuis-la-24","Depuis la 2.4","ul"))