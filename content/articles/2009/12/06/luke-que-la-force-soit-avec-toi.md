---
id: "139"
title: "Luke, que la force soit avec toi !"
description: "Vous connaissez [Lucene](http://lucene.apache.org/java/docs/ \"Lucene\") ? Non ? Dans ce cas je vous invite fortement à découvrir cette API utilisé dans..."
date: "2009-12-06"
categories: 
  - "waza"
tags: 
  - "java"
  - "lucene"
img: "ouverturefichier.png"
cover: "cover7.jpg"
---

Vous connaissez [Lucene](http://lucene.apache.org/java/docs/ "Lucene") ? Non ? Dans ce cas je vous invite fortement à découvrir cette API utilisé dans de nombreux projets passant de Jira à LinkedIn. Cette API de recherche full-text permet de maintenir des index textuels très puissants. Sa [récente intégration](http://docs.jboss.org/hibernate/stable/annotations/reference/fr/html/lucene.html "Hibernate et Lucene") avec Hibernate devrait d'ailleurs la populariser encore plus.

Et parmi les outils autour de Lucene, je vous invite à découvrir [Luke,](http://www.getopt.org/luke/ "Luke") et que la force soit avec vous (je sais elle était assez facile celle là...).

_**"Mais Luke c'est quoi au juste ?"**_

Luke c'est tout simplement un outils de visualisation des index Lucene.

_**"Et ça sert à quoi ?"**_

Hum, si vous avez déjà bossé avec des bases de données, et j'imagine que c'est le cas, vous avez surement eu le besoin de visualiser votre base de données sans passer par votre application. Vous avez utilisé des Toad, PhpMyAdmin, Sybase central etc... Eh bien Luke c'est l'équivalent pour un index Lucene.

_**"Ok, et çà se trouve où ? Ça se présente comment ?"**_

Deux sites sont disponibles :

- L'ancien site : [http://www.getopt.org/luke/](http://www.getopt.org/luke/ "La menace fantome")
- Le nouveau : [http://code.google.com/p/luke/](http://code.google.com/p/luke/ "L'attaque des clones")

Personnellement j'aime bien l'ancien site car il y a un lien [jnlp](http://www.getopt.org/luke/luke.jnlp "Luke via JavaWebStart") ce qui permet de lancer Luke en ligne via Java Webstart directement.

Prenons un exemple, je lance le logiciel. Une fois lancé j'ai la possibilité de choisir un répertoire où se trouve un index Lucene (ici un index créé par Jira) :

![ouverturefichier](/images/ouverturefichier.png)

Une fois ouvert j'ai à disposition un ensemble d'outils bien pratique : vue générale, parcours des documents, recherche Lucene etc...

![ouverturefichier](/images/ouverturefichier.png) ![browse](/images/browse.png)

Le reste je vous le laisse découvrir, c'est simple mais bien pratique lorsqu'on travaille avec Lucene.
