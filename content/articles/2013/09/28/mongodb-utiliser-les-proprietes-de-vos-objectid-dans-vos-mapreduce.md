---
id: "970"
title: "MongoDB : Utiliser les propriétés de vos ObjectId dans vos MapReduce"
description: "Je vous propose de voir deux fonctionnalités plutôt pratiques de [MongoDB](http://www.mongodb.org/) dans ce billet. D’une part je vais vous parler de ..."
date: "2013-09-28"
categories: 
  - "waza"
tags: 
  - "mapreduce"
  - "mongodb"
img: "objectid.png"
cover: "cover7.jpg"
---

Je vous propose de voir deux fonctionnalités plutôt pratiques de [MongoDB](http://www.mongodb.org/) dans ce billet. D’une part je vais vous parler de certaines propriétés très intéressantes des [ObjectId](http://docs.mongodb.org/manual/reference/object-id/), la classe qu’utilise MongoDB pour générer les identifiants de vos entités, et ensuite je vais vous montrer comment utiliser cette propriété dans un exemple tout simple avec un MapReduce.

## ObjectId

MongoDB est une base de données orientée documents dans laquelle vous pouvez stocker des documents Json dans des collections, elles-mêmes regroupées dans des bases de données.

Chaque document Json doit contenir une propriété \_id qui identifie de manière unique votre document au sein de votre collection.

Par exemple :

{
"\_id" : 1
… autre propriétés
}

Par défaut, MongoDB vous propose de générer lui-même des identifiants grâce aux ObjectId :

{

 "\_id" : ObjectId("5197c6b453cce2ec3a743811")
}

Comme MongoDB privilégie avant tout la scalabilité, ces identifiants ne sont pas générés par un processus centralisé. Évidemment quand vous les laissez générer côté serveur, l’intérêt reste limité puisque vous n’avez qu’un seul maître actif. Mais ces ObjectId peuvent être générés côté client (et certains drivers marchent de cette façon).

Ces identifiants doivent donc être “à priori uniques” sans avoir besoin d’un mécanisme complexe de synchronisation avec le serveur.

Pour cela MongoDB utilise les ObjectId qui contiennent un identifiant sur 12 bytes.

- 4 bytes qui représentent le timestamp courant (nombre de secondes depuis epoch)
- 3 bytes pour identifier la machine
- 2 bytes pour représenter l’identifiant du processus
- 3 bytes qui représentent un compteur qui démarre à un numéro aléatoire

![](/images/objectid.png)

Cet ObjectId a donc une propriété très intéressante, il contient automatiquement la date de création de votre entité !

Ce qui nous permet d’écrire le code suivant par exemple sur le MongoShell :

var id = ObjectId()
print(id)
ObjectId("5247019073ed0c203c79b995")
print(id.getTimestamp())
ISODate("2013-09-28T16:19:28Z")

Et si nous utilisions cette propriété pour obtenir quelques statistiques ?

## MapReduce

Les algorithmes de MapReduce permettent de traiter des données en découpant votre problème initial en plusieurs sous-problèmes.

L’idée étant d’appliquer la même fonction a des sous ensembles de votre jeu de donnée initial (via une fonction map), puis d’appliquer une “réduction” de ces résultats pour les agréger et trouver le résultat final.

[![mapreduce](/images/fcd2c-mapreduce.png)](http://eventuallycoding.com/wp-content/uploads/2013/09/fcd2c-mapreduce.png)

Ce type d’algorithme est géré nativement par MongoDB.

Pour cela vous devez définir une fonction map qui va émettre des couplés clés-valeurs.

Une fonction reduce qui va s’occuper de l'agrégation et ensuite vous appliquez une commande MapReduce sur l’ensemble.

Ici, par exemple si on veut compter le nombre d’éléments dans votre collection

_(l’exemple est volontairement simpliste et n’a aucun intérêt puisque vous pouvez utiliser db.mycollection.count() pour le même résultat)_

map = function() {
	emit(1,1);
}

reduce = function(key, values) {
	return  Array.sum(values);
}

db.mycollection.mapReduce( map , reduce , { out : “results” } )
{
        "result" : "results",
        "timeMillis" : 751,
        "counts" : {
                "input" : 113,
                "emit" : 113,
                "reduce" : 2,
                "output" : 1
        },
        "ok" : 1,
}

Le résultat de ce MapReduce est désormais consultable dans la collection results et sans surprise nous n’avons qu’une seule ligne qui contient notre somme :

db.results\_tst.find()
{ "\_id" : 1, "value" : 113 }

Bon, maintenant faisons quelque chose de plus intéressant et utilisons les ObjectId que nous avons vu au dessus.

Imaginons que vous avez un site qui contient une liste d’inscrits et que l’on vous demande le nombre d’inscription par mois.

Votre inscrit très basiquement :

{
 "\_id" : ObjectId("5197c6b453cce2ec3a743811"),
“firstname” : “Hugo”,
“lastname” : “Lassiege”
}

### Comment nous l’aurions résolu en SQL :

En SQL, vous auriez du ajouter une colonne figurant la date de création de chaque compte :

ID = 1
firstname = Hugo
lastname = Lassiege
created = une date (exemple: 26 septembre 2013)

Ensuite vous auriez appliqué une requête ressemblant à ceci :

SELECT COUNT(ID)
FROM accounts
GROUP BY YEAR(created), MONTH(created)

Afin d’éviter de faire cette requête sans arrêt nous l’aurions placé dans une vue afin de profiter d’un minimum de cache (et simplifier le requètage) :

CREATE VIEW results as SELECT COUNT(ID)
FROM accounts
GROUP BY YEAR(created), MONTH(created)

Certaines bases proposent d’utiliser des vues matérialisées qui ne se rafraîchissent qu’à intervalle régulier vous évitant de relancer constamment le même calcul pour rien.

(A noter que Mysql ne le supporte pas)

### Comment nous pouvons le résoudre avec MongoDB

Déjà partons du principe que vous n'aviez pas pensé à ajouter le champ created, grâce aux ObjectId vous pourriez quand même vous en sortir :)

Tout d’abord nous allons créer une fonction map qui va émettre des clés qui contiendront l’année et le mois de chaque record. Nous allons utiliser la méthode getTimestamp() de ObjectId qui nous renvoie une date.

Il faut voir cette fonction comme l’équivalent du GROUP BY YEAR(created), MONTH(created) fait précédemment :

map = function() { 
var key = {   y : this.\_id.getTimestamp().getFullYear(),   
         m : this.\_id.getTimestamp().getMonth()+1   };  
emit(key,1); 
}

Ensuite la fonction reduce qui se contentent de faire une somme, l’équivalent de notre SELECT count(ID) :

reduce = function(key, values) { 
return Array.sum(values); 
}

Et enfin l’application de la commande :

db.accounts.mapReduce( map , reduce , { out : “account\_stats” } )
db.account\_stats.find()
{ "\_id" : { "year" : 2013, "month" : 5 }, "value" : 200 }
{ "\_id" : { "year" : 2013, "month" : 6 }, "value" : 145 }
{ "\_id" : { "year" : 2013, "month" : 7 }, "value" : 32 }
{ "\_id" : { "year" : 2013, "month" : 8 }, "value" : 45 }
{ "\_id" : { "year" : 2013, "month" : 9 }, "value" : 320 }

Vous remarquerez que nous n’avons pas besoin de relancer le calcul à chaque nouvelle demande puisque la collection de sortie est désormais consultable très facilement.

Maintenant optimisons un peu cela.

On remarque très rapidement que recalculer systématiquement pour les mois passés n’a aucun sens puisque ces données ne peuvent plus changer. Nous allons donc utiliser un MapReduce incrémental.

Pour cela, il vous suffit d’appliquer deux options supplémentaires à votre commande :

db.accounts.mapReduce( map , reduce , { 
out : { merge: "account\_stats" },
query : { \_id: { $gt: objectIdWithTimestamp(2013/09/01') } },
} )

Ici nous avons utilisé deux astuces.

Par défaut, le résultat d’un map reduce remplace toutes les données présentes dans la collection de sortie.

Mais nous pouvons préciser le paramètre **merge** pour que les résultats soient fusionnés avec des résultats déjà présents.

Cela va nous permettre de n’ajouter que les résultats concernant les derniers mois.

Et nous allons utiliser le paramètre **query** pour limiter le jeu de données sur lequel appliquer l’algorithme.

Ici nous utilisons une méthode que vous devez définir au préalable permettant de créer un ObjectId à partir d’une date :

function objectIdWithTimestamp(timestamp)
{
    // Convert string date to Date object (otherwise assume timestamp is a date)
    if (typeof(timestamp) == 'string') {
        timestamp = new Date(timestamp);
    }

    // Convert date object to hex seconds since Unix epoch
    var hexSeconds = Math.floor(timestamp/1000).toString(16);

    // Create an ObjectId with that hex timestamp
    var constructedObjectId = ObjectId(hexSeconds + "0000000000000000");

    return constructedObjectId
} 

(source : [http://stackoverflow.com/questions/8749971/can-i-query-mongodb-objectid-by-date](http://stackoverflow.com/questions/8749971/can-i-query-mongodb-objectid-by-date))

Et voila, vous avez désormais un mapreduce incrémental. On remarquera quand même que l'utilisation d'une date aurait malgré tout simplifié l'écriture de la query de filtrage mais nous nous en sommes sortis sans champ "created".

Et c’est terminé. Nous aurions pu voir encore de multiples choses, comment lancer un MapReduce en Java ou comment faire la même chose avec le framework d’aggrégation de MongoDB. Peut-être une autre fois.

Ou bien vous pouvez aussi me contacter pour [une formation sur MongoDB](http://www.lateral-thoughts.com/formations/formation-mongodb) si jamais ça vous intéresse ;)
