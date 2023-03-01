export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y){return {data:{"/articles/2013/11/05/comparaison-de-moteurs-de-base-de-donnees-pour-du-stockage-de-logs":{_path:"\u002Farticles\u002F2013\u002F11\u002F05\u002Fcomparaison-de-moteurs-de-base-de-donnees-pour-du-stockage-de-logs",_dir:"05",_draft:s,_partial:s,_locale:w,_empty:s,title:"Comparaison de moteurs de base de données pour du stockage de logs",description:"Il y a un an je m’étais aventuré à tester plusieurs bases Nosql, l’objectif étant pour moi d’apprivoiser les moteurs, de comprendre leurs usages et de...",id:"980",date:"2013-11-05",categories:["waza"],tags:["bench",m,k,"logs",n,t],img:"22faa-mongodb.png",cover:"cover2.jpg",readingTime:{text:"12 min read",minutes:11.135,time:668100,words:2227},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:"Il y a un an je m’étais aventuré à tester plusieurs bases Nosql, l’objectif étant pour moi d’apprivoiser les moteurs, de comprendre leurs usages et de voir si nous pouvions en faire bon usage sur "},{type:a,tag:d,props:{href:"http:\u002F\u002Fwww.hopwork.com\u002F",rel:[e]},children:[{type:b,value:"HopWork"}]},{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cette mini étude était paru sur ce même blog :"}]},{type:a,tag:i,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:y,rel:[e]},children:[{type:b,value:y}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:z,rel:[e]},children:[{type:b,value:z}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:A,rel:[e]},children:[{type:b,value:A}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:B,rel:[e]},children:[{type:b,value:B}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Evidemment comme tout “bench” on pouvait y faire pas mal de critiques, j’utilisais un environnement Windows très éloigné de la prod, le jeu de données contenait peu de variations ce qui permettait aux différents maillons de la chaîne d’optimiser au maximum les appels que je faisais."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si certains ont pris le bench au pied de la lettre, désolé, l’objectif pour moi c’était de me familiariser avec les API et de comprendre les cas d’usage et de voir si, grosso modo, c’était déconnant ou pas en terme de vitesse."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et cette année j’ai eu la chance de travailler sur une architecture de collecte et traitement de logs pour laquelle j’ai refait des tests plus poussés dans de meilleures conditions sur :"}]},{type:a,tag:i,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"Elasticsearch"}]},{type:a,tag:f,props:{},children:[{type:b,value:"MongoDb"}]},{type:a,tag:f,props:{},children:[{type:b,value:o}]},{type:a,tag:f,props:{},children:[{type:b,value:p}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sujet que je vous invite à lire ici."}]},{type:a,tag:h,props:{id:C},children:[{type:b,value:D}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme je l’ai dit plus haut, nous cherchions à construire une architecture de collecte et traitement de logs."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ces logs sont des logs techniques (des composants systèmes) composé de couples clé valeur."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cette architecture devait pouvoir être hébergé en Cloud et être utilisé à distance (du SAAS). Le volume de logs sans être démentiel pouvait attendre 500Gb\u002Fjour."}]},{type:a,tag:c,props:{},children:[{type:b,value:"La charge en lecture devait être relativement mineure, réservé à quelques admins. Par contre les requêtes peuvent être complexes et porter sur plusieurs “champs” du log."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour ces tests, j’ai eu la chance de bénéficer de 4 dedibox classic de 8Gb de ram et 4 coeurs sur lesquelles nous avons installé une debian 7. Grace à cela nous avons pu monter des architectures clusterisées."}]},{type:a,tag:h,props:{id:E},children:[{type:b,value:F}]},{type:a,tag:c,props:{},children:[{type:b,value:"4 bases ont été évaluées dans ce contexte :"}]},{type:a,tag:i,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"ElasticSearch"}]},{type:a,tag:f,props:{},children:[{type:b,value:u}]},{type:a,tag:f,props:{},children:[{type:b,value:o}]},{type:a,tag:f,props:{},children:[{type:b,value:p}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pourquoi celles-ci ? Pour les 3 premières car elles sont reconnues pour être utilisé dans ce type de contexte ou parce que c’était les bases connus par les membres du projet. Mais il est fort probable que d’autres bases répondent au besoin."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour Mysql, elle était anciennement utilisé sur le projet. Son utilisation posait problème mais l’ancienne application tournait toujours en Mysql 3.x et aurait sans doute bien profité d’un peu de tuning. Instinctivement ce moteur ne paraissait plus adapté mais il fallait quand même en être sûr."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et pour les quelques uns qui ne manqueront pas de poser la question “pourquoi pas Hadoop ?” Tout simplement parce que 500Gb par jour, stocké sur 3 jour ca reste une petite volumétrie  qui ne nécessite pas un tel tank.  Mais pour en dire un peu plus, Hadoop est bien prévu pour l'archivage des logs long termes."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Voyons en détail les architectures de chacune de ces bases."}]},{type:a,tag:q,props:{id:n},children:[{type:b,value:u}]},{type:a,tag:c,props:{},children:[{type:b,value:"MongoDB a été utilisé en cluster (replica Set) de 3 machines. MongoDB fait partie des systèmes "},{type:a,tag:d,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FCAP_theorem",rel:[e]},children:[{type:b,value:"CP"}]},{type:b,value:" (cohérent et résistant au morcellement). Les écritures sont faites sur du master single node. Les lectures par défaut sont effectuées sur le master mais peuvent être effectuées sur les secondaires."}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2013\u002F11\u002F22faa-mongodb.png",rel:[e]},children:[{type:a,tag:j,props:{alt:n,src:"\u002Fimages\u002F22faa-mongodb.png"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le mode d'acquittement choisi ("},{type:a,tag:d,props:{href:"http:\u002F\u002Fdocs.mongodb.org\u002Fmanual\u002Fcore\u002Fwrite-concern\u002F",rel:[e]},children:[{type:b,value:"WriteConcern"}]},{type:b,value:") vérifie que les données ont été reçues et acquittées par une majorité de nœuds (ici 2) afin de garantir la non perte de données, ce que nous vérifierons cependant en cours de test."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Au début nous avons utilisé des "},{type:a,tag:d,props:{href:"http:\u002F\u002Fdocs.mongodb.org\u002Fmanual\u002Fcore\u002Fcapped-collections\u002F",rel:[e]},children:[{type:b,value:"capped collection"}]},{type:b,value:" qui ont l'avantage de fixer une taille limite aux logs stockés en supprimant les anciens logs lorsque la taille limite est atteinte. En gros ce sont des logs tournants sur la taille. Cette taille étant préalloué, en principe l’insertion est optimisé."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cependant le gain en insertion s'est révélé nul (ce qui me surprend encore et qu’il faudra que j’investigue) et nous sommes revenus sur des collections non cappés."}]},{type:a,tag:c,props:{},children:[{type:b,value:"L'utilisation "},{type:a,tag:d,props:{href:"http:\u002F\u002Fdocs.mongodb.org\u002Fmanual\u002Ftutorial\u002Fexpire-data\u002F",rel:[e]},children:[{type:b,value:"d'index TTL"}]},{type:b,value:" (time to live) nous a permis d'obtenir une fonctionnalité équivalente, à savoir la suppression des logs trop vieux de x jours. En fait, les index TTL sont même bien plus fins qu’un roulement sur la taille lorsqu’on veut conserver un nombre de jours fixes."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Afin de satisfaire des performances normales en lecture, il a fallu placer un index par champ."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nous avons utilisé du bulk insert par lot de 5000."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nous n'avons pas mis en place de Sharding ce qui aurait beaucoup plus impactant en terme de nombres de machines."}]},{type:a,tag:c,props:{},children:[{type:a,tag:l,props:{},children:[{type:b,value:"Attention à ne pas prendre la version par défaut sous debian. Il s’agit de la 2.0.4 qui est TRES loin d’être une version recommandé aujourd’hui."}]}]},{type:a,tag:q,props:{id:k},children:[{type:b,value:k}]},{type:a,tag:c,props:{},children:[{type:b,value:"elasticsearch a été utilisé en cluster de 3 nœuds. Un nœud contient plusieurs shards (une répartition de la donnée) et ces shards sont répliqués sur chaque nœud du cluster."}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2013\u002F11\u002F35850-elasticsearch.png",rel:[e]},children:[{type:a,tag:j,props:{alt:k,src:"\u002Fimages\u002F35850-elasticsearch.png"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les caractéristiques intéressantes de elasticsearch sont ses capacités de recherches avancées et sa rapidité de requêtage."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nous avons utilisé une configuration avec 5 shards et 1 replicas."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme pour MongoDB, nous avons utilisé des "},{type:a,tag:d,props:{href:"http:\u002F\u002Fwww.elasticsearch.org\u002Fguide\u002Fen\u002Felasticsearch\u002Freference\u002Fcurrent\u002Fmapping-ttl-field.html",rel:[e]},children:[{type:b,value:"index TTL"}]},{type:b,value:" sur les documents afin d’avoir des logs tournants sur leur âge."}]},{type:a,tag:q,props:{id:m},children:[{type:b,value:o}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cassandra a été utilisé en mode Cluster de 3 nœuds. Cassandra n'a pas de maître qui centralise les écritures et lectures, ce qui aurait du le rendre plus rapide en écriture que MongoDB. Les tests nous ont démontré le contraire. Cassandra propose de paramétrer la cohérence attendue tout comme MongoDB en précisant le nombre de nœuds pour lesquels ont veut un acquittement. Pour nos tests nous demanderons l'acquittement par la majorité des nœuds afin de garantir la non-perte de données. Par contre nous pourrons accepter une lecture sur un seul nœud, la cohérence en lecture étant secondaire."}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2013\u002F11\u002F05fac-cassandra.png",rel:[e]},children:[{type:a,tag:j,props:{alt:m,src:"\u002Fimages\u002F05fac-cassandra.png"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme pour MongoDB, pour garantir des performances acceptables en lecture il a été nécessaire de placer des index sur chaque colonne."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour être complet, il s’agissait de la base que nous ne connaissions pas avant le bench. Il y a fort à parier que nous ayons loupé des paramétrages\u002Ftunings importants."}]},{type:a,tag:q,props:{id:t},children:[{type:b,value:p}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et là commence l’enfer… Mysql devait être utilisé en mode cluster."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sous Debian il existe "},{type:a,tag:d,props:{href:"http:\u002F\u002Fcodership.com\u002Fcontent\u002Fusing-galera-cluster",rel:[e]},children:[{type:b,value:"Galera"}]},{type:b,value:" pour réaliser un cluster Mysql. Malheureusement ce paquet porte très bien son nom et nous n’avons pas réussi à l’installer dans les temps. Il a fallu tester Mysql en mode single node."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dommage qu’un produit aussi ancien soit si complexe à installer en cluster comparativement aux autres produits..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme pour MongoDB et Cassandra, pour garantir des performances acceptables en lecture il a été nécessaire de placer des index sur chaque colonne."}]},{type:a,tag:h,props:{id:G},children:[{type:b,value:H}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme il me semblait inconcevable de monter tout une architecture de bench jetable, j’ai décidé d’utiliser "},{type:a,tag:d,props:{href:I,rel:[e]},children:[{type:b,value:J}]},{type:b,value:" pour automatiser et reproduire simplement les install."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous trouverez d’ailleurs un article ainsi que les sources utilisé pour monter un cluster ES, MongoDB et Cassandra "},{type:a,tag:d,props:{href:"http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Ffabric-moi-un-cluster\u002F",rel:[e],title:"Fabric moi un cluster"},children:[{type:b,value:"sur un précédent article"}]},{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bien nous en a pris. Quand une des machines a du être remplacé pendant les tests nous étions bien contents d’avoir ces scripts."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je ne saurais que trop insister pour avoir des installations de benchs reproductibles. Pensez aussi à vos petits copains qui auront besoin de refaire ces tests dans quelques temps."}]},{type:a,tag:h,props:{id:K},children:[{type:b,value:L}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je remet ce que j’avais déjà mis dans un précédent billet :"}]},{type:a,tag:"blockquote",props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:v,props:{},children:[{type:a,tag:l,props:{},children:[{type:b,value:"Warning"}]},{type:b,value:" : une partie de ce billet traite d’un comparatif de performance, ce genre de comparatif n’engage que celui qui lui fait confiance"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:v,props:{},children:[{type:b,value:"Petit rappel pour les afficionados des benchmarks. Un benchmark sert, "},{type:a,tag:l,props:{},children:[{type:b,value:"entre autre"}]},{type:b,value:", à mettre en évidence des paramétrages et leur influence. On ne s’attache pas qu'à la mesure elle-même mais à la tendance et comment on l’a obtenu."}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:v,props:{},children:[{type:b,value:"Pour une différence de quelques millisecondes on pourra argumenter sur un paramétrage spécifique ou une manière de coder peu efficace. De toute façon il existera toujours des benchmark contradictoire. Sauf grosse bourde on peut quand même établir des conclusions lorsque les rapports sont vraiment importants mais un conseil, refaites les de votre côté si vous comptez engager votre tête là dessus"}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour ce bench spécifiquement nous avons du le réaliser en un court laps de temps avec peu d’expérience d’admin sur les moteurs évalués. Il existe des paramétrages de tuning pour chacune de ces bases qui peuvent influer sur les résultats et faire passer en tête l'une ou l'autre base, par exemple le nombre de shards sur elasticsearch, la taille des bulk insert, l'utilisation d'index etc..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bref, largement de quoi faire varier les résultats. Faites vous votre idée tout seul si vous envisagez d’utiliser l’une d’entre elles."}]},{type:a,tag:h,props:{id:M},children:[{type:b,value:N}]},{type:a,tag:c,props:{},children:[{type:b,value:"Quand on réalise un bench, il faut des métriques, normal. Pour nous, il s’agissait de mesurer la consommation de ressources pour une utilisation en Cloud."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nous avons donc mesuré les données suivantes :"}]},{type:a,tag:i,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"Taille de disque utilisée (prise en compte de l'overhead sur une donnée brute)"}]},{type:a,tag:f,props:{},children:[{type:b,value:"Nombre de logs perdus (pour les mauvaises langues qui pensaient que nous allions en perdre avec MongoDB, c’est faux, rien n’a été perdu)"}]},{type:a,tag:f,props:{},children:[{type:b,value:"Throughput (nombre d'insertions, nombre de lectures\u002Fseconde)"}]},{type:a,tag:f,props:{},children:[{type:b,value:"RAM"}]},{type:a,tag:f,props:{},children:[{type:b,value:"CPU"}]}]},{type:a,tag:O,props:{id:"mode-opératoire"},children:[{type:b,value:"Mode opératoire"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme je l’indiquais plus haut, j’ai eu la possibilité d’utiliser 4 machines Dedibox vierges pour ces tests. Les bases ont donc été installés en cluster sur 3 noeuds et un client de test a été installé sur la dernière machine."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ce client de test écrit en Python a un protocole relativement simple :"}]},{type:a,tag:i,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"lecture d’un fichier de 100Mo de logs en boucle"}]},{type:a,tag:f,props:{},children:[{type:b,value:"envoi de ces logs via pycassandra, pyes, pymongo ou pymysql en mode batch insert"}]},{type:a,tag:f,props:{},children:[{type:b,value:"calcul de stats sur le débit, les pertes, la taille etc..."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"En plus de ça "},{type:a,tag:d,props:{href:I,rel:[e]},children:[{type:b,value:J}]},{type:b,value:" est utilisé pour démarrer le client avec différents paramétrages sur nos postes locaux et pour aller collecter ensuite des métriques directement sur les machines."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Des tests ont été faits avec temporisation sur de longues périodes (4h), sans temporisation sur de courtes périodes (5min), avec des volumes faibles (\u003C30Mo) ou plus importants (500Go)."}]},{type:a,tag:h,props:{id:P},children:[{type:b,value:Q}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sur les insertions, malheureusement Cassandra ne nous a pas permis d'atteindre les 10M de lignes. Nous avons constamment rencontré des problèmes de timeout à partir de 3\u002F4 M de lignes."}]},{type:a,tag:c,props:{},children:[{type:b,value:"J’imagine que nous avons loupé quelque chose d’important en terme de mise en place."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Rappelez vous que Mysql ne fait aucune réplication de données, nous sommes en mode single node."}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2013\u002F11\u002F90288-resultat1.png",rel:[e]},children:[{type:a,tag:j,props:{alt:"resultat1",src:"\u002Fimages\u002F90288-resultat1.png"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2013\u002F11\u002F0463d-resultat2.png",rel:[e]},children:[{type:a,tag:j,props:{alt:"resultat2",src:"\u002Fimages\u002F0463d-resultat2.png"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"En performance pure, elasticsearch a montré de bonnes performances (208Mo\u002Fmin) qui sont restés linéaire avec la charge. Il réussit à être plus performant que Mysql malgré le fait d'être en cluster avec 1 replica."}]},{type:a,tag:h,props:{id:R},children:[{type:b,value:S}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2013\u002F11\u002F9661d-resultat3.png",rel:[e]},children:[{type:a,tag:j,props:{alt:"resultat3",src:"\u002Fimages\u002F9661d-resultat3.png"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cassandra n'a pas été évalué puisqu'il n'a pas réussi à prendre l'insertion de 10M de lignes."}]},{type:a,tag:c,props:{},children:[{type:b,value:"elasticsearch est le plus performant pour le critère qui nous intéressait le plus : la taille sur disque. Malgré un replica il stocke à peine 3.6Go en cumulé sur 3 disques pour 5 Go envoyé. MongoDB à l'inverse est le spécialiste en place consommé ! En effet il a tendance a rapidement "},{type:a,tag:d,props:{href:"http:\u002F\u002Fdocs.mongodb.org\u002Fmanual\u002Ffaq\u002Fstorage\u002F#why-are-the-files-in-my-data-directory-larger-than-the-data-in-my-database",rel:[e]},children:[{type:b,value:"préallouer des blocs de 1go sur le disque"}]},{type:b,value:" en quantité plus que nécessaire lorsqu’on le stresse."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mysql de son côté a la plus faible consommation RAM et CPU, ce qui laisse supposer qu'il aurait pu aller plus vite en écriture. Par contre avec l'utilisation d'un index par colonne, il utilise presque 40% d'espace disque supplémentaire par rapport à elasticsearch."}]},{type:a,tag:h,props:{id:T},children:[{type:b,value:U}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2013\u002F11\u002F07f0d-resultat4.png",rel:[e]},children:[{type:a,tag:j,props:{alt:"resultat4",src:"\u002Fimages\u002F07f0d-resultat4.png"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sur 10M d’enregistrements Mysql est le grand vainqueur sur les tests de lecture, suivi de Mongo et d'elasticsearch. Cependant les tests restent très bons dans les trois cas pour notre cas d'usage."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ce test "},{type:a,tag:l,props:{},children:[{type:b,value:"est malheureusement est loin d’être complet"}]},{type:b,value:" car 10M d’enregistrement est beaucoup trop loin de notre réalité. Mais le temps de domestiquer chaque base, de la tuner et d’y insérer 1 Milliard d’enregistrement via le réseau dépassait le temps alloué à ce sprint."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Seul elasticsearch a été poussé jusque là. "},{type:a,tag:l,props:{},children:[{type:b,value:"Et heureusement"}]},{type:b,value:", car sur 1 Milliard d’enregistrement on se rend vite compte que la RAM dispo sur la machine doit être suffisante pour monter une grosse partie des informations en mémoire. Nos pauvres 8 Go n’étaient largement pas suffisants, surtout avec l’utilisation de facettes."}]},{type:a,tag:O,props:{id:"conclusion-et-décision"},children:[{type:b,value:"Conclusion et décision"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ces test ont été très instructifs et en fin de compte nous avons penché pour elasticsearch. Il convenait à notre usage, nous permettait de rester dans les clous en terme de consommation de ressource et surtout nous a impressionné pour sa facilité de mise en place lors des tests."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et comme nous allons le voir sur le reste de l’architecture, il nous laissait la possibilité d’utiliser Kibana pour la visualisation des logs."}]},{type:a,tag:h,props:{id:V},children:[{type:b,value:W}]},{type:a,tag:c,props:{},children:[{type:b,value:"Eh bien le reste de l’architecture est assez “standard”. Standard car on commence à retrouver ce type de chaîne de collecte de logs un peu partout. Mais “standard” (avec guillemets) car cela reste assez jeune."}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2013\u002F11\u002F85736-logchain.png",rel:[e]},children:[{type:a,tag:j,props:{alt:"logchain",src:"\u002Fimages\u002F85736-logchain.png"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans le cadre du projet nous voulions définir une stratégie de logging sur deux types de logs :"}]},{type:a,tag:i,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"des logs métiers"}]},{type:a,tag:f,props:{},children:[{type:b,value:"des logs techniques du service en SAAS lui-même"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et malgré de multiples technos impliquées : Bash, Python, Java,ce fut très simple grâce a… Rsyslog"}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Ffr.wikipedia.org\u002Fwiki\u002FRsyslog",rel:[e]},children:[{type:b,value:"Rsyslog"}]},{type:b,value:" est une évolution de syslog. C’est un standard sous Unix qui permet de transférer des messages vers des fichiers locaux ou vers une machine distante via TCP (et non UDP comme syslog)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Chaque processus a été paramétré pour logger sur Syslog, que ce soit via des "},{type:a,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fsyatchmenoff\u002FLogback-SyslogTCP",rel:[e]},children:[{type:b,value:"appenders logback"}]},{type:b,value:", la brique de logging de "},{type:a,tag:d,props:{href:"http:\u002F\u002Ftwistedmatrix.com\u002Ftrac\u002F",rel:[e]},children:[{type:b,value:"Twisted"}]},{type:b,value:" (un peu modifié), ou l’ancien protocole qui utilisait déjà syslog. A noter que rsyslog supporte TLS (nous n'avons pas testé cependant)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et en sortie de tout ça ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le reste de la chaîne de traitement de logs repose sur des briques qui commence à être bien connu :"}]},{type:a,tag:i,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Flogstash.net\u002F",rel:[e]},children:[{type:b,value:"logstash"}]},{type:b,value:" pour la collecte et la transformation des flux"}]},{type:a,tag:f,props:{},children:[{type:b,value:"elasticsearch pour le stockage"}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Fwww.elasticsearch.org\u002Foverview\u002Fkibana\u002F",rel:[e]},children:[{type:b,value:"Kibana"}]},{type:b,value:" pour la visualisation des logs techniques"}]},{type:a,tag:f,props:{},children:[{type:b,value:"(pas encore mis en place) Redis pour servir de tampon en écriture"}]},{type:a,tag:f,props:{},children:[{type:b,value:"(pas encore mis en place) statsd et Graphite pour du monitoring sur certaines métriques"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il y a eu récemment pas mal d’articles (*) sur le sujet autour de logstash et Kibana donc je vous laisse les découvrir si vous voulez en savoir plus :"}]},{type:a,tag:i,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:X,rel:[e]},children:[{type:b,value:X}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:Y,rel:[e]},children:[{type:b,value:Y}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"(*) et je n’ai malheureusement pas conservé tous les liens, donc n’hésitez pas à en rajouter en commentaires."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et vous, des expériences similaires ? Des commentaires sur les bases cités ci-dessus ?"}]}],toc:{title:w,searchDepth:g,depth:g,links:[{id:C,depth:g,text:D},{id:E,depth:g,text:F,children:[{id:n,depth:r,text:u},{id:k,depth:r,text:k},{id:m,depth:r,text:o},{id:t,depth:r,text:p}]},{id:G,depth:g,text:H},{id:K,depth:g,text:L},{id:M,depth:g,text:N},{id:P,depth:g,text:Q},{id:R,depth:g,text:S},{id:T,depth:g,text:U},{id:V,depth:g,text:W}]}},_type:"markdown",_id:"content:articles:2013:11:05:comparaison-de-moteurs-de-base-de-donnees-pour-du-stockage-de-logs.md",_source:"content",_file:"articles\u002F2013\u002F11\u002F05\u002Fcomparaison-de-moteurs-de-base-de-donnees-pour-du-stockage-de-logs.md",_extension:"md"}},prerenderedAt:1677707110437}}("element","text","p","a","nofollow","li",2,"h2","ul","img","elasticsearch","strong","cassandra","mongodb","Cassandra","Mysql","h3",3,false,"mysql","MongoDB","em","",".","http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-14\u002F","http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-24\u002F","http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-34\u002F","http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-44\u002F","le-contexte","Le contexte","les-bases-évaluées","Les bases évaluées","mode-dinstallation","Mode d’installation","http:\u002F\u002Fdocs.fabfile.org\u002Fen\u002F1.8\u002F","Fabric","avertissement-général","Avertissement général","métriques","Métriques","h1","résultats-en-insertion","Résultats en insertion","consommation-ressource","Consommation ressource","résultats-en-lecture","Résultats en lecture","et-le-reste-de-larchitecture","Et le reste de l’architecture ?","http:\u002F\u002Flinuxfr.org\u002Fnews\u002Fgestion-des-logs-avec-logstash-elasticsearch-kibana","http:\u002F\u002Fblog.xebia.fr\u002F2013\u002F11\u002F05\u002Fanalyse-en-temps-reel-de-vos-logs-applicatifs-avec-logstashelasticsearchkibana\u002F"))