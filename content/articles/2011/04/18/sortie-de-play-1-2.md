---
id: "313"
title: "Sortie de Play 1.2 !"
description: "[![](/images/play.png \"play\")](http://eventuallycoding.com/wp-content/uploads/2011/04/play.png)

Je vous avais déjà parlé de Play dans [un précédent b..."
date: "2011-04-18"
categories: 
  - "waza"
tags: 
  - "play"
img: "play.png"
cover: "cover3.jpg"
---

[![](/images/play.png "play")](http://eventuallycoding.com/wp-content/uploads/2011/04/play.png)

Je vous avais déjà parlé de Play dans [un précédent billet](http://hakanai.free.fr/index.php/jouons/). J'ai utilisé ce super framework sur quelques développements maisons et plus récemment sur le site [lesZindeps.fr](http://www.leszindeps.fr/). Si vous ne le connaissez pas, je vous conseille fortement d'y jeter un oeil.

Et justement, la semaine dernière, Play 1.2 est sorti dans les bacs !

Si vous voulez plus d'infos, la release note est [ici](http://www.playframework.org/documentation/1.2/releasenotes-1.2).

Parmi les nouveautés on remarquera :

- un grand effort sur l'asynchronisme : les Promises, les WebSockets etc...
- un mécanisme d'update de base de données intégré (qui semble malheureusement très lié à la base de données par contre)

Mais finalement ce sont deux petites fonctionnalités qui m'auront le plus intéressé dans cette version :

- l'amélioration du runner de test qui permet enfin de jouer ces tests sous Eclipse et d'intégrer les rapports avec un outils d'intégration continue
- l'utilisation de H2 comme base de test qui permet notamment d'avoir un petit phpmyadmin très simplifié pour consulter et modifier la base

Une petite partie ?
