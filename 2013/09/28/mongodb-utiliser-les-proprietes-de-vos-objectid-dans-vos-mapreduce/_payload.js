export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q){return {data:{"/articles/2013/09/28/mongodb-utiliser-les-proprietes-de-vos-objectid-dans-vos-mapreduce":{_path:"\u002Farticles\u002F2013\u002F09\u002F28\u002Fmongodb-utiliser-les-proprietes-de-vos-objectid-dans-vos-mapreduce",_dir:"28",_draft:n,_partial:n,_locale:e,_empty:n,title:"MongoDB : Utiliser les propriétés de vos ObjectId dans vos MapReduce",description:"Je vous propose de voir deux fonctionnalités plutôt pratiques de [MongoDB](http:\u002F\u002Fwww.mongodb.org\u002F) dans ce billet. D’une part je vais vous parler de ...",id:"970",date:"2013-09-28",categories:["waza"],tags:[i,"mongodb"],img:"objectid.png",cover:"cover7.jpg",readingTime:{text:"6 min read",minutes:5.98,time:358800,words:1196},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:"Je vous propose de voir deux fonctionnalités plutôt pratiques de "},{type:a,tag:j,props:{href:"http:\u002F\u002Fwww.mongodb.org\u002F",rel:[k]},children:[{type:b,value:"MongoDB"}]},{type:b,value:" dans ce billet. D’une part je vais vous parler de certaines propriétés très intéressantes des "},{type:a,tag:j,props:{href:"http:\u002F\u002Fdocs.mongodb.org\u002Fmanual\u002Freference\u002Fobject-id\u002F",rel:[k]},children:[{type:b,value:o}]},{type:b,value:", la classe qu’utilise MongoDB pour générer les identifiants de vos entités, et ensuite je vais vous montrer comment utiliser cette propriété dans un exemple tout simple avec un MapReduce."}]},{type:a,tag:p,props:{id:q},children:[{type:b,value:o}]},{type:a,tag:c,props:{},children:[{type:b,value:"MongoDB est une base de données orientée documents dans laquelle vous pouvez stocker des documents Json dans des collections, elles-mêmes regroupées dans des bases de données."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Chaque document Json doit contenir une propriété _id qui identifie de manière unique votre document au sein de votre collection."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par exemple :"}]},{type:a,tag:d,props:{code:r,language:s,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:r}]}]}]},{type:a,tag:d,props:{code:t,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:t}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par défaut, MongoDB vous propose de générer lui-même des identifiants grâce aux ObjectId :"}]},{type:a,tag:d,props:{code:u,language:s,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:u}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme MongoDB privilégie avant tout la scalabilité, ces identifiants ne sont pas générés par un processus centralisé. Évidemment quand vous les laissez générer côté serveur, l’intérêt reste limité puisque vous n’avez qu’un seul maître actif. Mais ces ObjectId peuvent être générés côté client (et certains drivers marchent de cette façon)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ces identifiants doivent donc être “à priori uniques” sans avoir besoin d’un mécanisme complexe de synchronisation avec le serveur."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour cela MongoDB utilise les ObjectId qui contiennent un identifiant sur 12 bytes."}]},{type:a,tag:"ul",props:{},children:[{type:a,tag:l,props:{},children:[{type:b,value:"4 bytes qui représentent le timestamp courant (nombre de secondes depuis epoch)"}]},{type:a,tag:l,props:{},children:[{type:b,value:"3 bytes pour identifier la machine"}]},{type:a,tag:l,props:{},children:[{type:b,value:"2 bytes pour représenter l’identifiant du processus"}]},{type:a,tag:l,props:{},children:[{type:b,value:"3 bytes qui représentent un compteur qui démarre à un numéro aléatoire"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:v,props:{alt:e,src:"\u002Fimages\u002Fobjectid.png"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cet ObjectId a donc une propriété très intéressante, il contient automatiquement la date de création de votre entité !"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ce qui nous permet d’écrire le code suivant par exemple sur le MongoShell :"}]},{type:a,tag:d,props:{code:w,language:h,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:w}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et si nous utilisions cette propriété pour obtenir quelques statistiques ?"}]},{type:a,tag:p,props:{id:i},children:[{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les algorithmes de MapReduce permettent de traiter des données en découpant votre problème initial en plusieurs sous-problèmes."}]},{type:a,tag:c,props:{},children:[{type:b,value:"L’idée étant d’appliquer la même fonction a des sous ensembles de votre jeu de donnée initial (via une fonction map), puis d’appliquer une “réduction” de ces résultats pour les agréger et trouver le résultat final."}]},{type:a,tag:c,props:{},children:[{type:a,tag:v,props:{alt:i,src:"\u002Fimages\u002Ffcd2c-mapreduce.png"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ce type d’algorithme est géré nativement par MongoDB."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour cela vous devez définir une fonction map qui va émettre des couplés clés-valeurs."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Une fonction reduce qui va s’occuper de l'agrégation et ensuite vous appliquez une commande MapReduce sur l’ensemble."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ici, par exemple si on veut compter le nombre d’éléments dans votre collection"}]},{type:a,tag:c,props:{},children:[{type:a,tag:"em",props:{},children:[{type:b,value:"(l’exemple est volontairement simpliste et n’a aucun intérêt puisque vous pouvez utiliser db.mycollection.count() pour le même résultat)"}]}]},{type:a,tag:d,props:{code:y,language:h,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:y}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le résultat de ce MapReduce est désormais consultable dans la collection results et sans surprise nous n’avons qu’une seule ligne qui contient notre somme :"}]},{type:a,tag:d,props:{code:z,language:h,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:z}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bon, maintenant faisons quelque chose de plus intéressant et utilisons les ObjectId que nous avons vu au dessus."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Imaginons que vous avez un site qui contient une liste d’inscrits et que l’on vous demande le nombre d’inscription par mois."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Votre inscrit très basiquement :"}]},{type:a,tag:d,props:{code:A,language:h,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:A}]}]}]},{type:a,tag:B,props:{id:C},children:[{type:b,value:D}]},{type:a,tag:c,props:{},children:[{type:b,value:"En SQL, vous auriez du ajouter une colonne figurant la date de création de chaque compte :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"ID = 1\nfirstname = Hugo\nlastname = Lassiege\ncreated = une date (exemple: 26 septembre 2013)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ensuite vous auriez appliqué une requête ressemblant à ceci :"}]},{type:a,tag:d,props:{code:E,language:F,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:E}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Afin d’éviter de faire cette requête sans arrêt nous l’aurions placé dans une vue afin de profiter d’un minimum de cache (et simplifier le requètage) :"}]},{type:a,tag:d,props:{code:G,language:F,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:G}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Certaines bases proposent d’utiliser des vues matérialisées qui ne se rafraîchissent qu’à intervalle régulier vous évitant de relancer constamment le même calcul pour rien."}]},{type:a,tag:c,props:{},children:[{type:b,value:"(A noter que Mysql ne le supporte pas)"}]},{type:a,tag:B,props:{id:H},children:[{type:b,value:I}]},{type:a,tag:c,props:{},children:[{type:b,value:"Déjà partons du principe que vous n'aviez pas pensé à ajouter le champ created, grâce aux ObjectId vous pourriez quand même vous en sortir :)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tout d’abord nous allons créer une fonction map qui va émettre des clés qui contiendront l’année et le mois de chaque record. Nous allons utiliser la méthode getTimestamp() de ObjectId qui nous renvoie une date."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il faut voir cette fonction comme l’équivalent du GROUP BY YEAR(created), MONTH(created) fait précédemment :"}]},{type:a,tag:d,props:{code:J,language:h,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:J}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ensuite la fonction reduce qui se contentent de faire une somme, l’équivalent de notre SELECT count(ID) :"}]},{type:a,tag:d,props:{code:K,language:h,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:K}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et enfin l’application de la commande :"}]},{type:a,tag:d,props:{code:L,language:h,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:L}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous remarquerez que nous n’avons pas besoin de relancer le calcul à chaque nouvelle demande puisque la collection de sortie est désormais consultable très facilement."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Maintenant optimisons un peu cela."}]},{type:a,tag:c,props:{},children:[{type:b,value:"On remarque très rapidement que recalculer systématiquement pour les mois passés n’a aucun sens puisque ces données ne peuvent plus changer. Nous allons donc utiliser un MapReduce incrémental."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour cela, il vous suffit d’appliquer deux options supplémentaires à votre commande :"}]},{type:a,tag:d,props:{code:M,language:h,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:M}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ici nous avons utilisé deux astuces."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par défaut, le résultat d’un map reduce remplace toutes les données présentes dans la collection de sortie."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais nous pouvons préciser le paramètre "},{type:a,tag:N,props:{},children:[{type:b,value:"merge"}]},{type:b,value:" pour que les résultats soient fusionnés avec des résultats déjà présents."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cela va nous permettre de n’ajouter que les résultats concernant les derniers mois."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et nous allons utiliser le paramètre "},{type:a,tag:N,props:{},children:[{type:b,value:"query"}]},{type:b,value:" pour limiter le jeu de données sur lequel appliquer l’algorithme."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ici nous utilisons une méthode que vous devez définir au préalable permettant de créer un ObjectId à partir d’une date :"}]},{type:a,tag:d,props:{code:O,language:h,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:O}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"(source : "},{type:a,tag:j,props:{href:P,rel:[k]},children:[{type:b,value:P}]},{type:b,value:")"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et voila, vous avez désormais un mapreduce incrémental. On remarquera quand même que l'utilisation d'une date aurait malgré tout simplifié l'écriture de la query de filtrage mais nous nous en sommes sortis sans champ \"created\"."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et c’est terminé. Nous aurions pu voir encore de multiples choses, comment lancer un MapReduce en Java ou comment faire la même chose avec le framework d’aggrégation de MongoDB. Peut-être une autre fois."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ou bien vous pouvez aussi me contacter pour "},{type:a,tag:j,props:{href:"http:\u002F\u002Fwww.lateral-thoughts.com\u002Fformations\u002Fformation-mongodb",rel:[k]},children:[{type:b,value:"une formation sur MongoDB"}]},{type:b,value:" si jamais ça vous intéresse ;)"}]}],toc:{title:e,searchDepth:m,depth:m,links:[{id:q,depth:m,text:o},{id:i,depth:m,text:x,children:[{id:C,depth:Q,text:D},{id:H,depth:Q,text:I}]}]}},_type:"markdown",_id:"content:articles:2013:09:28:mongodb-utiliser-les-proprietes-de-vos-objectid-dans-vos-mapreduce.md",_source:"content",_file:"articles\u002F2013\u002F09\u002F28\u002Fmongodb-utiliser-les-proprietes-de-vos-objectid-dans-vos-mapreduce.md",_extension:"md"}},prerenderedAt:1699706368731}}("element","text","p","code","",null,"pre","javascript","mapreduce","a","nofollow","li",2,false,"ObjectId","h2","objectid","{\n    \"_id\": \"51f1b5b5e4b0d8b9b5b5b5b5\",\n    \"name\": \"MongoDB\",\n    \"type\": \"database\",\n    \"count\": 1,\n    \"info\": { x: 203, y: 102 }\n}\n","json","{\n\"\\_id\" : 1\n… autre propriétés\n}\n","{\n\n \"\\_id\" : ObjectId(\"5197c6b453cce2ec3a743811\")\n}\n","img","var id = ObjectId()\nprint(id)\nObjectId(\"5247019073ed0c203c79b995\")\nprint(id.getTimestamp())\nISODate(\"2013-09-28T16:19:28Z\")\n","MapReduce","map = function() {\n    emit(1,1);\n}\n\nreduce = function(key, values) {\n    return  Array.sum(values);\n}\n\ndb.mycollection.mapReduce( map , reduce , { out : “results” } )\n{\n        \"result\" : \"results\",\n        \"timeMillis\" : 751,\n        \"counts\" : {\n                \"input\" : 113,\n                \"emit\" : 113,\n                \"reduce\" : 2,\n                \"output\" : 1\n        },\n        \"ok\" : 1,\n}\n","db.results\\_tst.find()\n{ \"\\_id\" : 1, \"value\" : 113 }\n","{\n \"\\_id\" : ObjectId(\"5197c6b453cce2ec3a743811\"),\n“firstname” : “Hugo”,\n“lastname” : “Lassiege”\n}\n","h3","comment-nous-laurions-résolu-en-sql","Comment nous l’aurions résolu en SQL :","SELECT COUNT(ID)\nFROM accounts\nGROUP BY YEAR(created), MONTH(created)\n","sql","CREATE VIEW results as SELECT COUNT(ID)\nFROM accounts\nGROUP BY YEAR(created), MONTH(created)\n","comment-nous-pouvons-le-résoudre-avec-mongodb","Comment nous pouvons le résoudre avec MongoDB","map = function() { \nvar key = {   y : this.\\_id.getTimestamp().getFullYear(),   \n         m : this.\\_id.getTimestamp().getMonth()+1   };  \nemit(key,1); \n}\n","reduce = function(key, values) { \nreturn Array.sum(values); \n}\n","db.accounts.mapReduce( map , reduce , { out : “account\\_stats” } )\ndb.account\\_stats.find()\n{ \"\\_id\" : { \"year\" : 2013, \"month\" : 5 }, \"value\" : 200 }\n{ \"\\_id\" : { \"year\" : 2013, \"month\" : 6 }, \"value\" : 145 }\n{ \"\\_id\" : { \"year\" : 2013, \"month\" : 7 }, \"value\" : 32 }\n{ \"\\_id\" : { \"year\" : 2013, \"month\" : 8 }, \"value\" : 45 }\n{ \"\\_id\" : { \"year\" : 2013, \"month\" : 9 }, \"value\" : 320 }\n","db.accounts.mapReduce( map , reduce , { \nout : { merge: \"account\\_stats\" },\nquery : { \\_id: { $gt: objectIdWithTimestamp(2013\u002F09\u002F01') } },\n} )\n","strong","function objectIdWithTimestamp(timestamp)\n{\n    \u002F\u002F Convert string date to Date object (otherwise assume timestamp is a date)\n    if (typeof(timestamp) == 'string') {\n        timestamp = new Date(timestamp);\n    }\n\n    \u002F\u002F Convert date object to hex seconds since Unix epoch\n    var hexSeconds = Math.floor(timestamp\u002F1000).toString(16);\n\n    \u002F\u002F Create an ObjectId with that hex timestamp\n    var constructedObjectId = ObjectId(hexSeconds + \"0000000000000000\");\n\n    return constructedObjectId\n} \n","http:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F8749971\u002Fcan-i-query-mongodb-objectid-by-date",3))