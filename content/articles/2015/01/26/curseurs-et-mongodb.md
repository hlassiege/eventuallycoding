---
id: "1137"
title: "Curseurs et Mongodb"
description: "A chaque fois que je donne la formation Mongo je reste étonné lors de ce slide (qui fait le parallèle entre les termes utilisé en relationnel et avec ..."
date: "2015-01-26"
categories: 
  - "waza"
tags: 
  - "jongo"
  - "mongodb"
img: "43c58-slideterminology.jpg"
cover: "cover1.jpg"
---

A chaque fois que je donne la formation Mongo je reste étonné lors de ce slide (qui fait le parallèle entre les termes utilisé en relationnel et avec Mongo) ;

[![](/images/43c58-slideterminology.jpg)](http://eventuallycoding.com/wp-content/uploads/2015/01/43c58-slideterminology.jpg)

Si chaque participants comprend tout de suite la correspondances des termes entre le monde relationnel et Mongodb pour toutes les lignes, je sens une sorte de "blanc" sur la dernière :

_Curseur => Curseur_

Si la notion est quasi identique entre les deux mondes, la véritable difficulté provient du fait que peu de gens connaissent cette notion de curseur dans le monde relationnel. Et j'avoue que cela me surprend. Profitons d'un petit billet pour en discuter.

La notion elle-même : un curseur s'applique sur un ensemble d'enregistrements ramené par une requête. Un curseur reprend grosso modo deux notions : - la notion de pointeur, un curseur est un pointeur sur une ligne de votre ensemble de résultats - la notion d'itérateur, un curseur permet de traverser/d'itérer sur vos résultats.

[![curseur](/images/668c1-curseur.jpg)](http://eventuallycoding.com/wp-content/uploads/2015/01/668c1-curseur.jpg)

## Voyons comment cela se traduit en Java.

En Java vous utilisez des ResultSet pour parcourir vos résultats : (issu de la doc du driver jdbc de postgresql) :

Statement st = conn.createStatement();
ResultSet rs = st.executeQuery("SELECT \* FROM mytable WHERE columnfoo = 500");
while (rs.next())
{
   System.out.print("Column 1 returned ");
   System.out.println(rs.getString(1));
} 
rs.close();
st.close();

Le comportement par défaut est de tout récupérer en mémoire. Autrement dit votre ResultSet n'est pas attaché à un curseur en base de données. Celui-ci a déjà été fermé. Mais dans le cas où vous souhaiteriez ne pas monter l'ensemble des résultats en mémoire, vous pouvez jouer avec setFetchSize :

// Turn use of the cursor on.
st.setFetchSize(50);
ResultSet rs = st.executeQuery("SELECT \* FROM mytable");
while (rs.next())
{
    System.out.print("a row was returned.");
}
rs.close();

Dans ce cas vous avez une correspondance entre un curseur (un pointeur sur une ligne de résultats) et votre ResultSet.

Vous imaginez bien lorsqu'on vous parle de pointeur, qu'il s'agit d'une ressource. Et comme toute ressource, on peut arriver à l'épuiser. Bon, il se trouve que le comportement par défaut à la fin d'une transaction c'est de fermer le curseur, donc en principe si vous faites tout dans les rêgles, que vous fermez correctement vos ResultSet, Statements etc... et que vous avez une bonne gestion de vos transactions, c'est transparent pour vous. Ca n'empêche pas que certaines bases de données vous permettent de contrôler le nombre maximum de curseurs ouvert et que vous avez intérêt à ce que ce soit cohérent avec le nombre de connexions dans votre pool de connexions. Par exemple avec Oracle, si vous avez déjà eu affaire à l'erreur _ORA-01000: maximum open cursors exceeded_, vous savez de quoi je parle. Vous ne pouvez pas avoir plus de ResultSet ouvert que de curseurs disponibles.

Bref récapitulons, le curseur pointe vers vos données, il permet d'itérer sur les lignes de votre jeu de résultats et il est en directe relation avec un ResultSet en Java si vous récupérez vos données par paquets.

## Et avec Mongo ?

Eh bien le concept est relativement proche à une différence importante, il n'existe pas de transactions !!

En principe si vous avez suivi, une question doit tout de suite vous venir ?

"Hum, et donc, comment le curseur se ferme-t-il ?"

Deux réponses à cela : - le driver que vous utilisez s'en occupe pour vous à la fin de son itération sur un jeu de résultats - au dela d'un certain timeout, le curseur se ferme automatiquement côté base de données ou s'il détecte que vous êtes arrivés à la fin du curseur (que vous l'avez entièrement parcouru).

## Illustrons cela avec Jongo en Java.

Jongo est un framework qui se place au dessus du driver Java pour Mongodb. Voici par exemple une itération sur un résultat :

Iterable things = things.find().as(Thing.class);
for (Thing thing : things) {
   ... // do something
}

Lors du find, Mongodb a ouvert un curseur. Ce curseur va vous permettre d'itérer sur les résultats. L'intérêt de la chose c'est que vous allez récupérer vos enregistrements par paquets. En effet, à l'inverse du comportement par défaut des ResultSet en Java qui consiste à tout ramener en un seul appel réseau, Mongodb va ramener vos résultats par lots de 20 résultats. L'idée étant de limiter le volume d'informations en mémoire à un instant t.

Si par contre vous écriviez ceci avec Guava:

List things = Lists.newArrayList(things.find().as(Thing.class));

Vous feriez, peut être sans le vouloir, un parcours complet de votre curseur et une instanciation complète de vos résultats dans une ArrayList montant ainsi tous vos résultats en mémoire. Pas très grave dans certains cas, ce code peut rapidement poser problème si la volumétrie augmente.

Depuis Jongo 1.2, la méthode find renvoie un MongoCursor, or MongoCursor implémente Iterator et Iterable, l'écriture précédente est donc incorrecte car ambigue. Lists.newArrayList a en effet deux signatures, une avec Iterator et une avec Iterable qui rentrent en conflit. Etait-ce voulu pour vous dissuader de monter vos résultats en mémoire ? Je ne sais pas. Mais vous pouvez toujours écrire ceci pour le même résultat :

ImmutableList things = FluentIterable.from(things.find().as(Thing.class)).toList();

Si Jongo 1.2 introduit les MongoCursor, c'est cependant pour répondre à un autre problème des curseurs, le timeout.

En effet il se peut que vous rencontriez l'erreur suivante :

_com.mongodb.MongoException$CursorNotFound: cursor not found on server_

Cette erreur se produit lorsque vous itérez sur votre curseur que celui-ci se ferme. Sans doute que vos opérations sont trop longues au sein de votre boucle mais j'imagine que vous allez faire une drôle de tête en découvrant que votre curseur vient de se fermer.

Contre cela, vous avez donc la possibilité de spécifier que vous ne souhaitez pas de timeout pour cette requête :

Iterable things = things.find().with(c -> c.addOption(QUERYOPTION\_NOTIMEOUT)).as(Thing.class);
for (Thing thing : things) {
   ... // do something
}

Mais désormais, c'est votre rôle de clore le curseur ! (bon ok, si vous parcourez le curseur en entier, le serveur fermera aussi le curseur, mais quand même)

Or MongoCursor qui est désormais renvoyé à partir de Jongo 1.2 implémente Closeable. A vous de fermer le curseur, ou bien d'utiliser un try-with-resource :

try (MongoCursor things = things.find().with(c -> c.addOption(QUERYOPTION\_NOTIMEOUT)).as(Thing.class)) {
	for (Thing thing : things) {
	   ... // do something
	}
}

Ce sera tout pour ce billet. Si ce n'était pas déjà le cas, vous avez désormais des notions sur les curseurs dans le monde relationnel et vous comprenez comment cela fonctionne avec Mongo. Et si vous utilisez Jongo, vous avez un aperçu de la façon dont vous pouvez l'utiliser pour ne pas risquer de fuite de curseurs
