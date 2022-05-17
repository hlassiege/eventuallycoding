---
id: "650"
title: "Nosql, 4 bases à la loupe 1/4"
description: "[![](/images/nosql-logo.gif \"nosql-logo\")](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-14/nosql-logo/)Vous vous rappelez du bouquin [7 d..."
date: "2012-11-11"
categories: 
  - "waza"
tags: 
  - "bench"
  - "elasticsearch"
  - "jdbc"
  - "lucene"
  - "mongodb"
  - "redis"
  - "solr"
img: "nosql-logo.gif"
cover: "cover5.jpg"
---

[![](/images/nosql-logo.gif "nosql-logo")](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-14/nosql-logo/)Vous vous rappelez du bouquin [7 databases in seven weeks](http://pragprog.com/book/rwdata/seven-databases-in-seven-weeks) ? Pour le coup j'ai eu l'occasion de réaliser une expérience un peu moins ambitieuse, seulement 4 bases de données. Et si je n'ai pas été aussi loin que le bouquin précédent je vous propose quand même un retour d'expérience sur :

- Redis
- Solr
- Elastic Search
- MongoDb

Comme ce billet est relativement long je l’ai découpé en plusieurs parties :

- Une intro général permettant de comprendre mes motivations et ma démarche. On y parlera aussi **Nosql**, pourquoi comment etc..., la description des tests à proprement parler. Ce sera aussi l’occasion de partir d’un point de référence, une base **Mysql** qui nous permettra de comparer avec quelque chose de connu
- Une seconde partie uniquement sur **Redis** et **Mongo** et qui traitera de l’architecture choisie pour profiter des fonctionnalités de **Lucene** en plus de l’un de ces deux bases de données.
- Une troisième partie enfin qui parlera de **ElasticSearch**/**Solr**
- Et un dernier billet beaucoup plus court avec quelques graphiques récapitulatif.

C’est donc parti pour le premier billet.

### Le contexte

Un peu de contexte déjà. En juillet je commençais un projet avec [Jean Baptiste Lemée](https://fr.twitter.com/jblemee) et nous savions déjà que nous aurions beaucoup de types de recherches à faire :

- full text,
- synonyme,
- géospatiales,
- fuzzy search.

Nous souhaitions évidemment de bonnes perfs. Challenge, tout du moins pour moi, puisqu'au démarrage je ne connaissais aucune des bases ci-dessus. Et un proto devait fonctionner 2 mois plus tard. Ah oui j'oubliais, je déménageais à Lyon pendant ces deux mois ^^

Ce que je vous propose c'est de jeter un oeil [sur le bac à sable](https://bitbucket.org/hlassiege/nosql/) que je me suis constitué pour l'occasion et qui m'a permis de comprendre l'utilisation de chacune de ces bases. Bien évidemment je ne suis pas expert sur chacune de ces bases, donc si vous repérez des erreurs, vous pouvez me les signaler, et/ou proposer un patch sous bitbucket pour que tout monde en profite.

### Petit rappel sur Nosql :

Nosql regroupe un ensemble de bases de données qui partagent toutes un objectif de grande scalabilité pour répondre aux besoins des applications web modernes. Le site [nosql-databases](http://nosql-database.org/) liste pas mal de ces bases nouvelle génération et tente de les regrouper par grandes familles :

- orienté colonne
- orienté document
- orienté graphe
- clé valeur

Vous remarquerez d'ailleurs que Solr et ElasticSearch n'y figurent pas. Et pourtant ce sont bien des bases de données que l'on peut ranger dans la catégorie des bases orienté documents.

### Pourquoi Nosql ?

Je fais encore partie de ceux (rare ?) qui pensent que les bases SQL restent de supers outils. Le SQL est un language très simple et bien plus expressif que tout ceux que nous verront dans la suite de ce billet. (Oui, _SELECT champ1 FROM maTable WHERE condition_, je reste convaincu que c’est bien plus lisible qu’un dictionnaire json, c’est étrange mais c’est comme ça). De plus les bases relationnelles ont elles aussi progressé en terme de fonctionnalités. Si on vous dit que le geospatial ou la recherche full text c’est réservé au monde du NoSql, on vous ment (voir [hibernate geospatial](http://www.hibernatespatial.org/) par exemple pour le support du geospatial avec Oracle, Mysql, Postgresql).

Un autre argument qui revient souvent comme argument c’est que la plupart de ces bases sont schema-less donc très flexible sur leur évolution. A mon sens dans 95% des cas c’est un des points les plus bullshits pour défendre Nosql. De quelle souplesse parle-t-on ? D’une souplesse en développement ? Ok mais dans ce cas j’ai la même souplesse avec une base relationnelle et les outils qui vont bien. Qui a dit rechargement du modèle à chaud de Play Framework ? Et en prod, faire un ALTER sur une base est une opération relativement bien maîtrisée depuis la naissance des bases de données relationnelle. Mais surtout, pour ceux qui l’aurait oublié, la plus grande difficulté n’est pas de modifier un schéma mais de garder la cohérence des données. Et ca, tout schema less que vous êtes, c’est encore à la charge du développeur.

_Donc pourquoi utiliser du NoSql ?_

La réponse la plus simple c’est “scalabilité”. En effet les bases NoSql proposent toutes des fonctionnalités “simples” de mise à l’échelle. Et pour cela elles ont sacrifié certaines fonctionnalités traditionnelles des bases relationnelles en proposant un modèle transactionnel moins stricte notamment.

_Mais alors est-ce que ça me concerne vraiment si je fais une petite application ?_

Pas forcément effectivement. Un modèle relationnel a beaucoup d’avantage et justement celui de vous garantir la cohérence de vos données. Mais,

- si votre besoin n’est pas couvert par des relations (clé valeur, ou graphe de données)
- si votre modèle est simple et que vous souhaitez privilégier les perfs

Alors ca peut valoir le coup. En tout cas attention à ne pas céder aux sirènes du Nosql juste parce que ça fait hype. Et il ne faut pas hésiter à mixer plusieurs systèmes de gestion de données dans certains cas. Attention toutefois au syndrome “je me suis fait plaisir et j’ai créé une usine à gaz pour mes admin sys ;) Pour notre cas, nous avions besoin de bonnes perfs et nous avions un modèle simple. On va justement vérifier sur nos benchmarks que la piste Nosql est pertinente.

 

### Comment j’ai testé

_**Warning** : une partie de ce bille traite d’un comparatif de performance, ce genre de comparatif n’engage que celui qui lui fait confiance_

_Petit rappel pour les afficionados des benchmarks. Un benchmark sert à mettre en évidence des pratiques et leur influence sur un comportement. On ne s’attache pas à la mesure elle-même mais à la tendance et comment on l’a obtenu._ _Pour une différence de quelques millisecondes on pourra argumenter sur un paramétrage spécifique ou une manière de coder peu efficace. Par exemple le Redis que je teste est un Redis non officiel qui tourne sur Windows. De toute façon il existera toujours des benchmark contradictoire. Sauf grosse bourde on peut quand même établir des conclusions lorsque les rapports sont vraiment importants mais un conseil, refaites les de votre côté si vous comptez engager votre tête là dessus ;)_

Ok j'ai testé les perfs, mais l'objectif c'était aussi de tester la facilité d'utilisation de chacune de ces bases avec différentes libs. Tout d'abord même si j'ai utilisé des tests Junit, il ne s'agit pas de tests unitaires puisque tous nécessitent une base de données qui tourne à côté. Inutile donc de m'envoyer un mail pour me dire que les tests ne tournent pas après avoir fait un clone du repo ;)

Les tests sont benché avec Junit Benchmarks : [http://labs.carrotsearch.com/junit-benchmarks.html](http://labs.carrotsearch.com/junit-benchmarks.html)

Pour benchmarker un test il vous suffit de rajouter cette Rule à votre test :

```

@Rule
public MethodRule benchmarkRun = new BenchmarkRule();
```

Pour chaque base j'ai essayé d'avoir le même scénario, insertion de 100 000 objet puis manipulation de ces objets(count, find, save, remove, geo search). Encore une fois l'objectif c'était aussi de découvrir les APIs. L'entité manipulé est un Profile contenant une propriété simple, son login et une propriété complexe, une adresse :

```

public class Profile
{
    private String login;
    private Address address = new Address();
...
}
public class Address
{
    private String zipCode;
    private Double[] loc = new Double[2];
...
}
```

La propriété adresse permettra de voir comment gérer une relation entre entité dans une base Nosql.

Toujours à propos du bench en lui-même, si vous regardez les méthodes de AbstractTestCase vous remarquerez que chaque test utilise une boucle pour réiterer l’opération testé une cinquantaine de fois. Vous pourriez vous demander pourquoi puisque JunitBenchmark lance lui aussi le test en boucle.

_L’objectif n’est pas le même._

JunitBenchmark lance x fois le test pour “**chauffer**” la JVM et lui laisser le temps d’optimiser le code exécuté. Les premières itérations seront d’ailleurs écartés de la mesure. L’outil va aussi comptabiliser l’activité du GC qui ne serait pas représentative sur une seule itération. Cependant mes tests sont relativement rapides, voire même trop rapides. Du coup parfois je vais obtenir des résultats de ce type :

assertThatMyDatabaseHasMoreThan100Profile: \[measured 10 out of 15 rounds, threads: 1 (sequential)\] round: 0.00 \[+- 0.00\], round.gc: 0.00 \[+- 0.00\], GC.calls: 0, GC.time: 0.00, time.total: 0.07, time.warmup: 0.03, time.bench: 0.04

C’est donc pour obtenir des mesures significatives que je vais itérer afin d’augmenter la durée du test lui-même. Commencons par la première base.

 

### Mysql (parce qu’il faut un point de référence connu)

Et oui, après une introduction sur nosql je commence par Mysql, ca peut paraître paradoxal :) En fait non, l’objectif c’était aussi de montrer un point de référence connu avec une base relationnelle utilisé très régulièrement.

Je ne vais pas m’étaler dessus longuement, je vous laisse [lire le test](https://bitbucket.org/hlassiege/nosql/src/821b12c7c105/src/test/java/com/sandbox/JDBCTest.java?at=default) si vous le souhaitez. J’ai utilisé l'API JDBC directement et les perfs comme vous pouvez le constater sont relativement acceptables :

**JDBCTest**.findByLoginShouldReturnSomething: \[measured 10 out of 15 rounds, threads: 1 (sequential)\] round: **0.05** \[+- 0.00\], round.gc: 0.00 \[+- 0.00\], GC.calls: 0, GC.time: 0.00, time.total: 0.80, time.warmup: 0.33, time.bench: 0.48 **JDBCTest**.assertThatMyDatabaseHasMoreThan100Profile: \[measured 10 out of 15 rounds, threads: 1 (sequential)\] round: **1.27** \[+- 0.01\], round.gc: 0.00 \[+- 0.00\], GC.calls: 0, GC.time: 0.00, time.total: 19.10, time.warmup: 6.37, time.bench: 12.74 **JDBCTest**.testSearchWithEmbeddedObject: \[measured 10 out of 15 rounds, threads: 1 (sequential)\] round: **0.04** \[+- 0.00\], round.gc: 0.00 \[+- 0.00\], GC.calls: 0, GC.time: 0.00, time.total: 0.68, time.warmup: 0.23, time.bench: 0.45

Petit troll pour la route : heureusement que j’ai pas fait du Hibernate, sinon j’attendrais encore l’insertion de mes 100 000 éléments...

Par contre j’ai échoué à faire fonctionner le module géospatial. Si quelqu'un se sent l'âme de faire passer le test, qu'il hésite pas.

Maintenant que nous avons un point de comparaison, passons à la suite.

Pour voir chaque billet :

- [L'intro](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-14/ "Nosql, 4 bases à la loupe 1/4")
- [Redis et Mongo](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-24/ "Nosql, 4 bases à la loupe 2/4")
- [ElasticSearch et Solr](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-34/ "Nosql, 4 bases à la loupe 3/4")
- [Le récap](http://hakanai.free.fr/index.php/nosql-4-bases-a-la-loupe-44/)
