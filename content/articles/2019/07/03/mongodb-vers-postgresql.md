---
id: "1425"
title: "Retour d'utilisation de Mongodb et pourquoi nous migrons vers Postgresql"
description: "![](/images/af912-mongo.jpg)

Dans de précédents billets j'évoquais que nous utilisions Mongodb chez Malt mais j'ai évoqué dans certains meetups que n..."
date: "2019-07-03"
categories: 
  - "waza"
tags: 
  - "data"
  - "mongodb"
  - "postgresql"
img: "af912-mongo.jpg"
cover: "cover2.jpg"
---

![](/images/af912-mongo.jpg)

Dans de précédents billets j'évoquais que nous utilisions Mongodb chez Malt mais j'ai évoqué dans certains meetups que nous n'en étions pas totalement satisfaits et que nous entamions une (lente) migration vers postgresql.

Je vous propose de faire un petit retour d'expérience sur ce sujet après désormais 7 ans d'utilisation de mongodb chez nous.  

Tout d'abord posons le contexte, cela permet de comprendre certains choix. 

Malt (ou anciennement Hopwork) démarre en 2012 pendant l'été. Vincent JB et moi on se rencontre tous ensemble pour la première fois en juillet. Vincent nous propose une idée, JB et moi sommes pile poil dans une période un peu creuse (déménagement sur Lyon pour moi et long voyage aux US pour JB) du coup c'est envisageable d'y passer un peu de temps. On accepte donc ce fameux projet ou un inconnu vous propose de faire mieux qu'une industrie toute entière payé en parts de la société qui ne valent rien :)

![Résultat de recherche d'images pour "parce que c'est notre projet"](/images/hqdefault.jpg)

A ce moment là, JB et moi on voit dans le projet plusieurs objectifs :

- démontrer qu'à deux on peut créer une application complète rapidement. A force de faire de la prestation de service on a trop vu de projets pharaoniques qui ne mène nulle part.

- tester de nouvelles technos et ne pas forcément rester dans notre zone de confort, ce qui peut entrer en conflit avec le premier objectif de vitesse

Je passe sur les objectifs sur la portée du produit, la je n'évoque que les points technologiques.  

Dans ce contexte, nous allons faire quelque choix nous permettant d'avoir un minimum d'aisance, comme le choix du langage de développement par exemple : Java

Mais nous allons par contre tester des nouveautés pour nous : Lucene (puis elasticsearch), mongodb

Bref, c'est donc comme sujets de veille que mongo et elasticsearch rentreront chez Malt.

## Le bon vieux temps 

Rien à redire au début, mongo s'avérera très très utile. L'outil a pour lui une simplicité d'accès permettant de développer très rapidement :

- lancer une base mongo sur linux ou windows c'est immédiat (et par la suite le mode cluster/replica set s'avèrera aussi simple)

- manipuler du json nous paraît à ce moment plutôt simple d'accès, le format étant déjà très populaire

- la console shell de mongo en javascript et le requêtage nécessitent peu de formation

- l'absence/souplesse de schéma permet de développer sans jamais s'occuper du DDL, les tables se créent toutes seules, les colonnes aussi, aucun overhead de ce côté

- l'utilisation avec Jongo en Java est très agréable, la lib est légère, facile à utiliser dans un contexte de test unitaire avec Fongo  
    

L'application qui va naître en l'espace de 2/3 mois doit en grande partie sa rapidité à mongodb.   

Entre 2012 et 2017 globalement, on peut dire que mongo aura bien fonctionné et il n'y a aucun regret à avoir sur ce choix.  

D'ailleurs sur la même période je vais personnellement beaucoup apprendre dessus, passer successivement les formations en ligne 101 for developpers, 102 for dba, 202 advanced deployment and operations et commencer à donner des formations dessus jusque fin 2016.   

Mais au fur et à mesure quelques petits couacs vont se faire ressentir, mineurs au début :  

