---
id: "1222"
title: "Vers l'infini et au-delà"
description: "[![tumblr_lw0g09a2hf1qaz5oho1_500[1]](/images/1ace7-tumblr_lw0g09a2hf1qaz5oho1_5001.png)](https://eventuallycoding.com/wp-content/uploads/2019/10/1ace..."
date: "2015-12-22"
categories: 
  - "waza"
tags: 
  - "backend"
  - "gatling"
  - "jmeter"
  - "loader-io"
  - "performance"
img: "1ace7-tumblr_lw0g09a2hf1qaz5oho1_5001.png"
cover: "cover4.jpg"
---

[![tumblr_lw0g09a2hf1qaz5oho1_500[1]](/images/1ace7-tumblr_lw0g09a2hf1qaz5oho1_5001.png)](https://eventuallycoding.com/wp-content/uploads/2019/10/1ace7-tumblr_lw0g09a2hf1qaz5oho1_5001.png)Une fois n'est pas coutume ce billet sera rédigé d'une manière plus collégiale que d'habitude car il reflète le travail de 3 personnes : [Nicolas Demengel](https://www.hopwork.fr/profile/nicolasgriseydemengel), [Maxime Gaudin](https://www.hopwork.fr/profile/maximegaudin) et moi-même. Récemment nous avons eu un petit passage télé au JT de France 2. Et pour une fois on s'est un peu posé la question de l'impact que cela pouvait avoir en terme de visites sur le site. Nous avions déjà eu des passages sur [itélé](https://blog.hopwork.fr/hopwork-sur-canal-et-i-tele/), [télématin](http://www.france2.fr/emissions/telematin/decouverte/demain-tous-free-lances_300559), BFM et nous n'avions pas vraiment anticipé. Mais cette fois c'était un peu l'occasion de travailler sur les performances du site et de vérifier que nous pouvions tenir un pic de charge. Et nous avons eu quelques surprises.

Spoil : pour tout vous dire, nous n'avons pas vraiment été jusqu'à l'infini et au-delà :)

## Loader.io

Première étape, nous avons essayé d'estimer le nombre de visiteurs simultanés que nous pouvions supporter sur 3 pages très identifiées : la page d'accueil, un résultat de recherche et une page de visualisation d'un profil. C'est le type de pages qui sont susceptibles d'être vus lors d'un pic d'affluence. Pour cela nous avons utilisé [loader.io](https://loader.io/) qui permet d'attaquer le site à partir de plusieurs endroits dans le monde avec des scénarios assez simplistes, ici de simples demandes d'affichages des pages. Loader.io a l'avantage de demander un setup assez simple, de visualiser l'évolution des temps de réponse en fonction du nombre d'utilisateurs provenant de différentes origines.

Premier essai, avec 250 utilisateurs simultanés sur une minute de temps nous constations déjà des erreurs serveurs et de nombreux logs anormaux dans logentries. Les logs étaient cependant assez rapides à analyser, nous n'avions tout simplement **pas dimensionné correctement** le nombre de threads tomcat, nombre de threads mongo etc...

Autant vous dire que nous étions loin de l'infini...

[![image-2015-12-05-14-55-57-179](/images/ea8bf-image-2015-12-05-14-55-57-179.png)](http://eventuallycoding.com/wp-content/uploads/2015/12/ea8bf-image-2015-12-05-14-55-57-179.png)

 

Une fois cette phase de dimensionnement solutionné, la barre des 250 utilisateurs simultanés a pu être franchi pour atteindre 700. Mais encore une fois, avec à peine 700 utilisateurs simultanés sur une minute de temps, le temps de réponse augmentait de façon linéaire. La moyenne passait à plus de 20 secondes de chargement pour des pics a 50secs ! Alors que le temps unitaire de consultation était assez faible. C'est en général symptomatique d'un point de contention quelque part dans votre application.

J'avoue, le moral en prend un coup, vous avez en souvenir [le challenges USI 2011](https://sites.google.com/a/octo.com/challengeusi2011/) où les participants tentaient de passer 1 milliards d'utilisateurs et vous plafonnez à un malheureux 250...

## Session de travail en local

A partir de cette étape nous avons commencé à travailler en local. Pour ce faire nous avons utilisé jMeter et lancé l'application sur nos machines de devs. Une des techniques que j'utilise bien souvent dans ce type de cas de figure c'est de récupérer des [threads dumps](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/geninfo/diagnos/using_threaddumps.html) à intervalle régulier. Un thread dump est une sorte de photo de l'activité des différents threads de votre application à un instant donné. Il est possible d'avoir cette photo via des outils comme **intellij**, **jvisualvm**, **yourkit** ou en ligne de commande via un **kill -3** Si vous avez des lenteurs il y a de fortes chances qu'avec plusieurs photos vous débusquiez les bouts de code fautif très rapidement. Et c'est ce qui s'est passé.

[![td](/images/7e33f-td.jpg)](http://eventuallycoding.com/wp-content/uploads/2015/12/7e33f-td.jpg)

Dans ce thread dump nous observons que beaucoup de threads sont en état BLOCKED sur des bouts de code très similaires. Ces bouts de code sont liés à la résolution des EL (expression language) dans des JSP. Et après une petite investigation sur Google nous ne sommes pas les premiers à avoir été confrontés à ce souci. Dans [cet article d'Ebay](http://www.ebaytechblog.com/2013/01/04/tomcatjasper-performance-tuning/), ceux-ci expliquent que la résolution des EL passe par une série de resolvers assez coûteux dont l'un deux tente de faire un chargement de classes. Et dans le class loader Tomcat, ce chargement est réalisé dans une méthode synchrone. Très mauvaise idée sur des résolutions très fréquentes et pour de multiples clients. Heureusement ebay a poussé deux patchs. [L'un des deux existe déjà](https://bz.apache.org/bugzilla/show_bug.cgi?id=53896) dans tomcat 8 mais [le second n'a pas été intégré](https://bz.apache.org/bugzilla/show_bug.cgi?id=54239). Nous l'avons donc réintégré dans notre code base et porté pour Tomcat 8 et Spring Boot (merci Nico, le boulot n'était pas trivial). Le principe global de ces deux patchs c'est :

1. d'optimiser l'utilisation des résolveurs (c'est désormais dans la base de code de Tomcat)
2. de remplacer des résolutions d'EL simples par du code Java lors de la transformation JSP vers classe java.

Une fois cette première étape franchi, un nouveau jeu de test nous a permis d'isoler un autre gros frein, l'utilisation de la balise c:url dans les jsp. [![td2](/images/c1e9e-td2.jpg)](http://eventuallycoding.com/wp-content/uploads/2015/12/c1e9e-td2.jpg)

Ces balises déclenchent des appels à des recherches de ressources dans le classpath et notamment dans les jars de l'application.

Dans une grande partie de notre code ces appels sont inutiles et ont pu être supprimés mais ils sont nécessaires à quelques endroits pour les ressources statiques car l'utilisation de c:url nous permet de gérer le versionning automatique des noms de fichiers. Cependant on peut demander à Spring de cacher le résultat des appels à c:url, ce que nous avons donc fait.

## Résultats

Une fois ces optimisation réalisé, nous avons enfin pu passer le cap des 1000 voire 4000 utilisateurs simultanés sur une minute de temps pour la page d'accueil. Et nous n'avons pas tenté d'aller plus haut pour l'instant. L'infini attendra un peu. Les pics de temps de 50 secondes ont disparu pour désormais avoir des temps moyen de 400ms bien plus acceptables.

Certains trouveront ça faible, ça laisse en tout cas un peu de marge pour voir venir et ce sera un problème de riche lorsque nous devrons gérer 10 000 visiteurs par minutes.

L'autre gros impact que nous n'avions pas anticipé c'est que nous avons gagné 10 points sur google page speed, sans trop savoir pourquoi malheureusement. Mais c'est certainement lié à nos différentes optimisations.

[![pagespeed](/images/e526d-pagespeed.jpg)](http://eventuallycoding.com/wp-content/uploads/2015/12/e526d-pagespeed.jpg)

Ce qu'il faut en retenir, c'est qu'il est généralement peu utile de s'attaquer à la lecture du code pour tenter de faire des optimisations à l'aveugle. Ici la majorité des soucis n'étaient pas triviaux au premier abord. Bien sûr nous avons aussi détecté des petites optimisations sur quelques bouts de code que nous n'avons pas décrits ici mais celles-ci, bien que très bénéfiques, étaient négligeables par rapport aux autres problèmes majeurs décrits plus haut.

La méthode pour nous a donc été :

- de bencher l'existant pour relever les mesures anormales
- de prendre des thread dumps pour repérer les bouts de codes fautifs
- de traiter les problèmes dans l'ordre du plus important au moins important
- de remesurer pour valider la résolution (si vous sautez cette étape c'est un peu comme si vous n'aviez rien fait)

Et pour finir nous avons aussi automatisé la détection de régression en utilisant Gatling et Jenkins afin de mesurer et détecter les temps de réponse chaque nuit pour vérifier que nous n'introduisions plus de nouveaux problèmes de performance sur les pages que nous avons déjà traitées.
