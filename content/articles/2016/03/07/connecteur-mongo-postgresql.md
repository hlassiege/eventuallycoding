---
id: "1235"
title: "Connecteur Mongo Postgresql"
description: "[![47f0a20a1f9df18484d7972fa41472b8[1]](/images/aa1fc-47f0a20a1f9df18484d7972fa41472b81.jpg)](http://eventuallycoding.com/wp-content/uploads/2016/03/a..."
date: "2016-03-07"
categories: 
  - "waza"
tags: 
  - "analytique"
  - "mongodb"
  - "postgresql"
img: "aa1fc-47f0a20a1f9df18484d7972fa41472b81.jpg"
cover: "cover4.jpg"
---

[![47f0a20a1f9df18484d7972fa41472b8[1]](/images/aa1fc-47f0a20a1f9df18484d7972fa41472b81.jpg)](http://eventuallycoding.com/wp-content/uploads/2016/03/aa1fc-47f0a20a1f9df18484d7972fa41472b81.jpg) **TLDR;** on a développé un connecteur permettant de déverser votre base mongo vers Posgresql [disponible sur Github](https://github.com/Hopwork/mongo-connector-postgresql).  
  
Depuis plusieurs années déjà on vous ressasse sans arrêt que vos données forment une grosse partie du capital d'une société. Et c'est encore plus vrai pour une startup web. C'est même assez fréquent qu'une startup soit aujourd'hui capable de lever de l'argent par les données qu'elle possède sans être rentable intrinséquement. Bien sûr beaucoup de vendeurs de solutions tentent par la même occasion de vous vendre des bases de données capable de supporter de gros volumes, des solutions de reporting etc... Mais on ne peut ignorer le point, à l'heure du numérique savoir exploiter ces données est crucial :

- pour rapidement faire un état des lieux de la santé de sa boite (analyse descriptive)
- pour identifier des leviers de croissance par analyse (fouille de données)
- pour prédire des comportements (pour soi ou pour les utilisateurs via des analyses prédictives)

Très bien. Sauf qu'il est possible que vous ayez intégré des solutions [NoSql](https://fr.wikipedia.org/wiki/NoSQL) dans vos applications. Or ces bases sont souvent loin d'avoir le même écosystème mature que les bases relationnelles quand on veut utiliser des outils d'analyse de données.

Bref, ce billet ne va pas vous parler de BI, de nosql, de big data, de machine learning. Non, je vais juste vous présenter un connecteur [mongo](https://www.mongodb.org/) vers [postgresql](http://www.postgresql.org/) pour répondre en partie au problème.

Donc voilà de notre côté nous avons souhaité utiliser des outils d'analyses de données mais nous utilisons majoritairement mongodb. Et nous n'avons pas été emballé par le peu de solutions disponibles. Sur une journée nous avons donc essayé de regarder plusieurs solutions. Pourquoi juste une journée ? Parce qu'il fallait que ce soit simple à comprendre, simple à implémenter. Je ne vous cache pas que certaines solutions ont peut être été écarté trop vite mais si jamais vous faites partie d'une des ces boites, voici quelques petits conseils :

- une vidéo bling bling en motion design c'est super mais sans documentation, capture d'écran, environnement de démo me permettant de savoir ce que je vais vraiment faire avec un produit, je zappe
- pas de page de prix ou un simple "contactez-nous", je passe. En général ca veut dire qu'on va y perdre un bras.
- modèle SAAS sans période d'essai, je zappe

## Les solutions "clés en main"

Par clés en main, j'entends que le produit propose soit solution complète d'interrogation et visualisation des données.

- [Pentaho](http://www.pentaho.com/fr/analytics-for-mongodb) (ne semble pas dispo pour mongo3, prix non communiqué, pas clair sur ce que ca permet de faire vraiment, la vidéo avec des citations Mc Kinsey et Gartner c'est bien pour les lecteurs de 01 informatique mais ca manque un peu de profondeur)
- [slamdata](http://slamdata.com/)  (vive la vidéo qui sert à rien). J'ai téléchargé le produit, ce ne fut pas très intuitif. En dehors de ça il semble y avoir des idées mais la prise en main est vraiment aride.
- [Metabase](http://www.metabase.com/)  piste très intéressante. Mais malheureusement très peu mature encore. Le support de mongodb n'est pas parfait, le produit ne sait pas extraire les dates des ObjectId et ne sait pas encore faire de courbes de cumulative count. Mais à mon avis il faut vraiment regarder à nouveau dans un an.

## La solution exotique

Sur le papier, pourquoi pas. [UnityJdbc](http://www.unityjdbc.com/mongojdbc/mongo_jdbc.php#start) c'est un driver JDBC pour parler avec Mongo. Le prix de la license serveur étant non communiqué, j'ai zappé. Mais si quelqu'un à testé je suis preneur de retour.

En théorie ça ne paraît pas déconnant de pouvoir transcrire des requêtes mongo en SQL. J'ose même espérer qu'un jour mongo le proposera en natif (Vous rigolez peut être mais ce serait pas les seuls à avoir réimplementé un SQL like sur leur moteur). Je suis vraiment peu fan de json pour faire des requêtes. Mais connaissant plutôt bien Mongo et ces limitations, je me doute qu'il n'est pas possible de tout traduire à partir du SQL doncj je serais vraiment preneur de retour sur ce driver si vous en avez.

## Les solution à la mimine

On a fini par regarder des solutions dont le principe est souvent le même, il s'agit de déverser les données de mongo vers une base de données relationnelles. Ensuite le choix de l'outil d'analyse de données est complètement libre.

Pour répliquer des données de mongo il y a une méthode relativement bien accepté qui est de lire les [oplogs de mongo](https://docs.mongodb.org/manual/core/replica-set-oplog/) en ouvrait un [tailable cursor](https://docs.mongodb.org/manual/tutorial/create-tailable-cursor/) et de streamer les modifications vers le système cible.

[![oplog](/images/9d56a-oplog.jpg)](http://eventuallycoding.com/wp-content/uploads/2016/03/9d56a-oplog.jpg)

Vous pouvez le faire vous-mêmes en assemblant des briques génériques :

- [Camel et son connecteur mongo](http://camel.apache.org/mongodb.html). On a testé mais le connecteur semblait vouloir lire des infos dans system.namespaces, collection qui ne semble pas exister donc cela provoquait des erreurs.
- Flume, malheureusement nous n'avons pas trouvé de plugin pour lire dans mongo (seulement pour y écrire)
- Logstash, la brique pour lire dans mongo n'a pas daigné fonctionner.

Sinon il existe des outils dédiées à cela :

- [Le connecteur BI de SlamData](http://slamdata.com/solutions/bi-connector.html), la qualité de la doc fait que c'est resté inaccessible pour nous
- [mosql](https://github.com/stripe/mosql) ca marche très bien !! Mais ca ne gère pas les tableaux embarqués et le projet semble mort depuis un an. Donc...
- [le connecteur BI officiel de Mongodb](https://www.mongodb.com/products/bi-connector). Il ne peut être utilisé qu'avec la license entreprise de Mongo. La dernière fois que je me suis renseigné c'était du 10k par machine. Un peu prohibitif pour une startup donc...

Et puis au hasard d'une réponse sur Twitter on est tombé sur ca : [https://github.com/mongodb-labs/mongo-connector](https://github.com/mongodb-labs/mongo-connector)

Cet outil sort de chez mongo même s'il n'est pas supporté. Il a sans doute du être développé avant le connecteur BI officiel.  On peut craindre par contre qu'il finisse par ne plus être maintenu pour ne pas faire d'ombre au connecteur officiel. Mais sa license permet de le forker si besoin.

Et il ne gère pas de sortie vers postgresql mais il peut être facilement extensible.

Nous avons donc tenté de coder l'extension et voici le résultat [https://github.com/Hopwork/mongo-connector-postgresql](https://github.com/Hopwork/mongo-connector-postgresql)

C'est un prototype. Il fonctionne déjà sur certains de nos cas d'usage et nous pensons continuer avec cette solution pour alimenter une base postgresql.

Si vous souhaitez l'utiliser, vous pouvez l'installer via pip. Ensuite il vous suffit de déclarer un fichier de mappings pour définir les champs et les collections que vous voulez suivre sur Mongo :

{
    "my\_schema": {
        "my\_table" : {
            "\_id" : {"dest" : "\_id", "type" : "TEXT CONSTRAINT mytable\_PK PRIMARY KEY"}, "description" : {"dest" : "description", "type" : "TEXT"}, "enable" : {"dest" : "enable", "type"  : "boolean"}, "myobject\_subproperty" : {"dest" : "subproperty", "type" : "TEXT"}
        }
     }
}

Toutes les opérations dans l'oplog qui concerne cette table seront automatiquement déversé dans my\_table.

N'hésitez pas à prendre connaissance de son fonctionnement, de l'utiliser et à faire des retours.

a+
