---
id: "1044"
title: "Recherche textuelle avec MongoDB"
description: "[![mongo](/images/af912-mongo.jpg)](http://eventuallycoding.com/wp-content/uploads/2014/01/af912-mongo.jpg)Il y a maintenant 2 ans nous avions choisi ..."
date: "2014-03-06"
categories: 
  - "waza"
tags: 
  - "mongodb"
img: "af912-mongo.jpg"
cover: "cover1.jpg"
---

[![mongo](/images/af912-mongo.jpg)](http://eventuallycoding.com/wp-content/uploads/2014/01/af912-mongo.jpg)Il y a maintenant 2 ans nous avions choisi d'utiliser MongoDB sur [HopWork](http://www.hopwork.com) à l'issu [d'une petite série d'expérimentation](http://www.eventuallycoding.com/index.php/nosql-4-bases-a-la-loupe-14/ "Nosql, 4 bases à la loupe 1/4"). Cette base m'avait séduit pour ces puissantes fonctionnalités de requêtage et sa facilité de mise en oeuvre. Dans ce billet j'aimerais revenir sur les fonctionnalités de recherche textuelles de MongoDB car, si elles sont puissantes, elles comportement aussi quelques pièges.

 

Voyons d'abord notre jeu de données. Il s'agit de document JSON. J'ai pris l'ensemble des membres de www.lateral-thoughts.com comme profiles dans ma collection MongoDB :

db.profile.find()
 { "\_id" : ObjectId("5315c3437fec2f001e01c882"), "firstName" : "Hugo", "lastName" : "Lassiege" }
 { "\_id" : ObjectId("5315c3567fec2f001e01c883"), "firstName" : "Jean-Baptiste", "lastName" : "Lemée" }
 { "\_id" : ObjectId("5315c3647fec2f001e01c884"), "firstName" : "Olivier", "lastName" : "Girardot" }
 { "\_id" : ObjectId("5315c36e7fec2f001e01c885"), "firstName" : "Florent", "lastName" : "Biville" }
 { "\_id" : ObjectId("5315c3777fec2f001e01c886"), "firstName" : "Nicolas", "lastName" : "Rey" }
 { "\_id" : ObjectId("5315c37f7fec2f001e01c887"), "firstName" : "Vincent", "lastName" : "Doba" }
 { "\_id" : ObjectId("5315c38a7fec2f001e01c888"), "firstName" : "Jonathan", "lastName" : "Dray" }
 { "\_id" : ObjectId("5315c3937fec2f001e01c889"), "firstName" : "Stuart", "lastName" : "Corring" }

Faisons une première recherche simple pour trouver une personne par son nom de famille :

db.profile.find({lastName:"Lassiege"})
 { "\_id" : ObjectId("5315c3437fec2f001e01c882"), "firstName" : "Hugo", "lastName" : "Lassiege" }

Fonctionnellement, cette recherche est équivalent à utiliser l'opération $in :

db.profile.find({lastName : {$in:\["Lassiege"\]}})
 { "\_id" : ObjectId("5315c3437fec2f001e01c882"), "firstName" : "Hugo", "lastName" : "Lassiege" }

Jusqu'ici tout va bien. Regardons cependant nos deux requêtes avec un explain plan :

db.profile.find({lastName:"Lassiege"}).explain()
 {
 "cursor" : "BasicCursor",
 "isMultiKey" : false,
 "n" : 1,
 "nscannedObjects" : 8,
 "nscanned" : 8,
 "nscannedObjectsAllPlans" : 8,
 "nscannedAllPlans" : 8,
 "scanAndOrder" : false,
 "indexOnly" : false,
 "nYields" : 0,
 "nChunkSkips" : 0,
 "millis" : 0,
 "indexBounds" : {},
 "server" : "HUGO:27017"
 }

Cet explain plan nous indique que nous avons scanné nos 8 éléments pour trouver notre résultat. Pas très grave dans le cas présent, mais parcourir l'ensemble des éléments d'une collection sera rapidement problématique sur une plus grosse volumétrie.

Nous allons poser un index pour résoudre ce point et améliorer nos recherches.

db.profile.ensureIndex({lastName : 1})
db.profile.find({lastName : {$in:\["Lassiege"\]}}).explain()
 {
 "cursor" : "BtreeCursor lastName\_1",
 "isMultiKey" : false,
 "n" : 1,
 "nscannedObjects" : 1,
 "nscanned" : 1,
 "nscannedObjectsAllPlans" : 1,
 "nscannedAllPlans" : 1,
 "scanAndOrder" : false,
 "indexOnly" : false,
 "nYields" : 0,
 "nChunkSkips" : 0,
 "millis" : 0,
 "indexBounds" : {
    "lastName" : \[
       \[
      "Lassiege",
      "Lassiege"
      \]
    \]
  },
 "server" : "HUGO:27017"
 }

C'est déjà mieux. Nos deux requêtes passent désormais par cet index et effectuent une seule lecture par l'index.

Jusqu'ici tout va bien.

Mettons que désormais nous choisissions de chercher "**l**assiege" et non "**L**assiege".

db.profile.find({lastName:"lassiege"})

Aucun résultat... C'est le drame. Il s'agit d'une recherche "exacte".

Pour le fun, on pourrait utiliser une première méthode avec l'opérateur [$where](http://docs.mongodb.org/manual/reference/operator/query/where/) :

db.profile.find( { $where: "this.lastName.toUpperCase() == 'lassiege'.toUpperCase()" } );
 { "\_id" : ObjectId("5315c3437fec2f001e01c882"), "firstName" : "Hugo", "lastName" : "Lassiege" }

Cet opérateur permet d'appliquer une fonction Javascript pour évaluer si un élément match ou non.

Pour être clair, si cet opérateur est peu utilisé, il y a une raison. Il ne profite pas de l'index posé sur la collection. On va vite oublier... **Il n'est pas recommandé d'utiliser cette technique.**

Le lecteur malin qui a suivi le dernier lien vers la doc disséminé dans ce texte aura remarqué la présence de l'opérateur $regex que l'on pourrait utiliser pour notre recherche :

db.profile.find({lastName : {$regex: /lassiege/i}})
 { "\_id" : ObjectId("5315c3437fec2f001e01c882"), "firstName" : "Hugo", "lastName" : "Lassiege" }

La regexp /lassiege/i permet en effet d'effectuer une recherche non sensible à la casse. Malheureusement, cette recherche ne profite pas non plus de notre index.

A noter d'ailleurs que les seules recherches avec une regexp qui profiteront de l'index sont les requêtes du type "Commençant par" (avec un ^) et non case insensitive.

Bon alors, on ne peut pas rechercher efficacement de façon insensible à la casse ?

En réalité il existe deux techniques utilisées avec MongoDB.

## Avant la 2.4

Comme très souvent avec MongoDB, la réponse consiste à dupliquer l'information. Ainsi, une possibilité sera de stocker dans notre objet "profile" un champ last**n**ame contenant le champ last**N**ame mais normalisé selon notre besoin de recherche.

{ "\_id" : ObjectId("5315c3437fec2f001e01c882"), "firstName" : "Hugo", "lastName" : "Lassiege", "lastname" : "lassiege" }

Ce champ pourra être utilisé lors d'une recherche avec un paramètre dont vous aurez changé la casse également.

Soyons clair, certains vont considérer que c'est "étrange" mais c'est la manière traditionnelle de le faire. **Et c'est toujours la technique à privilégier aujourd'hui.**

## Depuis la 2.4

Nous allons tirer parti d'une nouvelle fonctionnalité qui a été introduite en 2.4 : les index full text. Et nous verrons que ce n'est pas la panacée.

Tout d'abord, il s'agit d'une fonctionnalité en statut béta, non recommandé en production. Il faut l'activer au démarrage pour pouvoir l'utiliser :

mongod --setParameter textSearchEnabled=true

Nous pouvons désormais ajouter cet index full text :

db.profile.ensureIndex({lastName : "text"})

La recherche va devoir être faite via une **commande** et non via la méthode find habituelle.

db.profile.runCommand("text", {search:"lassiege"})
 {
 "queryDebugString" : "lassieg||||||",
 "language" : "english",
 "results" : \[
     {
        "score" : 1,
        "obj" : {
           "\_id" : ObjectId("5315c3437fec2f001e01c882"),
           "firstName" : "Hugo",
           "lastName" : "Lassiege",
           "lastname" : "lassiege"
        }
     }
  \],
 "stats" : {
     "nscanned" : 1,
     "nscannedObjects" : 0,
     "n" : 1,
     "nfound" : 1,
     "timeMicros" : 285
 },
 "ok" : 1
 }

A noter que l'on retrouve la possibilité de faire des filtres, des projections, une limitation du nombre de résultat mais pas de tri. Car le tri est donné par la pertinence du résultat renvoyé par la recherche full text.

C'est un peu dommage car c'est assez peu homogène avec le reste. On aurait préféré passer par un find :

- avec éventuellement l'utilisation d'un [Hint](http://docs.mongodb.org/manual/reference/operator/meta/hint/) pour forcer le passage par l'index full text. db.profile.find(...).hint({lastname: "text"})
- ou mieux, avec un opérateur spécifique $text db.profile.find({lastName : {$text : "lassiege"}})

Et on aurait aimé contrôler le tri pour utiliser nos propres tris si besoin.

Pour conclure sur les index Full Text. Il faut bien se méfier sur leur utilisation :

- Ils sont plus gourmands en espace disque (on stocke tous les tokens)
- Ils sont plus coûteux à l'écriture (puisque MongoDB passe du temps à analyser vos termes et que le coût de stockage est plus lourd)
- On ne peut pas avoir plusieurs index Full Text sur une collection. A la place on peut avoir uniquement un index Full Text qui regroupe plusieurs champs (la différence est importante)

En fait, pour ce cas d'usage, où il s'agit de gérer une recherche non sensible à la casse sur des noms de familles, la première méthode est la méthode à privilégier. Mais cela vous a peut-être permis de découvrir cette fonctionnalité.

Voilà c'est terminé. Vous venez de voir différents opérateurs pour vos recherches, les pièges relatifs à l'utilisation de certain d'entre eux, l'indexation et l'indexation full text.

Vous pouvez retourner à vos claviers.