\- Effectivement l'administration d'une base mongo est simple pour les choses de base. La gestion des backup en "point in time" l'est un peu moins. Vous pouvez faire des backups journaliers à heure fixe mais l'idéal reste un backup en continu pour viser un [RPO](https://fr.wikipedia.org/wiki/Dur%C3%A9e_maximale_d%27interruption_admissible) proche de zéro.

Et il n'existe que la solution vendue par l'éditeur sur son SAAS pour cela. Pas trop grave malgré tout, nous l'avons utilisé et effectivement cela marche plutôt bien.   

\- Le JSON pour écrire des requêtes, passé l'engouement du début c'est quand même peu lisible. Et l'API recèle des petites merveilles en termes de WTF notamment quand on utilise le framework d’agrégation. Rien n'a encore été écrit de plus expressif que le SQL pour interroger ces données. Et ce n'est sans doute pas pour rien que d'autres bases de données ont fini par fournir des syntaxes SQL à leurs utilisateurs : Cassandra CQL, Hadoop Hive. Combien on parie que mongo finira par y venir ?  

\- si l'absence de schéma "visible" existe, vous avez bien sûr des données qui ont un modèle. Tout cela doit vivre dans le temps. Nous avons utilisé mongeez pendant très longtemps (même philosophie que liquibase mais pour mongodb). Sauf que la mise à jour de données dans un univers non transactionnel comporte quelques pièges amusants  

Tout cela reste très mineur, aucun outil n'est parfait et la vitesse de développement avec mongo reste beaucoup plus rapide qu'avec un système traditionnel.  

Alors oui il existe aussi des articles sur le net qui casse pas mal de sucre sur mongo et des problèmes de pertes de données. Mais tous ces articles parlent des premières versions de mongo antérieures à la version 2.2 et malgré le FUD ambiant sur mongo, ça se passe bien.   

## Première alerte 

Jusqu'à 2016, nous n'avions pas encore de gros besoins en termes de reporting data. Nous avions résolu, un peu, ces points en faisant tout d'abord des extractions de données qui étaient ensuite intégrées dans Tableau Software.

Puis nous avions codé des écouteurs d'évènements qui alimentaient un schéma SQL dédié au reporting pour faire du temps réel. Ca n'était pas satisfaisant au vu du temps de maintenance passé dessus. 

Finalement après de nombreux tests nous arrivons à la conclusion que faire de l'analyse de données sur mongo est très difficile, voire impossible, nous construirons une brique plus robuste de synchronisation temps réel mongo vers postgresql. 

Ce composant est open source et vous pourrez trouver [un vieux billet à ce sujet](http://www.eventuallycoding.com/index.php/connecteur-mongo-postgresql) (attention, ce composant a été réécrit entièrement l'année dernière donc prenez bien la dernière version).  

Bref, le choix de notre outil nous handicape clairement pour nos visualisations de données.   

Mais la suite s'avérera tout aussi sympathique.   

## Remise en question

Avec l'arrivée de bons outils de visualisation de données, ce sera aussi l'occasion de se rendre compte de nombreuses données incohérentes en bases de données.   

Mais, c'est en fait tout sauf une surprise. 

En effet, par principe mongo a quelques particularités qu'il faut bien comprendre :

- ce n'est pas transactionnel (tout du moins pas avant la version 4.0)

- aucune relation n'existe entre les tables, donc aucune jointure possible (hormis avec $lookup introduit en 3.2 mais qui reste limité dans son usage)  
    

Le crédo de mongo était de proposer une base de données riche en termes de fonctionnalités mais sans les fonctionnalités impliquant de grosses pertes en performance. C'était censé être le bon compromis fonctionnalités/rapidité.  

Mon avis personnel, non vérifié, c'est que ce mantra s'est imposé APRES que le produit soit devenu populaire. A la toute origine mongo c'est surtout un sous produit d'un PAAS édité par 10gen. Ce PAAS n'a pas fonctionné mais mongo avait plu et il est devenu le produit phare de la société.

Sauf que ce produit initialement conçu comme une sous brique de PAAS pas forcément très évolué s'est retrouvé propulsé comme moteur de base de données pouvant magiquement remplacer des bases de données relationnelles du jour au lendemain. 

Il lui manquait tout un tas de fonctionnalités mais 10gen a réussi à en faire une force en mettant en avant que c'était volontaire. L'absence de transaction et de relations : c'est un choix. Si vous modélisez tout sous forme de documents sans relation, pas besoin de transaction (forcément coûteuse comme mécanisme de synchronisation) et pas besoin de jointure, coûteuse également dans des environnements clusterisé ou les données peuvent résider sur des noeuds différents. 

Pourtant avec le temps mongo a commencé à introduire des solutions de remplacement, $lookup d'abord pour la partie jointure, puis finalement les transactions en version 4.0. 

Mais ces points ne sont presque que le sommet visible de l'iceberg, la gestion des bigdecimaux, les conversions de type, l'égalité entre champs du même document etc... étaient aussi de gros manques sur la base de données. 

De tous les manques dans le langage de requêtage certains ont progressivement été comblé avec de nouveaux opérateurs d’agrégation mais au prix d'une syntaxe toujours plus horrible version après version.

Même si la version 4.0 est attractive, transactions, conversions de type, nouveaux opérateurs, finalement, si l'évolution de mongo depuis le début consiste à rattraper les manques fonctionnels vis à vis des bases relationnelles, pourquoi s'embêter avec mongo ?

Première réponse : l'argument de la rapidité de développement avec mongo.   

## Une rapidité de développement en déclin

En fait avec l'augmentation du volume de code, c'est finalement la modélisation dans mongodb qui va commencer à nous ralentir.

Pour spoiler un tout petit peu, nous avons fait une erreur classique, nous avons pris le seul outil à disposition pour résoudre tous nos problèmes.

Le fameux : "si vous n'avez qu'un marteau, tous les problèmes ressemblent à des clous"

Comme je le disais plus haut, mongodb est non relationnel. Chaque fois que vous modélisez des documents dans une collection vous devez réfléchir si vos documents vont contenir leurs relations ou des références à ces relations, sachant que vous ne pourrez pas faire de jointure dans le second cas.   

Exemple si vous modélisiez ce blog :

- un post de blog peut contenir la liste des commentaires de l'article dans le même document (on parlera d'embarquer les données).

- un post de blog peut contenir l'id de l'auteur mais pas la définition de l'auteur (sinon il serait dupliqué dans chaque article)  
    

Sauf que ce choix embarqué vs référencé correspond bien souvent à un cas d'usage. 

- les tags d'un post de blog peuvent être embarqués si vous ne les utilisez qu'à l'affichage

- vous pourriez choisir de les référencer si vous souhaitez les administrer au global et les normaliser

- les commentaires d'un article s'ils sont embarqués et très nombreux peuvent dépasser la capacité maximale d'un document mongo  
    

Bref, ce choix embarqué vs référencé va entraîner des casses têtes qui vieilliront mal dans le temps parfois ou causeront de nombreuses duplications de données dans d'autres cas.  

La dénormalisation (ou duplication de données si vous préférez) c'est l'un des concepts clés à comprendre avec Mongo. 

Pour des raisons de modélisation, mongo incite forcément à dénormaliser.  

Exemple :

- pour avoir la liste des articles de blog avec plus de 5 commentaires, il est préférable de créer un champ nbComments que l’on incrémentera à chaque ajout de commentaires (c'est une duplication)

- pour ne pas faire de jointure avec la collection des auteurs de commentaires, on pourrait dupliquer les noms/prénoms d'un auteur de commentaire dans chaque article pour l'affichage et pas uniquement conserver l'id  
    

Cette duplication est inévitable et même conseillée dans les bonnes pratiques de mongo pour répondre à de nombreux cas d'usages.  

Avec le temps, ces duplications, ces corrections de modélisations pour gérer de nouveaux cas d'usages vont commencer à être très coûteux. 

Et l'absence de transactionnalité a entraîné des incohérences dans nos données qui pourrait s’illustrer comme suit : un auteur référencé dans un article mais inexistant dans la collection des auteurs, car par exemple l'opération de suppression de l'auteur a planté après la première opération sans avoir le temps de supprimer les commentaires.  

Avec le temps, l'ensemble des garanties proposé par une base de données standards :

- cohérence des données (via les index, clés étrangères, typage)
- le caractère ACID d'un ensemble d'opération 
- les jointures

Tout cela, vous devez le gérer dans votre code. Si ca n'existe pas en base, alors c'est le code qui doit prendre le relais. 

Plus l’application va grandir, plus statistiquement vous allez rencontrer des soucis liés à l’augmentation du trafic (des races conditions par exemple qui ne vous arrivaient jamais avant), et plus vous allez devoir écrire du code défensif.

Et bien là, cela commence à ralentir le développement.

- Il faut des batchs de vérifications de la cohérence des données.
- Il faut parfois implémenter un [two phase commit logiciel](https://docs.mongodb.com/v3.6/tutorial/perform-two-phase-commits/) 
- il faut prévoir tous les cas de plantage et être capable de corriger une donnée incohérente au moment où on la rencontre
- Anecdote amusante, il faut coder de nombreuses fois des gestions d'erreur pour le cas ou un upsert plante pour cause de... violation de clé unique (pourtant la sémantique même de l'upsert ca devrait être d'éviter cela).

Pour recréer certaines pages complexes (tableau de bord par exemple), l'interrogation du modèle est tellement coûteuse que vous devez construire des vues maintenues en temps réel via des systèmes d'observateurs d'évènements. Et ces vues sont régulièrement désynchronisées donc rebelotte, vous devez aussi maintenir un batch de cohérence de donnée.  

Si on prend un peu de recul, tout ceci était évitable si on avait accepté que mongo est une base pour un cas d'usage : des collections de documents hétérogènes et non liées entre eux. Ce n'est absolument pas fait pour recréer l'ensemble du/des modèle(s) d'une application dans lesquels vous modélisez des relations entre vos entités. 

## Digression

Petite parenthèse utile, j’entends parfois des raccourcis qui consiste à penser que mongo est utilisé pour ses performances ou dans un contexte bigdata.  

Sur les performances, c’est discutable et dépendant des cas d’usages. Je m’explique.

Reprenons le blog dont je parlais plus haut. Si vous stockez les commentaires au sein du document “article” alors récupérer l’article et ces commentaires, c’est une requête avec accès à un document.

L’équivalent dans un mode relationnel suppose une jointure et la récupération de n lignes. 

Mécaniquement il y a un overhead.

Par contre si dans mongo vous avez une collection “articles” et une collection “commentaires”, cette fois le nombre d’opérations est supérieur dans mongo.

Bref, comparer les performances entre les deux en lecture ça ne peut se faire que pour votre cas d’usage, votre modélisation. 

Intrinsèquement mongo va proposer des solutions pour être plus rapide (embarquer des documents, absence de transactions) mais qui doivent s’accommoder avec vos contraintes de modèles.

En écriture mongo propose des modes d’acquittements très light qui permettent effectivement d’aller vite (si vous n’avez pas de soucis à perdre des données).  

Et concernant le bigdata ?

Outre le fait que peu de gens font vraiment du BigData, j’ai un avis tronqué sur la question, je considère au contraire que Mongo est plus adapté pour du prototypage rapide au début d’une application. Je ne l’ai jamais considéré comme une base bigdata et la complexité du sharding dans mongo me faire dire que plus on s’en passe, mieux c’est. Mais j’ai peu d’expériences sur le sujet.  

## Le temps de la migration 

En 2018 nous avons rencontré de nombreux problèmes de stabilité de notre solution maison de synchronisation temps réel mongo vers pg. Le volume de la table à synchroniser(plusieurs centaines de millions d'enregistrements) et les changements réguliers de modèle entraînaient des resynchro depuis le début et coûtaient plusieurs jours d'indisponibilité de nos analytiques. Nous avons donc entamé un retour vers postgresql pour cette table là dans un premier temps.

Puis ensuite nous avons choisi de poursuivre avec postgresql pour les nouvelles fonctionnalités et de migrer progressivement les anciennes tables lorsque l'occasion se présentait.

Et bien après plusieurs années de mongo, le retour au SQL c'est perturbant mais très agréable. 

J'avais beau avoir travaillé sur postgresql, mysql, oracle, sybase, sql server, je me suis senti un peu rouillé :) Et je n'étais pas le seul.   

Aujourd'hui en 2019 les nouveaux développements continuent de se faire sur postgresql. Nous avons repris de nombreuses bonnes habitudes, une meilleure modélisation en base de données, moins de duplication, des requêtes plus compréhensibles et puissantes, des garanties plus fortes sur la cohérence, moins de code défensif pour pallier aux manques de la base, moins de (nouveaux) batchs de cohérences.

Tout n'est pas rose bien sûr, nous avons redécouvert des problématiques classiques de base de données (maintenance du schéma par exemple) mais l'expérience est positive.

Nous n'abandonnons pas mongo, une grosse partie de l'application reste dessus pour l'instant et nous nous autorisons à l'utiliser pour des cas simples, des collections de données sans relations entre elles, des données très hétérogènes etc...   

Le tout étant juste de savoir quand utiliser l'un ou l'autre.  

"Si vous n'avez qu'un marteau, tout les problèmes ressemblent à des clous"
