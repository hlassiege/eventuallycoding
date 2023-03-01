export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D){return {data:{"/articles/2014/01/24/maintenir-vos-donnees-avec-mongeez":{_path:"\u002Farticles\u002F2014\u002F01\u002F24\u002Fmaintenir-vos-donnees-avec-mongeez",_dir:"24",_draft:m,_partial:m,_locale:e,_empty:m,title:"Maintenir vos données avec Mongeez",description:"[![mongo](\u002Fimages\u002Faf912-mongo.jpg)](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2014\u002F01\u002Faf912-mongo.jpg)Vous connaissez peut-être [Liquibase](http:...",id:"1024",date:"2014-01-24",tags:["mongodb"],img:"af912-mongo.jpg",cover:"cover7.jpg",readingTime:{text:"6 min read",minutes:5.875,time:352500,words:1175},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:j,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2014\u002F01\u002Faf912-mongo.jpg",rel:[k]},children:[{type:a,tag:"img",props:{alt:"mongo",src:"\u002Fimages\u002Faf912-mongo.jpg"},children:[]}]},{type:b,value:"Vous connaissez peut-être "},{type:a,tag:j,props:{href:"http:\u002F\u002Fwww.liquibase.org\u002F",rel:[k]},children:[{type:b,value:"Liquibase"}]},{type:b,value:", "},{type:a,tag:j,props:{href:"http:\u002F\u002Fwww.dbmaintain.org\u002Foverview.html",rel:[k]},children:[{type:b,value:"DBMaintain"}]},{type:b,value:" ou "},{type:a,tag:j,props:{href:"http:\u002F\u002Fflywaydb.org\u002F",rel:[k]},children:[{type:b,value:"Flyway"}]},{type:b,value:" ? Si ce n'est pas le cas, je vous conseille d'y jeter un œil."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le principe de ces outils est simple, il vous permet de versionner et d’exécuter les scripts permettant de faire évoluer vos schémas et vos données."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Une des applications de ces outils vous permet de déployer vos scripts de mises à jour en même temps que votre code applicatif évitant ainsi d'avoir un code applicatif qui change tandis que votre schéma n'est plus en accord avec celui-ci. Pour l'anecdote, c'est sur ce principe que Jira fonctionne par exemple. Lorsque vous mettez à jour le logiciel vous n'avez aucun script SQL à passer. C'est Jira qui s'occupe de mettre son schéma et ses données à jour au démarrage."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je vous propose de découvrir Mongeez qui a pour but de fournir le même type de fonctionnalités pour MongoDB."}]},{type:a,tag:"blockquote",props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Mais ? MongoDB est schemaless, on a aucun schéma à mettre à jour ?! Ca sert à rien ton outil !"}]}]},{type:a,tag:n,props:{id:q},children:[{type:b,value:r}]},{type:a,tag:c,props:{},children:[{type:b,value:"Revenons un instant sur cette notion de \"schema less\" que beaucoup nous vendent comme une panacée extraordinaire.  On dit d'une base qu'elle est \"schema less\" si la définition des éléments dans un ensemble de données n'est pas fixé par la base de données. Et apparemment ce serait miraculeux, on pourrait désormais mettre des choux et des carottes dans n'importe quel ensemble ou rajouter des propriétés sans aucun impact."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Démystifions un peu en prenant MongoDB qui justement est vendu comme \"schema less\"."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tout d'abord, MongoDB contient des informations sur les données qu'il contient :"}]},{type:a,tag:g,props:{id:"les-index"},children:[{type:b,value:"Les index"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ceux-ci sont posés sur des propriétés d'une collection. Ils définissent par exemple qu'une propriété est de type géospatial, qu'elle peut-être unique etc... Toute la stratégie d'indexation repose sur le fait que vous avez un schéma implicite."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et ce n'est pas propre à MongoDB. Je ne vous parle même pas des stratégies d'indexation d'elasticsearch (via les mappings) qui sont loin d'être neutres lorsque vous décidez de les changer."}]},{type:a,tag:g,props:{id:"les-clés-de-partitionnement"},children:[{type:b,value:"Les clés de partitionnement."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Là c'est encore plus contraignant. Si vous décidez de recourir au sharding, vous devez définir des clés de sharding\u002Fpartitionnement. Vos données seront réparties sur les différents shards à partir de cette clé."}]},{type:a,tag:g,props:{id:"les-relations-entre-objets"},children:[{type:b,value:"Les relations entre objets"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Lorsque vous avez une association entre deux objets, vous avez plusieurs choix :"}]},{type:a,tag:o,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"embarquer un objet dans l'autre"}]},{type:a,tag:f,props:{},children:[{type:b,value:"faire référence à cette objet par son ObjectId (ou pas une DBRef)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Prenons un exemple :"}]},{type:a,tag:d,props:{code:s,language:l,meta:h},children:[{type:a,tag:i,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:s}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cette modélisation ne sera pas traité de la même façon dans votre code applicatif que celle-ci :"}]},{type:a,tag:d,props:{code:t,language:l,meta:h},children:[{type:a,tag:i,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:t}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"En réalité, être \"schema less\" a une contrepartie. Si votre base de données gère moins d'informations sur la structure de vos données, rien n'est magique, c'est votre code applicatif qui va le faire pour elle :"}]},{type:a,tag:o,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"il s'attend à trouver un ensemble de données similaires au sein d'une collection MongoDB. On peut avoir quelques propriétés différentes entre deux documents mais on évite d'avoir des choux et des carottes ("},{type:a,tag:j,props:{href:"http:\u002F\u002Fdocs.mongodb.org\u002Fmanual\u002Freference\u002Fglossary\u002F#term-collection",rel:[k]},children:[{type:b,value:"en tout cas ce n'est pas préconisé dans les bonnes pratiques"}]},{type:b,value:")."}]},{type:a,tag:f,props:{},children:[{type:b,value:"les index définis sur votre base vont être utilisés dans les requêtes"}]},{type:a,tag:f,props:{},children:[{type:b,value:"s'il y a partitionnement, la clé devra toujours être présente lors d'une insertion de nouvel objet"}]},{type:a,tag:f,props:{},children:[{type:b,value:"la manière de définir une relation entre deux objets sera géré applicativement (et aura un impact sur le nombre de requêtes)"}]}]},{type:a,tag:n,props:{id:u},children:[{type:b,value:v}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ok, donc nous venons de voir qu'une partie du \"schéma\" reposait dans le code applicatif. Du coup, à quoi va me servir un outil de mise à jour du schéma ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"D'une part, si vous avez bien lu ce dont je ne doute pas, vous aurez noté que les index par exemple peuvent être ajoutés ou enlevés sous forme de patch."}]},{type:a,tag:c,props:{},children:[{type:b,value:"D'autre part, si effectivement ce type d'outil propose de réaliser des mises à jour de schéma, il propose aussi de mettre à jour vos données. Et c'est \"LA\" partie la plus importante."}]},{type:a,tag:c,props:{},children:[{type:b,value:"En fait, même pour une base relationnelle, faire un ALTER TABLE pour ajouter ou enlever une colonne c'est simple, la vraie difficulté commence lorsqu'il faut reporter une modification de schéma sur vos données existantes : fusion de propriétés venant de deux colonnes, extraction d'une propriété venant d'une colonne, dénormalisation d'une donnée (assez courant avec MongoDB), insertion d'une donnée par défaut etc..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Voyons cela en détail."}]},{type:a,tag:n,props:{id:w},children:[{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mongeez vous propose un fonctionnement très proche de ce que l'on retrouve chez Liquibase :"}]},{type:a,tag:o,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"lecture de la dernière version de changements en base de données"}]},{type:a,tag:f,props:{},children:[{type:b,value:"lecture des fichiers de changements listés dans un fichier de configuration"}]},{type:a,tag:f,props:{},children:[{type:b,value:"déduction et exécution des changements à passer sur la base de données"}]}]},{type:a,tag:g,props:{id:"première-étape-instanciation-dun-lanceur-mongeez"},children:[{type:b,value:"Première étape, instanciation d'un lanceur Mongeez :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tout d'abord, créez votre lanceur Mongeez. Celui-ci va être en charge d'exécuter les scripts de mises à jour au démarrage de l'application. Ici par exemple avec une configuration Spring par annotation :"}]},{type:a,tag:d,props:{code:y,language:"java",meta:h},children:[{type:a,tag:i,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:y}]}]}]},{type:a,tag:g,props:{id:"seconde-étape-listez-les-changements-à-passer"},children:[{type:b,value:"Seconde étape, listez les changements à passer :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les changements (changesets) sont listés dans un fichier que nous avons appelé mongeez.xml dans le code précédent. Ce fichier contient la liste des changements à apporter dans l'ordre :"}]},{type:a,tag:d,props:{code:z,language:"xml",meta:h},children:[{type:a,tag:i,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:z}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"On remarquera que l'on peut avoir des changements décrits en XML ou Javascript."}]},{type:a,tag:g,props:{id:"troisième-étape-écrivez-vos-fichiers-de-changements"},children:[{type:b,value:"Troisième étape, écrivez vos fichiers de changements :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous pouvez regrouper plusieurs changements dans un fichier de changements. Je prends ici l'exemple issu des tests de Mongeez en Javascript :"}]},{type:a,tag:d,props:{code:A,language:l,meta:h},children:[{type:a,tag:i,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:A}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"La première ligne de commentaire a son importance. Elle précise l'auteur et le numéro du changement à appliquer. Ici c'est un changeset très simple qui se contente d'insérer des données."}]},{type:a,tag:g,props:{id:"le-résultat"},children:[{type:b,value:"Le résultat"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Une fois que le Runner se sera déclenché, voici le résultat d'un show collections sur votre base de données :"}]},{type:a,tag:d,props:{code:B,meta:h},children:[{type:a,tag:i,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:B}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous noterez l'existence d'une collection mongeez qui stocke le résultat des changements déjà passés :"}]},{type:a,tag:d,props:{code:C,language:l,meta:h},children:[{type:a,tag:i,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:C}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cette collection permet à Mongeez de connaitre quels sont les changements passés, les auteurs et les dates d'application de chaque patch."}]},{type:a,tag:c,props:{},children:[{type:b,value:"C'est déjà terminé car ce n'est pas plus compliqué que ça."}]},{type:a,tag:c,props:{},children:[{type:b,value:"A vos claviers."}]}],toc:{title:e,searchDepth:D,depth:D,links:[{id:q,depth:p,text:r},{id:u,depth:p,text:v},{id:w,depth:p,text:x}]}},_type:"markdown",_id:"content:articles:2014:01:24:maintenir-vos-donnees-avec-mongeez.md",_source:"content",_file:"articles\u002F2014\u002F01\u002F24\u002Fmaintenir-vos-donnees-avec-mongeez.md",_extension:"md"}},prerenderedAt:1677656750018}}("element","text","p","code","","li","h4",null,"pre","a","nofollow","javascript",false,"h3","ul",3,"schema-less","Schema less ?","  db.articles.findOne() \n  {\n    '_id' : 1,\n    'title' : 'Mongeez',\n    'content' : '....',\n    'comments' : [1,2,3]  =\u003E 1 2 et 3 étant respectivements des Ids dans la collection 'comments'\n  }\n","db.articles.findOne() \n{\n '_id' : 1,\n 'title' : 'Mongeez',\n 'content' : '....',\n 'comments' : [{'author' : 'hugo', 'content': '...'},{'author' : 'jb', 'content': '...'},...]\n}\n","pas-de-schéma-pas-de-patch","Pas de schéma, pas de patch ?","mongeez-en-quelques-étapes","Mongeez en quelques étapes","@Configuration\npublic class MongoConfig () {\n\n    @Bean\n    public MongeezRunner mongeezRunner() {\n        MongeezRunner runner = new MongeezRunner();\n        runner.setExecuteEnabled(true);\n        runner.setMongo(mongo());\n        runner.setDbName(\"maBase\");\n        runner.setFile(new ClassPathResource(\"mongeez.xml\"));\n        return runner;\n    }\n\n    \u002F\u002F... définition des autres beans nécessaires à Mongo\n}\n","\u003CchangeFiles\u003E\n\u003Cfile path=\"changeset-01.xml\"\u002F\u003E\n\u003Cfile path=\"changeset-02.js\"\u002F\u003E\n\u003C\u002FchangeFiles\u003E\n","\u002F\u002Fchangeset mlysaght:ChangeSet-1\ndb.organization.insert({\n\"Name\" : \"10Gen\", \"Location\" : \"NYC\", DateFounded : {\"Year\" : 2008, \"Month\" : 01, \"day\" :01}\n});\ndb.organization.insert({\n \"Name\" : \"SecondMarket\", \"Location\" : \"NYC\", DateFounded : {\"Year\" : 2004, \"Month\" : 05, \"day\" :04}\n});\n","\\\u003E show collections\nmongeez\norganization\nsystem.indexes\nuser\n","\\\u003E db.mongeez.find().pretty()\n{\n        \"\\_id\" : ObjectId(\"52ef8e8e53916204e2287071\"),\n        \"type\" : \"configuration\",\n        \"supportResourcePath\" : true\n}\n{\n        \"\\_id\" : ObjectId(\"52ef8e8e53916204e2287072\"),\n        \"type\" : \"changeSetExecution\",\n        \"file\" : \"changeset1.js\",\n        \"changeId\" : \"ChangeSet-1\",\n        \"author\" : \"mlysaght\",\n        \"resourcePath\" : \"changeset1.js\",\n        \"date\" : \"2014-02-03T13:41:50+01:00\"\n}\n{\n        \"\\_id\" : ObjectId(\"52ef8e8e53916204e2287073\"),\n        \"type\" : \"changeSetExecution\",\n        \"file\" : \"changeset1.js\",\n        \"changeId\" : \"ChangeSet-2\",\n        \"author\" : \"mlysaght\",\n        \"resourcePath\" : \"changeset1.js\",\n        \"date\" : \"2014-02-03T13:41:50+01:00\"\n}\n{\n        \"\\_id\" : ObjectId(\"52ef8e8e53916204e2287074\"),\n        \"type\" : \"changeSetExecution\",\n        \"file\" : \"changeset2.xml\",\n        \"changeId\" : \"ChangeSet-1\",\n        \"author\" : \"mlysaght\",\n        \"resourcePath\" : \"changeset2.xml\",\n        \"date\" : \"2014-02-03T13:41:50+01:00\"\n}\n{\n        \"\\_id\" : ObjectId(\"52ef8e8e53916204e2287075\"),\n        \"type\" : \"changeSetExecution\",\n        \"file\" : \"changeset2.xml\",\n        \"changeId\" : \"ChangeSet-2\",\n        \"author\" : \"mlysaght\",\n        \"resourcePath\" : \"changeset2.xml\",\n        \"date\" : \"2014-02-03T13:41:50+01:00\"\n}\n",2))