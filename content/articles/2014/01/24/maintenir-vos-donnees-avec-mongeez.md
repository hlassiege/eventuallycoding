---
id: "1024"
title: "Maintenir vos données avec Mongeez"
description: "[![mongo](/images/af912-mongo.jpg)](http://eventuallycoding.com/wp-content/uploads/2014/01/af912-mongo.jpg)Vous connaissez peut-être [Liquibase](http:..."
date: "2014-01-24"
categories: 
  - "waza"
tags: 
  - "mongodb"
  - "schemaless"
img: "af912-mongo.jpg"
cover: "cover7.jpg"
---

[![mongo](/images/af912-mongo.jpg)](http://eventuallycoding.com/wp-content/uploads/2014/01/af912-mongo.jpg)Vous connaissez peut-être [Liquibase](http://www.liquibase.org/), [DBMaintain](http://www.dbmaintain.org/overview.html) ou [Flyway](http://flywaydb.org/) ? Si ce n'est pas le cas, je vous conseille d'y jeter un œil.

Le principe de ces outils est simple, il vous permet de versionner et d’exécuter les scripts permettant de faire évoluer vos schémas et vos données.

Une des applications de ces outils vous permet de déployer vos scripts de mises à jour en même temps que votre code applicatif évitant ainsi d'avoir un code applicatif qui change tandis que votre schéma n'est plus en accord avec celui-ci. Pour l'anecdote, c'est sur ce principe que Jira fonctionne par exemple. Lorsque vous mettez à jour le logiciel vous n'avez aucun script SQL à passer. C'est Jira qui s'occupe de mettre son schéma et ses données à jour au démarrage.

Je vous propose de découvrir Mongeez qui a pour but de fournir le même type de fonctionnalités pour MongoDB.

> Mais ? MongoDB est schemaless, on a aucun schéma à mettre à jour ?! Ca sert à rien ton outil !

### Schema less ?

Revenons un instant sur cette notion de "schema less" que beaucoup nous vendent comme une panacée extraordinaire.  On dit d'une base qu'elle est "schema less" si la définition des éléments dans un ensemble de données n'est pas fixé par la base de données. Et apparemment ce serait miraculeux, on pourrait désormais mettre des choux et des carottes dans n'importe quel ensemble ou rajouter des propriétés sans aucun impact.

Démystifions un peu en prenant MongoDB qui justement est vendu comme "schema less".

Tout d'abord, MongoDB contient des informations sur les données qu'il contient :

#### Les index

Ceux-ci sont posés sur des propriétés d'une collection. Ils définissent par exemple qu'une propriété est de type géospatial, qu'elle peut-être unique etc... Toute la stratégie d'indexation repose sur le fait que vous avez un schéma implicite.

Et ce n'est pas propre à MongoDB. Je ne vous parle même pas des stratégies d'indexation d'elasticsearch (via les mappings) qui sont loin d'être neutres lorsque vous décidez de les changer.

#### Les clés de partitionnement.

Là c'est encore plus contraignant. Si vous décidez de recourir au sharding, vous devez définir des clés de sharding/partitionnement. Vos données seront réparties sur les différents shards à partir de cette clé.

#### Les relations entre objets

Lorsque vous avez une association entre deux objets, vous avez plusieurs choix :

- embarquer un objet dans l'autre
- faire référence à cette objet par son ObjectId (ou pas une DBRef)

Prenons un exemple :

```javascript
  db.articles.findOne() 
  {
    '\_id' : 1,
    'title' : 'Mongeez',
    'content' : '....',
    'comments' : \[1,2,3\]  => 1 2 et 3 étant respectivements des Ids dans la collection 'comments'
  }
```

Cette modélisation ne sera pas traité de la même façon dans votre code applicatif que celle-ci :

db.articles.findOne() 
{
 '\_id' : 1,
 'title' : 'Mongeez',
 'content' : '....',
 'comments' : \[{'author' : 'hugo', 'content': '...'},{'author' : 'jb', 'content': '...'},...\]
}

En réalité, être "schema less" a une contrepartie. Si votre base de données gère moins d'informations sur la structure de vos données, rien n'est magique, c'est votre code applicatif qui va le faire pour elle :

- il s'attend à trouver un ensemble de données similaires au sein d'une collection MongoDB. On peut avoir quelques propriétés différentes entre deux documents mais on évite d'avoir des choux et des carottes ([en tout cas ce n'est pas préconisé dans les bonnes pratiques](http://docs.mongodb.org/manual/reference/glossary/#term-collection)).
- les index définis sur votre base vont être utilisés dans les requêtes
- s'il y a partitionnement, la clé devra toujours être présente lors d'une insertion de nouvel objet
- la manière de définir une relation entre deux objets sera géré applicativement (et aura un impact sur le nombre de requêtes)

### Pas de schéma, pas de patch ?

Ok, donc nous venons de voir qu'une partie du "schéma" reposait dans le code applicatif. Du coup, à quoi va me servir un outil de mise à jour du schéma ?

D'une part, si vous avez bien lu ce dont je ne doute pas, vous aurez noté que les index par exemple peuvent être ajoutés ou enlevés sous forme de patch.

D'autre part, si effectivement ce type d'outil propose de réaliser des mises à jour de schéma, il propose aussi de mettre à jour vos données. Et c'est "LA" partie la plus importante.

En fait, même pour une base relationnelle, faire un ALTER TABLE pour ajouter ou enlever une colonne c'est simple, la vraie difficulté commence lorsqu'il faut reporter une modification de schéma sur vos données existantes : fusion de propriétés venant de deux colonnes, extraction d'une propriété venant d'une colonne, dénormalisation d'une donnée (assez courant avec MongoDB), insertion d'une donnée par défaut etc...

Voyons cela en détail.

### Mongeez en quelques étapes

Mongeez vous propose un fonctionnement très proche de ce que l'on retrouve chez Liquibase :

- lecture de la dernière version de changements en base de données
- lecture des fichiers de changements listés dans un fichier de configuration
- déduction et exécution des changements à passer sur la base de données

#### Première étape, instanciation d'un lanceur Mongeez :

Tout d'abord, créez votre lanceur Mongeez. Celui-ci va être en charge d'exécuter les scripts de mises à jour au démarrage de l'application. Ici par exemple avec une configuration Spring par annotation :

@Configuration
public class MongoConfig () {

    @Bean
    public MongeezRunner mongeezRunner() {
        MongeezRunner runner = new MongeezRunner();
        runner.setExecuteEnabled(true);
        runner.setMongo(mongo());
        runner.setDbName("maBase");
        runner.setFile(new ClassPathResource("mongeez.xml"));
        return runner;
    }

    ... définition des autres beans nécessaires à Mongo
}

#### Seconde étape, listez les changements à passer :

Les changements (changesets) sont listés dans un fichier que nous avons appelé mongeez.xml dans le code précédent. Ce fichier contient la liste des changements à apporter dans l'ordre :

<changeFiles>

    <file path="changeset-01.xml"/>

    <file path="changeset-02.js"/>

</changeFiles>

On remarquera que l'on peut avoir des changements décrits en XML ou Javascript.

#### Troisième étape, écrivez vos fichiers de changements :

Vous pouvez regrouper plusieurs changements dans un fichier de changements. Je prends ici l'exemple issu des tests de Mongeez en Javascript :

//changeset mlysaght:ChangeSet-1
db.organization.insert({
    "Name" : "10Gen", "Location" : "NYC", DateFounded : {"Year" : 2008, "Month" : 01, "day" :01}
});
db.organization.insert({
    "Name" : "SecondMarket", "Location" : "NYC", DateFounded : {"Year" : 2004, "Month" : 05, "day" :04}
});

La première ligne de commentaire a son importance. Elle précise l'auteur et le numéro du changement à appliquer. Ici c'est un changeset très simple qui se contente d'insérer des données.

#### Le résultat

Une fois que le Runner se sera déclenché, voici le résultat d'un show collections sur votre base de données :

\> show collections
mongeez
organization
system.indexes
user

Vous noterez l'existence d'une collection mongeez qui stocke le résultat des changements déjà passés :

\> db.mongeez.find().pretty()
{
        "\_id" : ObjectId("52ef8e8e53916204e2287071"),
        "type" : "configuration",
        "supportResourcePath" : true
}
{
        "\_id" : ObjectId("52ef8e8e53916204e2287072"),
        "type" : "changeSetExecution",
        "file" : "changeset1.js",
        "changeId" : "ChangeSet-1",
        "author" : "mlysaght",
        "resourcePath" : "changeset1.js",
        "date" : "2014-02-03T13:41:50+01:00"
}
{
        "\_id" : ObjectId("52ef8e8e53916204e2287073"),
        "type" : "changeSetExecution",
        "file" : "changeset1.js",
        "changeId" : "ChangeSet-2",
        "author" : "mlysaght",
        "resourcePath" : "changeset1.js",
        "date" : "2014-02-03T13:41:50+01:00"
}
{
        "\_id" : ObjectId("52ef8e8e53916204e2287074"),
        "type" : "changeSetExecution",
        "file" : "changeset2.xml",
        "changeId" : "ChangeSet-1",
        "author" : "mlysaght",
        "resourcePath" : "changeset2.xml",
        "date" : "2014-02-03T13:41:50+01:00"
}
{
        "\_id" : ObjectId("52ef8e8e53916204e2287075"),
        "type" : "changeSetExecution",
        "file" : "changeset2.xml",
        "changeId" : "ChangeSet-2",
        "author" : "mlysaght",
        "resourcePath" : "changeset2.xml",
        "date" : "2014-02-03T13:41:50+01:00"
}

Cette collection permet à Mongeez de connaitre quels sont les changements passés, les auteurs et les dates d'application de chaque patch.

C'est déjà terminé car ce n'est pas plus compliqué que ça.

A vos claviers.
