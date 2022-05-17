---
id: "1070"
title: "Mongodb covered query"
description: "[![mongo](/images/af912-mongo.jpg)](http://eventuallycoding.com/wp-content/uploads/2014/01/af912-mongo.jpg)Aujourd’hui je souhaite revenir un petit pe..."
date: "2014-03-27"
categories: 
  - "waza"
tags: 
  - "mongodb"
img: "af912-mongo.jpg"
cover: "cover4.jpg"
---

[![mongo](/images/af912-mongo.jpg)](http://eventuallycoding.com/wp-content/uploads/2014/01/af912-mongo.jpg)Aujourd’hui je souhaite revenir un petit peu sur les mécanismes d’indexation de MongoDB. Récemment j’avais insisté sur le fait que la stratégie d’indexation était importante [et fixait en partie votre schéma](http://www.eventuallycoding.com/index.php/maintenir-vos-donnees-avec-mongeez/). J’avais également parlé des [index full text](http://www.eventuallycoding.com/index.php/recherche-textuelle-avec-mongodb/). Je compte continuer encore un peu sur ce thème et pour ce billet, nous allons aborder les covered query.

Les covered query, kesako ?

 

Le concept est très simple, il s’agit d’une requête de sélection passant entièrement par un de vos index.

Pour rappel, un index est une sorte de dictionnaire inversé permettant de retrouver rapidement vos documents lors d’une recherche.

Faisons un parallèle avec la vie réelle.

Prenons l’annuaire téléphonique, il s’agit d’un index permettant de retrouver un numéro de téléphone via un nom, prénom et une adresse.

[![pagesjaunes](/images/087e3-pagesjaunes.png)](http://eventuallycoding.com/wp-content/uploads/2014/03/087e3-pagesjaunes.png)

Vous avez pris l’habitude d’avoir que très peu d’opérations :

- saisie du nom/prénom et de la ville
- cliquer sur “Trouver”
- affichage du(des) résultats et des numéros de téléphone
- appel

 

Si vous recherchez une entreprise, vous pouvez cependant trouver plus d’infos en cliquant sur le nom de l’entreprise. Vous avez une seconde page avec :

- des avis
- des photos (du lieu)
- les transports en commun les plus proches

 

Vous avez donc une action supplémentaire : l’affichage des informations détaillées.

C’est évidemment moins rapide.

 

Pour revenir à MongoDB, on peut considérer que la première recherche est couverte par l’index. Vous cherchiez un numéro de téléphone, celui-ci est contenu dans l’index et affiché directement.

La seconde recherche (les avis) n’est pas couverte par l’index, vous avez du aller chercher les informations détaillées en plus de la recherche dans l’index téléphonique.

 

**Sur une base de données, cela signifie que votre recherche n’a eu besoin que de parcourir l’index, car toutes les données que vous souhaitiez afficher étaient dans l’index.**

Mettons cela en pratique sur Mongo. Partons des profiles suivants :

 

db.profile.find().pretty()
{
      "\_id" : "jblemee",
      "firstName" : "Jean-Baptiste",
      "lastName" : "Lemée",
      "skills" : \[
              "java",
              "spring",
              "redis"
      \]
}{
      "\_id" : "ogirardot",
      "firstName" : "Olivier",
      "lastName" : "Girardot",
      "skills" : \[
              "java",
              "python",
              "lucene",
              "nlp"
      \]
}{
      "\_id" : "hlassiege",
      "firstName" : "Hugo",
      "lastName" : "Lassiege",
      "skills" : \[
              "python",
              "java",
              "mongodb"
      \]
}{
      "\_id" : "fbiville",
      "firstName" : "Florent",
      "lastName" : "Biville",
      "skills" : \[
              "java",
              "spring",
              "neo4j"
      \]
}{
      "\_id" : "nrey",
      "firstName" : "Nicolas",
      "lastName" : "Rey",
      "skills" : \[
              "java",
              "react.js",
              "backbone"
      \]
}{
      "\_id" : "vdoba",
      "firstName" : "Vincent",
      "lastName" : "Doba",
      "skills" : \[
              "java",
              "puppet",
              "nlp"
      \]
}{
      "\_id" : "jdray",
      "firstName" : "Jonathan",
      "lastName" : "Dray",
      "skills" : \[
              "java",
              "python",
              "linkeddata",
              "search engine"
      \]
}{
      "\_id" : "scorring",
      "firstName" : "Stuart",
      "lastName" : "Corring",
      "skills" : \[
              "python",
              "angular",
              "knockout",
              "dev mobile"
      \]
}

Réalisons un premier explain avec une recherche par lastName :

\> db.profile.find({lastName : "Lassiege"}).explain()
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
        "indexBounds" : {

        },
        "server" : "HUGO"
}

 

Nous avons affaire à un full scan. Nous allons donc ajouter un index :

db.profile.ensureIndex({lastName : 1})

> db.profile.find({lastName : "Lassiege"}).explain()
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
        "server" : "HUGO"
}

