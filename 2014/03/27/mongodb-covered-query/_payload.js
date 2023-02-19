export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){return {data:{"/articles/2014/03/27/mongodb-covered-query":{_path:"\u002Farticles\u002F2014\u002F03\u002F27\u002Fmongodb-covered-query",_dir:"27",_draft:g,_partial:g,_locale:h,_empty:g,title:"Mongodb covered query",description:"[![mongo](\u002Fimages\u002Faf912-mongo.jpg)](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2014\u002F01\u002Faf912-mongo.jpg)Aujourd’hui je souhaite revenir un petit pe...",id:"1070",date:"2014-03-27",categories:["waza"],tags:["mongodb"],img:"af912-mongo.jpg",cover:"cover4.jpg",readingTime:{text:"6 min read",minutes:5.81,time:348600,words:1162},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2014\u002F01\u002Faf912-mongo.jpg",rel:[f]},children:[{type:a,tag:i,props:{alt:"mongo",src:"\u002Fimages\u002Faf912-mongo.jpg"},children:[]}]},{type:b,value:"Aujourd’hui je souhaite revenir un petit peu sur les mécanismes d’indexation de MongoDB. Récemment j’avais insisté sur le fait que la stratégie d’indexation était importante "},{type:a,tag:e,props:{href:"http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fmaintenir-vos-donnees-avec-mongeez\u002F",rel:[f]},children:[{type:b,value:"et fixait en partie votre schéma"}]},{type:b,value:". J’avais également parlé des "},{type:a,tag:e,props:{href:"http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Frecherche-textuelle-avec-mongodb\u002F",rel:[f]},children:[{type:b,value:"index full text"}]},{type:b,value:". Je compte continuer encore un peu sur ce thème et pour ce billet, nous allons aborder les covered query."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les covered query, kesako ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le concept est très simple, il s’agit d’une requête de sélection passant entièrement par un de vos index."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour rappel, un index est une sorte de dictionnaire inversé permettant de retrouver rapidement vos documents lors d’une recherche."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Faisons un parallèle avec la vie réelle."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Prenons l’annuaire téléphonique, il s’agit d’un index permettant de retrouver un numéro de téléphone via un nom, prénom et une adresse."}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2014\u002F03\u002F087e3-pagesjaunes.png",rel:[f]},children:[{type:a,tag:i,props:{alt:"pagesjaunes",src:"\u002Fimages\u002F087e3-pagesjaunes.png"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous avez pris l’habitude d’avoir que très peu d’opérations :"}]},{type:a,tag:j,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"saisie du nom\u002Fprénom et de la ville"}]},{type:a,tag:d,props:{},children:[{type:b,value:"cliquer sur “Trouver”"}]},{type:a,tag:d,props:{},children:[{type:b,value:"affichage du(des) résultats et des numéros de téléphone"}]},{type:a,tag:d,props:{},children:[{type:b,value:"appel"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si vous recherchez une entreprise, vous pouvez cependant trouver plus d’infos en cliquant sur le nom de l’entreprise. Vous avez une seconde page avec :"}]},{type:a,tag:j,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"des avis"}]},{type:a,tag:d,props:{},children:[{type:b,value:"des photos (du lieu)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"les transports en commun les plus proches"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous avez donc une action supplémentaire : l’affichage des informations détaillées."}]},{type:a,tag:c,props:{},children:[{type:b,value:"C’est évidemment moins rapide."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour revenir à MongoDB, on peut considérer que la première recherche est couverte par l’index. Vous cherchiez un numéro de téléphone, celui-ci est contenu dans l’index et affiché directement."}]},{type:a,tag:c,props:{},children:[{type:b,value:"La seconde recherche (les avis) n’est pas couverte par l’index, vous avez du aller chercher les informations détaillées en plus de la recherche dans l’index téléphonique."}]},{type:a,tag:c,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:"Sur une base de données, cela signifie que votre recherche n’a eu besoin que de parcourir l’index, car toutes les données que vous souhaitiez afficher étaient dans l’index."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mettons cela en pratique sur Mongo. Partons des profiles suivants :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"db.profile.find().pretty()\n{\n\"_id\" : \"jblemee\",\n\"firstName\" : \"Jean-Baptiste\",\n\"lastName\" : \"Lemée\",\n\"skills\" : [\n\"java\",\n\"spring\",\n\"redis\"\n]\n}{\n\"_id\" : \"ogirardot\",\n\"firstName\" : \"Olivier\",\n\"lastName\" : \"Girardot\",\n\"skills\" : [\n\"java\",\n\"python\",\n\"lucene\",\n\"nlp\"\n]\n}{\n\"_id\" : \"hlassiege\",\n\"firstName\" : \"Hugo\",\n\"lastName\" : \"Lassiege\",\n\"skills\" : [\n\"python\",\n\"java\",\n\"mongodb\"\n]\n}{\n\"_id\" : \"fbiville\",\n\"firstName\" : \"Florent\",\n\"lastName\" : \"Biville\",\n\"skills\" : [\n\"java\",\n\"spring\",\n\"neo4j\"\n]\n}{\n\"_id\" : \"nrey\",\n\"firstName\" : \"Nicolas\",\n\"lastName\" : \"Rey\",\n\"skills\" : [\n\"java\",\n\"react.js\",\n\"backbone\"\n]\n}{\n\"_id\" : \"vdoba\",\n\"firstName\" : \"Vincent\",\n\"lastName\" : \"Doba\",\n\"skills\" : [\n\"java\",\n\"puppet\",\n\"nlp\"\n]\n}{\n\"_id\" : \"jdray\",\n\"firstName\" : \"Jonathan\",\n\"lastName\" : \"Dray\",\n\"skills\" : [\n\"java\",\n\"python\",\n\"linkeddata\",\n\"search engine\"\n]\n}{\n\"_id\" : \"scorring\",\n\"firstName\" : \"Stuart\",\n\"lastName\" : \"Corring\",\n\"skills\" : [\n\"python\",\n\"angular\",\n\"knockout\",\n\"dev mobile\"\n]\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Réalisons un premier explain avec une recherche par lastName :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u003E db.profile.find({lastName : \"Lassiege\"}).explain()\n{\n\"cursor\" : \"BasicCursor\",\n\"isMultiKey\" : false,\n\"n\" : 1,\n\"nscannedObjects\" : 8,\n\"nscanned\" : 8,\n\"nscannedObjectsAllPlans\" : 8,\n\"nscannedAllPlans\" : 8,\n\"scanAndOrder\" : false,\n\"indexOnly\" : false,\n\"nYields\" : 0,\n\"nChunkSkips\" : 0,\n\"millis\" : 0,\n\"indexBounds\" : {"}]},{type:a,tag:l,props:{code:m,meta:null},children:[{type:a,tag:"pre",props:{},children:[{type:a,tag:l,props:{__ignoreMap:h},children:[{type:b,value:m}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nous avons affaire à un full scan. Nous allons donc ajouter un index :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"db.profile.ensureIndex({lastName : 1})"}]},{type:a,tag:n,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"db.profile.find({lastName : \"Lassiege\"}).explain()\n{\n\"cursor\" : \"BtreeCursor lastName_1\",\n\"isMultiKey\" : false,\n\"n\" : 1,\n\"nscannedObjects\" : 1,\n\"nscanned\" : 1,\n\"nscannedObjectsAllPlans\" : 1,\n\"nscannedAllPlans\" : 1,\n\"scanAndOrder\" : false,\n\"indexOnly\" : false,\n\"nYields\" : 0,\n\"nChunkSkips\" : 0,\n\"millis\" : 0,\n\"indexBounds\" : {\n\"lastName\" : [\n[\n\"Lassiege\",\n\"Lassiege\"\n]\n]\n},\n\"server\" : \"HUGO\"\n}"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Désormais nous passons par l’index."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cependant, nous allons nous intéresser à cette partie de l’explain :"}]},{type:a,tag:c,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:"\"indexOnly\" : false"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:" Nous n’avons pas utilisé seulement l’index. Pour afficher le firstName ou les skills, il a fallu interroger l’index puis la collection."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si on souhaitait utiliser une covered query, il faudrait que les informations à afficher soient uniquement dans l’index. Pour cela nous pouvons utiliser une projection et inclure uniquement les champs souhaités."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Une projection c’est un peu l’équivalent d’un SELECT champ1, champ2 en SQL.  Avec MongoDB on donne en second argument du find un objet qui décrit les champs à inclure\u002Fexclure du résultat :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u003E db.profile.find({lastName : \"Lassiege\"}, {lastName:1, _id:0})\n{ \"lastName\" : \"Lassiege\" }"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Avec un explain :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u003E db.profile.find({lastName : \"Lassiege\"}, {lastName:1, _id:0}).explain()\n{\n\"cursor\" : \"BtreeCursor lastName_1\",\n\"isMultiKey\" : false,\n\"n\" : 1,\n\"nscannedObjects\" : 0,\n\"nscanned\" : 1,\n\"nscannedObjectsAllPlans\" : 0,\n\"nscannedAllPlans\" : 1,\n\"scanAndOrder\" : false,\n\"indexOnly\" : true,\n\"nYields\" : 0,\n\"nChunkSkips\" : 0,\n\"millis\" : 0,\n\"indexBounds\" : {\n\"lastName\" : [\n[\n\"Lassiege\",\n\"Lassiege\"\n]\n]\n},\n\"server\" : \"HUGO\"\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cette fois nous avons indexOnly:true. Nous n’avons pas été interroger la collection."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Oui, bon, sauf qu’on affiche ce qu’on recherchait. Pas très utile..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Imaginons que nous souhaitions afficher uniquement firstName et lastName, alors il serait possible pour notre cas d’usage d’ajouter le firstName dans l’index via un index composé. Ce qui nous permettrait par la suite d’afficher lastName et firstName sans jamais repasser par la collection. Essayons :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"db.profile.ensureIndex({lastName : 1, firstName : 1})"}]},{type:a,tag:n,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"db.profile.find({lastName : \"Lassiege\"}, {lastName:1, firstName:1, _id:0}).explain()\n{\n\"cursor\" : \"BtreeCursor lastName_1\",\n\"isMultiKey\" : false,\n\"n\" : 1,\n\"nscannedObjects\" : 1,\n\"nscanned\" : 1,\n\"nscannedObjectsAllPlans\" : 1,\n\"nscannedAllPlans\" : 1,\n\"scanAndOrder\" : false,\n\"indexOnly\" : false,\n\"nYields\" : 0,\n\"nChunkSkips\" : 0,\n\"millis\" : 0,\n\"indexBounds\" : {\n\"lastName\" : [\n[\n\"Lassiege\",\n\"Lassiege\"\n]\n]\n},\n\"server\" : \"HUGO\"\n}"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"indexOnly : false  ?!?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Naivement on aurait pu s’attendre à utiliser uniquement l’index. Cependant dans ce cas présent, la requête a utilisé le premier index que nous avions défini plus haut : lastName_1. Et cet index ne contient pas le champ firstName."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si nous voulons arriver à nos fins, nous allons devoir forcer le passage par le nouvel index via un hint :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u003E db.profile.find({lastName : \"Lassiege\"}, {lastName:1, firstName:1, _id:0}).hint({\"lastName\":1,\"firstName\":1}).explain()\n{\n\"cursor\" : \"BtreeCursor lastName_1_firstName_1\",\n\"isMultiKey\" : false,\n\"n\" : 1,\n\"nscannedObjects\" : 0,\n\"nscanned\" : 1,\n\"nscannedObjectsAllPlans\" : 0,\n\"nscannedAllPlans\" : 1,\n\"scanAndOrder\" : false,\n\"indexOnly\" : true,\n\"nYields\" : 0,\n\"nChunkSkips\" : 0,\n\"millis\" : 0,\n\"indexBounds\" : {\n\"lastName\" : [\n[\n\"Lassiege\",\n\"Lassiege\"\n]\n],\n\"firstName\" : [\n[\n{\n\"$minElement\" : 1\n},\n{\n\"$maxElement\" : 1\n}\n]\n]\n},\n\"server\" : \"HUGO\"\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:" Et cette fois, nous avons bien \"indexOnly\" : true."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Reessayons cette fois-ci avec les skills."}]},{type:a,tag:c,props:{},children:[{type:b,value:"On ajoute un index composé :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u003E db.profile.ensureIndex({lastName:1, skills:1})"}]},{type:a,tag:c,props:{},children:[{type:b,value:"On réalise une requête avec projection sur lastName et skills en forcant l’utilisation de notre nouvel index :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u003E db.profile.find({lastName : \"Lassiege\"}, {lastName:1, skills: 1, _id:0}).hint({lastName:1, skills:1})\n{ \"lastName\" : \"Lassiege\", \"skills\" : [  \"python\",  \"java\",  \"mongodb\" ] }"}]},{type:a,tag:c,props:{},children:[{type:b,value:"On regarde l’explain :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u003E db.profile.find({lastName : \"Lassiege\"}, {lastName:1, skills: 1, _id:0}).hint({lastName:1, skills:1}).explain()\n{\n\"cursor\" : \"BtreeCursor lastName_1_skills_1\",\n\"isMultiKey\" : true,\n\"n\" : 1,\n\"nscannedObjects\" : 1,\n\"nscanned\" : 3,\n\"nscannedObjectsAllPlans\" : 1,\n\"nscannedAllPlans\" : 3,\n\"scanAndOrder\" : false,\n\"indexOnly\" : false,\n\"nYields\" : 0,\n\"nChunkSkips\" : 0,\n\"millis\" : 0,\n\"indexBounds\" : {\n\"lastName\" : [\n[\n\"Lassiege\",\n\"Lassiege\"\n]\n],\n\"skills\" : [\n[\n{\n\"$minElement\" : 1\n},\n{\n\"$maxElement\" : 1\n}\n]\n]\n},\n\"server\" : \"HUGO\"\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et le résultat nous montre qu’un index sur un tableau ne permet pas d’utiliser une covered query."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Voilà, j’espère que ce billet fut intéressant pour ceux qui utilisent Mongodb et qui ne connaissaient pas le concept de covered query."}]},{type:a,tag:c,props:{},children:[{type:b,value:"A bientôt."}]}],toc:{title:h,searchDepth:o,depth:o,links:[]}},_type:"markdown",_id:"content:articles:2014:03:27:mongodb-covered-query.md",_source:"content",_file:"articles\u002F2014\u002F03\u002F27\u002Fmongodb-covered-query.md",_extension:"md"},"/articles/2014/03/27/mongodb-covered-query/relatedArticles":[]},prerenderedAt:1676806140363}}("element","text","p","li","a","nofollow",false,"","img","ul","strong","code","    },\n    \"server\" : \"HUGO\"\n","blockquote",2))