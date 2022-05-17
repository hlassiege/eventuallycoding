---
id: "980"
title: "Comparaison de moteurs de base de données pour du stockage de logs"
description: "Il y a un an je m’étais aventuré à tester plusieurs bases Nosql, l’objectif étant pour moi d’apprivoiser les moteurs, de comprendre leurs usages et de..."
date: "2013-11-05"
categories: 
  - "waza"
tags: 
  - "bench"
  - "cassandra"
  - "elasticsearch"
  - "logs"
  - "mongodb"
  - "mysql"
img: "22faa-mongodb.png"
cover: "cover2.jpg"
---

Il y a un an je m’étais aventuré à tester plusieurs bases Nosql, l’objectif étant pour moi d’apprivoiser les moteurs, de comprendre leurs usages et de voir si nous pouvions en faire bon usage sur [HopWork](http://www.hopwork.com/).

Cette mini étude était paru sur ce même blog :

- [http://www.eventuallycoding.com/index.php/nosql-4-bases-a-la-loupe-14/](http://www.eventuallycoding.com/index.php/nosql-4-bases-a-la-loupe-14/)
- [http://www.eventuallycoding.com/index.php/nosql-4-bases-a-la-loupe-24/](http://www.eventuallycoding.com/index.php/nosql-4-bases-a-la-loupe-24/)
- [http://www.eventuallycoding.com/index.php/nosql-4-bases-a-la-loupe-34/](http://www.eventuallycoding.com/index.php/nosql-4-bases-a-la-loupe-34/)
- [http://www.eventuallycoding.com/index.php/nosql-4-bases-a-la-loupe-44/](http://www.eventuallycoding.com/index.php/nosql-4-bases-a-la-loupe-44/)

Evidemment comme tout “bench” on pouvait y faire pas mal de critiques, j’utilisais un environnement Windows très éloigné de la prod, le jeu de données contenait peu de variations ce qui permettait aux différents maillons de la chaîne d’optimiser au maximum les appels que je faisais.

Si certains ont pris le bench au pied de la lettre, désolé, l’objectif pour moi c’était de me familiariser avec les API et de comprendre les cas d’usage et de voir si, grosso modo, c’était déconnant ou pas en terme de vitesse.

Et cette année j’ai eu la chance de travailler sur une architecture de collecte et traitement de logs pour laquelle j’ai refait des tests plus poussés dans de meilleures conditions sur :

- Elasticsearch
- MongoDb
- Cassandra
- Mysql

Sujet que je vous invite à lire ici.

## Le contexte

Comme je l’ai dit plus haut, nous cherchions à construire une architecture de collecte et traitement de logs.

Ces logs sont des logs techniques (des composants systèmes) composé de couples clé valeur.

Cette architecture devait pouvoir être hébergé en Cloud et être utilisé à distance (du SAAS). Le volume de logs sans être démentiel pouvait attendre 500Gb/jour.

La charge en lecture devait être relativement mineure, réservé à quelques admins. Par contre les requêtes peuvent être complexes et porter sur plusieurs “champs” du log.

Pour ces tests, j’ai eu la chance de bénéficer de 4 dedibox classic de 8Gb de ram et 4 coeurs sur lesquelles nous avons installé une debian 7. Grace à cela nous avons pu monter des architectures clusterisées.

## Les bases évaluées

4 bases ont été évaluées dans ce contexte :

- ElasticSearch
- MongoDB
- Cassandra
- Mysql

Pourquoi celles-ci ? Pour les 3 premières car elles sont reconnues pour être utilisé dans ce type de contexte ou parce que c’était les bases connus par les membres du projet. Mais il est fort probable que d’autres bases répondent au besoin.

Pour Mysql, elle était anciennement utilisé sur le projet. Son utilisation posait problème mais l’ancienne application tournait toujours en Mysql 3.x et aurait sans doute bien profité d’un peu de tuning. Instinctivement ce moteur ne paraissait plus adapté mais il fallait quand même en être sûr.

Et pour les quelques uns qui ne manqueront pas de poser la question “pourquoi pas Hadoop ?” Tout simplement parce que 500Gb par jour, stocké sur 3 jour ca reste une petite volumétrie  qui ne nécessite pas un tel tank.  Mais pour en dire un peu plus, Hadoop est bien prévu pour l'archivage des logs long termes.

Voyons en détail les architectures de chacune de ces bases.

### MongoDB

MongoDB a été utilisé en cluster (replica Set) de 3 machines. MongoDB fait partie des systèmes [CP](https://en.wikipedia.org/wiki/CAP_theorem) (cohérent et résistant au morcellement). Les écritures sont faites sur du master single node. Les lectures par défaut sont effectuées sur le master mais peuvent être effectuées sur les secondaires.

[![mongodb](/images/22faa-mongodb.png)](http://eventuallycoding.com/wp-content/uploads/2013/11/22faa-mongodb.png)

Le mode d'acquittement choisi ([WriteConcern](http://docs.mongodb.org/manual/core/write-concern/)) vérifie que les données ont été reçues et acquittées par une majorité de nœuds (ici 2) afin de garantir la non perte de données, ce que nous vérifierons cependant en cours de test.

Au début nous avons utilisé des [capped collection](http://docs.mongodb.org/manual/core/capped-collections/) qui ont l'avantage de fixer une taille limite aux logs stockés en supprimant les anciens logs lorsque la taille limite est atteinte. En gros ce sont des logs tournants sur la taille. Cette taille étant préalloué, en principe l’insertion est optimisé.

Cependant le gain en insertion s'est révélé nul (ce qui me surprend encore et qu’il faudra que j’investigue) et nous sommes revenus sur des collections non cappés.

L'utilisation [d'index TTL](http://docs.mongodb.org/manual/tutorial/expire-data/) (time to live) nous a permis d'obtenir une fonctionnalité équivalente, à savoir la suppression des logs trop vieux de x jours. En fait, les index TTL sont même bien plus fins qu’un roulement sur la taille lorsqu’on veut conserver un nombre de jours fixes.

Afin de satisfaire des performances normales en lecture, il a fallu placer un index par champ.

Nous avons utilisé du bulk insert par lot de 5000.

Nous n'avons pas mis en place de Sharding ce qui aurait beaucoup plus impactant en terme de nombres de machines.

**Attention à ne pas prendre la version par défaut sous debian. Il s’agit de la 2.0.4 qui est TRES loin d’être une version recommandé aujourd’hui.**

### elasticsearch

elasticsearch a été utilisé en cluster de 3 nœuds. Un nœud contient plusieurs shards (une répartition de la donnée) et ces shards sont répliqués sur chaque nœud du cluster.

[![elasticsearch](/images/35850-elasticsearch.png)](http://eventuallycoding.com/wp-content/uploads/2013/11/35850-elasticsearch.png)

Les caractéristiques intéressantes de elasticsearch sont ses capacités de recherches avancées et sa rapidité de requêtage.

Nous avons utilisé une configuration avec 5 shards et 1 replicas.

Comme pour MongoDB, nous avons utilisé des [index TTL](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/mapping-ttl-field.html) sur les documents afin d’avoir des logs tournants sur leur âge.

### Cassandra

Cassandra a été utilisé en mode Cluster de 3 nœuds. Cassandra n'a pas de maître qui centralise les écritures et lectures, ce qui aurait du le rendre plus rapide en écriture que MongoDB. Les tests nous ont démontré le contraire. Cassandra propose de paramétrer la cohérence attendue tout comme MongoDB en précisant le nombre de nœuds pour lesquels ont veut un acquittement. Pour nos tests nous demanderons l'acquittement par la majorité des nœuds afin de garantir la non-perte de données. Par contre nous pourrons accepter une lecture sur un seul nœud, la cohérence en lecture étant secondaire.

[![cassandra](/images/05fac-cassandra.png)](http://eventuallycoding.com/wp-content/uploads/2013/11/05fac-cassandra.png)

Comme pour MongoDB, pour garantir des performances acceptables en lecture il a été nécessaire de placer des index sur chaque colonne.

Pour être complet, il s’agissait de la base que nous ne connaissions pas avant le bench. Il y a fort à parier que nous ayons loupé des paramétrages/tunings importants.

### Mysql

Et là commence l’enfer… Mysql devait être utilisé en mode cluster.

Sous Debian il existe [Galera](http://codership.com/content/using-galera-cluster) pour réaliser un cluster Mysql. Malheureusement ce paquet porte très bien son nom et nous n’avons pas réussi à l’installer dans les temps. Il a fallu tester Mysql en mode single node.

Dommage qu’un produit aussi ancien soit si complexe à installer en cluster comparativement aux autres produits...

Comme pour MongoDB et Cassandra, pour garantir des performances acceptables en lecture il a été nécessaire de placer des index sur chaque colonne.

 

## Mode d’installation

Comme il me semblait inconcevable de monter tout une architecture de bench jetable, j’ai décidé d’utiliser [Fabric](http://docs.fabfile.org/en/1.8/) pour automatiser et reproduire simplement les install.

Vous trouverez d’ailleurs un article ainsi que les sources utilisé pour monter un cluster ES, MongoDB et Cassandra [sur un précédent article](http://www.eventuallycoding.com/index.php/fabric-moi-un-cluster/ "Fabric moi un cluster").

Bien nous en a pris. Quand une des machines a du être remplacé pendant les tests nous étions bien contents d’avoir ces scripts.

Je ne saurais que trop insister pour avoir des installations de benchs reproductibles. Pensez aussi à vos petits copains qui auront besoin de refaire ces tests dans quelques temps.

 

## Avertissement général

Je remet ce que j’avais déjà mis dans un précédent billet :

 

> _**Warning** : une partie de ce billet traite d’un comparatif de performance, ce genre de comparatif n’engage que celui qui lui fait confiance_
> 
> _Petit rappel pour les afficionados des benchmarks. Un benchmark sert, **entre autre**, à mettre en évidence des paramétrages et leur influence. On ne s’attache pas qu'à la mesure elle-même mais à la tendance et comment on l’a obtenu._
> 
> _Pour une différence de quelques millisecondes on pourra argumenter sur un paramétrage spécifique ou une manière de coder peu efficace. De toute façon il existera toujours des benchmark contradictoire. Sauf grosse bourde on peut quand même établir des conclusions lorsque les rapports sont vraiment importants mais un conseil, refaites les de votre côté si vous comptez engager votre tête là dessus_

 

Pour ce bench spécifiquement nous avons du le réaliser en un court laps de temps avec peu d’expérience d’admin sur les moteurs évalués. Il existe des paramétrages de tuning pour chacune de ces bases qui peuvent influer sur les résultats et faire passer en tête l'une ou l'autre base, par exemple le nombre de shards sur elasticsearch, la taille des bulk insert, l'utilisation d'index etc...

Bref, largement de quoi faire varier les résultats. Faites vous votre idée tout seul si vous envisagez d’utiliser l’une d’entre elles.

## Métriques

Quand on réalise un bench, il faut des métriques, normal. Pour nous, il s’agissait de mesurer la consommation de ressources pour une utilisation en Cloud.

Nous avons donc mesuré les données suivantes :

- Taille de disque utilisée (prise en compte de l'overhead sur une donnée brute)
- Nombre de logs perdus (pour les mauvaises langues qui pensaient que nous allions en perdre avec MongoDB, c’est faux, rien n’a été perdu)
- Throughput (nombre d'insertions, nombre de lectures/seconde)
- RAM
- CPU

# Mode opératoire

Comme je l’indiquais plus haut, j’ai eu la possibilité d’utiliser 4 machines Dedibox vierges pour ces tests. Les bases ont donc été installés en cluster sur 3 noeuds et un client de test a été installé sur la dernière machine.

Ce client de test écrit en Python a un protocole relativement simple :

- lecture d’un fichier de 100Mo de logs en boucle
- envoi de ces logs via pycassandra, pyes, pymongo ou pymysql en mode batch insert
- calcul de stats sur le débit, les pertes, la taille etc...

En plus de ça [Fabric](http://docs.fabfile.org/en/1.8/) est utilisé pour démarrer le client avec différents paramétrages sur nos postes locaux et pour aller collecter ensuite des métriques directement sur les machines.

Des tests ont été faits avec temporisation sur de longues périodes (4h), sans temporisation sur de courtes périodes (5min), avec des volumes faibles (<30Mo) ou plus importants (500Go).

 

## Résultats en insertion

Sur les insertions, malheureusement Cassandra ne nous a pas permis d'atteindre les 10M de lignes. Nous avons constamment rencontré des problèmes de timeout à partir de 3/4 M de lignes.

J’imagine que nous avons loupé quelque chose d’important en terme de mise en place.

 

Rappelez vous que Mysql ne fait aucune réplication de données, nous sommes en mode single node.

[![resultat1](/images/90288-resultat1.png)](http://eventuallycoding.com/wp-content/uploads/2013/11/90288-resultat1.png)

[![resultat2](/images/0463d-resultat2.png)](http://eventuallycoding.com/wp-content/uploads/2013/11/0463d-resultat2.png)

En performance pure, elasticsearch a montré de bonnes performances (208Mo/min) qui sont restés linéaire avec la charge. Il réussit à être plus performant que Mysql malgré le fait d'être en cluster avec 1 replica.

## Consommation ressource

[![resultat3](/images/9661d-resultat3.png)](http://eventuallycoding.com/wp-content/uploads/2013/11/9661d-resultat3.png)

Cassandra n'a pas été évalué puisqu'il n'a pas réussi à prendre l'insertion de 10M de lignes.

elasticsearch est le plus performant pour le critère qui nous intéressait le plus : la taille sur disque. Malgré un replica il stocke à peine 3.6Go en cumulé sur 3 disques pour 5 Go envoyé. MongoDB à l'inverse est le spécialiste en place consommé ! En effet il a tendance a rapidement [préallouer des blocs de 1go sur le disque](http://docs.mongodb.org/manual/faq/storage/#why-are-the-files-in-my-data-directory-larger-than-the-data-in-my-database) en quantité plus que nécessaire lorsqu’on le stresse.

Mysql de son côté a la plus faible consommation RAM et CPU, ce qui laisse supposer qu'il aurait pu aller plus vite en écriture. Par contre avec l'utilisation d'un index par colonne, il utilise presque 40% d'espace disque supplémentaire par rapport à elasticsearch.

## Résultats en lecture

[![resultat4](/images/07f0d-resultat4.png)](http://eventuallycoding.com/wp-content/uploads/2013/11/07f0d-resultat4.png)

Sur 10M d’enregistrements Mysql est le grand vainqueur sur les tests de lecture, suivi de Mongo et d'elasticsearch. Cependant les tests restent très bons dans les trois cas pour notre cas d'usage.

Ce test **est malheureusement est loin d’être complet** car 10M d’enregistrement est beaucoup trop loin de notre réalité. Mais le temps de domestiquer chaque base, de la tuner et d’y insérer 1 Milliard d’enregistrement via le réseau dépassait le temps alloué à ce sprint.

Seul elasticsearch a été poussé jusque là. **Et heureusement**, car sur 1 Milliard d’enregistrement on se rend vite compte que la RAM dispo sur la machine doit être suffisante pour monter une grosse partie des informations en mémoire. Nos pauvres 8 Go n’étaient largement pas suffisants, surtout avec l’utilisation de facettes.

 

# Conclusion et décision

Ces test ont été très instructifs et en fin de compte nous avons penché pour elasticsearch. Il convenait à notre usage, nous permettait de rester dans les clous en terme de consommation de ressource et surtout nous a impressionné pour sa facilité de mise en place lors des tests.

Et comme nous allons le voir sur le reste de l’architecture, il nous laissait la possibilité d’utiliser Kibana pour la visualisation des logs.

 

## Et le reste de l’architecture ?

Eh bien le reste de l’architecture est assez “standard”. Standard car on commence à retrouver ce type de chaîne de collecte de logs un peu partout. Mais “standard” (avec guillemets) car cela reste assez jeune.

[![logchain](/images/85736-logchain.png)](http://eventuallycoding.com/wp-content/uploads/2013/11/85736-logchain.png)

Dans le cadre du projet nous voulions définir une stratégie de logging sur deux types de logs :

- des logs métiers
    
- des logs techniques du service en SAAS lui-même
    

Et malgré de multiples technos impliquées : Bash, Python, Java,ce fut très simple grâce a… Rsyslog

[Rsyslog](http://fr.wikipedia.org/wiki/Rsyslog) est une évolution de syslog. C’est un standard sous Unix qui permet de transférer des messages vers des fichiers locaux ou vers une machine distante via TCP (et non UDP comme syslog).

Chaque processus a été paramétré pour logger sur Syslog, que ce soit via des [appenders logback](https://github.com/syatchmenoff/Logback-SyslogTCP), la brique de logging de [Twisted](http://twistedmatrix.com/trac/) (un peu modifié), ou l’ancien protocole qui utilisait déjà syslog. A noter que rsyslog supporte TLS (nous n'avons pas testé cependant).

 

Et en sortie de tout ça ?

 

Le reste de la chaîne de traitement de logs repose sur des briques qui commence à être bien connu :

- [logstash](http://logstash.net/) pour la collecte et la transformation des flux
- elasticsearch pour le stockage
- [Kibana](http://www.elasticsearch.org/overview/kibana/) pour la visualisation des logs techniques
- (pas encore mis en place) Redis pour servir de tampon en écriture
- (pas encore mis en place) statsd et Graphite pour du monitoring sur certaines métriques

Il y a eu récemment pas mal d’articles (\*) sur le sujet autour de logstash et Kibana donc je vous laisse les découvrir si vous voulez en savoir plus :

- [http://linuxfr.org/news/gestion-des-logs-avec-logstash-elasticsearch-kibana](http://linuxfr.org/news/gestion-des-logs-avec-logstash-elasticsearch-kibana)
- [http://blog.xebia.fr/2013/11/05/analyse-en-temps-reel-de-vos-logs-applicatifs-avec-logstashelasticsearchkibana/](http://blog.xebia.fr/2013/11/05/analyse-en-temps-reel-de-vos-logs-applicatifs-avec-logstashelasticsearchkibana/)

(\*) et je n’ai malheureusement pas conservé tous les liens, donc n’hésitez pas à en rajouter en commentaires.

 

Et vous, des expériences similaires ? Des commentaires sur les bases cités ci-dessus ?