Désormais nous passons par l’index.

Cependant, nous allons nous intéresser à cette partie de l’explain :

 **"indexOnly" : false**

 Nous n’avons pas utilisé seulement l’index. Pour afficher le firstName ou les skills, il a fallu interroger l’index puis la collection.

Si on souhaitait utiliser une covered query, il faudrait que les informations à afficher soient uniquement dans l’index. Pour cela nous pouvons utiliser une projection et inclure uniquement les champs souhaités.

Une projection c’est un peu l’équivalent d’un SELECT champ1, champ2 en SQL.  Avec MongoDB on donne en second argument du find un objet qui décrit les champs à inclure/exclure du résultat :

\> db.profile.find({lastName : "Lassiege"}, {lastName:1, \_id:0})
{ "lastName" : "Lassiege" }

Avec un explain :

\> db.profile.find({lastName : "Lassiege"}, {lastName:1, \_id:0}).explain()
{
        "cursor" : "BtreeCursor lastName\_1",
        "isMultiKey" : false,
        "n" : 1,
        "nscannedObjects" : 0,
        "nscanned" : 1,
        "nscannedObjectsAllPlans" : 0,
        "nscannedAllPlans" : 1,
        "scanAndOrder" : false,
        "indexOnly" : true,
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
        "server" : "HUGO"
}

Cette fois nous avons indexOnly:true. Nous n’avons pas été interroger la collection.

Oui, bon, sauf qu’on affiche ce qu’on recherchait. Pas très utile...

Imaginons que nous souhaitions afficher uniquement firstName et lastName, alors il serait possible pour notre cas d’usage d’ajouter le firstName dans l’index via un index composé. Ce qui nous permettrait par la suite d’afficher lastName et firstName sans jamais repasser par la collection. Essayons :

db.profile.ensureIndex({lastName : 1, firstName : 1})

> db.profile.find({lastName : "Lassiege"}, {lastName:1, firstName:1, \_id:0}).explain()
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
        "server" : "HUGO"
}

 

indexOnly : false  ?!?

Naivement on aurait pu s’attendre à utiliser uniquement l’index. Cependant dans ce cas présent, la requête a utilisé le premier index que nous avions défini plus haut : lastName\_1. Et cet index ne contient pas le champ firstName.

Si nous voulons arriver à nos fins, nous allons devoir forcer le passage par le nouvel index via un hint :

\> db.profile.find({lastName : "Lassiege"}, {lastName:1, firstName:1, \_id:0}).hint({"lastName":1,"firstName":1}).explain()
{
        "cursor" : "BtreeCursor lastName\_1\_firstName\_1",
        "isMultiKey" : false,
        "n" : 1,
        "nscannedObjects" : 0,
        "nscanned" : 1,
        "nscannedObjectsAllPlans" : 0,
        "nscannedAllPlans" : 1,
        "scanAndOrder" : false,
        "indexOnly" : true,
        "nYields" : 0,
        "nChunkSkips" : 0,
        "millis" : 0,
        "indexBounds" : {
                "lastName" : \[
                        \[
                                "Lassiege",
                                "Lassiege"
                        \]
                \],
                "firstName" : \[
                        \[
                                {
                                        "$minElement" : 1
                                },
                                {
                                        "$maxElement" : 1
                                }
                        \]
                \]
        },
        "server" : "HUGO"
}

 Et cette fois, nous avons bien "indexOnly" : true.

Reessayons cette fois-ci avec les skills.

On ajoute un index composé :

\> db.profile.ensureIndex({lastName:1, skills:1})

On réalise une requête avec projection sur lastName et skills en forcant l’utilisation de notre nouvel index :

\> db.profile.find({lastName : "Lassiege"}, {lastName:1, skills: 1, \_id:0}).hint({lastName:1, skills:1})
{ "lastName" : "Lassiege", "skills" : \[  "python",  "java",  "mongodb" \] }

 

On regarde l’explain :

\> db.profile.find({lastName : "Lassiege"}, {lastName:1, skills: 1, \_id:0}).hint({lastName:1, skills:1}).explain()
{
        "cursor" : "BtreeCursor lastName\_1\_skills\_1",
        "isMultiKey" : true,
        "n" : 1,
        "nscannedObjects" : 1,
        "nscanned" : 3,
        "nscannedObjectsAllPlans" : 1,
        "nscannedAllPlans" : 3,
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
                \],
                "skills" : \[
                        \[
                                {
                                        "$minElement" : 1
                                },
                                {
                                        "$maxElement" : 1
                                }
                        \]
                \]
        },
        "server" : "HUGO"
}

 

Et le résultat nous montre qu’un index sur un tableau ne permet pas d’utiliser une covered query.

Voilà, j’espère que ce billet fut intéressant pour ceux qui utilisent Mongodb et qui ne connaissaient pas le concept de covered query.

A bientôt.
