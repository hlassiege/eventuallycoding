---
id: "680"
title: "Nosql, 4 bases à la loupe 4/4"
description: "[![](/images/nosql-logo.gif \"nosql-logo\")](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-14/nosql-logo/)Vous vous rappelez du bouquin [7 d..."
date: "2012-11-11"
categories: 
  - "waza"
tags: 
  - "elasticsearch"
  - "mongodb"
  - "redis"
  - "solr"
img: "nosql-logo.gif"
cover: "cover4.jpg"
---

[![](/images/nosql-logo.gif "nosql-logo")](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-14/nosql-logo/)Vous vous rappelez du bouquin [7 databases in seven weeks](http://pragprog.com/book/rwdata/seven-databases-in-seven-weeks) ? Pour le coup j'ai eu l'occasion de réaliser une expérience un peu moins ambitieuse, seulement 4 bases de données. Et si je n'ai pas été aussi loin que le bouquin précédent je vous propose quand même un retour d'expérience sur :

- Redis
- Solr
- Elastic Search
- MongoDb

Ce billet est le dernier d'une série de 4 dans lequel nous allons faire juste un récapitulatif.

Je vous propose un tableau récapitulatif des perfs collectées ici.

Encore une fois on compare des bases qui n’ont pas le même objectif et c’était aussi pour moi l’occasion de me familiariser avec donc à prendre avec des pincettes.

[![](/images/recap.png "recap")](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-44/recap/)

Note : j'ai supprimé le temps du count de Mysql pour garder une échelle lisible sur le graphe

 

Et le tableau de valeur :

<table class="table table-stripped"><tbody><tr><td width="289" height="19"></td><td width="83">Jedis</td><td width="83">Jongo</td><td width="83">Morphia</td><td width="83">Mysql</td><td width="83">Jest</td><td width="83">ElasticSearch</td><td width="83">Solr</td></tr><tr><td height="19">findByLoginShouldReturnSomething</td><td align="right">0,03</td><td align="right">0,01</td><td align="right">0,02</td><td align="right">0,05</td><td align="right">0,24</td><td align="right">0,05</td><td align="right">0,22</td></tr><tr><td height="19">assertThatMyDatabaseHasMoreThan100Profile</td><td align="right">0,00</td><td align="right">0,01</td><td align="right">0,01</td><td align="right">1,27</td><td align="right">0,18</td><td align="right">0,04</td><td align="right">0,20</td></tr><tr><td height="19">testSearchWithEmbeddedObject</td><td align="right">0,03</td><td align="right">0,03</td><td align="right">0,02</td><td align="right">0,04</td><td align="right">0,21</td><td align="right">0,04</td><td align="right">0,20</td></tr><tr><td height="19">testGeoSpatialSearch</td><td></td><td align="right">0,21</td><td align="right">0,18</td><td></td><td></td><td></td><td></td></tr></tbody></table>

 

On remarquera que l’argument initial concernant les performances pour ne pas choisir de faire du relationnel ne semble finalement pas très pertinent. Le count est effectivement plus coûteux mais par contre les find sont à peine sur un rapport de 1 à 2,5 en faveur de mongo.

Par acquis de conscience j’ai donc voulu refaire le test sur une plus grosse volumétrie (**900 000 lignes**) :

**JongoTest**.findByLoginShouldReturnSomething: \[measured 10 out of 15 rounds, threads: 1 (sequential)\] round: **0.01** \[+- 0.00\], round.gc: 0.00 \[+- 0.00\], GC.calls: 0, GC.time: 0.00, time.total: 0.17, time.warmup: 0.09, time.bench: 0.07 **JongoTest**.assertThatMyDatabaseHasMoreThan100Profile: \[measured 10 out of 15 rounds, threads: 1 (sequential)\] round: **0.01** \[+- 0.00\], round.gc: 0.00 \[+- 0.00\], GC.calls: 1, GC.time: 0.01, time.total: 0.17, time.warmup: 0.06, time.bench: 0.11 **JongoTest**.testSearchWithEmbeddedObject: \[measured 10 out of 15 rounds, threads: 1 (sequential)\] round: **0.03** \[+- 0.00\], round.gc: 0.00 \[+- 0.00\], GC.calls: 1, GC.time: 0.01, time.total: 0.50, time.warmup: 0.23, time.bench: 0.27 **JongoTest**.testGeoSpatialSearch: \[measured 10 out of 15 rounds, threads: 1 (sequential)\] round: **0.21** \[+- 0.04\], round.gc: 0.00 \[+- 0.00\], GC.calls: 3, GC.time: 0.15, time.total: 3.78, time.warmup: 1.66, time.bench: 2.12

**JDBCTest**.findByLoginShouldReturnSomething: \[measured 10 out of 15 rounds, threads: 1 (sequential)\] round: **0.24** \[+- 0.00\], round.gc: 0.00 \[+- 0.00\], GC.calls: 1, GC.time: 0.00, time.total: 287.68, time.warmup: 285.32, time.bench: 2.37 **JDBCTest**.assertThatMyDatabaseHasMoreThan100Profile: \[measured 10 out of 15 rounds, threads: 1 (sequential)\] round: **11.33** \[+- 0.14\], round.gc: 0.00 \[+- 0.00\], GC.calls: 0, GC.time: 0.00, time.total: 169.79, time.warmup: 56.52, time.bench: 113.27 **JDBCTest**.testSearchWithEmbeddedObject: \[measured 10 out of 15 rounds, threads: 1 (sequential)\] round: **0.24** \[+- 0.00\], round.gc: 0.00 \[+- 0.00\], GC.calls: 1, GC.time: 0.00, time.total: 3.55, time.warmup: 1.19, time.bench: 2.36

 

[![](/images/jongo.mysql_-300x179.png "jongo.mysql")](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-44/jongo-mysql/)

La ok, on commence bien à voir les divergences. C'est surtout intéressant de constater la bonne tenue de Mongo malgré le changement de volumétrie. Enfin la je me rassure comme je peux car nous sommes encore loin des 900 000 records pour le modèle que nous cherchons à créer. L’avenir nous dira si c’était un bon choix. Quoi qu’il en soit, ne serait-ce que pour la facilité d’admin sur Heroku et la simplicité en dev je ne suis pas déçu de nos choix. Mongodb/Elastic Search nous apporte toute satisfaction. Quand au projet en lui-même, j'espère que l'on pourra ouvrir les portes en béta avant la fin d'année ;)

Et bien sûr je serais ravi d’avoir d’autres retours si vous en avez à partager.

Pour revoir chaque billet :

- [L'intro](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-14/ "Nosql, 4 bases à la loupe 1/4")
- [Redis et Mongo](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-24/ "Nosql, 4 bases à la loupe 2/4")
- [ElasticSearch et Solr](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-34/ "Nosql, 4 bases à la loupe 3/4")
- [Le récap](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-44/)
