---
id: "673"
title: "Nosql, 4 bases à la loupe 3/4"
description: "[![](/images/nosql-logo.gif \"nosql-logo\")](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-14/nosql-logo/)Vous vous rappelez du bouquin [7 d..."
date: "2012-11-11"
categories: 
  - "waza"
tags: 
  - "elasticsearch"
  - "jest"
  - "lucene"
  - "solr"
img: "nosql-logo.gif"
cover: "cover7.jpg"
---

[![](/images/nosql-logo.gif "nosql-logo")](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-14/nosql-logo/)Vous vous rappelez du bouquin [7 databases in seven weeks](http://pragprog.com/book/rwdata/seven-databases-in-seven-weeks) ? Pour le coup j'ai eu l'occasion de réaliser une expérience un peu moins ambitieuse, seulement 4 bases de données. Et si je n'ai pas été aussi loin que le bouquin précédent je vous propose quand même un retour d'expérience sur :

- Redis
- Solr
- Elastic Search
- MongoDb

Ce billet fait partie d'une série de plusieurs billets dont le premier est [ici](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-14/ "Nosql, 4 bases à la loupe 1/4"). Et le sujet de celui-ci est ElasticSearch et Solr.

### Solr et Elastic Search

Je fais un chapitre commun pour les deux parce que les deux reposent sur Lucene et vont être assez proches sur les fonctionnalités qui m’intéressent.

#### Solr

En fait j’ai testé Solr avant de commencer à implémenter avec Lucene. Notre première rencontre m’a un peu déçu quand j’ai du déclarer mes mappings de données côtés serveurs. Et puis il m’a semblé à ce moment qu’avoir un process supplémentaire à administrer c’était un peu overkill alors que je pouvais me contenter de faire du Lucene de base. Bref, j’ai testé, les perfs étaient bonnes, mais j’ai pas été plus loin :

**SolrTest**.findByLoginShouldReturnSomething: \[measured 10 out of 15 rounds, threads: 1 (sequential)\] round: **0.22** \[+- 0.02\], round.gc: 0.00 \[+- 0.00\], GC.calls: 1, GC.time: 0.00, time.total: 3.46, time.warmup: 1.24, time.bench: 2.22 **SolrTest**.assertThatMyDatabaseHasMoreThan100Profile: \[measured 10 out of 15 rounds, threads: 1 (sequential)\] round: **0.20** \[+- 0.00\], round.gc: 0.00 \[+- 0.00\], GC.calls: 0, GC.time: 0.00, time.total: 3.01, time.warmup: 1.02, time.bench: 2.00 **SolrTest**.testSearchWithEmbeddedObject: \[measured 10 out of 15 rounds, threads: 1 (sequential)\] round: **0.20** \[+- 0.00\], round.gc: 0.00 \[+- 0.00\], GC.calls: 1, GC.time: 0.00, time.total: 3.02, time.warmup: 1.03, time.bench: 2.00

[Le code complet sous Bitbucket](https://bitbucket.org/hlassiege/nosql/src/821b12c7c105/src/test/java/com/sandbox/SolrTest.java?at=default)

Et puis le temps à passé...

#### Elastic Search

Et 2 mois plus tard mes besoins et ma compréhension ont changé :

- nous voulons migrer sur Heroku ou Clever-Cloud :
    - on trouve ça dommage de bénéfier d’une elasticité sur Mongo et pas sur nos index de recherche
    - de toute facon tous les PAAS que nous avons regardé ne proposent que des stockage volatile, interdisant de fait d’avoir nos index de recherche sur disque et qui nous rend obligatoire l’utilisation d’un Elastic Search (ou d’un Solr)

- Lucene c’est super mais il y a des fonctionnalités qui nécessitent un effort de mise en place non négligeable, comme par exemple les recherches géospatiales ou les facets alors que c’est dispo gratuitement sur du Elastic Search (mais pas sur Solr pour le géospatial)

- j’ai assisté à une bonne prez de [David Pilato](https://twitter.com/dadoonet) et [Tanguy Leroux](https://twitter.com/tlrx) sur Elastic Search et pour moi à ce moment là, la balance vient de pencher sévèrement en faveur de Elastic Search

Bref, ce qui explique que j’ai repris des tests avec Elastic Search.

Tiens d’ailleurs pendant la prez de David et Tanguy, une personne a indiqué utiliser Elastic Search comme stockage primaire. Intéressant car malgré tout ca reste encore une question ouverte selon moi. A priori la pratique est encore peu conseillée et je suis assez perplexe personnellement sur la simplicité des capacités d’update sur plusieurs records d’un index (vu qu’un update revient à supprimer/recréer un document, on ne peut pas se contenter d’updater un champ, il faut réindexer le document entier)

_A ce sujet si vous avez des avis sur la question, n’hésitez pas à partager._

Côté perf, là encore bons résultats :

**ElasticSearchTest**.findByLoginShouldReturnSomething: \[measured 10 out of 15 rounds, threads: 1 (sequential)\] round: **0.05** \[+- 0.01\], round.gc: 0.00 \[+- 0.00\], GC.calls: 0, GC.time: 0.00, time.total: 0.91, time.warmup: 0.43, time.bench: 0.48 **ElasticSearchTest**.assertThatMyDatabaseHasMoreThan100Profile: \[measured 10 out of 15 rounds, threads: 1 (sequential)\] round: **0.04** \[+- 0.00\], round.gc: 0.00 \[+- 0.00\], GC.calls: 0, GC.time: 0.00, time.total: 0.62, time.warmup: 0.23, time.bench: 0.39 **ElasticSearchTest**.testSearchWithEmbeddedObject: \[measured 10 out of 15 rounds, threads: 1 (sequential)\] round: **0.04** \[+- 0.01\], round.gc: 0.00 \[+- 0.00\], GC.calls: 0, GC.time: 0.00, time.total: 0.82, time.warmup: 0.42, time.bench: 0.39

On remarque même un net avantage pour Elastic Search. Mais vu que j’ai peu poussé sur Solr, j’imagine que j’ai du louper une optimisation quelque part. Donc à prendre avec des pincettes.

[Le code complet sous Bitbucket](https://bitbucket.org/hlassiege/nosql/src/821b12c7c105/src/test/java/com/sandbox/ElasticSearchTest.java?at=default)

#### Elastic Search avec [Jest](https://github.com/searchbox-io/Jest)

Pour comprendre pourquoi j’ai choisi [Jest](https://github.com/searchbox-io/Jest), en fait j’ai eu un autre souci par la suite. Nous avons migré notre application sur [Heroku](http://www.heroku.com/) et nous avons donc utilisé un add-on Heroku pour Elastic Search : searchbox.io. Cependant l’url est de la forme : [https://api.searchbox.io/api-key/uneclé](https://api.searchbox.io/api-key/unecl%C3%A9)

Or l’API ElasticSearch permet de préciser host et port, mais pas de context path... (d’ailleurs si je me trompe, merci de me corriger !) [](https://api.searchbox.io/api-key/une)Du coup je suis parti sur Jest, l’API réalisé par SearchBox.

De premier abord elle est plutôt pas mal, simple à utiliser mais malheureusement elle est dans un état que je qualifierais d’alpha. (J’ai du la patcher plusieurs fois pour mes besoins).

Côté perf, j’ai un écart assez surprenant avec l’API Elastic Search de base :

**JestTest**.findByLoginShouldReturnSomething: \[measured 10 out of 15 rounds, threads: 1 (sequential)\] round: **0.24** \[+- 0.03\], round.gc: 0.00 \[+- 0.00\], GC.calls: 1, GC.time: 0.00, time.total: 3.76, time.warmup: 1.40, time.bench: 2.36 **JestTest**.assertThatMyDatabaseHasMoreThan100Profile: \[measured 10 out of 15 rounds, threads: 1 (sequential)\] round: **0.18** \[+- 0.01\], round.gc: 0.00 \[+- 0.00\], GC.calls: 1, GC.time: 0.00, time.total: 2.73, time.warmup: 0.92, time.bench: 1.81 **JestTest**.testSearchWithEmbeddedObject: \[measured 10 out of 15 rounds, threads: 1 (sequential)\] round: **0.21** \[+- 0.01\], round.gc: 0.00 \[+- 0.00\], GC.calls: 1, GC.time: 0.00, time.total: 3.15, time.warmup: 1.04, time.bench: 2.11

Pourtant à première vue vu la taille de la lib ca paraît étrange un tel écart.

[Le code complet sous bitbucket](https://bitbucket.org/hlassiege/nosql/src/821b12c7c105/src/test/java/com/sandbox/JestTest.java?at=default)

Bref, (copyright Canal+), nous sommes sur un add-on Elastic Search pour Heroku

Le prochain billet sera l’occasion de récapituler nos résultats.

Pour voir chaque billet :

- [L'intro](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-14/ "Nosql, 4 bases à la loupe 1/4")
- [Redis et Mongo](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-24/ "Nosql, 4 bases à la loupe 2/4")
- [ElasticSearch et Solr](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-34/ "Nosql, 4 bases à la loupe 3/4")
- [Le récap](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-44/)
